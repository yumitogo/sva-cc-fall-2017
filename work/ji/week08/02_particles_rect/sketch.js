var particles = [];
var numOfParticles = 100;
var currentParticleIndex = 0;

function setup () {
  createCanvas(600, 600);
  colorMode (HSB, 255);
  rectMode (CENTER);
  noStroke();

  for (var i = 0; i < numOfParticles; i++) {
    particles[i] = new Particles(-100, -100, 200);
  }
}

function draw() {
  background(0);
  currentParticleIndex++;
  currentParticleIndex = currentParticleIndex % numOfParticles;

  particles[currentParticleIndex].update(mouseX, mouseY);
  for (var i = 0; i < numOfParticles; i++) {
    fill(i/numOfParticles*255, 150, 250);

    var index = (currentParticleIndex + i) % numOfParticles;
    particles[index].draw(index);
  }
}
