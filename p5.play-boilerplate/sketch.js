function setup() {
  createCanvas(1200,600 );
  
  fill("black");
  rect(0, 600, 1200, 400)

  fill("blue");
  triangle(400, 260, 720, 260,560, 100);
  rect(400, 280, 320, 300)

  
  fill("green")
  rect(300, 150, 70, 430)
  
  triangle(870,100,925,40,980,100);
  fill("yellow")
  rect(750, 150, 70, 430)
  triangle(300,140,335,100,370,140);

  fill("red")
  rect(150, 110, 100, 470)
  triangle(750,140,785,100,820,140);

  fill("purple")
  rect(870, 110, 100, 470)
  triangle(140, 100, 195, 40,250, 100);



}

function draw() {
  background(255,255,255);  
  drawSprites();
}