// ==UserScript==
// @name          Atalhos
// @description   Atalhos para sites
// @namespace     CowanLHOS
// @license       CowBas
// @version       1.0
// @author        Cowanbas
// @match         *://*/*
// @run-at        document-start
// ==/UserScript==

(function () {
    'use strict';

    const links = {
        'Digit1': '',
        'Digit2': '',
        'Digit3': '',
    };

    document.addEventListener('keydown', function (event) {
        const link = links[event.code];
        if (event.shiftKey && link && !event.target.matches('input, textarea, [contenteditable="true"]')) {
            window.open(link, '_blank');
        }
    });
})();
