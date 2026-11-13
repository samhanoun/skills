---
name: openai-developers-setup
description: Use during OpenAI Developers post-install onboarding to set up API access, check for optional API credits, and verify a first Responses API request.
---

# Get started with OpenAI Developers

The host offers this setup after installation. Briefly introduce the setup and continue in the current conversation when it started there.

## Choose a key

In Codex, discover and call the OpenAI Developers MCP `choose_openai_api_key_setup` tool with `{}`. The form presents the choices; do not repeat them in chat. Continue only after a confirmed choice. If the form is unavailable, canceled, or returns no valid choice, stop.

- **Create an API key:** Treat this as the user's request for a new key. Follow the bundled [openai-platform-api-key skill](../openai-platform-api-key/SKILL.md) without asking again whether to create or reuse a key.
- **I have an API key configured:** Check the process environment and likely workspace env files with the helper below. Use a file the user names if applicable. If no key is found, offer secure key setup and wait for their choice.
- **Skip:** Skip API-key setup and continue to the promo check.

Never ask the user to paste a key into chat.

## Claim optional API credits

1. Call `preview_api_credit_promo` with `{}` and wait for its result before starting discovery. Continue the claim only if `eligible` is true and `offer` is present. Say “You can claim an estimated {amount} in API credits now.” Format `offer.claimable_credit_amount_usd` in the returned currency. If the offer includes an expiry, add “Those credits expire on {date}.”
2. Call `discover_api_orgs` with `{}`. If `destinations` is empty, tell the user there is no selectable API organization and stop the claim.
3. If `discover_api_orgs` returns one or more destinations, call the local MCP tool `mcp__openai_api_key_local_confirmation__confirm_api_credit_promo_org` next. Pass the returned list unchanged in its `destinations` argument. This opens the native org picker, even for a single org. Proceed only if the tool returns `status: "approved"` and `link_arguments`. Never substitute a generic question, chat reply, or automatic selection for picker approval.
4. Call `link_api_org` with the returned `link_arguments` unchanged. Do not assume the configured API key belongs to the selected org.

If linking times out, returns an uncertain response, or returns `delivery_result.outcome: "pending"`, retry at most once with the same `link_arguments`, provided the account and workspace are unchanged. Do not repeat confirmation or unlink to work around a conflict. After sign-out, sign-in, or an account/workspace switch, discard the promo context and restart from preview before another attempt.

Stop the claim if a tool is unavailable, confirmation is canceled or invalid, or an error persists. An auth or SSO denial requires restoring access before another attempt.

If preview requires a workspace owner, explain that it checked the selected ChatGPT workspace and could not determine eligibility. Offer to retry preview if the user switches to their personal workspace. Otherwise, continue onboarding with the promo check skipped.

Report the link outcome before moving on. Say whether linking succeeded, a link already existed (`ineligibility_reason: "already_linked"`), or the user skipped linking. Name the org when known. If linking failed, could not be attempted, or remains unconfirmed, say why.

- **Credit delivery.** After a link attempt, report the amount and expiry from `delivery_result` for `issued` or `already_issued`. Report no grant for `no_credit` and unconfirmed delivery for a pending or missing result.
- **Renewal.** For a confirmed active link with an original offer, give its estimated renewal credit using `offer.period_credit_amount_usd` and currency. Include the [API credits guide](https://developers.openai.com/api/docs/guides/chatgpt-api-credits) with confirmed delivery or enrollment.
- **Skipped eligible offer.** Say “You are eligible for free API credits through your ChatGPT subscription. Read more at <https://developers.openai.com/api/docs/guides/chatgpt-api-credits>.”

## Verify the API key with a haiku

If the user skipped API-key setup, say so and go to [Open the sidebar](#open-the-sidebar). Otherwise, tell them you’ll test their key by asking the Responses API for a haiku about building an app.

Run the bundled helper by absolute path with Node.js 18 or newer. If setup created a key, pass its saved file to `--env-file`. Without `--env-file`, the helper uses `OPENAI_API_KEY` from the process environment. Use `--check` to check for a plausible key without sending a request. Check likely workspace files such as `.env.local` and `.env` one at a time if needed, then use the same source for the request.

```bash
node "<plugin root>/skills/setup/scripts/verify-responses.mjs" --check --env-file "<env file>"
node "<plugin root>/skills/setup/scripts/verify-responses.mjs" --env-file "<env file>"
```

Never pass a key as an argument, print it, source an env file as shell code, or inspect a secret-bearing file with a command that could reveal it.

If `HTTPS_PROXY` or `https_proxy` is set, use an installed Node runtime whose `--help` lists `--use-env-proxy` and set `NODE_USE_ENV_PROXY=1` for the request. Preserve the inherited proxy settings without printing them. If a suitable runtime or network access is unavailable, explain what is needed; request network-capable execution only for the verification request.

If the request fails, use the returned error and the bundled [openai-api-troubleshooting skill](../openai-api-troubleshooting/SKILL.md). Retry transient failures with bounded backoff and honor `Retry-After`. Explain any action the user needs to take. Do not change the user's account, credentials, or model without authorization.

On a completed Responses result with text, tell the user their key worked and show the returned haiku. Otherwise, report why verification could not be confirmed.

## Open the sidebar

On supported Codex surfaces, call OpenAI Platform’s `open_dashboard` with `{}` as the last tool call. If it opens, close with “Keep building with sample prompts in the OpenAI Developers Plugin Sidebar.” Otherwise, explain how to open it manually.
