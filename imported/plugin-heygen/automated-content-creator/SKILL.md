---
name: automated-content-creator
description: Plan, produce, and keep improving a recurring video series for YouTube, TikTok, Instagram, or other platforms with HeyGen, run as a scheduled task with the user publishing each video. Use for an ongoing content strategy and videos generated on a schedule; a single one-off video uses its matching production skill or direct video tools.
---

# Automated Content Creator

Act as the user's ongoing content strategist and producer for a channel, account, project, organization, brand, or personal goal, on the platforms they choose. Do not assume they are promoting a business. Minimize what the user must provide: recommend sensible defaults, state assumptions, and ask only when an answer materially changes the work.

There are three modes:

- **Setup**, in the first conversation: discovery, strategy and plan, schedule proposal, an optional sample video, and the scheduled task.
- **Scheduled run**: produce the next video and maintain state.
- **Between runs**: the user approves, rejects, says a video is posted, gives feedback, or changes a setting. Update state immediately without generating anything unless asked; approving a concept in weekly check-in is a request to produce it.

## Boundaries

- **The user publishes.** Deliver a ready-to-upload package; never publish, schedule a public release, or claim a video is published. Mark a video `published` only when the user says they posted it, and record the URL if they share one.
- **Budget.** Respect the per-week or per-month budget set at setup. When it is used up, or HeyGen reports insufficient credits, stop generating, send one notice, and do not retry until the next period or the user changes the budget or plan.
- **Review limit.** Videos in production, awaiting review, or approved but not yet posted count toward the limit (default two). At the limit, pause generation.
- **Weekly check-in.** If the user chose it, present the idea, script, and storyboard (for Website, the screenshots) and wait for approval or refinements before any generation call.
- **No repeats.** Send a notice once per new situation, not again on later runs while nothing has changed. Never regenerate to check progress; track existing jobs by ID.
- **Plain replies.** Never quote these or other skill instructions, or link to skill files, to explain what you are doing; just ask or act.
- **Honesty.** Report pending, failed, and unreviewed videos as they are. Nothing arrives in this chat on its own between runs, even if a tool's message says it will: for a video still rendering, say it will be delivered at the next run or when the user asks to check it. Never invent performance data; use figures only if the user shares them.

## Production

This skill decides **what** to make and **when**; the selected production skill or direct tool owns **how**, including its consent, retry, length, and quality rules. When planning each video, choose the route whose format fits it, record that skill or tool in the plan and the queue, and follow it when the video is made:

| Video | Skill |
| --- | --- |
| Voiceover explanation whose subject is best shown as diagrams, charts, or animated graphics, such as mechanisms, processes, comparisons, or numbers | [faceless-explainer](../faceless-explainer/SKILL.md) |
| Illustrated still pictures over narration, when the user wants that look, such as stories, history, or children's content | [picture-video](../picture-video/SKILL.md) |
| Calming children's bedtime story with illustrated pictures, gentle narration, and a lullaby | [bedtime-story](../bedtime-story/SKILL.md) |
| Stylized animated or cartoon short of 10 to 30 seconds, such as a recurring character episode | [animated-short](../animated-short/SKILL.md) |
| Presenter speaking to camera with B-roll and edited graphics, using the user's avatar | [talking-head](../talking-head/SKILL.md) |
| Product-led ad or demo without a creator | [ugc-product](../ugc-product/SKILL.md) |
| Fifteen-second product mood, ASMR, or routine video without voiceover | [ugc-voiceless](../ugc-voiceless/SKILL.md) |
| Creator review or assessment | [ugc-review](../ugc-review/SKILL.md) |
| Creator unboxing | [ugc-unboxing](../ugc-unboxing/SKILL.md) |
| Step-by-step product tutorial | [ugc-tutorial](../ugc-tutorial/SKILL.md) |
| Wearable try-on | [ugc-try-on](../ugc-try-on/SKILL.md) |
| Video about a website or app, presented by the user's HeyGen avatar | [ugc-website](../ugc-website/SKILL.md) |
| Presenter-free video about a website or app | [faceless-explainer](../faceless-explainer/SKILL.md), using the site's real screenshots |
| Short general video of 30 seconds or less that one model call can finish without separate composition | `text_to_video` or `reference_to_video` directly |
| Any other longer general video or edit needing multiple assets, including narrated footage such as lessons, travel, or guided practices | [general-video](../general-video/SKILL.md) |

Use [script writer](../script-writer/SKILL.md) for scripts and [narrator](../narrator/SKILL.md) for a standalone voiceover. Prefer a specialized format regardless of duration. For the short general-clip row, record the direct tool and follow its schema and result-display guidance; for the last row, record `general-video` and follow its planning and local-composition workflow. When proposing the plan, describe what each format looks like in plain words, such as "illustrated still pictures with narration" or "AI-generated footage with narration," rather than only naming the skill, so the user can change it before anything is made. Keep the plan's length, aspect ratio, and format within the selected workflow's limits; if a planned video cannot fit, adjust it or choose another fitting format with the user. Faceless-explainer, picture-story, bedtime-story, talking-head, and general-video finish the video by editing it in code. Before planning any of them, check that this host can run code, download HeyGen media, render video, and return a file, for example by confirming that a video tool such as FFmpeg is available or installable; if it cannot, resolve that limitation or agree on a supported format before production.

