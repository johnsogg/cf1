class Lake {
    constructor({ horizonY, lakeDepth, lakeX, lakeWidth }) {
        this.horizonY = horizonY;
        this.lakeDepth = lakeDepth;
        this.lakeWidth = lakeWidth;
        this.lakeX = lakeX;
        this.buildLakeBottom();
    }

    buildLakeBottom() {
        // for now, this is a triangular bottom. The plan is to
        // create something based on a circular bottom, and jiggle
        // the points up or down a little bit to get an organic-ish shape.
        let topLeft = { x: this.lakeX, y: this.horizonY };
        let topRight = { x: this.lakeX + this.lakeWidth, y: this.horizonY };
        let bottom = { x: (topLeft.x + topRight.x) / 2, y: this.horizonY + this.lakeDepth };
        this.lakeBottom = [topLeft, bottom, topRight];
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
        fill('lightblue');
        beginShape();
        this.lakeBottom.forEach(p => vertex(p.x, p.y));
        endShape();
        const bottom = toWorldCoordinates({
            points: this.lakeBottom
        });
        this.geom = {
            bottom,
            transform: getMathJsTransform(),
        }
        pop();
    }
}