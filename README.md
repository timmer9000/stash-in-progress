# Stash website

The public website for Stash: a plain static site (HTML, CSS and a little JavaScript). There is no build step, and Cloudflare Pages publishes this folder exactly as it is.

| Website (this repo) | The app (separate repo) |
|---|---|
| stash.info (production) | app.stash.info |
| retsyn.ai (staging) | app.retsyn.ai |
| retsyn.app (development) | app.retsyn.app |

## Preview it locally

```
python -m http.server 8090
```

Then open http://localhost:8090. Add `?home` to the address if you are signed in to the local dev app, or the page sends you to the app.

## The two rules

1. **The website must never store itself on people's devices.** Don't add a web app manifest, a service worker, or any offline caching. When people install Stash, they install the app from app.stash.info, and nothing from this site may ride along.
2. **Don't remove the pieces that connect the site to the app:**
   - **The script at the top of `index.html`.** The app sets a `stash_signed_in=1` cookie, and this script uses it to send signed-in people straight to the app.
   - **The forwarding script in `404.html`.** Every link Stash makes to an item looks like `stash.info/v/<id>`. This script forwards those links, plus `/login` and `/signup`, to the app.
   - **`flutter_service_worker.js`.** It clears out an old copy of the app that some browsers still hold for this address. Keep the file name and location exactly as they are.
   - **The `data-app-href` attributes on buttons.** `site.js` turns them into links to the app, for example `<app>/login` and `<app>/signup`.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page (coming soon) |
| `404.html` | "Page not found", plus forwarding of app links |
| `waitlist.html` | Ask for a signup code (posts to the invites API) |
| `contact.html` | Contact-us form, captcha gated with Cloudflare Turnstile (posts to the invites API). The site never shows an email address. |
| `site.css` / `site.js` | Shared styles and helpers |
| `_headers` | Cloudflare caching rules |
| `img/` | Images (the logo). |

Big media such as video or podcast audio should not go in this repo. Host it on YouTube, Vimeo, Cloudflare Stream or R2 and embed or link it. Cloudflare Pages rejects any single file over 25 MB.