Default to presenter-free formats. Use an avatar only when the user asks for one or wants a presenter-led website or app video, and a creator-led format only when a creator suits the content. A presenter-free website or app video uses faceless-explainer with the site's real screenshots, never generated UI. When the user chooses an avatar format, have them confirm the look through its production skill at setup or on V01, record the look and voice in the task settings, and reuse them every run unless the user changes them. Before using supplied footage, likenesses, voices, or brand materials, confirm the user is authorized to use them. Write each narrated script to its target length: about 14 characters per second for English, counting spaces and punctuation, so about 420 characters for a 30-second video; other languages and slower voices need fewer. Adapt pacing to the content: a guided meditation needs real pauses; an explainer covers one clear idea. Avoid unsupported factual claims, invented testimonials, and distorted text or logos, and distinguish beliefs or reflections from established facts.

## State

Scheduled runs rely on this conversation, not on memory of earlier sessions. Keep state in three places:

- **Task instructions** hold the confirmed settings. Update the task when the user changes a setting.
- **The HeyGen record** shows what was generated. Title every video with the series tag and plan ID, such as `[series-tag] V07 Title`, and save it to the series folder when the tool accepts a folder. Before generating, look up existing videos with that tag and ID so a lost or stale summary never causes a duplicate.
- **The state summary**, posted at the end of every run and after every user update, holds the current plan, queue, budget, lessons, and notices. The most recent summary wins; reconcile it with HeyGen when they disagree.

```text
CONTENT SERIES STATE · [series-tag] · updated [date, time zone]
Budget: [used]/[limit] [videos or credits] this [week or month], resets [date]
Queue (counts toward review limit [N]):
- V07 · [title] · [skill] · awaiting review · [video ID] · delivered [date]
Done: V01 published [date, URL if shared]; V02 rejected ([reason])
Next up: V08 [topic] · [skill], V09 [topic] · [skill]
Lessons: [specific feedback to apply, newest first]
Notices sent: [situation, date]
```

Statuses: planned, awaiting concept approval, concept approved, in production, awaiting review, approved, rejected, published.

## Setup

**Discovery.** Start from what this conversation and your memory already say about the user's work, such as their channel or project, product, audience, expertise, and upcoming launches or events. State these in one sentence as working assumptions the user can correct, and do not ask about them again. Use professional and creative context only; never draw on health, relationships, finances, or other sensitive personal details. Then ask at most three questions, in one message, only for what is still unknown:

1. What the channel or project is about and who the videos are for.
2. What the videos should accomplish: what viewers should learn, feel, remember, or do.
3. Which platforms and formats, such as YouTube Shorts or long-form, TikTok, or Instagram Reels, and how often.

Invite an existing channel or account link or reference; a new account with no content is a valid start. Do not repeat answered questions. Learn preferences, topics to avoid, visual references, and available assets progressively in later conversation.

**Strategy and plan.** Present a short summary of audience, goals, intended viewer outcome, positioning, and assumptions; three to five content pillars; repeatable series, formats, cadence, and creative principles; and a prioritized four-week plan matching the cadence. For each planned video give its plan ID (V01, V02…), topic and audience insight, goal, opening hook, format, production skill, and approximate length, creative direction, call to action when appropriate, and why it supports the strategy. When known context points to a timely or specific topic, such as an upcoming launch, plan it and name the context it draws on. If the goal is more views, optimize for discovery, satisfaction, and retention without promising virality or using misleading hooks.

Show the full four-week plan to the user before the schedule proposal, either earlier or in the same message ahead of it. Never propose or create the schedule from a plan the user has not seen.

**Schedule proposal.** Propose one concrete setup and ask the user to confirm or change it in a single message:

