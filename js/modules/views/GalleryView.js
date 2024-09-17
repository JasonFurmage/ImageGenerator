// ==========================================================================
// Gallery View
// ==========================================================================

import { toggleVisibility } from "../helpers/Helper.js";

export class GalleryView {
    constructor() {
        this.$galleryWindow = document.querySelector('.gallery__window');
        this.$galleryPlaceholder = document.querySelector('.gallery__placeholder');
        this.imgClass = 'gallery__item';
    }

    insertImage(image) {
        const img = document.createElement('img');
        img.src = image;
        img.classList.add(this.imgClass);
        this.$galleryWindow.prepend(img);
    }

    insertImages(images) {
        images.forEach(image => {
            this.insertImage(image);
        });
    }

    showPlaceholder(show) {
        toggleVisibility(this.$galleryPlaceholder, show);
    }

    clearGallery() {
        this.$galleryWindow.innerHTML = '';
        this.$galleryWindow.prepend(this.$galleryPlaceholder);
    }
}
