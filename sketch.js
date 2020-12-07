                                                                                                            
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var bananaGroup,bananaImage

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
monkey=createSprite(80,315,20,20);  
monkey.addAnimation("running",monkey_running);
monkey.scale=0.1
  
ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
ground.x=ground.width/2;
  
banana=createSprite(10,10);  
banana.velocityX=-4;
banana.addImage(bananaImage);
banana.scale=0.1
  
bananaGroup = createGroup();
}


function draw() {
background(255);
         
  if(ground.x<0){
  ground.x=ground.width/2;   
     }
  
if(keyDown( "space")){
 monkey.velocityY=-12;  
   }
  
monkey.velocityY=monkey.velocityY+0.8;

monkey.collide(ground);
  
  spawnbanana();
                  
drawSprites();                                                     }    
function spawnbanana() {
  
  if (frameCount % 60 === 0) {
     banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(10,160));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     
    banana.lifetime = 144;
    
    
   
   
    
    
   bananaGroup.add(banana);
    }
}




