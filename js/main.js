// ==========================================================================
// Main
// ==========================================================================

import { adjustLibraryWindow } from './modules/layout.js';
import { fetchImage } from './modules/generator.js';
import { $nextButton } from './modules/generator.js';
import { $accountSelect } from './modules/account.js';
import { handleSelectChange } from './modules/account.js';
import { hideAccountNew } from './modules/account.js';
import { $cancelButton } from './modules/account.js';

adjustLibraryWindow();
fetchImage()

window.addEventListener('resize', adjustLibraryWindow);
$nextButton.addEventListener('click', fetchImage);
$accountSelect.addEventListener('change', handleSelectChange);
$cancelButton.addEventListener('click', hideAccountNew);
