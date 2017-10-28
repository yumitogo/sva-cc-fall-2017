var numberOfParticles = 100;
var pc;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  colorMode(HSB, 255);
  noStroke();

  pc = new ParticleController();
  pc.setup(numberOfParticles);

}

function draw() {
  background(100);

  pc.update(mouseX, mouseY);
  pc.draw();
}
