// ==========================================================================
// controllers/GeneratorController.js
// ==========================================================================

import { GeneratorModel } from "../models/GeneratorModel.js";
import { GeneratorView } from "../views/GeneratorView.js";
import { dispatchCustomEvent } from "../helpers/Helper.js";

export class GeneratorController {
    constructor() {
        this.model = new GeneratorModel();
        this.view = new GeneratorView();

        this.#setupEventListeners();
        this.generateImage(); // Generate image on page load.
    }

    #setupEventListeners() {
        this.view.$generatorNextButton.addEventListener('click', this.#handleNextButtonClick.bind(this));
        this.view.$generatorSaveButton.addEventListener('click', this.#handleSaveButtonClick.bind(this));
    }

    // Generate new image when next is clicked.
    #handleNextButtonClick() {
        this.generateImage();
    }

    // Dispatch save-image event and pass current image when save is clicked.
    #handleSaveButtonClick() {
        dispatchCustomEvent(document, 'save-image', this.model.image);
    }

    // Attempt to fetch new image and store url if successful.
    async generateImage() {
        try {
            await this.model.fetchImage()
            this.view.$generatorImage.src = this.model.image;
    
        } catch (error) {
            console.log(error);
            $.notifi('There was an error fetching the image.', {noticeClass: 'custom-class custom-class--error'});
        }
    }
}