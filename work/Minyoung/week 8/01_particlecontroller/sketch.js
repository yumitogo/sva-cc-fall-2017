var numOfParticles = 100;
var pc;

function setup() {
  createCanvas(400, 400);
  colorMode (HSB, 255);
  rectMode (CENTER);
  noStroke();

pc = new ParticleController();
pc.setup(numOfParticles);

}

function draw() {
  background(255);
  pc.update(mouseX, mouseY);
  pc.draw();
}
