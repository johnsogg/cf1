let count = 0;
let limit = 10;

while (count < limit) {
    print("Iteration: " + count);
    count = count + 1;
}

let limit = 10;
for (let count = 0; count < limit; count++) {
    print("Iteration: " + count);
}

let flip = 'tales';
do {
    flip = flipACoin();
} while (flip !== 'tales');

let numRows = 4;
let numCols = 8;
for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
        print("Row", i, "Col", j);
    }
}

function glurb(a, b) {
    if (a > 2 * b) {
        console.log("A is big");
    } else {
        console.log("A isn't that big");
    }
    if (a > b) {
        console.log("(bigger than b)")
    }
    console.log(a * b);
}

function numberCubed(x) {
    return x * x * x;
}

const v = numberCubed(5); // v will be 125