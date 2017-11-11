let grids = [];
//let hearts = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for(let x = 0; x < 8; x ++){
    grids[x] = [];
      for(let y = 0; y < height; y ++){
        var newShapeX = x * width/4;
        var newShapeY = y * height/8;
        grids[x][y] = new Grid(newShapeX, newShapeY);
      }
  }
}

/*
function mousePressed(){
  for(let x = 0; x < grids.length; x ++){
    for(let y = 0; y < grids.length; y ++){
      grids[x][y].clicked();
      grids[x][y].pulse();
    }
  }
}
*/

function draw() {
  background(0);

  for(let x = 0; x < grids.length; x ++){
    for(let y = 0; y < grids.length; y ++){
      grids[x][y].display();
      //grids[x][y].move();
      grids[x][y].hover();
    }
  }
}
