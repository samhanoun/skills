# OpenAI API Migration Decision Ledger

**Application:** _TBD_  
**Current integration:** _TBD_  
**Selected integration and model:** _TBD_  
**Approved migration scope and feature-stage plan:** _TBD: capability-stage order, deliverables, dependencies, approval status, and current stage; distinguish approved work from optional proposals._  
**Privacy and retention requirements:** _TBD_  
**Assessment or implementation:** _TBD_

Review every item against the application, selected model and provider, developer decisions, and approved scope. Add rows for newly documented capabilities or workload-specific differences; under the migration section, use one row per required workflow or invocation mode, even when sharing a provider, with its selected route, retained alternatives, code/documentation changes, and validation commands/results. Replace every placeholder with a concise, developer-visible decision; never claim a capability was implemented or tested without supporting evidence.

**Applicable:** Whether the capability benefits the application's behavior, workloads, or product requirements: `yes`, `no`, or `unknown`; support alone does not establish applicability.  
**Supported:** Whether the selected model, provider, framework, and SDK can provide the capability: `yes`, `no`, `partial`, or `unknown`.  
**Decision:** The capability's agreed migration outcome: `pending`, `implemented`, `already present`, `deferred`, `unsupported`, or `not applicable`. Use `deferred` only for a feature-specific developer decision or concrete blocker; justify `unsupported` or `not applicable` with capability or workload evidence.  
**Implemented:** Mark `[x]` only after approved implementation is complete and verified; leave `[ ]` for pending, deferred, unsupported, or inapplicable items.  
**Rationale or evidence:** The brief product, compatibility, privacy, cost, or scope justification; include the planned stage and developer-decision receipt, or relevant code, tests, and versioned official documentation.

## Model Selection

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Record a concrete supported model recommendation and suitability for each workload; models may be shared. | | | | [ ] | |
| Preserve an appropriate existing model; confirm material model or capability-tier changes. | | | | [ ] | |
| Account for workload quality, speed, latency, and cost. | | | | [ ] | |

## Instruction File Naming

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Preserve existing instruction files; add compatibility files only with explicit approval, without renaming or rewriting existing files. | | | | [ ] | |

## Migrate from Chat Completions to the Responses API

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Migrate applicable OpenAI workloads to the Responses API. | | | | [ ] | |
| Preserve existing product behavior and approved provider compatibility. | | | | [ ] | |

## Streaming

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Preserve existing streaming and user-visible output behavior. | | | | [ ] | |
| Add streaming only where responsiveness benefits justify the approved change. | | | | [ ] | |
| Adapt typed Responses streaming events to existing rendering and consumption paths. | | | | [ ] | |
| Preserve complete-response workflows and defer disproportionate implementation changes. | | | | [ ] | |

## WebSocket Mode

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Assess persistent transport for long-running or tool-heavy workflows. | | | | [ ] | |
| Preserve existing HTTP and streaming behavior when WebSockets add insufficient value. | | | | [ ] | |
| Handle structured errors, failed or incomplete responses, and provider-specific concurrency limits; OpenAI allows one active response per `stream_id` lane, with concurrent lanes. | | | | [ ] | |
| Recover failed turns according to storage and Zero Data Retention requirements. | | | | [ ] | |
| Reconnect safely without duplicating visible output or side-effecting tool calls. | | | | [ ] | |

## Data Privacy and Residency

### Zero Data Retention

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Explicitly confirm Zero Data Retention and other retention requirements. | | | | [ ] | |
| Verify endpoint, model, feature, tool, caching, and background-execution compatibility. | | | | [ ] | |
| Configure stateless storage behavior when required. | | | | [ ] | |
| Preserve existing privacy and storage expectations. | | | | [ ] | |

### Data Residency

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Identify required storage and processing jurisdictions. | | | | [ ] | |
| Verify project settings, regional endpoints, and regional model or feature availability. | | | | [ ] | |
| Confirm residency or regional-processing tradeoffs with the developer. | | | | [ ] | |

## Processing Tiers

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Assess tier requirements separately for each distinct workload. | | | | [ ] | |
| Standard processing. | | | | [ ] | |
| Priority processing. | | | | [ ] | |
| Flex processing. | | | | [ ] | |
| Batch processing. | | | | [ ] | |
| Reserved processing. | | | | [ ] | |
| Confirm pricing, latency, availability, retention, and developer preferences. | | | | [ ] | |

## Prompt Caching

### Prompt Cache Keys

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| For GPT-5.6 and later, omit new cache keys by default and preserve existing keys; for earlier models, use stable cache keys for reusable prompt prefixes. | | | | [ ] | |
| Avoid cache-key and prefix fragmentation. | | | | [ ] | |

### Extended Cache Retention for Earlier Models

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Assess extended retention for eligible models against developer retention requirements. | | | | [ ] | |

### Explicit Cache Breakpoints for GPT-5.6 and Later

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Apply supported explicit breakpoints to stable, reusable content. | | | | [ ] | |
| Choose implicit or explicit-only caching according to conversation and privacy requirements; record any breakpoint deferral separately. | | | | [ ] | |

### Prompt Cache Diagnostics

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Plan how to obtain a suitable comparison response ID and use `prompt_cache_options.comparison_response_id` on eligible GPT-5.6-and-later Responses requests; record evidenced workflow or retained-framework limitations. | | | | [ ] | |

