function setup() {
  createCanvas(400, 400);
  fill(128,28);
  series(500);
  // fill(34,764);
}

function draw() {
  // background(220);
}
function series(n)
{
  print(n);
  ellipse(0,height/2,n,n);
  // ellipse(width-n,height/2,n,n);
  ellipse(n/2,height/2,n,n);
  if(n>5)
  {series(n*0.5);
  }
}