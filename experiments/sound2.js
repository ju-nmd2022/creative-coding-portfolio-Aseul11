let audio;
let analyser;
let particles = [];
let soundStarted = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  audio = new Tone.Player("experiments/chkbm.mp3").toDestination();

  analyser = new Tone.Analyser("waveform", 2048);
  audio.connect(analyser);

  textAlign(CENTER);
  textSize(32);
  fill(255);
  text("Click to Start Sound", width / 2, height / 2);
}

function draw() {
  background(0, 60);

  if (!soundStarted) {
    return;
  }

  const waveform = analyser.getValue();

  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = color(0, 255, 255);

  stroke(255, 150);
  strokeWeight(2);
  noFill();

  translate(width / 2, height / 2);

  beginShape();
  for (let i = 0; i < 360; i++) {
    let index = floor(map(i, 0, 360, 0, waveform.length - 1));
    let r = map(waveform[index], -1, 1, 150, 300);

    let x = r * cos(i);
    let y = r * sin(i);

    vertex(x, y);

    if (r > 180 && random(1) > 0.95) {
      particles.push(new Particle(x, y));
    }
  }
  endShape(CLOSE);

  drawingContext.shadowBlur = 0;

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();

    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}

function mousePressed() {
  Tone.start().then(() => {
    soundStarted = true;
    audio.start();
    console.log("Audio Context Started");
  });
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(1, 5));
    this.acc = createVector(0, 0);
    this.lifespan = 255;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifespan -= 4;
  }

  finished() {
    return this.lifespan < 0;
  }

  show() {
    noStroke();
    let r = map(this.pos.x + width / 2, 0, width, 50, 255);
    let g = map(this.pos.y + height / 2, 0, height, 50, 255);
    let b = map(this.pos.x + width / 2, 0, width, 255, 50);

    fill(r, g, b, this.lifespan);
    ellipse(this.pos.x, this.pos.y, 6);
  }
}
