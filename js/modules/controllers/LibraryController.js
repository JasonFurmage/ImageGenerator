// ==========================================================================
// controllers/LibraryController.js
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
        document.addEventListener('account-change', this.#handleAccountChange.bind(this));
        document.addEventListener('image-count-change', this.#handleImageCountChange.bind(this));
        window.addEventListener('resize', this.#handleWindowResize.bind(this));
    }

    // Determine if home or library button was clicked then toggle visibility.
    #handleViewButtonClick(event) {
        const isHomeButton = event.target === this.view.$homeButton; 
        this.view.showLibrary(isHomeButton);
    }

    // Update library title and saved images count on account-change event.
    #handleAccountChange(event) {
        const account = event.detail;
        this.view.updateLibraryTitle(account ? account.email : null)
        this.view.updateHomeButtonTitle(account? account.images.length : null);
    }

    // Update saved images count on image-count-change event.
    #handleImageCountChange(event) {
        const count = event.detail;
        this.view.updateHomeButtonTitle(count);
    }

    // Adjust position of gallery in dom according to screen width.
    #handleWindowResize() {
        const width = window.innerWidth
        this.view.adjustGalleryPosition(width);
    }
}