// ==========================================================================
// Account
// ==========================================================================

export const $accountSelect = document.getElementById('accountSelect');
export const $accountNew = document.getElementById('accountNew');

export function handleSelectChange() {
    const selectedValue = $accountSelect.value;

    if (selectedValue === 'new') {
        $accountNew.style.display = "block";
    } else {
        $accountNew.style.display = "none";
    }
}
