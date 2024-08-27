// ==========================================================================
// Helper
// ==========================================================================

export function insertElementAtIndex(parent, child, index) {

    const children = Array.from(parent.childNodes);

    if (index === children.length) {
        parent.appendChild(child);
    } else {
        parent.insertBefore(child, children[index]);
    }
}
