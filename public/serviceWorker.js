// const cacheStore = "editorx-cache-v5"
const cacheStore = Date.now().toString();

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

// function notify(title,body) {
//   if (Notification.permission === 'granted') {
//     navigator.serviceWorker.getRegistration()
//     .then(reg => {
//       var options = {
//         body,
//         icon: '/static/icon/favicon-96x96.png',
//         badge: '/static/icon/badge.png',
//         vibrate: [100, 50, 100],
//         data: {
//           dateOfArrival: Date.now()
//         }
//       };
//       reg.showNotification(title, options);
//     })
//     .catch(e=>console.log(e));
//   }
// }


// self.addEventListener("install", event => {
//   event.waitUntil(
//     caches.open(cacheStore)
//     .then(cache => {
//       cache.addAll(assets)
//     })
//   )
// })

// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request)
//     .then(response => {
//       if (response) {
//         return response;
//       }

//       return fetch(event.request)
//       .then(response => {
//         if (!response || response.status !== 200 || response.type !== 'basic') {
//           return response;
//         }
//         let responseToCache = response.clone();

//         caches.open(cacheStore)
//         .then(cache => {
//           cache.put(event.request, responseToCache);
//         });

//         return response;
//       });
//     })
//   );
// });

// self.addEventListener('activate', event => {

//   let cacheAllowlist = [cacheStore];

//   event.waitUntil(
//     caches.keys().then(cacheNames => {
//       return Promise.all(
//         cacheNames.map(cacheName => {
//           if (cacheAllowlist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });

// self.addEventListener('updatefound', () => {
//   if (Notification.permission == 'granted') {
//     self.showNotification('EditorX update is available.\nplease close this browser tab or app window and re-open to update ...');
//   }
// });