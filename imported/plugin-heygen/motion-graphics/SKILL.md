---
name: heygen-motion-graphics
description: Design and render focused video motion graphics in Python, including full-screen explainers, charts, diagrams, icon systems, and overlays on presenter footage. Use for coded editorial graphics; use the captions skill for subtitles and expressive text treatments.
---

# Motion Graphics

## 1. Scope and quality target

Build motion graphics that communicate one idea at a time at normal playback speed. **Use time as the primary information hierarchy: reveal, hold, transform or replace, then clear.** Spatial layout serves the current moment; it must not require the viewer to scan a whole page while listening. Use Python for layout, drawing, animation, and compositing, with available libraries and Python-driven FFmpeg. Use another programming language or rendering stack only if the user explicitly requests it.

When called from talking-head, inherit its approved story, style, actual A-roll timing, output dimensions, safe areas, and head exclusion region. Do not restart intake, generate a new presenter, or display raw A-roll. While the parent polls `get_video`, build actual graphic assets, state layouts, B-roll treatments, and animation code with semantic cue anchors. Bind final timings and head bounds only after the completed A-roll is available; do not turn provisional script estimates into final timing. For subtitles, hook captions, and stylistic emphasis, read [captions](../captions/SKILL.md); this skill owns non-caption visual composition and animation. For standalone work, establish the graphic's message, duration, output format, and intended viewing size from the request.

Treat presenter footage as an intact base layer with its existing background, scale, and placement. Animate the graphic's own elements; do not remove or replace the footage background, mask/fade the presenter's body, or crop, shrink, or shift the footage to accommodate a graphic. Only an explicit user request authorizes those treatments. Inherit the talking-head parent's bounded image-B-roll split treatment when it is part of the edit plan; use that interval's placement and head bounds, then restore its baseline. That exception does not let a graphic redesign the presenter framing. If an overlay cannot fit, simplify or move it, change its timing, or use a separate full-screen graphic followed by the unchanged A-roll. A graphic's solid background applies only to that cutaway, never automatically to presenter shots.

Completion means a readable, timed graphic or integrated video in the chosen style, plus reusable Python source. Use clear visual explanations, consistent typography, and purposeful motion. Correct observed problems within the parent workflow's review budget; do not pursue open-ended refinement or additional variants solely to make the result more impressive.

## 2. Give each graphic one job

Before drawing, write one sentence describing what the viewer should understand, then choose the simplest visual encoding that makes it visible. Record the cue in the actual speech, the main element, any necessary support, and the resolved state. If a panel tries to establish context, compare alternatives, explain a mechanism, and conclude at once, split those into sequential beats.

| Communication job | Useful graphic | What should move |
| --- | --- | --- |
| Show a meaningful difference | Two aligned values or bars with a shared scale | Introduce the comparison, then emphasize the difference |
| Explain cause or sequence | A few labeled nodes and directed connections | Activate the relevant step and connection as it is described |
| Show a changing quantity | A simple chart with honest units and baseline | Reveal the series or highlight the interval under discussion |
| Locate one item | A marker on a supplied image or accurate map | Move the marker or highlight; keep the underlying context stable |
| Explain parts of a whole | Proportional segments or grouped units | Isolate the relevant part without changing the total |
| Reinforce one spoken fact | Small overlay with a number, icon, or short label | One brief reveal or emphasis, followed by a stable hold |

Use a full-screen graphic when a relationship or transformation needs the viewer's undivided attention. A big title with a few labels is usually a caption treatment, not a reason to cut to a diagram. Use a modest overlay when the presenter remains the focus and one supporting fact is enough. Use actual footage when the job is to show what a real place, person, product, or action looks like. Do not turn an ordinary noun into a decorative illustration just to fill the screen.

## 3. Storyboard changes over time, then validate each state

Start with an ordered sequence of perceptual states tied to the spoken argument. For each state record what the viewer notices, what changes, what remains as context, and what disappears. Design the readable hold for **each state**, including transitions between them. Do not start with a complete infographic and merely stagger its entrance. There need not be a final frame containing everything that has appeared.

