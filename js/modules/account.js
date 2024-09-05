// ==========================================================================
// Account
// ==========================================================================

import { isValidEmail } from './helper.js';

export const $accountSelect = document.getElementById('accountSelect');
export const $accountNew = document.getElementById('accountNew');
export const $accountTextField = document.getElementById('accountTextField');
export const $addButton = document.getElementById('addButton');
export const $cancelButton = document.getElementById('cancelButton');

export let selectedAccount;

const accounts = [];

class Account {
    constructor(email, library) {
        this.email = email;
        this.library = library;
    }
}

export function handleSelectChange() {
    const selectedValue = $accountSelect.value;
    selectedAccount = null;

    if (selectedValue === 'new') {
        $accountNew.classList.remove('hidden');
        $accountSelect.classList.add('hidden');

    } else {
        hideAccountNew();

        if (selectedValue !== 'default') {
            selectedAccount = getAccount(selectedValue);

            if (!selectedAccount) {
                console.log('account not found');
            }
        }
    }
}

export function hideAccountNew() {
    $accountNew.classList.add('hidden');
    $accountSelect.classList.remove('hidden');

    const selectedValue = $accountSelect.value;

    if (selectedValue == 'new') {
        $accountSelect.selectedIndex = 0;
    }
}

export function addAccount() {
    const email = $accountTextField.value;

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
        $accountTextField.value = '';
    }
}

function addSelectOption(email) {
    const newOption = document.createElement('option');
    newOption.value = email;
    newOption.textContent = email;

    $accountSelect.appendChild(newOption);
    $accountSelect.value = email;

    handleSelectChange();
}

function getAccount(email) {
    return accounts.find(account => account.email === email);
}
