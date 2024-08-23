// ==========================================================================
// Helper
// ==========================================================================

export function generateImage(imgURL) {
    const generatorImage = document.querySelector('.generator__image');
    generatorImage.src = imgURL;
}

export function insertElementAtIndex(parent, child, index) {

    const children = Array.from(parent.childNodes);

    if (index === children.length) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, children[index]);
    }
}
