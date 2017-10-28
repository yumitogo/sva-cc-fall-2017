var particles = [];
var numOfParticle = 100;
var currentParticleIndex = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSB, 255);
  noStroke();

  for(var i = 0; i < numOfParticle; i ++){
    particles[i] =  new Particle(-100, -100, 200);
  }
}

function draw() {
  background(0);
  currentParticleIndex ++;
  if(currentParticleIndex >= numOfParticle){
    currentParticleIndex = 0;
    // = same as particles[currentParticleIndex] % numOfParticle;
  }
  particles[currentParticleIndex].update(mouseX, mouseY);
  for(var i = 0; i < numOfParticle; i ++){
    fill(i/numOfParticle * 255, 150, 250);

    var index = (currentParticleIndex + i) % numOfParticle;
    particles[index].draw();

  }
}
