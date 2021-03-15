class Drops{
    constructor(x,y,radius){
    var options={
     isStatic:false,
     friction:0.1,
     density:1.0
    }
    
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    this.image=loadImage("rain drop.png ")
    World.add(world,this.body)
    }
    
    display() { 
    var pos=this.body.position; 
    push() 
    translate(pos.x, pos.y);
     imageMode(CENTER) 
      image(this.image,0,0,this.radius, this.radius); 
       pop() }
    }