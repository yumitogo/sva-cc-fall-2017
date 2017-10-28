var balls = [];

function setup() {
  createCanvas(400, 400);
  // create a Ball class to make Ball object by calling new command.
  for (i = 0; i < 3; i ++){
  balls[i] = new Ball(width/2, height, 10);

  }
}

function draw() {
    background(0);

    for (i = 0; i < 3; i ++){

    balls[i].move();
    balls[i].display();
    }
  }

function Ball(x, y, size){
    this.x = x;
    this.y = y;
    this.size = 10;


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
