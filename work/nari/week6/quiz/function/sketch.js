function setup() {
  createCanvas(100, 100);
  smooth();
}

function draw() {
  background(230);

  drawCircles(10,5);
  drawCircles(50,10);

  }

  // 1. Create a function that draw {number of circles} on {y position}.

function drawCircles(yPos,numOfCircles) {
  var size = 10;
  for (var i = 0; i < numOfCircles; i++) {
    var offset = 10;
    var xPos = i * width/numOfCircles + offset;
    ellipse (xPos, yPos, size, size);
  }

}
