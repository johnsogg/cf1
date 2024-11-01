// first declare variables to hold things
let soundFile;
let img;
let graphicObject;

function preload() {
  // before the app starts, load all the assets. this can take a while so
  // we do it in preload().
  soundFile = loadSound("assets/sample-3s.mp3");
  img = loadImage("assets/jupiter.png");
}

function setup() {
  // now establish the initial rendering state
  createCanvas(windowWidth, windowHeight);
  soundFile.setVolume(0.5);
  // the graphicObject isn't really necessary, as we could just render the
  // image directly, but it does show how to use a class to hold images.
  graphicObject = new SomeGraphic(img, 10, 10);
}

function draw() {
  // fill the background with black
  background(0);
  // then render the graphic by calling its display() method which we define
  graphicObject.display();
}

function mousePressed() {
  // toggle sound on/off when the mouse is pressed
  if (!soundFile.isPlaying()) {
    soundFile.loop();
  } else {
    soundFile.pause();
  }
}

class SomeGraphic {
  // this isn't really necessary but if you have lots of graphics this could
  // be helpful, as they retain their own image source, position, and ability
  // to draw to the screen.
  constructor(image, x, y) {
    this.image = image;
    this.x = x;
    this.y = y;
  }

  display() {
    // the image() function is what actually draws a graphic to screen. Just
    // give it the data file and x/y positions.
    image(this.image, this.x, this.y);
  }
}
