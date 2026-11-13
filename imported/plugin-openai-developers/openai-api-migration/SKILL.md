---
name: openai-api-migration
description: Audit and migrate existing AI integrations to current OpenAI APIs and models, preserving behavior and upgrading where efficiency gains are possible. Use for legacy APIs, provider migrations, or Responses API improvements.
---

# OpenAI API Migration

Migrate or improve existing LLM integrations, products, and agents to make the most effective use of OpenAI models, APIs, SDKs, and tooling.

## Scope

**In scope:**

- Migrating existing LLM-based applications and agents to the Responses API.
- Improving existing Responses API integrations and applicable API capabilities.
- Updating SDK configuration and provider-specific integration paths.

**Out of scope:**

- Audio, speech, and transcription endpoints.
- Changing an existing model without the developer's direction.
- Prompt migration, prompt optimization, or rewriting application instructions.
- Introducing or reworking multi-agent orchestration unless the developer explicitly requests separate work.

## Migration Philosophy

Meet developers where they are. Recommend the next improvement that fits their current maturity and appetite for change, balancing its benefits against the architectural overhaul it requires.

- Preserve existing providers, SDKs, abstractions, and agent harnesses by default; do not assume a complete rewrite or direct OpenAI integration is acceptable.
- Where the current setup has clear gaps, first improve its use of OpenAI models and Responses API capabilities, including relevant tooling, state management, caching, and performance features.
- When the existing setup is already strong, consider whether a larger step—such as a direct OpenAI integration or Codex App Server—would deliver greater value; explain the tradeoff and confirm the developer's willingness before changing providers or harnesses.
- Treat migration as an incremental journey: each use of the skill should leave the application in a better position without exceeding the developer's agreed scope.

## Workflow

Follow numbered steps in sequence; unordered bullet points may be addressed in whichever order best fits the task.

1. **Confirm the task objective.**
   - Before proposing implementation, explicitly state in the visible conversation whether the developer wants an assessment only or an assessment followed by implementation.
   - If the original request does not make this clear, ask before continuing and visibly acknowledge the answer.
   - For implementation that will call the OpenAI API, follow [openai-platform-api-key](../openai-platform-api-key/SKILL.md) and resolve the credential decision before API research or implementation planning; honor an already resolved credential decision. This gate does not apply to assessment-only work or implementations that use only other providers.
   - For assessment-only work, identify and scope potential changes without editing the repository; for implementation, resume an existing `TEMP-openai-migration-ledger.md`, or copy `assets/migration-ledger-template.md` into the workspace at that path only if it does not exist, before scoping. Commit the generated ledger alongside the migration changes unless asked otherwise.
2. **Understand the application and migration potential.**
   - **Understand the application.** Inspect the repository's distinct workloads, every model and request path, actual providers and API endpoints, SDKs, agent harness, configuration, tests, and application documentation.
     - Also understand the developer workflows, approval processes, and team conventions that may impact migration decisions.
   - **Understand the migration potential.**
     1. Confirm that the OpenAI developer documentation MCP or OpenAI Developers plugin is available; use it when possible, or fall back to official OpenAI documentation and, when needed, pull its official documentation or SDK repositories into a temporary directory.
     2. Walk through every heading in `references/responses-api-guidance.md` once, recording applicability, current support, workload benefit, unresolved developer questions, and concise evidence in the migration ledger for implementation, or in the visible assessment for assessment-only work. Keep unknowns explicit; do not assume every capability must be implemented, but do not omit applicable or higher-lift capabilities from the proposed stage plan.
     3. Review current OpenAI documentation for recent capabilities, updated guidance, or implementation details not yet covered by this skill.
3. **Scope the migration.**
   1. Clarify material product decisions, whether Zero Data Retention applies rather than inferring it from `store: false`, other privacy requirements, workload-specific model and processing-tier choices, request controls, configuration preferences, and integration selection when unclear. Visibly state the question and relevant options/tradeoffs and acknowledge the developer's answer. For implementation, record that concise question/options/answer receipt in the ledger before planning.
   2. Use the recorded assessment to agree scope and resolve outstanding developer questions, recording the resulting decisions and evidence. Ask the developer whenever their answer is needed to determine scope. Reassess only entries affected by new evidence or changes to the selected model, integration, privacy requirements, or scope; resolve material unknowns before the affected implementation.
   3. Compare feasible improvements against the existing architecture, expected benefit, implementation effort, affected files, compatibility risk, data retention, and privacy requirements.
   4. Use `references/provider-framework-guidance.md` to verify and record the existing provider's or framework's material limitations.
   5. If migrating from another provider or framework, visibly compare (perhaps tabulate) capability, transport, retention, portability, and maintenance tradeoffs between preserving the existing integration and adding a direct OpenAI route; ask the developer to choose before selecting an architecture.
   6. Finalize the integration choice and identify every requested workflow that must gain the new route. An additive implementation may retain legacy routes, but does not replace coverage of those workflows; any narrowing of the original task needs explicit developer agreement.
   7. Use this assessment to break the full applicable migration into a provisional stack of explicit, ordered feature stages (including later higher-lift stages), where unresolved decisions and stage approvals may remain pending.
      - Visibly present this assessment before asking the developer to approve implementation scope. For assessment-only work, stop after presenting the assessment.
      - As part of the same approval question, ask which execution workflow the developer prefers—iterative review by default, all approved stages in one go, or their own process that may be derived from the developer's existing workflows and conventions or from their own prompted preference, unless already specified. Ensure that the outcome of this approval guides the subsequent stages of planning the reviewable changes and delivering upon the agreed plan.
