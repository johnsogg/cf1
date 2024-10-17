class Square {
    constructor(sideLength) { this.sideLength = sideLength; }
    getArea() { return this.sideLength * this.sideLength; }
}

class Circle {
    constructor(radius) { this.radius = radius; }
    getArea() { return Math.PI * this.radius * this.radius; }
}

const s = new Square(5);
const c = new Circle(5);

const shapes = [s, c];

shapes.forEach(shape => console.log(shape.getArea()));

for (let i = 0; i < shapes.length; i++) {
    console.log(shapes[i].getArea());
}