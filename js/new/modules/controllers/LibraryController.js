// ==========================================================================
// Library Controller
// ==========================================================================

import { LibraryView } from "../views/LibraryView.js";

export class LibraryController {
    constructor() {
        this.view = new LibraryView();

        this.#setupEventLiseners();
    }

    #setupEventLiseners() {
        this.view.$homeButton.addEventListener('click', this.#handleViewButtonClick.bind(this));
        this.view.$libraryButton.addEventListener('click', this.#handleViewButtonClick.bind(this));
        document.addEventListener('add-image', this.#handleAddImage.bind(this));
        document.addEventListener('add-images', this.#handleAddImages.bind(this));
        document.addEventListener('clear-images', this.#handleClearImages.bind(this));
        document.addEventListener('account-change', this.#handleAccountChange.bind(this));
        document.addEventListener('image-count-change', this.#handleImageCountChange.bind(this));
    }

    #handleViewButtonClick(event) {
        const isHomeButton = event.target === this.view.$homeButton; 
        this.view.showLibrary(isHomeButton);
    }

    #handleAccountChange(event) {
        const account = event.detail;
        this.view.updateLibraryTitle(account ? account.email : null)
        this.view.updateHomeButtonTitle(account? account.images.length : null);
    }

    #handleImageCountChange(event) {
        const count = event.detail;
        this.view.updateHomeButtonTitle(count);
    }

    #handleAddImage(event) {
        const image = event.detail;
        this.view.insertImage(image);
    }

    #handleAddImages(event) {
        const images = event.detail;
        this.view.clearGallery();
        this.view.insertImages(images);
    }

    #handleClearImages() {
        this.view.clearGallery();
    }
}
