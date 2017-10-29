var ball1;
var ball2;
var ball3;

function setup() {
  createCanvas(400, 400);
  // create a Ball class to make Ball object by calling new command.
  ball1 = new ball(width/2 , height, 10);
  ball2 = new ball(width/3 , height/2, 20);
  ball3 = new ball(350 , 350, 30);
}

function draw() {
  background(100);
  ball1.move();
  ball1.display();
  ball2.move();
  ball2.display();
  ball3.move();
  ball3.display();
}

function ball(ax,ay,as){
  this.x = ax;
  this.y = ay;
  this.size = as;
  this.move = function() {
      this.x = this.x + Math.random() - 0.5;
      this.y = this.y - Math.random()*0.5;
  },
  this.display = function() {
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }
}
