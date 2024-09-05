// ==========================================================================
// Layout
// ==========================================================================

import { libraryElements } from './elements.js';
import { insertElementAtIndex } from './helper.js';
export { adjustLibraryWindow }

const breakpoints = {
    small: 1,
    medium: 768,
    large: 992,
    xLarge: 1200
};

function adjustLibraryWindow() {
    const width = window.innerWidth;

    if (width < breakpoints.medium) {
        if (!libraryElements.libraryFull.contains(libraryElements.libraryWindow)) {
            insertElementAtIndex(libraryElements.libraryFull, libraryElements.libraryWindow, 2);
        }
    } else {
        if (!libraryElements.libraryMini.contains(libraryElements.libraryWindow)) {
            insertElementAtIndex(libraryElements.libraryMini, libraryElements.libraryWindow, 0);
        }
    }
}
