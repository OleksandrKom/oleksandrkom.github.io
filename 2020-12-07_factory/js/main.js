const carModel = {
	arr: [],
};

const color = ['yellow', 'green', 'red', 'blue', 'orange'];
const transmission = ['manual', 'auto'];
const airCondit = ['yes', 'no'];
const salon = ['leather', 'cloth', 'combined'];

function Item(col, transm, cond, sal) {
    this.color = col;
    this.transmission = transm;
    this.airCondit = cond;
    this.salon = sal;
} 

let count = 1;
color.forEach(clr => {
    transmission.forEach(trsm => {
        airCondit.forEach(cndr => {
            salon.forEach(sln => {
								let tempObj = new Item(clr, trsm, cndr, sln);
								let tempStr = `${String(count).padStart(4,'0')}${clr[0]}${trsm[0]}${cndr[0]}${sln[0]}`
								tempObj.code = tempStr;
								carModel.arr.push(tempObj);
								count++;
            })
        })
    })
})
console.dir(carModel);