self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  // Bisa caching file di sini
});

self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
});

self.addEventListener('fetch', event => {
  // Contoh cache-first strategy sederhana
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});