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

function generateSkyColors() {
  // make some color palettes
  const tuscon = ["rgb(255, 0, 0)", "rgb(128, 255, 128)", "rgb(40, 40, 128)"];
  const paris = ["#a25333", "#dbcd95", "#a2c3a6", "#5b2e30", "#848666"];
  const earth = ["rgb(0, 82, 147)", "rgb(18, 146, 211)", "rgb(142, 191, 224)", "rgb(206, 216, 228)"];
  const sunset = ["#441404", "#9c2b04", "#f4bf07", "#ec962d"];

  // add them to a master list
  const palettes = [tuscon, paris, earth, sunset];

  // pick a random one of those & return it
  return random(palettes);

}