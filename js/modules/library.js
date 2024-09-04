// ==========================================================================
// Library
// ==========================================================================

const $libraryGallery = document.getElementById('libraryGallery');
const $libraryText = document.getElementById('libraryText');

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
    updateLibraryText();
}

export function clearLibrary() {
    $libraryGallery.innerHTML = '';
    updateLibraryText();
}

function updateLibraryText() {
    if ($libraryGallery.children.length === 1) {
        $libraryText.textContent = '';
    } 
    else if ($libraryGallery.children.length === 0) {
        $libraryText.textContent = 'No Saved Images';
    }
}
