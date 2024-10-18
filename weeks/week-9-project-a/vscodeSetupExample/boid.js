class Boid {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 100;
        this.h = 140;
    }

    draw() {
        fill('yellow');
        stroke('black');
        ellipse(this.x, this.y, this.w, this.h);
    }
}