let lines = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  textSize(10);
 }

 function draw() {
   background(0);

   for( let i = 0; i < lines.length; i ++){
     lines[i].display();
     lines[i].move();
     lines[i].moveUp();
     lines[i].keyDisplay();
   }
 }

 function keyTyped(){
   let y = 0;
   let c = color;
   let s = random(1, 3);
   let w = 1;
   let a = random(100, 250)
   var index = 51;

   if (key === 'a'){
        c = color(0, 0, 255, a);
      } else if(key === 'b'){
        c = color(index, 0, 255, a);
      } else if(key === 'c'){
        c = color(index*2, 0, 255, a);
      } else if(key === 'd'){
        c = color(index*3, 0, 255, a);
      } else if(key === 'e'){
        c = color(index*4, 0, 255, a);
      } else if(key === 'f'){
        c = color(index*5, 0, 255, a);
      } else if(key === 'g'){
        c = color(0, index, 255, a);
      } else if(key === 'h'){
        c = color(0, index*2, 255, a);
      } else if(key === 'i' ){
        c = color(0, index*3, 255, a);
      } else if(key === 'j'){
        c = color(0, index*4, 255, a);
      } else if(key === 'k'){
        c = color(0, index*5, 255, a);
      } else if(key === 'l'){
        c = color(0, 255 - index*2, 0, a);
      } else if(key === 'm'){
        c = color(0, 255 - index*2, index, a);
      } else if(key === 'n'){
        c = color(0, 255 - index*2, index*2, a);
      } else if(key === 'o'){
        c = color(0, 255 - index*2, index*3, a);
      } else if(key === 'p'){
        c = color(0, 255 - index*2, index*4, a);
      } else if(key === 'q'){
        c = color(0, 255 - index*2, index*5, a);
      } else if(key === 'r' ){
        c = color(255, 0, index, a);
      } else if(key === 's' ){
        c = color(255, 0, index*2, a);
      } else if(key === 't'){
        c = color(255, 0, index*3, a);
      } else if(key === 'u'){
        c = color(255, 0, index*4, a);
      } else if(key === 'v'){
        c = color(255 - index, 0, 255 - index, a);
      } else if(key === 'w' ){
        c = color(255 - index, 0, 255 - index*2, a);
      } else if(key === 'x'){
        c = color(255 - index, 0, 255 - index*3, a);
      } else if(key === 'y'){
        c = color(255 - index, 0, 255 - index*4, a);
      } else if(key === 'z'){
        c = color(index, index*5, 255, a);
      } else {
        c = color(255, 255, 255,a);
        w = 1;
      }

   let l = new MovingLine(y, c, w, s, a);
   lines.push(l);
 }

class MovingLine{
  constructor(y, color, weight,speed, alpha){
    //this.x = x;
    this.y = y;
    this.c = color;
    this.s = speed;
    this.w = weight;
    this.a = alpha;
  }
    display(){
      noFill();
      stroke(this.c, this.a);
      strokeWeight(this.w);
      line(0, this.y, width, this.y);
    }
    move(){
      this.y = this.y + this.s;
    }
    moveUp(){
      if(keyIsDown(UP_ARROW))
      this.s = random(-1, -3);
    }
    keyDisplay(){
      fill(this.c, 100);
      text(key, width/2, this.y - 5);
    }
}
