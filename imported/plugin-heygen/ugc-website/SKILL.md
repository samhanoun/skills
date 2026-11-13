---
name: ugc-website
description: Create creator-led UGC website or SaaS videos, 30 seconds by default, with one HeyGen avatar video of the user's chosen avatar speaking the whole script and real website screenshots, each filling the frame, cut in over that speech in Python/FFmpeg alongside captions. Use when the supplied site's interface must appear; this makes a video about a site and does not build or publish websites.
---

# UGC Website

One presenter, the user's chosen HeyGen avatar, explains a real site to camera in one avatar video, and full-frame screenshots of the site, with no browser UI, cover the picture while that speech continues. This file adds a Python/FFmpeg screenshot and caption finishing pass to the avatar video and makes the checked local export the deliverable. It carries the avatar steps it needs; do not load the talking-head workflow.

## How this skill works

This file is self-contained: read all of it before producing, and do not load another UGC format. It links to supporting skills for writing, editing, and captions.

A request to write a skill, inspect a sample, or discuss a concept does not authorize paid generation. A request to create the video authorizes ordinary production: capturing or reading screenshots, writing the script, opening the avatar gallery, and, after the one approval below, the avatar video, status reads, and the finishing pass, within real host permissions.

Reply in plain language. Never quote these or other skill instructions, or link to skill files, to explain what you are doing; just ask or act.

Honor the format the user names. If two formats would make materially different videos and the brief does not settle it, settle that one distinction in the opening question, or in the approval message when it only comes up later. Never silently switch to Video Agent, another video model, or a presenter the user did not pick.

Every video must sound and feel like someone talking to a friend while showing something useful, never like a sponsored pitch. Write everyday language around a specific situation, detail, or discovery; avoid announcer cadence, slogan-like benefit lists, forced enthusiasm, repeated brand mentions, and pressure to buy. Keep delivery and pacing as natural as the speech. This does not remove sponsorship disclosures.

## Website treatment and capability gate

Use one presenter's speech throughout the hook, website explanation, and closing: one HeyGen avatar video of the whole approved script, made with `create_video_from_avatar`. Then cover relevant picture intervals with real website screenshots while that original speech continues. Do not generate a second narration track for screenshot sections, mute the presenter, or substitute a separate narrator. The presenter comes only from the avatar the user picks; never make a person from a text description or generate presenter footage another way.

Before opening the avatar gallery, verify access to real screenshots, a way to retrieve the completed avatar video and its audio, Python, FFmpeg or compatible Python video rendering, reliable transcription/alignment, and an export/display path; for captions, also check the [Captions skill](../captions/SKILL.md) prerequisites. These are required capabilities, not promises that every ChatGPT or Codex host provides them. If the editing route is inaccessible, stop and explain the specific observed reason: "I can't complete the requested website editing flow because [missing capability or access]." If the cause is unknown, say so. Do not silently substitute separately narrated screenshots, generated UI, or an unedited avatar video; resolve a change of treatment with the user before paid work.

## Real website evidence

