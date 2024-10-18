class FisherGame {

    static pad = 30;
    static hintsGeom = { width: 100, height: 60 };
    static scoreGeom = { width: 100, height: 60 };

    constructor() {
        this.initializeWorld();
    }

    initializeWorld() {
        this.world = new World();
    }

    draw() {
        // blank the screen
        fill('black');
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
        translate(FisherGame.pad,
            height - (FisherGame.pad + FisherGame.hintsGeom.height));
        rect(0, 0, FisherGame.hintsGeom.width, FisherGame.hintsGeom.height);
        pop();

        // score drawn at bottom right
        push();
        fill('lightBlue');
        translate(width - (FisherGame.pad + FisherGame.scoreGeom.width),
            height - (FisherGame.pad + FisherGame.hintsGeom.height));
        rect(0, 0, FisherGame.scoreGeom.width, FisherGame.scoreGeom.height);
        pop();
    }
}