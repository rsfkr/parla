/* ==========================================================================
   Parla — service worker
   Offline-first shell. Bump VERSION together with the ?v= query strings in
   index.html; scripts/validate-data.js checks that the two stay in sync.
   ========================================================================== */

const VERSION = "11";
const CACHE = `parla-v${VERSION}`;

const CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  `./css/styles.css?v=${VERSION}`,
  `./js/data-it.js?v=${VERSION}`,
  `./js/data-de.js?v=${VERSION}`,
  `./js/app.js?v=${VERSION}`,
  `./js/views.js?v=${VERSION}`,
  `./js/session.js?v=${VERSION}`,
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      // Warm the shell without failing the whole install on one flaky request.
      await Promise.allSettled(CORE.map((url) => cache.add(url)));
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)));
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  // Pages: network first, so a deploy lands immediately; cache when offline.
  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(request);
          const cache = await caches.open(CACHE);
          cache.put(request, fresh.clone());
          return fresh;
        } catch (err) {
          const cache = await caches.open(CACHE);
          return (await cache.match("./index.html")) || (await cache.match("./")) || Response.error();
        }
      })()
    );
    return;
  }

  // Same-origin assets: serve from cache, refresh in the background.
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      const hit = await cache.match(request);
      const network = fetch(request)
        .then((response) => {
          if (response && response.ok) cache.put(request, response.clone());
          return response;
        })
        .catch(() => null);
      return hit || (await network) || Response.error();
    })()
  );
});
