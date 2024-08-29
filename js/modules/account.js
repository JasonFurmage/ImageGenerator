// ==========================================================================
// Account
// ==========================================================================

export const $accountSelect = document.getElementById('accountSelect');
export const $accountNew = document.getElementById('accountNew');
export const $cancelButton = document.getElementById('cancelButton');

export function handleSelectChange() {
    const selectedValue = $accountSelect.value;

    if (selectedValue === 'new') {
        $accountNew.style.display = "block";
    } else {
        $accountNew.style.display = "none";
    }
}

export function hideAccountNew() {
    $accountNew.style.display = "none";
    $accountSelect.options[0].selected = true;
}
