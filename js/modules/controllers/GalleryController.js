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

    // Add image into gallery on add-image event.
    #handleAddImage(event) {
        const image = event.detail;
        this.view.insertImage(image);
    }

    // Clear gallery and insert saved images for selected account on add-images event.
    #handleAddImages(event) {
        const images = event.detail;
        const count = images.length
        this.view.clearGallery();
        this.view.insertImages(images);
        this.view.showPlaceholder(count === 0 ? true : false);
    }

    // Show or hide placeholder on image-count-change event.
    #handleImageCountChange(event) {
        const count = event.detail;
        this.view.showPlaceholder(count === 0 ? true : false);
    }

    // Remove all images from gallery and show placeholder on clear-images event.
    #handleClearImages() {
        this.view.clearGallery();
        this.view.showPlaceholder(true);
    }
}