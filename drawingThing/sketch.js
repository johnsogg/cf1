let brushColor = "green";
let brushSize = 20;

function setup() {
  createCanvas(500, 500);
  // background(255);
}

function draw() {
  if (mouseIsPressed) {
    console.log("in draw, brushColor is:", brushColor);
    fill(200, 40, 40);
    strokeWeight(brushSize);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  fill(200, 40, 40);
  stroke(200, 40, 40);
  rect(0, 0, 100, 100);
  line(mouseX, mouseY, pmouseX, pmouseY);
}
