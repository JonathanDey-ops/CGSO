var car,wall;
var speed, weight;

function setup() {
  createCanvas(1300, 400);
  car=createSprite(60, 200, 60, 60);
  wall=createSprite(1200, 200, 60, 200)
  speed = random(55,90)
  weight = random(400,1500)
  wallcolor = ("white")
  car.velocityX = speed;
}

function draw() {
  background("black"); 
  car.velocityX = speed;
  if (wall.x-car.x < (car.width+wall.width)/2) {
   car.velocityX = 0;
   var deformation = 0.5 * weight * speed* speed/22509;
   if (deformation>180);
   {
     car.shapeColor=color(255,0,0);
   }
   if (deformation<180 && deformation>100);
   {
     car.shapeColor=color(230,230,0)
   }
   if (deformation<100);
   {
    car.shapeColor=color(0,255,0)  
   }
  }
  drawSprites()
}
