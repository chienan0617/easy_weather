'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "bef31d99f4392f99a37b1c95ac88c077",
".git/config": "ca79549efb60a14ac6d46b1af8d046ab",
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
".git/index": "b9b08fe2086fafb65845fcfe58c584cb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "189aa864f0fe7223f13ab1510847d5dd",
".git/logs/refs/heads/main": "0ef13817061e756385c765c1b4103896",
".git/logs/refs/remotes/origin/main": "73b9ec1d460904896c9d2f6135c6ac63",
".git/objects/04/1638e2153278920a43fa97fb382a41802e6f60": "026e3c7c3e2ce4c4f169690b2d4bbf7d",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/09/67ef424bce6791893e9a57bb952f80fd536e93": "468eadae31baf8cd84e8ef7fc78d49ac",
".git/objects/09/e8bfcdab4dec51cf2b7c88385736d5819e7e30": "d9a523e4d15550ddf6c15d17f2b30b5d",
".git/objects/0f/03f08b3acc8adc41e779491d8c5f5c525531f0": "c0ed4d23f211a8e5aca983b73c1f0fd5",
".git/objects/0f/7a472a7e8eb95090375858ec5cd473eb80dd8f": "3b45e5fe9102b69abe834ecaa5efcb7a",
".git/objects/12/74905b28c3685c1b604cec482bc58bfd7edc08": "a2d949c98d3af72e876996dc30ab89d5",
".git/objects/18/3e34a592d2304bed40a2764ae69fe5bcb41c37": "e7088a4dea2485f397730c02fb80cc74",
".git/objects/18/47fd8145225921d6e3e6355b7b0f5598bf9052": "61b44cb6ef67c0a44efb28b7e22fed1c",
".git/objects/18/c92af20aa13e5483f325fdeb383090410a3a65": "0bcc1b96eb5e95e96872b660e70929e7",
".git/objects/21/80d575312557e02abaeb631d58df19deaed5e0": "90ddaee207580708b66a1c781cfdc714",
".git/objects/23/f4d4652b7c6dd2763572f9015242579fa53385": "d6ec283b23ad6de34ad865bf912074f3",
".git/objects/2a/fde7fa4a11656643e704575e2af0e155228fe4": "cd4b8c8b92212a75af0a2bc84ce30240",
".git/objects/31/61eae5aff5e629158bbf3926343cbcbecd56e5": "a329b45deccfee5def5bbb1ced5628d5",
".git/objects/35/d735d09986110b35a5283653e77e81372d05bd": "4dab6fcbba439208d46831f655cebb17",
".git/objects/37/9da3d890a8f8717b1761c1a64f7975bb99f02f": "a0fddb25bd15fb8022eb1733b8c081f5",
".git/objects/37/efdc8b22142d62859b30bfd32fad941313b6a1": "3e724662f28590bc7c213ee7c2f6fd15",
".git/objects/39/682d553a77b1f274594a000b4fe096b16d17d5": "6cb3cb8953732cf04439849559ef1d8e",
".git/objects/39/704f0d35e280055be729d9b55d5ecb10518400": "1e1eb12cc67aeda107ca494af4c04245",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3b/1b5f179655e3c7a1f9acd1fb4a03849372e635": "a8ce4a48499d1d5b3ed16d4e720adc1b",
".git/objects/3b/3c441ab732ca039d31b87789013f9e9e58fc67": "874e43e9da33b9cf57defda0f426cbef",
".git/objects/3c/f409fb78539cfc882c787aba9eccafb3fc9a01": "e811ee2be7088724a870ea29d21a9662",
".git/objects/3f/964cd31552cb5e572dc89ebfba33b68601f100": "c8a02c669dc2102913b4741e48e54ed1",
".git/objects/43/6664ec8853331c63a8043723c4467fc507bf34": "badf3ec531dc9ac3e4671eb937667194",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/52/60a7beaff3c712c05c031b1216e53b2ffd0cdb": "a2930a5b447649aa45bc86f8f46bbb6c",
".git/objects/52/c326f54a31cdc9f81a1a9d216b10f0ca4ef2fc": "d245df3faeea821276825cd3e0ce8fd4",
".git/objects/61/661c0a601990ed354a967a1f0cf08aec400be5": "f3c63422cec740ee004e410a7f2c3622",
".git/objects/62/5a14ad27d782eca0e76c4de87fb828f1913a6f": "e72df4510869e7adfd9741a20966ed84",
".git/objects/63/9d10328886ec9d1a43b9f36508554c0c7eae2a": "fca3ef814fe94032c35643a702eb7437",
".git/objects/66/fb9db64a6b7585ef17bcd777bdaa9d2a451c63": "e8a3be83a415032e7739dd729bc0a9eb",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6a/8a50f3e1b05953fa3e0f087efa5e860b64dd49": "62bbb8cc0f2d94975b07f2178760b106",
".git/objects/6b/400a3c541e15a06df7b67ba723b25d6c0105eb": "0e6d4672a36cd571fd04bafc51328d9f",
".git/objects/6b/5f8048becbeb284b4ced3c5bcd65d5e0a4017d": "99ffcfba6eb53cbb76228acb7013b26f",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/6f/7b7c0964053cde0768ee9da2b276480f244403": "ed9fa194b48d8b667db85a7d84a8dc7e",
".git/objects/74/02cbf36609afa0da170382b325eebd335848a7": "c2d54ae15d5db0110f93d2a14da24239",
".git/objects/77/e9b94376db4b4f5109d2ae642b546b2f1df68c": "a8503306d81353d87f59921b69f5b1da",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/82/15f81e1163af47817f14b12e84128e6324ef88": "961458773e7f83cef84db8e3e0ef82a6",
".git/objects/82/6eeecdeea5996767f2abff37eb826b2faffcf3": "d5631a588e238fcfe6c80d3efc0ebd12",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/87/8cb09a69695104c2129cd5c0f2daaaa2200fb9": "c770d78e49bbebbdbf39d682387f21fb",
".git/objects/88/e4b0888c2692cad3796ca7fa08217b71ea076f": "cc1e2714abd53b88f3d505549e07e98b",
".git/objects/8a/8611a5836243678f08e7b5081afee916be03b9": "6551043f49adab67a6b2923b0098ad6e",
".git/objects/8c/e9e3776beeda293474fc596d9c2c1841968ad6": "1abd25b63342e8c9c46c4917cb10afc5",
".git/objects/8c/f1e68020f8c3da0da593b587302e6385cf2ca5": "c502183fd03f948986fadd860c8c0d43",
".git/objects/8d/756fd2441c27f57cba2edae941ce56c2d384fb": "087adcfae63e4cc72804921852b693b2",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/92/f29d3224da6660d90a411b48701055c54d7229": "19a53f6402378a38ae7a45efe98762c1",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/98/7655b332e912baf4bf17fd9ee94ca47b85b6b7": "a4034295b740511d9011f73e51388dcd",
".git/objects/9a/017fb69f6de533eef9be8004ec80cab7b3687f": "524f50d1597754770492bde3e9c51e66",
".git/objects/9e/8d450fff011275b626e97163efa541fccf688f": "07e931825c6aed1417d147b9bc5e7a54",
".git/objects/a1/817e7a7d06623d906832dc8a3e61c80b511493": "2e3ed8a570b2396a2187a73e68dd8933",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b1/d0a5f4269417ee9479a2bc4541081c2f32a05a": "9944de18ecfd89b95fd0043ed5e8f331",
".git/objects/b1/f810f1784b228fca63ea0a1598b44564b2a3d0": "c13597aea8412050b01cbe8e80a374e5",
".git/objects/b4/1ef7c982bb6cef6c06175c87129cce8e46c1d9": "5383a4c22851bf7f9752091ef3f7820b",
".git/objects/b4/797693dc6bfba5d28050c537eb665d55c55f22": "7b57b18e075a1b28419ca3baaf9aeeb0",
".git/objects/b4/f7dce3ff5389fe15db44b89129d8d36a955a42": "a92d249cd312ba80c99a3b0f1b5097ad",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bc/726137f16cc3435637dc0683fd8ddbbd35bf41": "d68f59c3936fed6b99b9d23317e25397",
".git/objects/c3/cd2c5cbaaff1a67710e406a03b8be8719e0472": "07912fec642918005643a718ada667f1",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/bedf0a790e0c5a191d4794bf5a9dc94327b355": "793f1ee279c7cca56d917fb82b6e7e1b",
".git/objects/cb/cfece077313f659db6114115a48c0f0d290d45": "04bddeffaf3e9c724786ce5ebfb85ab0",
".git/objects/cb/e8d872898627a9074638047ac8b1fe2109552b": "91adaa6cae69c977315866c974019617",
".git/objects/cd/897ab0c34a1aa7ad5fbf4b703f2beb2031b6ee": "6abdead07d3175d1282be3f402aa57bd",
".git/objects/cd/edc91d95c2f16b11e840abdfaace94b3143536": "4796e17454bc137c6c6b630ecbba04d0",
".git/objects/d1/2f05bc5f5c0dc1e45e6c2757deb71917cb8371": "faafc1b65a6fe76fcfbf45bcab954fc6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/e11d134baf859164136319b99c30f25af633c7": "8ee0b26d6823cad03c81bf46bf81e0c5",
".git/objects/d7/5a555f99418f26924b897c03350cde9cfcbc15": "346b8ab4a050a90cb193435cbea642a1",
".git/objects/d7/9e5adb2fd5c3c6cdc63bf5d2c9481bf9bc0a93": "5c0ea921e51f7412d7e5b2b65bde4662",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/dd/57e3c106ff52a9fde5aa0cd542bc3ab7518aec": "9fd8a9c3f3032af68b905e71e7b2610c",
".git/objects/df/ce9a2edcff08e61d574b971587a4faf2c694e1": "f09831b763919ced019853e74dfab401",
".git/objects/e0/5b9673a5d90170512a8f338ae33bf36e335082": "14477d166f09f502ce153324d8717af3",
".git/objects/e1/0b886fdfe8bd029b3c936eb04e5cf58dcd4d4f": "64a8831356318c2df17d34b8dc266d87",
".git/objects/e2/2079f5a60e5748dfedf5c8fd17f3cd609e6470": "863694dd2478de30588bdaa0c4412e70",
".git/objects/e5/30cf836a1ff4cc7ccc7d293bdb609482881509": "8285fd7c864c1a842afb202d51fb45ba",
".git/objects/e9/2e0d3704e35f7b248ca680ec7fdd96eb212211": "4b6ad9edf08aa12bea2291e709beceee",
".git/objects/e9/8b1220ee9f5d00a181acd346e8a76d6e14e57c": "3ed12db6d8f5d2c59fd6873f49bbb36d",
".git/objects/ec/99ce3c6ad8642bcadc65de427c5fbbece64452": "91819cbdc62bb698383181ca801da6ce",
".git/objects/ed/3fb3b5c006fe1275b1df086f8218a1a9fd084d": "e6c102782407d7bce0da1a34472d3d2e",
".git/objects/ed/9f82c696871195b97ed3f6643234c4d50a6d72": "43fee8e32a85f4da0527f5782d2a6ca5",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f6/2dcf0e27504e1f7d989f8e6ec159d8ff07bb15": "4fdc95d3fafe0fd05fdd4b9565418759",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/main": "4bcf2455520d43e34b4e0542984a7d79",
".git/refs/remotes/origin/main": "4bcf2455520d43e34b4e0542984a7d79",
"assets/AssetManifest.bin": "8f0afd154cf02f669b2784bb5a49c609",
"assets/AssetManifest.bin.json": "4a6328127c2a899ea6c35eae41ad27c4",
"assets/assets/configuration/color.json": "40c689b3b66ffbb34f8c77fe35a0dd52",
"assets/assets/configuration/colors.json": "ad0d908159225e90dc1924b63c073f50",
"assets/assets/configuration/language/en.json": "8a80554c91d9fca8acb82f023de02f11",
"assets/assets/configuration/language/zh.json": "a23c3d641c6a66e043db4845f6987a2c",
"assets/assets/configuration/language.json": "561178a5945117a9dff9c4461501432e",
"assets/assets/configuration/register.json": "66b79315d45eb54aa6a1e6223a608232",
"assets/assets/configuration/system.json": "9c03a8545b0a5f9f4390304262a5ac2d",
"assets/assets/configuration/tutorial/en.json": "8a80554c91d9fca8acb82f023de02f11",
"assets/assets/configuration/tutorial/tutorial.json": "8a80554c91d9fca8acb82f023de02f11",
"assets/assets/configuration/tutorial/zh.json": "8a80554c91d9fca8acb82f023de02f11",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Bold.ttf": "52e5e29a7805a81bac01a170e45d103d",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Light.ttf": "9ef30f36fbe394633b7235332346f5b1",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Medium.ttf": "518133df6fcaf4237f97187e2ea1019e",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Regular.ttf": "778bb9a271006ab9d103287699611325",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-SemiBold.ttf": "b7bae4f584fc5d817de4178708946eb0",
"assets/assets/icon/icon.webp": "dca3c9b7f3c979528b2eddb9c4025afa",
"assets/assets/image/symbolize/error.svg": "8db75780056c369f3f221f5b0277c0c9",
"assets/FontManifest.json": "9f0e757b134b904e3fc90aa9b50f799b",
"assets/fonts/MaterialIcons-Regular.otf": "5834c185dbe70654837e20bdcf5dd0d5",
"assets/NOTICES": "aa9493489e3ca328230ab490aec664f6",
"assets/packages/flutter_osm_plugin/assets/default_pin.png": "7679c39b09843c8bbea9add45fb6dd87",
"assets/packages/flutter_osm_plugin/assets/dynamic-styles.yaml": "0ee8b2f249be023fb6cb4e55d5961959",
"assets/packages/flutter_osm_web/src/asset/map.html": "13ee6f89d57e00b2e6692ada7d673918",
"assets/packages/flutter_osm_web/src/asset/map.js": "63c8de9df82417c5905e2a8d5fd14115",
"assets/packages/flutter_osm_web/src/asset/osm_interop.js": "41641d2154632983f79b53602f1776da",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_arbitrary.frag": "165123cf809bb7cea0f60cdb8658f67a",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_filter.frag": "7a69a481c4b01af713dc9d1ba40463fa",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_final_render.frag": "77416b256a173eb8a39a26e00899bc1a",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_geometry_blended.frag": "884d38ba3a7ab0ab72a463611f229e53",
"assets/packages/routing_client_dart/src/assets/ar.json": "45e29bd513d54467b03fe5c10c85cc14",
"assets/packages/routing_client_dart/src/assets/de.json": "75f261f48361c6ad0f987d669dc279be",
"assets/packages/routing_client_dart/src/assets/en.json": "006f10a887beeb7207fc58db61426a4e",
"assets/packages/routing_client_dart/src/assets/es.json": "006019fa2630f52d73040764ad461fab",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "9ac8afa984d7f66784dcaf8011b66fd3",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "3ea0dc2a27cd1abc3659532da81bc6be",
"icons/Icon-192.png": "9ac8afa984d7f66784dcaf8011b66fd3",
"icons/Icon-512.png": "d17476be02b2491ccdeaafe75817d2f7",
"icons/Icon-maskable-192.png": "9ac8afa984d7f66784dcaf8011b66fd3",
"icons/Icon-maskable-512.png": "d17476be02b2491ccdeaafe75817d2f7",
"index.html": "c7c0c6694f28dcd7b10d38af242ae440",
"/": "c7c0c6694f28dcd7b10d38af242ae440",
"main.dart.js": "9f970bb8406258c8ec520d2ca089a247",
"manifest.json": "7cf14b7fb309075aa70877c7cdcb5e31",
"README.md": "d929fcf5c80325f8bd4a8d19b07ea067",
"splash/img/dark-1x.png": "92e05383e00c1afa5dfec21f8b181238",
"splash/img/dark-2x.png": "d17476be02b2491ccdeaafe75817d2f7",
"splash/img/dark-3x.png": "bf9c1dfe8ab535478de9156eec2c8d06",
"splash/img/dark-4x.png": "ecfb1bfd51b9266e24f3dc6ff7fb9379",
"splash/img/light-1x.png": "92e05383e00c1afa5dfec21f8b181238",
"splash/img/light-2x.png": "d17476be02b2491ccdeaafe75817d2f7",
"splash/img/light-3x.png": "bf9c1dfe8ab535478de9156eec2c8d06",
"splash/img/light-4x.png": "ecfb1bfd51b9266e24f3dc6ff7fb9379",
"version.json": "f646f52538e72e0104fb2196aca27192"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
