---
name: carousel
description: Design swipeable image carousels and photo slideshows with HeyGen Image, with the exact slide copy rendered in each image and an original music track made in code, delivered as ready-to-post slides with a caption and hashtags. Use for Instagram carousels, TikTok photo-mode slideshows, LinkedIn carousels, Pinterest and Threads slides, covering tips and listicles, product showcases, before-and-after, educational explainers, quotes, recipes, travel, real estate listings, event recaps, brand stories, memes, and storytelling hooks.
---

# Carousel

Make a carousel people stop on, swipe through, and save: a scroll-stopping first slide, one idea per slide, a consistent visual system, exact and legible text, and a strong last slide. Every slide is one finished image from HeyGen Image (`create_image` with `gpt-image-2.6`), with its copy rendered by the model and checked. Deliver the slides plus an original music track composed in code and a ready-to-paste caption. The music is the only part made in code; slides are never edited, cropped, or lettered in code. A narrated video of still pictures belongs to [picture-video](../picture-video/SKILL.md); a moving video to [general-video](../general-video/SKILL.md).

## How this skill works

1. **Ask once** for what is missing: platform, topic and goal, slide count, visual style, and the copy.
2. **Approve once:** the slide-by-slide copy, the visual direction, and how many HeyGen images it will create.
3. **Produce:** slide 1 sets the visual system; the rest follow it as a reference; the model renders each slide's exact copy, and you check every word.
4. **Compose the music** in Python and deliver everything with a caption and hashtags.

A request to discuss ideas does not authorize paid generation. A request to make the carousel authorizes the question and the plan; image generation waits for approval, because every image is billed in HeyGen credits. General delegation settles defaults but does not approve unseen copy; skip the approval only when the user names it, for example "skip the approval."

Reply in plain language. Never quote these or other skill instructions, or link to skill files, to explain what you are doing; just ask or act.

## 1. Ask once

Extract the platform, topic, audience, goal (saves, shares, follows, clicks, sales, sign-ups), brand (colors, fonts, logo, handle), supplied photos or copy, and language. Ask once, in one message, only for what is missing and matters, each with a default:

