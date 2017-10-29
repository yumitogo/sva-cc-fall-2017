var myball;

function setup() {
  createCanvas(400, 400);
  // create a Ball class to make Ball object by calling new command.
  myball = [];
  for (var i = 0; i < 100; i++){
  myball[i] = new ball(random(width), random(height), 10,random(25));
  }
}

function draw() {
  background(100);
  for (var i = 0; i < 100; i++){
  myball[i].move();
  myball[i].display();
  }
}

function ball(ax, ay, as, color){
  this.x = ax,
  this.y = ay,
  this.size = as,
  this.color = color
  this.move = function() {
      this.x = this.x + Math.random() - 0.5;
      this.y = this.y - Math.random()*0.5;
  },
  this.display = function() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }
}
