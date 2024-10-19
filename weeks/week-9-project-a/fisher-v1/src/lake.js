class Lake {
    constructor({ horizonY, lakeDepth, lakeX, lakeWidth }) {
        this.horizonY = horizonY;
        this.lakeDepth = lakeDepth;
        this.lakeWidth = lakeWidth;
        this.lakeX = lakeX;
    }

    draw() {
        push();
        fill('blue');
        noStroke();
        rect(width / 8, this.horizonY, (6 * width) / 8, this.lakeDepth);
        pop();
    }
}