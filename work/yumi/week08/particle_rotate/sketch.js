var particles = [];
var numOfParticle = 100;
var currentParticleIndex = 0;
var pc;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSB, 255);
  rectMode(CENTER);
  noStroke();

  pc = new ParticleController();
  pc.setup(numOfParticle);
}

function draw() {
  background(0);
  pc.update(mouseX, mouseY);
  pc.draw();
}
