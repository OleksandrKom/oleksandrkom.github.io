const btnRed = document.querySelector('.btn-red');
const btnYell = document.querySelector('.btn-yellow');
const btnGr = document.querySelector('.btn-green');
const redEl = document.querySelector('.red-lights');
const yelEl = document.querySelector('.yellow-lights');
const grEl = document.querySelector('.green-lights');

btnRed.addEventListener('click', () => {
    redEl.classList.toggle('color1');
    yelEl.classList.remove('color2');
    grEl.classList.remove('color3');
})

btnYell.addEventListener('click', () => {
    yelEl.classList.toggle('color2');
    redEl.classList.remove('color1');
    grEl.classList.remove('color3');
})

btnGr.addEventListener('click', () => {
    grEl.classList.toggle('color3');
    yelEl.classList.remove('color2');
    redEl.classList.remove('color1');
})