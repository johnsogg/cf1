class FishingPole {

    static poleTipX = 100;

    constructor({ poleHeight }) {
        this.side = 'left'; // or 'right'
        this.poleTip = { x: -100, y: -poleHeight };
        this.lineLength = 200;
        this.hookSize = 10;
    }

    draw() {
        push();
        stroke('red');
        strokeWeight(2);
        line(0, 0, this.poleTip.x, this.poleTip.y);
        this.drawHook();
        pop();
    }

    drawHook() {
        strokeWeight(1);
        stroke('#ffffff50');
        line(
            this.poleTip.x,
            this.poleTip.y,
            this.poleTip.x,
            this.poleTip.y + this.lineLength);
        translate(this.poleTip.x,
            this.poleTip.y + this.lineLength);
        ellipseMode(CENTER);
        fill('#20202090')
        circle(0, 0, this.hookSize);
        // debugText(10, 10, `Line Length: ${this.lineLength}`);
    }

    setDirection(dir) {
        if (dir < 0) {
            this.poleTip.x = -FishingPole.poleTipX;
        } else {
            this.poleTip.x = FishingPole.poleTipX;
        }
    }

    isHookAboveWater() {
        console.log(`${this.lineLength}, ${this.poleTip.y}, ${this.lineLength + this.poleTip.y}`);
        return (this.lineLength + this.poleTip.y) < 0;
    }

    moveLine(dir) {
        this.lineLength = clampToRange(
            // where it 'wants' to be
            this.lineLength + dir,
            // smaller bound - should be able to get out of water
            50,
            // higher bound - this should be f(lake bottom)
            300);
    }
}