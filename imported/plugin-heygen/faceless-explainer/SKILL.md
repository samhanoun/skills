---
name: faceless-explainer
description: Create narrated faceless explainers with HeyGen speech, Python motion graphics, style-matched illustrations, captions, and a reusable editing project. Use to explain one focused question through a developed example and visual demonstrations of how it works.
---

# Faceless Explainer

## 1. Purpose and production contract

Produce a finished explainer MP4 with an off-screen narrator, explanatory motion graphics, supporting images when useful, and synchronized captions. Write and confirm the script, create the voiceover through HeyGen speech synthesis, then build the visual sequence against the actual narration. Deliver the finished video and the working Python project for revisions or a continuing series.

**Time is the primary information hierarchy.** Reveal, hold, transform or replace, then clear. Each moment should have one main idea and one dominant focal point. The viewer should understand the explanation while it plays, without pausing to scan a designed page. A sequence of static slides with decorative entrances does not satisfy this workflow.

Use these supporting skills at the corresponding production stage:

| Skill | Responsibility | Handoff |
| --- | --- | --- |
| [Script writer](../script-writer/SKILL.md) | Conversational argument, hook, chapters, payoff | Brief, factual evidence, complete approved spoken text, provisional visual beats |
| [Narrator](../narrator/SKILL.md) | Voice selection and HeyGen `create_speech` | Approved script, real voice ID, completed audio, measured duration and available timing |
| [Motion graphics](../motion-graphics/SKILL.md) | Explanatory visual states and animation | Style, actual speech cues, dimensions, reserved caption regions |
| [Captions](../captions/SKILL.md) | Subtitles, hook, selective emphasis | Final audio, corrected transcript, shared style and final timeline |
| [Video editing](../video-editing/SKILL.md) | Python assembly, audio mix, export and review | All accepted assets, cue sheet, output settings, reusable project |

Read each linked skill before doing its work; use the same brief and timeline throughout. These are production roles, not a requirement to spawn agents. Detailed animation and subtitle mechanics stay in their respective skills.

This workflow combines coded explanatory visuals with art-directed images; it does not require every shot to be a diagram. Use generated illustrations to establish a setting, show an actor or object, or make an example concrete, then use graphics to expose the relationship or change. Existing diagrams, logos, and accurate screenshots can provide evidence. A hybrid image-and-graphics sequence belongs here when the mechanism depends on animated explanation. Use [picture-video](../picture-video/SKILL.md) when narrated still pictures carry the story without that mechanism. Do not route narration through avatar creation or generate cinematic footage for this format.

Writing this skill or discussing an idea does not authorize paid generation. A video-production request authorizes ordinary production once the confirmations below are resolved. Preserve the speech tool's quota, consent, and retry rules.

## 2. Confirm the audience, target, and approximate length

Before scripting, establish and confirm:

- **Target audience:** who is watching, what they already know, and where they are likely to get stuck.
- **Target outcome:** the topic and the one thing viewers should understand, feel, or do afterward. Turn a broad subject into a concrete promise.
- **Target length:** default to **about two minutes (120 seconds)**, with room for natural speech, a thorough explanation, and readable visual holds. Honor a supplied length; otherwise state this default with the brief and script.

Bundle missing information into one concise exchange, for example: “Who is this for, and what should viewers understand or do afterward? I'll plan for about two minutes unless you have a different target.” Reuse explicit answers already supplied. Resolve language, destination/aspect ratio, brand constraints, and essential evidence in the same exchange when necessary. Infer orientation from an explicit destination; otherwise propose an appropriate format. Use 1080p when supported. Distinguish an approximate target from a hard placement limit.

If a narrator is not selected, offer the actual voice picker or ask for a brief voice description; the narrator skill handles discovery. Choose routine design details yourself unless the user wants art direction. Ask for missing subject-specific assets only when the explanation depends on them.

## 3. Write and confirm the complete script

Apply the script writer's general guidance and [explainer guidance](../script-writer/SKILL.md#8-explainer-videos). Before drafting a factual explanation, research the mechanism, essential context, and important limitations using authoritative sources. Build compact working notes connecting each consequential claim to evidence; distinguish observed facts, proposed causes, and illustrative assumptions. Do not turn the research into an itinerary of every interesting fact. For a broad brief, select one answerable question and state the narrower promise alongside the script. Preserve an explicitly requested overview, but organize it around one explanatory thread and acknowledge its limits.

