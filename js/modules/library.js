// ==========================================================================
// Library
// ==========================================================================

const $libraryGallery = document.getElementById('libraryGallery');

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
    $libraryGallery.prepend(img);
}

export function clearLibrary() {
    $libraryGallery.innerHTML = '';
}
