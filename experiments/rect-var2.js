function setup() {
  createCanvas(800, 800);
  noLoop();
  rectMode(CENTER);
  noFill();
}

function draw() {
  background(30);

  const gridSize = 10;
  const rectSize = 30;
  const spacing = 50;

  const colors = [
    color(255, 182, 193),
    color(144, 238, 144),
    color(255, 182, 193),
    color(255, 255, 255),
  ];

  const totalWidth = gridSize * spacing;
  const totalHeight = gridSize * spacing;

  const startX = (width - totalWidth) / 2 + spacing / 2;
  const startY = (height - totalHeight) / 2 + spacing / 2;

  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      const patternIndex = (x + y * gridSize) % 4;
      const currentX = startX + x * spacing;
      const currentY = startY + y * spacing;

      if (patternIndex === 0 || patternIndex === 1) {
        fill(colors[patternIndex]);
        noStroke();
        rect(currentX, currentY, rectSize, rectSize);
      } else if (patternIndex === 2) {
        noFill();
        stroke(colors[patternIndex]);
        strokeWeight(2);
        rect(currentX, currentY, rectSize, rectSize);
      } else if (patternIndex === 3) {
        fill(colors[patternIndex]);
        noStroke();
        rect(currentX, currentY, rectSize, rectSize);
      }
    }
  }
}
