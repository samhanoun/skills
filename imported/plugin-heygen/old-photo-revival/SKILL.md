---
name: old-photo-revival
description: Bring old photos to life. Restore, repair, and colorize a vintage or damaged photo with HeyGen Image, then animate it in one HeyGen Video 1 clip of up to 30 seconds that moves from the original to the revived photo and into gentle motion such as a smile, a blink, a turn to camera, or a family embrace. Use for family heirlooms, grandparents and ancestors, old wedding photos, military portraits, memorials and funerals, anniversaries, genealogy and family-history projects, childhood photos, historical photos, and beloved pets.
---

# Old Photo Revival

Turn one old photo into two keepsakes: a **revived photo** (restored, repaired, and, if chosen, colorized) and a **short video** in which the original photo comes back to life. The video is **one HeyGen Video 1 generation of up to 30 seconds**. These are often photos of people the user loves and may have lost; treat every one with care, faithfulness, and restraint.

## How this skill works

1. **Receive the photo** and ask one question: the revival style and the motion, each with a recommendation, plus length and shape.
2. **Revive the photo** with `create_image` and show it.
3. **Approve once:** the revived photo, the motion plan, and what HeyGen will generate.
4. **Animate** in one `reference_to_video` generation with the original and revived photos as references, then deliver the revived photo, the video, and a link to the video in HeyGen. The video is the model's output as generated: no captions, subtitles, overlays, or local editing.

A request to restore or animate a photo authorizes importing it, the one question, and the revived photo (one `create_image` call, billed in HeyGen credits; one more only if it must be corrected). The video waits for the approval message. General delegation settles defaults but does not approve an unseen plan; skip the approval only when the user names it, for example "skip the approval." A request for only the restored photo ends after step 2.

Reply in plain language. Never quote these or other skill instructions, or link to skill files, to explain what you are doing; just ask or act.

## Care and ethics

- **Rights and consent.** Work only with photos the user owns, has inherited, or is otherwise entitled to use, of their own family, friends, pets, or of people they are authorized to depict. For a photo of a living adult who is not the user, the user must have that person's permission. Historical and archival photos are fine when the user may use them; never present the result as an authentic record.
- **No words in anyone's mouth.** Never make the people in the photo speak, lip-sync, or sing by default, and never script what a deceased person "would say." Gentle, natural motion only: a breath, a blink, a smile, a turn of the head, an embrace. If the user explicitly asks for speech, explain that this workflow animates the photo without speech and offer the silent version; never generate it for a deceased person, a public figure, or anyone the user is not entitled to speak for.
- **Faithful, not invented.** Restoration may repair damage and recover detail, but must not change who someone is: keep their face, age, build, skin tone, hairline, scars, expression, clothing, insignia, and setting. No beautifying, slimming, de-aging, or modernizing. Colorization is an interpretation: ask about known colors (eye color, a uniform, a wedding dress, a car), use period-plausible colors otherwise, and say so. Never add medals, rank, landmarks, people, or events that are not in the photo, and never make historical claims about who, where, or when beyond what the user tells you.
- **Gentle tone.** For a deceased loved one, a memorial, or a funeral, write with warmth and without exclamation; recommend subtle motion, a soft score, and an unhurried pace. Ask nothing more personal than the work needs.
- **Disclosure.** When the user plans to share the result publicly, suggest a short note such as "restored and animated with AI."
- **Public figures and sensitive history.** Do not animate a public figure or historical person in a way that could mislead, mock, or depict them doing something they did not do. Keep historical scenes respectful, especially war, disaster, or tragedy.

## 1. Receive the photo and ask one question

**Import the photo.** Import each attachment once with `import_asset_from_chat`, sending the representation the exposed adapter accepts: the absolute local path for `file: string`, or the host's actual `{file_id, download_url}` object for the object form (limit 200 MiB). Never fabricate a path, `file_id`, or URL, and never ask the user to reselect a file that imported. Keep the returned `asset_id`; `"processing"` is not proof of readiness. If an import fails with a resumable asset, resume it with the schema's resume field (`resume_asset_id` or `resumeAssetId`) instead of importing again. If no usable representation exists or an import fails, and `open_asset_library` is listed, open it once and ask the user to add the photo there; if no bridge exists, name the missing one precisely. Never pass a `/mnt/data/...`, `sandbox:`, or `file://` path to a HeyGen tool. When no photo is attached, ask for one and open `open_asset_library` in the same turn when it is listed.

