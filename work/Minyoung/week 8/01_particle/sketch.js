var particles= [];
var numOfParticles = 100;
var currentParticleIndex = 0;

function setup() {
  createCanvas(800, 800);
  colorMode (HSB, 255);
  noStroke();

  for (var i = 0; i < numOfParticles; i++) {
    particles[i] = new Particle(-100, -100, 200);
  }
}

function draw() {
  background(255);
  currentParticleIndex++;
  if (currentParticleIndex >= numOfParticles) {
    currentParticleIndex = 0;
  }
  particles[currentParticleIndex].update(mouseX, mouseY);
  for (var i = 0; i<numOfParticles; i++) {
    fill(i/numOfParticles * 255, 150, 250);
    // modulo
    var index = (currentParticleIndex + i) % numOfParticles;
    particles[index].draw();
  }
}
