import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const API_URL = "https://api.openai.com/v1/responses";
const MODEL = "gpt-6-luna";
const PROMPT = "write me a haiku about building an app with the OpenAI API";
const KEY_PATTERN = /^sk-[A-Za-z0-9_-]+$/;

// Read literals only; in particular, never execute shell syntax from an env file.
function keyFromEnvFile(contents) {
  let value = "";
  for (const line of contents.split(/\r?\n/u)) {
    const match = line.match(/^\s*(?:export\s+)?OPENAI_API_KEY\s*=\s*(.*?)\s*$/u);
    if (!match) continue;
    const raw = match[1];
    const quoted = raw.match(/^(["'])([^"']*)\1\s*(?:#.*)?$/u);
    value = quoted ? quoted[2] : raw.replace(/\s+#.*$/u, "").trim();
  }
  return value;
}

function redact(value, key) {
  if (typeof value !== "string") return undefined;
  return value
    .split(key).join("[redacted]")
    .replace(/sk-[A-Za-z0-9_-]+/gu, "[redacted]")
    .slice(0, 1000);
}

function retryAfterSeconds(value) {
  if (value == null) return undefined;
  if (/^\d+$/u.test(value)) return Number(value);
  const date = Date.parse(value);
  return Number.isNaN(date) ? undefined : Math.max(0, Math.ceil((date - Date.now()) / 1000));
}

export async function verifyResponses({
  environment = process.env,
  envFile,
  check = false,
  fetchImpl = globalThis.fetch,
} = {}) {
  let key = environment.OPENAI_API_KEY ?? "";
  if (envFile !== undefined) {
    try {
      key = keyFromEnvFile(await readFile(envFile, "utf8"));
    } catch {
      return { status: "key_file_unreadable" };
    }
  }
  key = key.trim();
  if (!KEY_PATTERN.test(key)) return { status: "key_missing" };
  if (check) return { status: "key_present" };

  let response;
  try {
    response = await fetchImpl(API_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: MODEL,
        input: PROMPT,
        reasoning: { effort: "none" },
        max_output_tokens: 128,
        store: false,
      }),
      redirect: "error",
      signal: AbortSignal.timeout(60_000),
    });
  } catch (error) {
    const code = error?.cause?.code;
    return {
      status: "network_error",
      ...(typeof code === "string" && /^[A-Z0-9_]+$/u.test(code) ? { code } : {}),
    };
  }

  const body = await response.json().catch(() => null);
  if (!response.ok) {
    const error = body?.error ?? {};
    const retryAfter = retryAfterSeconds(response.headers.get("retry-after"));
    return {
      status: "api_error",
      http_status: response.status,
      code: redact(error.code, key),
      type: redact(error.type, key),
      message: redact(error.message, key),
      ...(retryAfter === undefined ? {} : { retry_after_seconds: retryAfter }),
    };
  }
  if (body === null) return { status: "invalid_response", http_status: response.status };
  const text = Array.isArray(body?.output)
    ? body.output.flatMap((item) =>
        item?.type === "message" && Array.isArray(item.content)
          ? item.content.filter((part) => part?.type === "output_text" && typeof part.text === "string").map((part) => part.text)
          : [],
      ).join("\n").trim()
    : "";
  if (body?.status !== "completed" || !text) {
    return {
      status: "no_text",
      response_status: redact(body?.status, key),
      reason: redact(body?.incomplete_details?.reason, key),
    };
  }
  return { status: "ok", model: MODEL, output_text: redact(text, key) };
}

function parseArguments(args) {
  let check = false;
  let envFile;
  for (let index = 0; index < args.length; index += 1) {
    if (args[index] === "--check" && !check) {
      check = true;
    } else if (args[index] === "--env-file" && envFile === undefined && args[index + 1]) {
      envFile = args[++index];
    } else {
      return null;
    }
  }
  return { check, envFile };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = parseArguments(process.argv.slice(2));
  const result = args ? await verifyResponses(args) : { status: "invalid_arguments" };
  process.stdout.write(`${JSON.stringify(result)}\n`);
  if (result.status !== "ok" && result.status !== "key_present") process.exitCode = 1;
}
