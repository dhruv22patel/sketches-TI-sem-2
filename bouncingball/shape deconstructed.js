let r;

function setup() {
  createCanvas(400, 400);
  r = 150;
}

function draw() {
  r = mouseX;
  background(255,0,0,0.9);
  stroke(255,32,54,80);
  fill(0,255,36);
  deg = 360;
  for (let l = 0; l < 5; l++) {
    jazzyCircle(r * l, l, deg / (l + 1));
  }
}

function jazzyCircle(r, l, deg) {
  for (let t = 0; t < deg; t = t + 2) {
    fill(l * 50)
    d = radians(t);
    let x = width / 68 + r * sin(d) + random(0, 1);
    let y = height / 2 + r * cos(d) + random(0, 1);
    ellipse(x, y, random(0, 10), random(0, 10));
  }
}