let synth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  // Initialize a simple Tone.js synth
  synth = new Tone.Synth().toDestination();
  Tone.start(); // Starts audio context, required by Tone.js
}

function draw() {
  background(30);
  stroke(255);
  noFill();

  translate(width / 2, height / 2);

  beginShape();
  for (var i = 0; i < 359; i++) {
    var rMin = map(sin(frameCount), -1, 1, 50, 100);
    var rMax = map(sin(frameCount * 2), -1, 1, 100, 0);

    var r2Min = map(sin(frameCount / 2), -1, 1, 100, 50);
    var r2Max = map(sin(frameCount), -1, 1, 0, 100);

    var r1 = map(sin(i * 3), -1, 1, rMin, rMax);
    var r2 = map(sin(i * 6 + 90), -1, 1, rMin, rMax);
    var r = r1 + r2;
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);

    // Map the x and y values to a musical note
    let freq = map(x, -width / 2, width / 2, 200, 800); // Frequency range in Hz
    let volume = map(y, -height / 2, height / 2, -20, 0); // Volume in decibels

    // Play a note depending on x and y
    synth.triggerAttackRelease(freq, "8n"); // '8n' is the duration (eighth note)
    synth.volume.value = volume;
  }

  endShape(CLOSE);
}
