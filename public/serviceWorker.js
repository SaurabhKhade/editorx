const cacheStore = "editorx-cache-v3.1"
const assets = [
  "/",
  "/index.html",
  "/static/webfonts/fonts.css",
  "/static/js/bundle.js",
  "/static/js/vendors~main.chunk.js",
  "/static/js/main.chunk.js",
  "/static/images/logo-both.jpg",
  "/static/images/logo-dark.png",
  "/manifest.json",
]

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheStore)
    .then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        return response;
      }

      return fetch(event.request)
      .then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        let responseToCache = response.clone();

        caches.open(cacheStore)
        .then(cache => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});

self.addEventListener('activate', event => {

  let cacheAllowlist = ['editorx-cache-v3.1'];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});