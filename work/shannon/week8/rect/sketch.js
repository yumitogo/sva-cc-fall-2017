var particles = [];
var numOfParticles = 50;
var currentParticleIndex = 0;

function setup() {
  createCanvas(900, 900);
  colorMode(HSB, 255);
  rectMode(CENTER);
  noStroke();


  for (var i=0; i<numOfParticles; i++){
    particles[i] = new Particle(-100,-100,300)
  }

}

function draw() {
   background(0);
   currentParticleIndex++;
   if (currentParticleIndex >= numOfParticles){
     currentParticleIndex = 0;
   }

   particles[currentParticleIndex].update(mouseX,mouseY);


   for (var i = 0; i<numOfParticles; i++){
     fill(i/numOfParticles*255, 150, 250);

     var index = (currentParticleIndex + i )%numOfParticles;
     particles[index].draw(index);
   }
}
