var sea, seaImg
var ship, shipImg

function preload(){
seaImg = loadImage("sea.png");
ship_Img = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png","ship-4.png");
}
function setup(){
  createCanvas(835,335)
  sea = createSprite(418,168,40,40);
  sea.addImage(seaImg);
  sea.scale = 0.2;
ship = createSprite(200,200,20,20)
ship.addAnimation("Img", ship_Img);
ship.scale = 0.3
}

function draw() {
  background("blue");
  if (sea.x<0){
    sea.x=back.width/2;
  }
  sea.velocityX = -2
  drawSprites();
}