- Give each moment **one dominant focal point**. Assign its owner and give only that owner the strongest contrast, scale, and attention-grabbing movement. During a diagram reveal, keep captions calm; during caption emphasis, settle the diagram. Reuse the same prominent screen area for successive ideas so the eye follows replacement or transformation. Show multiple items together only when their relationship needs simultaneous comparison.
- Make motion explain something: a connection forms, a constraint changes, an item moves to a meaningful destination, or evidence resolves a question. A decorative slider or pulsing box does not explain an abstract claim.
- Remove completed labels before introducing the next reading task unless they remain necessary to understand it. Keep only the context the next state requires; dimming an ever-growing diagram is not a general solution.
- Inspect each readable state at the intended viewing size. Use large direct labels, clear grouping, and intentional negative space. Never shrink type to preserve a page of cards, a headline, a subtitle, a diagram, and a footer.
- In portrait social edits, let footage or the active graphic occupy the full canvas. Avoid persistent slide backgrounds, boxed media windows, page headers, footer slogans, borders, and decorative progress rules. A solid background can host a focused graphic moment; it must not become a page template surrounding every shot.
- Reserve a collision-free region for the active caption treatment **over the composition**, not a permanent blank subtitle gutter. In talking-head, plan around a preferred top or bottom caption band inside platform-safe bounds, leaving the central region for the narrator or main graphic. Keep graphic labels and animation paths out of the chosen band; lower captions must remain above bottom platform controls. Coordinate any band change at a meaningful shot/layout boundary. Coordinate necessary source notes with the parent editor; retain required attribution without making it unreadable.
- For informational overlays, use actual A-roll and its transformed head bounds. Follow the [caption placement and platform-mask guidance](../captions/SKILL.md#7-coordinate-caption-modes-and-layout) for important labels too. Keep both settled positions and animation paths clear of the face and platform controls. A brief scene-covering wipe replaces the shot and follows the transition guidance below.

Example of temporal hierarchy for a planning explanation; bind these states to the actual words rather than assigning arbitrary equal durations:

| Spoken beat | Visible event | What clears |
| --- | --- | --- |
| Choose the task | One task label appears at the focal position | Unrelated categories remain absent |
| Give it a time window | That same label becomes a bounded block on a simple time rail | The standalone headline clears; rail labels appear only if needed |
| Leave room for change | The block shortens or shifts to expose explicitly labeled unallocated space | Earlier explanatory copy clears |
| Now do the task | Cut to full-screen evidence of the action | The diagram clears completely |

Use this only when the rail actually represents time. Without quantities, label it as a conceptual example and do not imply measured proportions. A sequence can also be two or three large typographic states over footage; not every idea needs a diagram. Inspect the handoffs for outgoing/incoming collisions and preserve a visual anchor only where it aids comprehension.

### Choose one visual style

**Commit to one opinionated art direction for the complete video.** Inherit an established parent style; otherwise choose a distinctive direction that fits the subject, audience, tone, and available assets, or create an equally specific original one. Make the choice yourself unless the user wants to art-direct it. Name the direction and explain its fit in one sentence. Honor user branding and preserve the factual appearance of source footage. Avoid averaging styles into a generic look or choosing a new style for every graphic.

These fifteen directions are starting points, not a required menu. Consider tactile, painterly, and expressive directions as readily as precise geometric ones. A technical subject does not automatically call for a technical-looking design; choose the visual character that makes its ideas engaging and understandable.

| Direction | Useful fit | Visual and motion choices | Caption treatment in the same family |
| --- | --- | --- | --- |
| **Vox-inspired editorial explainer** | Evidence-led questions about culture, policy, or systems | Documentary images, sourced maps/documents, purposeful annotations; reveal evidence as the argument develops | Clear editorial sans serif, restrained highlight marks, evidence-colored emphasis |
| **Swiss precision** | Analytical comparisons and confident technical explanations | Asymmetric grid, strong sans serif type, limited palette, precise alignment; crisp translations and replacements | Stable aligned subtitles, deliberate weight changes, one accent |
| **Low-poly dimensional** | Playful technology, spatial relationships, abstract systems | Faceted forms, controlled lighting and color planes; purposeful turns and depth changes | Clean geometric type and solid color backing; avoid faceting or distorting readable letters |
| **Paper-cut tactile** | Warm educational stories and approachable explanations | Layered paper, consistent cut edges and soft shadows; slide, hinge, and reveal layers | Quiet ink-like type with restrained paper tabs for emphasis |
| **Mixed-media collage** | Human stories, creative work, cultural connections | Curated photographic fragments, consistent textures and cut edges; deliberate juxtapositions and rhythmic swaps | A fixed legible type family; selective cut-paper emphasis, never random fonts per word |
| **Bauhaus geometric** | Abstract relationships and bold conceptual explanations | Circles, bars, balanced asymmetry, spare colors; geometric assembly and transformation | Geometric sans serif, simple block accents, no decorative type that impairs reading |
| **Flat vector** | Accessible processes and clear category comparisons | Confident color silhouettes, disciplined shape scale; transformations between meaningful states | Bold readable sans serif, flat contrast plates, matching color roles |
| **Technical linework** | Mechanisms, dependencies, and engineering concepts | Limited stroke weights, exact spacing, controlled color; trace connections in causal order | Highly readable sans serif subtitles; technical/mono labels reserved for short terms |
| **Isometric systems** | Flows across components and layered systems | One consistent projection, structured depth and shading; move tokens along meaningful routes | Flat screen-facing captions with the same palette; never tilt subtitles into perspective |
| **Kinetic typography** | Language-led contrasts and short emphatic passages | Strong type hierarchy, rhythmic replacement and word relationships; movement expresses meaning | One coordinated text treatment with stable reading holds, no duplicate subtitle layer |
| **Watercolor storybook** | Reflective stories, nature, personal journeys, gentle education | Translucent washes, visible paper, pigment blooms, and a mix of soft edges and deliberate brush marks; reveal color through brush-shaped wipes, then let the composition settle | Readable humanist serif or sans serif in dark ink, placed over quiet washes; keep letters crisp rather than dissolving them into paint |
| **Expressive charcoal** | Memory, biography, emotional tension, introspective explanations | Rich blacks, broad rubbed shadows, exposed paper highlights, and gestural lines; draw or erase meaningful marks as an idea changes, with still holds between gestures | Sturdy readable type in charcoal or warm paper tones; keep subtitle baselines stable and texture away from small letterforms |
| **Woodcut print** | Folklore, craft, history, bold cultural commentary | Carved hatching, strong ink masses, irregular edges, and a limited spot-color palette; build successive impressions or reveal a new layer like a print being pulled | Robust serif or slab lettering with clean interiors; carry the ink palette into captions without distressing every glyph |
| **Handcrafted clay** | Playful learning, creative processes, warm everyday explanations | Matte rounded forms, subtle thumb marks, and soft dimensional shadows; use deliberate stepped accents and gentle squash on abstract forms, followed by a settled pose | Friendly rounded sans serif with flat, high-contrast text; echo the palette without making subtitles extruded, wobbly, or constantly bouncing |
| **Painterly surrealism** | Dreams, imagination, conceptual metaphors, reflective cultural stories | Visible brushwork, unexpected juxtapositions, and uncanny scale relationships; transform one meaningful visual metaphor into the next instead of adding arbitrary dream imagery | Restrained readable serif with colors drawn from the painting; keep text level, stable, and clear of the main visual transformation |

Record the direction and shared values in project configuration before rendering: fonts, weights, type scale, palette with semantic roles, spacing/grid, stroke width, shape language, texture/depth, image framing, transitions, motion speed, easing, and base/hook/emphasis caption treatments. Include a few concrete exclusions that protect the direction, such as no bounce on precise data values. Pass the same specification to captions and the parent editor, and retain it across episodes when the user wants the same style. Base subtitles, hooks, emphasis, diagrams, overlays, and B-roll framing must share the style; captions must not introduce an unrelated preset. Vary states, composition, and rhythm within this language rather than making every scene identical.

These choices do not override the production format. Use Python graphics for abstract/logical visuals and licensed, supplied, or parent-authorized generated images for literal subjects; a low-poly, clay, or painterly style is not permission to draw figurative scenes from ad hoc polygons. Apply handcrafted textures and stepped motion to the graphic's own layers; keep A-roll and speech at natural speed and subtitles stable. Surreal scale and expressive distortion belong to clearly illustrative metaphors, never to data proportions or factual evidence. Kinetic type cannot replace a diagram when the concept needs one. In picture-story, captions remain subtitle-only. Preserve comprehension, face visibility, and source accuracy while giving each video a distinct visual identity.

### Make the art direction visible

Translate a style name into visible materials and composition before rendering the sequence. Paper-cut calls for layered silhouettes, cut edges, and controlled shadows; watercolor calls for actual washes and paper texture; Swiss precision calls for assertive type scale, optical spacing, strong contrast, and disciplined asymmetry. A palette change on default rounded rectangles does not satisfy any of these directions. Render representative frames with real fonts, assets, and captions, compare them at delivery size, and correct generic fallback styling before building more scenes. Inherit a parent's existing style check rather than adding another approval round.

Choose a visual representation for its teaching job instead of routing every sentence through a box-and-arrow helper:

| Teaching job | Stronger visual option |
| --- | --- |
| Establish a real setting or actor | A supplied or parent-authorized generated image with one integrated callout, then a detail view |
| Show accumulation, capacity, or delay | Countable tokens moving through a constrained process, a queue changing, or occupied capacity becoming available |
| Show what an intervention changes | The same object or process before and after, with controlled alignment and the changed variable visible |
| Explain distribution or scale | Proportional regions, stacks, or a focused chart with honest values and direct labels |
| Connect location to an outcome | A verified map or a clearly labeled schematic route; animate the distance, delay, or flow the narration actually explains |
| Show a feedback mechanism | Track the same resource or state around the loop and show the consequence of its return |

Boxes and arrows remain useful for actual dependencies, but repeated layouts must earn their use. Vary scale, silhouette, spatial organization, and representation within one style; do not add decoration just to satisfy a variety quota. Use confident, legible strokes and arrowheads with visible endpoints. At a 1080p working size, a 4–8-pixel key connector is often a better starting point than a hairline; scale with the canvas and inspect after compression at the intended display size. Keep weaker secondary geometry subordinate without making it vanish. Do not scatter anonymous nodes or move a progress dot between vague labels as a substitute for showing a mechanism.

Python can composite substantial artwork and animate it precisely. Use suitable installed renderers: Manim for vector transformations and camera moves, Cairo/Skia for paths, masks and gradients, and image layers with Python-driven FFmpeg or MoviePy for textured compositions. Choose only the tools needed, inspect their current APIs, and preserve the deterministic timeline below. Prepare and cache quality static assets, then animate their masks, transforms, layers, and meaningful states. Do not treat the primitives of a convenient drawing library as the limit of the visual design, or force every art style into that library's default rectangles and text.

## 4. Use abstract and logical representations

**Do not draw bespoke real-world objects, characters, buildings, food, landscapes, or product illustrations out of Python shapes or paths.** Use real supplied or properly sourced imagery for factual subjects, and style-matched generated illustrations when the parent workflow permits them. In talking-head, inherit the parent's optional single batch of at most five distinct imagegen images, prepared concurrently while A-roll renders; do not initiate extra or sequential generations. Match imagery to the same art direction and use every image in only one continuous placement, with purposeful push/pull, pan/zoom, split, reveal, transition, or local shading. In faceless-explainer, follow that parent's limit of ten images in two batches and its image-composition rules; this skill does not initiate a separate generation budget. Keep code-drawn graphics to typography, geometric forms, charts, diagrams, connectors, highlights, and recognizable symbols. Composite image assets with those graphics instead of substituting a text box for every literal subject.

For icons, use one established, appropriately licensed icon set or the user's supplied set. Reuse its real vector assets rather than approximating them with ad hoc polygons, Unicode symbols, or mixed emoji. Normalize visual size, stroke treatment, and color; preserve license information. A simple conventional marker, arrow, or geometric symbol can be drawn directly. An icon is a compact symbol, not evidence of an actual object's appearance.

Use accurate numbers, units, ordering, and relationships. Keep comparison scales fixed, make bar lengths proportional, and retain a zero baseline for bar comparisons unless the brief explicitly requires a clearly labeled alternative. Animate values and geometry together. Do not invent data to make a chart look sophisticated. Do not use unequal bars, count-ups, or a moving slider merely to decorate non-numerical concepts. Use labeled conceptual relationships when there are no numerical data; movement along a rail needs an understandable meaning and direction.

For process diagrams, keep nodes aligned, route connectors clearly, and animate the relationship being explained. Prefer direct labels over a separate legend. Each connector must have identifiable endpoints and an explicit meaning; a traveling dot is useful only when the viewer knows what is moving and what its arrival changes. Show the consequence, such as a queue shrinking or a process completing sooner. Retain an earlier node only if the current relationship needs it; otherwise replace it or advance to the next state. The completed diagram is optional, not a required recap slide.

## 5. Anchor timing to what the viewer hears

Use the actual final audio and its corrected word or phrase timestamps. Do not estimate cues from script length or distribute graphics evenly across the runtime. Distinguish the moment an element starts entering from the moment it becomes legible and the moment its meaning changes.

For each state, record: `start`, `settled`, `cue`, `hold_end`, and `end`, in one timeline coordinate system. Context may settle before its explanatory phrase, but the **new information** should reveal on its actual spoken cue, already legible or with a very short entrance. A semantic change such as an arrow connecting or a value changing can land on that word. Do not reveal all categories at the first cue when later categories have not yet been introduced. A brief anticipation can guide the eye without exposing the answer.

Use these as initial editorial ranges and adjust them to the actual speech, content, and viewing size:

| Event | Starting point | Adjust for |
| --- | --- | --- |
| Small overlay entrance | About 0.2–0.4 seconds | Travel distance and style; long motion should not delay the point |
| Major diagram build | About 0.4–0.8 seconds for one reveal | Break complex builds into speech-aligned steps |
| Simple exit | About 0.15–0.3 seconds, or a clean cut | Clear the space before the next reading task |
| Stable reading hold | Most of the beat's available time | Read the text, inspect the relationship, and hear the explanation |

Budget entrance, readable hold, and exit separately. If a three-second graphic spends two seconds assembling and one second disappearing, it has no useful reading time. Reduce its content or simplify its motion; do not solve the problem by accelerating every tween. Keep the resolved state visible through the spoken conclusion it explains. In talking-head edits, A-roll video and dialogue remain at their original 1.0× speed. Adapt the graphic to that timing; never speed up, slow down, stretch, or freeze the presenter to fit a graphic or a target runtime. Accept a small difference from the target approximate length.

Example: in a hypothetical four-second comparison, the two categories can be visible immediately, the second value can reveal on its spoken cue, and the difference can be highlighted on the conclusion. Do not simultaneously fly in a headline, legend, icons, two numbers, an arrow, and a footer while the viewer is reading subtitles.

## 6. Choreograph attention

Animate the element that matters now. Keep other elements quiet enough for the viewer to follow it. Related elements may move as one group; unrelated elements should not compete for attention. Maintain a visual anchor across a transformation when it helps the viewer understand that the same thing changed.

Use decelerating entrances, accelerating exits, and smooth ease-in/out for movement between positions as useful defaults. Use linear motion for continuous rates where easing would imply a changing rate. Favor short travel and clean settling. Overshoot or bounce can suit a playful accent, but not a precise data value or every label. Repeating an easing curve within a coherent style is fine; arbitrary variety is not a goal.

Give important changes a small amount of anticipation and a resolved hold. Do not force ambient drift, pulsing, rotation, or camera movement during reading. Avoid spinning charts, continual count-ups, flying legends, and decorative particles. Stagger to convey a sequence or hierarchy, not merely because there are multiple objects.

Connect effects to their perceived event: a click on contact, a soft accent when the final value resolves, a restrained transition sound at the transition. Do not attach a sound to every element or use a music beat to override a spoken cue. Protect dialogue intelligibility.

### Choose cuts and scene transitions

**Default to hard cuts for most A-roll-to-graphic, graphic-to-A-roll, and graphic-to-graphic scene changes.** They maintain momentum, especially for fast explanations and simple charts, quotes, or comparisons. Cut on the spoken cue or a resolved beat; music accents are secondary. Internal explanatory animation and meaningful transformations can continue within a graphic.

Reserve stylized bridges for meaningful visual connections, major chapter/time/mood shifts, or smoother handoffs that serve the established cinematic tone. Neither a polished brief nor a complex graphic requires an effect at every boundary. Keep the choice in the video's visual language:

| Choice | When it helps | How to execute |
| --- | --- | --- |
| Hard cut, including a match cut | Routine explanation, brisk pacing, simple graphics, or return to the presenter | Land on speech with a readable incoming state. A match cut aligns shape, position, or action across an instantaneous edit. |
| Motivated wipe or slide | A shared element connects scenes or marks a chapter | Use an existing bar, shape, or color field to reveal the next shot in a consistent direction. This is a wipe, not a match cut. |
| Short fade or dissolve | Reflective passages or changes in time or mood | Briefly overlap compatible compositions; avoid competing labels or routine fades through black. |
| Graphic zoom | Overview-to-detail movement explains a relationship | Animate the graphic layer and settle before reading. Make any change of data scale explicit. |

Budget the bridge inside the beat: preserve the outgoing takeaway, land the incoming idea on its spoken cue, and leave a reading hold. Keep narration and captions continuous. Scope wipes, zooms, and directional blur to transition/graphic layers; do not distort, blur, reframe, or retime underlying A-roll. A scene-covering wipe may replace the presenter shot, but must clear completely; restore baseline framing on return.

Repair a jarring cut's timing, focal placement, or audio continuity first. Shorten or remove effects that delay the point or muddle labels. Reuse a small transition vocabulary; avoid preset variety and automatic whooshes.

## 7. Implement a deterministic Python timeline

Use a declared output frame rate and integer frame boundaries. Convert absolute times once with a consistent rounding policy; derive scene duration from its absolute start and end rather than repeatedly adding rounded durations. Preserve rational frame rates when the media requires them. Keep the original audio as the master clock.

Separate three coordinates: final-video frame, local graphic frame, and source-media time. For an event beginning at `start_frame`, local frame is `frame - start_frame`. For retained talking-head A-roll, source time is the source in-point plus elapsed timeline time at 1.0×; account for authorized cuts through explicit source in/out points, never a duration-ratio multiplier. Retiming an animated graphic must affect only that graphic, not the presenter, dialogue, or composition root. Use half-open active intervals, `start_frame <= frame < end_frame`, so adjacent events do not accidentally overlap for one frame.

Compute each frame's properties from its frame index and immutable event data. Clamp normalized interpolation progress to 0–1. Avoid wall-clock timers, cumulative updates from the previous frame, unseeded randomness, and competing animations writing the same property. Rendering a frame out of order must produce the same result as rendering it in sequence.

Scope transforms and opacity to the graphic layer or group that owns them. Do not resize, translate, crop, or mask the composition root or underlying A-roll to implement graphic margins or safe zones. Clear temporary graphic layers at their end and restore the same baseline footage placement after a cutaway. When the user praises a graphic treatment, retain it while correcting unrelated framing defects.

**Anchor the main full-screen graphic group to the full output canvas** at `(W/2, H/2)` by default, then deliberately adjust its vertical focal position for captions/UI or the composition. Measure the visible content group, excluding full-frame backgrounds and empty transparent padding. With local bounds `(left, top, right, bottom)`, translate by `dx = W/2 - (left + right)/2` and `dy = cy - (top + bottom)/2`. Apply this once. Centering a full-size container does not center its contents. At a chosen height, usable bounds `[L, R]` allow a centered width of `2 * min(W/2 - L, R - W/2)` when they contain the center. An asymmetric safe area constrains width; it must not silently move the focal axis. Simplify/narrow or move vertically before introducing a documented intentional offset. Inspect settled visible bounds and optical balance against full-canvas centerlines, plus entrance/exit clipping. Remove guides from the finished export.

Measure text with the actual font and shaping engine before positioning it. Cache static text, paths, and icons; animate transforms or masks around those assets. Use antialiasing or supersampling for thin geometry and text, then inspect the compressed output for shimmer and halos. Do not assume all glyphs have equal widths or that stroke/shadow bounds equal the unstyled text bounds. Inspect installed library APIs rather than guessing version-specific calls.

Store the brief, cue sheet, style values, asset references, and render command with the Python source. When integrated into a video, give the parent editor real event bounds and reserved regions so it can coordinate captions and cuts.

## 8. Review motion in the parent review budget

**For talking-head, all motion-graphics review belongs to its one combined post-editing round.** Reuse the assembled-video preview and diagnostic frames; do not render and review every graphic separately or add extra craft passes. Return concrete findings to the parent editor for its single correction batch. For other parent workflows, follow their review budget; for standalone work, use one focused review and correction batch.

Inspect important speech cues, settled states, and handoffs at normal speed and realistic display size. Check that one idea leads, changes land with the correct words, reading holds are sufficient, necessary labels and data are accurate, content is centered as intended, and face/subtitle regions remain clear. Check the opening, middle, and ending against the same style; remove redundant prose or competing labels. A contact sheet can establish layout but not timing.

Make the smallest changes needed for the identified issues: adjust a cue, clear a stale label, simplify a dense state, correct an alignment, or replace a distracting transition with a cut. Apply those fixes together and verify the affected locations during final technical checks. Do not restart a full review or redesign working scenes for subjective polish. Report unavailable motion/audio review honestly.
