// ==========================================================================
// Main
// ==========================================================================

import { adjustLibraryWindow } from './modules/layout.js';
import { fetchImage } from './modules/generator.js';

adjustLibraryWindow();
fetchImage()

window.addEventListener('resize', adjustLibraryWindow);
