// ==========================================================================
// views/LibraryView.js
// ==========================================================================

import { toggleVisibility, insertElementAtIndex } from "../helpers/Helper.js";

export class LibraryView {
    // Get library and home elements.
    constructor() {
        this.$libraryFull = document.querySelector('.library.library--full');
        this.$libraryMini = document.querySelector('.library.library--mini');
        this.$libraryTitle = document.querySelector('.library__title');
        this.$libraryButton = document.querySelector('.library__btn');
        this.$home = document.querySelector('.home');
        this.$homeButton = document.querySelector('.home__btn');
        this.$gallery = document.querySelector('.gallery');
    }

    // Switch between showing account select or account new.
    showLibrary(show) {
        toggleVisibility(this.$home, !show);
        toggleVisibility(this.$libraryFull, show);
    }

    // Update library title with username.
    updateLibraryTitle(email) {
        const title = email ? `${this.#getUsername(email)}'s Library` : 'Library';
        this.$libraryTitle.textContent = title;
    }

    // Include current image count on saved images button.
    updateHomeButtonTitle(count) {
        const title = count ? `View Saved Images (${count})` : 'View Saved Images';
        this.$homeButton.textContent = title;
    }

    // Get username by truncating email address.
    #getUsername(email) {
        const username = email.split('@')[0];
        return username.charAt(0).toUpperCase() + username.slice(1);
    }

    // Move gallery to full library or mini library depending on screen width.
    adjustGalleryPosition(width) {
        const targetLibrary = width < 768 ? this.$libraryFull : this.$libraryMini;
        const targetIndex = width < 768 ? 2 : 0;
        
        if (!targetLibrary.contains(this.$gallery)) {
            insertElementAtIndex(targetLibrary, this.$gallery, targetIndex);
        }
    }
}