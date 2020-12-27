const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    
    canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    greyBox = new GreyBlock(390,155,30,40);

    Engine.run(engine);

}

function draw(){
    background(225);
    Engine.update(engine);

    greyBox.display();
    
}


