function setup() {
  createCanvas (1500,1500)
  background(255,0,0)
}

function draw() {
fill (random (0), random (255), 255,0,50)
ellipse(mouseX, mouseY, mouseX+50,mouseY+70,mouseX-150,mouseY-100);
  
  function keyPressed(space){
    background(random(0), random (855), 255, 55)
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}