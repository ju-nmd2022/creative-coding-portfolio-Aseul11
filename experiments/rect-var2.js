let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  rectMode(CENTER);
}

function draw() {
  background(20);

  const gridSize = 6;
  const spacing = 80;
  const startX = (width - (gridSize - 1) * spacing) / 2;
  const startY = (height - (gridSize - 1) * spacing) / 2;

  strokeWeight(1.5);

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const x = startX + col * spacing;
      const y = startY + row * spacing;

      // made the rectangles change the size using the logic from one of the examples shown during the lecture and chatGPT
      let animatedSize = map(sin(t + (row + col) * 0.5), -1, 1, 20, 50);

      for (let w = animatedSize; w > 0; w -= 10) {
        stroke(random(255), random(255), random(255));
        rect(x, y, w, w);
      }
    }
  }

  t += 0.1;
}
