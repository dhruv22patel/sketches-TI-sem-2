var hue;

function setup() {
  createCanvas(400, 400);
  hue = 0;
}

function draw() {
  // background(220);
}

function mouseDragged() {
  if (hue > 360) {
    hue = 0;
  } else {
    hue++;
  }
  colorMode(HSL, 360);
  noStroke();
  fill(hue, 200, 200);
  ellipse(mouseX, mouseY, 50, 50);
}