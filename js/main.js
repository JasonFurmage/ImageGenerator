// ==========================================================================
// Main
// ==========================================================================

import { adjustLibraryWindow } from './modules/layout.js';
import { fetchImage } from './modules/generator.js';
import { generateImage } from './modules/helper.js';

fetchImage()
    .then(imgURL => generateImage(imgURL))

window.addEventListener('resize', adjustLibraryWindow);
    