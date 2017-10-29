
var balls = [];

function setup() {
  createCanvas(400, 400);
  for (var i =0; i<3; i++){
    balls[i] = new Ball(100+100*i, height);
  // create a Ball class to make Ball object by calling new command.

/*  ball1 = {
    x:width/2,
    y:height,
    size: 10,
    move: function() {
      this.x = this.x + Math.random() - 0.5;
      this.y = this.y - Math.random()*0.5;
    },
    display: function() {
      ellipse(this.x, this.y, this.size, this.size);
    }
  } */
}

function draw() {
  background(100);

  for (var i = 0; i < 3; i++) {
    ball[i].move();
    ball[i].display();

  }
}


function ball(x, y) {
  this.x = x;
  this.y = y;
  this.size = 10;

  this.move = function() {
    this.x = this.x + Math.random() - 0.5;
    this.y = this.y - Math.random() * 0.5;
  };

  this.display = function() {
    ellipse(this.x, this.y, this.size, this.size);
  };

   //ball1 = new Ball(width/2, height);
   //ball2 = new Ball(100, 300);
   //ball3 = new Ball(100, 100);

   }
}

function draw() {
  background(0);
  fill(255);
  for (var i =0; i<balls.length; i++){
    balls[i].move();
    balls[i].display();

}

function Ball(x,y){
  this.x =x;
  this.y = y;
  this.size = 20;
  this.move = function() {
    this.x = this.x + Math.random() - 0.5;
    this.y = this.y - Math.random()*1;
  };
  this.display = function() {
    ellipse(this.x, this.y, this.size, this.size);
  }
}
}
