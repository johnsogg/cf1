let game;

function setup() {
  createCanvas(windowWidth, windowHeight);
  game = new FisherGame();
}

function draw() {
  handleInteraction();

  background(220);
  game.draw();
}


function handleInteraction() {
  if (keyIsPressed) {
    if (key === 'a') {
      game.world.fisher.move(-1);
    }

    if (key === 'd') {
      game.world.fisher.move(1);
    }

    if (key === 'w') {
      game.world.fisher.pole.moveLine(-1);
    }

    if (key === 's') {
      game.world.fisher.pole.moveLine(1);
    }
  }
}

function clampToRange(val, low, high) {
  if (val < low) {
    return low;
  }
  if (val > high) {
    return high;
  }
  return val;
}

function debugText(x, y, msg) {
  push();
  noStroke();
  fill('white');
  text(msg, x, y);
  pop();
}