var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50,200,50,50);
  speed = random(55,80);
  car.velocityX = speed;
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = (80,80,80);
  weight = random(400,1500);
}

function draw() {
  background(0);
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5*width*speed*speed/22509;
    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = color(230,230,0);
    }
    if(deformation<0){
       car.shapeColor(0,255,0);
    }

  }
  drawSprites();
}


/*var fixedRect, movingRect,car,wall;

function setup() {
  createCanvas(1200,800);
  car = createSprite(50, 200, 50, 20);
  car.velocityX = speed;
  wall = createSprite(1500,200,60,hieght/2);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX = 5;
  fixedRect.velocityX = -5;
  speed = random(55,90);
  weight = random(400,1500);
  
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  //alogrithm for detecting collisions
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  //alogrithm for bouncing 2 objects
if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
  fixedRect.velocityX = -1*fixedRect.velocityX;
  movingRect.velocityX = -1*movingRect.velocityX; 
 }
 if(movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    fixedRect.velocityY = -1*fixedRect.velocityY;
    movingRect.velocityY = -1*movingRect.velocityY; }

  drawSprites();

  }*/

