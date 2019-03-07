function setup(){
  createCanvas( 800, 450 );
  background( 100, 175, 255);
}

let circleSize = 20;


function draw(){
  let pos_x = floor(random( 800 ) );
  let pos_y = floor(random( 450 ) );
  noStroke();
  fill(  0, 0, 0, 10 );
  ellipse( pos_x, pos_y, circleSize, circleSize );

}
