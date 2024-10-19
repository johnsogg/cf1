class Sky {
    constructor({ horizonY }) {
        this.horizonY = horizonY;
    }

    draw() {
        fill('skyblue');
        rect(0, 0, width, this.horizonY);
    }
}