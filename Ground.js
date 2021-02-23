class Ground{

constructor(x,y,width,height,color){
var options = {
    'isStatic':true
}
this.width = width;
this.height = height;
this.color = color;
this.body = Bodies.rectangle(x,y,width,height,options);
World.add(world,this.body);
}

display(){
    var position = this.body.position;
    push();
    rectMode(CENTER);
    fill(this.color);
    rect(position.x, position.y, this.width, this.height );
    pop();
}
}
