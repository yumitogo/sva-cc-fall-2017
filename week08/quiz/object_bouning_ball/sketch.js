var balls= [];

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  for (var i=0; i<3; i++){
    balls[i] = new Ball(100+100 * i, height);
  }

}

function draw() {
  background(100);
  for (var i = 0; i<balls.length; i++) {
    balls[i].move();
    balls[i].display();
  }

}

function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.size = 10;
  this.move = function () {
    this.x = this.x + Math.random() - 0.5;
    this.y = this.y - Math.random() * 0.5;
  };
  this.display = function () {
    ellipse(this.x, this.y, this.size, this.size);
  }
}
