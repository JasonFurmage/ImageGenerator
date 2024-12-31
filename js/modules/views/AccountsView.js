// ==========================================================================
// views/AccountsView.js
// ==========================================================================

import { toggleVisibility } from "../helpers/Helper.js";

export class AccountsView {
    // Get account elements.
    constructor() {
        this.$accountSelect = document.querySelector('.account__select');
        this.$accountNew = document.querySelector('.account__new');
        this.$accountTextField = document.querySelector('.account__textfield');
        this.$accountAddButton = document.querySelector('.account__btn.btn.btn--primary');
        this.$accountCancelButton = document.querySelector('.account__btn.btn.btn--secondary');
    }

    // Switch between showing account select or account new.
    toggleAccountNew(isNew) {
        toggleVisibility(this.$accountNew, isNew);
        toggleVisibility(this.$accountSelect, !isNew);
    }

    // Add new select option and trigger change event.
    addSelectOption(value) {
        const event = new Event('change');
        const newOption = new Option(value, value, undefined, true);
        this.$accountSelect.add(newOption);
        this.$accountSelect.dispatchEvent(event);
    }

    // Clear text field.
    clearTextField() {
        this.$accountTextField.value = '';
    }

    // Select first option and trigger change event.
    selectDefault() {
        const event = new Event('change');
        this.$accountSelect.selectedIndex = 0;
        this.$accountSelect.dispatchEvent(event);
    }
}