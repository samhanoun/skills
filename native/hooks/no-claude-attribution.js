// PreToolUse hook for Bash and PowerShell: refuses git/gh commands that would
// publish Claude attribution on GitHub (commit trailers, PR bodies, PR comments).
// Wired in ~/.claude/settings.json under hooks.PreToolUse.
const fs = require("fs");
const path = require("path");

// Commands that publish text: commits, PR/issue writes, GitHub API writes.
const PUBLISH =
  /\bgit(?:\.exe)?\b[^|;&\r\n]*\bcommit\b|\bgh(?:\.exe)?\s+(?:pr|issue)\s+(?:create|comment|edit|review|merge)\b|\bgh(?:\.exe)?\s+api\b.*(?:\s-[fF]\s|--(?:raw-)?field\b|--input\b|--method\s+(?:POST|PATCH|PUT)\b|-X\s*(?:POST|PATCH|PUT)\b)/is;

const ATTRIBUTION =
  /co-authored-by:\s*claude|claude-session:|generated (?:with|by) \[?claude code|noreply@anthropic\.com/i;

// Files whose content gets published: --body-file f, git commit -F f, --file f, --input f, key=@f
const FILE_ARGS =
  /(?:--body-file|--file|--input|(?<=\s)-F)[\s=]+(?:"([^"]+)"|'([^']+)'|(\S+))|=@(?:"([^"]+)"|'([^']+)'|(\S+))/g;

let raw = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => (raw += chunk));
process.stdin.on("end", () => {
  let input;
  try {
    input = JSON.parse(raw);
  } catch {
    return; // unreadable payload: let the command run
  }
  const command = String(input?.tool_input?.command ?? "");
  if (!PUBLISH.test(command)) return;

  let text = command;
  for (const match of command.matchAll(FILE_ARGS)) {
    const file = match.slice(1).find(Boolean);
    if (!file || file === "-") continue;
    try {
      text += "\n" + fs.readFileSync(path.resolve(input.cwd || process.cwd(), file), "utf8");
    } catch {
      // not a readable file (e.g. a gh -F key=value field): ignore
    }
  }
  if (!ATTRIBUTION.test(text)) return;

  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "deny",
        permissionDecisionReason:
          "Blocked by ~/.claude/hooks/no-claude-attribution.js: this command would publish Claude attribution " +
          '(Co-Authored-By: Claude, Claude-Session, "Generated with Claude Code" or noreply@anthropic.com). ' +
          "The user never wants these on GitHub. Remove those lines and run the command again.",
      },
    })
  );
});
