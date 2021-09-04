

self.addEventListener('fetch',(event) => {
  event.respondWith(
    caches.open('mysite-dynamic').then((cache) => {
      return fetch(event.request).then((response) => {
        cache.put(event.request, response.clone());
        return response;
      });
    })
  );
});