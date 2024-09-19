// ==========================================================================
// Accounts Model
// ==========================================================================

export class AccountsModel {
    constructor() {
        this.accounts = [];
    }

    addAccount(email) {

        if (!this.#isValidEmail(email)) {
            throw ('Please enter a valid email.');
        } 
        else if (this.getAccount(email)) {
            throw ('Account already exists.');
        }
        else {
            const newAccount = new this.#Account(email);
            this.accounts.push(newAccount);
        }
    }

    #isValidEmail(email) {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email);
    }
    
    getAccount(email) {
        return this.accounts.find(account => account.email === email);
    }

    #Account = class {
        constructor(email) {
            this.email = email;
            this.images = [];
        }
    
        addImage(image) {
            if (!this.images.includes(image)) {
                this.images.push(image);
            } else {
                throw ('Image has already been saved.');
            }
        }
    }
}
