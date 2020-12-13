class Ball{
    constructor(x,y,width,height,angle){
        var options = {
            isStatic:true,
            density:1,
            frictionAir:0.005
        }
        this.body=Bodies.circle(x,y,width,options)
        World.add(world,this.body)
        this.width=width
        this.height=height
        
    }
    display(){
        var angle=this.body.angle
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(angle)  
    ellipse(0,0,this.width)  
    pop()
    }
}