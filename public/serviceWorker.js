const codeStore = "editorx-codes-cache-v2";
const assetsStore = "editorx-assets-cache-v3";

const assets = [
  "/",
  "/index.html",
  "/static/webfonts/fonts.css",
  "/static/images/logo-both.jpg",
  "/static/images/logo-dark.png"
];
const codes = [
  "/static/js/bundle.js",
  "/static/js/vendors~main.chunk.js",
  "/static/js/main.chunk.js",
  "/manifest.json",
];

const allCacheStores = [
  {
    name: codeStore,
    links: codes
  },
  {
    name: assetsStore,
    links: assets
  }
];

self.addEventListener("install", event => {
  event.waitUntil(Promise.all(
    allCacheStores.map(cacheStore => {
      return caches.open(cacheStore.name).then(cache => {
        return cache.addAll(cacheStore.links);
      })
    )
  ));
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
    .then(response => {
      if (!response) {
        throw Error;
      } else if (response.status !== 200 || response.type !== 'basic') {
        return response;
      }
      let responseToCache = response.clone();

      caches.open(assetsStore)
      .then(cache => {
        cache.put(event.request, responseToCache);
      });

      return response;
    })
    .catch(()=>{
      return caches.match(event.request);
    })
  );
});

self.addEventListener('activate', event => {
  let whitelist = [codeStore,assetsStore];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!whitelist.includes(cacheName)) return caches.delete(cacheName);
        })
      );
    })
  );
});