class FisherGame {

    static pad = 30;
    static hintsGeom = { width: 100, height: 60 };
    static scoreGeom = { width: 100, height: 60 };
    static horizonY = 1 / 2;
    static lakeDepth = 1 / 3;
    static lakeX = 1 / 8;
    static lakeWidth = 6 / 8;

    constructor() {
        this.initializeWorld();
        this.score = 0;
    }

    initializeWorld() {
        this.world = new World({
            horizonY: height * FisherGame.horizonY,
            lakeDepth: height * FisherGame.lakeDepth,
            lakeX: width * FisherGame.lakeX,
            lakeWidth: width * FisherGame.lakeWidth,
            game: this,
        });
    }

    draw() {
        // blank the screen
        fill('black');
        noStroke();
        rect(0, 0, width, height);

        // draw all the game items
        this.world.draw();

        // draw the game UI on top
        this.drawUI();
    }

    drawUI() {
        // keyboard hints at bottom left
        push();
        fill('lightGreen');
        noStroke();
        translate(FisherGame.pad,
            height - (FisherGame.pad + FisherGame.hintsGeom.height));
        rect(0, 0, FisherGame.hintsGeom.width, FisherGame.hintsGeom.height);
        pop();

        // score drawn at bottom right
        push();
        fill('#ffffff20');
        noStroke();
        translate(width - (FisherGame.pad + FisherGame.scoreGeom.width),
            height - (FisherGame.pad + FisherGame.hintsGeom.height));
        rect(0, 0, FisherGame.scoreGeom.width, FisherGame.scoreGeom.height);
        noStroke();
        fill('#aaa');
        textAlign(CENTER, CENTER);
        textSize(40);
        text(this.score, FisherGame.hintsGeom.width / 2, FisherGame.hintsGeom.height / 2)
        pop();
    }


}