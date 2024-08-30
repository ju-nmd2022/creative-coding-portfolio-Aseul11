function setup() {
  createCanvas(600, 600);
  noLoop();
  noFill();
  rectMode(CENTER);
}

function draw() {
  background(20);

  const gridSize = 3;
  const spacing = 150;
  const startX = (width - (gridSize - 1) * spacing) / 2;
  const startY = (height - (gridSize - 1) * spacing) / 2;
  const gap = 90;

  strokeWeight(1.5);

  // used the logic from the example from the lecture
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const x = startX + col * spacing;
      const y = startY + row * spacing;

      let r = 3;
      for (let w = 100; w > 0; w -= r) {
        stroke(random(255), random(255), random(255));

        push();
        translate(x, y);
        rotate(random(TWO_PI));
        rect(0, 0, w, w);
        pop();

        r = random(2, 20);
      }
    }
  }
}