- **References:** the avatar look the user picks, and the real screenshots, which are the product evidence. Screenshots never pass through image or video generation. A physical item appears only when the brief requires one, and only as a real photo, supplied or official, shown as its own cutaway like a screenshot; it is never generated and never handed to the avatar.
- **Capture:** take actual page pixels through an authorized browser or screenshot capability before writing the script. Respect access controls; usable supplied screenshots do not require a live URL. Use a viewport capture that excludes browser UI, never a full-page capture: only the page's own content, with no address bar, tabs, toolbar, window frame, operating-system chrome, or scrollbars. When possible, capture each section at a mobile viewport with an exact 9:16 shape through device emulation, such as 360×640 CSS pixels at 3x pixel density (exactly 1080×1920), or at 2x where 3x is not available, so each screenshot fills the vertical frame; a small set of useful views beats a tour of every section. If a mobile capture is not possible, capture the desktop view at 2x pixel density and crop each screenshot in Python to its key region at exactly 9:16; less of the page shows, and that is fine. For a 16:9 video, capture desktop views at a 16:9 viewport, such as 1280×720 at 2x pixel density (1920×1080 at 1.5x for 1080p), so each screenshot fills that frame. Never pad, stretch, or add plain bands to a screenshot. Captions sit over the screenshot, so choose each view and crop with its key point clear of the caption band, about 66–82% of frame height, and out of the lower-right corner, where platform buttons sit; let the presenter's speech carry small details. Do not generate website pictures, repaint page content, fake a cursor or click, or pass screenshots to any generation tool to recreate the UI. On capture failure, explain the actual failure and offer supplied screenshots or an explicitly chosen change of treatment.
- **Supplied screenshots:** remove only bands of browser or operating-system UI that run along the image's edges, such as a toolbar, bookmark bar, menu bar, taskbar, or phone status bar, as one rectangle cut in Python at edges measured on the image; never cut into the page area. Look at the result: its first row must be the page's own top, with the site header intact. Page overlays such as cookie banners and chat widgets are page content: choose another screenshot rather than cropping them. Record the crop box in the evidence list. If the boundary is unclear, show the screenshot uncropped in the approval message and ask for a clean one there. Then crop each supplied screenshot that is not already the frame's exact shape, such as a desktop capture, to its key region at exactly 9:16 (16:9 for a 16:9 video) in Python, and record that crop box too; never pad or stretch it.
- **Evidence list:** for each selected screenshot, record its source and capture context, any browser-UI crop box and frame-shape crop box, visible fact, supported spoken claim, intended order, and reading time. Distinguish visible evidence, site marketing, and user-approved claims. A dashboard does not prove a completed action, a testimonial is not the presenter's experience, and a static screenshot does not establish a tested workflow. Do not invent pricing, integrations, savings, endorsements, or performed actions.
- **Files:** supplied screenshots, photos, and scripts are local editing inputs read through the host's real file access; they are never uploaded to HeyGen, because the avatar video needs none of them. Do not fabricate paths, file IDs, asset IDs, or URLs. If a supplied file cannot be read, name it and ask for it again.

## Production workflow

| Step | Result | User |
| --- | --- | --- |
| Start | Opening question answered, then screenshots captured or read | **Required:** answer, or say "go" for the defaults |
| Prepare | Timestamped script, selected screenshots | None |
| Pick the avatar | Avatar gallery opened; look and voice settled | **Required:** pick the look, or create an avatar |
| Approve | One message showing the look, script, screenshots, and settings line | **Required:** approve or ask for changes |
| Produce | One avatar video, screenshot cutaways, captions | None |
| Deliver | Final video once, then a link to the source avatar video | Reviews the result |

The user sees the avatar look, words, screenshots, and settings together and approves them once before the avatar video is made. Silence, elapsed time, or general delegation ("just make it", "don't ask me anything") settles defaults but never picks the avatar look and does not approve an unseen script; skip the approval only when the user names it, for example "skip the approval" (choosing "lock it in" when setting up an automated series names it for that series). Do not add other rounds: no separate script and screenshot approvals, and no permission requests for status reads or retrieval. If later feedback materially changes the approved script, look, or screenshots, revise it and get approval for that change before dependent generation. Respect a real host-enforced approval or access denial and describe its actual requirement.

### Ask the opening question

Before capturing screenshots or writing the script, send one opening question. It lists the length, aspect ratio, resolution, the site link and any screenshots to use, captions, and anything else the user wants, such as a tone, language, pages to feature, or script, each with the default used when the user does not give one. It also says in plain words what HeyGen will generate: one avatar video of the whole script, at any length, with the screenshots coming from the site rather than HeyGen. Choices the brief already settles show as settled and are not asked again. When it is unclear what kind of video is wanted, for example when no site or subject can be identified, ask that in the same message. Wait for the reply: "go" or "use the defaults" applies every default, and any choice the reply leaves open takes its default. A first message that already says to use the defaults or not to ask anything counts as that reply: state the settings in one line and go on. In an automated series, the setup choices and V01's answers count as the reply for every later video, and a scheduled run never asks. The defaults, which the approval message shows again and where the user can still change any of them:

- **Length:** 30 seconds whenever the user names no length. Ask about length only in the opening question. Honor any explicit length from 5 to 45 seconds, the hard maximum; for a longer request, say so in one sentence and use 45.
- **Aspect ratio:** 9:16 vertical, or 16:9 horizontal when the user chooses it. With 16:9, screenshots are captured as desktop views at 16:9, and the avatar video and export are 16:9.
- **Resolution:** 1080p, or 720p or 4K when the user chooses it. Pass the resulting value explicitly to `create_video_from_avatar` and export at it.
- **Presenter:** the HeyGen avatar look the user picks in the next step, recommending their own digital twin.
- **Voice:** the chosen avatar's own voice, or a voice the user names.
- **Captions:** on, through the [Captions skill](../captions/SKILL.md) in the finishing pass.

