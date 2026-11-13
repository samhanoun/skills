# Responses API Guidance

Use this reference to assess relevant Responses API capabilities when migrating or improving an existing LLM integration. Review each section against the application, identify applicable improvements and limitations, and clarify material product decisions with the developer before implementing changes.

## Model Selection

When an approved migration requires choosing an OpenAI model, consult the current OpenAI developer documentation and its [model-selection guide](https://developers.openai.com/api/docs/guides/model-selection). Recommend a concrete, supported model and explain its suitability for each distinct workload; the same model may serve several workloads. Confirm material model changes with the developer.

- For smaller, faster, or lower-cost workloads, prefer an appropriately efficient model from the current OpenAI offering.
- For workloads that need a balance of speed, cost, and performance, prefer an appropriate mid-tier model.
- For the most demanding workloads, prefer one of the highest-capability current OpenAI models.
- For runtime-selected models, provide usable configuration examples and preserve independent settings and overrides. Document a request-control policy for the effective model after configuration and caller overrides, using current model/provider/SDK documentation. Apply agreed controls, including reasoning effort and verbosity, where supported; omit unsupported fields and test the default model plus supported and unsupported overrides.

Preserve an existing OpenAI model when the migration does not require changing it, and confirm any material model change or different capability tier with the developer.

## Instruction File Naming

Preserve existing instruction files, including `CLAUDE.md` for retained tooling. Add an `AGENTS.md` compatibility file only with explicit developer approval, without renaming or rewriting existing files.

## Migrate from Chat Completions to the Responses API

Prefer the Responses API for OpenAI model integrations: it is the recommended API for current model capabilities, reasoning, tools, and multi-turn workflows. Preserve existing product behavior and provider compatibility while migrating.

## Streaming

Consider streaming Responses API output when it improves responsiveness, time to first visible output, or the user experience without requiring a disproportionate implementation change.

- Preserve existing streaming behavior when the application already depends on it.
- Add supported streaming to interactive workflows when it improves responsiveness and the developer agrees to any meaningful change in user-facing behavior.
- Adapt typed streaming events to existing rendering; show approved reasoning summaries or commentary, execute only completed tool calls, and persist only successfully completed assistant turns.
- Avoid streaming when the existing workflow requires wholly buffered output or the additional integration complexity outweighs the benefit.
- Consider implementing this higher-lift change as a separate follow-up stage or, when authorized, a stacked pull request after lower-lift migration work.

## WebSocket Mode

Consider Responses API WebSocket mode for long-running or tool-heavy workflows that benefit from maintaining a persistent connection and sending incremental follow-up inputs.

- Preserve HTTP or streaming behavior when WebSocket mode would not improve the application.
- Handle structured WebSocket `error` events and terminal `response.failed` or `response.incomplete` events; surface their available error codes or incomplete reasons.
- Follow the selected provider's concurrency limits. [OpenAI WebSocket mode](https://developers.openai.com/api/docs/guides/websocket-mode) supports concurrent `stream_id` lanes with sequential requests within each lane; route interleaved events by lane. Providers without multiplexing require separate connections for parallel runs.
- Apply the provider's documented connection- or lane-local cache invalidation rules after a failed turn; preserve unaffected lanes. Resume from a stored response only when retention is permitted; with `store: false` or Zero Data Retention, omit an unavailable ID and replay the complete locally preserved conversation for that run.
- Reconnect after transport failures or the 60-minute connection limit; treat disconnection before `response.completed` as interrupted, preserve already-delivered output and tool-call state, and retry without duplicating visible output or side-effecting tool executions.
- Consider implementing this higher-lift change as a separate follow-up stage or, when authorized, a stacked pull request after lower-lift migration work.

## Data Privacy and Residency

### Zero Data Retention

Determine whether the developer requires Zero Data Retention or other data-retention controls before choosing storage, conversation state, caching, tools, or background execution.

- Confirm that selected endpoints, features, and model settings are compatible with the required retention policy.
- Assess response storage, cache retention, provider abuse-monitoring storage, and application logs separately; `store: false` alone does not establish Zero Data Retention.
- Set `store: false` when Zero Data Retention or another stateless requirement applies.
- Preserve existing privacy and storage expectations rather than enabling server-side state by default.

### Data Residency

Determine whether the application must retain or process customer data in a specific jurisdiction, including Europe, the United States, or applicable Asia-Pacific regions.

- Verify project configuration, regional endpoints, and regional support for the selected model and features.
- Confirm any residency or regional-processing tradeoffs with the developer before changing behavior.

## Processing Tiers

Inspect every distinct LLM or Responses API use case in the codebase, and assess which processing tiers are appropriate for each workload's latency, availability, cost, frequency, and execution requirements.

- **Standard:** Use ordinary pay-as-you-go processing by default.
- **Priority:** Ask whether the developer wants faster, more predictable responses at a higher price, particularly for latency-sensitive user-facing features.
- **Flex:** Inspect the application for lower-priority workloads that can tolerate slower responses or temporary unavailability in exchange for reduced cost.
- **Batch:** Identify asynchronous, non-urgent jobs that can complete within 24 hours and benefit from discounted batch processing.
- **Reserved:** For enterprise customers with provisioned capacity, determine whether eligible Standard or Priority traffic should use that reservation; Batch and Flex traffic are excluded.

For scheduled, background, batch, or benchmark workloads with distinct processing needs, ask the developer about an appropriate tier rather than retaining defaults silently. Confirm pricing, preferences, model availability, and retention or residency constraints before changing a tier.

Consult the current [OpenAI API pricing and processing guidance](https://openai.com/api/pricing/), [Priority processing documentation](https://openai.com/api-priority-processing/), and [Reserved Tier documentation](https://openai.com/api-reserved-tier/) for implementation details and current availability.

## Prompt Caching

Audit prompt structure, repeated-prefix reuse, caching configuration, and cached-token accounting; assess workload benefit and implement applicable, supported caching improvements within the approved scope.

### Prompt Cache Keys

For models earlier than GPT-5.6, set a stable `prompt_cache_key` for reusable prefixes, using supported provider or framework pass-throughs when necessary; avoid keys or prefixes that fragment compatible traffic.
For GPT-5.6 and later, omit new cache keys by default without raising this as a developer decision; preserve existing keys and established separate-accounting requirements.

### Extended Cache Retention for Earlier Models

For models earlier than GPT-5.6, check whether extended prompt-cache retention is supported and appropriate; use `prompt_cache_retention` where the model and the developer's data-retention policy permit it.

### Explicit Cache Breakpoints for GPT-5.6 and Later

For GPT-5.6 and later models, apply supported explicit cache breakpoints to reusable prefixes, using provider metadata or framework pass-throughs when necessary.

- Place breakpoints after reusable content, not after request-specific values.
- Choose implicit or explicit-only caching based on whether later conversation content should also be cached; choosing implicit mode does not itself decline applicable, supported breakpoints.

### Prompt Cache Diagnostics

For GPT-5.6 and later supported models, recommend `prompt_cache_options.comparison_response_id` on Responses API requests expected to reuse a prior response's cacheable prefix.

- Plan how the existing workflow can obtain and carry forward a suitable recent completed response ID from the same organization, particularly in agent loops; use the parameter wherever feasible and supported by the selected integration.
- If no suitable comparison ID is available, or the developer retains a framework that cannot expose the ID or pass through the parameter, record the specific limitation. Check response metadata and supported pass-throughs before concluding that the integration cannot support it.

See [Prompt cache diagnostics](https://developers.openai.com/api/docs/guides/prompt-caching/diagnostics).

## State Management

Choose state ownership based on retention requirements, existing architecture, and developer preferences.

- Ask whether Zero Data Retention or another stateless requirement applies.
- For stateless workflows, set `store: false`; preserve and replay complete typed messages, phases, reasoning items, tool calls, and outputs in their original order across every application path.
- When server-side storage is permitted and approved, consider `previous_response_id`.
- Never introduce retained state without confirming privacy compatibility.

### Instruction Persistence Gotcha

Top-level `instructions` are scoped to an individual response and are not automatically carried forward when chaining with `previous_response_id`.

- Prefer representing durable developer or system instructions as conversation input items when that fits the application, and preserve them in the conversation history.
- When using top-level `instructions` instead, resend them on every request that depends on them.
- Verify that stateless replay and stored-response chaining both preserve the application's intended instructions and behavior.

## Reasoning

Configure reasoning behavior explicitly based on the selected model, the existing application, and the developer's product requirements.

### Encrypted Reasoning Items

Preserve and replay encrypted reasoning items across stateless turns and tool calls.

- When stateless replay needs encrypted reasoning, explicitly request `include: ["reasoning.encrypted_content"]` on supported requests and verify that returned items are preserved and replayed.
- Preserve complete typed output items, original ordering, encrypted payloads, and tool-call identifiers.
- Do not replace original reasoning items with summaries or reconstructed text.

### Reasoning Effort

Explicitly set `reasoning.effort` on supported requests rather than merely forwarding an optional caller value.

- Preserve an existing reasoning-effort setting when the application's current model calls already establish the intended behavior.
- Otherwise, ask the developer which reasoning-effort level fits the workload before selecting a value.
- Explain the quality, latency, and cost tradeoffs when needed; supported values may include `none`, `minimal`, `low`, `medium`, `high`, and `xhigh`, depending on the model.
- Verify that the selected model and provider support the agreed setting.
- When the application supports changing reasoning effort between responses, use [`configuration_update`](https://developers.openai.com/api/docs/guides/reasoning?api-mode=responses#change-reasoning-mid-conversation) on supported GPT-6 standard single-agent paths, keep the original request-level `reasoning.effort` unchanged, and follow the documented history and compaction constraints.

### Reasoning Preservation

For GPT-5.6 and later models, generally prefer `reasoning.context: "all_turns"` to preserve useful reasoning across the conversation. For earlier models, generally prefer `current_turn` when the model supports this setting.

- Use `all_turns` when earlier reasoning improves continuity; replay the complete required history for stateless requests.
- Use `current_turn` when product requirements, context costs, or developer preferences make older reasoning unnecessary.
- Account for context size, latency, privacy requirements, and developer preferences.

### Reasoning Summaries and Tool-Call Preambles

Configure reasoning summaries and tool-call preambles according to desired transparency and model chattiness.

- Select an appropriate `reasoning.summary` option, such as `auto`, `concise`, or `detailed`, when summaries are relevant to the product.
- Preserve existing user-facing behavior unless the developer agrees to a change.
- Distinguish reasoning summaries and preambles from assistant message phases and `text.verbosity`.
- Verify model, provider, and SDK support.

## Verbosity

Explicitly set `text.verbosity`, rather than merely forwarding an optional caller value, on supported Responses API calls based on desired response length, user experience, latency, and cost.

- Preserve an existing verbosity preference when the current integration already establishes one.
- Otherwise, explicitly ask the developer whether `low`, `medium`, or `high` should be used before choosing a verbosity setting.
- Verify that the selected model, provider, and SDK support the agreed verbosity setting.
- Distinguish response verbosity from reasoning effort, reasoning summaries, and tool-call preambles.

## Maximum Output Tokens

Consider `max_output_tokens` when an existing limit, workload requirement, or product behavior makes the output budget relevant.

- Preserve an existing output-token limit when it remains appropriate for the migrated integration.
- Do not introduce a limit solely because the Responses API supports one.
- Use judgment about whether an absent or unsuitable limit merits discussion with the developer.
- Remember that the limit includes both visible output tokens and reasoning tokens.

## Assistant Message Phases

Explicitly preserve assistant `phase` values, including `commentary` and `final_answer`, on every assistant message included or replayed in a Responses API request whenever the model and integration support them.

- Keep complete structured assistant outputs rather than reducing them to plain text.
- Test intermediate commentary and tool-loop behavior when relevant.

## Context Compaction

Assess OpenAI-native Responses compaction against expected context growth and existing history management; implement it when supported and needed for the approved workload.

- Confirm changes to the compaction strategy with the developer.
- Configure `context_management` with a `type: "compaction"` entry and its nested `compact_threshold`, or use standalone compaction where appropriate.
- Preserve encrypted compaction items during manual state management.
- OpenAI server-side compaction supports Zero Data Retention with `store: false`; independently verify retention compatibility for other providers and their selected features.
- Select model-specific thresholds from current official guidance or the open-source Codex harness.

## Structured Outputs

Use Responses API structured outputs where the product requires machine-readable or schema-constrained results.

- Preserve schemas, validation strictness, parsing behavior, and error handling.
- Verify model and provider compatibility and add focused schema tests.
- Do not impose structured outputs on unrestricted-text workflows.

## Tools

Choose tool configuration, including approved Responses-native image generation, according to the application's existing capabilities, execution model, and developer-approved behavior.

### Tool Choice

Configure `tool_choice` when the application needs to control whether the model may choose tools automatically, must invoke a tool, or is restricted to specific tools.

- Preserve existing tool-selection behavior and application constraints.
- Ask the developer before changing whether tool use is optional, required, or limited to an approved set.

### Tool Search and Additional Tools

Consider `tool_search` for large or dynamic tool catalogs that benefit from deferred discovery.

- Load tools on demand rather than resending every available tool.
- Use developer-role `additional_tools` items when tools must become available at a specific conversation position.
- Preserve the exact position of those items during manual replay.
- Keep conversation history append-only and maintain stable cached prefixes.
- Avoid unnecessary tool-search complexity for small, fixed tool sets.
- Confirm tool-search adoption with the developer and, when appropriate and requested, implement it as a separate stage or stacked pull request.

### Parallel Tool Calls

Consider `parallel_tool_calls` when independent tools can execute concurrently without changing application behavior.

- Preserve required execution order, shared-state assumptions, approval boundaries, and side-effect controls.
- Ask the developer before enabling parallel execution when concurrency would materially change product behavior.

### Programmatic Tool Calling

Assess programmatic tool calling when supported models can beneficially coordinate tool invocations through code execution; implement it when applicable and approved.

- Verify model, provider, SDK, tool, and execution-environment support.
- Preserve permissions, approval boundaries, side-effect controls, and application behavior.
- Distinguish programmatic calling from ordinary parallel or sequential function calling.
- Test tool execution, results, failures, and changed approval behavior.

### Model-Aligned Tool Interfaces

Consider optional changes that bring custom tools closer to interfaces familiar to OpenAI models.

- Prefer conventional repository-search patterns such as `rg` where appropriate.
- Consider OpenAI's `apply_patch` tool or compatible patch-oriented editing.
- Consult official tool documentation and the open-source Codex harness.
- Treat tool redesign as higher-lift work requiring developer agreement and a separate stage or authorized stacked pull request.
