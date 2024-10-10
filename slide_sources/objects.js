/*
   funcA and funcB show how primitive values are passed around by
   copying their values. When we call funcB, it modifies its copy
   of the data, but that change isn't persistent because it is
   working off of a copy.
 */
function funcA() {
    let x = 42;
    console.log("in funcA, value starts out as", x);
    funcB(x);
    console.log("back in funcA, the value of x is:", x);
}

function funcB(x) {
    console.log("funcB got", x);
    x = 611;
    console.log("funcB just changed the value to", x);
}

funcA();


let somePerson = {
    firstName: 'James',
    middleName: 'Tiberius',
    lastName: 'Kirk',
    age: 35,
    occupation: 'Space Cowboy',
    married: false
}

function movePoint(pt) {
    pt.x = pt.x + 55;
    pt.y = pt.y + 111;
}

let somePoint = {
    x: 123,
    y: 678,
}

console.log("somePoint (before):", somePoint);
movePoint(somePoint);
console.log("somePoint (after):", somePoint);

function squareNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] * numbers[i];
    }
}

let vals = [1, 2, 3, 4];
console.log("(before) vals:", vals); // [ 1, 2, 3, 4 ]
squareNumbers(vals);
console.log("(after) vals:", vals); // [ 1, 4, 9, 16 ]

class Person {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
}

const p1 = { firstName: "James", lastName: "Kirk" }
const p2 = { ...p1 };
p2.firstName = "Jim";
console.log(p1, p2);