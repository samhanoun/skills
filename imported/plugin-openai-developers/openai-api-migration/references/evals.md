# OpenAI API Migration Evals

Use these tests to evaluate an installed `openai-api-migration` skill candidate. Each example has repository setup, developer context, a minimal skill-invocation prompt, and all of its task-specific pass criteria. The shared criteria apply to every example.

This is evaluation material for maintainers and reviewers, not operational guidance for a migration agent. Do not supply this document or its expected results to an agent while it performs a fixture migration.

## 1. Test setup and developer context

### Plugin and invocation

Select an installed `openai-api-migration` candidate that is available in your environment. Verify its resolved path and the exact invocation advertised by the skill catalogue, whether standalone or plugin-qualified; record its version or content digest. Replace `<skill-invocation>` in every prompt below with that literal invocation before starting. Do not infer an invocation from a package name or assume that this skill is publicly available in a particular plugin.

Set the assigned repository as the migration task's working directory before starting the test. Each example intentionally uses the same minimal prompt; the repository and developer context are supplied through setup, not by adding an expected implementation or grading checklist to the prompt.

### Repository preparation

- Prepare a fresh disposable repository from the matching pinned upstream source and scope below, or a verified copy of that fixture, for every attempt and comparison arm. Retain the upstream licence when selecting a subtree. Never migrate in a source fixture, reuse an earlier migrated solution, or substitute the upstream default branch for the pinned source. If the exact source is unavailable, report that setup blocker rather than selecting another revision.
- Each case identifies the upstream repository, pinned commit and source scope, plus the original evaluation library's frozen baseline commit/tree. Those local baseline hashes are provenance references, not commits to fetch from upstream. Record the actual starting revision and any preparation changes; the references do not establish current dependency availability or runtime behavior.
- The separate evaluation library is optional for an informal run of these examples. When using it for a canonical library run, follow its current `README.md`, `DEVELOPER.md`, and `EVALUATOR.md`, including host, registration, isolation, snapshot, and launcher requirements. Keep its skill/protocol snapshots and grading CSV outside the migration repository.
- Application model selection is part of the migration's product decisions and criterion applicability. The model running the migration or evaluation agent does not determine the application's target model; these cases do not impose a blanket GPT-5.6-or-later upgrade.

### Developer context shared by every case

- The developer's objective is an implemented API migration. If the migration agent asks whether the task is assessment-only or assessment followed by implementation, answer that it should assess and then implement. Do not volunteer this clarification before it is asked.
- Answer necessary material questions in character, briefly and consistently with the scenario and earlier answers. Do not volunteer a target architecture, solution, capability checklist, expected findings, or evaluation criteria. If the answer is discoverable from the repository, direct the migration agent to inspect it.
- For preferences not otherwise established, prefer additive, compatibility-preserving work covering all existing workflows within scope. Preserve functionality, public interfaces, configuration, providers, and tests unless replacement or removal is explicitly approved. Incremental work does not itself authorize dropping a required workflow.
- Record material questions, options/tradeoffs, and the developer's answer in visible evidence. The migration agent records its decisions in the migration ledger. Product decisions must come from the scenario and authorized developer interaction, not from hidden rubric answers.
- Application API checks default to offline/mocked operation. Before a live run, obtain and record the actual recipient's explicit authorization for that run to reuse an existing environment API key and make the necessary live requests with their usage charges; this document, an available key, or a simulated-developer answer grants no such permission. Without it, do not inspect key values or make live model-provider requests; public documentation retrieval remains allowed. Never disclose credentials. Do not obtain new keys or authorize additional providers without the actual user's approval. Report unavailable checks as blocked or not run, and distinguish mocked, assumed, unrun, and executed results; none becomes a pass merely because it was not run.
- A simulated developer cannot approve privileged/destructive actions, new credentials, extra spending or external effects, or expanded scope beyond its authorization. Preserve such requests as blocked/needs-attention outcomes for the actual operator.

### Role and evidence separation

The operator prepares the run and designates a human developer or separate clean-context developer role to answer product questions. For automated runs, the orchestrator neither migrates nor grades; the simulated developer supervises a clean-context migration child without inspecting code, skill instructions, or rubric. Give a simulated developer only the shared developer context above, the case's exact Developer scenario, its assigned identifiers, and any role-specific guide used by the selected protocol. Keep starting-situation summaries, reviewer notes, and criteria outside both the simulated developer's and migration agent's context, including when either asks for guidance. The migration child receives only its ordinary task, repository, installed skill and operational references, and developer answers. It does not receive this matrix, grading rows, earlier results, sibling workspaces, or migrated solutions.

Only after the migration child fully terminates and explicitly confirms completion does a separate clean-context evaluator inspect the completed repository, its assigned rubric rows, and safely linked visible evidence from the same attempt. A clarification, timeout, intermediate message, or waiting turn is not completion. The evaluator corroborates ledger claims with code/tests, does not inspect hidden reasoning, does not modify the repository, and does not send feedback to restart or repair the migration. Missing or unverified evidence leaves grading incomplete rather than permitting a guessed result or wider historical search.

### Informal execution steps

1. Choose a case, prepare its fresh repository, select the installed candidate, and record the starting revision, candidate path/version or digest, exact rendered prompt, and migration/evaluator model and reasoning settings. Worker models are separate from the application's target model.
2. Start a fresh migration context with that repository as its working directory. Keep this rubric, earlier results, sibling workspaces, migrated solutions, and historical memory out of that context; if the environment cannot provide that isolation, report the limitation instead of treating the attempt as valid.
3. Supply only the rendered minimal prompt and the run's actual API-usage authorization. The designated developer answers necessary questions using the shared developer context and case scenario; retain visible questions, decisions, tool results, and the final handoff without exposing secrets or hidden reasoning.
4. Wait for explicit migration completion, then freeze the resulting repository and handoff. Have a separate evaluator review the completed work and safely linked visible evidence against every shared G criterion and every T criterion for that case. Do not feed the rubric or grading feedback back into the migration attempt.
5. Record per-criterion results and evidence using the grading guidance below, plus any blocked, unrun, or incomplete checks. No separate runner, CSV, or app-specific launch tool is required for this informal review; it does not establish compliance with the separate library's execution protocol.

## 2. Shared pass criteria

**Every criterion G01–G11 applies to every example M01–M07.** The eleven general criteria are text-identical across the seven included source fixtures. They are reproduced once here, covering their 77 general CSV rows. The identifiers preserve each source `criterion_number`; task criteria below retain their own numbers within each fixture.

