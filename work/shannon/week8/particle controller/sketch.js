var numOfParticles = 100;
var pc;

function setup() {
  createCanvas(900, 900);
  colorMode(HSB, 255);
  rectMode(CENTER);
  noStroke();

  pc = new ParticleController();
  pc.setup(numOfParticles);
}

function draw() {
   background(0);
   pc.update(mouseX, mouseY);
   pc.draw();
}
