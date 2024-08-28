// ==========================================================================
// Main
// ==========================================================================

import { adjustLibraryWindow } from './modules/layout.js';
import { fetchImage } from './modules/generator.js';
import { $nextButton } from './modules/generator.js';

adjustLibraryWindow();
fetchImage()

window.addEventListener('resize', adjustLibraryWindow);
$nextButton.addEventListener('click', fetchImage);