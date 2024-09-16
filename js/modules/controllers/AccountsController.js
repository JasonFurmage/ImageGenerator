// ==========================================================================
// Accounts Controller
// ==========================================================================

import { AccountsModel } from "../models/AccountsModel.js";
import { AccountsView } from "../views/AccountsView.js";
import { dispatchCustomEvent } from "../helpers/Helper.js";

export class AccountsController {
    constructor() {
        this.model = new AccountsModel();
        this.view = new AccountsView();
        this.selectedAccount = null;

        this.#setupEventListeners();
    }

    #setupEventListeners() {
        this.view.$accountSelect.addEventListener('change', this.#handleSelectChange.bind(this));
        this.view.$accountAddButton.addEventListener('click', this.#handleAddButtonClick.bind(this));
        this.view.$accountCancelButton.addEventListener('click', this.#handleCancelButtonClick.bind(this));
        this.view.$accountTextField.addEventListener('keydown', this.#handleKeyDownPress.bind(this));
        document.addEventListener('save-image', this.#handleSaveImage.bind(this));
    }

    #handleSelectChange() {
        const selectedValue = this.view.$accountSelect.value;
        const isNew = selectedValue === 'new';
        const isAccount = selectedValue !== 'new' && selectedValue !== 'default'

        this.view.toggleAccountNew(isNew);
        this.view.clearTextField();

        if (isAccount) {
            this.#selectAccount(selectedValue);
        } else {
            this.#deselectAccount();
        }

        dispatchCustomEvent(document, 'account-change', this.selectedAccount || null);
    }

    #handleAddButtonClick() {
        const email = this.view.$accountTextField.value;

        try {
            this.model.addAccount(email);  
            this.view.addSelectOption(email); 
        } catch (error) {
            console.log(error);
        }
    }

    #handleCancelButtonClick() {
        this.view.selectDefault();
    }

    #handleKeyDownPress(event) {
        if(event.key === "Enter") {
            this.view.$accountAddButton.click();
        }
    }

    #handleSaveImage(event) {
        if (this.selectedAccount) {
            const image = event.detail;
            this.#saveImage(image);
        } else {
            console.log('Please select an account.');
        }
    }

    #selectAccount(email) {
        this.selectedAccount = this.model.getAccount(email);
        dispatchCustomEvent(document, 'add-images', this.selectedAccount.images);
    }

    #deselectAccount() {
        this.selectedAccount = null;
        dispatchCustomEvent(document, 'clear-images');
    }

    #saveImage(image) {
        try {
            this.selectedAccount.addImage(image);
            dispatchCustomEvent(document, 'add-image', image);
            dispatchCustomEvent(document, 'image-count-change', this.selectedAccount.images.length);
        } catch (error) {
            console.log(error);
        }
    }
}
