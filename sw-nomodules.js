importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"
);

workbox.skipWaiting();
workbox.clientsClaim();

workbox.routing.registerRoute(
  new RegExp("https://api.hitriva.com"),
  workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: "images",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
);

// Cache the Google Fonts webfont files with a cache first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  workbox.strategies.cacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365
      })
    ]
  })
);

workbox.routing.registerNavigationRoute("/index.html");

workbox.precaching.precacheAndRoute([
  {
    "url": "public/javascript/nomodule/chunk-11465cea.js",
    "revision": "4fa1511e7be01b57255abf95b2f38183"
  },
  {
    "url": "public/javascript/nomodule/chunk-5fd56a68.js",
    "revision": "1b062151b84022dff20029ce97f0115d"
  },
  {
    "url": "public/javascript/nomodule/index.js",
    "revision": "3dd1f2bef2790157b0a113d95e1dd5d9"
  },
  {
    "url": "index.html",
    "revision": "55ace7ddefe30f1e2f8f6d3550e059d4"
  },
  {
    "url": "public/css/styles.css",
    "revision": "268b5f877fe6822d6b834bc0e4540a00"
  },
  {
    "url": "public/images/icons/icon-128x128.png",
    "revision": "223e205dbe176239e9266fbd6d6104d2"
  },
  {
    "url": "public/images/icons/icon-144x144.png",
    "revision": "68d64398108a5d4f944b91a5817f0545"
  },
  {
    "url": "public/images/icons/icon-152x152.png",
    "revision": "5dfd9a02a529c05c1a3682bf89c5e387"
  },
  {
    "url": "public/images/icons/icon-192x192.png",
    "revision": "38848ca7365e0e31d06fe2625ad3ac71"
  },
  {
    "url": "public/images/icons/icon-384x384.png",
    "revision": "59fda04075b23d9a5a12eee2e86306d5"
  },
  {
    "url": "public/images/icons/icon-512x512.png",
    "revision": "59fda04075b23d9a5a12eee2e86306d5"
  },
  {
    "url": "public/images/icons/icon-72x72.png",
    "revision": "03f68becc240d5e297fa25c8b3a5f938"
  },
  {
    "url": "public/images/icons/icon-96x96.png",
    "revision": "d66555165003453261166dd895e49909"
  },
  {
    "url": "public/stylesheets/app.css",
    "revision": "6e90aa21bdd21269dd06574126325e55"
  }
]);
