function setup() {
  createCanvas(700, 700);
  p=0
  l=5;
}

function draw() {
  background(426, 800, 200);
  let w =55;
  let h =80
  rect(p,height/2-h/2,w,h);
  p=p+l;
  if(p>width)
  {l=-l;}
  if(p<0)
  {l=-l;}
}