- **G01:** Added or updated relevant tests for the migration.
- **G02:** Followed the existing code style and conventions.
- **G03:** Preserved existing functionality and extended the application additively, unless the developer explicitly requested or approved replacing or removing existing functionality.
- **G04:** Explicitly configured verbosity on applicable Responses requests in accordance with the developer's requirements, preserved supported runtime overrides, and omitted the field for unsupported models. For runtime-selected models, documented and tested how support is determined.
- **G05:** Explicitly configured reasoning effort on applicable Responses requests in accordance with the developer's requirements, preserved supported runtime overrides, and omitted the field for unsupported models. For runtime-selected models, documented and tested how support is determined.
- **G06:** Opened or consulted official OpenAI developer documentation at least once during the migration.
- **G07:** Confirmed early in the task whether the developer wanted an assessment only or an assessment followed by implementation.
- **G08:** Explicitly considered Zero Data Retention or clarified it with the developer when not already clear from the codebase.
- **G09:** Confirmed in the final handoff that all tests passed.
- **G10:** Included a short usage example for any changed entry point or configuration.
- **G11:** Explained what changed in the final handoff to the developer.

These criteria are copied without silently relaxing their meaning. In particular, reporting an unrun or blocked suite accurately does not by itself satisfy G09. Preserve the distinction between migration completion, validation results, and grading completion.

## 3. Repository evaluation examples

### M01 - Basic direct Anthropic Messages application

**Setup**

