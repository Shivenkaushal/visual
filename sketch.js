var moverect,fixrect,fixrext1;
var moverect1,fixrect2,fixrext3;
var moverect2,fixrect4,fixrext5;
function setup() {
  createCanvas(1200,600);
  fixrect=createSprite(1100, 300, 50, 80);
  fixrect1=createSprite(59, 300, 50, 80);
  moverect=createSprite(600,300,30,30);
  fixrect.shapeColor="green";
  moverect.shapeColor="green";
  fixrect1.shapeColor="green";
  moverect.velocityX=-10;
  
  fixrect2=createSprite(1100, 100, 50, 80);
  fixrect3=createSprite(59, 100, 50, 80);
  moverect1=createSprite(600,100,30,30);
  fixrect2.shapeColor="green";
  moverect1.shapeColor="green";
  fixrect3.shapeColor="green";
  moverect1.velocityX=-10;

  fixrect4=createSprite(1100, 500, 50, 80);
  fixrect5=createSprite(59, 500, 50, 80);
  moverect2=createSprite(600,500,30,30);
  fixrect4.shapeColor="green";
  moverect2.shapeColor="green";
  fixrect5.shapeColor="green";
  moverect2.velocityX=-10;
}

function draw() {
  background(255,205,255); 
  if (fixrect.x-moverect.x < fixrect.width/2 + moverect.width/2){
    moverect.shapeColor="red";
    fixrect.shapeColor="red";
    moverect.velocityX=-10;
  }
  else  if (moverect.x-fixrect1.x < fixrect1.width/2 + moverect.width/2){
    moverect.shapeColor="red";
    fixrect1.shapeColor="red";
    moverect.velocityX=10;
  }
 
  if (fixrect2.x-moverect1.x < fixrect2.width/2 + moverect1.width/2){
    moverect1.shapeColor="red";
    fixrect2.shapeColor="red";
    moverect1.velocityX=-10;
  }
  else  if (moverect1.x-fixrect3.x < fixrect3.width/2 + moverect1.width/2){
    moverect1.shapeColor="red";
    fixrect3.shapeColor="red";
    moverect1.velocityX=10;
  }

  if (fixrect4.x-moverect2.x < fixrect4.width/2 + moverect2.width/2){
    moverect2.shapeColor="red";
    fixrect4.shapeColor="red";
    moverect2.velocityX=-10;
  }
  else  if (moverect2.x-fixrect5.x < fixrect5.width/2 + moverect2.width/2){
    moverect2.shapeColor="red";
    fixrect5.shapeColor="red";
    moverect2.velocityX=10;
  }

   
   
   
  //if (moverect.x-fixrect.x < fixrect.width/2 + moverect.width/2){
   // moverect.shapecolour="green";
   // fixrect.shapecolour="green";
   // moverect.velocityX=-10;
  //}

 
  drawSprites();
}