// Stash website — small page helpers. The signed-in redirect is NOT here:
// it runs inline at the top of index.html so it happens before anything draws.

(function () {
  var app = window.STASH_APP || 'https://app.stash.info';

  // Log in / Sign up / Open buttons go straight to the app:
  // <app>/login opens the app's login screen, <app>/signup its sign-up screen.
  var links = document.querySelectorAll('[data-app-href]');
  for (var i = 0; i < links.length; i++) {
    links[i].href = app + links[i].getAttribute('data-app-href');
  }

  // Someone added this WEBSITE to their home screen (or installed it as an
  // app from the browser menu). Point them at the real app instead.
  var standalone =
    (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
    window.navigator.standalone === true;
  if (standalone) document.documentElement.classList.add('is-standalone');

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
