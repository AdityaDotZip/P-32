class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.chain = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.chain);
    }

    fly(){
        this.chain.bodyA = null;
    }

    attach(body){
        this.chain.bodyA = body;
    }
    
    display(){
        if(this.chain.bodyA){
        var A = this.chain.bodyA.position;
        var B = this.pointB;

        push();

        strokeWeight(4);
        line(A.x, A.y, B.x, B.y);

        pop();
        }
    }

}