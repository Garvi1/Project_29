const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2,height-10,width,20);
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);
    //row1(stand1)
    Box1 = new Box(300,275,30,40)
    Box2 = new Box(330,275,30,40)
    Box3 = new Box(360,275,30,40)
    Box4 = new Box(390,275,30,40)
    Box5 = new Box(420,275,30,40)
    Box6 = new Box(450,275,30,40)
    Box7 = new Box(480,275,30,40)
    //row2(stand1)
    Box8 = new Box(330,235,30,40);
    Box9 = new Box(360,235,30,40);
    Box10 = new Box(390,235,30,40);
    Box11 = new Box(420,235,30,40);
    Box12 = new Box(450,235,30,40);
//row3(stand1)
    Box13 = new Box(360,195,30,40) 
    Box14 = new Box(390,195,30,40) 
    Box15 = new Box(420,195,30,40) 
   // row4(stand1)
   Box16 = new Box(390,155,30,40)

   //row1(stand2)
   Box1A = new Box(640,175,30,40);
   Box2A = new Box(670,175,30,40);
   Box3A = new Box(700,175,30,40);
   Box4A = new Box(730,175,30,40);
   Box5A = new Box(760,175,30,40);

   //row2(stand2)
   Box1B = new Box(670,135,30,40);
   Box2B = new Box(700,135,30,40);
   Box3B = new Box(730,135,30,40);

   //row3(stand2)
   Box1C = new Box(700,95,30,40);

   ball = Bodies.circle(50,200,20);
   World.add(world,ball);
   sling = new Slingshot(this.ball,{x:100,y:200});
   /*const1 = {
     bodyA:ball.body,bodyB:{x:100,y:200},stiffness:0.04
}
   var garvi = Constraint.create(const1);
  World.add(world,garvi)*/
}
function draw() {
  background("green");  
  Engine.update(engine);
  ground.display();
  stand1.display();
  stand2.display();
  fill("blue");
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Box6.display();
  Box7.display();
  fill("red");
  Box8.display();
  Box9.display();
  Box10.display();  
  Box11.display();
  Box12.display();
  fill("orange");
  Box13.display();
  Box14.display();
  Box15.display();
  fill("pink");
  Box16.display();
  fill("yellow");
  Box1A.display();
  Box2A.display();
  Box3A.display();
  Box4A.display();
  Box5A.display();
  fill("lightblue");

  Box1B.display();
  Box2B.display();
  Box3B.display();
  fill("cyan");

  Box1C.display();
  

  sling.display();

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}