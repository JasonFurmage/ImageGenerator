// ==========================================================================
// Generator Model
// ==========================================================================

export class GeneratorModel {
    constructor() {
        this.image = null;
        this.picsumURL = 'https://picsum.photos/400/300';
    }

    fetchImage() {
        return fetch(this.picsumURL)
            .then(this.#checkStatus)  
            .then(response => response.url)
            .then(imgURL => this.image = imgURL)
            .catch(error => {throw error})
    }
    
    #checkStatus(response) {
        if (response.ok) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    }
}
