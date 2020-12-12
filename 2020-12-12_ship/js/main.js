const ship1 = {
    hp: 100,
    damage: 4
};

const ship2 = {
    hp: 40,
    damage: 15
};
let str = '';
let round = 0;

while(ship1.hp > 0 && ship2.hp > 0) {
    round += 1;
    ship1.hp = ship1.hp - ship2.damage;
    ship2.hp = ship2.hp - ship1.damage;
    str = `${str} <div>Round #  ${round} ship1: ${ship1.hp}, ship2: ${ship2.hp}</div>\n`
};

if (ship1.hp > 0) {
    str = `${str} <div>ship1 Win!</div>`
} else {
    str = `${str} <div>ship2 Win!</div>`
};

document.querySelector('.main').innerHTML = str;


