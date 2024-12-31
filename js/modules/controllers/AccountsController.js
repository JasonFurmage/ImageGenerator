// ==========================================================================
// controllers/AccountsController.js
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

    // Determine which select option was selected.
    #handleSelectChange() {
        const selectedValue = this.view.$accountSelect.value;
        const isNew = selectedValue === 'new';
        const isAccount = selectedValue !== 'new' && selectedValue !== 'default'

        // Show or hide account new depending on whether 'add new account' was selected.
        this.view.toggleAccountNew(isNew);
        this.view.clearTextField();

        // Get existing account if an account was selected.
        if (isAccount) {
            this.#selectAccount(selectedValue);
        } else {
            this.#deselectAccount();
        }

        // Dispatch account-change event and pass selected account or null if no account is selected.
        dispatchCustomEvent(document, 'account-change', this.selectedAccount || null);
    }

    // Attempt to add new account and create new select option.
    #handleAddButtonClick() {
        const email = this.view.$accountTextField.value;

        try {
            this.model.addAccount(email);  
            this.view.addSelectOption(email); 
        } catch (error) {
            $.notifi(error, {noticeClass: 'custom-class custom-class--warning'});
        }
    }

    // Reset select to default option when cancel is clicked.
    #handleCancelButtonClick() {
        this.view.selectDefault();
    }

    // Trigger add button click when enter key is pushed.
    #handleKeyDownPress(event) {
        if(event.key === "Enter") {
            this.view.$accountAddButton.click();
        }
    }

    // Save image to account on save-image event.
    #handleSaveImage(event) {
        if (this.selectedAccount) {
            const image = event.detail;
            this.#saveImage(image);
        } else {
            $.notifi('Please select an account.', {noticeClass: 'custom-class custom-class--warning'});
        }
    }

    // Find account with matching email then dispatch add-images event and pass account images.
    #selectAccount(email) {
        this.selectedAccount = this.model.getAccount(email);
        dispatchCustomEvent(document, 'add-images', this.selectedAccount.images);
    }

    // Remove reference to selected account and dispatch clear-images event.
    #deselectAccount() {
        this.selectedAccount = null;
        dispatchCustomEvent(document, 'clear-images');
    }

    // Attempt to save image then dispatch add-image and image-count-change events.
    #saveImage(image) {
        try {
            this.selectedAccount.addImage(image);
            dispatchCustomEvent(document, 'add-image', image);
            dispatchCustomEvent(document, 'image-count-change', this.selectedAccount.images.length);
        } catch (error) {
            $.notifi(error, {noticeClass: 'custom-class custom-class--warning'});
        }
    }
}