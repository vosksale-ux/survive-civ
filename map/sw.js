var CACHE_NAME = 'survive-map-v3';
var PRECACHE_URLS = [
    './',
    './map.js',
    './map.css',
    './geomag.js',
    './data/water.json',
    './data/dangers.json',
    './data/abandoned.json',
    './data/biomes.json',
    './data/evacuation.json',
    './data/population.json',
    './data/permafrost.json'
];

var TILE_CACHE = 'survive-tiles-v1';
var API_CACHE = 'survive-api-v1';
var MAX_TILE_AGE = 30 * 24 * 60 * 60 * 1000;
var MAX_API_AGE = 15 * 60 * 1000;

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(PRECACHE_URLS);
        }).then(function () {
            return self.skipWaiting();
        })
    );
});

self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches.keys().then(function (names) {
            return Promise.all(
                names.filter(function (n) {
                    return n !== CACHE_NAME && n !== TILE_CACHE && n !== API_CACHE;
                }).map(function (n) {
                    return caches.delete(n);
                })
            );
        }).then(function () {
            return self.clients.claim();
        })
    );
});

self.addEventListener('fetch', function (e) {
    var url = new URL(e.request.url);

    if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') {
        if (url.pathname.startsWith(new URL(self.registration.scope).pathname)) {
            e.respondWith(
                caches.open(CACHE_NAME).then(function (cache) {
                    return cache.match(e.request).then(function (cached) {
                        var fetchPromise = fetch(e.request).then(function (response) {
                            if (response.ok) cache.put(e.request, response.clone());
                            return response;
                        }).catch(function () { return cached; });
                        return cached || fetchPromise;
                    });
                })
            );
        }
        return;
    }

    if (isTileRequest(url)) {
        e.respondWith(cacheTile(e.request));
        return;
    }

    if (isApiRequest(url)) {
        e.respondWith(cacheApi(e.request));
        return;
    }

    if (isCdnRequest(url)) {
        e.respondWith(cacheStatic(e.request));
        return;
    }
});

function isTileRequest(url) {
    var hosts = ['tile.openstreetmap.org', 'tile.opentopomap.org',
        'a.tile-cyclosm.openstreetmap.fr', 'b.tile-cyclosm.openstreetmap.fr', 'c.tile-cyclosm.openstreetmap.fr',
        'server.arcgisonline.com', 'basemaps.cartocdn.com',
        'core-sat.maps.yandex.net', 'core-renderer-tiles.maps.yandex.net',
        'tile.openstreetmap.bzh',
        'a.tile.openstreetmap.fr', 'b.tile.openstreetmap.fr', 'c.tile.openstreetmap.fr',
        'mt0.google.com', 'mt1.google.com', 'mt2.google.com', 'mt3.google.com'];
    return hosts.indexOf(url.hostname) !== -1;
}

function isApiRequest(url) {
    var hosts = ['api.open-meteo.com', 'nominatim.openstreetmap.org', 'services.swpc.noaa.gov'];
    return hosts.indexOf(url.hostname) !== -1;
}

function isCdnRequest(url) {
    return url.hostname === 'unpkg.com';
}

function cacheTile(request) {
    return caches.open(TILE_CACHE).then(function (cache) {
        return cache.match(request).then(function (cached) {
            if (cached) {
                var dateHeader = cached.headers.get('sw-cache-time');
                if (dateHeader && (Date.now() - parseInt(dateHeader)) < MAX_TILE_AGE) {
                    return cached;
                }
            }
            return fetch(request).then(function (response) {
                if (response.ok) {
                    var headers = new Headers(response.headers);
                    headers.set('sw-cache-time', Date.now().toString());
                    var body = response.clone();
                    var newResponse = new Response(body.body, {
                        status: response.status,
                        statusText: response.statusText,
                        headers: headers
                    });
                    cache.put(request, newResponse);
                }
                return response;
            }).catch(function () {
                return cached || new Response('', { status: 503 });
            });
        });
    });
}

function cacheApi(request) {
    return caches.open(API_CACHE).then(function (cache) {
        return fetch(request).then(function (response) {
            if (response.ok) {
                var headers = new Headers(response.headers);
                headers.set('sw-cache-time', Date.now().toString());
                var newResponse = new Response(response.clone().body, {
                    status: response.status,
                    statusText: response.statusText,
                    headers: headers
                });
                cache.put(request, newResponse);
            }
            return response;
        }).catch(function () {
            return cache.match(request).then(function (cached) {
                if (cached) return cached;
                return new Response(JSON.stringify({ error: 'offline' }), {
                    headers: { 'Content-Type': 'application/json' }
                });
            });
        });
    });
}

function cacheStatic(request) {
    return caches.open(CACHE_NAME).then(function (cache) {
        return cache.match(request).then(function (cached) {
            if (cached) return cached;
            return fetch(request).then(function (response) {
                if (response.ok) cache.put(request, response.clone());
                return response;
            }).catch(function () {
                return new Response('', { status: 503 });
            });
        });
    });
}

self.addEventListener('message', function (e) {
    if (e.data && e.data.type === 'CLEAR_TILES') {
        caches.delete(TILE_CACHE);
    }
    if (e.data && e.data.type === 'STATUS') {
        caches.keys().then(function (names) {
            var total = 0;
            var promises = names.map(function (n) {
                return caches.open(n).then(function (c) { return c.keys().then(function (k) { total += k.length; }); });
            });
            Promise.all(promises).then(function () {
                e.ports[0].postMessage({ caches: names, entries: total });
            });
        });
    }
});