- Fixture: `01-basic-anthropic-messages`.
- Starting situation: A single-request shell-command generator with shell selection, interactive input, command validation, clipboard copying, and exit behavior.
- Upstream repository: [timkitch/yt-ai-shell-command-generator](https://github.com/timkitch/yt-ai-shell-command-generator).
- Pinned upstream source: [`98b44027f3db570166602f0efa68f6b11925659e`](https://github.com/timkitch/yt-ai-shell-command-generator/tree/98b44027f3db570166602f0efa68f6b11925659e); scope `.`.
- Frozen library baseline: commit `5909918a244542cf2a94760829a3ed0d1b4f63f9`; tree `23fb0e31ec3adf447296b24413bb3f51528d8da2`.
- Developer scenario: Basic direct Anthropic Messages API. Use the shared developer context above; keep the starting-situation summary, reviewer notes, and criteria outside both the simulated developer's and migration agent's context.

**Reviewer setup notes:** The source scenario establishes a basic direct Anthropic Messages integration. If asked about product choices, resolve model/configuration preferences and any proposed changes to output limits or existing behavior; do not prescribe an implementation. A suitable prior response may not exist for this single-request workflow.

**Prompt**

```text
Use <skill-invocation>.
```

**Pass criteria**

All shared criteria **G01–G11** apply, together with every criterion below.

- **M01-T01:** Implemented command generation through the OpenAI Responses API rather than Chat Completions or an Anthropic-compatible endpoint.
- **M01-T02:** Selected an OpenAI model appropriate for the shell-command generation workload.
- **M01-T03:** Added and configured the OpenAI SDK dependency required by the migrated application.
- **M01-T04:** Read the OpenAI API key from configuration or environment variables without hard-coding credentials.
- **M01-T05:** Preserved the selected shell and user query in the command-generation request.
- **M01-T06:** Preserved the requirement that the model return only a shell command, without explanatory text.
- **M01-T07:** Correctly extracted generated command text from the Responses API response.
- **M01-T08:** Preserved the existing fallback for empty or invalid generated commands.
- **M01-T09:** Preserved shell selection, the interactive prompt loop, clipboard copying, and the existing exit behavior.
- **M01-T10:** Added focused mocked tests covering OpenAI command generation and invalid or empty response handling without requiring live API calls.
- **M01-T11:** Updated setup documentation to explain the OpenAI dependency, API-key configuration, and integration selection.
- **M01-T12:** Avoided introducing unnecessary WebSocket, tool-calling, compaction, or multi-turn conversation complexity into the single-request workflow.
- **M01-T13:** Reported a clear configuration error when the required OpenAI API key is missing.
- **M01-T14:** Trimmed surrounding whitespace from generated command text before validating or displaying it.
- **M01-T15:** Preserved the developer-selected output-token limit as the Responses-compatible maximum output-token parameter.
- **M01-T16:** Assessed how the approved workflow could obtain and carry forward a suitable recent completed response ID from the same organization. Used prompt_cache_options.comparison_response_id on eligible GPT-5.6-or-later supported Responses requests expected to reuse its cacheable prefix wherever feasible, including through supported framework pass-throughs. Otherwise recorded the absent suitable baseline or verified workflow/integration limitation, including the developer decision when retaining a limiting framework. A single-request workflow without a suitable prior response did not require a comparison.

### M02 - Advanced Anthropic agent with tools and MCP

**Setup**

- Fixture: `02-advanced-anthropic-agent`.
- Starting situation: The agents package from Anthropic Quickstarts, with synchronous and asynchronous interfaces, local and MCP tools, multi-turn history, prompt caching, and hosted-tool behavior.
- Upstream repository: [anthropics/anthropic-quickstarts](https://github.com/anthropics/anthropic-quickstarts).
- Pinned upstream source: [`8a49be4c995d45a09d9a1ad197e35c0727f1ffd8`](https://github.com/anthropics/anthropic-quickstarts/tree/8a49be4c995d45a09d9a1ad197e35c0727f1ffd8/agents); scope `agents/`.
- Frozen library baseline: commit `eeb871f0d639b504fd0381c9c4cef050153f0fed`; tree `a56327dcaf9b901d7a9e260eb362f8148fb39b3c`.
- Developer scenario: Advanced Anthropic agent with tools, MCP, history, and caching. Use the shared developer context above; keep the starting-situation summary, reviewer notes, and criteria outside both the simulated developer's and migration agent's context.

**Reviewer setup notes:** If asked, resolve material provider/integration choices, equivalents or limitations for existing hosted tools, retention and limits, and applicable higher-lift capabilities. Do not select transport, tool architecture, or stage approvals in advance.

**Prompt**

```text
Use <skill-invocation>.
```

**Pass criteria**

All shared criteria **G01–G11** apply, together with every criterion below.

- **M02-T01:** Implemented the agent loop with the OpenAI Responses API rather than Chat Completions or an Anthropic-compatible endpoint.
- **M02-T02:** Selected an OpenAI model appropriate for the agent's multi-turn, tool-using workload.
- **M02-T03:** Added and configured the OpenAI SDK and API-key handling without hard-coded credentials.
- **M02-T04:** Preserved the existing Agent interface, synchronous and asynchronous entry points, and configurable model settings.
- **M02-T05:** Preserved the system instructions and correctly mapped conversation history into Responses API input items.
- **M02-T06:** Preserved multi-turn agent execution until a final assistant response is produced.
- **M02-T07:** Correctly mapped existing local tool definitions into Responses API tools.
- **M02-T08:** Executed requested tools and returned each result with the originating tool-call identifier.
- **M02-T09:** Preserved multiple tool calls and their results without dropping calls, duplicating execution, or changing required ordering.
- **M02-T10:** Assessed programmatic tool-calling support and workload benefit for the selected model and approved integration, presented material tradeoffs when a developer decision was needed, and implemented it when applicable and approved. If implementation was genuinely inapplicable, recorded the capability or workload evidence or explicit developer decision. Required ordinary function-tool behavior remains applicable.
- **M02-T11:** Implemented programmatic tool calling as a separately reviewable stage or stacked pull request when the developer requested a pull-request workflow.
- **M02-T12:** Preserved MCP server connections and made their discovered tools available to the migrated agent loop.
- **M02-T13:** Assessed Anthropic-specific hosted web-search and code-execution tools, preserving equivalent functionality or clarifying unsupported behavior with the developer.
- **M02-T14:** Preserved complete conversation history across agent turns.
- **M02-T15:** Preserved model reasoning across agent turns when supported by the selected model.
- **M02-T16:** Included and replayed encrypted reasoning items when required by the selected state-management approach.
- **M02-T17:** Explicitly preserved assistant message phases on applicable replayed assistant items.
- **M02-T18:** Removed or adapted Anthropic-specific prompt-cache markers for the Responses API. Assessed support and useful breakpoint locations in reusable instructions, tool definitions, and conversation prefixes. Applied explicit breakpoints when supported and beneficial for the approved workload, unless the developer explicitly declined this optional optimization. Recorded the applicability decision.
- **M02-T19:** Assessed prompt-cache key support and prefix reuse for repeated agent-request prefixes. For models earlier than GPT-5.6, configured stable prompt-cache keys when the selected model and approved integration support them and the workload benefits, unless the developer explicitly declined this optional optimization. For GPT-5.6 and later, omitted new cache keys by default without raising this as a developer decision; preserved existing keys and established separate-accounting requirements. Recorded the applicability decision.
- **M02-T20:** Preserved accurate input, output, and cached-token usage accounting using Responses API usage fields.
- **M02-T21:** Removed or isolated the Anthropic-specific token-counting dependency from the OpenAI history path without breaking context tracking.
- **M02-T22:** Preserved appropriate output-token and context-window limits or clarified intentional changes with the developer.
- **M02-T23:** Assessed native Responses context-compaction support, expected context growth, and existing history management for long-running conversation history. Implemented native compaction when supported and needed for the approved workload; otherwise recorded a concrete reason it was unsupported or unnecessary, or an explicit developer decision declining the optional change.
- **M02-T24:** Considered supported Responses API WebSocket transport for the repeated tool loop and implemented it when appropriate and approved by the developer.
- **M02-T25:** Implemented WebSocket transport as a separately reviewable stage or stacked pull request when the developer requested a pull-request workflow.
- **M02-T26:** Preserved privacy and stateless replay requirements when selecting response storage, conversation continuation, caching, or WebSockets.
- **M02-T27:** Preserved existing configurable request overrides where they remain compatible with the OpenAI integration.
- **M02-T28:** Prevented Anthropic-specific beta headers from being sent to OpenAI requests.
- **M02-T29:** Removed or adapted request parameters unsupported by the selected OpenAI model.
- **M02-T30:** Added focused mocked tests for multi-turn responses, tool execution and replay, MCP integration, prompt caching, token accounting, and error handling.
- **M02-T31:** Updated application documentation to explain OpenAI setup, configuration, and any developer-approved provider-selection changes.
- **M02-T32:** Preserved concurrent execution of multiple tool calls when parallel execution is enabled.
- **M02-T33:** Returned an identifiable tool error when the model requests an unknown tool.
- **M02-T34:** Returned an identifiable tool error when an existing tool raises an execution exception.
- **M02-T35:** Preserved a safe fallback when exact model token counting is unavailable.
- **M02-T36:** Assessed how the approved workflow could obtain and carry forward a suitable recent completed response ID from the same organization. Used prompt_cache_options.comparison_response_id on eligible GPT-5.6-or-later supported Responses requests expected to reuse its cacheable prefix wherever feasible, including through supported framework pass-throughs. Otherwise recorded the absent suitable baseline or verified workflow/integration limitation, including the developer decision when retaining a limiting framework. Selected comparison responses for the relevant agent conversation.

### M03 - Basic OpenAI Chat Completions application

**Setup**

- Fixture: `03-basic-chat-completions`.
- Starting situation: A Flask/browser chat application with Server-Sent Events, incremental rendering, multi-turn conversation history, and reset behavior.
- Upstream repository: [openai/openai-quickstart-python](https://github.com/openai/openai-quickstart-python).
- Pinned upstream source: [`88fb67fe281e68c8cad75db29360ab5e3d1027a3`](https://github.com/openai/openai-quickstart-python/tree/88fb67fe281e68c8cad75db29360ab5e3d1027a3); scope `.`.
- Frozen library baseline: commit `edfdf162b90565d31549b69262ce73b7d29f3b0c`; tree `1791627f995a4e7741fc6d07030744d5752d76c4`.
- Developer scenario: Basic OpenAI Chat Completions application. Use the shared developer context above; keep the starting-situation summary, reviewer notes, and criteria outside both the simulated developer's and migration agent's context.

**Reviewer setup notes:** If asked, resolve application model preferences, privacy/state ownership, and applicable context-management choices. Existing browser behavior and instructions are part of the starting application, not new feature requests.

**Prompt**

```text
Use <skill-invocation>.
```

**Pass criteria**

All shared criteria **G01–G11** apply, together with every criterion below.

- **M03-T01:** Replaced the existing Chat Completions model call with the OpenAI Responses API.
- **M03-T02:** Selected an OpenAI model appropriate for a general-purpose interactive chat application.
- **M03-T03:** Reused the existing OpenAI SDK and client configuration without introducing an unnecessary provider abstraction.
- **M03-T04:** Preserved the existing system instruction in the Responses API request.
- **M03-T05:** Correctly mapped existing conversation history into Responses API input items.
- **M03-T06:** Preserved user and assistant message ordering across multiple chat turns.
- **M03-T07:** Preserved model reasoning across chat turns when supported by the selected model.
- **M03-T08:** Preserved assistant message phases when replaying conversation history.
- **M03-T09:** Assessed native Responses context-compaction support, expected context growth, and existing history management for longer chat conversations. Implemented native compaction when supported and needed for the approved workload; otherwise recorded a concrete reason it was unsupported or unnecessary, or an explicit developer decision declining the optional change.
- **M03-T10:** Assessed prompt-cache key support and prefix reuse for repeated chat turns. For models earlier than GPT-5.6, configured stable prompt-cache keys when the selected model and approved integration support them and the workload benefits, unless the developer explicitly declined this optional optimization. For GPT-5.6 and later, omitted new cache keys by default without raising this as a developer decision; preserved existing keys and established separate-accounting requirements. Recorded the applicability decision.
- **M03-T11:** Assessed support and useful breakpoint locations in reusable conversation prefixes. Applied explicit cache breakpoints when the selected model and approved integration support them and reusable prefixes benefit, unless the developer explicitly declined this optional optimization. Recorded the applicability decision.
- **M03-T12:** Used Responses API streaming events to deliver assistant text incrementally.
- **M03-T13:** Preserved the browser-facing Server-Sent Events format consumed by EventSource.
- **M03-T14:** Accumulated streamed text into one complete assistant message before appending it to conversation history.
- **M03-T15:** Recognized response completion without relying on Chat Completions-specific finish reasons or delta objects.
- **M03-T16:** Preserved the existing chat-submission HTTP endpoint and request format.
- **M03-T17:** Preserved the existing streaming HTTP endpoint and response content type.
- **M03-T18:** Preserved conversation reset behavior and restoration of the original system instruction.
- **M03-T19:** Preserved the existing browser chat interface and incremental message rendering.
- **M03-T20:** Preserved privacy and stateless conversation-history behavior unless the developer approved server-side response storage.
- **M03-T21:** Handled interrupted or failed Responses API streams without storing incomplete assistant messages as successful responses.
- **M03-T22:** Added focused mocked tests for streaming, multi-turn conversation history, and reset behavior without requiring live API calls.
- **M03-T23:** Updated application documentation and examples to describe Responses API usage instead of Chat Completions.
- **M03-T24:** Avoided introducing unnecessary tool calling, structured outputs, or agent-orchestration complexity.
- **M03-T25:** Ignored non-text streaming events without rendering internal protocol details as assistant text.
- **M03-T26:** Preserved Flask request-context handling while generating streamed responses.
- **M03-T27:** Assessed how the approved workflow could obtain and carry forward a suitable recent completed response ID from the same organization. Used prompt_cache_options.comparison_response_id on eligible GPT-5.6-or-later supported Responses requests expected to reuse its cacheable prefix wherever feasible, including through supported framework pass-throughs. Otherwise recorded the absent suitable baseline or verified workflow/integration limitation, including the developer decision when retaining a limiting framework. Selected comparison responses for the relevant chat, respecting conversation resets.

### M04 - Advanced Chat Completions agent loop

**Setup**

- Fixture: `04-advanced-chat-agent-loop`.
- Starting situation: The Swarm agent framework, with streaming and non-streaming execution, parallel function tools, context variables, agent handoffs, and public return contracts.
- Upstream repository: [openai/swarm](https://github.com/openai/swarm).
- Pinned upstream source: [`6af0b4caf37dca4526dfd98e9fbd8ce36e7eeb22`](https://github.com/openai/swarm/tree/6af0b4caf37dca4526dfd98e9fbd8ce36e7eeb22); scope `.`.
- Frozen library baseline: commit `be3976bb5b6074fee4696cdf81016934507ac11b`; tree `68c59b2a6cb5e754f45b96a8345b5a73bce77003`.
- Developer scenario: Advanced Chat Completions agent loop with streaming and parallel tools. Use the shared developer context above; keep the starting-situation summary, reviewer notes, and criteria outside both the simulated developer's and migration agent's context.

**Reviewer setup notes:** If asked, resolve application model/override preferences, privacy/state ownership, and the scope and staging of supported transport or tool improvements. Do not treat the migration as authorization to redesign the framework.

**Prompt**

```text
Use <skill-invocation>.
```

**Pass criteria**

All shared criteria **G01–G11** apply, together with every criterion below.

- **M04-T01:** Migrated the shared Swarm model-generation path used by both execution modes from Chat Completions to the OpenAI Responses API.
- **M04-T02:** Selected an OpenAI model appropriate for a multi-turn, tool-using agent framework.
- **M04-T03:** Reused the existing OpenAI SDK and client configuration without introducing an unnecessary provider abstraction.
- **M04-T04:** Preserved the public Swarm.run interface and its existing arguments.
- **M04-T05:** Preserved both streaming and non-streaming agent execution paths.
- **M04-T06:** Preserved the existing Agent, Response, and Result data contracts.
- **M04-T07:** Preserved static agent instructions in Responses API requests.
- **M04-T08:** Preserved dynamically generated agent instructions and their context-variable inputs.
- **M04-T09:** Reapplied the active agent's instructions after each agent handoff.
- **M04-T10:** Correctly mapped prior conversation history into Responses API input items.
- **M04-T11:** Preserved complete conversation history across agent and tool turns.
- **M04-T12:** Preserved model reasoning across turns when supported by the selected model.
- **M04-T13:** Included and replayed encrypted reasoning items when required by the selected state-management approach.
- **M04-T14:** Preserved assistant message phases when replaying conversation history.
- **M04-T15:** Preserved assistant sender metadata identifying the active agent.
- **M04-T16:** Converted existing Python agent functions into valid Responses API function-tool definitions.
- **M04-T17:** Prevented private context_variables arguments from being exposed in model-visible tool schemas.
- **M04-T18:** Preserved agent-specific tool_choice behavior.
- **M04-T19:** Preserved the existing parallel_tool_calls configuration.
- **M04-T20:** Executed every requested tool and returned each result with its originating tool-call identifier.
- **M04-T21:** Preserved missing-tool error responses without aborting unrelated tool calls.
- **M04-T22:** Preserved function-result conversion for strings and structured Result objects.
- **M04-T23:** Preserved agent handoffs when a tool returns another Agent.
- **M04-T24:** Preserved context-variable updates produced by tool results and agent handoffs.
- **M04-T25:** Preserved the execute_tools=False behavior that returns tool calls without executing them.
- **M04-T26:** Preserved max_turns limits and final agent-loop termination behavior.
- **M04-T27:** Preserved incremental text streaming for existing stream consumers.
- **M04-T28:** Correctly translated Responses API streaming events into the existing Swarm stream contract.
- **M04-T29:** Recognized Responses API completion without relying on Chat Completions-specific delta or finish-reason fields.
- **M04-T30:** Correctly reconstructed streamed tool-call names, arguments, and identifiers.
- **M04-T31:** Preserved existing stream start and end delimiters expected by consumers.
- **M04-T32:** Returned the final Response object from the streaming execution path.
- **M04-T33:** Assessed prompt-cache key support and prefix reuse for repeated agent turns. For models earlier than GPT-5.6, configured stable prompt-cache keys when the selected model and approved integration support them and the workload benefits, unless the developer explicitly declined this optional optimization. For GPT-5.6 and later, omitted new cache keys by default without raising this as a developer decision; preserved existing keys and established separate-accounting requirements. Recorded the applicability decision.
- **M04-T34:** Assessed support and useful breakpoint locations in reusable instructions, tools, and conversation prefixes. Applied explicit cache breakpoints when the selected model and approved integration support them and reusable prefixes benefit, unless the developer explicitly declined this optional optimization. Recorded the applicability decision.
- **M04-T35:** Assessed native Responses context-compaction support, expected context growth, and existing history management for long-running agent conversations. Implemented native compaction when supported and needed for the approved workload; otherwise recorded a concrete reason it was unsupported or unnecessary, or an explicit developer decision declining the optional change.
- **M04-T36:** Considered supported Responses API WebSocket transport for repeated tool-heavy agent turns and implemented it when appropriate and approved by the developer.
- **M04-T37:** Implemented WebSocket transport as a separately reviewable stage or stacked pull request when the developer requested a pull-request workflow.
- **M04-T38:** Assessed programmatic tool-calling support and workload benefit for the selected model and approved integration, presented material tradeoffs when a developer decision was needed, and implemented it when applicable and approved. If implementation was genuinely inapplicable, recorded the capability or workload evidence or explicit developer decision. Required ordinary function-tool behavior remains applicable.
- **M04-T39:** Implemented programmatic tool calling as a separately reviewable stage or stacked pull request when the developer requested a pull-request workflow.
- **M04-T40:** Preserved privacy and stateless replay requirements unless the developer approved server-side response storage.
- **M04-T41:** Preserved model overrides and other compatible agent-level configuration.
- **M04-T42:** Avoided rewriting unrelated example applications, evaluation helpers, or the framework architecture without developer approval.
- **M04-T43:** Added focused mocked tests for streaming, non-streaming execution, parallel tools, agent handoffs, context variables, and tool-call replay.
- **M04-T44:** Updated relevant documentation to explain Responses API configuration and any changed integration entry points.
- **M04-T45:** Assessed how the approved workflow could obtain and carry forward a suitable recent completed response ID from the same organization. Used prompt_cache_options.comparison_response_id on eligible GPT-5.6-or-later supported Responses requests expected to reuse its cacheable prefix wherever feasible, including through supported framework pass-throughs. Otherwise recorded the absent suitable baseline or verified workflow/integration limitation, including the developer decision when retaining a limiting framework. Selected comparison responses for the relevant request and agent prefix across handoffs.

### M05 - Vercel AI SDK application using Anthropic

**Setup**

- Fixture: `05-vercel-ai-sdk-anthropic`.
- Starting situation: A Discord bot running on Cloudflare Workers, with Vercel AI SDK streaming, channel history, Tavily search tools, background replies, and a standalone example.
- Upstream repository: [mizchi/discord-claude-bot](https://github.com/mizchi/discord-claude-bot).
- Pinned upstream source: [`84355972b492890367a65e10facd570cb317a267`](https://github.com/mizchi/discord-claude-bot/tree/84355972b492890367a65e10facd570cb317a267); scope `.`.
- Frozen library baseline: commit `18dc16d07124873f80ca851fb5739e45c80b7127`; tree `6e08d3097ca63d9ea08e613cdc182535dae1c320`.
- Developer scenario: Vercel AI SDK application using Anthropic. Use the shared developer context above; keep the starting-situation summary, reviewer notes, and criteria outside both the simulated developer's and migration agent's context.

**Reviewer setup notes:** If asked, resolve whether to retain the SDK or approve another integration, model/provider choices, privacy and output limits, and whether the standalone example is included. Unsupported framework capabilities require evidence and a material developer choice, not an assumed rewrite.

**Prompt**

```text
Use <skill-invocation>.
```

**Pass criteria**

All shared criteria **G01–G11** apply, together with every criterion below.

- **M05-T01:** Migrated the production Discord chatbot from the Anthropic provider to an OpenAI Responses-backed integration.
- **M05-T02:** Selected an OpenAI model appropriate for an interactive Discord chatbot with web-search capabilities.
- **M05-T03:** Preserved the Vercel AI SDK abstraction unless the developer approved a different integration approach.
- **M05-T04:** Verified the selected Vercel AI SDK OpenAI provider uses the Responses API rather than falling back to Chat Completions.
- **M05-T05:** Added and configured the OpenAI AI SDK provider dependency required by the selected integration.
- **M05-T06:** Added typed OpenAI API-key configuration without hard-coding credentials.
- **M05-T07:** Preserved the existing Cloudflare Worker fetch entry point and execution environment.
- **M05-T08:** Preserved Discord request-signature verification and unauthorized-request handling.
- **M05-T09:** Preserved Discord slash-command routing and deferred interaction responses.
- **M05-T10:** Preserved Cloudflare background execution for the Discord response workflow.
- **M05-T11:** Preserved the existing system instruction in the migrated model request.
- **M05-T12:** Preserved channel-specific conversation-history loading and persistence.
- **M05-T13:** Correctly mapped prior channel messages into the Responses-backed AI SDK request.
- **M05-T14:** Preserved complete conversation history across chat turns.
- **M05-T15:** Preserved model reasoning across chat turns when supported by the selected model.
- **M05-T16:** Included and replayed encrypted reasoning items when required by the selected state-management approach.
- **M05-T17:** Preserved assistant message phases when replaying conversation history.
- **M05-T18:** Preserved incremental text streaming through the existing Vercel AI SDK interface.
- **M05-T19:** Preserved periodic Discord message updates while the response is streaming.
- **M05-T20:** Preserved final Discord message updates after streaming completes.
- **M05-T21:** Preserved the existing Tavily web-search tool and its validated input schema.
- **M05-T22:** Preserved automatic tool selection for the existing search tool.
- **M05-T23:** Preserved the existing maximum tool-step limit.
- **M05-T24:** Preserved user-visible tool-call progress updates in Discord messages.
- **M05-T25:** Preserved user-visible tool-result progress updates in Discord messages.
- **M05-T26:** Preserved Tavily API-key validation and search-tool error behavior.
- **M05-T27:** Replaced Anthropic-specific cache configuration with compatible OpenAI prompt caching.
- **M05-T28:** Assessed prompt-cache key support and prefix reuse for channel conversation prefixes. For models earlier than GPT-5.6, configured stable prompt-cache keys when the selected model and approved integration support them and the workload benefits, unless the developer explicitly declined this optional optimization. For GPT-5.6 and later, omitted new cache keys by default without raising this as a developer decision; preserved existing keys and established separate-accounting requirements. Recorded the applicability decision.
- **M05-T29:** Assessed support and useful breakpoint locations in reusable instructions and conversation prefixes. Applied explicit cache breakpoints when the selected model and approved integration support them and reusable prefixes benefit, unless the developer explicitly declined this optional optimization. Recorded the applicability decision.
- **M05-T30:** Preserved the existing maximum output-token limit or clarified an intentional change with the developer.
- **M05-T31:** Preserved the existing response timeout and cancellation behavior.
- **M05-T32:** Cleaned up message-update intervals and timeout handlers when streaming ends or fails.
- **M05-T33:** Preserved privacy and stateless replay requirements unless the developer approved server-side response storage.
- **M05-T34:** Assessed native Responses context-compaction support, expected context growth, and existing history management for channel conversation histories. Implemented native compaction when supported and needed for the approved workload; otherwise recorded a concrete reason it was unsupported or unnecessary, or an explicit developer decision declining the optional change.
- **M05-T35:** Preserved Cloudflare Worker compatibility when selecting SDK versions and transport behavior.
- **M05-T36:** Updated the standalone chat example when its migration is included in the agreed scope.
- **M05-T37:** Added focused mocked tests for Discord interactions, streaming, search-tool execution, conversation persistence, timeout handling, and provider configuration.
- **M05-T38:** Updated setup documentation to explain the OpenAI provider, API key, and Cloudflare deployment configuration.
- **M05-T39:** Preserved streamed model-error events in the existing Discord message format.
- **M05-T40:** Avoided saving incomplete assistant responses as successful channel history after stream failure.
- **M05-T41:** Removed unused Anthropic-only provider imports and settings from the migrated production path.
- **M05-T42:** Assessed how the approved workflow could obtain and carry forward a suitable recent completed response ID from the same organization. Used prompt_cache_options.comparison_response_id on eligible GPT-5.6-or-later supported Responses requests expected to reuse its cacheable prefix wherever feasible, including through supported framework pass-throughs. Otherwise recorded the absent suitable baseline or verified workflow/integration limitation, including the developer decision when retaining a limiting framework. Selected comparison responses for the relevant channel conversation.

### M06 - OpenRouter agent through an OpenAI-compatible endpoint

**Setup**

- Fixture: `06-openrouter-agent`.
- Starting situation: A Teams/Discord application with shared basic completions and a separate tool-enabled conversation loop, per-bot configuration and memory, multimodal inputs, and a separate image-generation provider.
- Upstream repository: [murdarch/chorus](https://github.com/murdarch/chorus).
- Pinned upstream source: [`f93372dc0e3218ff854a3481280509df5bb3bc35`](https://github.com/murdarch/chorus/tree/f93372dc0e3218ff854a3481280509df5bb3bc35); scope `.`.
- Frozen library baseline: commit `e869ee9520c1af4f684b7710e40b39ec1a65f501`; tree `4fa1ea1972c94517fd88d8c96faddae07b643fde`.
- Developer scenario: OpenRouter agent through an OpenAI-compatible Chat Completions endpoint. Use the shared developer context above; keep the starting-situation summary, reviewer notes, and criteria outside both the simulated developer's and migration agent's context.

**Reviewer setup notes:** If asked, resolve retaining the gateway versus direct OpenAI, suitable model configuration across workloads, and whether image-generation changes or optional higher-lift features are in scope. Preserve the existing separate image functionality unless a change is approved.

**Prompt**

```text
Use <skill-invocation>.
```

**Pass criteria**

All shared criteria **G01–G11** apply, together with every criterion below.

- **M06-T01:** Identified the existing OpenRouter-backed Chat Completions integration before choosing a migration route.
- **M06-T02:** Presented the developer with the relevant tradeoffs between retaining OpenRouter and using the direct OpenAI Responses API.
- **M06-T03:** Verified current OpenRouter Responses API capability limitations against official documentation before recommending an architecture.
- **M06-T04:** Migrated the shared basic-completion workflow to the developer-approved Responses API integration.
- **M06-T05:** Migrated the separate tool-enabled conversation loop to the developer-approved Responses API integration.
- **M06-T06:** Selected or recommended a concrete, supported OpenAI model for decision, reaction, conversation, summarization, and tool-using workloads, explained its suitability, and preserved developer-approved configuration and overrides. The same model may serve multiple workloads; separate model identifiers or selectors are required only when explicitly requested.
- **M06-T07:** Preserved existing OpenRouter integration where the developer chose to retain it.
- **M06-T08:** Added any required direct OpenAI API-key configuration without hard-coding credentials.
- **M06-T09:** Preserved the asynchronous LLM client interface used by both Teams and Discord bots.
- **M06-T10:** Preserved bot-specific model selection and model overrides.
- **M06-T11:** Preserved bot-specific system instructions and personality prompts.
- **M06-T12:** Preserved response-participation decisions and their existing token limits.
- **M06-T13:** Preserved reaction-selection behavior.
- **M06-T14:** Preserved conversation summarization behavior.
- **M06-T15:** Preserved per-bot persistent memory storage and retrieval.
- **M06-T16:** Correctly mapped conversation history into Responses API input items.
- **M06-T17:** Preserved complete user, assistant, and tool history across conversation turns.
- **M06-T18:** Preserved model reasoning across turns when supported by the selected model.
- **M06-T19:** Included and replayed encrypted reasoning items when required by the selected state-management approach.
- **M06-T20:** Preserved assistant message phases when replaying conversation history.
- **M06-T21:** Preserved existing multimodal image inputs when supported by the selected model and provider.
- **M06-T22:** Preserved the existing web-search tool and its Tavily integration.
- **M06-T23:** Preserved the existing URL-extraction tool.
- **M06-T24:** Preserved the existing image-generation tool and returned generated images.
- **M06-T25:** When an image-generation change was in scope, presented the relevant supported OpenAI routes and implemented the developer-selected route. A direct Images API route is acceptable unless the original task or a visible developer decision specifically requires the Responses image-generation tool. If no image-generation change was in scope, treated only this enhancement as inapplicable; preserving existing image functionality remains required.
- **M06-T26:** Preserved the existing separate image-generation provider when the developer did not approve changing it.
- **M06-T27:** Correctly mapped existing application tool definitions into Responses API tools.
- **M06-T28:** Preserved automatic tool selection.
- **M06-T29:** Executed every requested tool and returned each result with its originating tool-call identifier.
- **M06-T30:** Preserved multiple tool calls without dropping calls or duplicating execution.
- **M06-T31:** Preserved sanitization of generated image data before tool results are returned to the model.
- **M06-T32:** Preserved the maximum number of tool-execution rounds.
- **M06-T33:** Assessed programmatic tool-calling support and workload benefit for the selected model and approved integration, presented material tradeoffs when a developer decision was needed, and implemented it when applicable and approved. If implementation was genuinely inapplicable, recorded the capability or workload evidence or explicit developer decision. Required ordinary function-tool behavior remains applicable.
- **M06-T34:** Implemented programmatic tool calling as a separately reviewable stage or stacked pull request when the developer requested a pull-request workflow.
- **M06-T35:** Assessed prompt-cache key support and prefix reuse for repeated requests through the approved provider route. For models earlier than GPT-5.6, configured stable prompt-cache keys when the selected model and approved integration support them and the workload benefits, unless the developer explicitly declined this optional optimization. For GPT-5.6 and later, omitted new cache keys by default without raising this as a developer decision; preserved existing keys and established separate-accounting requirements. Recorded the applicability decision.
- **M06-T36:** Assessed support and useful breakpoint locations in reusable instructions, memories, tools, and conversation prefixes. Applied explicit cache breakpoints when the selected model and approved integration support them and reusable prefixes benefit, unless the developer explicitly declined this optional optimization. Recorded the applicability decision.
- **M06-T37:** Assessed native Responses context-compaction support, expected context growth, and existing history management for the approved agent workload. Implemented native compaction when supported and needed for the approved workload; otherwise recorded a concrete reason it was unsupported or unnecessary, or an explicit developer decision declining the optional change.
- **M06-T38:** Considered supported Responses API WebSocket transport for repeated tool-heavy agent turns and implemented it when appropriate for the approved integration.
- **M06-T39:** Implemented WebSocket transport as a separately reviewable stage or stacked pull request when the developer requested a pull-request workflow.
- **M06-T40:** Preserved privacy and stateless replay requirements unless the developer approved server-side response storage.
- **M06-T41:** Preserved existing response, decision, and context-window token limits or clarified intentional changes.
- **M06-T42:** Removed or adapted request parameters unsupported by the selected OpenAI model.
- **M06-T43:** Preserved both Microsoft Teams and Discord application entry points.
- **M06-T44:** Preserved existing per-bot configuration files and active-bot selection.
- **M06-T45:** Preserved existing instruction files, including CLAUDE.md for retained tooling, without renaming or rewriting them. Added an AGENTS.md compatibility file only with explicit developer approval.
- **M06-T46:** Added focused mocked tests for provider routing, both generation paths, tool execution, memory, image preservation, and Teams or Discord integration.
- **M06-T47:** Updated setup and deployment documentation for the approved provider configuration and any new OpenAI credentials.
- **M06-T48:** Assessed how the approved workflow could obtain and carry forward a suitable recent completed response ID from the same organization. Used prompt_cache_options.comparison_response_id on eligible GPT-5.6-or-later supported Responses requests expected to reuse its cacheable prefix wherever feasible, including through supported framework pass-throughs. Otherwise recorded the absent suitable baseline or verified workflow/integration limitation, including the developer decision when retaining a limiting framework. Selected comparison responses for the relevant bot and workload.

### M07 - PydanticAI typed analysis and documentation agents

**Setup**

- Fixture: `07-pydanticai-typed-agent`.
- Starting situation: A repository-analysis/documentation application with analyzer, documenter, and AI-rules agent families, typed outputs, concurrent tools, and generated README, AGENTS.md, CLAUDE.md, and Cursor-rule artifacts.
- Upstream repository: [divar-ir/ai-doc-gen](https://github.com/divar-ir/ai-doc-gen).
- Pinned upstream source: [`bd3aba71a0c57aa43aef4020917989efc4507db3`](https://github.com/divar-ir/ai-doc-gen/tree/bd3aba71a0c57aa43aef4020917989efc4507db3); scope `.`.
- Frozen library baseline: commit `6f0d22aad968cf73d2417faae9ab38069be25bd3`; tree `e806b63c42d28a2f4fb5cf09ff2da786a45fe7ab`.
- Developer scenario: PydanticAI agent with typed structured output and parallel tools. Use the shared developer context above; keep the starting-situation summary, reviewer notes, and criteria outside both the simulated developer's and migration agent's context.

**Reviewer setup notes:** If asked, resolve retaining PydanticAI versus direct OpenAI, models and independent configuration across workloads, provider endpoints, retention, native transport tradeoffs, and processing tiers for scheduled work. Do not collapse existing distinct artifacts or model-configuration paths as an incidental migration change.

**Prompt**

```text
Use <skill-invocation>.
```

**Pass criteria**

All shared criteria **G01–G11** apply, together with every criterion below.

- **M07-T01:** Migrated the analyzer agent family from OpenAIChatModel to a Responses-backed PydanticAI model.
- **M07-T02:** Migrated the documenter agent from OpenAIChatModel to a Responses-backed PydanticAI model.
- **M07-T03:** Migrated the AI-rules generator agents from OpenAIChatModel to a Responses-backed PydanticAI model.
- **M07-T04:** Verified each migrated PydanticAI model uses the Responses API rather than silently falling back to Chat Completions.
- **M07-T05:** Preserved the existing PydanticAI agent framework unless the developer approved a different integration approach.
- **M07-T06:** Selected or recommended concrete, supported OpenAI models for repository analysis, documentation generation, and AI-rules generation, explained their suitability, preserved independent environment-based configuration and overrides, and provided usable configuration examples. The same model may serve multiple workloads.
- **M07-T07:** Preserved independent model configuration for the analyzer, documenter, and AI-rules agent families.
- **M07-T08:** Preserved independent API-key configuration for each agent family without hard-coding credentials.
- **M07-T09:** Preserved developer-approved provider base URLs and endpoint configuration.
- **M07-T10:** Preserved the existing retrying HTTP client and retry configuration.
- **M07-T11:** Preserved agent-specific request timeouts.
- **M07-T12:** Preserved agent-specific maximum output-token settings.
- **M07-T13:** Removed or adapted request parameters unsupported by the selected OpenAI models.
- **M07-T14:** Preserved existing parallel_tool_calls settings where supported by the selected integration.
- **M07-T15:** Preserved the five specialized repository-analysis agents.
- **M07-T16:** Preserved concurrent analyzer execution through the existing worker pool.
- **M07-T17:** Preserved YAML-defined agent system instructions without rewriting their content.
- **M07-T18:** Preserved dynamic prompt rendering and repository-specific template variables.
- **M07-T19:** Preserved the existing file-reading tool and its retry behavior.
- **M07-T20:** Preserved the existing directory-listing tool and its retry behavior.
- **M07-T21:** Correctly mapped existing PydanticAI tools into Responses-compatible tool definitions.
- **M07-T22:** Preserved tool execution and returned each result with its originating tool-call identifier.
- **M07-T23:** Preserved complete agent conversation and tool history across turns.
- **M07-T24:** Preserved model reasoning across agent turns when supported by the selected model.
- **M07-T25:** Included and replayed encrypted reasoning items when required by the selected state-management approach.
- **M07-T26:** Preserved assistant message phases when replaying agent conversation history.
- **M07-T27:** Preserved plain-text output for analyzer agents.
- **M07-T28:** Preserved validated DocumenterResult structured output.
- **M07-T29:** Preserved validated MarkdownOutput structured output.
- **M07-T30:** Preserved validated CursorRulesOutput structured output.
- **M07-T31:** Preserved the CursorRule schema and its filename, description, glob, applicability, and content fields.
- **M07-T32:** Preserved combined AIRulesOutput aggregation.
- **M07-T33:** Used Responses-compatible structured outputs without weakening Pydantic validation.
- **M07-T34:** Preserved README generation and its configured output location.
- **M07-T35:** Preserved both existing AGENTS.md and CLAUDE.md files and their generation as distinct supported artifacts.
- **M07-T36:** Preserved generation of Cursor rule files.
- **M07-T37:** Assessed prompt-cache key support and prefix reuse for the relevant agent workloads. For models earlier than GPT-5.6, configured stable prompt-cache keys when the selected model and approved integration support them and the workload benefits, unless the developer explicitly declined this optional optimization. For GPT-5.6 and later, omitted new cache keys by default without raising this as a developer decision; preserved existing keys and established separate-accounting requirements. Recorded the applicability decision.
- **M07-T38:** Assessed support and useful breakpoint locations in reusable prompts, repository context, and tool definitions. Applied explicit cache breakpoints when the selected model and approved integration support them and reusable prefixes benefit, unless the developer explicitly declined this optional optimization. Recorded the applicability decision.
- **M07-T39:** Assessed native Responses context-compaction support, expected context growth, and existing history management for repository analysis and tool history. Implemented native compaction when supported and needed for the approved workload; otherwise recorded a concrete reason it was unsupported or unnecessary, or an explicit developer decision declining the optional change.
- **M07-T40:** Assessed programmatic tool-calling support and workload benefit for the selected model and approved integration, presented material tradeoffs when a developer decision was needed, and implemented it when applicable and approved. If implementation was genuinely inapplicable, recorded the capability or workload evidence or explicit developer decision. Required ordinary function-tool behavior remains applicable.
- **M07-T41:** Implemented programmatic tool calling as a separately reviewable stage or stacked pull request when the developer requested a pull-request workflow.
- **M07-T42:** Considered supported Responses API WebSocket transport for repeated tool-heavy agent turns and implemented it when appropriate for the approved integration.
- **M07-T43:** Implemented WebSocket transport as a separately reviewable stage or stacked pull request when the developer requested a pull-request workflow.
- **M07-T44:** Preserved privacy and stateless replay requirements unless the developer approved server-side response storage.
- **M07-T45:** Preserved token-usage accounting and existing per-agent usage logging.
- **M07-T46:** Preserved OpenTelemetry and PydanticAI instrumentation.
- **M07-T47:** Added focused mocked tests for all three model-construction paths, typed outputs, tool execution, concurrency, retries, and generated artifacts.
- **M07-T48:** Updated setup and deployment documentation for Responses-backed PydanticAI models and any changed provider configuration.
- **M07-T49:** Asked the developer whether to use an appropriate processing tier for scheduled background workflows and implemented it if approved.
- **M07-T50:** Identified the existing PydanticAI integration and explained the pros and cons of preserving it versus using a direct OpenAI integration, including native WebSocket limitations, before the developer chose an approach.
- **M07-T51:** Assessed how the approved workflow could obtain and carry forward a suitable recent completed response ID from the same organization. Used prompt_cache_options.comparison_response_id on eligible GPT-5.6-or-later supported Responses requests expected to reuse its cacheable prefix wherever feasible, including through supported framework pass-throughs. Otherwise recorded the absent suitable baseline or verified workflow/integration limitation, including the developer decision when retaining a limiting framework. Selected comparison responses for the relevant analysis or documentation workload.

## 4. Triggering and runner-ready variants

The seven cases above use explicit skill invocation. The following discovery checks and runner table adapt the format of the API-key and API-troubleshooting eval references; they are optional comparison guidance, not extra CSV grading rows or a requirement to build a new harness.

### Should activate implicitly

- "Assess this existing OpenAI integration and recommend a migration plan."
- "Migrate this existing Anthropic application to OpenAI Responses."
- "Update this Chat Completions app to use Responses while preserving its behavior."
- "Improve state management and caching in this existing Responses integration."
- "Help migrate our framework-based agent to current OpenAI APIs."

### Should route elsewhere or stay outside this skill's scope

- "Create a new OpenAI API key." (`openai-platform-api-key`)
- "My request returns `401 invalid_api_key`." (`openai-api-troubleshooting`)
- "What is the current Responses API syntax?" (`openai-docs`; no existing application to migrate)
- "Migrate this speech-to-text endpoint." (audio, speech, and transcription are out of scope)
- "Optimize this system prompt." (prompt rewriting is out of scope)

### Runner-ready cases

Each row requires its matching repository setup and developer interaction. The assertions reference the complete criteria above rather than introducing a shorter replacement rubric. The informal execution steps above suffice for a manual review; use the separate library's own protocol when running a canonical library evaluation. A sheet-backed runner comparison is a separate execution mode and cannot establish a full pass if its environment cannot supply the fixture, decisions, implementation, or evidence needed by the criteria.

| ID | Hero Prompt | Assertions |
| --- | --- | --- |
| M01 | `Use <skill-invocation>.` | With the M01 setup, evaluate every shared criterion G01–G11 and every task criterion M01-T01–M01-T16. |
| M02 | `Use <skill-invocation>.` | With the M02 setup, evaluate every shared criterion G01–G11 and every task criterion M02-T01–M02-T36. |
| M03 | `Use <skill-invocation>.` | With the M03 setup, evaluate every shared criterion G01–G11 and every task criterion M03-T01–M03-T27. |
| M04 | `Use <skill-invocation>.` | With the M04 setup, evaluate every shared criterion G01–G11 and every task criterion M04-T01–M04-T45. |
| M05 | `Use <skill-invocation>.` | With the M05 setup, evaluate every shared criterion G01–G11 and every task criterion M05-T01–M05-T42. |
| M06 | `Use <skill-invocation>.` | With the M06 setup, evaluate every shared criterion G01–G11 and every task criterion M06-T01–M06-T48. |
| M07 | `Use <skill-invocation>.` | With the M07 setup, evaluate every shared criterion G01–G11 and every task criterion M07-T01–M07-T51. |

For discovery or incremental-value comparisons, compare `with_skill_explicit`, `with_skill_implicit`, and `no_skill` arms where the runner supports them. The rendered explicit prompt names the selected skill. A separate implicit variant must omit that invocation; a no-skill baseline must not be required to invoke the skill. Record the exact prompt variant and skill revision used in each arm rather than treating an explicit invocation as an implicit-discovery test.

## 5. Review and grading guidance

- Grade all assigned shared and task criteria independently, using repository evidence and the visible current-attempt decisions and tool results. An invocation, plausible plan, or persuasive final answer does not establish a successful migration.
- Apply each criterion's own prerequisites and the selected application's model/integration. A genuinely inapplicable conditional criterion receives a pass with concrete applicability evidence. Unilateral deferral, a generic incremental preference, or an absent decision is not evidence that required work is inapplicable.
- Where an authoritative developer instruction contradicts mandatory rubric scope, preserve the scope conflict for operator adjudication; do not invent a pass/fail, alter the rubric, repair the implementation, or regrade the original attempt. If required evidence is unavailable or cannot be safely attributed to this attempt, leave the affected grading incomplete; do not search unrelated history. When using the separate library, also follow its evaluator guide for these failures.
- For informal runs, record each criterion ID, binary result (`1` pass or `0` fail), and supporting evidence, leaving unresolved grades incomplete. For full-library runs, keep its CSV authoritative: populate every assigned row, preserve other attempts' rows, and use its existing locking protocol. This document renders a particular rubric snapshot and does not authorize changing a frozen run's protocol or grades.
- Keep code/mock verification distinct from live provider support, credentials, model access, production performance, and checks that were skipped or assumed. Preserve blocked, failed, and incomplete outcomes in reporting.
- All seven diagnostics criteria concern suitable recent completed same-organization response IDs, eligibility, prefix reuse, supported parameter pass-through, and evidenced workflow/framework limitations. They add no diagnostics storage, result-processing, logging, dashboard, or latency-benchmark requirement.
- Existing reasoning-related criteria are reproduced as written. No new mid-conversation reasoning-effort criterion is added by this document.
- If an explicit-skill arm succeeds but an implicit arm misses the skill, inspect discoverability. If both skill arms fail the same behavior, inspect that guidance and the case's prerequisites. Separate runner-injected generic assertions from the product criteria unless they show a violation of an original criterion.
- Report the fixture revisions, skill versions/digests, prompt variants, environment limits, cases completed, and actual results. This document sets no new universal pass threshold, repetition count, or mandatory run schedule.
