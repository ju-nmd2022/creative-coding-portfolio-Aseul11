function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(0);

  const waveCount = 6;
  const waveHeight = 80;
  const waveSpacing = 100;
  const divider = 60;
  const layers = 4;

  noiseSeed(9);

  for (let i = 0; i < waveCount; i++) {
    const originalY = 100 + i * waveSpacing;
    const baseColor = color(map(i, 0, waveCount, 0, 255), 156, 141);

    for (let layer = 0; layer < layers; layer++) {
      const opacity = map(layer, 0, layers, 50, 10);
      fill(red(baseColor), green(baseColor), blue(baseColor), opacity);
      noStroke();

      beginShape();
      vertex(0, height);

      for (let x = 0; x < width; x++) {
        const y =
          originalY +
          layer * 3 +
          noise(x / (divider + layer * 10)) * waveHeight;
        vertex(x, y);
      }

      vertex(width, height);
      endShape(CLOSE);
    }
  }

  stroke(255);
  noFill();
  for (let i = 0; i < waveCount; i++) {
    const originalY = 100 + i * waveSpacing;
    beginShape();
    for (let x = 0; x < width; x++) {
      const y = originalY + noise(x / divider) * waveHeight;
      vertex(x, y);
    }
    endShape();
  }
}
