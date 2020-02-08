function setup() {
  createCanvas(400, 400);
// colorMode(HSB);
  stroke(0);

for (let j = 0;j < height;j=j+30)
{
  for(let i = 0; i <width; i=i+25)
  {
    let r = map(i,0,width,0, 360);
    let q = map(j,0,height,2,150);
    fill(r,100,100);
    ellipse(i,j,q,q);
  }
}
}