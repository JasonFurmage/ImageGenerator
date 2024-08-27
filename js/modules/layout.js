// ==========================================================================
// Layout
// ==========================================================================

import { insertElementAtIndex } from './modules/helper.js';

const breakpoints = {
    small: 1,
    medium: 768,
    large: 992,
    xLarge: 1200
};

const $libraryFull = document.querySelector('.library--full');
const $libraryMini = document.querySelector('.library--mini');
const $libraryWindow = document.querySelector('.library__window');

export function adjustLibraryWindow(width) {
    if (width < breakpoints.medium) {
        if (!$libraryFull.contains($libraryWindow)) {
            insertElementAtIndex($libraryFull, $libraryWindow, 1);
        }
    } else {
        if (!$libraryMini.contains($libraryWindow)) {
            insertElementAtIndex($libraryMini, $libraryWindow, 0);
        }
    }
}
