class Launcher{
  constructor(x, y){
    var options={
      isStatic: false,
      restitution: 0.3,
      friction: 1,
      density:1.0
    }

    this.body = Matter.Bodies.rectangle(x, y, 50, 50, options);
    this.image = loadImage("launcher.png");

    World.add(world, this.body);
  }

  display(){
    var pos = this.body.position;

    imageMode(CENTER);
    image(this.image, pos.x, pos.y, 50, 50);
  }
}