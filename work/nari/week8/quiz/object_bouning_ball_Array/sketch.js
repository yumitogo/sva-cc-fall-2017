var ball = [];

function setup() {
  createCanvas(400, 400);
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

}
