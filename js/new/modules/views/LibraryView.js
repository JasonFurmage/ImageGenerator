// ==========================================================================
// Library View
// ==========================================================================

import { toggleVisibility } from "../helpers/Helper.js";

export class LibraryView {
    constructor() {
        this.$libraryFull = document.querySelector('.library.library--full');
        this.$libraryMini = document.querySelector('.library.library--mini');
        this.$libraryTitle = document.querySelector('.library__title');
        this.$libraryGallery = document.querySelector('.gallery__window');
        this.$libraryButton = document.querySelector('.library__btn');
        this.$home = document.querySelector('.home');
        this.$homeButton = document.querySelector('.home__btn');
    }

    showLibrary(show) {
        toggleVisibility(this.$home, !show);
        toggleVisibility(this.$libraryFull, show);
    }

    updateLibraryTitle(email) {
        const title = email ? `${this.#getUsername(email)}'s Library` : 'Library';
        this.$libraryTitle.textContent = title;
    }

    #getUsername(email) {
        const username = email.split('@')[0];
        return username.charAt(0).toUpperCase() + username.slice(1);
    }

    insertImage(image) {
        const img = document.createElement('img');
        img.src = image;
        img.classList.add('gallery__item');
        this.$libraryGallery.prepend(img);
    }

    insertImages(images) {
        images.forEach(image => {
            this.insertImage(image);
        });
    }

    clearGallery() {
        this.$libraryGallery.innerHTML = '';
    }

    updateHomeButtonTitle(count) {
        const title = count ? `View Saved Images (${count})` : 'View Saved Images';
        this.$homeButton.textContent = title;
    }
}
