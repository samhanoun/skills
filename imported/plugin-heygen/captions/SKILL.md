---
name: captions
description: Create and time video subtitles, opening hook captions, and expressive mid-video emphasis in Python. Use for readable speech-synchronized text and coordinated caption treatments in an edited video; preserve a complete transcript and reusable caption source.
---

# Captions

## 1. Three roles, one coordinated text system

Use Python for transcription processing, timing, text layout, animation, and rendering, with available libraries and Python-driven FFmpeg. Use another programming language or rendering stack only if the user explicitly requests it. Inherit the parent video's style, final audio, dimensions, safe areas, head bounds, and edit decisions. For standalone work, obtain the actual media and intended language/destination; do not fabricate timestamps without audio.

| Role | Job | Treatment |
| --- | --- | --- |
| Base subtitles | Convey the actual spoken content throughout the video | Stable, accurately timed phrase groups, modest emphasis, consistent placement |
| Opening hook | Establish an immediate, truthful reason to watch | One short, specific promise, tension, question, or surprising contrast, prominently designed |
| Stylistic emphasis | Make a meaningful mid-video statement land | A brief change in typography or motion on the exact important phrase, then return to the base style |

The parent talking-head workflow enables subtitles by default, including over B-roll. While its A-roll renders, prepare real font assets, measured phrase layouts, highlight styles, and caption-rendering code; use semantic anchors until actual audio alignment is available. Do not display raw A-roll, invent final timestamps, or end the parent's production loop when caption scaffolding is ready. Caption checks share talking-head's single combined post-editing review round; do not add a separate caption polish loop. Hook or stylistic-caption intervals replace the base subtitle layer visually; they must not create competing text stacks. Preserve explicit user caption preferences. This skill does not choose a new avatar, rewrite approved speech, or regenerate A-roll.

Use a coherent modern caption treatment with readable typography, natural phrase grouping, accurate timing, and deliberate placement. Treat readability and transcript fidelity as the foundation of expressive typography. **Use time as the main hierarchy:** one readable phrase arrives, its key word earns emphasis, then it is replaced. Do not lay out a persistent headline, category label, slogan, and subtitles in separate page regions. Keep a complete plain subtitle track even when the visible treatment is highly stylized. It supports revisions and accessible delivery; a hook alone is not a transcript.

When full accessibility captions are requested, include speaker identification where the speaker is unclear and meaningful non-speech sound or music cues needed to understand the scene. Time those cues to the actual audio, distinguish them from dialogue, and preserve them when changing caption treatments. Expressive text alone does not provide complete accessibility captions.

### UGC handoff

When called from a UGC format, caption the accepted final HeyGen video with its existing native speech or mixed voiceover intact. Follow the parent UGC caption and final-only delivery rules. Transcription here serves text timing against the existing audio only. Preserve the underlying edit and audio; return the checked captioned export to the parent workflow. Add only the caption treatments the parent format calls for; UGC formats caption by default unless the user turns captions off. When the parent format has no speech, add only its approved timed text moments, without transcription or a subtitle track. For UGC product footage, center captions at about 70–75% of frame height, above the bottom fifth, instead of the provisional 18–65% area in section 7; use bold white sans-serif with a dark outline or soft shadow and no box, in one or two short lines of about three to seven words broken at phrase boundaries. If this flow cannot run, say so with the specific observed reason (or that it is unknown) and preserve completed work.

## 2. Start from the final audio

Agent listening is optional. Without audio perception, use transcription/alignment and visual/technical checks, record `listening_review: not_performed`, and disclose that audible quality was not checked. Do not treat unavailable listening as the Captions flow being unable to run; missing reliable timing, rendering capability, source access, or actual tool permissions remains subject to the parent UGC caption rules.

Use returned reliable timings or transcribe the rendered speech with a supported tool. Compare the actual transcript and alignment with the approved script, especially for names, numbers, units, negations, technical terms, and changed wording. Without listening, preserve uncertainty in ambiguous spans rather than treating planned words as confirmed speech. The audio determines what was actually said. An approved script helps correct recognition errors but must not insert words that were never spoken.

Obtain word-level alignment when individual words will be highlighted. Ordinary phrase subtitles can use accurate phrase intervals. Do not manufacture word timestamps by dividing a sentence evenly or estimating from character counts. If reliable word alignment is unavailable, use phrase-level captions and make that limitation clear rather than producing inaccurate karaoke.

Preserve the spoken language and punctuation that clarifies meaning. Do not translate unless requested. Use fonts and a shaping engine that support the language, including right-to-left or complex scripts where relevant. Inspect ambiguous or low-confidence spans. Avoid hallucinated speech in pauses or music.

