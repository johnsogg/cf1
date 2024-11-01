const cook = (v) => {
    if (v === '🥔') return '🍟';
    if (v === '🐮') return '🍔';
    if (v === '🥬') return '🥗';
    if (v === '🐷') return '🥓';
}

const isVeg = (v) => {
    if (v === '🥔' || v === '🥬') return true;
    else return false;
}

eat = ((v, a) => '💩');

const raw = ['🥔', '🐮', '🥬', '🐷'];

raw.forEach(thing => console.log(thing + " is ready to go"));

const cooked = raw.map(cook); // ['🍟','🍔','🥗','🥓']

const altCooked = raw.map(
    (ingredient) => ingredient + " is now cooked!"
);

const eatenAll = cooked.reduce(eat); // '💩'

// chain them together
const eatenVeg = raw // [ '🥔', '🐮', '🥬', '🐷' ] - original data
    .filter(isVeg)   // [ '🥔', '🥬' ]            - filter by vegetarian only
    .map(cook)       // [ '🍟', '🥗' ]            - prepare the veggies!
    .reduce(eat);    // '💩'                      - reduce gives a single value

const points = [
    { x: -10, y: -10 }, // 🚫 x out of range
    { x: 30, y: 30 },   // ✅
    { x: 40, y: 80 },   // ✅
    { x: 70, y: 70 }    // 🚫 x out of range
];

const sumOfYInZone = points
    .filter(pt => pt.x >= 10 && pt.x <= 50 && pt.y >= 0 && pt.y <= 100)
    .map(pt => pt.y)
    .reduce((v, sum) => sum + v, 0);

// console.log("Sum of y value in region is", sumOfYInZone); // 110