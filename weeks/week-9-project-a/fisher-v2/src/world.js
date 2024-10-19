class World {
    constructor({ horizonY, lakeDepth, lakeWidth, lakeX }) {
        this.sky = new Sky({ horizonY });
        this.lake = new Lake({ horizonY, lakeDepth, lakeWidth, lakeX });
        this.fisher = new Fisher({ horizonY, lakeMidX: lakeX + (lakeWidth / 2), lakeWidth });
    }

    draw() {
        this.sky.draw();
        this.lake.draw();
        this.fisher.draw();
        stroke('white');
        line(0, height / 2, width, height / 2);
    }
}