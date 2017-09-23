function setup() {
  createCanvas(400, 400);
}

function draw() {

  fill(2,79,34,50);
  background(200);
  ellipse(width/2, height/2, 50, 50);
  ellipse(mouseX, mouseY, 50, 50);
  ellipseMode(CORNER);
  noStroke();
  console.log(mouseX,mouseY);

  fill(225,0,0,50);
  rect(width/2,height/2,100,200);
  rectMode(CENTER);
}
