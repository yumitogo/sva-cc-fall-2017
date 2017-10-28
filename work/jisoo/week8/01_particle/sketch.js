
var numOfParticles = 100;
var pc;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  colorMode (HSB, 255);
  noStroke();

  pc = new ParticleController();
  pc.setup(numOfParticles);

}


function draw() {
  background(0);
  pc.update (mouseX, mouseY);
  pc.draw();
}
