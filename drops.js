class Drops{
    constructor(x,y){
        var options={
            friction:0.001,
            restitution:0.1
        }

        this.body = Bodies.circle(x,y,5,options);
        this.r = 5;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
    
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
    updatey(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }
}