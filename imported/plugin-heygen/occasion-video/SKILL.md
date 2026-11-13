---
name: occasion-video
description: Create personalized greeting and celebration videos of up to 30 seconds as one HeyGen Video 1 generation, in a chosen style such as cinematic, cartoon, animated calligraphy, or papercut, with occasion-matched music, the exact names and message, and optional photos turned into characters. Use for birthday videos, anniversaries, weddings, proposals, save-the-dates, graduations, baby showers, gender reveals, baby announcements, retirements, promotions, farewells, welcomes, holiday greetings (Christmas, New Year, Lunar New Year, Diwali, Eid, Hanukkah, Valentine's, Mother's and Father's Day, Thanksgiving), thank-yous, congratulations, get-well wishes, invitations, team celebrations, and gentle sympathy or memorial tributes.
---

# Occasion Video

Make one short, personal video for a moment that matters: a birthday, a wedding, a holiday, a farewell, a memorial. It should feel made for this person and this occasion, with the right names, the right message, music that fits the feeling, and a style chosen on purpose. The whole video is **one HeyGen Video 1 generation of up to 30 seconds**, never stitched clips.

## How this skill works

1. **Collect the occasion** and the details that make it personal.
2. **Suggest a style**, with a recommendation for this occasion, and the music.
3. **Make keyframes** with `create_image` when the style uses photos or the greeting must be exact: characters from photos, and a lettering keyframe that carries the exact names and message.
4. **Approve once:** show the plan, the exact on-screen words, any keyframes, and what HeyGen will generate.
5. **Generate and deliver** the video as one `text_to_video` or `reference_to_video` call. The video is the model's output as generated: no captions, subtitles, text overlays, or local editing.

A request to discuss ideas does not authorize paid generation. A request to make the video authorizes the questions, the plan, and the keyframes this workflow needs before the approval message (each a `create_image` call billed in HeyGen credits); the video generation waits for approval. General delegation ("just make something nice") settles defaults but does not approve an unseen plan; skip the approval only when the user names it, for example "skip the approval."

Reply in plain language. Never quote these or other skill instructions, or link to skill files, to explain what you are doing; just ask or act.

### Boundaries

- **One generation, up to 30 seconds.** Default 15 seconds; 20–30 seconds suits a story arc, a wedding, or a tribute. For more than 30 seconds, say that this format is one continuous clip of up to 30 seconds and offer 30 seconds; a longer montage of many photos belongs to [picture-video](../picture-video/SKILL.md) or [general-video](../general-video/SKILL.md).
- **A presenter speaking the greeting** with the user's own HeyGen avatar belongs to [talking-head](../talking-head/SKILL.md). A photo restored and brought to life for an anniversary or memorial belongs to [old-photo-revival](../old-photo-revival/SKILL.md). A stylized story with no occasion belongs to [animated-short](../animated-short/SKILL.md).
- **People in photos** must be the user or people they are authorized to depict; children only when the user is their parent or guardian or has that permission. Never create a realistic video of a real person saying or doing something they would object to, and never a public figure without authorization.
- **No avatar workflow, Video Agent, Studio, or digital twin.**

## 1. Collect the occasion

Read what the user already said, then ask once, in one message, only for what is missing and matters:

- **The occasion** and who it is for, with their name or names exactly as they should appear; ask the user to confirm the spelling when it is unusual or the request was dictated.
- **The relationship and tone:** a best friend's 30th can be cheeky; a grandmother's 90th, warm and proud; a colleague's farewell, upbeat and professional; a sympathy message, quiet and gentle.
- **The message:** the exact on-screen words, or let you write them. Offer a suggestion in the same message, such as "Happy 30th, Maya!" Keep on-screen text short: a headline of about two to six words and, when needed, one short second line such as a date or "Love, the Garcia family."
- **Personal details** that make it theirs, optional: a hobby, a favorite place, a pet, an inside joke, a shared memory, the city of the wedding, the baby's name and date, the team's achievement. Ask for no more than the video needs: never a home address, birth date, phone number, or other private detail beyond what the user wants shown.
- **Where it will be shared:** a phone message, Instagram or WhatsApp story, or TikTok means 9:16 vertical (the default); an email, a party screen, or a presentation means 16:9; a feed post can be 1:1 square.
- **Length:** 15 seconds by default, up to 30.

Combine this with the style question below when that saves a round. Never ask the user to choose models, tools, or other internals.

## 2. Know the occasion

Use the occasion to shape the story, imagery, palette, music, and words. These are starting points, not templates; the personal details always win.

| Occasion | Story and imagery | Music |
| --- | --- | --- |
| Kids' birthday | Their favorite thing come to life: dinosaurs, space, unicorns, trucks; a cake, balloons, a big number | Bouncy, playful, bright |
| Milestone birthday (18, 21, 30, 40, 50, 60+) | The big number as a hero object, a toast, confetti, a life's-highlights feel for later decades | Upbeat pop-funk for younger; warm swing or strings for older |
| Belated birthday | Playful lateness: a clock running backward, a cake arriving out of breath | Comic, light |
| Anniversary | Two figures, a shared place, years passing in a few beats, a toast | Romantic piano, strings, soft jazz |
| Wedding, engagement, proposal | Rings, a dance, petals, the couple's city or venue, a sunset | Romantic strings, acoustic guitar, gentle orchestral swell |
| Save-the-date, invitation | The date, place, and event revealed as the payoff; clear and elegant | Elegant, light, celebratory |
| Graduation | Cap toss, the school colors, a road ahead, "Class of" year | Triumphant, inspiring |
| Baby shower, baby announcement, gender reveal | Soft pastels, a stork or crib, a balloon or confetti color reveal at the payoff | Lullaby-soft or sweet and bouncy |
| Retirement, promotion, work anniversary | A career's arc in symbols, an office turning into a beach, a team toast | Warm, proud, upbeat |
| Farewell, welcome, onboarding | A suitcase and a map, a door opening, a desk ready with a name card | Upbeat, friendly |
| Christmas, Hanukkah, New Year | Snow, lights, a menorah glow, fireworks over a skyline, a midnight countdown | Festive bells, warm winter orchestral, sparkling celebratory |
| Lunar New Year, Diwali, Eid | Lanterns and red-gold envelopes; diyas, rangoli, and fireworks; a crescent moon, lanterns, and a shared table. Represent each tradition respectfully and accurately, without mixing symbols from different holidays | Festive and respectful, with instrumentation evoking the celebration |
| Valentine's, Mother's Day, Father's Day | A heartfelt everyday moment, flowers, a handwritten-note feel, a shared hobby | Tender acoustic, warm |
| Thanksgiving, thank-you | A harvest table, a gift handed over, a glowing thank-you note | Warm acoustic, gentle |
| Congratulations, team celebration | A trophy, a summit flag, a confetti burst, the team's achievement as the hero | Energetic, triumphant |
| Get well | A cozy blanket, tea, sunshine breaking through, a flower blooming | Gentle, hopeful |
| Sympathy, memorial tribute | Quiet nature imagery: a candle, light through trees, a sunrise, birds, a calm sea; never celebratory effects | Soft piano or strings, slow and spacious |

**Handle sympathy and memorials gently.** Recommend a calm, realistic or soft watercolor style, muted palette, slow camera, and quiet music; never confetti, comedy, bouncy cartoons, or a countdown hook. Use the exact name and any dates the user gives, and add nothing they did not provide. Never make a deceased person speak or act out a scene; a photo of them can appear as a framed photograph in the scene, or be gently brought to life only through [old-photo-revival](../old-photo-revival/SKILL.md) with its safeguards. When in doubt, ask one gentle question rather than guess.

Keep every occasion inclusive and respectful: no stereotypes about age, gender, culture, or religion, and no jokes about health, weight, or age unless the user wrote them.

## 3. Suggest a style and the music

Offer three styles that suit this occasion and audience, each with a vivid one-line description, mark one as recommended with a reason, and invite the user's own preference. Draw from:

| Style | Look | Strong for | Uses photos |
| --- | --- | --- | --- |
| Cinematic realistic | Photoreal scene with a beautiful light and lens: a cake glowing in a dark room, a beach at golden hour | Anniversaries, weddings, holidays, memorials | Optional: the user's photos as references, so the real people appear in the scene |
| Cartoon of you | The recipient and friends, family, or pets as stylized 3D toy, 2D, or clay characters in a celebration scene | Birthdays, farewells, team celebrations, kids | Yes: photos become characters |
| Animated calligraphy and typography | Ink, gold foil, neon, or chalk lettering writing itself, with flourishes, sparkles, or flowers blooming around it | Save-the-dates, invitations, greetings, thank-yous | No |
| Papercut pop-up card | Layered paper scene unfolding like a pop-up card, soft shadows, handmade charm | Holidays, baby news, thank-yous | Optional: characters from photos |
| Watercolor storybook | Soft washes, paper texture, gentle movement | Mother's and Father's Day, get well, sympathy, baby news | Optional |
| Claymation party | Handmade clay figures, miniature props, stop-motion charm | Kids' birthdays, funny greetings | Optional: clay versions of people or pets |
| Retro film | 8mm grain, warm faded color, light leaks, home-movie feel | Anniversaries, milestone birthdays, retirements | Optional |
| Festive light show | Fireworks, lanterns, string lights, sparkler trails, glowing bokeh | New Year, Diwali, Lunar New Year, Eid, Christmas | No |

Recommend by occasion and tone: a cartoon of the friends for a fun 30th, cinematic realistic for an anniversary, animated calligraphy for a save-the-date, papercut or watercolor for a baby announcement, a festive light show for Diwali, quiet cinematic or watercolor for a memorial.

**Music:** suggest one genre, mood, and tempo that fit the occasion and style, and offer one alternative ("warm acoustic guitar and soft claps, or a jazzy swing?"). The music is generated inside the video, together with matching sound effects (a candle whoosh, a cork pop, paper unfolding). It is original instrumental music by default; ask for no singing or lyrics unless the user wants them. Do not request a copyrighted song or an imitation of an artist; a traditional public-domain tune can be requested as a style, with the note that the model creates its own interpretation rather than an exact melody.

**Photos:** when the chosen style uses them, ask for one clear photo per person or pet, front-facing, well lit, with the face unobstructed. When `open_asset_library` is listed, open it in the same turn so the user can upload or pick them. A video with up to about four recognizable people works best; for a larger group, suggest featuring a few people and showing the rest as a cheering crowd, or a style without likenesses.

## 4. Plan the video and its words

Write the plan before any prompt:

- **Hook (first one to two seconds):** a striking opening tied to the occasion, such as candles igniting in the dark, an envelope sealing itself, or the couple's silhouettes at sunset. Never a slow fade from black or a greeting card title.
- **Middle:** two to four beats that build the feeling and use the personal details.
- **Payoff (last three to five seconds):** the message lands on a clear, uncluttered background, held long enough to read (about two seconds for the headline), with the music resolving.
- **Shot list:** each shot's time span, framing and camera move, action and endpoint, and sound, covering the whole duration.

**On-screen text.** HeyGen Video 1 can draw a short common phrase, but names, dates, and longer messages need help to come out exactly right. Choose one approach and say which in the approval message:

- **Lettering keyframe (default whenever names, dates, or the message must be exact):** make one image with `create_image` and `gpt-image-2.6` showing the payoff moment with the exact message rendered in it, styled for the occasion (gold script on a wedding card, chunky frosting letters on a cake, glowing lantern lettering for Diwali, chalk for a teacher's farewell). Verify every letter, then pass it to `reference_to_video` as the reference for the final shot, with the prompt quoting the text exactly.
- **Lettering in the scene, no keyframe:** only for a very short, common phrase such as "Happy Birthday" or "Congrats!" with no name. The model draws it; check the spelling in the result.
- **No text:** the music, imagery, and the message the user sends with the video carry it.

Keep the text short: a headline of about two to six words and at most one short second line. Confirm it in the approval message character for character, including capitalization, punctuation, and any non-Latin script.

## 5. Make keyframes with HeyGen Image

**HeyGen Image (`create_image`).** Use HeyGen's `create_image`, not the host's own image generator, with `model: "gpt-image-2.6"`, which renders exact lettering and detailed scenes well. Send `prompt`, a new UUID `idempotency_key` for every new generation, `num_images: 1`, and the `aspect_ratio` the keyframe needs. Supplied photos go in `reference_images` as `{"type": "asset_id", "asset_id": ...}` items (or `{"type": "url", "url": ...}` for a public https link); a non-empty list makes the request an edit or combination of those images. Follow the live callable schema's field names and casing, and never send both spellings. The call is synchronous and returns image URLs that expire in about a week; `get_image` with the returned id gives fresh links. If the outcome is unknown, retry once with the same `idempotency_key` and arguments. Each image is billed in HeyGen credits.

| The video needs | Keyframe | Video |
| --- | --- | --- |
| People or pets as characters | One 16:9 character sheet in the chosen style from their photos: each person or pet shown head to toe, front and three-quarter, recognizable by their hair, skin tone, glasses, facial hair, and signature features, in occasion-appropriate outfits, on a plain background, with no text | `reference_to_video` with the sheet |
| The real people in a realistic scene | No new image: the user's own photos | `reference_to_video` with the photos, at most nine images |
| An exact greeting, name, or date | One lettering keyframe in the video's shape: the payoff scene with the exact text rendered by `gpt-image-2.6`, its words quoted in the prompt with their font character, color, size, and placement | `reference_to_video` with the keyframe (plus any character sheet) |
| Text alone describes everything | None | `text_to_video` |

When a lettering keyframe and characters are both needed, make the character sheet first and pass it as a reference to the lettering keyframe, so the payoff shows the same characters.

Keep identities faithful: do not change a person's skin tone, age, body type, or features beyond the chosen stylization, and do not "beautify" anyone. Inspect each keyframe for likeness, part counts, outfits, and stray text, and read every word of its lettering against the approved text, letter by letter. If anything is wrong, regenerate once from the original inputs with one targeted correction that restates the exact text; if it is still wrong, show it, name the issue, and offer shorter text or the no-text approach.

**Attachments:** import each relevant attachment once with `import_asset_from_chat`, sending the representation the exposed adapter accepts: the absolute local path for `file: string`, or the host's actual `{file_id, download_url}` object for the object form (limit 200 MiB). Never fabricate a path, `file_id`, or URL, and never ask the user to reselect a file that imported. Keep the returned `asset_id`; `"processing"` is not proof of readiness. If an import fails with a resumable asset, resume it with the schema's resume field (`resume_asset_id` or `resumeAssetId`) instead of importing again. If no usable representation exists or an import fails, and `open_asset_library` is listed, open it once and ask the user to add the same files there; if no bridge exists, name the missing one precisely. Never pass a `/mnt/data/...`, `sandbox:`, or `file://` path to a HeyGen tool, and never treat an OpenAI file identifier as a HeyGen `asset_id`.

## 6. Approve once and generate

Show everything in one message: the occasion and recipient, the chosen style and music in one line each, any keyframes, a shot table (time, shot and camera, action, sound), the **exact on-screen text** and how it will appear, and one settings line such as "15s · 9:16 · 1080p · cartoon · music: upbeat funk · lettering keyframe." Ask the user to check the spelling of every name.

While preparing, call `get_current_user` once. When it shows the free plan or no remaining credits, add one plain sentence with the returned plan or allowance; state only what HeyGen returns, and never list plans or prices, promote an upgrade, or link to a pricing, checkout, or upgrade page.

End with one bold sentence right before the question, such as **"Approving this will generate 1 video clip (15 seconds) with HeyGen Video 1."** For a clip over 15 seconds, add that it is billed at HeyGen's long-video rate. Keyframes already made are not counted again. Then ask: **"Approve, or tell me what to change."** For a change request, revise only what was named and ask again; regenerate a keyframe only when what it shows or says changes.

Write one prompt under 16,000 characters in plain sections: occasion and feeling; reference roles; style specification; characters or people (with the invariants that keep them recognizable); setting; timed shots with camera, action, and endpoint; sound (music genre, tempo, instruments, effects, no vocals unless requested, a resolved ending); text; and exclusions. Give each reference its role: a character sheet "is a character reference sheet whose layout is not the video, never shown as panels, a collage, or a split screen"; a lettering keyframe "is the final shot: arrive at this composition and hold it for the last two to three seconds, showing the lettering 'Happy 30th, Maya!' exactly as written, with no letters added, removed, or changed"; supplied photos "show the real people, who must stay recognizable." Ask for no other text, captions, subtitles, or watermarks anywhere.

Call the chosen tool once with `model: "heygen-video-1"`, an explicit integer `duration` (never `"auto"`), `prompt_enhancement: "quality"` (or `"turbo"`; never `"disabled"` or `"ultraquality"` over 15 seconds), and the approved resolution and aspect ratio passed explicitly: 1080p at 9:16 or 16:9, 768p for 1:1. A `create_image` result's image URL works as a `{"type": "url", "url": ...}` reference. Use camelCase field names only when the callable schema uses them, and never invent fields for music, text, or transitions.

## 7. Show and deliver

Record the prompt, keyframes and their URLs, settings, and the returned `video_id`. Call `show_video` once with that ID immediately, including while pending; the player tracks progress, so do not poll to wait. If `show_video` is not listed, poll `get_model_video` about every 30 seconds and display the completed `video_url` when ready. Never create the video again to check progress.

Give the user a link to the video in HeyGen, made by appending the returned `video_id` to `https://app.heygen.com/videos/`, so they can open, download, and share it. If the lettering in the finished video is wrong, say so plainly and offer one regeneration on request, with the text shortened if needed. If generation fails or is cancelled, explain the returned reason and ask whether to try again; never retry automatically. If HeyGen refuses the clip because of the plan's allowance (HTTP 402, `quota_exceeded`, insufficient credit, or a message that the allowance is used up), say the video was not made, with only the limit and any renewal date HeyGen states.

Offer a short message to send with the video. For a revision, change the prompt or keyframe narrowly and regenerate on request; a new render may change other details. Keep a compact ledger of the approved plan, exact text, keyframes and generation ids, asset IDs, prompt, settings, and video ID. Never send, post, or message the recipient on the user's behalf.
