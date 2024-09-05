// ==========================================================================
// Main
// ==========================================================================

import { accountElements } from './modules/elements.js';
import { generatorElements } from './modules/elements.js';

import { selectedAccount } from './modules/account.js';
import { handleSelectChange } from './modules/account.js';
import { addAccount } from './modules/account.js';
import { cancelAddAccount } from './modules/account.js';

import { currentImgURL } from './modules/generator.js';
import { fetchImage } from './modules/generator.js';

import { adjustLibraryWindow } from './modules/layout.js';

import { loadLibrary } from './modules/library.js';
import { clearLibrary } from './modules/library.js';
import { insertImage } from './modules/library.js';

adjustLibraryWindow();
fetchImage()

window.addEventListener('resize', adjustLibraryWindow);
generatorElements.nextButton.addEventListener('click', fetchImage);
accountElements.addButton.addEventListener('click', addAccount);
accountElements.cancelButton.addEventListener('click', cancelAddAccount);

accountElements.accountSelect.addEventListener('change', function(){
    handleSelectChange();
    
    if (selectedAccount) {
        loadLibrary(selectedAccount.library);
    } else {
        clearLibrary()
    }
});

generatorElements.saveButton.addEventListener('click', function(){
    if (selectedAccount) {
        selectedAccount.library.push(currentImgURL);
        insertImage(currentImgURL);
    } else {
        console.log('no account selected');
    }
});
