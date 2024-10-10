class Boid {
    constructor(x, y, rad, color) {
        this.x = x; // constructor's parameters (above) can be assigned to
        this.y = y; // a local copy of that data. The object we're making
        this.rad = rad; // is named 'this'. You can access object fields
        this.color = color; // with the dot operator, as in this.color

        this.dx = random(-1, 1); // rate of change in x
        this.dy = random(-1, 1); // rate of change in y
    }

    draw() {
        push();
        fill(this.color);
        circle(this.x, this.y, this.rad);
        pop();
    }

    move() {
        this.x += this.dx;
        this.y += this.dy;
    }
}
