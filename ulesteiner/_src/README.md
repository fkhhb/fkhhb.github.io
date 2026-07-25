# Ule & Steiner — build source

The site in `ulesteiner/` is generated. Do not hand-edit the HTML; edit here and rebuild.

- `build.js` — page templates, shared layout, and all page content (practice areas,
  team, offices, industries).
- `countries.json` — the Regional Experience data: 15 jurisdictions and their
  representative matters.

Rebuild from the repository root:

    node ulesteiner/_src/build.js

Content was scraped from the firm's draft site
(`azure-lobster-326481.hostingersite.com`) using the Apify Website Content Crawler.

## Imagery

`images.json` holds image URLs referenced from the firm's own draft site
(logo, 23 lawyer portraits, contact-page map). The generator wires them in
automatically; delete the file and the site simply builds without photos.

Every remote image carries an `onerror` fallback — a dead URL degrades to the
initials disc / text wordmark rather than a broken image.

Five page heroes are null: those pages on the source site are heading-and-text
only. The home-page `ule.png` is recorded under `_notes` but unused, as it is a
bottom image-box on the source rather than hero art.
