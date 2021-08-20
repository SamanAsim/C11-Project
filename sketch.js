var path, coin, energyDrink, bomb, power, Runner1, Runner2 
function preload(){
  //pre-load images
 load.png("path.png")
 load.png("power.png")
 load.png("Runner-1.png")
 load.png("bomb.png")
 load.png("coin.png")
 load.png("energyDrink.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage(path.Img);
  path.velocityY= 4;
  path.scale= 1.2;
}

function draw() {
  if (path.y < 400){
    path.y = height/2;
  }
}
