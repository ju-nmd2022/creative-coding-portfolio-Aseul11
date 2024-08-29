function setup() {
  createCanvas(800, 800);
  noLoop();
  noFill();
  rectMode(CENTER);
}

function draw() {
  background(20);

  const gridSize = 3;
  const spacing = 130;
  const startX = (width - (gridSize - 0.6) * spacing) / 2;
  const startY = (height - (gridSize - 0.6) * spacing) / 2;

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const x = startX + col * spacing;
      const y = startY + row * spacing;

      let r = 3;
      let opacity = 255;
      const opacityStep = 230 / 20;

      for (let w = 100; w > 0; w -= r) {
        stroke(225, opacity);
        rect(x, y, w, w);

        opacity -= opacityStep;
        r = random(2, 6);
      }
    }
  }
}
