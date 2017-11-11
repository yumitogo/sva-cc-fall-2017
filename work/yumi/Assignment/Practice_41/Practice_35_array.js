let pulses = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  smooth();
}

function draw(){
  background(0);

  for(let i = 0; i < pulses.length; i ++){
    pulses[i].display();
    pulses[i].display2();
    pulses[i].beatX();
    pulses[i].beatY();
    pulses[i].move();
    pulses[i].displayBackground();
  }
}

function mousePressed(){
  let c = color(random(50, 150));
  let n = (random(85, 90));
  let s = (random(0.1, 1));
  let size1 = (random(5, 15));
  let size2 = (random(10, 30));
  let p = new HeartBeat(mouseX, mouseY, size1, size2, c, s, n);

  pulses.push(p);
  //pulses2.push(p);

}

class HeartBeat{
  constructor(x, y,size1, size2, color, speed, number){
    this.x = x;
    this.y = y;
    this.size1 = size1;
    this.size2 = size2;
    this.c = color;
    this.s = speed;
    this.n = number;
  }
    display(){
      fill(100, 30, 255, 100);
      noStroke();
      ellipse(this.x, this.y + 5, this.size1 + random(5, 10), this.size2 + 5);

    }
    beatX(){
      this.size1 = this.size1 + this.s;
      if(this.size1 > this.n){
      this.size1 = random(5, 20);
      }
    }
    beatY(){
      this.size2 = this.size2 + this.s;
      if(this.size2 > this.n){
      this.size2 = random(20, 30);
      }
    }
    display2(){
      fill(45, 0, 255, 100);
      noStroke();
      ellipse(this.x, this.y, this.size2, this.size1);
    }
    move(){
      this.x = this.x + 1;
      this.y = this.y - 0.5;
      if(this.x > width){
        this.x = 0;
      } else if (this.y < 0){
        this.y = height;
      }
    }
    displayBackground(){
      if(mouseX < width/2){
        fill(45, 0, 255, 10);
        rect(0, 0, width, height);
      }
    }
}
