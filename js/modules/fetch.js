// ==========================================================================
// Fetch
// ==========================================================================

export function fetchImage(url) {
    return fetch(url)
             .then(checkStatus)  
             .then(response => response.url)
             .catch(error => {
                console.log('Looks like there was a problem!', error)
                return Promise.reject(error)
             })
}

