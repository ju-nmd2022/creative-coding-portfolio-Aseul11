function setup() {
  createCanvas(800, 800);
  frameRate(30);
}

function draw() {
  background(0);

  const waveCount = 3;
  const waveSpacing = 50;
  const divider = 50;
  const waveHeight = 80;
  const speed = 0.01;

  noiseSeed(9);

  stroke(255);
  noFill();

  for (let i = 0; i < waveCount; i++) {
    const originalY = 300 + i * waveSpacing;
    beginShape();

    for (let x = 0; x < width; x++) {
      const y = originalY + noise(x / divider, frameCount * speed) * waveHeight;
      vertex(x, y);
    }

    endShape();
  }
}
