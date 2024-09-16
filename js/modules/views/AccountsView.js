// ==========================================================================
// Accounts View
// ==========================================================================

import { toggleVisibility } from "../helpers/Helper.js";

export class AccountsView {
    constructor() {
        this.$accountSelect = document.querySelector('.account__select');
        this.$accountNew = document.querySelector('.account__new');
        this.$accountTextField = document.querySelector('.account__textfield');
        this.$accountAddButton = document.querySelector('.account__btn.btn.btn--primary');
        this.$accountCancelButton = document.querySelector('.account__btn.btn.btn--secondary');
    }

    toggleAccountNew(isNew) {
        toggleVisibility(this.$accountNew, isNew);
        toggleVisibility(this.$accountSelect, !isNew);
    }

    addSelectOption(value) {
        const event = new Event('change');
        const newOption = new Option(value, value, undefined, true);
        this.$accountSelect.add(newOption);
        this.$accountSelect.dispatchEvent(event);
    }

    clearTextField() {
        this.$accountTextField.value = '';
    }

    selectDefault() {
        const event = new Event('change');
        this.$accountSelect.selectedIndex = 0;
        this.$accountSelect.dispatchEvent(event);
    }
}