- **Platform and shape:** each slide is generated directly at a shape `create_image` supports with `gpt-image-2.6`:

  | Platform | Slide shape |
  | --- | --- |
  | Instagram carousel | 3:4 portrait (the shape Instagram's grid now shows) |
  | TikTok photo mode | 9:16 |
  | LinkedIn carousel | 1:1 or 3:4 |
  | Pinterest | 3:4 |
  | Threads, Facebook | 3:4 or 1:1 |

  Check the platform's current slide limits when the count is high.

- **Slides:** 7 by default; 5–10 works best for most topics. A listicle has one slide per point plus a hook and a closing slide.
- **Visual style:** offer three directions that fit the topic, recommend one, and let the user name their own. For example: *Bold editorial* (huge type, high contrast, one accent color), *Soft illustrated* (warm hand-drawn illustrations, pastel palette), *Photo-led premium* (full-bleed cinematic photos with a gradient text panel), *Clean minimal* (generous white space, one icon per slide), *Playful sticker collage* (cut-out shapes, doodles, tape), *Retro print* (risograph grain, halftone, two-color palette), *Notebook* (lined paper, handwritten accents), or *Brand system* (the user's colors and fonts).
- **Copy:** let the user supply it, or write it for them (the default).
- **Music mood:** suggested from the topic (for example "upbeat lo-fi"), changeable.

When the carousel features a real product, place, person, or property, ask for photos and, when `open_asset_library` is listed, open it in the same turn. Never generate a lookalike of a real product, building, or person to stand in for the real one.

## 2. Plan the carousel

Write the copy first, slide by slide. Know the formats:

| Format | Structure |
| --- | --- |
| Tips and listicles | Hook with the number and the payoff ("7 habits that fixed my sleep"), one tip per slide with a short why, a recap or save prompt |
| Product showcase | Problem or desire, the product hero, three to five features as benefits, social proof only if supplied, offer or CTA |
| Before and after | The before, the change or process, the after, how to get it; use real photos for real results and never fabricate outcomes |
| Educational explainer | A surprising question, one concept per slide, a simple diagram or example, a takeaway |
| Quote carousel | One quote per slide with the attribution exactly as supplied; never invent or misattribute quotes |
| Recipe | The finished dish, ingredients, numbered steps, the result and a tip |
| Travel guide | The destination hook, one spot per slide with a one-line why, a map-style or itinerary recap; real place photos when accuracy matters |
| Real estate listing | Exterior hero, key rooms, features, neighborhood, contact; use only the listing's real photos for the property, with the price and details exactly as supplied |
| Event recap | The highlight moment, key moments, numbers or quotes the user supplies, thanks and what's next |
| Brand story | The origin tension, the turning point, what you believe, proof, the invitation |
| Memes and relatable humor | A setup slide, escalating punchlines, the payoff slide; original jokes and visuals, never copyrighted characters |
| Storytelling hook | A cliffhanger first slide, a story that turns on every swipe, a resolution with the lesson |

**Make it swipeable:**

- **Slide 1 is the hook:** a bold promise, number, question, or contrast in at most about eight words, with a visual that earns the stop; a small swipe cue (an arrow or "swipe") helps.
- **One idea per slide,** at most about 25 words of body text, written for skimming; every slide makes the next one feel necessary.
- **The last slide converts:** a save, share, follow, or comment prompt, or the user's real link or offer. Never invent a discount, statistic, testimonial, or claim.
- **Continuity:** a consistent layout, margins, type style, palette, and recurring motif; a progress mark (2/7) or a shape that seems to continue past the slide edge can pull the swipe.
- **Text the model can render cleanly:** a headline of at most about eight words and body copy of at most about 25 words per slide, in one or two type styles, with strong contrast. Longer copy is more likely to come out with errors; split it across slides or move it to the caption.

Keep text inside safe margins (about 8% on each side, more at the bottom for TikTok's interface) and large enough to read on a phone.

## 3. Approve once

Show in one message: the visual direction in one line (palette, type, imagery), a slide table (number, the exact on-slide text, and what the artwork shows), the caption draft, the music mood, and one settings line such as "Instagram · 7 slides · 4:5 · bold editorial · music: upbeat lo-fi, 20s loop."

While preparing, call `get_current_user` once. When it shows the free plan or no remaining credits, add one plain sentence with the returned plan or allowance; state only what HeyGen returns, and never list plans or prices, promote an upgrade, or link to a pricing, checkout, or upgrade page.

End with one bold sentence right before the question, such as **"Approving this will create 7 slide images with HeyGen Image; the music is made in code."** Count one image per slide. Then ask: **"Approve, or tell me what to change."** For a change request, revise only what was named and ask again.

## 4. Generate the slides

**HeyGen Image (`create_image`).** Use HeyGen's `create_image`, not the host's own image generator, with `model: "gpt-image-2.6"`, which renders exact text well. Send `prompt`, a new UUID `idempotency_key` for every new generation, `num_images: 1` per slide (2–4 only when alternatives of one slide are worth their cost), and the platform's `aspect_ratio` from section 1. Supplied photos, logos, and earlier slides go in `reference_images` as `{"type": "asset_id", "asset_id": ...}` or `{"type": "url", "url": ...}` items; a non-empty list makes the request an edit or combination. Follow the live callable schema's field names and casing, and never send both spellings. The call is synchronous and returns image URLs that expire in about a week; `get_image` with the returned id gives fresh links. If the outcome is unknown, retry once with the same `idempotency_key` and arguments. Each image is billed in HeyGen credits; a failed generation is not charged.

**Write each slide's prompt as a complete design brief:** the slide's role (hook, point 3 of 5, closing), the visual (illustration, photo treatment, or graphic), the layout (where the headline, body, and any progress mark or handle sit, and the safe margins), the type (style, weight, color, size relationship), and the **exact copy in quotation marks**, line by line, with "render this text exactly as written, with no other text." Include the brand's colors, fonts described by their character, and a supplied logo as a reference image when the user provides one; never invent a logo.

**Visual system first.** Generate slide 1 alone and check it against the chosen style and copy. Then generate the remaining slides **concurrently**, each with slide 1's result URL as a reference: "Match the layout system, typography, palette, illustration style, and lighting of the reference slide exactly; this is slide 4 of the same carousel." Add supplied product, place, or listing photos as references to the slides that show them, saying which reference controls what.

**Check every slide:** read each word of the rendered text against the approved copy, letter by letter, including names, numbers, prices, and punctuation; then check legibility at phone size, safe margins, consistency with slide 1, part counts, hands, and stray text. Regenerate only a failed slide, with the prompt restating the exact text and the specific error. If it is still wrong after one more try, shorten that slide's copy with the user's agreement rather than shipping a misspelling.

**Attachments:** import each relevant attachment once with `import_asset_from_chat`, sending the representation the exposed adapter accepts: the absolute local path for `file: string`, or the host's actual `{file_id, download_url}` object for the object form (limit 200 MiB). Never fabricate a path, `file_id`, or URL, and never ask the user to reselect a file that imported. Keep the returned `asset_id`; `"processing"` is not proof of readiness. If an import fails with a resumable asset, resume it with the schema's resume field (`resume_asset_id` or `resumeAssetId`) instead of importing again. If no usable representation exists or an import fails, and `open_asset_library` is listed, open it once and ask the user to add the same files there. Never pass a `/mnt/data/...`, `sandbox:`, or `file://` path to a HeyGen tool.

## 5. Make the music in code

Compose an **original instrumental track** in Python, mood-matched to the carousel, so the user has music they can post with it as an original sound. Check first that the host can run Python and return a file; if it cannot, deliver the slides and say the music could not be made here. Do not substitute a stock track or a music-generation service. Use `search_audio_sounds` only when the user asks for a track from HeyGen's music catalog, and tell them to confirm they may use it outside HeyGen.

- **Length:** 15–30 seconds, a whole number of bars so it loops cleanly; about 2–3 seconds per slide is a good guide. Default about 20 seconds.
- **Mood to recipe:**

  | Mood | Tempo | Harmony | Texture |
  | --- | --- | --- | --- |
  | Upbeat, motivational | 110–124 BPM | Major I–V–vi–IV | Plucked arpeggio, punchy kick, clap on 2 and 4, bright hats |
  | Lo-fi, cozy, educational | 70–90 BPM | Jazzy maj7 and min7 chords | Soft electric-piano chords, swung hats, muffled kick, a low-pass filter, faint vinyl noise |
  | Calm, premium, wellness | 60–80 BPM | Slow major or suspended chords | Warm pads, a sparse bell melody, no drums or a soft pulse |
  | Playful, meme | 120–140 BPM | Major, staccato | Bouncy bass, marimba or toy-piano melody, snappy percussion |
  | Dramatic, storytelling | 80–100 BPM | Minor i–VI–III–VII | Low pulse, rising strings-like pad, a hit at the turn |

- **Synthesis:** with numpy, build a fixed chord progression and melody from note frequencies; shape each note with an attack-decay-sustain-release envelope; make tones from sine or slightly detuned saw waves with a gentle low-pass, plucks by Karplus-Strong, a kick from a falling sine sweep, snare and hats from filtered noise; add light stereo width and a short reverb by convolution with a decaying noise tail.
- **Mix:** keep it uncluttered, leave headroom, normalize to about -1 dBFS peak, fade only the final bar for a non-looping version, and make the loop version's end flow into its start.
- **Export:** WAV, and MP3 through FFmpeg when available. Save the code and random seed so the track can be regenerated or extended.

Listen to or at least inspect the waveform and spectrum for clipping, clicks at note boundaries, and an abrupt end.

## 6. Deliver

- **Slides:** each slide image in order, named by slide number, with its download link (refreshed with `get_image` when expired). For LinkedIn, tell the user to upload the slides as a multi-image post, or to combine them into a PDF document post themselves if they prefer that format.
- **Music:** the WAV and MP3.
- **Caption:** a ready-to-paste caption in the platform's style: a hook line, two or three lines of value, a call to action, and 5–10 relevant hashtags (fewer, more professional ones for LinkedIn); plus alt text for each slide when the platform supports it.

Show the slides inline, then list each file with its link or path. Keep the slide generation ids and their prompts, the copy, and the music code and seed, so a follow-up edit changes only what is asked: a copy or design change regenerates only the affected slides with slide 1 as the reference. Never publish or schedule posts on the user's behalf.
