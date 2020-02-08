let q;
let p;
function setup() {
  createCanvas(400, 400);
  p = new Particle();
  q = new Particle();
}

function draw() {
  background(220);
  p.display();
  q.display();
  p.update();
  q.update();
  ellipse(p.posX,p.posY,10)
}
class Particle {
  constructor() {
    this.posX = (random(1,width));
    this.posY = (random(1,height));
    this.rad = (random(0,50));
    this.veLX = random(1,9);
    this.veLY = random();
    
  }
  display(){
    ellipse(this.posX, this.posY,this.rad);
  }
  // update() {
  //   this.posX+=this.veLX;
  //   this.posY+=this.veLY;
  //   if(this
  // }
}