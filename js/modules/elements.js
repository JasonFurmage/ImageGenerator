// ==========================================================================
// Elements
// ==========================================================================

export { homeElements, accountElements, generatorElements, libraryElements }

const homeElements = {
    libraryButton: document.getElementById('libraryButton'),
};

const accountElements = {
    accountSelect: document.getElementById('accountSelect'),
    accountNew: document.getElementById('accountNew'),
    accountTextField: document.getElementById('accountTextField'),
    addButton: document.getElementById('addButton'),
    cancelButton: document.getElementById('cancelButton')
};

const generatorElements = {
    nextButton: document.getElementById('nextButton'),
    saveButton: document.getElementById('saveButton')
};

const libraryElements = {
    libraryFull: document.getElementById('libraryFull'),
    libraryMini: document.getElementById('libraryMini'),
    libraryWindow: document.getElementById('libraryWindow'),
    libraryGallery: document.getElementById('libraryGallery'),
    libraryText: document.getElementById('libraryText')
};