Finalize A-roll trims first or maintain an explicit source-to-final-time mapping. Every subtitle, highlight, hook, and emphasis event must use final-video time after edits. A cutaway over continuous narration does not shift that clock. Recompute affected events whenever dialogue timing changes.

In talking-head edits, preserve A-roll video and dialogue at their original 1.0× speed. Derive captions from the actual natural delivery; never stretch or compress speech, the video, or the entire caption schedule to force a target runtime. Adjust phrase grouping and graphic competition to improve reading time. A small difference from the target approximate length is acceptable.

## 3. Segment for comprehension

Group words into meaningful phrases, using syntax, pauses, emphasis, available width, and reading time together. For portrait social video, favor compact phrase groups that replace one another near a stable focal region instead of a whole sentence stretched across the bottom of the frame. Do not force every cue into a fixed word count or flash isolated words too quickly to read. Use one or two lines; keep articles with nouns, modifiers with their subjects, names together, and negation with the statement it changes. Prefer mixed case for ordinary subtitles and reserve all caps for short expressive treatments.

Measure rendered text with the actual font, weight, tracking, and output scale. Avoid a tiny orphan word on a second line and avoid breaking a phrase purely to make the two lines visually equal. Check punctuation and line wrapping manually on difficult cues. Rephrase hook copy or regroup subtitle words before reducing type to an unreadable size; do not silently paraphrase exact spoken subtitles to fit a template.

Use reading-speed checks to flag trouble, not to justify deleting meaning. For English, characters per second can be calculated as visible characters including spaces divided by the usable reading duration. Start by flagging cues above roughly 20 characters/second for adults or 17 for children, then adjust to the audience, language, speech rate, and visual competition. These are review thresholds rather than universal limits. A graphic competing for attention may need more time; regroup the cue or simplify the graphic without deleting spoken meaning.

For normal phrase cues, roughly 0.8–1.0 seconds is a useful lower-bound warning and 1.5–3 seconds is often a practical starting range. Long pauses should not leave obsolete subtitles hanging. These are editorial checks, not forced durations: a short exclamation can be brief, while a dense phrase needs longer. Prefer regrouping, available pause space, or simplifying simultaneous graphics to a barrage of flash captions. Obtain authorization before changing approved spoken content.

## 4. Time legibility, not just visibility

Align cue onset closely with speech. If text has an entrance animation, it must already be legible when its associated words are spoken; slow type-on that reveals the last word after it has been said is a failure. Use immediate appearance or a very short entrance for base subtitles. Reserve longer motion for hooks or emphasis with adequate time.

Keep a cue visible long enough to finish reading and, when the next cue and edit allow it, use a small tail into the natural pause. Do not reveal a punchline, number, or negated conclusion early. Inspect rapid handoffs in playback; avoid blank flashes, leftover text, and two cues occupying the same region. A direct replacement is often clearer than repeated fade-out/fade-in cycles.

Subtitles may continue across B-roll cuts when the speech continues. Do not reset the same phrase merely because the picture changed. At a genuine topic change or pause, clear the obsolete cue. Platform delivery specifications may require precise gaps or durations; use them when requested, but do not impose broadcast frame-gap rules on every burned-in social caption.

For word emphasis, display the complete readable phrase at a stable position and highlight only the word being spoken. Premeasure the full phrase so its width and baseline do not shift with each highlight. A color/underline change is usually sufficient; large per-word scaling creates collisions and a restless reading path.

## 5. Write and stage opening hooks

Choose hook copy from the video's actual promise. Internally consider a few concise alternatives and pick the most specific truthful one. Useful structures include a consequential question, a concrete benefit, a misconception corrected by evidence, or a contrast the video will resolve. Avoid generic “watch this,” unsupported superlatives, fabricated urgency, and vague chapter titles.

Examples of shape, not claims to paste into unrelated videos: “What this price leaves out,” “The step most demos skip,” or “One change. Three effects.” Prefer roughly 3–8 meaningful words when possible, but clarity matters more than a count. Tie the hook to the first spoken beat and the opening visual; do not make the viewer read one promise while listening to a different subject.

For portrait social videos, start with the presenter or relevant footage filling the frame and place the hook over that active image. Make it readable immediately or within the first few moments. A generic slogan on an empty opening card delays the actual story. Use a full-screen typographic opening only when the words themselves deliver a specific immediate payoff and the transition into footage earns the interruption. Skip a long logo opener and do not spend the hook interval assembling letters. Use one dominant text block and one emphasized idea. Respect the face, safe areas, and image focal point; let the hook settle, then clear it when its job is done.

An editorial hook may paraphrase the premise, while base subtitles must follow speech. Prefer a hook built around the actual opening phrase, transitioning into subsequent speech captions. If the words differ, integrate the relevant speech into one coherent treatment or use an existing brief non-speaking moment. Do not add silent pre-roll just to make room for a title. Never silently drop unrelated speech merely because a hook is on screen; a sidecar does not excuse missing information in the visible treatment.

