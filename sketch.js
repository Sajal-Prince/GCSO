var car , wall ;
var speed , weight ;

function setup() 
{
  createCanvas(1600,400);

  speed = Math.round(random(55,150));
  weight = Math.round(random(400,1500));

  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "blue" ;
  car.velocityX = speed;

  wall = createSprite(1300,200,60, height/2);
}

function draw() {
  background("black");  
  
  if (wall.x-car.x < (car.width + wall.width)/2)
  {
    car.velocityX = 0;

    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation > 180)
    {
      car.shapeColor = "red";
    }

    if (deformation < 180 && deformation > 100)
    {
      car.shapeColor = "yellow";
    }

    if(deformation < 100)
    {
      car.shapeColor = "green";
    }
  }

  drawSprites();
}