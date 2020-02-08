let rx,ry;
function setup(){
  createCanvas(700,700);
  rx = width/9;
  ry =height/9;
  step = 2.3
  noStroke();
  fill(68,0,255,40);
}
function draw(){
  background(220,360,3,4);
  let x=random(-1,step);
  let y=random(-1,step);
  rx+=x;
  ry+=y;
  ellipse(rx,ry,90,50);
  ellipse(rx,ry,200,20);
}