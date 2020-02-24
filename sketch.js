var Mrect,Frect;


function setup() {
  createCanvas(800,400);
 Frect= createSprite(400, 200, 50, 50);
 Mrect=createSprite(20,20,70,10);
}

function draw() {
 background(0);
  Mrect.x=World.mouseX;
  Mrect.y=World.mouseY;

  if((Mrect.x-Frect.x<=Mrect.width/2+Frect.width/2)&&(Frect.x-Mrect.x<=Mrect.width/2+Frect.width/2)
  &&(Mrect.y-Frect.y<=Mrect.height/2+Frect.height/2) &&(Frect.y-Mrect.y<=Mrect.height/2+Frect.height/2))
  {
Mrect.shapeColor="red";
Frect.shapeColor="red";
 }else{
  Mrect.shapeColor="blue";
  Frect.shapeColor="blue";
 }
  

  drawSprites();


}