// ==========================================================================
// Main
// ==========================================================================

import { accountElements, generatorElements } from './modules/elements.js';
import { selectedAccount, handleSelectChange, addAccount, cancelAddAccount } from './modules/account.js';
import { currentImgURL, fetchImage } from './modules/generator.js';
import { adjustLibraryWindow } from './modules/layout.js';
import { loadLibrary, clearLibrary, insertImage } from './modules/library.js';

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
