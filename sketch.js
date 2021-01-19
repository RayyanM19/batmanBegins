const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var maxDrops = 100;
var drop = [];
var umb;
var thunder,thunder1,thunder2,thunder3,thunder4;
var thunFrame;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;

    umb = new Umbrella(200,550);

    if(frameCount%100===0){
        for(var i=0; i<maxDrops; i++){
            drop.push(new Drops(random(0,400),random(0,400)))
        }
    }

    
}

function draw(){
    background(0);
    Engine.update(engine);
    drawSprites();

    umb.display();
    for(var i=0; i<maxDrops; i++){
        drop[i].display();
        drop[i].updatey();
    }

    var rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunder = createSprite(random(10,380),random(0,50));
        thunFrame = frameCount;
        thunder.scale = random(0.3,0.6);
        switch(rand){
            case 1:thunder.addImage(thunder1);
            break;
            case 2:thunder.addImage(thunder2);
            break;
            case 3:thunder.addImage(thunder3);
            break;
            case 4:thunder.addImage(thunder4);
            break;
            default: break;
        }
    }
    if(thunFrame+10===frameCount && thunder){
        thunder.destroy();
    }

    
}   

