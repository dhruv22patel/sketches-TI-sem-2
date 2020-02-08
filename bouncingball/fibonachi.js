//Simple Fibonacci series generator

function setup() {
  createCanvas(700, 700);
  noStroke();
  fill(34,64,643,50);
  series(0, 1); //starting nos
}

function series(a, b) {
  triangle(b, height / 2, b, b,2,0);  //x loc, dia are fibo nos
  if (b < width / 1.9)             //allow until max size
  {
    series(b, a + b);            //core logic
  }
}