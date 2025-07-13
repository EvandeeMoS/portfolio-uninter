const mailTo = document.querySelector('[data-mailTo]');
const emailInput = document.getElementById('name-input');
const headerEl = document.querySelector('[data-header-el]');
const compactNavBtn = document.querySelector('[data-compact-nav-btn]');
const bars = compactNavBtn.querySelectorAll('span');

emailInput.addEventListener('input', event => {
    if (emailInput.value.length == 0) {
        mailTo.textContent = "--";
        return
    }
    mailTo.textContent = emailInput.value;
})

function openCompactHeaderNav() {
    if (headerEl.classList.contains('header-compact-open')) {
        animateCompactNavBtn('close')
        headerEl.classList.remove('header-compact-open');
        return;
    }
    animateCompactNavBtn('open')
    headerEl.classList.add('header-compact-open');
}

function animateCompactNavBtn(animation) {
    if (animation === 'close') {
        bars[0].classList.remove('bar1-end-position');
        bars[1].classList.remove('bar2-end-position');
        bars[2].classList.remove('bar3-end-position');
        return;
    }
    bars[0].classList.add('bar1-end-position');
    bars[1].classList.add('bar2-end-position');
    bars[2].classList.add('bar3-end-position');
}
