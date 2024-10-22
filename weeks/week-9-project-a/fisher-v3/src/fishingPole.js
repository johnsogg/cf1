class FishingPole {

    static poleTipX = 100;

    constructor({ poleHeight }) {
        this.side = 'left'; // or 'right'
        this.poleTip = { x: -100, y: -poleHeight };
        this.lineLength = 200;
        this.hookSize = 10;
        this.geom = undefined;
    }

    draw({ x, y }) {
        push();
        stroke('red');
        strokeWeight(2);
        line(x, y, x + this.poleTip.x, y + this.poleTip.y);
        this.drawHook({ x, y });
        pop();
    }

    drawHook({ x, y }) {
        strokeWeight(1);
        stroke('#ffffff50');
        line(
            x + this.poleTip.x,
            y + this.poleTip.y,
            x + this.poleTip.x,
            y + this.poleTip.y + this.lineLength);
        ellipseMode(CENTER);
        fill('#20202090')
        circle(x + this.poleTip.x, y + this.poleTip.y + this.lineLength, this.hookSize);
        const whirled = toWorldCoordinates({ points: [{ x: 0, y: 0 }, { x: 10, y: 20 }] });
        const p1 = whirled[0];
        this.geom = {
            ref: p1,
            radius: this.hookSize,
            transform: getMathJsTransform(),
        }
        debugText(x + this.poleTip.x + 10, y + this.poleTip.y + 10 + this.lineLength, `Length: ${this.lineLength}, hook(world): ${p1.x}, ${p1.y}`);
    }

    setDirection(dir) {
        if (dir < 0) {
            this.poleTip.x = -FishingPole.poleTipX;
        } else {
            this.poleTip.x = FishingPole.poleTipX;
        }
    }

    isHookAboveWater() {
        return (this.lineLength + this.poleTip.y) < 0;
    }

    moveLine(game, dir) {
        // make a movement line segment and collide that with all the
        // segments that make up the lake bottom. If there's a hit
        // inside the segments, the intersection point is the limit of
        // how far we can go.
        const hookPosition = {
            x: this.poleTip.x,
            y: this.poleTip.y + this.lineLength
        }
        if (!this.geom.transform) {
            console.log('Dang this wont work');
            debugger;
        }
        const delta = toWorldCoordinates({
            points: [{ x: 0, y: 0 }, { x: 0, y: dir }],
            debug: false,
            transform: this.geom.transform
        });

        const sequence = game.world.lake.geom.bottom;
        const ix = intersectLineSegmentWithSequence({ line: delta, sequence });

        if (!ix) {
            this.lineLength = clampToRange(
                // where it 'wants' to be
                this.lineLength + dir,
                // smaller bound - should be able to get out of water
                50,
                // higher bound is handled by the above intersection thing
                9001);
        }
    }
}