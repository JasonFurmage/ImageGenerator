// ==========================================================================
// Account
// ==========================================================================

import { accountElements} from './elements.js';
import { isValidEmail } from './helper.js';
import { toggleVisibility } from './helper.js';

export let selectedAccount;

const accounts = [];

class Account {
    constructor(email, library) {
        this.email = email;
        this.library = library;
    }
}

export function handleSelectChange() {
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
}

export function cancelAddAccount() {
    accountElements.accountSelect.selectedIndex = 0;
    handleSelectChange();
}

export function addAccount() {
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
        accountElements.accountTextField.value = '';
    }
}

function addSelectOption(email) {
    const newOption = new Option(email, email, undefined, true);
    accountElements.accountSelect.add(newOption);
    handleSelectChange();
}

function getAccount(email) {
    return accounts.find(account => account.email === email);
}
