class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);

    this.isEllipse = random() < 0.5;
    this.previousPosition = this.position.copy();
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(4);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  direction(flowfield) {
    let i = floor(this.position.x / size);
    let j = floor(this.position.y / size);
    i = constrain(i, 0, cols - 1);
    j = constrain(j, 0, rows - 1);
    let force = flowfield[i][j].copy();
    this.applyForce(force);
  }

  display() {
    noStroke();
    fill(0, 0, 255, 50);

    if (this.isEllipse) {
      ellipse(this.position.x, this.position.y, 3, 3);
    } else {
      stroke(0, 0, 255, 60);
      line(
        this.previousPosition.x,
        this.previousPosition.y,
        this.position.x,
        this.position.y
      );
    }

    this.previousPosition.set(this.position);
  }

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = 0;
      this.previousPosition.x = 0;
    }
    if (this.position.x < 0) {
      this.position.x = width;
      this.previousPosition.x = width;
    }
    if (this.position.y > height) {
      this.position.y = 0;
      this.previousPosition.y = 0;
    }
    if (this.position.y < 0) {
      this.position.y = height;
      this.previousPosition.y = height;
    }
  }
}

export default Particle;
