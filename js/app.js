// ==========================================================================
// App
// ==========================================================================

import { fetchImage } from './modules/fetch.js';
import { generateImage } from './modules/helper.js';

fetchImage()
    .then(imgURL => generateImage(imgURL))
    