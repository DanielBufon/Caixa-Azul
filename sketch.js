var Blocks
function setup() {
  createCanvas(400,400);
 Blocks = createSprite (200,200,25,25);
 Blocks.shapeColor = "blue";
}

function draw() 
{
  background(30);

if (keyDown(RIGHT_ARROW)){
  Blocks.x= Blocks.x +5
}
if (keyDown(LEFT_ARROW)){
  Blocks.x= Blocks.x -5
}
if (keyDown(DOWN_ARROW)){
  Blocks.y= Blocks.y +5
}
if (keyDown(UP_ARROW)){
  Blocks.y= Blocks.y -5
}

  drawSprites()
}




