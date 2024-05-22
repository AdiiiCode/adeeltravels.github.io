'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ddba97afb7b7d9e191e0e575a16f9536",
"assets/AssetManifest.bin.json": "678aba68b9c7fb0ba07e33d8292269c9",
"assets/AssetManifest.json": "e96b7c0d39be28e418fe9f3d0fea9288",
"assets/assets/images/abcd.jpg": "68e6733be06376e91dcb741d813e1c27",
"assets/assets/images/AbcdApp.jpg": "ea530d021d06c5a5329d52af5bcd0131",
"assets/assets/images/Babusar.jpg": "7d54bb0ea526f8c7d52f3234b442dca3",
"assets/assets/images/Ban.jpg": "e8739366de99f04b6868ccc4475f5cf0",
"assets/assets/images/Banjusa.jpg": "be1bd334c6c3864e9db2a28856b20282",
"assets/assets/images/BinQasim.jpg": "6d6c3bf6308ea8c4269b0aca6f69219b",
"assets/assets/images/ChitralP.jpeg": "4ba437c951da32dba1efd08adcdaa8d8",
"assets/assets/images/Devils.jpg": "5501f6db3047536b0d7b60f659f31ac8",
"assets/assets/images/dolmen.jpg": "768ba3e107e95f8e3491df290be2f5bb",
"assets/assets/images/download.jpeg": "fb2e1ab8301db81328ef69926751289f",
"assets/assets/images/FairyMeadows.jpeg": "dcbfe65c7d5b965b8bf5b1b6e323de67",
"assets/assets/images/Hawks.jpg": "04a510ef8c01a76027496b00afbff5ce",
"assets/assets/images/Hunnzaa.jpg": "db0c8ed8c61d16a354d2e7db36397caa",
"assets/assets/images/Hunza.jpeg": "b940da903c3aacc257fffc1da07ba0b5",
"assets/assets/images/Kumrat.jpeg": "43c87bc2bdfa1463572139cc31011bf2",
"assets/assets/images/Mohatta.jpg": "3f53a174fabb6c7f9b31a1fe3e4f42ff",
"assets/assets/images/MurreHills.jpeg": "54df87da6ab5614968c01a63bcd4b355",
"assets/assets/images/Mushk.jpeg": "9c0ed2c5fa64813ab520a2fb2941046d",
"assets/assets/images/profile.png": "055a91979264664a1ee12b9453610d82",
"assets/assets/images/Safari.jpg": "d7016648039401755c1dc946c6ee5208",
"assets/assets/images/SBPM.jpg": "c1bf33154c63a25cb53fc4efa2eb08d3",
"assets/assets/images/SkarduP.jpeg": "09f29acfff51ee523d47be0300ebe379",
"assets/assets/images/swatt.jpg": "bfbf05b0721c175d6c7e27bfbf87e8c2",
"assets/assets/images/Tolipeer.jpg": "981fb42e1c658e600d245cbf95b76a75",
"assets/assets/images/Warr.jpg": "428fb07d0be4081b5894f126156107f9",
"assets/assets/images/Welcome.png": "b78777b7147e32aaf61b1772bbbb789c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a9bf536dda56d3310eca1f0ecf8cc2a6",
"assets/NOTICES": "2b30ee1af9a4b176ffe942cc45575fb3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "b78777b7147e32aaf61b1772bbbb789c",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8359574c6931ec45e0a9183a8150ce3b",
"/": "8359574c6931ec45e0a9183a8150ce3b",
"main.dart.js": "23df2fae3b13fa12bbe3db909a5ea5e5",
"manifest.json": "b59797e791f5bcea8aecd4ccd4676ac3",
"version.json": "92fd7b0e32e44c665b956cd6556237bb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
