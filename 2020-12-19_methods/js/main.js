//Исходный массив [5, 23, -110, 3, 18, 0, 14], данные в нём не менять. a.Вывести в консоль только нечетные числа; b.Вывести в консоль массив, каждая ячейка которого будет увеличена на 20; c.Вывести в консоль массив, состоящий только из положительных нечетных чисел; d.Вывести в консоль сумму остатков от целочисленных делений на 3 каждой ячейки. e.Проверить, и вывести в консоль результат проверки, есть ли в массиве число 5. 

let arrNum = [5, 23, -110, 3, 18, 0, 14];

let numNechet = arrNum.filter((elem, index) => {
		return elem % 2 !==0;
});
console.log(numNechet);

let numPlus = arrNum.map((value, index) => {
		return value = value + 20;
});
console.log(numPlus);

let numPlusNechet = arrNum.filter((elem, index) => {
		return elem % 2 !== 0 && elem > 0;
});
console.log(numPlusNechet);

let numSumDiv = arrNum.reduce((sum, elem, index) => {
		let temp = elem % 3;
		return sum + temp;
}, 0);
console.log(numSumDiv);

let numFive = arrNum.includes(5);
console.log(numFive);

//f.Получить массив без первого элемента, вывести в консоль. g.Отсортировать массив по возрастанию, вывести в консоль. h) Определить, есть ли в массиве числа, кратные 5.

arrNum.splice(0, 1);
console.log(arrNum);

arrNum.sort((a, b) => {
		return a - b;
});
console.log(arrNum);

let numDivis = arrNum.some((elem, index) => {
		return elem % 5 == 0;
});
console.log(numDivis);
