---
name: narrator
description: Create narration voiceovers with HeyGen speech synthesis and hand off verified audio and timing for editing. Use for standalone voiceovers or a parent video's off-screen narration; preserve approved wording and voice identity.
---

# Narrator

## 1. Scope and handoff

Turn an agreed spoken script into clear, natural narration using HeyGen **`create_speech`**. Return the accepted audio, measured duration, exact spoken text, voice and model provenance, and any reliable timing data to the calling workflow. Do not generate an avatar or a video to obtain a voiceover.

Inherit the parent's script, language, audience, voice preference, runtime target, approval state, and output/display requirements. Use [script writer](../script-writer/SKILL.md) when writing or revising copy is requested; do not silently rewrite approved wording. Narration preparation does not change a parent's editing technology or its review gates. For example, picture-story's explicit HeyGen Voice requirement still applies.

Inspect the live callable schemas before synthesis. Tool namespace prefixes and field casing vary by host. Refer to the actual tools, not an invented API wrapper. Do not assume that REST API or web-editor capabilities are exposed by the connected MCP tools.

## 2. HeyGen speech tool contract

| Tool | Use | Boundary |
| --- | --- | --- |
| `choose_voice` | User browses HeyGen's public voices or the workspace's private voices with audio previews | “Add to chat” selects a reference; “Create speech” requests one call for one agreed script. |
| `list_voices` | User delegates choice; list HeyGen Voice voices (`type: public` for HeyGen's voices, `private` for the workspace's clones) | Public voices come best first and take `language`, `gender` and `age` filters or a free-text `query`; private voices come newest first and take no filters. Each has `voice_id`, `name`, `language`, `mode` (`instant` or `professional`), `status`, and preview audio. Only `ACTIVE` voices can speak. |
| `create_speech` | Synthesize the agreed text with a verified voice | Returns audio URL (WAV by default), duration, and word/character timings when `with_timestamps` is set; may open an inline player. Each call consumes quota. |
| `create_speech_without_player` | Synthesize an internal narration asset without opening a player | Same synthesis purpose and quota/retry rules; use only when actually exposed. |

Pass the script in the schema's text field and the returned voice ID in its voice field; some hosts use `voiceId`, others `voice_id`. Inspect input limits, language, supported settings, and output fields rather than copying a request from another adapter. Omit unsupported options. Do not fabricate a speech job ID, status endpoint, or markup the schema does not document.

All speech uses HeyGen Voice; there is no engine to choose. Use only a `voice_id` returned by `list_voices` or `choose_voice`; IDs from older HeyGen voice catalogs are refused. Omit `model` so the server picks the plan's model (`heygen-voice-1-turbo-free` on a free plan, which speaks instant voices only, and `heygen-voice-1` otherwise). Set `model` only when the user explicitly asks for one; professional clones speak only with `heygen-voice-1`. Set `language` to the text's ISO 639-1 code, such as `en`, or omit it to detect; regional tags such as `en-US` fail. Record the requested voice, model, and settings and what was returned.

A 429 for the workspace's daily Turbo Free limit (`retryable: false`) stands until it resets: explain it and do not retry. A 429 saying free capacity is full (`retryable: true`) is temporary: back off and retry once. Report the returned cause of any other error, such as HTTP 400 for an unsupported language or invalid parameter. After any other generation failure or timeout, user approval is required before another generation; no automatic fallback voice or retry. This also applies to an apparently unsuccessful request whose outcome is unknown.

## 3. Resolve the voice without unnecessary auditions

Reuse a voice the user has already selected. Otherwise offer the real voice picker or a brief description of the desired voice. Resolve language, accent, warmth, register, energy, and intended delivery only as needed. Match the audience and material: clear conversational authority for an explanation, space for reflection in a story, or direct energy for a short product demonstration.

Use `choose_voice` when the user wants to browse. Wait for the actual returned choice; an “Add to chat” action provides a voice reference and is not itself a generation request. If the user delegates selection, call `list_voices` without opening the chooser: for HeyGen's voices, narrow the `public` list with the brief's language, gender, age or a descriptive `query` rather than paging the whole catalog; use `private` for the workspace's clones. Pick a real returned `ACTIVE` voice whose name, language, and preview fit the brief. Do not invent voices or silently swap a voice the user chose.

Do not generate samples or alternate takes merely to audition voices. Catalog previews can support selection. Creating a custom clone is a separate user request with the actual service's consent requirements; possession of a photo or recording does not establish consent. A compatible existing authorized voice does not need a new cloning process.

## 4. Prepare speech-ready text

