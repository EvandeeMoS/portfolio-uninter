const mailTo = document.querySelector('[data-mailTo]');
const emailInput = document.getElementById('name-input');

emailInput.addEventListener('input', event => {
    if (emailInput.value.length == 0) {
        mailTo.textContent = "--";
        return
    }
    mailTo.textContent = emailInput.value;
})
