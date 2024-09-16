var points = [];
var mult = 0.005;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);

  var density = 20;
  var space = width / density;

  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      var p = createVector(x, y);
      points.push(p);
    }
  }
}

function draw() {
  strokeWeight(2);
  noFill();

  for (var i = 0; i < points.length; i++) {
    var r = map(points[i].x, 0, width, 255, 0);
    var g = map(points[i].y, 0, height, 0, 255);
    var b = map(points[i].x, 0, width, 255, 0);

    stroke(r, g, b);
    var angle = map(
      noise(points[i].x * mult, points[i].y * mult),
      0,
      1,
      0,
      720
    );

    let currentPos = points[i].copy();

    points[i].add(createVector(cos(angle), sin(angle)));

    line(currentPos.x, currentPos.y, points[i].x, points[i].y);
  }
}
