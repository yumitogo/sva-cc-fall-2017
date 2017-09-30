function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);

  var redColor = 255;

  fill(redColor, 0, 0);
  noStroke();
  var myVar = 0;
  var numOfLoop = 30;
  var circleSize = 10;
  for(var i = 0; i < numOfLoop; i++) {
    var theta = i * ((Math.PI * 2) / numOfLoop)
    var radius = 100;
    var xPos = Math.cos(theta) * radius + width/2;
    var yPos = Math.sin(theta) * radius + height/2;

    ellipse(xPos, yPos, circleSize, circleSize);
  }


}
