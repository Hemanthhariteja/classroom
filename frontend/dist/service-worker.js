/* PWA service worker for RuralConnect Classroom
   - Cache-first for lecture packages & slide images
   - Network-first for API, fallback to cached /classes/:id
   - Background sync for pendingQuizSubmissions
*/
const VERSION = 'v0.1.0';
const STATIC_CACHE = `static-${VERSION}`;
const RUNTIME_CACHE = `runtime-${VERSION}`;
const LECTURE_CACHE = `lecture-${VERSION}`;
const API_BASE = self.location.origin; // requests proxied relative to app origin
const LECTURE_URL_HINTS = [/\/slides\//, /\/lecture-packages\//, /\/images\/slides\//];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) =>
      cache.addAll([
        '/',
        '/index.html',
        '/manifest.json'
      ]).catch(() => {})
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter(k => ![STATIC_CACHE, RUNTIME_CACHE, LECTURE_CACHE].includes(k)).map(k => caches.delete(k)));
      await self.clients.claim();
    })()
  );
});

function isLectureAsset(url) {
  return LECTURE_URL_HINTS.some((re) => re.test(url));
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle GET
  if (request.method !== 'GET') return;

  // Cache-first for lecture packages & slide images
  if (isLectureAsset(url.pathname)) {
    event.respondWith(
      caches.open(LECTURE_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        if (cached) return cached;
        try {
          const res = await fetch(request);
          if (res.ok) cache.put(request, res.clone());
          return res;
        } catch (e) {
          return cached || new Response('Offline', { status: 503 });
        }
      })
    );
    return;
  }

  // Network-first for API calls, fallback to cached GET /classes/:id
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      (async () => {
        try {
          const net = await fetch(request);
          const cache = await caches.open(RUNTIME_CACHE);
          if (net.ok && request.method === 'GET') {
            cache.put(request, net.clone());
          }
          return net;
        } catch (e) {
          // Fallback for GET /classes/:id
          const cache = await caches.open(RUNTIME_CACHE);
          const cached = await cache.match(request);
          if (cached) return cached;
          return new Response(JSON.stringify({ status: 'error', message: 'offline' }), { headers: { 'Content-Type': 'application/json' }, status: 200 });
        }
      })()
    );
    return;
  }

  // Default: try cache, then network
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request).catch(() => cached || new Response('', { status: 504 })))
  );
});

// Background Sync for pending quiz submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-quiz-submissions') {
    event.waitUntil(flushPendingQuiz());
  }
});

async function flushPendingQuiz() {
  // Communicate to client to perform sync via app code (it owns IndexedDB schema)
  const allClients = await self.clients.matchAll({ includeUncontrolled: true });
  for (const client of allClients) {
    client.postMessage({ type: 'SYNC_QUIZ_REQUEST' });
  }
}

// Allow page to trigger SW updates fast
self.addEventListener('message', (event) => {
  const { type } = event.data || {};
  if (type === 'SW_SKIP_WAITING') {
    self.skipWaiting();
  }
});