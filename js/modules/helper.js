// ==========================================================================
// Helper
// ==========================================================================

export function insertElementAtIndex(parent, child, index) {

    const children = Array.from(parent.childNodes);

    if (index === children.length) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, children[index]);
    }
}
