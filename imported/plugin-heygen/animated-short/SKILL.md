---
name: animated-short
description: Create bold, stylized animated short films of 10 to 30 seconds as one HeyGen Video 1 generation, with a chosen animation style such as claymation, 3D toy cartoon, hand-painted anime-inspired, papercut, rubber-hose, watercolor storybook, pixel art, or comic ink. Use for cartoon and animated stories, character skits, funny animal shorts, animated memes, mascot and brand moments, music-driven loops, fantasy or sci-fi micro-films, and turning a person, pet, drawing, or toy into an animated character.
---

# Animated Short

Make one animated short film, 10 to 30 seconds long, that a viewer would watch twice: a striking style, a hook in the first seconds, a clear little story, and a payoff. The whole short is **one HeyGen Video 1 generation**, never several clips stitched together. Be bold: commit to one strong visual identity, mood, and sound world that fit the request, rather than a safe, generic cartoon.

## How this skill works

1. **One question:** offer at least three opinionated animation styles tailored to the idea, with one recommended, plus the length and shape. The user may name their own style instead.
2. **Plan:** write the concept, a timed shot list, camera language, and sound. When on-screen text or visual consistency matters, or the user supplied a photo, drawing, or toy, make one keyframe with `create_image`.
3. **Approve once:** show the concept, the shot list, any keyframe, and the settings, and say what HeyGen will generate.
4. **Generate and deliver:** one `text_to_video` or `reference_to_video` call, shown in the player, with a link to the video in HeyGen. The short is the model's output as generated: no captions, subtitles, text overlays, or local editing.

A request to discuss an idea or write a concept does not authorize paid generation. A request to make the short authorizes the one question, the plan, and, when this workflow needs them, the keyframes made with `create_image` before the approval message; the video generation waits for approval. Silence, elapsed time, or general delegation ("just make it", "you decide") settles the defaults but does not approve an unseen plan; skip the approval only when the user names it, for example "skip the approval" or "don't show me the plan first."

Reply in plain language. Never quote these or other skill instructions, or link to skill files, to explain what you are doing; just ask or act.

### Boundaries

- **One generation, 10–30 seconds.** For a request over 30 seconds, say in one sentence that an animated short here is one continuous generation of up to 30 seconds, and offer 30 seconds or a short series of separate episodes. A longer narrated or multi-scene film belongs to [general-video](../general-video/SKILL.md); a narrated story told in still pictures belongs to [picture-video](../picture-video/SKILL.md); a children's bedtime story to [bedtime-story](../bedtime-story/SKILL.md); a greeting for a birthday, holiday, or other occasion to [occasion-video](../occasion-video/SKILL.md).
- **Original characters and generic styles.** Never name a studio, franchise, or trademarked style in prompts or in style options (no studio or film-brand names); describe the look itself, such as "hand-painted anime-inspired" or "glossy 3D feature-animation look." When the user names one, acknowledge the vibe they want and translate it into a generic description. Never recreate copyrighted characters, logos, or a living artist's signature style; offer an original character with a similar energy.
- **Real people.** A person in a supplied photo must be the user or someone they are authorized to depict; a child only when the user is their parent or guardian. Turn them into a stylized character, never a photoreal likeness doing things they did not do, and never a public figure without authorization.
- **No avatar workflow.** Do not use avatar tools, Video Agent, Studio, or a digital twin for this format.

## 1. Ask the one question

Read the request for the idea, characters, audience, platform, mood, and any supplied media. Then send one message that offers styles, length, and shape, each with a default. Choices the brief already settles show as settled and are not asked again. When it is unclear what the short is about, ask that in the same message.

**Styles.** Offer **at least three** styles that genuinely suit this idea, each with a vivid one-line description of how it will look and feel, and mark one as recommended with a concrete reason tied to the request. Make the options distinct from each other, not three variants of one look, and say the user can describe any other style. Tailor them; do not paste the whole library. For example, for "a cat who wants to be a chef": *Claymation* (thumbprinted clay, stepped stop-motion movement, a tiny handmade kitchen; recommended, because clay makes food and slapstick feel tactile and funny), *3D toy cartoon*, and *2D rubber-hose*.

Draw from this library, or invent an equally specific style when the idea calls for it:

