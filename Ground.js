class Ground{
  constructor(x, y){
    var options={
      isStatic: true,
      restitution: 0.3,
      friction: 1,
      density:1.0
    }

    this.body = Matter.Bodies.rectangle(x, y, 210, 10,options);

    World.add(world, this.body);
  }

  display(){
  
    fill("red");
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, 210, 10);
  }
}