const inputTime = document.querySelector('.time-input');
const btnStartStop = document.querySelector('.start-stop');
const timer = document.querySelector('.time-left');
const indEl = document.querySelector('.indicator');
btnStartStop.disabled = true;

let timeVal;

const runTimer = () => {
    // console.log(Date.now());
    let currTime = moment();
    // console.log('currTime:', currTime.format('DD-MM-YYYY HH:mm:ss'));
    // console.log('currTime utc:', currTime.utc().format('DD-MM-YYYY HH:mm:ss'));

    let destTime = moment(`${timeVal}`, 'HH:mm');
    if (moment(destTime).isBefore(currTime)) {
        // console.log('+1');
        destTime.add(1, 'd');
    }
    // console.log('destTime:', destTime.format('DD-MM-YYYY HH:mm:ss'));

    let diffTime = moment(destTime.diff(currTime)).utc();// -02:00 UTC
    if (diffTime.isDST()) {
        diffTime.subtruct(1, 'h');
    };
    console.log('diffTime:', diffTime.format('HH:mm:ss'));
    // timer.innerHTML = diffTime.format('HH:mm:ss');
// };
    
    let timerID = setInterval(runTimer, 1000);
    if (diffTime == 0) {
        clearInterval(timerID);
    } else {
        timer.innerHTML = diffTime.format('HH:mm:ss');
    }
};
btnStartStop.addEventListener('click', () => {
    indEl.style.animationPlayState = 'running';

})

inputTime.addEventListener('input', (ev) => {
    // console.log(ev.target.value);
    timeVal = ev.target.value;
    if(ev.target.value !== '') {
        btnStartStop.disabled = false;
        btnStartStop.addEventListener('click', runTimer);
    }else{
        btnStartStop.disabled = true;
        btnStartStop.removeEventListener('click', runTimer);
    }
})