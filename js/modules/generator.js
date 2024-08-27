// ==========================================================================
// Generator
// ==========================================================================

const picsumURL = 'https://picsum.photos/400/300';

export function fetchImage() {
    return fetch(picsumURL)
             .then(checkStatus)  
             .then(response => response.url)
             .catch(error => {
                console.log('Looks like there was a problem!', error)
                return Promise.reject(error)
             })
}

export function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

export function generateImage(imgURL) {
    const generatorImage = document.querySelector('.generator__image');
    generatorImage.src = imgURL;
}