## State Management

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Select local or server-side state according to architecture, privacy, and developer approval. | | | | [ ] | |
| Preserve complete conversation, reasoning, tool-call, and tool-output replay for stateless workflows. | | | | [ ] | |
| Use stored-response chaining only when retention is permitted and approved. | | | | [ ] | |

### Instruction Persistence Gotcha

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Preserve durable instructions across stateless replay and stored-response chaining. | | | | [ ] | |
| Replay instruction input items or resend top-level instructions when required. | | | | [ ] | |

## Reasoning

### Encrypted Reasoning Items

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Preserve complete encrypted reasoning items across stateless turns and tool calls. | | | | [ ] | |
| Preserve original ordering, encrypted payloads, and tool-call identifiers. | | | | [ ] | |
| Avoid replacing original reasoning items with summaries or reconstructed text. | | | | [ ] | |

### Reasoning Effort

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Explicitly configure supported reasoning effort for each applicable model and workload. | | | | [ ] | |
| Preserve established preferences or confirm new quality, latency, and cost tradeoffs. | | | | [ ] | |
| Verify selected model and provider support. | | | | [ ] | |

### Reasoning Preservation

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Assess supported cross-turn versus current-turn reasoning preservation. | | | | [ ] | |
| Preserve required history while respecting context size, latency, privacy, and developer preferences. | | | | [ ] | |

### Reasoning Summaries and Tool-Call Preambles

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Assess reasoning summaries and tool-call preambles for the existing product experience. | | | | [ ] | |
| Preserve existing user-visible behavior and distinguish summaries from verbosity and message phases. | | | | [ ] | |
| Verify selected model, provider, and SDK support. | | | | [ ] | |

## Verbosity

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Configure supported response verbosity for each applicable request. | | | | [ ] | |
| Preserve established preferences or ask the developer before selecting a new setting. | | | | [ ] | |
| Confirm output-length, user-experience, latency, cost, model, and provider compatibility. | | | | [ ] | |

## Maximum Output Tokens

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Preserve existing output limits when appropriate. | | | | [ ] | |
| Avoid inventing a limit without an application or developer requirement. | | | | [ ] | |
| Account for both visible output and reasoning tokens. | | | | [ ] | |

## Assistant Message Phases

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Preserve supported assistant-message phases across requests and replay. | | | | [ ] | |
| Retain structured assistant outputs rather than collapsing them to plain text. | | | | [ ] | |
| Test relevant commentary and tool-loop behavior. | | | | [ ] | |

## Context Compaction

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Assess native compaction for long-running conversations and tool-heavy workflows. | | | | [ ] | |
| Confirm changes to compaction strategy with the developer. | | | | [ ] | |
| Configure appropriate in-request or standalone compaction and thresholds. | | | | [ ] | |
| Preserve encrypted compaction items during manual state management. | | | | [ ] | |
| Verify privacy requirements and model or provider compatibility. | | | | [ ] | |

## Structured Outputs

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Preserve required structured-output schemas, validation, parsing, and error handling. | | | | [ ] | |
| Verify model and provider compatibility and add focused schema tests. | | | | [ ] | |
| Avoid imposing structured outputs on unrestricted-text workflows. | | | | [ ] | |

## Tools

### Tool Choice

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Preserve automatic, required, or restricted tool-selection behavior. | | | | [ ] | |
| Confirm meaningful changes to tool-use policy with the developer. | | | | [ ] | |

### Tool Search and Additional Tools

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Assess deferred tool discovery for large or dynamic tool catalogs. | | | | [ ] | |
| Preserve correctly positioned additional-tool items and append-only replay. | | | | [ ] | |
| Maintain stable cached prefixes without unnecessary tool-search complexity. | | | | [ ] | |
| Confirm adoption or higher-lift implementation with the developer. | | | | [ ] | |

### Parallel Tool Calls

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Assess concurrent execution of independent tools. | | | | [ ] | |
| Preserve execution order, shared-state assumptions, approvals, and side-effect controls. | | | | [ ] | |
| Confirm behavior-changing concurrency with the developer. | | | | [ ] | |

### Programmatic Tool Calling

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Assess supported programmatic coordination of tool calls. | | | | [ ] | |
| Verify model, provider, SDK, tool, and execution-environment support. | | | | [ ] | |
| Preserve permissions, approvals, side-effect controls, and application behavior. | | | | [ ] | |
| Distinguish programmatic calling from ordinary sequential or parallel function calling. | | | | [ ] | |
| Test execution, results, failures, and changed approval behavior. | | | | [ ] | |

### Model-Aligned Tool Interfaces

| Guidance item | Applicable | Supported | Decision | Implemented | Rationale or evidence |
|---|---|---|---|---|---|
| Assess conventional repository-search, patch-oriented editing, or other model-aligned tool interfaces. | | | | [ ] | |
| Confirm higher-lift tool redesign with the developer before implementation. | | | | [ ] | |

## Outcome

**Implemented or already present:** _TBD, by stage._  
**Remaining work:** _TBD: next approved stage and deliverables; separately list deferred, unsupported, and optional improvements._  
**Developer decisions requiring follow-up:** _TBD_  
**Validation evidence:** _TBD; distinguish current-stage completion from completion of the full approved migration._
