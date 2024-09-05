// ==========================================================================
// Generator
// ==========================================================================

export { currentImgURL, fetchImage, checkStatus, generateImage }

const picsumURL = 'https://picsum.photos/400/300';
let currentImgURL;

function fetchImage() {
    fetch(picsumURL)
        .then(checkStatus)  
        .then(response => response.url)
        .then(imgURL => generateImage(imgURL))
        .catch(error => console.log('Looks like there was a problem!', error))
}

function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function generateImage(imgURL) {
    const generatorImage = document.querySelector('.generator__image');
    generatorImage.src = imgURL;
    currentImgURL = imgURL;
}
