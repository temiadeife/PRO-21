var bullet, wall, speed, weight, thickness, damage;

function setup() {
  createCanvas(1600,400);
  
 speed=random(223, 321);
 weight=random(30, 52);
 thickness=random(22, 83);

  bullet=createSprite(50, 200, 120, 50);
  bullet.shapeColor="white";

  wall=createSprite(800, 200, thickness, height/4);
  wall.shapeColor=(80, 80, 80);
}

function draw() {
  background(0);  

  bullet.velocityX=speed/2;

  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  //hasCollided(bullet, wall)
  
  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;
    bullet.x=wall.x-thickness;

    if(damage>10){
        wall.shapeColor="red"; 
    }
    if(damage<10){
       wall.shapeColor="green";
    }
  }
  

  drawSprites();
}

function hasCollided(bullet, wall){
bulletRightEdge=bullet.x+bullet.width
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}else{
  return false;
}

}



