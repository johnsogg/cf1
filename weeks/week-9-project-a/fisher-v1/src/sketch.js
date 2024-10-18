let game;

function setup() {
  createCanvas(windowWidth, windowHeight);
  game = new FisherGame();
}

function draw() {
  background(220);
  game.draw();
}