4. **Plan a reviewable change.**
   - Preserve existing product behavior, public signatures and positional arguments, entry points, output and error formats, incomplete-response handling, persistence, input/output/cached-token accounting, and configuration conventions; keep unrelated files unchanged.
   - Finalize applicable, supported improvements within the approved scope using the ledger's decision definitions. Resolve material pending choices before implementation; a generic preference for incremental work or a suggested later stage is not permission to defer a specific feature.
   - Expose the OpenAI integration through existing model selection, a configuration file, a command-line flag, or another developer-approved route; update affected existing setup instructions, checked-in configuration examples, benchmark guidance, and deployment documentation.
   - Keep existing providers available unless their removal is agreed.
   - Minimize dependency changes and map each required workflow and affected behavior to focused tests and existing-suite checks in the ledger.
   - Refine the approved portions of that provisional feature-stage stack into implementation-ready stages. Each stage must deliver a usable capability increment rather than an internal phase such as assessment, planning, implementation, or testing. Before implementation, outline each stage's deliverables, dependencies, and approval status in the visible conversation and ledger, distinguishing the current stage, later approved work, and optional proposals. When authorized, the stages may be delivered as stacked pull requests.
5. **Deliver the agreed plan in stages.** Repeat the following sequence for each approved feature stage in the agreed order:
   1. **Implement the stage.** Implement every approved model and request path in that stage; verify requests reach the intended endpoint, and normalize defaults and caller-supplied options and headers for its model and provider using `references/provider-framework-guidance.md`. Update the migration ledger as approved work is completed.
   2. **Validate the stage.**
      - Add or update focused mocked tests from the coverage map. Exercise migrated and affected retained routes through their application, integration, and orchestration boundaries on applicable success, failure, and stopping paths, including request options, caching and token accounting, replay, tool dispatch and malformed outputs, concurrency, retries and timeouts, streaming failures and cleanup, persistence, limits, and generated artifacts where applicable. Mock outside the behavior under test; execution or persistence claims require invoking the responsible code and asserting its effects.
      - Run focused tests as changes are introduced and, before final handoff, the complete existing suite using the repository's documented test setup; fix migration regressions before continuing. If setup, collection, or execution is genuinely blocked, record the attempted command and concrete blocker in the ledger, run feasible remaining checks, and identify the unverified coverage.
   3. **Summarize the stage.** After each stage, post a concise review in the visible conversation and update the migration ledger to match. Make the review understandable without the user needing to open the diff or ledger:
      - **Stage status:** Name the stage and distinguish implementation status from validation status. State whether this completes the current stage or the full approved migration.
      - **Before → after:** Explain the most important changes: previous behavior, new behavior, the key files or functions involved, and why the changes matter. Mention preserved behavior where compatibility matters. Prefer a short table when it helps comparison; avoid an exhaustive file inventory.
      - **Usage example:** Show a short example of any entry point, configuration, model selection, or other developer-facing usage changed in this stage.
      - **Successfully checked:** Report which existing and new tests or other checks passed, their results, and briefly the behavior they cover. Distinguish focused tests from the complete suite, and mocked or local checks from live API verification; explicitly state whether the complete suite passed.
      - **Still needs checking:** Identify failed, blocked, or unrun checks, why they remain outstanding, and what is needed to resolve them. Do not imply broader verification than the evidence supports.
      - **Pivoting**: At any point in this loop, revisit the plan and check with the developer if implementation uncovers a material blocker, unexpected complexity, or a change in scope.
      - **What comes next:** Name the next feature stage from the existing plan, its main deliverables, dependencies or unresolved decisions, and approval status, referring to `TEMP-openai-migration-ledger.md`. Distinguish remaining approved stages from optional proposals; if no approved stages remain, say so. Ask for approval to continue unless continuation is already authorized under the agreed workflow.

## Evaluation

For maintainers evaluating this skill, see [evaluation cases](references/evals.md). Load this reference only for evaluation setup or grading, not while performing an application migration.
