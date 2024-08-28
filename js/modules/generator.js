// ==========================================================================
// Generator
// ==========================================================================

const picsumURL = 'https://picsum.photos/400/300';
export const nextButton = document.querySelector('#nextButton');

export function fetchImage() {
    fetch(picsumURL)
        .then(checkStatus)  
        .then(response => response.url)
        .then(imgURL => generateImage(imgURL))
        .catch(error => console.log('Looks like there was a problem!', error))
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
