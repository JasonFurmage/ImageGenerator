// ==========================================================================
// views/GalleryView.js
// ==========================================================================

import { toggleVisibility } from "../helpers/Helper.js";

export class GalleryView {
    // Get gallery elements.
    constructor() {
        this.$galleryWindow = document.querySelector('.gallery__window');
        this.$galleryPlaceholder = document.querySelector('.gallery__placeholder');
        this.imgClass = 'gallery__item';
    }

    // Insert new image into gallery window and add class.
    insertImage(image) {
        const img = document.createElement('img');
        img.src = image;
        img.classList.add(this.imgClass);
        this.$galleryWindow.prepend(img);
    }

    // Insert multiple images into gallery.
    insertImages(images) {
        images.forEach(image => {
            this.insertImage(image);
        });
    }

    // Show or hide placeholder text.
    showPlaceholder(show) {
        toggleVisibility(this.$galleryPlaceholder, show);
    }

    // Remove all images from gallery.
    clearGallery() {
        this.$galleryWindow.innerHTML = '';
        this.$galleryWindow.prepend(this.$galleryPlaceholder);
    }
}