For example:

> Before I start, a few quick choices. Anything you skip uses the default:
>
> - **Length:** 30 seconds (5 to 45)
> - **Shape:** 9:16 vertical, or 16:9 horizontal (desktop views of the site)
> - **Resolution:** 1080p, or 720p; 4K if your avatar supports it
> - **References:** the site link, and any screenshots you want used? Otherwise I'll capture the site myself.
> - **Captions:** on
> - **Anything else:** a tone, language, pages to feature, or script you want
>
> HeyGen makes 1 avatar video of the whole script, whatever the length; the screenshots come from your site, not HeyGen. You'll pick the avatar after this.
>
> Reply "go" to use the defaults.

Preserve the user's requested tone, language, and script. Infer audience and purpose from the brief or site. Never ask the user to choose models, transport types, or rendering internals.

### Write the timestamped script

Write the whole spoken script: specific hook → name the site and problem → evidence-led explanation → useful payoff and supported next action. Give every screenshot a relevant spoken passage. The avatar speaks the entire script in one take, including the words heard during screenshot cutaways; the screenshots and captions are added afterwards.

**Runtime.** Budget the script to the length: about 14 characters per second for English, counting spaces and punctuation, so about 420 for the default 30 seconds and about 630 for 45; other languages and slower voices need fewer. A finished video within about 10 percent of the requested length meets the request unless the user asked for an exact length; the avatar video's actual timing sets the edit. Never speed up, slow down, or time-stretch the avatar video, loop or freeze it, or cut spoken words to hit a number. When the user asks for an exact length, say in the approval message how closely it can be met.

**Story.** Begin on a specific spoken hook, not a greeting; every later passage adds evidence, shows a real part of the site, or resolves a question, and only the ending gets a payoff. Write speech as one continuous conversation. Plan no replayed introductions, repeated claims, or filler between screenshots.

**Words.** A line mentions only what is on screen while it plays: the presenter, or the screenshot covering that passage. Would someone say this to a friend while showing it? Rewrite lines that sound like advertising copy or stage directions; make the first phrase specific to this site, drop repeated product names, and favor contractions and varied sentence lengths. Write spoken words only; the avatar speaks every word in the script, so never include directions such as "show the pricing page". Keep any CTA brief and tied to the user's real destination; never invent "link in bio" or an offer. Preserve an exact supplied script. Writing patterns are in [script writer](../script-writer/SKILL.md).

**Claims.** Ground speech in visible details and allowed claims. Use supplied testimonial-style lines, usage history, statistics, and comparisons as written; mark any the user did not supply "[confirm]" so the approval covers them. Never make medical or health claims, and never let delivery or visuals strengthen an approved claim.

### Pick the avatar

Settle the presenter after the script and screenshots are ready and before the approval message. The avatar and its look are separate choices, and the user always picks the exact look: never pick one yourself, even when only one is available or a tool recommends an ID. A look the user already picked in this conversation, or the look and voice recorded in a scheduled series' settings, is reused without opening the gallery again. When a series is being set up, say the chosen look and voice so they can be recorded in its settings.

When `prepare_avatar_video` is listed and applies, it may set up the presenter; follow its actual prerequisite instructions and keep the approved topic and script. It never authorizes switching the production to Video Agent or skipping the user's look choice. For an open choice, call `list_avatars` once to open the gallery, showing private avatars by default, or public ones when the user asks for presets; when the intended avatar is known, pass its group ID as the live schema allows to open its looks directly. Let the user browse and pick in the widget: it owns paging and opening looks, so never follow its cursor, prefetch pages, or call it again to list the library, and reopen it only when the user asks.

Recommend the user's private digital twin, in portrait for a 9:16 video or landscape for 16:9, and leave the pick to them. A text list of names or IDs, the first result, or a recommended pair is no substitute for the gallery. With several private avatars, never assume which one is the user. Never choose a public presenter or a different outfit because it is convenient. If the host has no widget, say so and show the previews from `list_avatar_groups` and `list_avatar_looks` for the user to pick from; listing them never permits picking one yourself.

The chosen look's ID is the `avatar_id` for the video; a group ID is not. Read the chosen look with `get_avatar_look` to check its orientation. Do not pass `engine`; the server chooses it. If the user picks a landscape look for a 9:16 video, or a portrait look for 16:9, the video is rendered to fill the frame, and the settings line says the look's edges will be cropped.

