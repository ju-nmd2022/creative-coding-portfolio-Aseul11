function setup() {
  createCanvas(800, 800);
  noLoop(); // Draw once, without animation
  noFill();
  rectMode(CENTER);
}

function draw() {
  background(20);

  const gridSize = 3; // 3x3 grid for 9 rectangles
  const spacing = 130; // Space between rectangles
  const startX = (width - (gridSize - 0.6) * spacing) / 2; // Centering calculations
  const startY = (height - (gridSize - 0.6) * spacing) / 2; // Centering calculations

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const x = startX + col * spacing;
      const y = startY + row * spacing;

      let r = 3;
      let opacity = 255; // Starting opacity
      const opacityStep = 230 / 20; // Decrease opacity for each rectangle

      for (let w = 100; w > 0; w -= r) {
        stroke(225, opacity); // Set stroke color to white with decreasing opacity
        rect(x, y, w, w); // Draw rectangle without rotation

        opacity -= opacityStep; // Reduce opacity
        r = random(2, 6); // Random size change
      }
    }
  }
}
