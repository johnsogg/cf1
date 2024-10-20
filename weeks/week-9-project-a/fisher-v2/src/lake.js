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
        const x = width / 8;
        const y = this.horizonY;
        const w = (6 * width) / 8;
        const h = this.lakeDepth;
        rect(x, y, w, h);
        const bottom = toWorldCoordinates({
            points: [{ x, y: y + h }, { x: x + w, y: y + h }],
        });
        this.geom = {
            bottom,
            transform: getMathJsTransform(),
        }
        fill('red');
        circle(x, y + h, 20);
        circle(x + w, y + h, 20);
        pop();
    }
}