// ==========================================================================
// Library
// ==========================================================================

import { libraryElements } from './elements.js';

export function loadLibrary(library) {
    clearLibrary();

    library.forEach(imgURL => {
        insertImage(imgURL);
    });
}

export function insertImage(imgURL) {
    const img = document.createElement('img');
    img.src = imgURL;
    img.classList.add('library__gallery-item');
    libraryElements.libraryGallery.prepend(img);
    updateLibraryText();
}

export function clearLibrary() {
    libraryElements.libraryGallery.innerHTML = '';
    updateLibraryText();
}

function updateLibraryText() {
    if (libraryElements.libraryGallery.children.length === 1) {
        libraryElements.libraryText.textContent = '';
    } 
    else if (libraryElements.libraryGallery.children.length === 0) {
        libraryElements.libraryText.textContent = 'No Saved Images';
    }
}
