if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,a,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return n;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/commons.8a5e20eca6a304305f37.js",revision:"gb2ax-CHeLQl7mI_84AQJ"},{url:"/_next/static/chunks/fed10765073ae4b00bb21f2ecdff366b7bd8262c.47b0b3c016aabe4c6c12.js",revision:"gb2ax-CHeLQl7mI_84AQJ"},{url:"/_next/static/chunks/framework.4b81eedf2fcdb09bf521.js",revision:"gb2ax-CHeLQl7mI_84AQJ"},{url:"/_next/static/chunks/main-66c96f7fd6cf802b5524.js",revision:"gb2ax-CHeLQl7mI_84AQJ"},{url:"/_next/static/chunks/pages/404-300a7bd8365553ccc0ff.js",revision:"gb2ax-CHeLQl7mI_84AQJ"},{url:"/_next/static/chunks/pages/_app-a6f589d665824a03f899.js",revision:"gb2ax-CHeLQl7mI_84AQJ"},{url:"/_next/static/chunks/pages/_error-58053e57dbb939b31af8.js",revision:"gb2ax-CHeLQl7mI_84AQJ"},{url:"/_next/static/chunks/pages/index-6c594f71055883489d3b.js",revision:"gb2ax-CHeLQl7mI_84AQJ"},{url:"/_next/static/chunks/pages/judge-e3ca4790a79a70633fb6.js",revision:"gb2ax-CHeLQl7mI_84AQJ"},{url:"/_next/static/chunks/polyfills-144e5fa6fafab6397d9c.js",revision:"gb2ax-CHeLQl7mI_84AQJ"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"gb2ax-CHeLQl7mI_84AQJ"},{url:"/_next/static/css/dfaad0782cfc4b5768c7.css",revision:"gb2ax-CHeLQl7mI_84AQJ"},{url:"/_next/static/gb2ax-CHeLQl7mI_84AQJ/_buildManifest.js",revision:"gb2ax-CHeLQl7mI_84AQJ"},{url:"/_next/static/gb2ax-CHeLQl7mI_84AQJ/_ssgManifest.js",revision:"gb2ax-CHeLQl7mI_84AQJ"},{url:"/favicon.svg",revision:"d69b2430654107a9fad627cf00593809"},{url:"/icons/app-icon--maskable-120.png",revision:"cace399a684085546d824a338b8b7d66"},{url:"/icons/app-icon--maskable-128.png",revision:"36bafeafefefcb18d55cd291e74a3b8e"},{url:"/icons/app-icon--maskable-144.png",revision:"6585bc6449bbde9f1a3922fc26c33dc3"},{url:"/icons/app-icon--maskable-152.png",revision:"fe9a759231d669ba0b2c38a8fe74fe0e"},{url:"/icons/app-icon--maskable-180.png",revision:"b126da7330da2b0d9b362c0c0849f002"},{url:"/icons/app-icon--maskable-192.png",revision:"0989d7e1041178b14bab25a62f8fb1cc"},{url:"/icons/app-icon--maskable-384.png",revision:"78af896cd6f9660f6d1febc992a436fd"},{url:"/icons/app-icon--maskable-512.png",revision:"3ee84e301be45a10212f684f07622382"},{url:"/icons/app-icon--maskable-72.png",revision:"3d371935602d81c50a8959ce5611f3b8"},{url:"/icons/app-icon--maskable-96.png",revision:"29d9f0dd8d3b931b6901af79f6a450b3"},{url:"/icons/app-icon-120.png",revision:"d0d54d080aac15fe5115fe90e64d377d"},{url:"/icons/app-icon-128.png",revision:"d0106d09e8b7d5edfc1e872e4771ceea"},{url:"/icons/app-icon-144.png",revision:"606cdd4a7196286f38ff95962ac7b5bf"},{url:"/icons/app-icon-152.png",revision:"6188ebe2c4164e6ae3340cb5771a274c"},{url:"/icons/app-icon-180.png",revision:"65589e418e7093bb50cdd097555c26fd"},{url:"/icons/app-icon-192.png",revision:"4cb231558b38cbc27d92c56d74d8965f"},{url:"/icons/app-icon-384.png",revision:"ea7d0b52b56ffeda0b64207f7dd8052c"},{url:"/icons/app-icon-512.png",revision:"86466d78817c25995437292c009d0cc6"},{url:"/icons/app-icon-72.png",revision:"9886b48a7a92c2e94c9731d81357b775"},{url:"/icons/app-icon-96.png",revision:"896dfe63b54633de560e8319fcc18d8c"},{url:"/icons/judge.png",revision:"c83504b09cb7ab80896f3d3d468eabe9"},{url:"/manifest.json",revision:"aae170ae1da5187f69f23dbdaffbb3d3"},{url:"/ogp.png",revision:"1cafd951b5369e83e6ef86d82192f0ad"},{url:"/screenshots/index-dark.png",revision:"2afaca3769dd4c9056d79547bea20264"},{url:"/screenshots/index.png",revision:"a9a1e028186532efc494ea2f26e38ebf"},{url:"/screenshots/judge-dark.png",revision:"339e65e78c7e00994e4522ed8bf92e4b"},{url:"/screenshots/judge.png",revision:"648802f3f63469e1390d7c957c07e83b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