Separate `spoken_text` from visual direction and production notes. Do not send chapter numbers, cue times, stage directions, Markdown headings, or bracketed emotion prompts as narration. Use plain text unless the tool documents the needed markup for the selected voice: instant voices perform documented square-bracket audio tags such as `[laughs]`, and professional voices accept `<break time="0.5s"/>` pauses. Unsupported bracketed text is usually not spoken.

Read for breath and sense. Check names, acronyms, dates, numbers, units, URL pronunciation, language switches, and phrases whose meaning changes with emphasis. Keep a pronunciation note alongside the script. Use a documented pronunciation control when the schema offers one for the voice, such as inline IPA or a `pronunciation_dictionary` for instant voices; otherwise propose an authorized text adaptation rather than inventing a field or silently replacing locked words. Save both approved written copy and the exact submitted speech text when they differ.

Natural pauses and conversational phrasing come from a well-written script and appropriate voice, not extreme punctuation or a speed parameter used to fit a stopwatch. Preserve selected delivery settings when suitable. Runtime estimates are planning aids; never increase delivery speed or stretch rendered audio to force a nominal duration. A parent workflow may set a fixed speed default for its whole narration track, applied after synthesis rather than through HeyGen (the UGC voiceover formats use 1.1x with FFmpeg `atempo`); that is a delivery choice, never a duration fit.

Prefer one coherent take for a short voiceover. For longer scripts, respect the actual tool text limit and split at semantic boundaries with complete thoughts. Record the agreed chunk plan and count before a batch; a voice-picker “Create speech” selection authorizes one call with one agreed script, not multiple samples or a batch. Reuse the same voice and supported settings across authorized chunks. Do not split speech into one request per visual state when continuous prosody would work better.

## 5. Synthesize once and retain the result

Call `create_speech` with the approved text, verified voice, and any supported settings. When the parent needs internal assets and the host exposes it, `create_speech_without_player` is the documented alternative returning the same kind of audio result without opening a player. Do not invent a `hidden` or preview-suppression field. A tool-managed player is not another generation request, and hearing/downloading its result must not trigger synthesis again.

Record the submitted text, real voice ID, explicit or server-chosen model, language/settings, returned identifiers, audio reference, and duration. Keep credentials out of the project. Use the returned audio URL or asset through the host's permitted media-access path. Preserve a local original when authorized and available; do not assume an expiring URL is a reusable source asset. Check format from the actual file, not its extension.

**After a generation error or timeout, ask the user before another generation.** Preserve any returned identifier, reconcile an uncertain outcome using supported read/status tools if available, and report the actual failure. Apart from the single backoff retry for a retryable free-capacity 429, do not automatically retry, switch voices or models, create a replacement take, or repeat a widget's user-triggered regeneration. Do not invent a speech-status tool when none exists. A plan, language, or quota error needs its real cause resolved.

## 6. Validate content, delivery, and timing

Listen to the full short take; for longer narration review every chunk, all joins, and suspect passages. Compare against the approved text, especially names, numbers, units, negations, repeated/omitted words, and the end of each sentence. Evaluate intelligibility, pronunciation, emotional fit, breath, and continuity as well as transcript fidelity. A correct transcript cannot establish pleasant delivery.

Measure actual audio duration. Preserve optional returned word timestamps when supplied and reliable; validate them against the recording. Otherwise use available transcription/alignment and correct errors. Do not distribute words evenly across the duration. If only phrase timing is reliable, provide that and let [captions](../captions/SKILL.md) avoid word-level highlighting. If audio inspection or alignment is unavailable, identify the limitation rather than reporting a passed review.

Keep originals unchanged. Where the parent permits local audio preparation, trim unnecessary leading/trailing silence or join chunks only at meaningful boundaries, preserving breaths and consonants. Use short boundary fades only where they cannot erase speech. Store explicit source-to-final mappings and update timing after edits. Preserve speed and pitch at 1.0×, apart from a parent workflow's fixed whole-track speed default, which keeps the pitch. Do not denoise clean synthesis heavily or apply effects that make it metallic. Follow parent restrictions when local processing is disallowed.

A defective take or substantial duration mismatch may require a script revision or additional paid synthesis. Obtain the required approval for that change/call; retain accepted takes. Graphics and music should fit the accepted narration, not demand its regeneration for convenience.

## 7. Deliver the narration handoff

For standalone narration, provide the actual playable audio/file and measured duration. For a parent video, keep intermediate display consistent with its contract and hand off the audio internally. Save exact submitted and actual spoken text, corrected timing with its coordinate system, voice/model/settings, source identifiers, pronunciation notes, original audio, any edit mapping, and review limitations. The video editor owns final mixing; the captions skill owns subtitle segmentation and rendering.
