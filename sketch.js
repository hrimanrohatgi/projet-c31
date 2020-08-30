const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies; 

var ground;
var divisionHeight = 300;

var div=[];
var plinko=[];
var particle = [];
function setup() {
  createCanvas(700,700);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
ground = new Ground(400,600,1000,20)

/*divi1= new division(50,480,20,230)
divi2 = new division(150,480,20,230)
divi3 = new division(250,480,20,230)
divi4 = new division(350,480,20,230)
divi5 = new division(450,480,20,230)
divi6 = new division(550,480,20,230)
divi7 = new division(650,480,20,230)
divi8 = new division(750,480,20,230)*/

for(var i=0;i<=innerWidth;i=i+100){
  div.push(new division(i,540,20,200))
}
 
/*plinko1 = new pinko(100,100,20,20)
plinko2= new pinko(200,100,20,20)
plinko3 = new pinko(300,100,20,20)
plinko4 = new pinko(400,100,20,20)
plinko5 = new pinko(500,100,20,20)
plinko6 = new pinko(600,100,20,20)
plinko7 = new pinko(100,200,20,20)
plinko8 = new pinko(200,200,20,20)
plinko9 = new pinko(300,200,20,20)
plinko10 = new pinko(400,200,20,20)
plinko11 = new pinko(500,200,20,20)
plinko12 = new pinko(600,200,20,20)
plinko13 = new pinko(100,300,20,20)
plinko14 = new pinko(200,300,20,20)
plinko15 = new pinko(300,300,20,20)
plinko16 = new pinko(400,300,20,20)
plinko17 = new pinko(500,300,20,20)
plinko18 = new pinko(600,300,20,20)*/

for(var x=100;x<700;x=x+100){
  plinko.push(new pinko(x,100));
}

for(var x=100;x<700;x=x+100){
 plinko.push(new pinko(x,200)) 
}


for(var x=100;x<700;x=x+100){
  plinko.push(new pinko(x,300)) 
 }

 for(var x=100;x<700;x=x+100){
  plinko.push(new pinko(x,400)) 
 }
  
for(var j=0;j < particle.length;j++){
particle[j].display();  
}
}
function draw() {
  background("black");  
/*ground.display();
divi1.display();
divi2.display();
divi3.display();
divi4.display();
divi5.display();
divi6.display();
divi7.display();
divi8.display();
plinko1.display();
plinko2.display();
plinko3.display();
plinko4.display();
plinko5.display();
plinko6.display();
plinko7.display();
plinko8.display();
plinko9.display();
plinko10.display();
plinko11.display();
plinko12.display();
plinko13.display();
plinko14.display();
plinko15.display();
plinko16.display();
plinko17.display();
plinko18.display();*/
}
