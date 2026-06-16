const CACHE_NAME = 'endocrine-cache-v2';
const ASSETS = [
  './',
  './index.html',
  './main.html',
  './manifest.json',
  './endocrine-dashboard.html',
  './ENR/Bio-L1.html',
  './ENR/Anatomy/dashboard.html',
  './ENR/Histology/dashboard.html',
  './ENR/Microbiology/dashboard.html',
  './ENR/Parasitology/dashboard.html',
  './ENR/Pathology/dashboard.html',
  './ENR/Physiology/dashboard.html',
  './ENR/Pharmacology/dashboard.html'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
