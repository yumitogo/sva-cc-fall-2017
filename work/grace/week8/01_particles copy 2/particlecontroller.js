function ParticleController(){
  this.particles = [];
  this.currentParticlesIndex=0;

  this.setup = function(numOfParticles) {
    for (var i =0; i<numOfParticles; i++ ) {
      this.particles[i]=new Particle(-100,-100, 100);
    }
  };

  this.update = function (x,y) {
    this.currentParticlesIndex++;
    this.currentParticlesIndex = this.currentParticlesIndex% this.particles.length;
    this.particles[this.currentParticlesIndex].update(x,y);
  };

  this.draw = function (){
    var numOfParticles=this.particles.length;
    for (var i = 0; i < this.particles.length; i++) {
      fill(i/numOfParticles*255, 150, 250);
      //modulo
      var index = (this.currentParticlesIndex +i) % numOfParticles;
      this.particles[index].draw(index);
    }
  }
}
