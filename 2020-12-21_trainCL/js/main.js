const btnLeftEl = document.querySelector('.left');
const btnRightEl = document.querySelector('.right');
const btnLampEl = document.querySelector('.lampbutton');
const lampEl = document.querySelector('.lamp');
const trainEl = document.querySelector('.railway');

btnLeftEl.addEventListener('click', () => {
    
})

btnRightEl.addEventListener('click', () => {
    if(trainEl.style.animationPlayState === 'running') {
        trainEl.style.animationPlayState = 'paused';
    }else{
        trainEl.style.animationPlayState = 'running';
    }
    btnRightEl.classList.toggle('color3');
})

btnLampEl.addEventListener('click',  () => {
    lampEl.classList.toggle('color1');
    lampEl.classList.toggle('color2');
    btnLampEl.classList.toggle('color3');
})