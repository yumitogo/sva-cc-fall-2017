function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
}

function draw() {
  background(255);

  var blueColor = 255;
  fill(100, 20, blueColor, 50);

 var myVar = 0;
 var numOfLoop = 300;
 var circleSize = 40;

 for (var i = 0 ; i < numOfLoop; i++ ){
   var theta = i * ((Math.PI*2)/ numOfLoop) * (mouseY*0.1);
   var radius = 0.01 * i * mouseX;
   var xPos = Math.cos(theta) * radius + width/2;
   var yPos = Math.sin(theta) * radius + height/2;

   noStroke();
   fill(30 + i*1 *50, 100, 100);
   ellipse(xPos, yPos, circleSize, circleSize)
 }

}
