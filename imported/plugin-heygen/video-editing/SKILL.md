---
name: video-editing
description: Edit and finish videos in Python with scene assembly, layered media, narration, music, sound effects, and reproducible exports. Use for coded post-production when the selected workflow permits local editing; motion graphics and captions remain in their own skills.
---

# Video Editing

## 1. Own the edit from media to delivery

Produce an intentional, polished edit and the working Python project that rendered it. Treat the task as editorial work: select and order material, shape rhythm, protect meaning and continuity, mix sound, conform picture, and inspect the finished encode. A successful concatenation or a contact sheet is not a finished video.

Use Python as the default language, with available video/audio/imaging libraries and Python-driven FFmpeg. Use another stack only when the user explicitly requests it. Inspect installed capabilities and version-specific APIs; explain a real blocker instead of inventing a renderer. Use the [Python timeline and rendering section](#8-python-timeline-and-rendering) below for clock mapping, FFmpeg orchestration, and scene assembly examples.

Inherit the parent's approved script, assets, timing, style, destination, and restrictions. This skill does not authorize paid generation or change the selected workflow. The [picture-story workflow](../picture-video/SKILL.md) uses Python to place still pictures over one continuous narration master, timing picture changes to actual words.

Use [motion graphics](../motion-graphics/SKILL.md) for animation and explanatory graphics, [captions](../captions/SKILL.md) for subtitles and expressive text, [narrator](../narrator/SKILL.md) for new voiceover, and [script writer](../script-writer/SKILL.md) for authorized copy changes. This skill owns their placement, coordination, mix, and final export, not their detailed authoring techniques.

## 2. Inspect media and establish a sequence

Retain immutable originals. Inventory each asset with a stable ID, local path or supported media reference, provenance/rights, intended role, dimensions, display orientation, pixel/sample aspect ratio, frame rate/time base, duration, audio streams, sample rate/channel layout, and color metadata. Use actual stream metadata and representative decoded frames; filenames and a nominal “1080p” label are insufficient.

Look for rotated phone video, variable frame rate, nonzero stream starts, mismatched audio/video duration, missing audio, and HDR/log footage mixed with SDR. Distinguish actual subject evidence from illustrative stock. Reject an attractive clip that contradicts the narration, loses essential detail in the required crop, or implies an unsupported claim.

Set explicit sequence dimensions, rational frame rate, color workflow, audio sample rate, and intended delivery format. A typical web deliverable is 1080p, SDR Rec.709, H.264/AAC MP4 with compatible pixel format and 48 kHz audio; honor the actual destination and input quality. These are working defaults, not universal platform requirements. Avoid unnecessary upscaling and choose cadence deliberately for mixed-rate media.

Conform incompatible media through time-preserving decoding/resampling. Do not reinterpret a 24 fps clip as 30 fps or change an audio sample-rate label to alter its length. Preserve display geometry when handling rotation and non-square pixels. For HDR/log sources, use a supported color transform/tone map and inspect it; changing tags alone is not conversion. Do not apply a fashionable LUT that destroys skin tones, product color, or chart meaning.

Use lightweight proxies for expensive editing when useful, retaining explicit links to originals and identical timing. Final export must relink to intended full-quality inputs. Keep downloads, caches, proxies, renders, and source assets distinguishable so revisions cannot accidentally use an obsolete proxy or signed URL.

## 3. Build the editorial timeline before polishing

Start with the narration or dialogue that carries the story. Preserve source time and final sequence time separately. Make every retained clip an explicit source in/out plus final start/end; keep stable beat and asset IDs. Keep video frame boundaries and audio sample boundaries explicit rather than rounding every duration independently.

For natural-speed media, `source_time = source_in + (sequence_time - sequence_start)`. The retained source duration equals the final segment duration, within frame/sample rounding. Derive downstream captions, graphics, and audio cues from this mapping after cuts. A cutaway over continuous narration does not reset the speech clock.

Create a cue sheet recording the current idea, exact spoken anchor, source range, final range, leading visual, caption mode, graphic states, audio owner, and motivated sound cue. Rough-cut for meaning first, then refine pace and continuity. Check transitions both into and out of each beat; a strong individual shot can still make a weak sequence.

Use these operations deliberately:

| Editorial operation | Purpose | Preserve |
| --- | --- | --- |
| Straight cut | Move to new evidence, action, or a new visual state | Clear thought boundaries and useful screen direction |
| Cut on action | Carry one understandable action across views | The action's order and state; don't repeat or skip the decisive movement |
| Cutaway / L-cut | Keep the current speech while showing relevant evidence or the next image | Continuous dialogue and its source-to-final timing |
| J-cut | Let the next thought's audio prepare a picture change | Correct sync when a speaking face becomes visible |
| Match cut / motif return | Connect ideas through a meaningful repeated shape, action, or composition | The relationship the viewer is meant to notice |
| Dissolve / chapter transition | Mark a real passage, change, or softer handoff | Enough source handles, readable content, and an intentional audio transition |

J/L cuts separate the picture cut from the sound cut; they do not authorize sliding a visible speaker's dialogue out of lip sync.

Choose cuts by comprehension and emotion, then support them with music. Do not cut every fixed number of seconds or on every beat. Use pace contrast: immediate hook, clear development, time for evidence to register, a purposeful close. Preserve meaningful breaths and pauses. Ordinary editing may remove dead lead-ins or irrelevant tails, but must not clip words or erase hesitation that changes the speaker's meaning.

Transitions consume timeline time. Model overlaps explicitly and recalculate the sequence; do not add a crossfade and leave captions or chapter cues on the old clock. If source handles are missing, choose a clean cut or another available edit, rather than inventing frames or silently looping footage.

## 4. Preserve speed, framing, and source integrity

**Narration, dialogue, talking-head A-roll, and the finished composition stay at their original 1.0× playback speed.** Never use target/source duration ratios, speed ramps, tempo filters, pitch-preserving time-stretch, or frame/sample-rate reinterpretation to fit a runtime. Retiming an authored graphic is local to that graphic. An explicit request for a speed effect on silent B-roll is a separate creative decision, not a global timing fix; it must not affect dialogue or the sequence clock. The one exception is a parent workflow's fixed whole-track speed default for a synthesized voiceover (the UGC voiceover formats use 1.1x), applied once before editing; lay that prepared track unchanged.

If a hard duration limit cannot be met, make authorized content edits or return to the script/production owner for the necessary revision. Preserve locked wording unless changes are approved. Do not force length with freezes, repeated footage, artificial pauses, silent cards, truncated speech, or a forced export duration. Derive export length from the completed edit and report the actual length.

Scale footage uniformly. Never independently stretch width and height to fill the canvas. With matching source/output aspect ratios, intact talking-head A-roll fills the output by uniform resolution scaling, with no extra crop, offset, border, or mask. Its original background, position, and presenter size must remain consistent after cutaways. Do not remove/blur/replace its background, fade the torso, extract a cutout, or add unrequested zooms or punch-ins.

For a requested aspect-ratio conversion, choose the minimum necessary adaptation and inspect it. A cover crop is useful only when it preserves essential content; contain/padding may be appropriate for an exact document or screen view. Resolve a material framing tradeoff with the user when no supported fit preserves the requested content. Do not stretch faces, crop out product evidence, or disguise missing framing with blurred filler.

Apply transforms to the layer that owns them. A caption-safe rectangle must never resize the composition root or footage. Keep head/subject exclusions and destination UI masks in final coordinates. Move or simplify overlays to fix collisions; do not shrink or move a presenter to create text space. A user-requested split-screen/inset, or the talking-head parent's planned image-B-roll split, is local to that interval and must restore the established base framing afterward. For that image treatment, preserve the intact A-roll background and proportions, keep the face visible throughout the transition, and pass transformed head bounds to graphics and captions.

## 5. Assemble visual layers and integrate graphics

Use explicit tracks or layer ordering: base footage or full-screen graphic, cutaways, overlays, then the coordinated caption treatment as appropriate. Keep masks, opacity, blend mode, crop, and transforms local to their layer. Define whether rendered overlay assets use straight or premultiplied alpha and composite consistently; inspect edges for black/white fringes. Pre-render expensive scenes or cache static assets without flattening away source editability.

**Time is the main information hierarchy.** Place a visual when its meaning becomes relevant, hold until it can be understood, then transform or clear it. A transition that exposes every label before the explanation begins defeats this hierarchy. Shorten a decorative entrance or simplify the visual before sacrificing its readable hold.

Pass the same final cue sheet, style values, dimensions, and exclusions to motion graphics and captions. Have those skills return actual active intervals and bounds. Check animation paths as well as settled positions. At a given interval, one primary caption mode owns the text; a hook/emphasis treatment must not leave a duplicate base subtitle underneath or omit unrelated spoken words.

Look for continuity of subject, object state, direction, light, and visual emphasis across cuts. Match exposure/white balance where needed without changing factual appearance. Keep purposeful stylistic differences when the brief calls for them. For full-screen graphic sequences, inspect the chapter handoffs and focal path, not merely the quality of each isolated frame.

## 6. Build and balance an intentional audio mix

Keep separate editable stems for dialogue/narration, music, SFX, and ambience. Choose one speech owner per interval. Mute incidental B-roll audio unless it adds meaningful context, and avoid doubling narration through both a source video's audio and a separate voiceover track. Preserve stereo/mono intent and inspect channel mapping; do not leave speech audible in only one ear accidentally.

Clean dialogue conservatively. Fix obvious level inconsistency, clicks at edits, rumble, or distracting noise only where present. Heavy denoising, gating, compression, or enhancement can erase consonants or create metallic artifacts. Smooth joins at sensible boundaries with tiny fades or appropriate room tone, keeping the words and natural pacing intact. Crossfading two spoken phrases can create overlap; audition the join instead of blindly applying the same fade everywhere.

Choose or compose music according to the parent brief and rights. Faceless-explainer and talking-head default to programmatically composed instrumental music; save composition code and seed. A general edit may use supplied/licensed music when authorized. Arrange sections and an ending for the actual story; don't stretch the speech to the song or repeat an obvious musical seam. Silence is a legitimate editorial choice.

Establish dialogue intelligibility first, then bring music in beneath it. Automate music gain around phrases, anticipating speech onset and recovering through genuine gaps without pumping after every word. Use manual envelopes or a supported sidechain method; listen to the result. Distinguish the music track being reduced from the dialogue driving that reduction. No single fixed “music percentage” guarantees intelligibility across assets.

Place SFX on motivated contacts, reveals, or transitions with a shaped transient and tail. Fit them around important consonants and avoid crowding every visual event. Do not add an effect simply because an animation exists. Keep ambience continuous when the setting continues, and change it intentionally when the setting changes.

Mix with headroom. Measure integrated loudness and true peak on the complete mix and recheck the encoded audio; do not confuse a peak reading with perceived loudness. Honor a supplied delivery specification. Without one, roughly -16 LUFS integrated and a ceiling around -1.5 dBTP are reasonable initial web-review targets, not universal platform rules. Adjust through listening and the actual destination. Very short clips and deliberate silence can make integrated readings less representative.

Listen on headphones and ordinary speakers, including at low volume and in mono when possible. Check that every word remains intelligible, scene levels are consistent, music supports the tone, effects do not startle, and the ending resolves without a click or abrupt cutoff. Use limiting as protection after balancing, not as a repair for a persistently overloaded mix.

## 7. Render efficiently and preserve reproducibility

Separate edit decisions, assets, render functions, and export settings. Use deterministic frame evaluation and seeded randomness. Stream frames/audio or render bounded scenes instead of holding an entire high-resolution video in memory. Cache static text/icons and expensive intermediate graphics. Use a short representative preview to find renderer, font, alpha, and timing issues before a full-resolution render.

Keep lossless or high-quality intermediates where practical and encode the delivery once. Repeated lossy exports degrade text and edges. Verify fonts, external assets, codecs, audio layout, and color conversion in the actual environment. Use explicit stream selection so an unused track cannot become the final narration. Do not let an automatically chosen shortest stream silently truncate the story.

Save a persistent reusable project: originals or lawful retrieval instructions, asset manifest/provenance, sequence/edit decisions, source-to-final mappings, actual speech timing, subtitle sidecar, graphic/caption source, music/SFX sources and licenses, style configuration, dependency versions, and one working render command. Use project-relative paths and exclude credentials, caches, and expired URLs. Record approximate target, measured source lengths, and actual final runtime separately.

## 8. Python timeline and rendering

### Timeline data and clocks

Use an edit-decision record for every retained segment: `asset_id`, `source_in`, `source_out`, `sequence_start`, `sequence_end`, `track`, `audio_owner`, `fit`, and local transforms. Store times with declared units. Rational seconds or integer audio samples preserve the speech clock; output pictures use integer frames at a declared rational rate. Half-open intervals prevent double ownership at adjacent boundaries.

For 30000/1001 fps, preserve `Fraction(30000, 1001)` rather than repeatedly rounding 29.97. Convert absolute cue boundaries once; derive interval lengths from converted boundaries. Distinguish that frame quantization from speech retiming. Audio remains sample-accurate and is not snapped word by word to video frames.

For each output frame, resolve active events, map retained media to source time at 1.0×, decode/cache the required source image, apply that layer's fit/transform, composite graphics, then composite the active caption treatment. Evaluate animation from absolute/local frame index, not cumulative mutation or wall time. Rendering frame 200 directly should match rendering frames 0 through 200 sequentially.

For audio, convert authorized source ranges into sample intervals, position each stem at its sequence offset, apply smooth gain envelopes, and mix in floating point with headroom. Keep the accepted narration as the reference. Store the edit mapping so captions and graphics can be rebuilt after a dialogue cut. Ordinary audio resampling preserves elapsed time; relabeling a sample rate does not.

### Inspect and call tools from Python

Use argument arrays, `check=True`, and captured diagnostics. Avoid `shell=True`, shell interpolation, or printing signed URLs and credentials. Save detailed render logs locally and summarize useful failures. This wrapper expects a new file path as its final argument; use a new output name for revisions.

```python
import json
import subprocess
from pathlib import Path

def probe(path):
    result = subprocess.run(
        ["ffprobe", "-v", "error", "-show_streams", "-show_format",
         "-of", "json", str(Path(path).resolve())],
        check=True, capture_output=True, text=True,
    )
    return json.loads(result.stdout)

def ffmpeg(*args):
    destination = Path(str(args[-1]))
    if destination.exists():
        raise FileExistsError(destination)
    return subprocess.run(
        ["ffmpeg", "-nostdin", "-v", "error", "-n", *map(str, args)],
        check=True, capture_output=True, text=True,
    )
```

Inspect stream starts/durations, not only container duration. Decode suspect media when metadata is incomplete. Use ffprobe for selective metadata, frame inspection, and JSON output. Treat a missing duration as unknown rather than zero.

### Assemble conformed scenes and mix a voiceover

The following small example demonstrates **two silent, already conformed scenes**, a continuous voiceover, an arranged music bed, and one SFX. Run after the helper block above. It is an assembly pattern, not a complete editor or a final mix preset.

Preconditions: `scene-01.mp4` and `scene-02.mp4` share dimensions, frame rate, square pixels, and color interpretation; their combined picture duration matches the accepted narration within one output frame. The music covers that actual edit, and the effect plus its offset fits inside it. All audio starts at timestamp zero. Set `effect_offset_ms` from a real cue; the sample value is illustrative. If the sequence deliberately continues after speech, author that meaningful tail in the master timeline and adapt the mix; this example ends with the narration.

```python
effect_offset_ms = 1200
assert effect_offset_ms >= 0

ffmpeg(
    "-i", "scene-01.mp4", "-i", "scene-02.mp4",
    "-filter_complex",
    "[0:v]setpts=PTS-STARTPTS[v0];"
    "[1:v]setpts=PTS-STARTPTS[v1];"
    "[v0][v1]concat=n=2:v=1:a=0[v]",
    "-map", "[v]", "-an", "-c:v", "libx264", "-crf", "18",
    "-pix_fmt", "yuv420p", "picture.mp4",
)

audio_graph = (
    "[0:a]aresample=48000,aformat=channel_layouts=stereo,"
    "asplit=2[voice][key];"
    "[1:a]aresample=48000,aformat=channel_layouts=stereo,volume=0.12[bed];"
    "[bed][key]sidechaincompress=threshold=0.025:ratio=6:attack=15:release=250[duck];"
    "[2:a]aresample=48000,aformat=channel_layouts=stereo,volume=0.2,"
    f"adelay=delays={effect_offset_ms}:all=1[fx];"
    "[voice][duck][fx]amix=inputs=3:duration=first:normalize=0[mix]"
)
ffmpeg(
    "-i", "narration.wav", "-i", "music.wav", "-i", "effect.wav",
    "-filter_complex", audio_graph, "-map", "[mix]",
    "-c:a", "pcm_f32le", "mix.wav",
)
```

`setpts=PTS-STARTPTS` resets the timestamp origin without changing speed. The sidechain reduces music using speech as its control; the original speech also reaches the mix. `amix` ends at its first input here and disables automatic normalization. **These illustrative gains can still clip**; inspect and balance the float mix before delivery. None of these values is a loudness guarantee.

Inspect `picture.mp4` and `mix.wav`, finish the mix to the chosen delivery target, and retain the accepted result as `mix-master.wav`. After verifying their actual lengths and content, mux explicit streams:

```python
ffmpeg(
    "-i", "picture.mp4", "-i", "mix-master.wav",
    "-map", "0:v:0", "-map", "1:a:0", "-c:v", "copy",
    "-c:a", "aac", "-b:a", "192k", "-ar", "48000",
    "-movflags", "+faststart", "final.mp4",
)
```

No `-shortest` or target `-t` hides a mismatch. If streams differ beyond expected frame/encoder rounding, fix the authored sequence. This example intentionally discards scene audio because narration owns the edit; do not reuse that choice for dialogue footage that must retain its sound.

For more scenes, generate the input arguments and graph from validated timeline data. For overlays, render full-frame or transparent assets through the graphics/captions skills, retaining explicit active intervals, alpha convention, and positions; composite them in the picture stage before its final encode. Do not concatenate each graphic as if it were a replacement for continuous narration.

### Choose the rendering path by the work

Python-driven FFmpeg is effective for media decoding, joins, stream selection, audio processing, and encoding. Python drawing libraries can render custom frames and masks; cache static layers and stream frames instead of building an enormous frame list. Use a higher-level Python compositor when its installed API makes layered timing easier, and retain references until encoding finishes.

If using MoviePy, check its major version. Version 2 uses direct imports from `moviepy`, `with_` methods, and changed effect APIs; do not mix these with old `moviepy.editor` examples. Distinguish sequential concatenation from layered composition. Clip start times position clips in a composition; they are not source in-points. Retain/close underlying file readers correctly after the final render.

For advanced finishing, use supported installed capabilities instead of claiming parity with every Premiere feature. Stabilization, optical-flow slow motion, automatic subject removal, and speech enhancement are not prerequisites for a polished edit; they can damage source fidelity or violate the brief. A deliberate sequence, clean geometry, readable graphics, precise timing, and an intelligible mix take priority.

### Validate observable behavior

Before a real export, exercise new timeline code with short synthetic media when useful: differently colored scenes reveal ordering and gaps; a short tone at a known cue reveals audio offsets; mismatched shapes reveal accidental stretching. Check boundaries around cuts, including the frame just before and after each join. Do not use paid generation for renderer tests.

Probe the result, decode all streams for errors, and compare measured duration against the actual edit. Inspect representative encoded frames and listen to joins; metadata alone cannot establish quality. For a copied narration segment, compare its source and final elapsed time to confirm its speed is unchanged. Check onset and tail so a successful mux cannot conceal dropped words or extra silent time.

## 9. Review the real export and deliver

Watch and listen to the complete short preview at normal speed. For long work, review continuous passages from every chapter, all transitions, and all flagged intervals; state any unreviewed portions. Refine demonstrated editorial and technical problems, retaining successful assets. Screenshots cannot prove timing, lip sync, or a good mix.

Inspect the final encoded file as well as the preview:

- **Story and rhythm:** truthful immediate hook, advancing middle, understandable evidence, chapter/motif continuity, and an earned close without padding.
- **Picture:** expected dimensions and display aspect, intact framing/background, useful crops, consistent color, clean alpha edges, no black gaps, flash frames, frozen tails, or missing assets.
- **Time and sync:** natural-speed retained segments, actual speech-aligned graphics/captions, continuous audio under cutaways, and correct lip sync whenever a mouth is visible.
- **Text:** readable at intended viewing size, no competing caption layers, accurate names/numbers/qualifications, full requested coverage, and destination UI masks checked. Apply the captions skill's detailed review.
- **Sound:** correct speech owner, audible clean dialogue, no clipping or accidental channel loss, controlled music/SFX, and clean joins/ending.
- **File and project:** correct streams/codecs/frame rate, measured duration consistent with the edit, successful full decode, and working source/asset references.

Compare matching source-time frames before and after cutaways to catch accidental changes to talking-head scale, background, or position. Review the render configuration for rate multipliers and forced-duration settings; compare source and output speech for altered cadence or pitch. Correct the underlying transform or timeline error while preserving successful graphics and captions.

Return the finished edited MP4, displayed inline when supported with a usable file/artifact link, plus the working project and measured runtime. A pending generation ID, source player, or code alone does not meet an editing request. State what was actually reviewed and any environment limitation; do not claim full audiovisual review if only frames and metadata were inspectable. Do not publish or upload to an external destination without authorization.
