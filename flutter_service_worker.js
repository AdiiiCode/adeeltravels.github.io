'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "434bce4080b456fb1a4d9b1213ec22d7",
".git/config": "eabd8a704fffd9747bc4099e0ca2c139",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "797e0d50b9ce0f13a742aa8d037f94a0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a3f03abc4e666dbf8ec3d0fc0cd620b5",
".git/logs/refs/heads/main": "c31b43a3742c83a7e64d8e5001b9a90e",
".git/logs/refs/remotes/origin/main": "76c17a93b6cc12d2871be03e0dcf7fe6",
".git/objects/00/a3a0ed27424d8cd4d24bae958027dd018163f4": "50024baeaae75197ada9ce1867c09f9a",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/433d999510b2ae8c510d9944a766533953a72c": "04a2c754ba72a2935ba13953fd79cb6f",
".git/objects/14/d384928bda81b4532527e829d62d520112924a": "646253973ed21ef76087f93113f99be1",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1c/927a4f2f4ed48d50493ff0dd74f1cfdb6e44df": "4d4add3f0f2fd43f9a35096dc7329507",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/24/aaf92ce0a70437ea5af94a7cf382f0af908912": "62f6e22bd4a6eec94f79de03f4bcfd98",
".git/objects/24/db7fc12f17518d1fef5870e3028aecff23cb57": "19ff44d48e32cd6a9cd979989e4e9ada",
".git/objects/31/560bd4628bca72c3902686e0a2b0a1391ef0c2": "1cdb2376a27596d058a4a3a2537aa222",
".git/objects/37/ff8649699ea0bf23526464c36fae3f9cae1aab": "737f6af90317d99324061c72967df30a",
".git/objects/3a/41efe89057a4af06653b74f90471905a9dcd4d": "d79d1f732c61b9992e97108945edaa16",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/52426a8d98be765cd2aee219a85be43e57cb8b": "d682418e8c1d6131754fb562bb69a447",
".git/objects/58/f8a5a5403b20691c33e3058e3d888c2c480b5a": "5bed4f8797fe3ea4be2cf7654e7fc717",
".git/objects/5a/4089afa92f0a1df073c3f31e4d461f39a574af": "8653f23bd3a78bb81d236b52e5c72e4a",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5f/c5e3236010618adbcace9b3f9eccb79316f39b": "9787daa546fdc8a7fee258e69117bdf2",
".git/objects/60/1bf0590a6ba6c0c809d6e0dc84b97f82c26a57": "0b33da0ed8e5e7f09fe0a7ab9dd05b87",
".git/objects/63/a456465871f7993ea9b9d2dccebc686b768fd5": "1976680bf9d19d5ecc587f97c52e48c6",
".git/objects/6c/74d99644108d58502c1460f0bbad640f7dd152": "12615130ccb204b3b10d013b1be7a4e3",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/f0ea416e3d4eec3af424593341e88ac1b18b2a": "e7d06b0fdc2e79b532a5fd44b5de6b83",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/7b/25715aa1fdd1b035967af2134a2bc3d1bc1aae": "10c598b97dbb0a859a8865d9fa19c5e0",
".git/objects/7e/db643bd3a26b8e8abc0ca803680e1295596486": "d426a5b323dce4b44245588bd15677e4",
".git/objects/7f/8f3f1323e5c9f3fb1d24375d3aa33f92a4f683": "f0d7f191a55e4eef57ea1089daff4916",
".git/objects/80/48a822eb70aa86ffc3f170c2aa05debd70dbcd": "00f0ae8c06c01501a869a66834ee417c",
".git/objects/85/26eef7b24f2f74d4aa50638724f31c02d281df": "8cfcfa8e32fa39081ff820e6fd88b222",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/4c0ca56bdc32eb1ea6a0e6fbd351ce80701dd5": "8c86817fb5e49a92b70008bb6ab97f37",
".git/objects/99/fb184a95289d12893cb15068b7406780b5a951": "22c046961266dc06e9d1eea25ff826cb",
".git/objects/9a/67cff15771c93547a9de3e81d3d42d21e444fb": "d5a9d78c0141d6fc3ac0ebb938d7242e",
".git/objects/a5/f1bab75c67196851847c4a7d0dc768a45262cf": "e7108c6ddd5a0cefa99f89d21d1ed0db",
".git/objects/a7/7c48d7b976066b3420917344d8b84889ca523a": "a839f6deaa47ecbcc2fb799c9ca3f79a",
".git/objects/ac/ec14110939f139804435bc79c22ca5db118cd9": "eba2359e4d36fb446395eea7141c7537",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b3/bdaa73bcf702b5ee55763aa1a5770cd2138d44": "74d320083de056af52e6bb2184b32acb",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/1a954692c4cb9fbcb63c185c374b779bb37d88": "926bb18ce5a82cf5b2289b9b1aa05a5e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/2fee82d8053c6cc365dd5da3c7aabf50f99dd6": "429a719a75b63918a43ac2c3e2d1d745",
".git/objects/c0/189db7917c24ffe560aff3af5ebdb058ecf5a5": "4956a0d784b04c2232bf4dd85e6bc7c3",
".git/objects/c1/7ccc51891da2a7a5619659b1f9524038d5883b": "13b6a0e0bdf596606c5cb000f1175332",
".git/objects/c1/b057dbfe66be9096dc2c0eb05836d41202323f": "1617781640f043f5aa0488403c222997",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/96c4970e7ded485ffadec5865ecb304f7132eb": "46e0c730bdec60d4ea33b9ddb25ec194",
".git/objects/cb/21db404f46165ece8fe350b07015d2404d518f": "e3ac495688c231142e8f4a81c69a97c7",
".git/objects/d0/01186beb297da7d664c87aa6eb7af3cd5b1dcb": "4e1192f7d5cd5c767bd82d6cd49bd25f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/95a76906ec6b3554d0c91f7902dc2598b2a7b0": "9e218a2ddac36a4e57656875c087220b",
".git/objects/d5/3d8516f7d3b9e6d4cd3bb5ba79a7ec4861e9cc": "f9c8a972a22988807ac0c2a7ba22e91e",
".git/objects/d6/5664f757b3cf9030b9f3768068acfc6697e90c": "efc9f9855f23820ab96a5b6a1a8956de",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/a0bffae4edb5f66d39a0ff998aaf13ff51a647": "c241055ca3bdec82906ea50e6c3fb649",
".git/objects/df/040722c376ab1b06648dc772b774d5b70c148b": "61de71f9a6a2093953d685330007f94c",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/fe9b34ae80f44acbf99bfa8582862d62d7c0dc": "7ad1d0252cde0c3d0250d088f1ce64eb",
".git/objects/e5/43611e7f752268fcd77976520cc760c0fc6c8c": "f9b412cd3a9ac7fe5c23fa67b730756d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/47557220cccd05d2c8c55f3a21f1af3217b717": "0eda8b7cf9c82cb6214ba527e560b12c",
".git/objects/e9/cdefb40aeefacd18d1a043acd5913e7c9f2c0c": "b89f88a085f17e59e9d938f77afe2e79",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/7aa866317dcb79a099c5436d1a595191b263a0": "f47fdf5e44fb365e12ad5fbf028f9c22",
".git/objects/ee/93c7da945ee3c29fc30d4a6db3d39645f41e9e": "24f6ddef22623d8b765673d6a7cd3160",
".git/objects/f1/8ec73aab85016edbc45fc107b7031e024246a1": "288216fa19b03436ab21f979cc462288",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/9910c0f80a247572eb08cfdec082440f7a6bfb": "9fa0bcb81268550b36dc050379db4b99",
".git/objects/f3/94bfb7cafb508067d080ec5040c381785862ff": "5973f01e68eec5d800c0bd5547309576",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
".git/objects/ff/36873784415fe5c931a5464639ae4010b2d982": "09d9351715e3bd7516b1a005cf1e0001",
".git/refs/heads/main": "27b8f7c0c46b937d08ff8b94edcd8346",
".git/refs/remotes/origin/main": "27b8f7c0c46b937d08ff8b94edcd8346",
"assets/AssetManifest.bin": "ddba97afb7b7d9e191e0e575a16f9536",
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
"assets/images1.jpeg": "fb2e1ab8301db81328ef69926751289f",
"assets/images1.jpg": "125a9743ad7401f51245809c0d380627",
"assets/images2.jpeg": "dcbfe65c7d5b965b8bf5b1b6e323de67",
"assets/images2.jpg": "84914173cee98eb100420cea7a48a15e",
"assets/images3.jpeg": "b940da903c3aacc257fffc1da07ba0b5",
"assets/images3.jpg": "77d612c887f9ee066d39d29c74b4b697",
"assets/images4.jpeg": "43c87bc2bdfa1463572139cc31011bf2",
"assets/images4.jpg": "fd50f918fd81ddfbb05d005be8a35ad0",
"assets/images5.jpeg": "54df87da6ab5614968c01a63bcd4b355",
"assets/images6.jpeg": "09f29acfff51ee523d47be0300ebe379",
"assets/images7.jpeg": "4ba437c951da32dba1efd08adcdaa8d8",
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
"index.html": "9363d25d649af5dc5ae8f72d2455e02e",
"/": "9363d25d649af5dc5ae8f72d2455e02e",
"main.dart.js": "82d8f02a04ecdd38932463e5c40537bd",
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
