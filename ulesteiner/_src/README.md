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
