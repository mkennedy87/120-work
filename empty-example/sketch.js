let sun;
sun.d = 100

function setup(){
  createCanvas( 1600,900 );
}

function draw() {
  background( 125, 125, 255 );
  push();
// changing sky, need to make alpha a variable
  fill( 200, 40, 100 );
  noStroke();
  rect( 0, 0, 1600, 900 );
  pop();
// sun
push();
// tanslate( 200, 200 );
if( mouseX > )
noStroke();
fill( 255, 255, 0);
ellipse( mouseX, mouseY, 100 );
pop();
}

}
// make sun class
class Sun {
  constructor( init_x, init_y, size, color ) {
    this.posX =
    this.posY =
    this.size = 100;
    this.rad = this.size * 0.5;
    this.color = color;
    this.delta_x =
    this.delta_y =

  }
}
