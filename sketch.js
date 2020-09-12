
var bullet,wall;
var thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  thickness=random(22, 83);

  car=createSprite(50,200,50,50);
  car.velocityX = speed;

  wall=createSprite(1200,200,thickness,weight/2);
  wall.shapeColor=color(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(hasCollided(bullet, wall))
  {
    bullet.velocity=0;
    var damge=0.5 * weight * speed * speed/(thickness *thickness);
  }
  if(damge>10)
  {
       wall.shapeColor=color(255,0,0);
  }

  if(damge<10)
{
  wall.shapeColor=color(0,255,0)
}
  if(wall.x-car.x < (car.width+wall)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255, 0, 0);
    }
   if(deformation<180 && deformation>100)
  {
    car.shapeColor=color(230, 230, 0);
  }

  if(deformation<100)
  {
    car.shapeColor=color(0, 255, 0)
  }
  
}

}

function hasCollided(bullet, wall)
{
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge+wall.x;
  if(bulletRightEdge>=wallLeftEdge)
{
  return true 
}
return false;
}


