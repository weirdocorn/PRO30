var ground, stand;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;

function setup() {
  createCanvas(800,400);
  ground = new Ground(400,360,810,50);
  stand = new Ground(580,355,200,10);

  //layer five
  box1 = new Box(580,375,40,40);
  box2 = new Box(620,375,40,40);
  box3 = new Box(660,375,40,40);
  box4 = new Box(540,375,40,40);
  box5 = new Box(500,375,40,40);

  //layer four
  box6 = new Box(600,415,40,40);
  box7 = new Box(640,415,40,40);
  box8 = new Box(560,415,40,40);
  box9 = new Box(520,415,40,40);

  //layer three
  box10 = new Box(580,455,40,40);
  box11 = new Box(620,455,40,40);
  box12 = new Box(540,455,40,40);
  
  //layer two
  box13 = new Box(600,495,40,40);
  box14 = new Box(640.495,40,40);

  //layer one
  box15 = new Box(580,535,40,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:200})

  imageMode(CENTER)
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40)
}

function draw() {
  background(255,255,255);  
  drawSprites();

  ground.display();
  stand.display();

  box1.display();
  disappear(box1);

  box2.display();
  disappear(box2);
  
  box3.display();
  disappear(box3);
  
  box4.display();
  disappear(box4);
  
  box5.display();
  disappear(box5);
  
  box6.display();
  disappear(box6);
  
  box7.display();
  disappear(box7);
  
  box8.display();
  disappear(box8);
  
  box9.display();
  disappear(box9);
  
  box10.display();
  disappear(box10);
  
  box11.display();
  disappear(box11);
  
  box12.display();
  disappear(box12);
  
  box13.display();
  disappear(box13);
  
  box14.display();
  disappear(box14);
  
  box15.display();
  disappear(box15);

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(bird.body);
  }
}

function disappear(body1){
  push();

  if(body1.speed < 3){
    tint(255, 126);
  }
  else{
    //nothing
  }
  pop();
}