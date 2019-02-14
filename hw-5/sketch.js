function setup() {
  createCanvas( windowWidth, 800 );


}

function draw() {
  // sky
    background( 125, 125, 255);
  // grass
    noStroke();
    fill( 50, 255, 0 );
    rect( 0, 250, windowWidth, 600 );
  // street
    fill( 100 );
    rect( 0, 350, windowWidth, 350 );
    // lines
    fill( 255, 255, 0 );
    rect( 0, 510, windowWidth, 10);
    rect( 0, 530, windowWidth, 10);
    // curbs
    fill( 155 );
    rect( 0, 350, windowWidth, 25 );
    rect( 0, 675, windowWidth, 25 );

  noCursor();
  // car sandbox
  push();
  // make car follow mouse
  translate( mouseX, mouseY );
  push();
  // car body
  fill( 255, 0, 0 );
  rect( -250, 0, 500, 100 );
  quad( -150, 0, -125, -75, 75, -75, 125, 0 );
  // rear window
  fill( 200 );
  quad( -140, 0, -120, -65, -30, -65, -30, 0 );
  // front window
  quad( -20, 0, -20, -65, 70, -65, 115, 0 );
  // read door handle
  rect( -130, 20, 20, 5 );
  // front dh
  rect( -10, 20, 20, 5 );
  //r bumper
  rect( -270, 80, 20, 20 );
  // fb
  rect( 250, 80, 20, 20 );
  // rear tire
  fill( 50 );
  ellipse( -150, 100, 100 );
  // rim
  fill( 150 );
  ellipse( -150, 100, 60 );
  // cap
  fill(255);
  ellipse( -150, 100, 20 );
  // front tire
  fill( 50 );
  ellipse( 150, 100, 100 );
  // rim
  fill( 150 );
  ellipse( 150, 100, 60 );
  // cap
  fill(255);
  ellipse( 150, 100, 20 );

  pop();
  pop();
}
