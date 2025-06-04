// ==========================================================================
// models/GeneratorModel.js
// ==========================================================================

export class GeneratorModel {
    constructor() {
        this.image = null;
        this.picsumURL = 'https://picsum.photos/400/300';
    }

    // Fetch image from picsum and store img url.
    fetchImage() {
        return fetch(this.picsumURL)
            .then(this.#checkStatus)  
            .then(response => response.url)
            .then(imgURL => this.image = imgURL)
            .catch(error => {throw error})
    }
    
    // Check the status of http response and resolve if response is ok.
    #checkStatus(response) {
        if (response.ok) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    }
}