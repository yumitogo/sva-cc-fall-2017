function setup() {
  createCanvas(800, 800);
}

var myhue = 0;

function draw() {
  colorMode(HSB);
  var hueRandomNumber = random ( 255 );
  var greenRandomNumber = random ( 255 );
  var blueRandomNumber = random ( 255 );

  myhue += 1;
  stroke(myhue, 30, 100);
  strokeWeight(5);

  if (myhue > 300) {
    myhue += 0;
  }
  /* I'm drawing lines here.
  Hi! I'm Minyoung! */
  //line(mouseX, mouseY, pmouseX, pmouseY);

  //var myName = "Minyoung";
  if( mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  if(keyIsPressed) {
    background (0);
  }

  /* noStroke();
  fill(mouseX);
  ellipse (width/2, height/2, mouseX, mouseY); */
}
