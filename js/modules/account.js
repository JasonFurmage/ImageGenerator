// ==========================================================================
// Account
// ==========================================================================

export const $accountSelect = document.querySelector('#accountSelect');
export const $accountNew = document.querySelector('#accountNew');

export function handleSelectChange() {
    const selectedValue = $accountSelect.value;

    if (selectedValue === 'new') {
        $accountNew.style.display = "block";
    } else {
        $accountNew.style.display = "none";
    }
}
