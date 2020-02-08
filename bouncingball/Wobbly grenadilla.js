let rx,ry;
function setup() {
  createCanvas(400, 400);
  rx = width/2
  ry = height/2
  step=3
  fill=(0)
}

function draw() {
  background(220,10);

let x = random(-2,step);
let y = random(-2,step);
rx+=x
ry+=y
ellipse(rx,ry,5,5);
}