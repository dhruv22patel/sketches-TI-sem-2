let r;
function setup() {
  createCanvas(700, 700);
  p=0
  l=5;
}

function draw() {
  background(400, 800, 200, .5);
  let w =105;
  let h =100;
  let e = 2890;
  let o = 300;
  rect(p, width/2+w/2-w-5,width/2-h/2,w,h);
  rect(p, width/2+w/2,width/2-h/2,w,h);
  rect(p, height/2+w/2-w-5,width/2-h/2,h,w);
  rect(p, height/2-w/2,width/2-h/2,h,w);
  rect(p, height/3+w/2-w-5,width/2-h/2,h,w);
  rect(p, height/3-w/2,width/2-h/2,h,w);
  rect(p, height/4+w/2-w-5,width/2-h/2,h,w);
  rect(p, height/4-w/2,width/2-h/2,h,w);
  p=p+1.9;
  p=p+0;
  if(p>width)
  {l=-l;}
  if(p<5)
  {l=-l;}
}