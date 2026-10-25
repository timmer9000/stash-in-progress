// Retires the Stash APP's old offline copy from this address. Do not rename,
// move or delete this file.
//
// Until October 2026 the Stash app itself lived here (stash.info, retsyn.app,
// retsyn.ai) and stored an offline copy of itself under this exact file name.
// That old copy answers every visit to this address with the old app, so
// anyone who ever used Stash here would keep seeing the old app instead of
// this website.
//
// Browsers check this file for updates when someone visits. When they find
// this version, it deletes the old app's saved files, removes itself and
// reloads the page, which leaves this website with NO offline copy at all.
//
// Never add caching or a "fetch" handler here. The website must never store
// itself on anyone's device.

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil((async function () {
    try {
      var keys = await caches.keys();
      await Promise.all(keys.map(function (k) { return caches.delete(k); }));
    } catch (e) { /* nothing saved — fine */ }
    await self.registration.unregister();
    var windows = await self.clients.matchAll({ type: 'window' });
    windows.forEach(function (w) {
      try { w.navigate(w.url); } catch (e) { /* tab already gone */ }
    });
  })());
});
