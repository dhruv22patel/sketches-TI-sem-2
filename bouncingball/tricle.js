let r;

function setup() {
  createCanvas(800, 800);
  series(300);
  colorMode(HSB);
  fill(2,34,54)
   stroke(0);

for (let j = 0;j < height;j=j+30)
{
  for(let i = 0; i <width; i=i+25)
  {
    let r = map(i,0,width,0, 500);
    let q = map(j,0,height,2,1);
    // fill(r,100,100);
    ellipse(i,j,q,q);
  }
}
}

function series(n) {
  print(n);
  noStroke();
  fill(random(0,60), random(0,750),random(0,974),random(0,463));
  ellipse(0,height/2,n,n);
  ellipse(width-n,height/4,n,n)
   fill(random(0,600), random(0,407),random(0,39),random(0,200));
   ellipse(width/3,height/6,n,n)
   fill(random(0,60), random(0,470),random(0,38),random(0,200));
  ellipse(width/6,height/64,n,n)
   fill(random(0,40), random(0,407),random(0,3),random(0,150));
  ellipse(width/7,height/3,n,n)
   fill(random(0,10), random(0,97),random(0,563),random(0,20));
  ellipse(width/8,height/44,n,n)
  
   fill(random(0,400), random(0,47),random(0,98),random(0,100));
  ellipse(width/9,height/6,n,n)
  // triangle(width/9,height/6,n,n,54,n)
  fill(random(0,1090), random(0,847),random(0,30),random(0,290));
  triangle(width/900,height/2,n,n,54,n)
  triangle(width/4,height/9,n,n,5,n)
    fill(random(0,600),                random(0,47),random(0,3),random(0,200));
  triangle(width/9,height/6,n,n,54,n)
   fill(random(0,600), random(0,47),random(0,3),random(0,250));
  triangle(width/90,height/69,n,n,54,n)
  if (n>2) {
    series(n/2);
        
    // rect(a+b,a+b,a+b,a+b,50)
  }
}