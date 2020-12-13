const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var ground,ball,box;
var Score

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(600,790,1200,10)
ball=new Ball(200,500,80,80)
box1=new Box(600,650,50,50)

box2=new Box(650,650,50,50)
box3=new Box(700,600,50,50)
box4=new Box(750,600,50,50)
box5=new Box(650,600,50,50)
box6=new Box(700,600,50,50)
box7=new Box(750,600,50,50)
box8=new Box(700,600,50,50)
box9=new Box(800,680,50,50)
roof=new Roof(700,700,300,10)
rope=new Rope(ball.body,{x:300,y:450})
console.log(ball.body)
Score=0;
}

function draw(){
    
    background(0);
    Engine.update(engine);
    ground.display()
    stroke("white")
    fill("white")
    text("Score: "+ Score, 900,300);
    ball.display()
    
    box1.display()
    box2.display()
    box3.display()
     box4.display()
    box5.display()
     box6.display()
    box7.display()
     box8.display()
     roof.display()
     rope.display()
     box9.display()
        score1()
        
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    ball. options = {
    }
    rope.fly()
}
 function score1(){
    if(box1.speed>5){
        Score++
    }
    }
