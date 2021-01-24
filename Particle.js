class Particle{
    constructor(x,y,r){
        var options={
            //'restitution':0.4,
            'density':19
             
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x,y,this.r/2,options);

        World.add(world,this.body)
    }
 
display(){
    var pos=this.body.position;
  //  var angle=this.body.angle;

     push();
    translate(pos.x,pos.y);
   // rotate(angle);
    noStroke();
    fill("#02C9FC");
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
     pop();

}
update(){
    //return;
        if(this.body.position.y>=1000){
          Matter.Body.setPosition(this.body,{x:random(1,400),y:random(-10,-100)})
        }

      //  drawSprites();
    }
}