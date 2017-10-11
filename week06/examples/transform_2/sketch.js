var rectX = 0;
var rectY = 0;
var transX;
var transY;

function setup() {
  createCanvas(501, 501);
  transX = width/2;
  transY = height/2;
  rectMode(CENTER);
  smooth();
}

function draw() {
  background(255);
  fill(200);
  translate(transX, transY);
  var numRect = 3;
  for (var i=0; i<numRect; i++) {
    push();
    var inverseI = numRect - i;
    rotate(radians(30));
    rect(rectX, rectY, inverseI * 50, inverseI * 50);
    pop();
  }
  //rect( rectX+transX, rectY+transY, 100, 100 );
  drawGrid();
}

function drawGrid() {
  push();
  noFill();
  stroke(0, 100);
  for (var x = 0; x < width; x += 10 ) {
    line(x, 0, x, height);
  }
  for (var y = 0; y < height; y += 10) {
    line(0, y, width, y);
  }
  pop();
}
