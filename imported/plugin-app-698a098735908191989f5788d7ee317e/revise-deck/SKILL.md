---
name: revise-deck
description: Revise specific slides of an existing Gamma when the user asks to change "slide 3", a named slide, or the deck they just made.
---

When the user wants to change part of an existing Gamma:

1. Find the gamma. Use the generationId or URL from this conversation if there is one; otherwise use get_gammas or search_gammas.
2. Call get_gamma_outline to map the user's words to cards. "Slide N" counts only cards where hidden is false.
3. Call edit_gamma with the prompt and cardIds set to just the cards the user meant. For a card on a non-main page, pass that card's pageId as gammaIdOrUrl.
4. Poll get_edit_status a few seconds apart until it completes or fails, then share the summary and the gamma URL.

If the user wants to browse or pick slides themselves, call open_gamma_panel with the gamma's gammaIdOrUrl instead.
