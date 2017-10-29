var balls = [];

function setup() {
  createCanvas(400, 400);
  // create a Ball class to make Ball object by calling new command.

  for (var i = 0; i < 3; i++) {
    balls[i] = new Ball(100 * i, height, 20);
  }
}

function draw() {
   background(0);

   for (var i = 0; i<balls.length; i++){
     balls[i].move();
     balls[i].display();
   }

}

function ball (x,y){
    this.x;
    this.y;
    this.size=10;

    this.move= function() {
      this.x = this.x + Math.random() - 0.5;
      this.y = this.y - Math.random()*0.5;
    }
    this.display= function() {
      ellipse(this.x, this.y, this.size, this.size);
    }
  background(100);
  balls[i].move();
  balls[i].display();

  // ball1.move();
  // ball1.display();
  // ball2.move();
  // ball2.display();
  // ball3.move();
  // ball3.display();
}

function Ball(x, y, size) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.move = function() {
    this.x = this.x + Math.random() - 0.5;
    this.y = this.y - Math.random() * 0.5;
  };
  this.display = function () {
    ellipse(this.x, this.y, this.size, this.size);
  };

}
