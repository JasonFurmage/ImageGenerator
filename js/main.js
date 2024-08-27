// ==========================================================================
// Main
// ==========================================================================

import { fetchImage } from './modules/generator.js';
import { generateImage } from './modules/helper.js';

fetchImage()
    .then(imgURL => generateImage(imgURL))
    