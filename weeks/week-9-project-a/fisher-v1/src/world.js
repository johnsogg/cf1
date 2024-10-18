class World {
    constructor() {
        this.sky = new Sky();
    }

    draw() {
        this.sky.draw();

        stroke('white');
        line(0, height / 2, width, height / 2);
    }
}