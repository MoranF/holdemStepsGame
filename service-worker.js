/**
 * Check out https://googlechrome.github.io/sw-toolbox/docs/master/index.html for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    'src/img/mediumCards/card00.png',
    'src/img/mediumCards/card01.png',
    'src/img/mediumCards/card02.png',
    'src/img/mediumCards/card03.png',
    'src/img/mediumCards/card10.png',
    'src/img/mediumCards/card11.png',
    'src/img/mediumCards/card12.png',
    'src/img/mediumCards/card13.png',
    'src/img/mediumCards/card20.png',
    'src/img/mediumCards/card21.png',
    'src/img/mediumCards/card22.png',
    'src/img/mediumCards/card23.png',
    'src/img/mediumCards/card30.png',
    'src/img/mediumCards/card31.png',
    'src/img/mediumCards/card32.png',
    'src/img/mediumCards/card33.png',
    'src/img/mediumCards/card40.png',
    'src/img/mediumCards/card41.png',
    'src/img/mediumCards/card42.png',
    'src/img/mediumCards/card43.png',
    'src/img/mediumCards/card50.png',
    'src/img/mediumCards/card51.png',
    'src/img/mediumCards/card52.png',
    'src/img/mediumCards/card53.png',
    'src/img/mediumCards/card60.png',
    'src/img/mediumCards/card61.png',
    'src/img/mediumCards/card62.png',
    'src/img/mediumCards/card63.png',
    'src/img/mediumCards/card70.png',
    'src/img/mediumCards/card71.png',
    'src/img/mediumCards/card72.png',
    'src/img/mediumCards/card73.png',
    'src/img/mediumCards/card80.png',
    'src/img/mediumCards/card81.png',
    'src/img/mediumCards/card82.png',
    'src/img/mediumCards/card83.png',
    'src/img/mediumCards/card90.png',
    'src/img/mediumCards/card91.png',
    'src/img/mediumCards/card92.png',
    'src/img/mediumCards/card93.png',
    'src/img/mediumCards/card100.png',
    'src/img/mediumCards/card101.png',
    'src/img/mediumCards/card102.png',
    'src/img/mediumCards/card103.png',
    'src/img/mediumCards/card110.png',
    'src/img/mediumCards/card111.png',
    'src/img/mediumCards/card112.png',
    'src/img/mediumCards/card113.png',
    'src/img/mediumCards/card120.png',
    'src/img/mediumCards/card121.png',
    'src/img/mediumCards/card122.png',
    'src/img/mediumCards/card123.png',



    'src/img/smallCards/card00.png',
    'src/img/smallCards/card01.png',
    'src/img/smallCards/card02.png',
    'src/img/smallCards/card03.png',
    'src/img/smallCards/card10.png',
    'src/img/smallCards/card11.png',
    'src/img/smallCards/card12.png',
    'src/img/smallCards/card13.png',
    'src/img/smallCards/card20.png',
    'src/img/smallCards/card21.png',
    'src/img/smallCards/card22.png',
    'src/img/smallCards/card23.png',
    'src/img/smallCards/card30.png',
    'src/img/smallCards/card31.png',
    'src/img/smallCards/card32.png',
    'src/img/smallCards/card33.png',
    'src/img/smallCards/card40.png',
    'src/img/smallCards/card41.png',
    'src/img/smallCards/card42.png',
    'src/img/smallCards/card43.png',
    'src/img/smallCards/card50.png',
    'src/img/smallCards/card51.png',
    'src/img/smallCards/card52.png',
    'src/img/smallCards/card53.png',
    'src/img/smallCards/card60.png',
    'src/img/smallCards/card61.png',
    'src/img/smallCards/card62.png',
    'src/img/smallCards/card63.png',
    'src/img/smallCards/card70.png',
    'src/img/smallCards/card71.png',
    'src/img/smallCards/card72.png',
    'src/img/smallCards/card73.png',
    'src/img/smallCards/card80.png',
    'src/img/smallCards/card81.png',
    'src/img/smallCards/card82.png',
    'src/img/smallCards/card83.png',
    'src/img/smallCards/card90.png',
    'src/img/smallCards/card91.png',
    'src/img/smallCards/card92.png',
    'src/img/smallCards/card93.png',
    'src/img/smallCards/card100.png',
    'src/img/smallCards/card101.png',
    'src/img/smallCards/card102.png',
    'src/img/smallCards/card103.png',
    'src/img/smallCards/card110.png',
    'src/img/smallCards/card111.png',
    'src/img/smallCards/card112.png',
    'src/img/smallCards/card113.png',
    'src/img/smallCards/card120.png',
    'src/img/smallCards/card121.png',
    'src/img/smallCards/card122.png',
    'src/img/smallCards/card123.png',
    'index.html',
    'manifest.json',
    'src/style/game.css'
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.cacheFirst);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;