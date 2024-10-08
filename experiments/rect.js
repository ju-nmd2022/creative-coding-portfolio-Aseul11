function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noFill();
  rectMode(CENTER);
}

function draw() {
  background(20);

  const gridSize = 3;
  const spacing = 130;
  const startX = (width - (gridSize - 1) * spacing) / 2;
  const startY = (height - (gridSize - 1) * spacing) / 2;

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const x = startX + col * spacing;
      const y = startY + row * spacing;

      // got explanation about how to implement the opacity from chatGPT
      let r = 3;
      let opacity = 255;
      const opacityStep = 230 / 20;

      for (let w = 110; w > 0; w -= r) {
        stroke(225, opacity);
        rect(x, y, w, w);

        opacity -= opacityStep;
        r = random(2, 6);
      }
    }
  }
}
