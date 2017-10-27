var ball1;

function setup() {
  createCanvas(400, 400);
  // create a Ball class to make Ball object by calling new command.
  // ball1 = new Ball();
  ball1 = {
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
  }
}

function draw() {
  background(100);
  ball1.move();
  ball1.display();
}
