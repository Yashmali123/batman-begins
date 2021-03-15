const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var boy,boyimg;
var maxDrops=100;
var drops=[];

function preload(){
boyimg=loadAnimation("images/walking_1.png","images/walking_2.png",
"images/walking_3.png","images/walking_4.png","images/walking_5.png",
"images/walking_6.png","images/walking_7.png","images/walking_8.png",)
}

function setup(){
    var canvas  = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;
   
    boy=createSprite(250,350,50,50)
    boy.addAnimation("car",boyimg)
    boy.scale=0.3;
}

function draw(){
    background(0)
    Engine.update(engine);

    if(frameCount%5===0){
        drops.push(new Drops(random(10,490),10,10))
      }
        
        
        
      for(var j=0;j<drops.length;j++){
        drops[j].display();
      }






    drawSprites(); 
}   