**Teach one mechanism through one sustained example.** Start with a concrete puzzle, introduce only the terms needed to follow it, and trace the same actor, object, or situation through its starting conditions, causal changes, and result. Explain why each link follows: what physically changes, which constraint changes, or what decision becomes worthwhile. “More orders justify new equipment” still needs the missing link, such as spreading a machine's fixed cost over more units. Illustrative numbers must be labeled as hypothetical and used consistently. Address one useful misconception or limit by changing a condition in that same example. Do not replace the reasoning with dates, lists of factors, or broad declarations.

For a typical two-minute video, plan one central question, one example, and usually two to four connected causal steps. Allocate most of the explanation to that example instead of giving every subtopic equal time. This is an adjustable editorial starting point, not a researched timing formula:

| Approximate time | Job |
| --- | --- |
| 0–12 seconds | Pose the concrete puzzle or show a result the viewer cannot yet explain |
| 12–25 seconds | Establish the example and essential terms; show the starting state |
| 25–85 seconds | Work through the mechanism, letting each change produce a visible consequence |
| 85–105 seconds | Change one condition, test a prediction, or show the mechanism's important limit |
| 105–120 seconds | Return to the opening and answer it with the now-understood example |

A broad subject such as a country's economic development should not become a rapid tour through reforms, migration, trade, debt, technology, inequality, and demographics. A focused alternative could follow one illustrative factory and explain how nearby suppliers reduce delays, change production, and affect the next order. Keep only background that the viewer needs to understand that chain; do not imply the example explains an entire national economy.

Be lively and direct, speaking to one person. Avoid ceremonial “presidential” delivery, grand promises, throat-clearing, and abstract motivational language. Let interest come from a surprising relationship, clear stakes, an example, or a meaningful change. Before approval, check whether the viewer could explain how and why the result occurs and predict what changes when an input changes; revise any gap the script leaves unanswered.

Write the full spoken script before dividing it into visual beats. Word count alone does not control pacing: a conversational delivery can still overload viewers with new concepts. For an unfamiliar mechanism, roughly 190–240 English words is a useful starting budget for two minutes; use fewer if the visual reasoning needs more time. Treat this as a planning estimate, never a quota or permission to retime speech. Budget a resolved hold after a causal result before introducing the next new term. Keep visual directions, pronunciation notes, chapter labels, and source notes outside speech text.

Present the full script with a compact beat table: **beat, exact narration, visible change and what it demonstrates, approximate duration**. State the audience, focused question, intended outcome, estimated length, chosen art direction, image plan if any, and planned ending. Label timing estimates as provisional. This is one combined review, not separate script, storyboard, style, and image approvals.

**Ask the user to confirm the script, then wait for approval before creating narration.** An approved exact script supplied by the user satisfies this gate. A topic, voice selection, or general “you choose” does not approve unseen words. Incorporate requested revisions and confirm the revised text. Do not add another mandatory storyboard or asset-board approval. After script approval, proceed through authorized production and local refinement; recheck only material changes to accepted content or unresolved tool prerequisites.

## 4. Create the narration first

Follow [narrator](../narrator/SKILL.md) to resolve a real compatible voice and call `create_speech` with the approved spoken text. Use the documented non-player variant when appropriate and available. Prefer one coherent take for a short explainer, preserving sentence-level prosody across visual cuts. Do not synthesize separate fragments just because the storyboard has many graphic states.

Retrieve the actual audio through permitted media access, check its content and delivery, and measure its duration. Retain returned reliable timings or obtain corrected phrase/word alignment. Then replace provisional beat durations with actual speech cues. The narration is the timing spine: **preserve its natural 1.0× playback speed and pitch**. Do not speed it up, slow it down, stretch it, or force the finished composition to exactly 120 seconds or another nominal target.

If the script exceeds a hard limit or the narration has a material content/pronunciation defect, explain the issue and obtain approval for the affected script change or additional speech generation. Reuse successful audio. Normal timing refinements to graphics, captions, and local editing do not need a fresh approval round.

## 5. Develop motifs, chapters, and visual rhythm