If the user has no usable avatar, guide them to create one first: use `open_avatar_creator` when it is listed and its prerequisites allow, or point them to HeyGen's avatar creation. Wait for creation, any required consent, and ready status, then open `list_avatars` for them to pick the new look, unless they already picked it while creating it. Never make the video with a placeholder while the avatar processes. If the user picks another existing HeyGen avatar or declines to create one, honor that and let them pick its look; never force creation or substitute a presenter.

The voice is the chosen avatar's own voice or one the user names. Keep an explicitly chosen voice. Never invent voice or look IDs, clone a voice without the required authorization, or treat a voice as a rendering setting.

### Ask for approval once

Show everything in one message:

1. The chosen avatar look, named as the gallery shows it, and the selected screenshots in script order, as they will appear after any crop; when the brief needs a physical item, its photo with its source page.
2. A script table: every passage with its target time span, what is on screen, and the exact spoken words, then the total runtime.

   | Time | Shot | Spoken words |
   | --- | --- | --- |
   | 0:00–0:03 | Presenter on camera | "I almost paid for three tools before I found this…" |
   | 0:03–0:07 | Screenshot 1: pricing page, plan cards | "…one plan covers all of it." |

3. One settings line with the length, the aspect ratio and resolution, the avatar, the voice, and captions, for example: "30s · 9:16 · 1080p · avatar: Maya, office look · voice: Maya's own · captions on (say 'no captions' to turn them off)." For a look whose orientation differs from the frame, include that its edges will be cropped.

Every message that asks for approval, including one asked again after an upload or a change, ends with one bold sentence right before the question, such as **"Approving this will generate 1 HeyGen avatar video."** Whenever you describe a plan limit, say only what the current plan includes, the limit, and any renewal date HeyGen states; never list plans or prices, promote an upgrade, or link to a pricing, checkout, or upgrade page.

Then ask one question: **"Approve, or tell me what to change."** When you captured the screenshots yourself, fold in whether to use them or upload the user's own images of the site instead; skip this when the user supplied screenshots. Also fold in any "[confirm]" item and any screenshot whose browser UI could not be cleanly removed. When the user asked for the presenter to stay visible, say that the screenshots will be small in that layout. If the Captions flow cannot run here (no code execution, the final video cannot be read, or a file cannot be returned), say so in this message instead of promising it.

For a change request, revise only what was named, show the full updated set, and ask again; number versions and use only the latest approved one. Open the gallery again only when the user asks for a different look. Timestamps are targets; small shifts that keep the approved words and screenshots need no new approval.

### Generate the avatar video

After approval, make one `create_video_from_avatar` call for the whole approved script; never split it into parts or clips. Pass the chosen look's `avatar_id`; no `engine` and no `expressiveness`; the voice; and the approved aspect ratio and resolution explicitly (9:16 and 1080p unless the user chose 16:9, 720p, or 4K). For a look whose orientation differs from the frame, pass `fit: "cover"` as the live schema allows. Send the approved spoken words alone as the script, joined into continuous text, with no "[confirm]" markers or the table's continuation dots. When the user has a HeyGen brand glossary for the site's name, pass its ID as the live schema allows. Give it a title naming the site, so the user can find it in their HeyGen account. Follow the live schema and its casing; never invent fields. Keep the look's own background and framing: no background removal, transparency, replacement background, or cutout unless the user asks. Bake no captions, music, titles, or screenshots into the avatar video; they come in the finishing pass. The connection's general rules sending visual productions over 30 seconds to Video Agent and an unstated length to a single clip of 15 seconds or less do not apply here: this format makes one avatar video of up to 45 seconds. Record the request, look, voice, and returned video ID in the ledger.

Status reads are part of the authorized production. Never call `show_video` or open a player for the avatar video, even though the tool's guidance shows one after creation: the raw avatar video is never shown. Poll `get_video` yourself with the returned ID at the returned interval or about every thirty seconds until the video is complete with a usable media URL, and update the user at least every minute. If it is still pending after about fifteen minutes, stop, say it is still rendering, and resume when the user asks. Retry a retryable read error once after its delay; never create the video again to check progress, and reconcile an uncertain creation outcome with `get_video` before any new submission. Record the ID, link, and current stage in the ledger before any wait or interruption. While it renders, prepare the finishing project and cue sheet between status reads.