## 6. Make mid-video emphasis selective and meaningful

Select genuine pivots: a reveal, a surprising number, a useful contrast, a correction, a chapter payoff, or the central takeaway. The important word should receive the emphasis at its spoken cue. Do not assign a new font, effect, or large headline to every sentence. Return to calm subtitles between emphasis beats so the contrast remains effective.

Use a small vocabulary consistent with the chosen visual style:

- A highlight band or underline that completes on the key phrase.
- One brief scale emphasis that settles, with surrounding text remaining readable.
- A clean split-line contrast, introducing each side when spoken.
- A large number with its unit and necessary qualifier visible together.
- A short typographic change at a chapter payoff, followed by a clean return to base captions.

Keep these treatments attached to the current shot when possible. Replace the current caption rather than adding a second headline above it. In a contrast, reveal each side at its spoken cue; retain both briefly only if seeing them together helps the comparison. Clear the earlier phrase instead of accumulating a stack of slogans. A full-screen text interruption should be brief and purposeful, then return to footage; do not turn every emphasized line into a title card.

Emphasize the whole meaning. “Not guaranteed” must not become a huge “GUARANTEED” with an unreadable negation. Do not separate a percentage from its denominator or omit a qualification to make the caption punchier. An invented slogan should not masquerade as a quote.

Limit simultaneous text motion to the element that earns attention. Avoid rotating sentences, random word scatter, persistent bouncing, jitter, or forcing the eye to chase each word across the frame. Sound accents are optional and should land with the reveal, below the speech.

## 7. Coordinate caption modes and layout

Use a single caption schedule with explicit `subtitle`, `hook`, and `emphasis` modes. Every event has its final start/end time, display text, covered speech/word IDs, style role, and region. If a hook or emphasis interval intersects a base cue, split or redesign the cue at real word boundaries. Suppress only the overlapping base segment, then restore the remaining words at the correct time. Do not delete an entire sentence because two words received emphasis.

At most one primary caption treatment should own a given interval. One treatment may contain a dominant phrase plus a subordinate continuation, but should read as a single composition. Check both temporal overlap and the bounds of animated letters, outlines, shadows, and highlight shapes. Keep a complete plain SRT/VTT transcript; it retains all speech even where the burned-in treatment changes. Briefly explain how to avoid displaying the sidecar over already burned-in captions.

For portrait social video, place captions **over the full-frame image**. In talking-head, prefer a stable top or bottom band within the usable safe area so the center stays available for the narrator and motion graphics. Choose the band that clears the actual face and active graphic; keep ordinary cues in that band rather than bouncing between top and bottom. Lower captions must clear bottom descriptions, account/audio controls, and navigation with breathing room; upper captions must clear top controls and the head. Keep the complete text, stroke, shadow, and animated bounds inside the safe region. Top/bottom refers to the usable region, not the frame edge. Central hook/emphasis text is appropriate when it is the primary visual; otherwise simplify a competing graphic or use a cutaway if neither band fits. Honor explicit parent-format placement overrides. Preserve the footage's original background, scale, and placement. Do not remove/blur its background, cut out the presenter, fade the torso, crop or shift the image, or shrink it to make a subtitle panel. When the talking-head parent plans a bounded image-B-roll split, inherit its interval-specific footage placement and transformed head bounds; captions must fit that treatment without introducing another presenter transform. Otherwise use the intact A-roll screenshot at its baseline output placement to reserve the head region. When a chart needs the same region, redesign the chart or establish a consistent alternate caption position rather than making the subtitle jump randomly.

**Use the full output frame as the horizontal reference.** In talking-head edits, default the measured caption group's center to `W/2`, not the presenter, a split panel, or the midpoint of an asymmetric safe rectangle. For actual rendered ink bounds `(left, top, right, bottom)`, use text origin `x = W/2 - (left + right)/2`; include stroke, shadow, and backplate bounds and center multiline text within the group. Use a transparent `W×H` overlay or apply one explicit local-to-output translation. Keep the composition root unchanged. To clear controls, first narrow/regroup or move vertically while keeping the center axis; document and inspect any necessary intentional offset. The provisional safe percentages below constrain bounds, not the center anchor. Honor a parent format's explicit placement override.

