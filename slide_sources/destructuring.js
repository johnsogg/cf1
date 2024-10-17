// destructuring.js
//
// You can destructure arrays and objects. There are a few flavors of this:
// 1. On assignment: const { x, y } = myObject;
// 2. On function execution: ({x, y}) => { /* code */ };
// 3. To copy: const voltronAtOrigin = {...myObject, x: 0, y: 0};

const badGuy = {
    x: 733,
    y: 394,
    hitpoints: 900,
    defense: 100,
    damage: 200,
};

const players = ['rock', 'paper', 'scissors'];

{
    // we can tease out just the things we want. This creates new x and y
    // variables that are copied from the badGuy.
    const { x, y } = badGuy;
    console.log("x and y:", x, y); // x and y: 733 394
    // same for arrays. This gives us variables for rock and paper:
    const [p1, p2] = players;
    console.log('p1 and p2:', p1, p2); // p1 and p2: rock paper
}


// If we write a function that will take an object, we can do it the obvious
// way like this, without destructuring:
function oldSchool(someObject) {
    const x = someObject.x;
    const y = someObject.y;
    // now do stuff with x and y
    console.log('oldSchool has x and y:', x, y);
}

oldSchool(badGuy); // oldSchool has x and y: 733 394

// A different and often more expressive way of doing this is to destructure
// the object on entry to the function:
function newFangled({ x, y }) {
    console.log('newFangled has x and y:', x, y);
}

newFangled(badGuy); // newFangled has x and y: 733 394

function oldSchoolFromArray(combatants) {
    const p1 = combatants[0];
    const p2 = combatants[1];
    console.log("oldSchoolFromArray:", p1, p2);
}
oldSchoolFromArray(players); // oldSchoolFromArray: rock paper

function newFangledFromArray([p1, p2]) {
    console.log("newFangledFromArray:", p1, p2);
}
newFangledFromArray(players); // newFangledFromArray: rock paper

// Last, you can use the 'spread' operator to create new objects and arrays.
const copyOfBadGuy = { ...badGuy };
console.log("copyOfBadGuy should be the same as the original badGuy:");
console.log('  badGuy:     ', badGuy);
console.log('  copyOfBadGuy', copyOfBadGuy);

// If there is more than one object, or if there is an object with other
// key/value pairs, it will combine things from left to right. In the case of
// objects, it will overwrite values that appear later in the expression.
const buffedBadGuy = { ...badGuy, hitpoints: badGuy.hitpoints + 200, defense: 200 };
console.log("buffedBadGuy should have more HP and defense than the original badGuy:");
console.log('  badGuy:     ', badGuy);
console.log('  buffedBadGuy', buffedBadGuy);

// You can use this to make 'named' parameters to functions by expecting an
// object argument, and then destructuring everything by name:
function calculateDistanceToOrigin({ x, y }) {
    return Math.sqrt(x * x + y * y);
}
const dist = calculateDistanceToOrigin({ x: 4, y: 3 });
console.log("Distance from (4, 3) to the origin:", dist); // Distance from (4, 3) to the origin: 5