**Make an opinionated style choice for the script/visual plan and carry it through the whole video.** Use the [fifteen style directions in motion graphics](../motion-graphics/SKILL.md#choose-one-visual-style), choose a direction suited to the audience and subject, or define an equally specific original one. Consider painterly and tactile approaches alongside precise geometric ones; an explainer does not automatically need a technical-looking design. Honor supplied branding; otherwise make the art-direction decision yourself and briefly explain it. Do not average several styles into a generic template or change aesthetics from scene to scene.

Save the chosen direction, palette, typography, shapes, stroke weights, spacing, texture/depth, motion vocabulary, caption roles, and audio character in shared project configuration. Give motion graphics, editing, and captions that same specification: subtitles, hooks, and emphasis must belong to the same visual family as the diagrams. Vary composition and pace within the style. Full-screen graphics should fill the intended canvas with a purposeful composition, without persistent headers, footer slogans, or a separate subtitle gutter.

**Prove the style in rendered frames before building the whole video.** After script approval, make three internal representative frames: an image-led scene when images are planned, the central mechanism, and the payoff with captions. Use the actual fonts, assets, texture, scale, and lighting. A style name and matching palette are insufficient: paper-cut needs layered cut edges and dimensional separation; Swiss precision needs strong typographic hierarchy and confident proportions; painterly work needs actual painted material. Compare the frames as a set at intended viewing size. Revise generic boxes, weak contrast, or mismatched imagery locally before expanding the sequence. This is an internal quality check, not another user approval gate.

Give the explanation a recognizable motif: a token that moves through a process, a question that resolves into a diagram, a consistent comparison frame, or a shape whose transformation represents the mechanism. Reuse the motif with changed meaning as understanding develops. It must encode the idea, not serve as a decorative animation repeated at fixed intervals.

Develop connected beats inside the same example: **starting state → intervention → consequence → changed condition → payoff**. A cut changes the view, not automatically the subject. Vary scale and representation when the explanation needs it: an establishing image, a detail with an annotation, a causal transformation, a comparison, and a return to the concrete scene. Inspect neighboring beats for repeated silhouettes and layouts; rebuilding the same three boxes with different labels is not visual variety. Do not cut away from an unfinished explanation merely to refresh the screen.

**Use hard cuts for most changes between graphic scenes.** Cut on the spoken idea or a resolved beat, especially for brisk teaching, simple charts, and comparisons. Keep a continuous graphic transformation when it explains how a state changes; cutting between scenes does not mean removing explanatory animation within them. Music may reinforce an already appropriate cue, but must not move the explanation off its words.

Use a brief stylized transition selectively for a meaningful visual connection, a major chapter/time/mood shift, or a smoother handoff that fits the established cinematic tone. Follow the [cut and transition guidance](../motion-graphics/SKILL.md#choose-cuts-and-scene-transitions): a shared shape can carry a wipe, a graphic zoom can connect overview to detail, and a restrained dissolve can mark a reflective change. A matched shape can also connect scenes through a hard cut. Keep the effect within the beat, settle before the next reading task, preserve continuous narration and captions, and avoid overlapping diagram labels. Reuse the chosen style's transition vocabulary; do not add an effect at every boundary or consume the time needed to understand the mechanism.

For example, an explanation of a bottleneck could introduce one queue, reveal the constrained step on its spoken cue, change that step to show the consequence, and return to the opening queue with a different outcome. Use hypothetical labels when data are illustrative. Do not fabricate measurements or imply that an abstract diagram proves real-world results.

Build a cue sheet from actual audio: beat ID, spoken anchor, final start/end, visible state before/after, reveal/settle/hold/clear times, caption mode, and sound event. Let the same focal region carry successive ideas. Keep earlier elements only when the current comparison requires them. **Do not reveal the complete diagram at the beginning and merely highlight parts afterward.**

Make the teaching motion show a consequence: a queue drains, a delivery route shortens, a fixed cost is distributed across more units, or an otherwise identical case produces a different result. A dot traveling along an arrow, an unlabeled network, or a slider between abstract labels does not demonstrate those relationships. An arrow needs identifiable endpoints and a meaning the viewer can state. Check the new information on its spoken cue, not only the final settled frame; avoid blank incoming shots, arrows aimed at empty space, and numbers that appear after the narrator has already explained them.

Apply motion graphics for mechanisms, comparisons, charts, and transformations. Apply captions for spoken text and selective emphasis. A full-screen typographic beat can be effective, but a video composed only of large sentence cards does not explain a visual mechanism. Use appropriate abstract graphics and licensed icon assets; follow the motion-graphics restrictions on code-drawn figurative imagery.

### Generate and integrate supporting images

When literal subjects or a setting would make the explanation clearer, plan **up to ten distinct generated images across two batches of at most five images each**. Use native image generation through the available tool, not Python drawing or an external provider as an unasked substitute. Submit the independent requests in each batch together using the host's supported batching or parallel calls; do not generate one image, wait for user feedback, and repeat. Generate only the planned assets, leave unused slots empty, and skip an empty batch. Do not invent a batch API when the host exposes only individual calls: orchestrate those calls together. Preserve actual tool limits and retry rules; replacements and generated style references count toward the ten-image budget.

Plan both batches from the approved script. Each image needs a specific explanatory job, scene ID, subject/action, framing, reserved graphic/caption area, and treatment on the timeline. Give every prompt the same concrete style specification: palette roles, medium and surface texture, edge treatment, lighting, perspective, depth, and level of detail. Ask for clean areas where code will add accurate labels or data; do not bake those into generated artwork. Inspect batch one for style and recurring-asset consistency, then use accepted images as references for batch two when supported. Keep the second batch in the same visual language. No extra user approval is needed for routine asset selection or art-direction correction within the agreed plan.

Compose the accepted images artistically in Python. Use deliberate crops and rounded masks/borders for framed inserts, with a consistent radius and edge treatment that fits the style; use full bleed when it better serves the composition. Add restrained depth, a slow detail push, an inset reveal, or layer separation when it guides attention. Rounded corners alone do not make a good composition. Pair images with precise graphic annotations or transition from an image detail into the mechanism. Match image materials, graphic shapes, caption styling, and the existing cut/transition vocabulary; avoid generic photo cards, random zooms, unrelated stock aesthetics, or an effect on every image. Keep the important subject visible and hold the useful state long enough to understand it.

Use distinct images for separate illustration beats; a crop, mirror, or recolor is not a new asset. A continuous image scene may develop through crops and overlays. Generated images are illustrations, not documentary evidence or measured data: never present them as an actual historical photograph, verified place, real product detail, or factual map. Use verified source material for those needs. Save prompts, references, provenance, and accepted files with the project. If image generation is unavailable, explain the limitation and adapt with available suitable assets rather than claiming images were generated.

## 6. Compose, caption, and mix in Python

Apply [video editing](../video-editing/SKILL.md) using the completed narration and the shared cue sheet. Keep the visual timeline subordinate to meaning and speech. If a diagram needs too much reading time, simplify it or split its states; do not alter narration speed or stretch the entire timeline.

Include accurate subtitles by default, with one coordinated hook/emphasis/subtitle schedule. Honor explicit caption preferences. Since this format has no face, reserve the graphic's focal region and destination UI exclusions instead of inventing a head exclusion box. Keep text near the relevant visual without obscuring essential labels. A caption treatment may replace the base subtitle visually while preserving the spoken information. Detailed typography, alignment, and coverage rules belong to [captions](../captions/SKILL.md).

Use an original, programmatically composed instrumental bed when it helps the tone; save its source and seed. Silence is appropriate when it improves comprehension or the user requests it. Use restrained SFX for meaningful transformations and chapter handoffs. Duck music around narration and keep accents clear of speech. Do not add a whoosh to every reveal or move semantic cues merely to hit music beats.

Finish on the useful takeaway or CTA with enough resolve time to register it. Do not pad the ending with a silent slogan card, loop a scene, freeze footage, or truncate speech to hit the nominal length.

## 7. Review and deliver

Preview the complete short video with sound at normal speed before final export. Check whether the opening earns attention, each chapter changes understanding, the motif develops, the mechanism is explained without causal gaps, and the ending pays off the promise. Reject a sequence that merely names concepts or asserts conclusions, even if every statement is true. Check the worked example, middle, and close as carefully as the hook, and verify graphics and captions retain the chosen style throughout. Apply the motion-graphics, captions, narrator, and video-editing acceptance criteria.

Also inspect at the intended viewing size, including a muted caption pass and platform UI masks when relevant. Reject simultaneous competing reading tasks, late reveals, unreadable holds, missing qualifications, irrelevant decoration, audible joins, and music that masks the narrator. Check that hard cuts preserve momentum and stylized bridges clarify a connection or break without delaying the next idea; replace unnecessary effects with cuts. Fix observed problems locally and reuse accepted speech.

Use concrete acceptance checks: can a new viewer explain the main causal chain and predict the changed condition? Does the worked example receive most of the explanatory time? Do representative frames visibly deliver the chosen style, including images and captions? Does every diagram communicate more than its labels alone? Are key strokes, qualifiers, and source labels legible at actual viewing size? Is the takeaway a specific answer to the opening rather than an unearned phrase such as “sustainable prosperity”? Repair failed checks before delivery. Keep accessible captions; remove redundant decorative sentences and headings that compete with them. Do not report an audiovisual playback review when only sampled frames, transcripts, or technical checks were available.

Verify the final encoded MP4's dimensions, frame rate, measured duration, audio, graphic timing, and caption coverage. Deliver the finished MP4 inline when supported and as a usable file/artifact, together with the reusable source project, approved script, actual transcript/timing, plain subtitle sidecar, cue sheet, styles, assets/provenance, audio sources, dependency versions, and render command. Report actual runtime and any review limitations; a successful encode alone does not establish a complete audiovisual review. Do not publish externally without authorization.
