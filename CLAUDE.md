# Rules for Claude in this repo

This is the Stash website: plain HTML, CSS and a little JavaScript. There is no build step. Cloudflare Pages publishes this folder exactly as it is. The Stash app lives in a separate repo and is not changed from here. More detail is in README.md.

## Never break these

1. **The website must never store itself on anyone's device.** No web app manifest, no service worker, no offline caching of any kind. When someone installs Stash, they install the app, and nothing from this website may come along. This is the most important rule.
2. **Keep these pieces working exactly as they do now:**
   - The script at the top of `index.html`. It sends signed-in people (the app's `stash_signed_in=1` cookie) straight to the app.
   - The forwarding script in `404.html`. It sends app links like `/v/<id>`, `/login` and `/signup` on to the app.
   - `flutter_service_worker.js`. It is a cleanup file that removes the OLD app's offline copy from this address. Keep its name and location. Never add caching or a "fetch" handler to it.
   - The `data-app-href` attributes on buttons. `site.js` turns them into links to the app.
3. **Don't change the design unless you are asked to.**
4. **Leave `img/test/` and the "Test images" section of `index.html` alone.** The ~22 MB of photos are there on purpose, to test that installing the app never brings the website along. They come out before launch, and only when the site owner asks.
5. **Don't touch anything outside this repo.**

## Good to know

- Everything in this repo is published on the website, this file included. Never commit passwords, keys or private notes.
- Cloudflare Pages rejects any single file over 25 MB. Big media (video, podcast audio) goes on YouTube, Vimeo, Cloudflare Stream or R2, not in this repo.
