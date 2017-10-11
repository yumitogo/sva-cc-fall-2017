function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  smooth();
}

function draw() {
  background(255);
  strokeWeight(0.2);
  noFill();
  var numRect = 70;
  var rotAmount = 0.5;

  for (var i = 0; i < numRect; i++) {
    var inverseI = (numRect-i)/numRect;

    push();
    translate(width/2, height/2);
    var anim = Math.sin(frameCount*0.01);
    rotate( anim * ( PI*rotAmount ) * inverseI );
    strokeWeight(inverseI);
    fill(0, inverseI*20);
    var size = width/numRect * i;
    rect(0, 0, size, size);
    pop();
  }

}
