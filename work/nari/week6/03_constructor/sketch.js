var myCircle;
var myCircle2;
var myCircle3;
function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);

  myCircle1 = new Circle();
  myCircle1.setup(100, 100, 5, 5.2, 30);

  myCircle2 = new Circle ();
  myCircle2.setup(200, 200, 2, 2.3, 40);

  myCircle3 = new Circle ();
  myCircle3.setup(400, 400, 1, 1.6, 90);
}


function draw() {
  background(220);

  myCircle1.move();
  myCircle1.display();
  myCircle1.bounce();

  myCircle2.move();
  myCircle2.display();
  myCircle2.bounce();

  myCircle3.move();
  myCircle3.display();
  myCircle3.bounce();
}



function Circle() {

  this.x;
  this.y;
  this.speedX;
  this.speedY;
  this.size;

  this.setup = function (x, y, speedX, speedY, size) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;
  }

  this.move = function() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
  }

  this.bounce = function() {
    if (this.x > (width - this.size/2) || this.x < this.size/2) {
      this.speedX = this.speedX * -1;
    }

    if (this.y > height - this.size/2 || this.y < this.size/2) {
      this.speedY = this.speedY * -1;
    }
  }

  this.display = function() {
    noStroke();
    fill(0);
    ellipse(this.x, this.y, this.size, this.size);
    if (this.x > 450 || this.y > 450){
      noStroke();
      fill(random(255));
      ellipse(this.x, this.y, this.size, this.size);
    }

    if (this.x < 50 || this.y < 50){

      noStroke();
      fill(random(255));
      ellipse(this.x, this.y, this.size, this.size);
    }

  }

}