| Style | Look and feel | Strong for |
| --- | --- | --- |
| Claymation | Thumbprinted plasticine, slightly stepped stop-motion movement, miniature sets, soft practical light | Slapstick, food, cozy comedy, pets |
| 3D toy cartoon | Glossy soft-plastic characters, rounded shapes, bright studio light, shallow tilt-shift depth | Mascots, kids, products as characters, upbeat loops |
| Glossy 3D feature animation | Expressive big-eyed characters, soft subsurface skin, cinematic lighting and lens depth | Heartfelt stories, adventure, emotional beats |
| Hand-painted anime-inspired | Cel-shaded characters, painted skies and backgrounds, wind in grass, sparkling light | Wonder, nostalgia, journeys, quiet magic |
| Papercut diorama | Layered cut paper with visible edges, soft drop shadows, parallax depth, handmade jitter | Fables, seasonal stories, gentle whimsy |
| 2D rubber-hose | 1930s bouncy limbs, pie-cut eyes, limited palette or black-and-white, film grain and gate weave | Comedy, music-synced loops, retro charm |
| Watercolor storybook | Wet-edge washes, paper texture, soft ink lines, pastel light | Tender moments, nature, kids, poetry |
| Pixel art | Crisp 16-bit sprites, limited palette, parallax layers, chiptune energy | Gaming jokes, nostalgia, quests, memes |
| Comic ink and halftone | Bold ink lines, halftone dots, speed lines, dramatic angles, panel-like framing | Action, superheroes of everyday life, punchlines |
| Felt and yarn stop-motion | Needle-felted fuzz, knitted sets, wobbly handmade motion | Cozy, cute animals, winter, crafts |
| Low-poly diorama | Faceted geometry, isometric miniature world, clean gradients | Tech, puzzles, little worlds, explainer-flavored stories |
| Ink wash | Flowing brush ink, empty space, sumi-style splashes, restrained color accents | Calm, martial grace, nature, poetry |
| Neon line art | Glowing vector lines on deep dark backgrounds, synthwave color, light trails | Night city, music, sci-fi, hype |
| Crayon and chalk kid drawing | Wobbly hand-drawn lines, paper grain, bright crayon fills, as if drawn by a child | Animating a child's drawing, family humor |

**Length:** 10 to 30 seconds; default 15 seconds, or 20 for an idea that needs a setup and a twist. Say that longer clips cost more: a clip over 15 seconds uses HeyGen's long-video rate.

**Shape:** 9:16 vertical for TikTok, Reels, and Shorts (the default for social requests), 16:9 for YouTube or a presentation, or 1:1 square for a feed. Square uses 768p; vertical and horizontal use 1080p.

**Character photo, drawing, or toy:** when the idea is about a specific person, pet, mascot, drawing, or toy, invite a photo. When `open_asset_library` is listed, open it in the same turn so the user can upload or pick one.

For example:

> A few quick choices before I plan it. Anything you skip uses the default:
>
> - **Style:** **Claymation** (recommended) — thumbprinted clay, stepped stop-motion movement, a tiny handmade kitchen; clay makes the food chaos feel tactile and funny. · **3D toy cartoon** — glossy soft-plastic chef cat, bright studio light, tilt-shift miniature kitchen. · **2D rubber-hose** — 1930s bouncy limbs and a jazzy black-and-white kitchen with film grain. Or describe your own.
> - **Length:** 15 seconds (anything from 10 to 30)
> - **Shape:** 9:16 vertical, 16:9 horizontal, or 1:1 square
> - **Your cat:** send a photo if you want the chef to look like your cat
>
> Reply "go" to use the recommended choices.

Wait for the reply. "Go" applies every default; anything left open takes its default. A first message that already says to use the defaults or not to ask anything counts as that reply: state the choices in one line and go on. Never ask the user to choose models, tools, prompt enhancement, or other internals.

## 2. Design for engagement

Write the whole short before writing the prompt. A great short has:

