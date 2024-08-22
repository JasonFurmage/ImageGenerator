// ==========================================================================
// App
// ==========================================================================

import { fetchImage } from './modules/fetch.js';

fetchImage('https://picsum.photos/400/300')
    .then(imgURL => console.log(imgURL))