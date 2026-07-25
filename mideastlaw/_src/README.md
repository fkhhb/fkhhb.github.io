# MIDEAST | Law — imagery

`images.json` holds image URLs lifted from mideastlaw.de (portraits, hero photos,
logo). `inject-images.js` patches those references into the built HTML.

    node mideastlaw/_src/inject-images.js

The script is idempotent — re-running will not double-insert. Every remote image
carries an `onerror` handler, so if a URL ever dies the page falls back to the
initials avatar / plain header instead of showing a broken image.

`logo` is deliberately set to null: the source logo is a JPEG with a white matte,
which would show as a white box on the navy header.
