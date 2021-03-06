

function setup(){
  createCanvas( 800, 450 );
  background( 100, 175, 255);

}

let circleSize = 20;
let posX = 0;
let posY = 0;
let ballSpeedX = .2 ;
let ballSpeedY = .2;

function draw(){
  let pos_x = floor(random( 800 ) );
  let pos_y = floor(random( 450 ) );
  noStroke();

  fill(  0, 255, 0, 20 );
  ellipse( pos_x, pos_y, circleSize, circleSize );


  let posGoX = ballSpeedX * random( round( 10 ));
  let posGoY = ballSpeedY * random( round( 10 ));

  posX += posGoX;
  posY += posGoY;

if( posX >= width || posX <= 0) {
  ballSpeedX = ballSpeedX * -1;
}
if( posY >= height || posY <= 0) {
  ballSpeedY = ballSpeedY * -1;
}

  fill( 255, 0, 0, 1 );
  ellipse( posX, posY, 50, 50);


}