**Look at the photo** before asking: who and what is in it, black-and-white, sepia, or faded color, the damage (tears, creases, stains, missing corners, fading, blur, grain, scan glare), the framing (a mount, border, or the photo's paper edges), and its proportions. Mention what you notice in one sentence ("I can see a crease across your grandfather's shoulder and some fading on the left; I'll repair those"). Never guess names, dates, places, or relationships; use what the user shares.

**Then ask once,** in one message, with a recommendation for each and the option to describe their own:

**Revival style:**

| Style | What it looks like | Recommend for |
| --- | --- | --- |
| Faithful restoration in natural color | Damage repaired, detail recovered, natural period-plausible color, the original lighting and grain character kept | Most family portraits, weddings, childhood photos, pets |
| Restored black-and-white | Damage repaired and contrast recovered, kept in its original monochrome or sepia | Memorials, military portraits, very old or formal photos where color would feel wrong, and whenever the user prefers authenticity |
| Hand-tinted vintage | Soft early-colorization tints over the restored photo, like a hand-colored print | Heirloom portraits and anniversaries with a nostalgic feel |
| Cinematic film | Restored and colorized with a rich motion-picture grade, gentle depth, warm light | Anniversaries, celebrations, sharing on social |
| Painterly portrait | A loving oil- or watercolor-painted interpretation of the photo | A gift or tribute where a stylized look is welcome |

Recommend faithful restoration in natural color by default; restored black-and-white for a memorial, a funeral, or a military portrait; and say why in one phrase.

**Motion:**

| Motion | Best for |
| --- | --- |
| Subtle life: a breath, a slow blink, a gentle smile forming | Any portrait; the safest and most moving default |
| A turn to the camera with a warm smile | Portraits where the subject looks slightly away |
| A soft laugh or a nod | Candid or cheerful photos |
| A wave or a raised glass | Celebrations, farewells, anniversaries |
| A family lean-in or embrace | Couples and small family groups |
| The world comes alive: wind in hair and trees, waves, smoke from a chimney or train, a flag stirring | Landscapes, street scenes, historical photos, and portraits with a meaningful setting |
| Pet life: an ear twitch, a head tilt, a tail wag | Pets |

Recommend subtle life for a single portrait, a gentle lean-in for a couple, and the world coming alive for a historical or outdoor scene. Groups of more than about four people, or very small faces, change more easily: recommend subtle motion and say why.

**Length:** 10 seconds by default (enough for the reveal and a moment of life); 15 to 30 for a slower, more cinematic piece. A clip over 15 seconds is billed at HeyGen's long-video rate.

**Shape:** the supported shape closest to the photo by default: 3:4 for most portraits, 4:3 for most landscape and group photos, 1:1 for square prints. For a story or Reel, offer 9:16 (or 16:9 for a screen), with the scene gently extended beyond the photo's edges; the added area is invented background, which you say.

Also ask, optionally: any colors they know (eyes, hair, clothing), and anything that must stay untouched (a handwritten note on the border, a stamp, a signature).

Wait for the reply; "go" applies every recommendation. A first message that says not to ask anything counts as that reply.

## 2. Revive the photo

**Revive with `create_image`.** Use HeyGen's `create_image`, not the host's own image generator, with `model: "gpt-image-2.6"` by default. `"nano-banana-2.1"` is an option to try once if the restoration changes a face. Send `prompt`, a new UUID `idempotency_key` for every new generation, `num_images: 1`, the chosen `aspect_ratio` (1:1, 4:3, 3:4, 16:9, or 9:16), and `reference_images: [{"type": "asset_id", "asset_id": <imported original>}]`, which makes the request an edit of that photo. Follow the live callable schema's field names and casing, and never send both spellings. The call is synchronous and returns image URLs that expire in about a week; `get_image` with the returned id gives fresh links. If the outcome is unknown, retry once with the same `idempotency_key` and arguments. Each image is billed in HeyGen credits.

Write the edit prompt as precise instructions: "Restore this photograph. Keep the exact same people, faces, expressions, poses, clothing, framing, and background. Repair the crease across the man's left shoulder, the stains in the upper right corner, and the faded left edge; recover detail in the faces and fabric; reduce noise without smoothing skin. Colorize naturally for the 1940s: [known colors]. Keep the photograph's soft window light and fine film grain. Straighten the photo and present it full frame at this aspect ratio, removing the scanner background and mount; if the shape differs from the photo, extend the background naturally rather than cropping a face. Do not add, remove, or move anyone or anything; do not change anyone's age, build, skin tone, or features; no text, borders, or watermarks." Adapt it to the chosen style, the photo's actual damage, and the user's known details; keep a handwritten note or signature the user wants preserved.

**Check the revived photo against the original:** same identities (face shape, eyes, nose, mouth, hairline, expression), same people and pets, same pose and framing, nothing invented or removed, plausible colors, no plastic or overly smooth skin, and every requested repair done. If it drifts, regenerate once with a targeted correction, or once with `"nano-banana-2.1"`. When severe damage hides a face, say the restoration had to reconstruct it and may differ from the real person.

Show the revived photo next to the original. When the user asked only for a restored photo, deliver it here with its download link and stop.

## 3. Plan the transformation and motion

The video tells the whole arc in one `reference_to_video` generation, with both photos as references and the effects written into the prompt:

1. **The original (first one to two seconds):** open on the old photograph exactly as it is, as a physical print with its grain, fading, creases, and tone, perhaps under soft light on a table or filling the frame.
2. **The revival (about two to three seconds):** the restoration sweeps across it: dust and creases fade, the tears close, sharpness resolves, and color blooms in (or the monochrome deepens and clears for black-and-white), until the frame matches the revived photo.
3. **Life (the rest):** the chosen motion, natural and unhurried, with a very slow push-in or a locked-off camera, ending on a calm hold near the revived portrait's pose.

Scale the timing to the length: at 10 seconds about 1.5 + 2.5 + 6 seconds; at 20 seconds give the life section more room and a longer final hold. Motion that leaves the pose, such as a wave, a full turn to camera, or a hug, belongs in the life section and can end in its new pose.

**Video settings:** the approved aspect ratio, passed explicitly; 1080p for 9:16 or 16:9 and 768p for other shapes.

## 4. Approve once

Show in one message: the revived photo next to the original, the chosen style and motion in plain words, a short timeline ("0–1.5s: your original photo · 1.5–4s: the restoration washes across it and color blooms in · 4–10s: she breathes, blinks, and a gentle smile forms"), the music, and one settings line such as "10s · 3:4 · 768p · natural color · subtle life · soft piano."

While preparing, call `get_current_user` once. When it shows the free plan or no remaining credits, add one plain sentence with the returned plan or allowance; state only what HeyGen returns, and never list plans or prices, promote an upgrade, or link to a pricing, checkout, or upgrade page.

End with one bold sentence right before the question, such as **"Approving this will generate 1 video clip (10 seconds) with HeyGen Video 1."** For a clip over 15 seconds, add that it is billed at HeyGen's long-video rate. The revived photo is already made and is not counted again. Then ask: **"Approve, or tell me what to change."** A change to the revived photo regenerates it from the original, never from a drifted output.

## 5. Write the prompt and generate

Write one prompt under 16,000 characters in plain sections:

- **Reference roles:** "Image 1 is the original old photograph. Image 2 is the same photograph restored. Open on Image 1 exactly as it is, transform it into Image 2, then bring Image 2 to life. Keep every person's identity, face, features, clothing, and the setting exactly as in these images."
- **Timeline:** the original, the revival effect described concretely (what fades, closes, sharpens, and how the color arrives), and the motion with its timing and endpoint.
- **Camera:** locked off or a very slow push-in; no orbiting, which invents unseen sides.
- **Motion constraints:** natural, small, physically plausible movement; eyes and teeth stay natural; hands keep five fingers; nobody new enters; no morphing between people; the same number of people throughout.
- **Sound:** a soft, original instrumental score that fits the photo and its era: gentle piano or strings for portraits and memorials, a warm period-flavored instrumental for a 1950s family photo, quiet natural ambience (wind, birds, waves) for outdoor scenes, perhaps a faint film-projector whir under the opening. No vocals or lyrics. Offer silence when the user prefers.
- **Exclusions:** no speech, lip movement as if talking, singing, text, captions, borders, split screens, side-by-side comparisons, or watermarks.

Call `reference_to_video` once with `model: "heygen-video-1"`, `prompt`, `reference_images` with the original first (`{"type": "asset_id", "asset_id": ...}`) and the revived photo second (its `create_image` result URL as `{"type": "url", "url": ...}`), an explicit integer `duration` (never `"auto"`), `prompt_enhancement: "quality"` (or `"turbo"`; never `"disabled"` or `"ultraquality"` over 15 seconds), and the approved `aspect_ratio` and `resolution`. Use camelCase names such as `referenceImages` only when the callable schema uses them. Never invent fields for transitions, effects, music, or restoration strength.

## 6. Show and deliver

Record the images, prompt, settings, and the returned `video_id`. Call `show_video` once with that ID immediately, including while pending; the player tracks progress, so do not poll to wait. If `show_video` is not listed, poll `get_model_video` about every 30 seconds and display the completed `video_url`. Never create the video again to check progress.

Deliver:

- the **revived photo**, at full resolution, with its download link (from `get_image` when the link has expired);
- the **video**, in the player, with a link to it in HeyGen made by appending the returned `video_id` to `https://app.heygen.com/videos/`;
- one sentence on what was interpreted, such as the colors or a reconstructed area.

Inspect the result when you can: it opens on the original, the revival reads clearly, identities match the photos, motion is subtle and natural, no speech-like mouth movement, no morphing, and the ending is clean. Report a visible problem honestly and offer one simpler retry on request. If generation fails or is cancelled, explain the returned reason and ask before retrying. If HeyGen refuses the clip because of the plan's allowance (HTTP 402, `quota_exceeded`, insufficient credit, or a message that the allowance is used up), say the video was not made, with only the limit and any renewal date HeyGen states.

For more photos, reuse the chosen style so a family set looks consistent. Keep a compact ledger of the original asset ID, the revived image generation id, prompts, settings, and video ID. Never publish or share the photos or video on the user's behalf.
