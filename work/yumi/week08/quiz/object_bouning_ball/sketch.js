var ball1;
var ball2;
var ball3;

function setup() {
  createCanvas(400, 400);
  // create a Ball class to make Ball object by calling new command.
  ball1 = new Ball(width/2 + width/4, height, 20, 0.5, color(45, 0, 255));
  ball2 = new Ball(width/4, height, 10, 0.25, color(255, 0, 45));
  ball3 = new Ball(width/8, height, 30, 0.5, color(255, 45, 0));
}

function draw() {
    background(0);

    ball1.move();
    ball1.display();

    ball2.move();
    ball2.display();

    ball3.move();
    ball3.display();

  }

function Ball(x, y, size, direction, color){
    this.x = x;
    this.y = y;
    this.size = size;
    this.d = direction;
    this.c = color;

    this.move = function(){
      this.x = this.x + Math.random() - this.d;
      this.y = this.y - Math.random()* this.d;
    }
    this.display = function(){
      fill(this.c);
      ellipse(this.x, this.y, this.size, this.size);
      noStroke();
    }
  }
