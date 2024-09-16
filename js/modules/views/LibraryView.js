// ==========================================================================
// Library View
// ==========================================================================

import { toggleVisibility, insertElementAtIndex } from "../helpers/Helper.js";

export class LibraryView {
    constructor() {
        this.$libraryFull = document.querySelector('.library.library--full');
        this.$libraryMini = document.querySelector('.library.library--mini');
        this.$libraryTitle = document.querySelector('.library__title');
        this.$libraryButton = document.querySelector('.library__btn');
        this.$home = document.querySelector('.home');
        this.$homeButton = document.querySelector('.home__btn');
        this.$gallery = document.querySelector('.gallery');
    }

    showLibrary(show) {
        toggleVisibility(this.$home, !show);
        toggleVisibility(this.$libraryFull, show);
    }

    updateLibraryTitle(email) {
        const title = email ? `${this.#getUsername(email)}'s Library` : 'Library';
        this.$libraryTitle.textContent = title;
    }

    updateHomeButtonTitle(count) {
        const title = count ? `View Saved Images (${count})` : 'View Saved Images';
        this.$homeButton.textContent = title;
    }

    #getUsername(email) {
        const username = email.split('@')[0];
        return username.charAt(0).toUpperCase() + username.slice(1);
    }

    adjustGalleryPosition(width) {
        const targetLibrary = width < 768 ? this.$libraryFull : this.$libraryMini;
        const targetIndex = width < 768 ? 2 : 0;
        
        if (!targetLibrary.contains(this.$gallery)) {
            insertElementAtIndex(targetLibrary, this.$gallery, targetIndex);
        }
    }
}
