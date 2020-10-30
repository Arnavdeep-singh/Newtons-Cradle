
class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 400
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display() {

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(0);
            strokeWeight(7);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
                        
            pop();
        
    }
}