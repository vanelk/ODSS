self.addEventListener('fetch', function (event) {
    event.respondWith(caches.match(event.request).then(res => {
        return res || fetch(event.request);
    }))
})