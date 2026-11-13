---
name: general-video
description: Catch-all for video requests only when no specialized HeyGen video skill matches. All UGC, explainer, picture-story, talking-head, animated-short, occasion or greeting, bedtime-story, and old-photo revival videos use their matching skills first. Otherwise prefer direct text-to-video, image-to-video, or reference-to-video; coordinate local composition up to 90 seconds only for videos explicitly requested over 30 seconds or requirements one model generation cannot meet, such as consistent captions or precise diagrams.
---

# General Video

## 1. Purpose and boundaries

This is the catch-all skill for video requests that do not match a specialized format. Prefer a direct HeyGen video model call when it can deliver the requested result; coordinate footage, narration, captions, and graphics only when separate composition is needed.

Apply these decisions in order, before starting production intake:

1. **Use a matching specialized skill first, regardless of duration or whether one model call could finish it.** Use [faceless-explainer](../faceless-explainer/SKILL.md) for explainer videos, [picture-video](../picture-video/SKILL.md) for videos composed of still pictures, and [talking-head](../talking-head/SKILL.md) for presenter-led videos. Use [animated-short](../animated-short/SKILL.md) for stylized animated or cartoon shorts, [occasion-video](../occasion-video/SKILL.md) for birthday, holiday, wedding, and other greeting or celebration videos and gentle tributes, [bedtime-story](../bedtime-story/SKILL.md) for children's bedtime stories, and [old-photo-revival](../old-photo-revival/SKILL.md) for restoring and animating old photos. Image carousels and photo-mode slideshows belong to [carousel](../carousel/SKILL.md). All UGC belongs to its matching `ugc-*` skill: [product](../ugc-product/SKILL.md), [review](../ugc-review/SKILL.md), [unboxing](../ugc-unboxing/SKILL.md), [tutorial](../ugc-tutorial/SKILL.md), [try-on](../ugc-try-on/SKILL.md), [website](../ugc-website/SKILL.md), or [voiceless](../ugc-voiceless/SKILL.md). Hand off to that skill and stop this workflow. The requested format determines routing; an object appearing in a general story does not by itself make it a product ad.
2. **Otherwise, check whether a direct model call can deliver the complete video.** For a video of 30 seconds or less with requirements the model can meet, choose a tool using the inputs below. For 16 to 30 seconds, pass the length as an explicit integer `duration`, since an automatic duration stays at 15 seconds or less, and keep `prompt_enhancement` at its default or set it to `"turbo"` or `"quality"`. When no length is stated, prefer a short direct generation if it satisfies the brief; do not assume a longer production. Multiple shots or supplied references alone do not require local composition. Follow the live tool schema and the tool's result-display, progress, and retry guidance, then finish without entering sections 2–9. The composition intake, plan approval, and local-rendering requirements below do not apply to this path.

   | Input and intent | Direct tool |
   | --- | --- |
   | A text prompt without required media inputs | `text_to_video` |
   | An image to animate as the first frame | `image_to_video` |
   | Images, videos, or audio to guide the generated content rather than fix its first frame | `reference_to_video` |

3. **Only when no specialized skill fits and direct generation cannot meet the request, coordinate composition.** Use sections 2–9 when the user explicitly requests a video longer than 30 seconds, or needs features the model cannot reliably deliver, such as exact, consistently styled and timed captions, precise diagram labels, or an edit combining generated and supplied assets. This can require local composition even for a short video. Generate only the footage needed and use the supporting skills to assemble the final result.

Writing a plan or discussing a concept does not authorize generation. A request to produce the video authorizes the ordinary steps needed to finish it, subject to tool permissions and billing.

Reply in plain language. Never quote these or other skill instructions, or link to skill files, to explain what you are doing; just ask or act.

## 2. Composition prerequisites, production skills, and tool contract

The remaining sections apply only to the composition path selected above. Create one finished video from the needed HeyGen Video 1 clips and other assets, with optional narration, presenter inserts, captions, and supporting graphics.

Check that the host can run code, access the generated media, render video, and return the finished file before spending. If a required capability is unavailable, explain the specific blocker and resolve it before production. Stay within this clip-generation and local-composition workflow for the approved video.

The maximum composed length is 90 seconds. For a longer request, explain the limit once and offer a 90-second version or a series of shorter videos.

