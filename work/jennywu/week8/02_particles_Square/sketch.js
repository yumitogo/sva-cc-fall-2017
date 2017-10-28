var particles = [];
var numberOfParticles = 100;
var currentParticleIndex = 0;

function setup() {
  createCanvas(400, 400);
  //rectMode(CENTER);
  colorMode(HSB, 255);
  noStroke();

  for (var i = 0; i < numberOfParticles; i++){
    particles[i] = new particle(-100,-100,200);
  }
}

function draw() {
  background(100);
  currentParticleIndex++;
  //currentParticleIndex = currentParticleIndex % numberOfParticles;
  if (currentParticleIndex >= numberOfParticles) {
    currentParticleIndex = 0;
  }
  particles[currentParticleIndex].update(mouseX, mouseY);

  for (var i = 0; i < numberOfParticles; i++){
    fill(i/numberOfParticles * 255, 150, 250);
    //modulo
    var index = (currentParticleIndex + i) % numberOfParticles;
    particles[index].display(index);
  }
}
