class Ball {
    constructor(x, y,r) {

        var options ={
            restitution:0.2,
            friction:1.0,
            density:1.0
        }
        this.r=r;
        this.image = loadImage("Disc.png")
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(CENTER);
        image(this.image,0, 0, this.r,this.r);
        pop();
    }

};