function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(255);
  fill(200,700,5,45);
  noStroke();
  drawCirc(width/2,height/2,width); //calls the drawCirc function
}

function drawCirc(xPos, yPos, dia) {
  //draw ellipse at xPos, yPos of diameter dia
  ellipse(xPos, yPos, dia, dia);                
  
  //checking condition for reducing diameters
  //change this number to reduce number of circles for clarity in analysing
  if (dia > 5) {                             
    //call drawCirc to draw 2 more circles, of half the diameter at the 1/4 and 3/4 positions along the current  
    drawCirc(xPos - dia / 2, yPos, dia / 2);    
    drawCirc(xPos + dia / 2, yPos, dia / 2);
  }
}