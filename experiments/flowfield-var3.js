var points = [];
var mult = 0.08;
var attractionStrength = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
  angleMode(DEGREES);
  noiseDetail(1);
}

function draw() {
  noStroke();

  for (var i = 0; i < points.length; i++) {
    var gradientFactor = map(points[i].x, 0, width, 0, 1);

    var r = map(gradientFactor, 0, 1, 255, 255);
    var g = map(gradientFactor, 0, 1, 165, 50);
    var b = map(gradientFactor, 0, 1, 0, 0);

    fill(r, g, b, 150);

    var angle = map(
      noise(points[i].x * mult, points[i].y * mult),
      0,
      1,
      0,
      720
    );

    let mouse = createVector(mouseX, mouseY);
    let force = p5.Vector.sub(mouse, points[i]);
    let distance = force.mag();
    distance = constrain(distance, 5, 100);
    force.setMag(attractionStrength / distance);
    points[i].add(force);
    points[i].add(createVector(cos(angle), sin(angle)).mult(0.3));

    ellipse(points[i].x, points[i].y, 2);
  }
}

function mouseMoved() {
  var p = createVector(mouseX + random(-10, 10), mouseY + random(-10, 10));
  points.push(p);
}
