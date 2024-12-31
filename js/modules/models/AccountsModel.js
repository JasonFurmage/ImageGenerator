// ==========================================================================
// models/AccountsModel.js
// ==========================================================================

export class AccountsModel {
    constructor() {
        this.accounts = [];
    }

    // Add new account if validation checks are passed.
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

    // Use regex to check if email is valid.
    #isValidEmail(email) {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email);
    }
    
    // Find account with matching email.
    getAccount(email) {
        return this.accounts.find(account => account.email === email);
    }

    #Account = class {
        // Create new account using email.
        constructor(email) {
            this.email = email;
            this.images = [];
        }
    
        // Add image to array if it does not exist already.
        addImage(image) {
            if (!this.images.includes(image)) {
                this.images.push(image);
            } else {
                throw ('Image has already been saved.');
            }
        }
    }
}