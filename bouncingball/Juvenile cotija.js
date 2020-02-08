//Basic Object creation and Particle system

let p1, p2, p3;    //3 particle objects

function setup() {
  createCanvas(700, 700);
  p1 = new Particle();      //calls constructor()
  p2 = new Particle();      //for each object
  p3 = new Particle();
  p=0
  l=5;
}

function draw() {
  background(900,2);
  fill(9,79,79,65);

  p1.update();              //calls update() for
  p2.update();              //these objects
  // p3.update();              
  p1.display();             //calls display for
  p2.display();             //these objects
  p3.display();
  p=p+1;
  p=p+0.1;
  if(p>height)
  {l=-l;}
  if(p<5)
  {l=-l;}
}

class Particle {
  constructor() {
    this.posX = random(0, width);      //location x,y
    this.posY = random(0, height);
    this.velX = random(1, 2);          //velocity in x,y
    this.velY = random();              //i.e "step-size"
    this.accX = 2;                   //acc'n in x,y     
    this.accY = 1;                   //i.e "attraction"
    this.rad = random(5,20);           //random diameter
  }

  update() {
    this.posX += this.velX;            //add velo to dist
    this.posY += this.velY;

    this.velX += this.accX;            //add acc to velo
    this.velY += this.accY;

    //check canvas edges and bounce
    if (this.posX < 0 || this.posX > width) {
      this.velX = -this.velX;
    }

    if (this.posY < 0 || this.posY > height) {
      this.velY = -this.velY;
    }
  }

  display() {
  triangle(p, this.posY, this.rad, this.rad,this.rad,this.posY);
    
  }
}