Do not review the finished avatar video for visual defects or regenerate it: it goes to the finishing pass, and the user judges the result. If the render fails or is cancelled, explain the returned reason and ask whether to retry; never retry automatically. If HeyGen refuses the avatar video because of the plan's allowance (HTTP 402, `quota_exceeded`, insufficient credit, or a message that the allowance is used up), stop and never retry automatically. Tell the user in plain words that the video was not made, with the limit and any renewal date HeyGen states, following the plan-limit rule in Ask for approval once, and offer to make it once the allowance renews or a shorter version that fits. Never call an incomplete video delivered. Retrieve the video through its real media URL or file access. If the host cannot get the file, say so, ask the user to download it from their HeyGen account and upload it, and keep the project state; never claim local editing without the source file.

### One timed screenshot and caption edit

Load the completed avatar video into one video-editing project, preserving its audio; never show it before the finishing pass. Then:

1. Transcribe and align the avatar video's actual speech. Use reliable phrase timings for screenshot cues, and word alignment when captions need it. Keep ambiguous spans uncertain instead of silently inserting the planned words; never invent timestamps from script length or evenly divided words.
2. Build one cue sheet in final-video time: screenshot path and source, any crop boxes, supported spoken passage, and start and end. The avatar video runs at its original timing underneath every insert, and its speech is the only dialogue track. Time cues from where the matching words are actually spoken, not from the script's target times or a fixed slideshow cadence.
3. Use Python-driven FFmpeg or available Python compositing to cover the picture with the real screenshots, as cropped at capture, for those intervals. Each screenshot is already the frame's exact shape: scale it uniformly to fill the whole frame, with no padding, plain bands, or stretching. Use no blur, presenter footage, or invented graphics, except in the presenter-visible layout in step 4. A physical item's real photo is placed the same way, cropped in Python to the frame's shape without cutting off the item. Then reveal the presenter at the corresponding elapsed source time, keeping their background, framing, speed, and lip sync. Never restart the avatar video or audio after an insert, cut dialogue, add screenshot narration, or stretch the soundtrack to fit a reading hold.
4. Make evidence readable through the views and crops chosen at capture; never distort, repaint, or invent UI. Hold each view about 3–5 seconds, long enough to find and read its key point; if a view needs longer, choose a simpler view rather than holding a dense one longer. When the user explicitly asks for the presenter to stay visible, keep the avatar footage as the background, show each screenshot at the largest size that fits between the face and the caption band, never stretched, and keep captions in the same position.
5. Unless the user turned captions off, follow the [Captions skill](../captions/SKILL.md) within this same project, reusing the aligned transcript, final clock, dimensions, and screenshot schedule. Keep captions at one position for the whole video, centered at about 74% of frame height, within that skill's UGC range; during a cutaway they sit over the screenshot, in the band kept clear of its key UI at capture. Check caption contrast over each screenshot, adding the modest shadow or backing that skill allows where the page is bright or busy. Add no hook text or emphasis unless requested.

The finishing pass adds only screenshot layers, their timing, caption layers, and the export. Before display, run technical checks only: probe the export's duration, aspect ratio, resolution, and audio stream. The checked local export is the deliverable; keep the screenshots and provenance, cue sheet, and editing code in the ledger, and on follow-up rerun only the finishing pass for screenshot or caption changes.

### Deliver

Show the final video once, only after the finishing pass, through the host's media display with its actual file or link. Never pass the avatar video's ID, a local file, or an invented ID to `show_video`. Never show the raw avatar video or drafts, and do not show the screenshots again. If display fails, retry with the same file; never regenerate to fix a player error. Finish the whole production without stopping after the submission or asking the user to come back, apart from the fifteen-minute render wait. Give the final video's measured duration and any material limitation; never claim a frame-accurate runtime or a full inspection without evidence. If display is unavailable, keep the export and report the limitation.

Under the video, add one note linking the source avatar video, for example: "Made from this avatar video, saved in your HeyGen account: [link]." Link its page in the HeyGen app by appending the `video_id` that `create_video_from_avatar` returned to `https://app.heygen.com/videos/`, as in `https://app.heygen.com/videos/<video_id>`. Never link its `video_url`: it is a download link that expires.

Keep a production ledger of approvals, the chosen avatar look with its ID and voice, the approved script, the avatar video's request, ID, and link, the screenshots with their evidence list, the cue sheet, editing code, and the export path. Store no secrets, and never treat expiring links as permanent. On follow-up, reuse the approved script, look, and finished avatar video, and refresh an expired link with `get_video` rather than regenerating. A change to the spoken words needs that change approved, one new avatar video of the whole script, and the finishing pass again. Never publish to social accounts, create campaigns, or message third parties without separate explicit authorization and real publishing tools.
