function ParticleController(){
  this.particles = [];
  this.currentParticleIndex = 0;

  this.setup = function(numOfParticle){
    for (var i = 0; i < numOfParticle; i ++ ){
      this.particles[i] = new Particle(-100, -100, 300);
    }
  };

  this.update =  function(x, y){
    this.currentParticleIndex ++;
    this.currentParticleIndex = this.currentParticleIndex % this.particles.length;
    this.particles[this.currentParticleIndex].update(x, y);
  };

  this.draw = function(){
    var numOfParticle = this.particles.length;
    for (var i = 0; i < this.particles.length; i ++){
      fill(i/numOfParticle * 255, 150, 250);

      var index = (this.currentParticleIndex + i) % numOfParticle;
      this.particles[index].draw(index);
    }
  }
}
