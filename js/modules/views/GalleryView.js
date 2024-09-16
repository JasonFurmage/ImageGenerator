// ==========================================================================
// Gallery View
// ==========================================================================

export class GalleryView {
    constructor() {
        this.$galleryWindow = document.querySelector('.gallery__window');
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

    clearGallery() {
        this.$galleryWindow.innerHTML = '';
    }
}
