function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background(0, 0, 0);

  const waveCount = 7;
  const waveHeight = 60;
  const waveSpacing = 45;
  const divider = 60;

  noiseSeed(15);

  fill(0, 0, 0);
  noStroke();

  beginShape();
  vertex(0, 0);
  for (let x = 0; x < width; x++) {
    const y = 100 + noise(x / divider) * waveHeight;
    vertex(x, y);
  }

  vertex(width, 0);
  endShape(CLOSE);

  for (let i = 0; i < waveCount; i++) {
    const originalY = 100 + i * waveSpacing;
    const nextY = originalY + waveSpacing;
    const colorHue = map(i, 0, waveCount, 0, 255);

    fill(colorHue, 146, 141);
    noStroke();

    beginShape();
    for (let x = 0; x < width; x++) {
      const y1 = originalY + noise(x / divider) * waveHeight;
      vertex(x, y1);
    }
    for (let x = width - 1; x >= 0; x--) {
      const y2 = nextY + noise(x / divider) * waveHeight;
      vertex(x, y2);
    }
    endShape(CLOSE);
  }

  stroke(0);
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
