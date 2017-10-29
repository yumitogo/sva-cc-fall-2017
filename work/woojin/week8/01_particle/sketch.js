var numOfParticles = 100;
var pc;

function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER);
  colorMode (HSB, 255);
  noStroke();

  pc = new particleController();
  pc.setup(numOfParticles);
}


function draw() {
  background(0);
  pc.update(mouseX, mouseY);
  pc.draw();
  }
