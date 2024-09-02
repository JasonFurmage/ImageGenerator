// ==========================================================================
// Layout
// ==========================================================================

import { insertElementAtIndex } from './helper.js';

const breakpoints = {
    small: 1,
    medium: 768,
    large: 992,
    xLarge: 1200
};

const $libraryFull = document.getElementById('libraryFull');
const $libraryMini = document.getElementById('libraryMini');
const $libraryWindow = document.getElementById('libraryWindow');

export function adjustLibraryWindow() {
    const width = window.innerWidth;

    if (width < breakpoints.medium) {
        if (!$libraryFull.contains($libraryWindow)) {
            insertElementAtIndex($libraryFull, $libraryWindow, 2);
        }
    } else {
        if (!$libraryMini.contains($libraryWindow)) {
            insertElementAtIndex($libraryMini, $libraryWindow, 0);
        }
    }
}
