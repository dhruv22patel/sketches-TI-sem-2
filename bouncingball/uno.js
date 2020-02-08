let r;
let x = 320;
let y = 180;
let xspeed = 5;
let yspeed = 2;
// let r = 25
function setup() {
  createCanvas(1400, 1700);
  p=0
  l=5;
}

function draw() {
  background(400, 800, 200, .5);
  let w =105;
  let h =100;
  let e = 2890;
  let o = 300;
//   ellipse(p,30,50);
//   ellipse(p,32,50);
  
//   ellipse(p,90,50);
//   ellipse(p,92,50);
  
//   ellipse(p,150,50);
//   ellipse(p,152,50);
  
//   ellipse(p,210,50);
//   ellipse(p,212,50);
  
//   ellipse(p,270,50);
//   ellipse(p,272,50);
  
//   ellipse(p,330,50);
//   ellipse(p,332,50);
  
//   ellipse(p,390,50);
//   ellipse(p,392,50);
  
//   ellipse(p,450,50);
//   ellipse(p,452,50);
  
//   ellipse(p,510,50);
//   ellipse(p,512,50);
  
//   ellipse(p,570,50);
//   ellipse(p,572,50);
  
//   ellipse(p,630,50);
//   ellipse(p,632,50);
  
//   ellipse(p,690,50);
//   ellipse(p,692,50);
  triangle(p,90,50);
  triangle(p,892,0,63,46);
  
  // rect(p, height/2+w/2,width/2-h/2,h,w);
  // rect(p, height/2+w/2-w-5,width/2-h/2,h,w);
  // rect(p, height/2-w/2,width/2-h/2,h,w);
  // rect(p, height/3+w/2-w-5,width/2-h/2,h,w);
  // rect(p, height/3-w/2,width/2-h/2,h,w);
  // rect(p, height/4+w/2-w-5,width/2-h/2,h,w);
  // rect(p, height/4-w/2,width/2-h/2,h,w);
  // if(p>width){
  // changeDirection=true}
  // else if (p<=0){
  // changeDirection=false}
  p=p+4;
  p=p+4;
  if(p>width)
  {l=-l;}
  if(p<5)
  {l=-l;}
}
