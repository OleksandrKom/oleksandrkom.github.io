const PLACES = 33;



//generate arr

const arrPlaces = []; //main arr

const generatePlaces = () => {
    for (let i = 0; i < PLACES; i++) {
        arrPlaces.push({
            id: i,
            occupied: false,
            time: '--:--',
        });
    }
};
generatePlaces();

//function get free spaces

const occuPlaces = () => {
    return arrPlaces.reduce((sum, val) => {
        if(val.occupied) sum += 1;
        return sum;
    }, 0);
};

//timer + free + occu spaces

const currentTimeEl = document.querySelector('.current-time')
let id;
const runTime = () => {
    id = setInterval( () => {
        let time = moment();
        let currTime = time.format('DD-MM-YYYY HH:mm:ss')
        currentTimeEl.innerHTML = `${currTime}`
    }, 1000);
};
runTime();

const freeSpacesEl = document.querySelector('.free-spaces');
const occupiedSpaceEl = document.querySelector('.occupied-spaces');

const refreshInfoBoard = () => {
    let temp = occuPlaces();
    occupiedSpaceEl.innerHTML = `occupied: ${temp}`;
    freeSpacesEl.innerHTML = `free: ${arrPlaces.length - temp}`;
}
refreshInfoBoard();



//отобразить паркоместа с указанием id, свободно/занято, время занятого

const mainEl = document.querySelector('.main');

const renderParkPlaces = () => {
    mainEl.innerHTML = arrPlaces.reduce((str, el) => {
        return `${str}
            <div id="${ el.id }" class="parking-space">
                ${el.id} <br>
                ${el.occupied ? 'occupied' : 'free'} <br>
                ${el.time}
            </div>
        `;
    }, '');
}
renderParkPlaces();

const carinEl = document.querySelector('.car-in');
const caroutEl = document.querySelector('.car-out');
const overlayEl = document.querySelector('.overlay');
const btnCloseEl = document.querySelectorAll('.modal-close');
const inpFromTimeEl = document.querySelector('.from-time');
const btnOkEl = document.querySelector('.btn-ok');
const btnYesEl = document.querySelector('.btn-yes');
const btnNoEl = document.querySelector('.btn-no');
const occuTimeEl = document.querySelector('.occu-time');

const modalShowRemover = () => {
    carinEl.classList.remove('modal-show');
        caroutEl.classList.remove('modal-show');
        overlayEl.classList.remove('modal-show');
};

btnCloseEl.forEach(element => {
    element.addEventListener('click', modalShowRemover)
});



mainEl.addEventListener('click', (ev) => {
    if(ev.target.id !=='') {
        let i = Number(ev.target.id);
        if(!arrPlaces[i].occupied) {
            carinEl.classList.add('modal-show');
            overlayEl.classList.add('modal-show');
            inpFromTimeEl.value = moment().format('HH:mm');

            const clickBtnOk = () => {
                arrPlaces[i].time = inpFromTimeEl.value;
                arrPlaces[i].occupied = true;
                modalShowRemover();
                renderParkPlaces();
                btnOkEl.removeEventListener('click', clickBtnOk);
            }
            btnOkEl.addEventListener('click', clickBtnOk);
        }else{
            caroutEl.classList.add('modal-show');
            overlayEl.classList.add('modal-show');
            let currTime = moment();
            let destTime = moment(arrPlaces[i].time, 'HH:mm');
            occuTimeEl.innerHTML = moment(currTime - destTime).utc().format('HH:mm');

            const clickBtnYes = () => {
                arrPlaces[i].time = '--:--';
                arrPlaces[i].occupied = false;
                modalShowRemover();
                renderParkPlaces();
                btnYesEl.removeEventListener('click', clickBtnYes);
            };

            const clickBtnNo = () => {
                modalShowRemover();
                btnNoEl.removeEventListener('click', clickBtnNo);
            };
            btnYesEl.addEventListener('click', clickBtnYes);
            btnNoEl.addEventListener('click', clickBtnNo);
        }
    };
});