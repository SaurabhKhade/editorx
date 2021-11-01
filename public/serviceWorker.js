const codeStore = "editorx-codes-cache-v2.2";
const assetsStore = "editorx-assets-cache-v1";
const staticStore = "editorx-static-cache-v1";

const assets = [
  "/",
  "/index.html",
  "/static/images/logo-both.jpg",
  "/static/images/logo-dark.png",
];
const codes = ["main.18873b69.chunk.css", "main.89bf6f77.chunk.js"];
const statics = ["/static/webfonts/fonts.css"];

const allCacheStores = [
  {
    name: codeStore,
    links: codes,
  },
  {
    name: assetsStore,
    links: assets,
  },
  {
    name: staticStore,
    links: statics,
  },
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    Promise.all(
      allCacheStores.map((cacheStore) => {
        return caches.open(cacheStore.name).then((cache) => {
          return cache.addAll(cacheStore.links);
        });
      })
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }
        let responseToCache = response.clone();
        
        if (
          event.request.url.includes(".chunk.js") ||
          event.request.url.includes(".chunk.css")
        ) {
          caches.open(codeStore).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        } else if (
          event.request.url.includes("webfonts") ||
          event.request.url.includes(".js")
        ) {
          caches.open(staticStore).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        } else {
          caches.open(assetsStore).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }

        return response;
      });
    })
  );
});

self.addEventListener("activate", (event) => {
  let whitelist = [codeStore, assetsStore, staticStore];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!whitelist.includes(cacheName)) return caches.delete(cacheName);
        })
      );
    })
  );
});