---
name: setup
description: Set up Gamma after install, or when the user asks to set up Gamma or change their Gamma defaults. Saves their default look and images, then opens the Gamma panel.
---

# Set up Gamma

If `gamma_settings_read` isn't available, skip the questions and go straight
to the last step. If `open_gamma_panel` isn't available either, just suggest a
first prompt.

Help the user pick defaults for the gammas they make in ChatGPT. Call
`gamma_settings_read` with `{}` to get the current settings and the theme and
folder names they can choose from.

Ask these one at a time, and skip any the user already answered:

1. "Do you want new gammas to use one of your themes by default?" Offer the
   custom (brand) themes first, if any, by name. "No" keeps "Gamma decides".
2. "What kind of images do you like: AI images, stock photos, icons and
   illustrations, or none?" Map the answer to the `images` choices.

Let the user skip setup or keep what they have. After they answer, call
`gamma_settings_update` with a `set` object holding only what changed, using
the exact names from `gamma_settings_read`. For example, the Acme theme with
stock photos is `{"set":{"theme":"Acme","images":"Stock photos"}}`. Tell them
they can change language, slide count and folder on Gamma's page in ChatGPT
settings. Confirm what was saved from the tool's returned values, and don't
claim it was saved if the tool fails.

Then call `open_gamma_panel` with `{}` so they land on their gammas, and
suggest a first prompt, such as making a deck from their notes. If they
installed Gamma in the middle of a task, go back to that task instead.
