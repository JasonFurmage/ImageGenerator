// ==========================================================================
// Account
// ==========================================================================

export const $accountSelect = document.getElementById('accountSelect');
export const $accountNew = document.getElementById('accountNew');
export const $accountTextField = document.getElementById('accountTextField');
export const $addButton = document.getElementById('addButton');
export const $cancelButton = document.getElementById('cancelButton');

let accounts = [];

class Account {
    constructor(email, library) {
        this.email = email;
        this.library = library;
    }
}

export function handleSelectChange() {
    const selectedValue = $accountSelect.value;

    if (selectedValue === 'new') {
        $accountNew.classList.remove('hidden');
    } else {
        $accountNew.classList.add('hidden');
    }
}

export function hideAccountNew() {
    $accountNew.classList.add('hidden');
    $accountSelect.selectedIndex = 0;
}

export function addAccount() {
    console.log('halt i am reptar');
}

function addSelectOption(email) {
    const newOption = document.createElement('option');
    newOption.value = email;
    newOption.textContent = email;

    $accountSelect.appendChild(newOption);
    $accountSelect.value = email;

    handleSelectChange();   
}

function accountExists(email) {
    return accounts.some(account => account.email === email);
}
