// ==========================================================================
// Library
// ==========================================================================

const $libraryGallery = document.getElementById('libraryGallery');

export function loadLibrary(library) {
    $libraryGallery.innerHTML = '';

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
