var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var spookySound;


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY=1;

  doorsGroup= new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();

  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
}


function draw() {
  background(255);
  if(gameState==="play"){
   

    spawnDoors();
    drawSprites();
  } 

  if(gameState==="end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Fin del juego",230,250)
  }

}



function spawnDoors()
 {
  //escribir aquí el código para aparecer los obstáculos
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //agregar la función random
    //
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //cambiar la profundidad del fantasma y de la puerta
    
     ghost.depth = ghost.depth +1;
     ghost.depth +=1; 

    
    //asignar lifetime a obstacle.lifetime = 300; aquí los obstáculos son la puerta, la barandilla y el bloque invisible


    //agregar cada obstáculo al grupo obstaclesGroup.add(obstacle);aquí los obstáculos son la puerta, la barandilla y el bloque invisible
  }
}