For talking-head social captions, inherit one distinctive modern treatment: bold condensed or geometric type, compact phrase groups usually around 2–5 words, one accent word, controlled short reveals, and local contrast protection. Choose the font weight, spacing, line height, emphasis shape, and motion as a coherent system, not an unrelated preset. Avoid paragraph boxes and a new effect per cue. Keep all speech through sequential groups rather than deleting words to fit. When a graphic or moving B-roll detail owns attention, keep captions stable and subordinate; reserve a pop, sweep, or scale accent for a caption-led beat when the supporting visual is calm. Merge matching graphic/caption words into one timed treatment; preserve unrelated spoken words. Check full-phrase bounds at peak emphasis size as well as settled size so highlights cannot shift or clip the phrase. Inspect phone-size encoded frames with a temporary full-frame centerline and measured bounds, including long phrases and mode changes. Remove guides from export.

Verify placement against the intended platform's current viewing UI, not just the video edges. Right-side interaction rails, bottom descriptions/account/audio controls, and top controls can cover text; their bounds vary by platform, format, device, and expanded UI. Prefer current official safe-zone templates or the destination editor's visual guides. Store their source and normalized exclusion bounds in the project. Do not present one universal pixel rectangle as safe for TikTok, Reels, and Shorts, or treat an advertising template as a guarantee for organic posts.

When exact UI bounds are unavailable, use a clearly provisional exclusion profile: essential text avoids the outer left 8%, right 20%, top 18%, and bottom 35% of the canvas. These are editorial fallback bounds, not official platform specifications. **Keep horizontal center at 50%.** For usable interval `[L, R]` containing `cx = W/2`, the largest centered width is `2 * min(cx - L, R - cx)`; the fallback therefore yields a centered text region x=20–80%, not a center at 44%. Regroup words or narrow the group; choose a stable vertical position that clears the actual face and key action. If the region cannot fit readable captions, change vertical position/timing, use a cutaway, or document a necessary intentional offset. Do not reframe A-roll or squeeze text into unreadable type. For multiple destinations, adapt placement or render variants when needed and state any unverified platform fit at delivery.

Render a phone-size QA preview with the relevant UI exclusion masks visibly overlaid, including transitions and the longest caption. Check text, stroke, highlight, and animation bounds against those masks, then remove QA masks from the export. Safe areas protect essential text and content; **the footage and background still fill the frame beneath the platform UI**. A clean render without the UI mask does not establish safe placement.

Use measured type with strong foreground/background separation. A compact backplate, restrained stroke, or controlled shadow can protect text over variable footage; test on the brightest and busiest backgrounds. Keep contrast treatments local to the text, without adding a full-frame tint, vignette, or body fade to make it readable. Avoid thin fonts and excessive glow. Start with a mobile-readable size and shorten/regroup before shrinking. For short talking-head social phrases, try a bold type size around 64–88 pixels on a 1080-pixel-wide portrait canvas, then validate the actual font at phone scale; this is a design starting point, not a platform rule. Regroup before shrinking. Keep stable phrase widths, comfortable line spacing, and sufficient contrast, and reduce emphasis when a graphic leads. Scale caption assets deliberately for landscape and different resolutions; never apply their layout transform to the whole video.

## 8. Implement and inspect in Python

Use final frame indices and explicit event intervals, with one rounding policy for time conversion. Evaluate caption visibility directly from `start_frame <= frame < end_frame` and make text disappear deterministically at its end. Keep subtitle layout independent of animation progress and cache shaped text assets. Use available Python drawing/compositing tools or Python-driven FFmpeg/libass; confirm font and shaping support in the actual environment.

Store the corrected transcript, alignment, cue list, mode schedule, style configuration, font assets/license information, source code, and plain subtitle sidecar with the video project. Keep source-time and final-time values distinct. Export readable text in UTF-8 and verify timestamp syntax and ordering.

Before final rendering, programmatically flag invalid intervals, overlapping primary treatments, out-of-bounds text, unaccounted speech intervals, excessive reading speed, and cues that extend beyond the media. These are useful diagnostics, not proof of editorial quality. Treat intentional silence and explicitly requested omissions distinctly from accidental gaps.

Review captions over actual footage at normal speed using the corrected transcript/alignment. In talking-head, include these checks in the parent's one combined review using its existing preview and diagnostic frames; do not replay the full cut separately for captions. Inspect the hook, fastest speech, names/numbers, longest phrase, emphasis handoffs, and ending for wording, timing, coverage, and phone-size readability with UI masks. For standalone captions, review a short export once or sample each chapter and flagged cues in a long export, reporting unreviewed portions. Consolidate fixes into one correction batch, then spot-check the affected cues. Do not restart stylistic review or add repeated polish renders.

Deliver the requested captioned video or subtitle artifact plus reusable caption data/code. Do not claim an accessible or publication-ready caption track merely because text appeared in a screenshot. Treat the suggested phrase durations, hook word counts, font sizes, and provisional safe-region percentages as editorial starting points; verify them against the actual video and any applicable destination requirements.
