class Stone{

constructor(x, y, diameter){

    var options = {
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
    }
this.body = Bodies.circle(x, y, diameter, options);
this.diametr=diameter;
World.add(world, this.body);

}

display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    ellipseMode(CENTER);
    ellipse(this.body.position.x, this.body.position.y, 30);
    pop();
}

}