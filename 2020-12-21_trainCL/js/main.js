const btnLeftEl = document.querySelector('.left');
const btnRightEl = document.querySelector('.right');
const btnLampEl = document.querySelector('.lampbutton');
const lampEl = document.querySelector('.lamp');
const trainEl = document.querySelector('.railway');

const leftFunc = () => {
    trainEl.style.left = getComputedStyle(trainEl).left;
    trainEl.classList.toggle('go-l');
    trainEl.classList.toggle('go-r');

    if(trainEl.style.animationPlayState === 'paused' 
    || getComputedStyle(trainEl).animationPlayState === 'paused') 
    {
        trainEl.style.animationPlayState = 'running';
    }else{
        trainEl.style.animationPlayState = 'paused';
    }
    btnLeftEl.classList.toggle('color3');
    
}
btnLeftEl.addEventListener('click', leftFunc);

const rightFunc = () => {
    if(trainEl.style.animationPlayState === 'paused' 
    || getComputedStyle(trainEl).animationPlayState === 'paused') 
    {
        trainEl.style.animationPlayState = 'running';
    }else{
        trainEl.style.animationPlayState = 'paused';
    }
    btnRightEl.classList.toggle('color3');
}
btnRightEl.addEventListener('click', rightFunc);

const lampFunc = () => {
    lampEl.classList.toggle('color1');
    lampEl.classList.toggle('color2');
    btnLampEl.classList.toggle('color2');
}
btnLampEl.addEventListener('click', lampFunc);

document.addEventListener('keydown', (e) => {
    switch (e.code) {
        case "ArrowLeft":
            leftFunc();
            break;
        case "ArrowRight":
            rightFunc();
            break;
        case "KeyF":
            lampFunc();
            break;
    }
});