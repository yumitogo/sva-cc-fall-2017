function ParticleController() {
  this.particles = [];
  this.currentParticleIndex = 0;

  this.setup = function (numberOfParticles) {
    for (var i = 0; i < numberOfParticles; i++){
      this.particles[i] = new particle(-100, -100, 100);
    }
  };

  this.update = function (x,y) {
    this.currentParticleIndex++;
    this.currentParticleIndex = this.currentParticleIndex % this.particles.length;
    this.particles[this.currentParticleIndex].update(x,y);
  };

  this.draw = function () {
    var numberOfParticles = this.particles.length;
    for (var i = 0; i < this.particles.length; i++){
      fill (i/numberOfParticles * 255, 150, 250);
      //modulo
      var index = (this.currentParticleIndex + i) % numberOfParticles;
      this.particles[index].display(index);
    }
  }
}
