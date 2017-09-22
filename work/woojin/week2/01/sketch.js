function setup() {
  createCanvas(800, 800);

}

function draw() {
background(200);

noStroke();

fill(255,0,0,50);

ellipseMode(CORNERS);
ellipse(0, 0, 800, 800);

rectMode(CENTER);

fill(0,255,9,150);
rect(width/2, height/2, 100,150);



}
