// ==========================================================================
// Gallery Controller
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
