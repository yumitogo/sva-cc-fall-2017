var ball1;
var ball2;
var ball3;

function setup() {
  createCanvas(400, 400);
  // create a Ball class to make Ball object by calling new command.
  ball1 = new Ball(100, height);
  ball2 = new Ball(200, height);
  ball3 = new Ball(300, height);
  // ball1 = {
  // ball1 = {
  //   x:width/2,
  //   y:height,
  //   size: 10,
  //   move: function() {
  //     this.x = this.x + Math.random() - 0.5;
  //     this.y = this.y - Math.random()*0.5;
  //   },
  //   display: function() {
  //     ellipse(this.x, this.y, this.size, this.size);
  //   }
  // }
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

function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.size = 10;
  this.move = function() {
    this.x = this.x + Math.random() - 0.5;
    this.y = this.y - Math.random() * 0.5;
  };
  this.display = function () {
    ellipse(this.x, this.y, this.size, this.size);
  }
}
