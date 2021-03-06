'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "251567d0dcfbf02aab06193006703537",
"index.html": "d434b89894d9e5e76eab8da226779933",
"/": "d434b89894d9e5e76eab8da226779933",
"main.dart.js": "44330697f43cf620467f43670a90f1d6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"style.css": "35a8ef9eb4d60b0f9f9ca294a809f28a",
"manifest.json": "4af86e3884732b13953c57fe6db09e47",
"assets/AssetManifest.json": "90edd28cd653a6f102478b6ef97de1a8",
"assets/NOTICES": "faebbac34c944bed123c0c215ac6d5cc",
"assets/FontManifest.json": "43c213c877fdbb951405b26bbde14724",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_google_places_web/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places_web/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_credit_card/icons/discover.png": "ea70c496dfa0169f6a3e59412472d6c1",
"assets/packages/flutter_credit_card/icons/visa.png": "9db6b8c16d9afbb27b29ec0596be128b",
"assets/packages/flutter_credit_card/icons/amex.png": "dad771da6513cec63005d2ef1271189f",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/map_style.txt": "3d43210a46424b224b8599359e3d75eb",
"assets/assets/cfg/configurations.json": "3aeeaf926bcc11e72afe97c53bcbee59",
"assets/assets/img/loading_trend.gif": "c384f9d8e6b08bd717ab2c2780408a4f",
"assets/assets/img/china.png": "00d7b6d94371a8a31bcfa9f64fd2b8b1",
"assets/assets/img/wallet.png": "fff6b43bb4043cec2d9fb52631d33db0",
"assets/assets/img/razorpay.png": "95a422973abee92e56cf101550a7f0f9",
"assets/assets/img/grabpay.png": "659ad07d2173792e2b2619ce2a64c533",
"assets/assets/img/my_marker.png": "b3d6188ebbd399b07457c8cd8207700e",
"assets/assets/img/paypal2.png": "fa5a91f938df57cc1e29865730d8a34f",
"assets/assets/img/brazil.png": "3fc8860c56a93364c00c45ea5c18aa73",
"assets/assets/img/restaurant_marker.png": "bde8d2b0c72c80a9f30f74456c9503da",
"assets/assets/img/visa.png": "dc180f4332981aa7aad5385b88e23f76",
"assets/assets/img/loading.gif": "3f899a790ab677acd5762723b7743334",
"assets/assets/img/gcash.png": "284fe4e978d736f5c8dd759438ab1307",
"assets/assets/img/icon1.png": "f9a3f6db4505209c3343afdd7994a34f",
"assets/assets/img/canada.png": "a4122561940e7324ca621f6f9d75050a",
"assets/assets/img/driver_pin.png": "fa0603727fd629619d85b0b01d21ddcd",
"assets/assets/img/germany.png": "cc23f204eaadf5d54d2e131228fec9c0",
"assets/assets/img/logo.png": "5a1a816037f5f04ec7de7924849239a6",
"assets/assets/img/united-arab-emirates.png": "0fd33949c93f53bf0c187a8563ac0f85",
"assets/assets/img/pay_pickup.png": "83211f71556036ba32de5bbf983ce93e",
"assets/assets/img/spain.png": "fed7d0ce876bc8161c3b8658475c425f",
"assets/assets/img/apple_pay.png": "df9f08e443f1aa25c713177a1f3a3b36",
"assets/assets/img/loading_card.gif": "223b6df3c3bc3ac611e2bc29b00166a5",
"assets/assets/img/france.png": "78e9f99bc3c993c9c83615d0f3d028c4",
"assets/assets/img/italy.png": "cc79b1867397b8aec17dccce31e6fbef",
"assets/assets/img/cash.png": "9349ca548e2ae942cdaf08e023706d7a",
"assets/assets/img/visacard.png": "4383c95d3b7c43343b1a6a1cf8cd4b2b",
"assets/assets/img/onboard.png": "2d9af13f4a4c731a4a2f1ac0bd5b97f2",
"assets/assets/img/netherlands.png": "67a6d9209d262d0a9c35196d44f5c6eb",
"assets/assets/img/mastercard.png": "fec056c30fa325712d541018e91b20e4",
"assets/assets/img/paypal.png": "dc57a6fb1bc9c03ea0125e1c12dead9a",
"assets/assets/img/united-states-of-america.png": "e499f1fbaeb06cf2b9f6ddfd4de672b5",
"assets/assets/img/marker.png": "30413dde6df4663c202f6d57337d59d6",
"assets/assets/fonts/Celias-Bold.ttf": "2d3433fe81fcd0331f6badbe53119ae9",
"assets/assets/fonts/Celias-Thin.ttf": "e4746d28e80058aad7f46a1937fe9588",
"assets/assets/fonts/Celias-Light.ttf": "306170ad8f3ac663a708c48d1040a77b",
"assets/assets/fonts/Celias-Black.ttf": "0fbe0b27d91ba181c04771216597fc57",
"assets/assets/fonts/Celias-Medium.ttf": "9805f5fb5d9cdfc97d0260d221b4d93f",
"assets/assets/fonts/Celias-Hairline.ttf": "d1e8837a590cc6c868b10fa1ba433b01",
"assets/assets/fonts/Celias.ttf": "0f115ccbdf4b44eafe31cda77d1a8501"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
