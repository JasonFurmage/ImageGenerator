// ==========================================================================
// Generator Controller
// ==========================================================================

import { GeneratorModel } from "../models/GeneratorModel.js";
import { GeneratorView } from "../views/GeneratorView.js";
import { dispatchCustomEvent } from "../helpers/Helper.js";

export class GeneratorController {
    constructor() {
        this.model = new GeneratorModel();
        this.view = new GeneratorView();

        this.#setupEventListeners();
    }

    #setupEventListeners() {
        this.view.$nextButton.addEventListener('click', this.#handleNextButtonClick.bind(this));
        this.view.$saveButton.addEventListener('click', this.#handleSaveButtonClick.bind(this));
    }

    #handleNextButtonClick() {
        this.generateImage();
    }

    #handleSaveButtonClick() {
        dispatchCustomEvent(document, 'save-image', this.model.image);
    }

    async generateImage() {
        try {
            await this.model.fetchImage()
            this.view.$image.src = this.model.image;
    
        } catch (error) {
            console.log(error);
            $.notifi('There was an error fetching the image.', {noticeClass: 'custom-class custom-class-error'});
        }
    }
}
