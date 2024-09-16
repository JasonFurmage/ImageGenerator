// ==========================================================================
// Helper
// ==========================================================================

export function toggleVisibility(element, show) {
    if (show) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

export function insertElementAtIndex(parent, child, index) {
    const children = Array.from(parent.childNodes);

    if (index === children.length) {
        parent.appendChild(child);
    } else {
        parent.insertBefore(child, children[index]);
    }
}

export function dispatchCustomEvent(target, name, data) {
    const event = new CustomEvent(name, { detail: data, });
    target.dispatchEvent(event);
}
