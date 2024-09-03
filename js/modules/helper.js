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

export function isValidEmail(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }