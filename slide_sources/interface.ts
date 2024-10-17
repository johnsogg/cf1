
interface Boid {
    draw: VoidFunction;
    move: VoidFunction;
    notice: VoidFunction;
}

class ScaredBoid implements Boid {
    constructor() { /* TODO */ }
    draw() { /* TODO */ }
    move() { /* TODO */ }
    notice() { /* TODO */ }
}

class FollowerBoid implements Boid {
    constructor() { /* TODO */ }
    draw() { /* TODO */ }
    move() { /* TODO */ }
    notice() { /* TODO */ }
}

class PickyBoid implements Boid {
    constructor() { /* TODO */ }
    draw() { /* TODO */ }
    move() { console.log('picky!') }
    notice() { /* TODO */ }
}

const pb = new PickyBoid();
pb.move();
console.log(pb);