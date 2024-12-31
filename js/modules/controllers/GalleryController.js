// ==========================================================================
// controllers/GalleryController.js
// ==========================================================================

import { GalleryView } from "../views/GalleryView.js";

export class GalleryController {
    constructor() {
        this.view = new GalleryView();

        this.#setupEventListener();
    }

    #setupEventListener() {
        document.addEventListener('add-image', this.#handleAddImage.bind(this));
        document.addEventListener('add-images', this.#handleAddImages.bind(this));
        document.addEventListener('clear-images', this.#handleClearImages.bind(this));
        document.addEventListener('image-count-change', this.#handleImageCountChange.bind(this));
    }

    // Add new image into gallery.
    #handleAddImage(event) {
        const image = event.detail;
        this.view.insertImage(image);
    }

    // Clear gallery and insert images for selected account.
    #handleAddImages(event) {
        const images = event.detail;
        const count = images.length
        this.view.clearGallery();
        this.view.insertImages(images);
        this.view.showPlaceholder(count === 0 ? true : false);
    }

    // Show or hide placeholder depending on whether gallery is empty.
    #handleImageCountChange(event) {
        const count = event.detail;
        this.view.showPlaceholder(count === 0 ? true : false);
    }

    // Remove all images and show placeholder.
    #handleClearImages() {
        this.view.clearGallery();
        this.view.showPlaceholder(true);
    }
}