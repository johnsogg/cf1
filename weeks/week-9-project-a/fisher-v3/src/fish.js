class Fish {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.v = { x: 0.8, y: 0 };
    }

    draw() {
        fill('midnightblue');
        rect(this.x - (this.w / 2), this.y - (this.h / 2), this.w, this.h);
        this.geom = {
            transform: getMathJsTransform()
        }
    }

    move() {
        const next = {
            x: this.x + this.v.x,
            y: this.y + this.v.y
        };

        const delta = [this, next];
        const sequence = game.world.lake.geom.bottom;
        const ix = intersectLineSegmentWithSequence({ line: delta, sequence, debug: true });
        if (ix) {
            this.v = { x: -this.v.x, y: this.v.y };
        } else {
            this.x += this.v.x;
            this.y += this.v.y;
        }
    }
}