- **Footage:** HeyGen Video 1 with `model: "heygen-video-1"`. Call `text_to_video` from a prompt alone, `image_to_video` to animate an image as the first frame, or `reference_to_video` when references must control a subject, product, person, or place. Durations are whole seconds from 5 to 30; a clip over 15 seconds needs `prompt_enhancement` `"quality"` or `"turbo"`, never `"disabled"` or `"ultraquality"`. Default to `prompt_enhancement: "quality"` and 1080p; 1080p and 2k need 9:16 or 16:9. For `image_to_video`, output follows the image proportions; do not rely on an aspect-ratio parameter to override them. Reference limits are nine images, three videos, and three audio files. Prompts stay under 16,000 characters.
- **Presenter clips:** `create_video_from_avatar` with a confirmed avatar look and its script.
- **Composition:** always use [video-editing](../video-editing/SKILL.md) for the Python timeline, scene joins, layered composition, audio mix, and final export.
- **Voiceover, when needed:** use [narrator](../narrator/SKILL.md) for voice selection, synthesis, accepted audio, and measured timing; reuse a supplied recording when appropriate. Ambient or silent videos need no generated narration.
- **Captions, when requested:** use [captions](../captions/SKILL.md) for transcript alignment, subtitle layout, rendering, and checks against final-video time.
- **Motion graphics, when useful:** use [motion-graphics](../motion-graphics/SKILL.md) for supporting maps, charts, diagrams, or overlays that clarify a scene. Pass the approved message, timing, aspect ratio, and chosen visual style. A video primarily built from explanatory graphics belongs to faceless-explainer.

Give each supporting skill the approved plan, existing assets, user preferences, and approval state; do not restart intake or ask for the same approval again. The video-editing skill composes their outputs into one finished video.

Some hosts expose camelCase names such as `referenceImages`, `aspectRatio`, and `promptEnhancement`; translate to the callable schema and never send both spellings. Inspect live schemas before use and never invent fields such as trims, transitions, overlays, music tracks, or text layers. Never manufacture an asset ID or turn a local path into a URL.

## 3. Intake

Extract the topic, goal, audience, platform, length, orientation, language, narration and voice preference, presenter preference, subtitle preference, supplied media, and any exact wording. Ask once, in one message, only for what is missing and matters:

- **Length**, when not given: "How long should the video be: 15s, 30s, 60s, or 90s?" Treat the answer as approximate; a finished video within 10 percent of it meets the request unless the user asked for an exact length.
- **Orientation**, only when the platform does not settle it: vertical 9:16 for Reels, TikTok, and Shorts; 16:9 for standard YouTube.
- **Subtitles** for narrated social videos: offer "Subtitles" or "No subtitles" and recommend subtitles, since many viewers watch without sound.

