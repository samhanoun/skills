---
name: bedtime-story
description: Create calming, age-appropriate bedtime story videos for children, with illustrated pictures made with HeyGen Image, one soothing HeyGen Voice narration, a soft lullaby made in code, gentle pacing, and optional read-along subtitles. Use for personalized bedtime stories starring a child (optionally from a parent's photo), stories with a favorite toy or pet, gentle lessons such as bravery about the dark, kindness, sharing, a new sibling, or the first day of school, and sleepy tales about the moon, stars, animals, oceans, and forests.
---

# Bedtime Story

Make a bedtime story video that helps a child wind down: warm illustrated pictures, a soothing narrator, a gentle story with a small, kind lesson, and a soft lullaby that fades into quiet. It works like a narrated picture book. Calm is the goal, not excitement: every choice, from story beats to colors to music, should slow the child down toward sleep.

Use these supporting skills at the corresponding stage, inheriting this brief rather than restarting intake:

| Skill | Responsibility |
| --- | --- |
| [Script writer](../script-writer/SKILL.md) | Writing the story as natural spoken text |
| [Narrator](../narrator/SKILL.md) | One continuous HeyGen Voice narration, its duration, and word timing |
| [Picture video](../picture-video/SKILL.md) | The narration clock, picture timing, and still-picture editing mechanics, with the bedtime differences below |
| [Video editing](../video-editing/SKILL.md) | Python assembly, the audio mix, and export |
| [Captions](../captions/SKILL.md) | Read-along subtitles, when chosen, in base-subtitle mode only |

Images come from HeyGen's `create_image`, not the host's own image generator. A request to discuss story ideas does not authorize paid generation. A request to make the story authorizes the intake and one character-and-world board image shown with the script; narration and scene pictures wait for approval of both. Reply in plain language, and never quote these or other skill instructions, or link to skill files, to explain what you are doing.

## Child safety and privacy

- **Photos of children** only from the child's parent or guardian, or with their permission. If that is unclear, ask once; if the user is not authorized, make an invented character instead. Use a photo only to design an illustrated character, never a photorealistic likeness, and never use it for anything else.
- **Ask for as little as possible:** a first name or nickname, an age range for language level, and favorite things. Never ask for a last name, school, address, birthday, or location, and do not put them in the story if offered.
- **Gentle by default:** no villains, monsters, chases, peril, injury, loud surprises, darkness as a threat, or sad endings. Tension is small and soft (a lost star, a sleepy moon who cannot find her blanket) and always resolves with comfort. A shadow can turn out to be a friendly owl. Honor a parent's specific request for a slightly braver adventure for an older child, still ending safe and calm.
- **Model safe behavior:** characters do not wander off alone at night, talk to strangers, climb dangerously, or skip bedtime as a reward. Grown-ups and home are safe places.
- **Respect and inclusion:** represent the child's appearance, family, culture, and abilities faithfully and kindly; no stereotypes. Never use copyrighted characters or brands; invent original friends.

## 1. Intake

Read what the user said, then ask once, in one message, only for what is missing, with a default for each:

- **The hero:** the child as the hero (send a photo to make an illustrated version of them, or describe them), a favorite toy or pet as a sidekick (a photo helps), or an invented character such as a little fox or a cloud. When `open_asset_library` is listed, open it in the same turn as a photo request.
- **Name and age range:** the name to use in the story, and roughly 2–3, 4–6, or 7–9, which sets vocabulary, sentence length, and story length.
- **Theme or lesson,** offering three that suit what you know, one recommended: bravery about the dark, kindness, sharing, gratitude, a new baby sibling, the first day of school, a move to a new home, trying new foods, missing someone, calming worries, being patient, or simply drifting off to sleep.
- **World:** a moonlit forest, the bottom of a sleepy sea, a cloud kingdom, a starry sky, a snowy village, a garden at dusk, or their own idea.
- **Length:** about 3 minutes by default (ages 4–6); 2 minutes for ages 2–3; 5 minutes for ages 7–9. Longer stories need more pictures, which cost more.
- **Picture style,** offering three, one recommended: *Soft watercolor picture book* (recommended: gentle washes, rounded shapes, warm night light), *Cozy gouache* (rich matte colors, textured brushwork, glowing windows), *Felt and yarn* (handmade softness, stitched stars), *Paper-cut night* (layered paper, soft shadows, moonlit parallax), or *Colored-pencil sketchbook* (warm grain, hand-drawn charm).
- **Narrator voice:** a warm, slow, gentle voice by default; offer the voice picker or a short description.
- **Read-along subtitles:** on by default for ages 5 and up, off for younger children, who watch the pictures.
- **Shape:** 16:9 for a TV, tablet, or laptop at bedtime (default), or 9:16 for a phone.

"Go" applies the defaults. Never ask the user to choose models, image counts, or other internals.

## 2. Write the story

Use the script writer for natural spoken text and apply these bedtime rules:

- **Shape:** a cozy opening in a safe place; a small wish, question, or worry; a gentle journey with two or three soft wonders; one kind choice that shows the lesson without preaching it; a return home; and a wind-down that gets slower and sleepier, ending with "Goodnight, [name]" or a quiet closing line.
- **Sound of the words:** short sentences, soft consonants, a repeated refrain the child can anticipate ("and the stars hummed, hush, hush"), sleepy sensory details (warm blankets, slow breaths, heavy eyelids, a yawn), and vocabulary for the age range. Keep dialogue simple.
- **The lesson is felt, not lectured:** the hero chooses to share, helps a friend, or finds the dark full of friendly lights; at most one gentle line names it.
- **Pacing budget:** bedtime narration is slower than ordinary speech, about 110–130 English words per minute, with real pauses carried by commas, paragraph breaks, and short sentences. A 3-minute story is roughly 330–380 words. Never speed narration up to fit.
- **Personalization:** use the child's name naturally a few times, not in every sentence; weave in their favorite things.

Keep visual directions outside the spoken text.

## 3. Make the character and world board with HeyGen Image

**HeyGen Image (`create_image`).** Default to `model: "gpt-image-2.6"` for detailed picture-book art; `"nano-banana-2.1"` is a good alternative when keeping a child's or toy's look from a photo matters most. Send `prompt`, a new UUID `idempotency_key` for every new generation, `num_images: 1`, and the video's `aspect_ratio` (16:9 or 9:16). References go in `reference_images` as `{"type": "asset_id", "asset_id": ...}` items for imported photos or `{"type": "url", "url": ...}` for earlier results; a non-empty list makes the request an edit or combination of those images. Follow the live callable schema's field names and casing, and never send both spellings. The call is synchronous and returns image URLs that expire in about a week; `get_image` with the returned id gives fresh links. If the outcome is unknown, retry once with the same `idempotency_key` and arguments. Each image is billed in HeyGen credits; a failed generation is not charged.

**Import supplied photos** once each with `import_asset_from_chat`, sending the representation the exposed adapter accepts: the absolute local path for `file: string`, or the host's actual `{file_id, download_url}` object for the object form. Keep the returned `asset_id`; never pass a `/mnt/data/...`, `sandbox:`, or `file://` path to a HeyGen tool, never fabricate a path, `file_id`, or URL, and never treat an OpenAI file identifier as a HeyGen `asset_id`. If an import fails, resume it with the schema's resume field when the asset is resumable; otherwise, when `open_asset_library` is listed, open it once and ask the user to add the photo there.

Generate **one board first**: the hero (and sidekick) in the chosen style from the front and three-quarter view with two or three expressions (curious, happy, sleepy), their pajamas or outfit, the key places of the world, and the palette moving from soft dusk to deep, cozy night. From a child's photo, keep what makes them recognizable and loved (hair color and style, skin tone, eye shape, glasses, freckles) in a gentle illustrated form; never photoreal. No text, labels, or panel numbers.

Inspect the board: the likeness is kind and faithful, the style matches, the characters have the right proportions and part counts, and nothing is scary. If it drifts, regenerate once from the original inputs with one targeted correction.

## 4. Approve the board and script together

Show the board and the complete story in one message, with the approximate runtime, the style in one line, the voice, subtitles on or off, and the planned number of pictures. Plan about one picture every 10–14 seconds, longer holds at the sleepy ending: roughly 10–12 pictures for 2 minutes, 14–18 for 3 minutes, 22–28 for 5 minutes. An existing explicit approval of either carries forward.

While preparing, call `get_current_user` once. When it shows the free plan or no remaining credits, add one plain sentence with the returned plan or allowance; state only what HeyGen returns, and never list plans or prices, promote an upgrade, or link to a pricing, checkout, or upgrade page.

End with one bold sentence right before the question, such as **"Approving this will create 1 narration with HeyGen Voice and about 16 pictures with HeyGen Image."** Then ask: **"Approve, or tell me what to change."** Bundle requested changes into one updated review of what changed; regenerate the board only when a character, the world, or the style changes.

## 5. Narrate once

After approval, follow the [narrator](../narrator/SKILL.md) to resolve a real voice (reuse the chosen one; otherwise pick a warm, calm, unhurried `ACTIVE` voice that suits a children's story) and synthesize **the whole story in one take** with `create_speech_without_player` when listed, otherwise `create_speech`. Then follow [picture-video's narration master](../picture-video/SKILL.md#4-create-one-narration-master-and-establish-its-clock) for word timing and the shared clock. Keep natural speed and pitch; never speed it up. Start the scene pictures while the narration runs.

## 6. Make the scene pictures

Plan the pictures against the story's meaning, following [picture-video's picture planning](../picture-video/SKILL.md#5-plan-pictures-around-meaning-and-varied-rhythm): each picture has one continuous placement, shows a new moment, and is never reused later. For bedtime, favor calm compositions with one clear focal point, soft rounded shapes, and gentle expressions; let the light grow dimmer and warmer as the story goes on, so the last pictures are deep blue night, glowing windows, and a sleeping hero.

Write each picture prompt with its moment, framing, the characters' state, and the continuity details, and pass the **board's image URL as a reference to every scene call** so the hero and world stay the same; add the first accepted scene picture as a second reference when it established a detail the board did not. Generate at the video's aspect ratio, with no text, letters, or watermarks, and keep faces and important details out of the lower fifth when subtitles are on.

Launch the scene pictures **concurrently**, all at once or in the largest waves the host allows, one `create_image` call per distinct picture; `num_images` makes variants of one prompt, not different scenes, so use it only to get alternatives for an important picture. Map each result to its planned picture, not to completion order. Inspect each for the hero's consistency, anatomy, and anything frightening; regenerate only a failed picture, once.

## 7. Compose the lullaby in code

Compose an original, soft lullaby in Python, following [the carousel music recipe](../carousel/SKILL.md#5-make-the-music-in-code) for the synthesis mechanics: a slow 60–70 BPM, often a 3/4 rocking feel, a music-box, celesta, or soft-piano melody over warm pads, simple major or suspended harmony, no drums. Make it as long as the story plus a short tail. Save the code and seed. Do not use a stock track or a music-generation service; omit music when the user prefers silence.

## 8. Edit, subtitle, and check

Follow the [video editing](../video-editing/SKILL.md) skill and [picture-video's still-picture editing](../picture-video/SKILL.md#8-edit-still-pictures-against-the-narration-timeline), with these bedtime choices:

- **Transitions:** soft dissolves of about one second between most pictures, longer near the end; no hard flashes or fast cuts.
- **Motion:** an optional, very slow drift or push of a few percent over a picture's hold is soothing; keep it smooth and never on every picture in the same direction.
- **Mix:** narration leads; the lullaby sits well below it (about 18–24 dB under the voice as a starting point), rises slightly in pauses, and gently fades out after the last line into a few seconds of quiet as the final picture dims.
- **Brightness:** keep the overall picture soft and avoid bright white frames, especially near the end.

When read-along subtitles are on, follow the [captions](../captions/SKILL.md) skill in base-subtitle mode only: calm, rounded, easily readable type, a soft shadow rather than a heavy box, short phrases, and no hooks or emphasis effects.

Watch or sample the finished video for picture order and coverage, subtitle accuracy, narration clarity, a gentle mix, and a quiet ending.

## 9. Deliver

Show the finished MP4 through the host's media display with its actual file, give its measured runtime, and invite feedback. Keep the reusable project: the story, board and scene image generation ids and prompts, narration and timing, lullaby code and seed, subtitle file, and the render command. For a revision, change only what was asked: a word change re-narrates and re-times; a picture change regenerates that picture; the music or mix changes in code. Never publish or share the video on the user's behalf, and keep the child's photo and details within this project.