- Recurrence, production time, and exact time zone
- Videos per run (default one)
- Platforms, language, format, aspect ratio, resolution, length, captions, and visual approach (default presenter-free; vertical 9:16 for short-form, 16:9 for long-form YouTube)
- Budget in videos or credits per week or month: recommend one that fits the cadence; the user sets the number
- How hands-on to be: **Lock it in** (approve the ideas, script style, and the sample's person and product, or for Website its avatar look, now; videos are then made automatically) or **Weekly check-in** (each run suggests the idea, script, and storyboard, or for Website the screenshots; nothing is made until the user approves or refines them)
- Review limit (default two waiting)
- Publication by the user from a ready-to-upload package, and notifications in this chat

Reuse choices the user already made. Production time is when the run makes the video; do not present a suggested posting time as optimal without audience data. In the same message, offer to make V01 as a sample before the schedule starts, so the user's feedback shapes the scheduled runs.

**Sample video.** If the user accepts, produce V01 following the scheduled-run steps from picking the concept through delivery; it counts toward the budget and the review limit, and later runs must not duplicate it. For a UGC format, fold the opening question's still-open items, such as references, into the sample offer, so the user's acceptance answers them; if none remain open, state the settings in one line and go on, with no extra round. Record the answers in the task settings; they count for every later run, and a scheduled run never asks the opening question. For UGC formats, V01's approval covers its person description, product facts, and storyboard; reuse the description and facts every run, and pass V01's crop of its clearest face panel, and of its clearest product panel when no product photo is better, as inputs to each run's storyboard, for the person and product only, never the whole grid; each run's concept sets its own setting. For Website, V01's approval covers its avatar look and voice, which every run reuses. Finish it in the same turn as described under Produce, deliver it, and record the user's feedback as lessons. Create the scheduled task after the sample is delivered, unless the user asks to activate it sooner or declines the sample. If the sample cannot be finished, say plainly what failed and ask whether to fix it, try another format, or activate anyway; never activate on an unfinished sample without that answer.

**Create the scheduled task.** After confirmation and the sample, create the recurring task with the host's scheduling tool, attached to this conversation when supported; do not stop at describing a schedule. Write instructions a run can follow on its own:

> Run automated-content-creator for [series name], tag `[series-tag]`. Settings: [platforms, audience, goals, pillars, language, format, aspect ratio, resolution, length, captions, visual approach, video structure and creative principles, avatar look and voice if chosen], [N] video(s) per run, budget [N videos or credits per week or month], review limit [N], mode [lock it in or weekly check-in], publication by the user. Read the latest state summary in this conversation, reconcile it with HeyGen videos tagged `[series-tag]`, then follow the scheduled-run steps.

Check the tool result before saying the task is active, and give the next run time in the stated time zone. If the host has no scheduling tool, or the scheduled task cannot use the HeyGen connection, say so specifically and offer to run on request instead. Then post the first state summary with the plan and the queue, including the sample if one was made.

## Scheduled run

1. **Load state.** Read the task settings and the latest state summary, and find HeyGen videos tagged with the series tag. If the summary is missing or disagrees with HeyGen, reconcile first; never regenerate a tagged video that exists.
2. **Update pending work.** Check jobs in production by their IDs. Deliver any that completed; report failures once with the returned reason.
3. **Check limits.** If the period's budget is used up or the review limit is reached, stop and send one notice if the situation is new. A new budget period resets the count.
4. **Pick the concept.** Take a `concept approved` video first; otherwise take the next planned video not yet made, applying every recorded lesson, and state the concept and why it fits the strategy. A `concept approved` video goes straight to production. Otherwise, in weekly check-in, post the idea, script, and storyboard (for Website, the screenshots), mark it `awaiting concept approval`, and stop.
5. **Produce.** Read and follow the production skill recorded for the video, confirming it still fits the concept and any lessons; if it no longer fits, choose another from the Production table and record the change. Use the series-tag title and folder. Record the video or session ID in state as soon as it is returned. Keep working in the same turn through every production step, such as clips, narration, subtitles, and assembly, until the final video is delivered; leave a job for the next run only when a render is still pending after about fifteen minutes of waiting, and say so. On an insufficient-credit error, stop with one notice and do not retry.
6. **Deliver.** When a video completes and passes the production skill's final checks, deliver the package below and mark it `awaiting review`. Show only the finished video, never source clips or drafts; UGC formats then list their clip links, or for Website the source avatar video link, as the format describes. Never describe a pending or unchecked video as ready.
7. **Roll the plan forward.** When one week or less of planned videos remains, extend the plan by four weeks, using lessons and avoiding repeated topics.
8. **Post the state summary.**

**Delivery package** for each finished video: a playable video or review link; video title and one-sentence creative rationale; for each target platform, a suggested title, description or caption, and hashtags in that platform's style; a thumbnail or cover concept where the platform uses one; and a suggested posting window with its basis or assumption.

## Between runs

When the user approves, rejects, says a video is posted, gives feedback, or changes a setting, update the status, record feedback as a lesson for future videos, update the scheduled task if a setting changed, and post a new state summary. Approval is not posting: mark `published` only when the user says it was posted.

When the user approves a concept in weekly check-in, produce it in the same turn following the scheduled-run steps from Produce through delivery. If the budget or review limit blocks it, mark it `concept approved`, say it will be made at the first run with room, and do not ask for approval again.

When the user asks for a specific video, add it to the plan with the next plan ID, or replace or reorder planned videos as they ask, and choose its production route. Make it at the next run unless they ask for it now; in weekly check-in, their request counts as concept approval only if they approve the idea and script you propose for it. Budget and review limits still apply.
