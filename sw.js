let chartInstance = null;
let currentFruitSelection = "";
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('suv-f-v1').then((cache) => cache.addAll(['index.html', 'manifest.json'])));
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});

