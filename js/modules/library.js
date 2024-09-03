// ==========================================================================
// Library
// ==========================================================================

const $libraryGallery = document.getElementById('libraryGallery');

export function loadLibrary(library) {
    $libraryGallery.innerHTML = '';

    library.forEach(url => {
        const img = document.createElement('img');
        img.src = url; // Set the source of the img element
        img.classList.add('library__gallery-item');
        $libraryGallery.appendChild(img);
    });
}
