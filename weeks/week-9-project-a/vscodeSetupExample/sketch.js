let tweety;

function setup() {
  createCanvas(400, 400);
  tweety = new Boid(200, 200);
  console.log('Tweety:', tweety);
}

function draw() {
  background(220);
  tweety.draw();
}
