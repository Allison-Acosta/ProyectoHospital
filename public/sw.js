const CACHE_NAME = "pwa-cache-v2"; // Incrementa la versión para forzar la actualización
const urlsToCache = [
    "/",
    "/index.html",
    "/main.js",
    "/styles.css"
];

// Precaching de recursos principales
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Cache abierto y recursos precacheados");
            return cache.addAll(urlsToCache);
        })
    );
});

// Gestión del ciclo de vida: Eliminar caches antiguos
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log("Eliminando cache antigua:", cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    console.log("Service Worker activado y listo para controlar fetch events");
});

// Estrategias de almacenamiento en caché
self.addEventListener("fetch", (event) => {
    const url = new URL(event.request.url);

    // Estrategia CacheFirst para archivos estáticos
    if (url.pathname.endsWith(".css") || url.pathname.endsWith(".js") || url.pathname.endsWith(".png")) {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                return cachedResponse || fetch(event.request).then((networkResponse) => {
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, networkResponse.clone());
                    });
                    return networkResponse;
                });
            })
        );
    }

    // Estrategia NetworkFirst para datos dinámicos (API)
    else if (url.pathname.startsWith("/api")) {
        event.respondWith(
            fetch(event.request).then((networkResponse) => {
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, networkResponse.clone());
                });
                return networkResponse;
            }).catch(() => {
                return caches.match(event.request);
            })
        );
    }

    // Estrategia Stale-While-Revalidate para contenido mixto
    else {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                const fetchPromise = fetch(event.request).then((networkResponse) => {
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, networkResponse.clone());
                    });
                    return networkResponse;
                });
                return cachedResponse || fetchPromise;
            })
        );
    }
});

// Notificar al usuario cuando haya una nueva versión
self.addEventListener("message", (event) => {
    if (event.data === "skipWaiting") {
        self.skipWaiting();
        console.log("Nueva versión del Service Worker activada");
        // Notificar al usuario
        self.clients.matchAll().then((clients) => {
            clients.forEach((client) => {
                client.postMessage({ action: "newVersionAvailable" });
            });
        });
    }
});