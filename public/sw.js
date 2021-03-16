var CACHE_STATIC_NAME = 'static-v0';
var CACHE_DYNAMIC_NAME = 'dynamic-v2';

self.addEventListener('install', function(event) {
    console.log('[Service Worker] Installing ...', event);
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME)
        .then(function(cache) {
            console.log('[Service Worker] Openned static cache for App Shell');
            cache.add('/');
            cache.add('/index.html');
            cache.add('/help/index.html');
            cache.add('/help/card/images');
            cache.add('/src/js/app.js');
            cache.add('/src/js/material.min.js');
            cache.add('/src/js/material.min.js.map');
            cache.add('/src/js/promise.js');
            //cache.add('/src/js/fetch.js');
            cache.add('/scr/css/app.css');
            cache.add('/src/css/feed.css');
            cache.add('/src/images/main-image.jpg');
            cache.add('https://fonts.googleapis.com/css?family=Roboto:400,700');
            cache.add('https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css');
            //cache.add('https://fonts.googleapis.com/icon?family=Material+Icon');
        }));
});

self.addEventListener('activate', function(event) {
    console.log('[Service Worker] Activating ...', event);
    event.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key != CACHE_STATIC_NAME && key != CACHE_DYNAMIC_NAME) {
                    console.log('[service worker] Remove old cache.', key);
                    return caches.delete(key);
                }
            }))
        })
    )
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request, [])
        .then(function(response) {
            if (response) {
                return response;
            } else {
                return fetch(event.request)
                    .then(function(res) {
                        return caches.open(CACHE_DYNAMIC_NAME)
                            .then(function(cache) {
                                cache.put(event.request.url, res.clone());
                                return res;
                            })
                    });
            }
        })
    );
});

/* beforeinstallprompt */