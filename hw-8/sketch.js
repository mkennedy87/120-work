function setup(){
  createCanvas( windowWidth, 800);
}

function draw(){
  background ( 0 );

    fill( 0, 0, 255 );
    for( let x = 40; x <= width; x += 120 )
    for( let y = 40; y <= height; y += 120 )
  ellipse( x, y, 60, 60);
    fill( 255, 0, 0 );
  rect( 10, 70, 60, 60 );
}
