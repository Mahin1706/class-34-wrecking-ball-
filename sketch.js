const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1;
var block1;
var back, backimg;
var polygon,slingshot;
function preload(){
  backimg = loadImage("background_img.jpg");
}
function setup() {
  
  createCanvas(3000,800);
  
  back = createSprite(400, 200, 3000, 800);
  back.addImage(backimg);
  back.scale = 5;

  engine = Engine.create();
  world = engine.world;

  stand1 = new Ground(600, 630, 1900, 20);
  
  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70);
  box9 = new Box(800, 100, 70, 70);
  box10 = new Box(800, 100, 70, 70);
  box11 = new Box(800, 100, 70, 70);
  box12 = new Box(800, 100, 70, 70);
  box13 = new Box(700, 100, 70, 70);
  box14 = new Box(700, 100, 70, 70);
  box15 = new Box(700, 100, 70, 70);
  box16 = new Box(700, 100, 70, 70);
  box17 = new Box(700, 100, 70, 70);
  box18 = new Box(700, 100, 70, 70);
  box19 = new Box(700, 100, 70, 70);
  box20 = new Box(700, 100, 70, 70);

  

  polygon = new Polygon(200, 200, 70);

  slingshot = new SlingShot(polygon.body, {x: 500, y: 50});


}

function draw() {
  Engine.update(engine);
  background(0);
  drawSprites();

  stand1.display();
  

  /*fill(255, 190, 51);
  fill(15, 222, 254);
  fill(115, 229, 20);
  fill(196, 86, 255);
  fill(115, 229, 20);*/
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display();4
  
  polygon.display();
  slingshot.display();

}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}