var balls =[];
//var X = ramdon (0,50);
//var Y = ramdon (0,50);
var num =10;
function setup() {
  createCanvas(400, 400);
  // create a Ball class to make Ball object by calling new command.
  // ball1 = new Ball();
  balls[0]= new Ball(width/2, height);
  balls[1]= new Ball(100, height);
  balls[2]= new Ball(300, height);

}

function draw() {
  background(100);
  for(var i = 0; i < balls.length; i++){
    balls[i].move();
    balls[i].display();
  }
}

function Ball(x,y){
  this.x = x;
  this.y = y;
  this.size = 10;
  this.move = function(){
    this.x = this.x + Math.random()-0.5;
    this.y = this.y - Math.random()*0.5;
  };
  this.display=function(){
    ellipse(this.x, this.y, this.size,this.size )
  }


}
