// ==========================================================================
// Account
// ==========================================================================

import { accountElements} from './elements.js';
import { isValidEmail, toggleVisibility } from './helper.js';
export { selectedAccount, handleSelectChange, cancelAddAccount, addAccount }

const accounts = [];
let selectedAccount;

class Account {
    constructor(email, library) {
        this.email = email;
        this.library = library;
    }
}

function handleSelectChange() {
    const selectedValue = accountElements.accountSelect.value;
    const isNew = selectedValue === 'new';
    const isDefault = selectedValue === 'default';

    toggleVisibility(accountElements.accountNew, isNew);
    toggleVisibility(accountElements.accountSelect, !isNew);

    if (!isNew && !isDefault) {
        selectedAccount = getAccount(selectedValue);

        if (!selectedAccount) {
            console.log('account not found');
        }
    } else {
        selectedAccount = null;
    }

    clearTextField();
}

function getAccount(email) {
    return accounts.find(account => account.email === email);
}

function addAccount() {
    const email = accountElements.accountTextField.value;

    if (!isValidEmail(email)) {
        console.log('invalid email');
    } 
    else if (getAccount(email)) {
        console.log('account already exists');
    }
    else {
        const newAccount = new Account(email, []);
        accounts.push(newAccount);
        addSelectOption(newAccount.email)
    }
}

function addSelectOption(email) {
    const newOption = new Option(email, email, undefined, true);
    accountElements.accountSelect.add(newOption);
    handleSelectChange();
}

function cancelAddAccount() {
    accountElements.accountSelect.selectedIndex = 0;
    handleSelectChange();
}

function clearTextField() {
    accountElements.accountTextField.value = '';
}
