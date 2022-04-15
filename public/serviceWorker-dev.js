const codeStore = "editorx-codes-cache-v3.2";
const assetsStore = "editorx-assets-cache-v3";
const staticStore = "editorx-static-cache-v3";

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
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// const codeStore = "editorx-codes-cache-v5";
// const assetsStore = "editorx-assets-cache-v5";

// const assets = [
//   "/",
//   "/index.html",
//   "/static/webfonts/fonts.css",
//   "/static/images/logo-both.jpg",
//   "/static/images/logo-dark.png",
// ];
// const codes = [
//   "/static/js/bundle.js",
//   "/static/js/vendors~main.chunk.js",
//   "/static/js/main.chunk.js",
//   "/manifest.json",
// ];

// const allCacheStores = [
//   {
//     name: codeStore,
//     links: codes,
//   },
//   {
//     name: assetsStore,
//     links: assets,
//   },
// ];

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     Promise.all(
//       allCacheStores.map((cacheStore) => {
//         return caches.open(cacheStore.name).then((cache) => {
//           return cache.addAll(cacheStore.links);
//         });
//       })
//     )
//   );
// });

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     fetch(event.request)
//       .then((response) => {
//         if (!response) {
//           throw Error;
//         } else if (response.status !== 200 || response.type !== "basic") {
//           return response;
//         } else {
//           let isCode = false;
//           for (let i of codes) {
//             if (event.request.url.includes(i)) {
//               isCode = true;
//               break;
//             }
//           }

//           let responseToCache = response.clone();
//           if(isCode) {
//             caches.open(codeStore).then((cache) => {
//               cache.put(event.request, responseToCache);
//             });
//           } else {
//             caches.open(assetsStore).then((cache) => {
//               cache.put(event.request, responseToCache);
//             });
//           }

//           return response;
//         }
//       })
//       .catch(() => {
//         return caches.match(event.request).then((response) => response);
//       })
//   );
// });

// self.addEventListener("activate", (event) => {
//   let whitelist = [codeStore, assetsStore];

//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (!whitelist.includes(cacheName)) return caches.delete(cacheName);
//         })
//       );
//     })
//   );
// });
