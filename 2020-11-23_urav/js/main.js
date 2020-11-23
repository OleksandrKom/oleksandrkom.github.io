let a = null;
let b = null;
let c = null;
let discr = null;
// discr = b**2 - 4*a*c;
a = 1;
b = -2;
c = -3;

let mainEl = document.querySelector('.main');
let mainEl2 = document.querySelector('.main_2');
mainEl2.innerHTML = `a = ${a} b = ${b} c = ${c}`;

// discr = 0;
discr = b**2 - 4*a*c;
xOne = (-b + Math.sqrt(discr)) / (2*a);
xTwo = (-b - Math.sqrt(discr)) / (2*a);
if (discr > 0) {
    mainEl.innerHTML = `${xOne}; ${xTwo}`;
} else if (discr === 0) {
    mainEl.innerHTML = xOne;
} else  {
    mainEl.innerHTML = undefined;
}

console.log(xOne, xTwo);
console.log(discr);