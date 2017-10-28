var numOfParticles = 100;
var pc;

function setup() {
  createCanvas(900, 600);
  colorMode (HSB, 255);
  rectMode(CENTER);
  noStroke();

  pc = new ParticleController();
  pc.setup(numOfParticles);
}


function draw() {
  background(0);
  pc.update(500,mouseY);
  pc.draw();
}
