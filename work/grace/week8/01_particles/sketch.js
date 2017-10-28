var particles=[];
var numOfParticles =100;
var currentParticlesIndex=0;

function setup() {
  createCanvas(400, 400);
  colorMode (HSB, 255);
  noStroke();

  for (var i = 0; i<numOfParticles; i++) {
    particles [i] = new Particle(-100, -100, 200);
  }
}

function draw() {
  background(100);
  currentParticlesIndex++;
  if (currentParticlesIndex >=numOfParticles){
    currentParticlesIndex=0;
  }
  particles[currentParticlesIndex].update(mouseX, mouseY);
  for (var i=0; i<numOfParticles; i++) {
    fill(i/numOfParticles*255, 150, 250);
  //modulo
    var index = (currentParticlesIndex +i) % numOfParticles;
    particles[index].draw();
  }
}
