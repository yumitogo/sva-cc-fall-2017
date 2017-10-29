var balls = [];

function setup() {
  createCanvas(400, 400);
  // create a Ball class to make Ball object by calling new command.
    // ball1 = new ball ();
    // ball1.setup(100,height,10);
    // ball2 = new ball ();
    // ball2.setup(200,height,20);
    // ball3 = new ball ();
    // ball3.setup(300,height,30);

  for (var i = 0; i <10; i++){
    balls = new ball( 100+100 , height);
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
}
