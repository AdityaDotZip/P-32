class Box {
  constructor(x, y){
    var options={
      restitution: 0.3,
      friction: 1,
      density:1.0
    }

    this.body = Matter.Bodies.rectangle(x, y, 30, 40,options);
    this.Visiblity =255;

    World.add(world, this.body);
  }

  display(){
    if(this.body.speed < 9){
     fill("green");
     rectMode(CENTER);
     rect(this.body.position.x, this.body.position.y, 30, 40);
    }
    else{
    World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     pop();
    }
   }

   score(){
     if(this.Visiblity <0 && this.Visiblity>-251.025){
       score++; 
     }
   }
}