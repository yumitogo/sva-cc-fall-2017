class Grid{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.col = 25;
    this.col2 = color(45, 0, 255);
    this.col3 = color(255, 100);
    this.posX = width/8;
    this.posY = height/16;
    this.sizeX = 10;
    this.sizeY = 10;
    this.sizeX2 = 10;
    this.sizeY2 = 10;
  }
  display(){
    push();
    translate(this.x, this.y);
    fill(this.col);
    stroke(10);
    rect(0, 0, width/4, height/8);
    fill(this.col2);
    noStroke();
    ellipse(this.posX, this.posY, this.sizeX, this.sizeY);
    fill(this.col3);
    noStroke();
    ellipse(this.posX, this.posY, this.sizeX2, this.sizeY2);
    pop();
  }
  hover(){
    let d = dist(mouseX, mouseY, this.x, this.y);
    if(d < 100){
      this.col = color(85, 60, 255, 75);
      //this.col2 = color(45, 0, 255);
      //this.col3 = color(255, 100);
      this.sizeX = this.sizeX + random(0.25, 0.35);
      this.sizeY = this.sizeY + random(0.2, 0.3);
      this.sizeX2 = this.sizeX2 + random(0.15, 0.25);
      this.sizeY2 = this.sizeY2 + random(0.15, 0.25);
    } else {
      this.col = 0;
      //this.sizeX = 10;
      //this.sizeY = 10;
      //this.sizeX2 = 10;
      //this.sizeY2 = 10;
    }
    if(this.sizeX > 35){
      this.sizeX = 30;
    } else if (this.sizeY > 35){
      this.sizeY = 30;
    } else if(this.sizeX2 > 30){
      this.sizeX2 = 25;
    } else if (this.sizeY2 > 30){
      this.sizeY2 = 25;
    }
  }
  move(){
    this.posX = this.posX + random(-0.5, 0.5);
    if(this.posX > width/8){
        this.posX = 0;
    }
    this.posY = this.posY + random(-0.5, 0.5);
    if(this.posY > height/8){
      this.posY = 0;
    }
  }
}
  /*
  clicked(){
    let d = dist(mouseX, mouseY, this.x, this.y);
    if(d < 100){
      this.col = color(58, 58, 255);
      this.col2 = 255;
    } else{
      this.col = 25;
    }
  }

  pulse(){
    this.sizeX = this.sizeX + 1;
    this.sizeY = this.sizeY + 1;

      //else {
        //ellipse(width/2, height/2, 100, 100);
      //}
  if(this.sizeX > 20){
    this.sizeX = 10;
  }
  if(this.sizeY > 20){
    this.sizeY = 10;
    }
  }
  */
