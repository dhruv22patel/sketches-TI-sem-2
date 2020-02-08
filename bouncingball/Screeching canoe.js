function setup() {
  createCanvas(700, 700);
  // for(let i = 0; i<width;i+=5){
    // let n = map(i,0,width,10,3);
    // polygon(i,height/2,i/5,n);}
}

function draw() {
  // background(220);
}
function mouseClicked() {
  polygon(mouseX, mouseY,5,(random(4,10)));
int(random(3,5));
}
function polygon(x,y,radius, npoints) {
  let angle= TWO_PI / 9;
    beginShape();
    for (let a= 0;a <TWO_PI;a+=angle){
    let sy = y+cos(a)* radius;
    let sx = x+sin(a)* radius;
    // vertex(sx,sy);
      ellipse(sx,sy,10,20)
        rotate(PI/9);
      
  }
  endShape;
}