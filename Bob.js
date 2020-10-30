class Bob {
    constructor(x, y, radius) {
      var options = {
          'restitution':1.2,
          'friction':0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options, 35);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill(97,152,162);
      strokeWeight(0);
      ellipse(0,0, this.radius);
      pop();

    }
  }