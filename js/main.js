// ==========================================================================
// Main
// ==========================================================================

import { $nextButton } from './modules/generator.js';
import { $saveButton } from './modules/generator.js';
import { $accountSelect } from './modules/account.js';
import { $addButton } from './modules/account.js';
import { $cancelButton } from './modules/account.js';

import { selectedAccount } from './modules/account.js';
import { currentImgURL } from './modules/generator.js';

import { adjustLibraryWindow } from './modules/layout.js';
import { fetchImage } from './modules/generator.js';
import { handleSelectChange } from './modules/account.js';
import { hideAccountNew } from './modules/account.js';
import { addAccount } from './modules/account.js';

adjustLibraryWindow();
fetchImage()

window.addEventListener('resize', adjustLibraryWindow);
$nextButton.addEventListener('click', fetchImage);
$accountSelect.addEventListener('change', handleSelectChange);
$addButton.addEventListener('click', addAccount);
$cancelButton.addEventListener('click', hideAccountNew);

$saveButton.addEventListener('click', function(){
    selectedAccount.library.unshift(currentImgURL);
});
