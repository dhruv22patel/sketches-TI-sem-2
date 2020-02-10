//Basic Object creation and Particle system

let p1//3 particle objects
let theta;

function setup() {
  createCanvas(800, 800);
  p1 = new Particle();      //calls constructor()
  // p2 = new Particle();      //for each object
  // p3 = new Particle();

}

function draw() {
  // background(250,128);
  fill(255);
  background(3,1,50,3);
  frameRate(130);
  stroke(255,85);
  let a = (mouseX / width) * 30;
  theta = radians(a);
  translate(0,600);
  line(0,0,0,-120);
  translate(0,-120);
  branch(120);
  p1.update();              //calls update() for
  p1.display();             //calls display for

}

function branch(h) {
  h *= 0.96;
  if (h > 5) {
    push();    // Save the current state of transformation (i.e. where are we now)
    rotate(theta);   // Rotate by theta
    line(0, 0, 0, -h);  // Draw the branch
    translate(0, -h); 
    branch(h);      
    pop();
    push();
    rotate(-theta);
    line(0, 0, 0, -h);
  }
}

class Particle {
  constructor() {
    this.posX = random(0, 400);      //location x,y
    this.posY = random(0, 400);
    this.velX = random(1, 2);         
    this.velY = random();                          
    this.rad = random(5,20);           //random diameter
    this.radi = random(2,2);           //random diameter
    this.rado = random(5,5);           //random diameter
    this.radu = random(1,1);           //random diameter
    this.radt = random(3,3);           //random diameter
    this.radr = random(4,4);           //random diameter
    this.rade = random(6,6);           //random diameter
  }

  update() {
    this.posX += this.velX;            //add velo to dist
    this.posY += this.velY;

    this.velX += this.accX;            //add acc to velo
    this.velY += this.accY;

    //check canvas edges and bounce
    if (this.posX < 0 || this.posX > 400) {
      this.velX = -this.velX;
    }

    if (this.posY < 0 || this.posY > 400) {
      this.velY = -this.velY;
    }
  }

//   to create ellipse as stars
  display() {
    ellipse(654, 200, this.rad, this.rad);
    ellipse(98, 87, this.radi, this.radi);
    ellipse(786, 400, this.rado, this.rado);
    ellipse(500, 288, this.radu, this.radu);
    ellipse(765, 98, this.radr, this.radr);
    ellipse(76, 988, this.radt, this.radt);
    ellipse(987, 766, this.rade, this.rade);
    ellipse(640, 248, this.radu, this.radu);
    ellipse(465, 948, this.radr, this.radr);
    ellipse(746, 98, this.radt, this.radt);
    ellipse(87, 76, this.rade, this.rade);
  }
}