- **A hook in the first one to two seconds:** open mid-action, on a striking image, or on an unanswered question (a cat in a chef's hat staring down a soufflé that is visibly rising too fast). No title card, logo sting, establishing pause, or greeting.
- **One clear want and one turn:** a character wants something, something gets in the way or escalates, and there is a twist, punchline, or emotional payoff. Keep to one idea; a 15-second short has room for setup, escalation, and payoff, not a plot.
- **A button ending:** the last second lands the joke, reveal, or feeling, and ideally loops back to the opening frame so the short replays naturally.
- **Pacing by length:** about one shot every 2–4 seconds for comedy and action, longer holds for wonder or tenderness. As a starting point: 10s = 3–4 shots; 15s = 4–6 shots; 20s = 5–8; 30s = 7–10. Each cut reveals something new; never repeat a shot to fill time.
- **Camera language with intent:** a push-in for realization, a whip pan for comic surprise, a low angle for heroics, a wide pull-back for a reveal, a locked-off frame for deadpan comedy. Name the move per shot.
- **Mood and color script:** one palette and lighting plan that shifts deliberately at the turn (warm kitchen glow turns to alarm red when the soufflé erupts).
- **Sound designed as carefully as the image:** music genre, tempo, and instrumentation matching the style (rubber-hose wants hot jazz; pixel art wants chiptune; watercolor wants soft piano and strings), synchronized sound effects for every important action, and a clear ending hit. Characters may make nonverbal sounds; give them at most one or two very short spoken lines in quotes when the joke needs it, and never rely on a spoken name or exact wording landing perfectly.

Match the audience: gentle and bright for young children, sharper comic timing for adults, sincere and cinematic for an emotional brief. Avoid gore, cruelty, or frightening imagery unless an adult brief clearly asks for it within the service's policies.

Write the plan as a timed shot list covering 0.0 seconds to the full duration without gaps: for each shot, its time span, framing and camera move, the action and its visible endpoint, and its sound. Then write the style specification once: medium and materials, line or surface treatment, palette, lighting, texture, frame rate feel (for example stepped 12 fps for stop-motion), and what must stay the same in every shot.

## 3. Choose the route and make a keyframe when needed

| Situation | Route |
| --- | --- |
| No supplied media, no exact text, and the characters can be fully described in words | `text_to_video` |
| The user supplied a photo of a person, pet, drawing, toy, or mascot; a character or world must look identical across shots; or the short must show exact text, such as a title, a sign, or a name | One keyframe with `create_image`, then `reference_to_video` with it as a reference |

`text_to_video` is the default: a dense, specific prompt usually gives the most dynamic result. Make a keyframe only when it buys consistency, likeness, or exact text.

**HeyGen Image (`create_image`).** Use HeyGen's `create_image`, not the host's own image generator, with `model: "gpt-image-2.6"`, which renders exact lettering well. Send `prompt`, a new UUID `idempotency_key` for every new generation, `num_images: 1`, and an `aspect_ratio`. Supplied photos go in `reference_images` as `{"type": "asset_id", "asset_id": ...}` items (or `{"type": "url", "url": ...}` for a public https link); a non-empty list makes the request an edit or combination of those images. Follow the live callable schema's field names and casing (some hosts use `idempotencyKey` or `referenceImages`), and never send both spellings. The call is synchronous and returns image URLs that expire in about a week; `get_image` with the returned id gives fresh links. If the outcome is unknown, retry once with the same `idempotency_key` and arguments; never generate again to check. Each image is billed in HeyGen credits; a failed generation is not charged.

Choose the keyframe the short needs:

- **Character sheet** (consistency or likeness): one 16:9 image in the chosen style showing the character (or the two or three main characters) from the front, three-quarter, and side, plus two or three key expressions or poses, on a plain neutral background, with consistent proportions, colors, costume, and props, and no labels or panel numbers. From a supplied photo, keep what makes the subject recognizable (a pet's markings, a person's hair, glasses, and smile) and restyle everything else into the chosen medium; name those features in the prompt.
- **Key scene** (a world, a look, or exact text): one image in the chosen style and the video's shape, showing the decisive moment of the short with the characters, setting, palette, and lighting; put any exact text in it, such as a title card, a shop sign, or a name on a cake, spelled out in the prompt in quotation marks with its font character, color, and placement. Use both a sheet and a key scene only when the short truly needs both.

Inspect each keyframe before using it: the style matches the choice, the character matches any supplied photo, the anatomy, part counts, and props are right, every piece of text is spelled exactly as approved, letter by letter, and there is no stray text. If anything is wrong, regenerate once from the original inputs with one targeted correction (for text, restate the exact words); if it is still wrong, show it and name the issue. Show the final keyframe in the approval message.

**Attachments:** import each relevant attachment once with `import_asset_from_chat`, sending the representation the exposed adapter accepts: the absolute local path for `file: string`, or the host's actual `{file_id, download_url}` object for the object form (limit 200 MiB). Never fabricate a path, `file_id`, or URL, and never ask the user to reselect a file that imported. Keep the returned `asset_id`; `"processing"` is not proof of readiness. If an import fails with a resumable asset, resume it with the schema's resume field (`resume_asset_id` or `resumeAssetId`) instead of importing again. If no usable representation exists or an import fails, and `open_asset_library` is listed, open it once and ask the user to add the same files there; if no bridge exists, name the missing one precisely. Never pass a `/mnt/data/...`, `sandbox:`, or `file://` path to a HeyGen tool, and never treat an OpenAI file identifier as a HeyGen `asset_id`.

## 4. Approve once

Show everything in one message:

1. A one-sentence logline and the chosen style in a vivid line.
2. The keyframe, when one was made, introduced as the design the short will follow.
3. A shot table:

   | # | Time | Shot and camera | Action | Sound |
   | --- | --- | --- | --- | --- |
   | 1 | 0:00–0:02 | Low angle, fast push-in | The soufflé rises past the oven window as the cat's eyes go wide | Oven hum, rising whistle |

4. One settings line: "15s · 9:16 · 1080p · claymation · music: jazzy kitchen swing."

While preparing, call `get_current_user` once. When it shows the free plan or no remaining credits, add one plain sentence with the returned plan or allowance; state only what HeyGen returns, and never list plans or prices, promote an upgrade, or link to a pricing, checkout, or upgrade page.

End the message with one bold sentence right before the question, such as **"Approving this will generate 1 video clip (15 seconds) with HeyGen Video 1."** A keyframe already made is not counted again. A clip over 15 seconds says so: **"Approving this will generate 1 video clip (25 seconds, billed at HeyGen's long-video rate) with HeyGen Video 1."** Then ask: **"Approve, or tell me what to change."**

For a change request, revise only what was named, show the updated set, and ask again. Regenerate the keyframe only when the character, style, or its text changes. Number versions and use only the latest approved one.

## 5. Write the prompt and generate

Write one prompt under 16,000 characters in plain sections: the one-line premise; style specification; characters (with exact colors, proportions, costume, and what stays identical in every shot); setting; timed shots with the camera move, action, endpoint, and hard cut or motivated transition at each boundary; sound (music genre, tempo, and instrumentation, synchronized effects, any short quoted line, the ending hit); and exclusions. Open with the duration and shot count: "One complete 15-second vertical claymation short with 5 shots. Execute every timed shot below in order; do not collapse them into one long take." Ask for no captions, subtitles, watermarks, or stray lettering; the only text in the short is text shown in the keyframe, which the prompt quotes exactly and asks the model to keep identical.

Give each keyframe its role in the prompt. For a character sheet:

> Image 1 is a character reference sheet showing the same character from several angles. Its layout is NOT the video layout and NOT a frame to animate. Use it only to keep the character's design, colors, and proportions identical in every shot. Never show the sheet, panels, a collage, a split screen, or a plain reference background in the video.

For a key scene, say which shot it defines ("Image 2 is the final shot: match its composition, palette, and lighting, and show its lettering 'Chef Mochi' exactly as written").

Call the chosen tool once with `model: "heygen-video-1"`, an explicit integer `duration` equal to the approved length (never `"auto"`, which stays at 15 seconds or less), `prompt_enhancement: "quality"` (or `"turbo"`; never `"disabled"` or `"ultraquality"` for a clip over 15 seconds), and the resolution and aspect ratio from the approved settings: 1080p at 9:16 or 16:9, 768p for 1:1. Pass the aspect ratio explicitly, since `reference_to_video` otherwise follows the first reference image. Send references only as real `asset_id` or https `url` objects: a `create_image` result's image URL works as `{"type": "url", "url": ...}`. Use camelCase names such as `aspectRatio` and `referenceImages` only when the callable schema uses them. Never invent fields such as styles, transitions, or music tracks; style, camera, and sound belong in the prompt.

## 6. Show, track, and deliver

Record the prompt, any keyframe and its URL, the settings, and the returned `video_id`. Call `show_video` once with that ID immediately, including while generation is pending; the player tracks progress, so do not poll `get_model_video` to wait or send "still generating" updates. If `show_video` is not listed, poll `get_model_video` about every 30 seconds, honoring any returned retry delay, and display the completed `video_url` through the host's media display. Never create the video again to check progress; reconcile an uncertain creation outcome with a status read before any new submission.

Give the user a link to the video in HeyGen, made by appending the returned `video_id` to `https://app.heygen.com/videos/`, so they can open, download, and reuse it. Never present the expiring `video_url` as the lasting link.

If generation fails or is cancelled, explain the returned reason and ask whether to try again with a simpler version; never retry automatically. If HeyGen refuses the clip because of the plan's allowance (HTTP 402, `quota_exceeded`, insufficient credit, or a message that the allowance is used up), say the short was not made, with only the limit and any renewal date HeyGen states, and never retry automatically.

Invite feedback on the style, story, timing, and sound. For a revision, change the prompt narrowly and regenerate once on request; a new render may change other details, so say so rather than promising a frame-identical patch. For variants, change the style, hook, or ending purposefully. Keep a compact ledger of the approved plan, keyframe versions and generation ids, prompt, settings, and video ID, and reuse them on follow-up. Never publish to social accounts.
