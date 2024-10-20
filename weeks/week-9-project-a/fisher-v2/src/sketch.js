let game;

function setup() {
  // pixelDensity(1);
  createCanvas(windowWidth, windowHeight);
  game = new FisherGame();
}

function draw() {
  handleInteraction();

  background(220);
  game.draw();

  // debugging here
  const g = game.world.lake.geom;
  if (g) {
    // console.log(g);
    stroke('red');
    strokeWeight(2);
    for (let i = 0; i < g.bottom.length - 1; i++) {
      const ptA = g.bottom[i];
      const ptB = g.bottom[i + 1];
      line(ptA.x, ptA.y, ptB.x, ptB.y);
    }
  }
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
      game.world.fisher.pole.moveLine(game, -1);
    }

    if (key === 's') {
      game.world.fisher.pole.moveLine(game, 1);
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

/** Gives the drawingContext.transform in a mathjs Matrix. This lets you use any
 * mathjs function that takes a matrix. */
function getMathJsTransform() {
  const t = drawingContext.getTransform();
  const m = math.matrixFromColumns([t.a, t.b, 0], [t.c, t.d, 0], [t.e, t.f, 1]);
  return m;
}

/**
 * Translate a list of local coordinates (according to
 * `drawingContext.getTransform()`) to a list of points that are translated into
 * world coordinates. The list of points are {x, y} objects.
 */
function toWorldCoordinates({ points, debug = false, transform }) {
  const t = transform || getMathJsTransform();

  // Note: if the pixel density is anything other than one, we have to 
  // adjust all points by scaling them by the current device pixel density.
  // So you'll see down below how I'm multiplying x and y by ss.
  const ss = pixelDensity();
  const inv = math.inv(t);
  if (debug) {
    console.log('points:', points);
    console.log('t:', t);
    console.log('inv:', inv);
  }
  return points.map(p => {
    const [x, y] = math.multiply(inv, [p.x * ss, p.y * ss, -1]);
    return { x, y };
  });

}

const ptToArray = ({ x, y }) => [x, y];

// Gives 'intersection' data regarding the given point and a line defined
// by the start/end points. The return values are:
// 
// x: x-coordinate of the nearest point on the line to point pt
// y: like x, but for y
// u: the parametric value of how far along (x,y) is on the line.
// offset: the unsigned distance from the point to the line
// sign: 1 or -1 depending if pt is on the right or left of the line.
const getIntersectionPointAndLineParametric = ({ pt, start, end }) => {
  // see http://paulbourke.net/geometry/pointlineplane/
  const numerator =
    (pt.x - start.x) * (end.x - start.x) + (pt.y - start.y) * (end.y - start.y);
  const deltaVec = math.subtract(ptToArray(end), ptToArray(start));/*getDeltaVector({ start, end }); */
  const deltaVecMag = math.norm(deltaVec);/*getVectorMag(deltaVec);*/
  const denominator = deltaVecMag * deltaVecMag;
  const u = numerator / denominator;
  const ix = {
    x: start.x + u * (end.x - start.x),
    y: start.y + u * (end.y - start.y),
  };
  const ixToPt = math.subtract(pt, ix); /* getDeltaVector({ start: ix, end: pt });*/
  const offset = math.norm(ixToPt); /* getVectorMag(ixToPt);*/
  // now need the sign of that offset
  const startToEnd = math.subtract(end, start); /* getDeltaVector({ start, end });*/
  const startToPt = math.subtract(pt, start); /*getDeltaVector({ start, end: pt });*/
  const det = math.det([ptToArray(startToEnd), ptToArray(startToPt)]);/*getDeterminant(startToEnd, startToPt);*/
  const sign = det < 0 ? -1 : 1;
  return { ...ix, u, offset, sign };
};

// line intercept math by Paul Bourke http://paulbourke.net/geometry/pointlineplane/
// Determine the intersection point of two line segments
// Return FALSE if the lines don't intersect
function intersectLineSegments(x1, y1, x2, y2, x3, y3, x4, y4) {

  // Check if none of the lines are of length 0
  if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
    return false
  }

  denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))

  // Lines are parallel
  if (denominator === 0) {
    return false
  }

  let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator
  let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator

  // is the intersection along the segments
  if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
    return false
  }

  // Return a object with the x and y coordinates of the intersection
  let x = x1 + ua * (x2 - x1)
  let y = y1 + ua * (y2 - y1)

  return { x, y }
}