let synth;
let reverb;
let soundStarted = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  synth = new Tone.PolySynth(Tone.Synth, {
    oscillator: {
      type: "sine",
    },
    envelope: {
      attack: 0.3,
      decay: 0.3,
      sustain: 0.5,
      release: 1.5,
    },
  }).toDestination();

  synth.volume.value = -10;

  reverb = new Tone.Reverb({
    decay: 2,
    preDelay: 0.1,
  }).toDestination();
  synth.connect(reverb);
}

function draw() {
  background(30);

  if (!soundStarted) {
    textAlign(CENTER);
    textSize(32);
    fill(255);
    text("Click to Start Sound", width / 2, height / 2);
    return;
  }

  stroke(255);
  noFill();
  translate(width / 2, height / 2);

  beginShape();
  for (let i = 0; i < 360; i++) {
    let rMin = map(sin(frameCount), -1, 1, 50, 100);
    let rMax = map(sin(frameCount * 2), -1, 1, 100, 0);

    let r1 = map(sin(i * 3), -1, 1, rMin, rMax);
    let r2 = map(sin(i * 6 + 90), -1, 1, rMin, rMax);
    let r = r1 + r2;
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);

    if (i % 60 === 0) {
      const notes = ["C4", "E4", "G4"];
      let noteIndex = floor(map(r, rMin, rMax, 0, notes.length));
      let note = notes[noteIndex % notes.length];

      let duration = random(0.5, 1.5);
      synth.triggerAttackRelease(note, duration);
    }
  }
  endShape(CLOSE);
}

function mousePressed() {
  Tone.start().then(() => {
    soundStarted = true;
    console.log("Audio Context Started");
  });
}
