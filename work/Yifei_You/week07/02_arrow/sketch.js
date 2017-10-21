var myArrow;
var myArrow2;
var myArrow3;
var myArrow4;

function setup() {
  createCanvas(500, 500);
  myArrow = new Arrow(250,100);
  myArrow2 = new Arrow(250,200);
  myArrow3 = new Arrow(250,300);
  myArrow4 = new Arrow(250,400);
}

function draw() {
  background(230);
myArrow2.draw(mouseX,mouseY);
  myArrow.draw(mouseX,mouseY);
  myArrow3.draw(mouseX,mouseY);
  myArrow4.draw(mouseX,mouseY);
}
