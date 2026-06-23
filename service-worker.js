const CACHE_NAME = 'mu63-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './main.html',
  './master-dashboard.html',
  './ENR_Checklist.html',
  './manifest.json',
  './apple-touch-icon.png',
  './ENR/Endo/endocrine-dashboard.html',
  './ENR/Endo/Anatomy/dashboard.html',
  './ENR/Endo/Anatomy/Anatomy-L2.html',
  './ENR/Endo/Anatomy/Anatomy-L3.html',
  './ENR/Endo/Histology/dashboard.html',
  './ENR/Endo/Histology/Histo_L3.html',
  './ENR/Endo/Pathology/dashboard.html',
  './ENR/Endo/Pathology/Patho-L1.html',
  './ENR/Endo/Pathology/Patho-L2.html',
  './ENR/Endo/Pharmacology/Pharma_L1.html',
  './ENR/Endo/Physiology/dashboard.html',
  './ENR/Endo/Physiology/Physio-L1.html',
  './ENR/Endo/Physiology/Physio-L3.html',
  './ENR/Endo/Physiology/Physio-L5.html',
  './ENR/Endo/Physiology/Physio-L6.html',
  './ENR/Repro/repro-dashboard.html',
  './ENR/Repro/Bio-L1.html',
  './ENR/Repro/Anatomy/dashboard.html',
  './ENR/Repro/Anatomy/Anatomy-L3.html',
  './ENR/Repro/Anatomy/Anatomy-L5.html',
  './ENR/Repro/Anatomy/Anatomy-L6.html',
  './ENR/Repro/Anatomy/Anatomy-L7.html',
  './ENR/Repro/Histology/dashboard.html',
  './ENR/Repro/Histology/Histo_L1.html',
  './ENR/Repro/Histology/Histo_L2.html',
  './ENR/Repro/Histology/Histo_L4.html',
  './ENR/Repro/Microbiology/dashboard.html',
  './ENR/Repro/Microbiology/Micro-L1.html',
  './ENR/Repro/Microbiology/Micro-L2.html',
  './ENR/Repro/Microbiology/Micro-L3.html',
  './ENR/Repro/Parasitology/dashboard.html',
  './ENR/Repro/Parasitology/Para-L1.html',
  './ENR/Repro/Parasitology/Para-L2.html',
  './ENR/Repro/Pathology/dashboard.html',
  './ENR/Repro/Pathology/Patho-L1.html',
  './ENR/Repro/Pathology/Patho-L4.html',
  './ENR/Repro/Pathology/Patho-L5.html',
  './ENR/Repro/Pharmacology/dashboard.html',
  './ENR/Repro/Pharmacology/Pharma_L1.html',
  './ENR/Repro/Pharmacology/Pharma_L2.html',
  './ENR/Repro/Physiology/dashboard.html',
  './ENR/Repro/Physiology/Physio-L1.html',
  './ENR/Repro/Physiology/Physio-L2.html',
  './ENR/Repro/Physiology/Physio-L3.html',
  './ENR/Repro/Physiology/Physio-L4.html',
  './Research/dashboard.html',
  './Research/RBS_Checklist.html',
  './Research/OSPE-Dashboard.html',
  './Research/OSPE-MCQ.html',
  './Research/OSPE-Revision.html',
  './Research/Research_L1.html',
  './Research/Research_L2.html',
  './Research/Research_L3.html',
  './Research/Research_L4.html',
  './Research/Research_L5.html',
  './Research/Research_L6.html',
  './Research/Research_L7.html',
  './Research/Research_L8.html',
  './Research/Research_L9.html',
  './Research/Research_L10.html'
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