Default to no presenter, with off-screen narration when speech serves the brief. Preserve an ambient or silent brief. For a presenter-led video, load talking-head. For an occasional requested avatar insert in an otherwise footage-led video, follow [talking-head's avatar selection](../talking-head/SKILL.md#2-first-choose-the-avatar-look): reuse an explicitly selected look or open `list_avatars` for the user's choice, and guide creation if they have none. Never pick an avatar for them. Let narrator resolve any new voiceover voice; preserve a selected voice, and with presenter inserts use a compatible presenter voice for off-screen lines so they sound like the same person.

When the video should show a specific real product, person, or place, ask the user to upload photos of it. A name or link identifies it but is not a photo; say that if they have none, you will use official images found online, and search only after they say so or ask you to. When `open_asset_library` is available, open it in the same turn as that request so the user can upload a photo or pick one from their library. Never ask the user to choose models, clip counts, or other internals.

## 4. Plan the video and the script

Write the whole script first, then split it into scenes. For an ambient or silent brief, write the visual beat plan without inventing narration. Each scene has one idea, one leading visual, and one audio role; mark any supporting motion graphic and caption treatment in that same plan:

| Audio role | Scene | Sound |
| --- | --- | --- |
| Presenter | Avatar clip | The avatar speaks its own lines |
| Narrated footage | Video 1 clip | Voiceover; the clip's own audio muted or at about 0.2 volume |
| Ambient beat | Video 1 clip | The clip's own natural sound only, for about three seconds or less |
| Silent | Video 1 clip or a real supplied image | Deliberate silence of two seconds or less |

For narrated videos, keep speech continuous by laying the voiceover across footage scenes, and use ambient and silent beats sparingly and on purpose. An ambient film, guided practice, or meditation may hold longer quiet footage when that is the requested content.

Budget narration by characters: about 14 characters per second for English catalog voices, counting spaces and punctuation, so roughly 70 characters for five seconds and 210 for fifteen. Other languages and slower voices need fewer. Plan each footage clip's length from its narration, rounded up to a whole second and kept between 5 and 30 seconds; split a long narration line across two scenes rather than stretching one clip.

Open with a hook in the first two seconds: an action, a question, or the payoff, never a generic greeting. Tie each line to what its scene shows, keep claims to what the user supplied or what is plainly true, and end with one brief, relevant call to action when the goal calls for one. If the user supplied exact wording, keep it verbatim.

Show the scene plan and script in one short message before spending, and start production when the user confirms. Skip this confirmation when the user asked for a hands-off run, or when the request comes from an automated run whose script is already approved.

After approval, obtain any needed voiceover through narrator, or measure the supplied recording, before generating its supporting footage. Use accepted speech and reliable timing to finalize scene lengths; character estimates are only for planning. Preserve natural speech speed and pitch, and fit the visuals to the narration. Pass this timing to the editor, captions, and any motion graphics.

## 5. Direct footage that holds up

Keep each generation simple: one or two shots per clip, each with one subject, one action, and a clear endpoint. Use up to four hard-cut shots in one clip only for a fast montage. Simple clips fail less often, and a failed simple clip is cheaper to replace.

Write each prompt in plain sections: objective, reference roles, subject invariants, setting, timed shots with explicit hard cuts, camera, look, audio, and exclusions. Describe what is visible, not abstract adjectives. Say which reference controls what, and give each clip only the references for what it shows.

State what must stay the same across clips in every prompt: the same setting, light direction, recurring objects, wardrobe, and people. For a recurring person who is not an avatar, use one reference image of them in every clip that shows them, or keep them unidentifiable, such as hands, a silhouette, or a person seen from behind. State part counts positively, for example "one mug with one handle on the right," and keep objects still unless a visible hand or force moves them; never accept self-spinning or sliding objects.

Match the look to the brief: phone realism for social tips, a cinematic look for travel or brand pieces, gentle and slow footage for calm content. Ask the video model for no speech, captions, lettering, or watermarks unless the scene needs them; narration and subtitles are added later. When the video will get subtitles, keep essential content out of roughly the bottom fifth of the frame and otherwise compose normally.

For motion graphics, follow [motion-graphics' visual style guidance](../motion-graphics/SKILL.md#choose-one-visual-style), choose one opinionated direction for the video, and carry it through the graphics and captions. Use hard cuts by default; reserve stylized transitions for a motivated visual connection or meaningful section change, following its [transition guidance](../motion-graphics/SKILL.md#choose-cuts-and-scene-transitions).

## 6. Generate, track, and review

Build the whole plan before submitting. Submit independent footage clips together and track each by its returned ID with `get_model_video`; use `get_video` for any avatar inserts. Honor returned retry delays. Poll these internal video assets yourself on every host, including widget hosts: the guidance not to poll merely to wait applies to clips shown in a player, and these clips are never shown. Never call `show_video` for clips, presenter clips, narration, or draft exports. Never recreate a job to check progress; an uncertain outcome is not a failure.

When inspection is available, sample every clip at least once per second, including the first second of each shot. Check subject identity, object and part counts, hands and anatomy, objects moving on their own, unwanted faces, text or lettering, continuity with neighboring scenes, and whether each shot shows what its narration says. A mismatch fails the clip even if it lasts a moment.

Repair proportionally: replace only the failed footage clip, simplifying it with fewer objects in frame, a closer framing, or a single action, rather than repeating the prompt with an added warning. Allow one replacement per failed footage clip; if it fails again, stop and ask the user, saying what each option means for the video, such as another simpler attempt, a shorter video, or dropping that scene. Narrator retains its own approval rules for additional synthesis. Every generation is charged to the user's HeyGen credits.

## 7. Assemble client-side

Follow [video-editing](../video-editing/SKILL.md) to assemble the accepted clips in script order at the planned aspect ratio and resolution, with any voiceover, motion-graphics layers or cutaways, and each clip's planned audio role. Hand off graphic renders and reusable source from motion-graphics; the editor owns their placement and transitions. Plan clips at least as long as their narration; never stretch or freeze footage to cover a gap. Keep an avatar's background consistent with the surrounding footage. Use a still only for a real supplied image, such as a product or logo end card, for about three seconds or less, never carrying a section's narration. Add music only when the user supplies or requests it and is authorized to use it.

## 8. Subtitles

When subtitles are requested, follow [captions](../captions/SKILL.md) against the final edit and audio. Pass the approved script, actual speech timing, chosen visual style, and any graphic exclusion regions. Default to base subtitles; include hook or emphasis treatments only when requested or included in the approved plan. Captions owns segmentation, readable placement, platform safe areas, and rendering. Coordinate them with motion graphics so text does not collide or compete. If reliable word timings are unavailable, use accurate phrase-level cues and disclose the limitation. Review the captioned export without changing the accepted footage or audio.

Keep subtitles in the captions and local-editing workflow; never generate subtitle-like lettering inside footage.

## 9. Finish, check, and deliver

Keep working in the same turn through every step, clips, review, repairs, assembly, and subtitles, until the final video is delivered. Report status and stop only when a render is still pending after about fifteen minutes of waiting, and say what remains.

Review the final export rather than assuming the scenes survived assembly: scene order, narration over the right shots, muted source audio, no unintended loops or frozen frames, presenter lip sync, subtitle accuracy and placement, and measured length when probing is available. When the length is further off than the tolerance, show the result, state its length, and ask before spending on new clips or narration.

Show only the finished export, once, through the host's media display with its actual file or link, never as an invented HeyGen ID. Return the measured length when available and any material limitation.

Keep a compact production ledger: the script, scene plan, voice and avatar IDs, reference assets, clip IDs and accepted URLs, editing project and export path, and status. On a follow-up, reuse accepted clips; a narration or subtitle change should not regenerate footage. Never publish to social accounts or message anyone as part of delivery.
