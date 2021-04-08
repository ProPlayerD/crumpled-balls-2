class Paper {
    constructor(x, y) {
      var options = {
        density:1,
        friction: 1,
        restitution:0.5,
        isStatic : false
      };
      this.body = Bodies.circle(x, y, 35, options);
      this.radius = 50*2
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    };
    display(){
       var pos = this.body.position;
       push();
       fill("white");
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,this.radius,this.radius);
       //ellipseMode(CENTER);
       //ellipse(pos.x,pos.y,this.radius,this.radius)
       pop();

    };
  };