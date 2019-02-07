function setup() {
  createCanvas( 600, 600);
}
function draw() {
  background( 'rgb(255, 241, 0)' );

  push();

  translate( 300, 300 );
noStroke();
  // body sqaure
push();
fill( 'green' );
  rect( -200, 175, 400, 400 );
  pop();
  // hair
  push();
  ellipse();
  // ears
// head
push();
fill( 'rgb(255, 216, 171)' );
ellipse( 0, 0, 300, 400 );
pop();
  // more hair
  // beard
  // mouth
  // mustache maybe
  // nose lines maybe
  // nose
  // eyes
push();
  ellipse( 60, 0, 75, 75 );
  ellipse( -60, 0, 75, 75 );
pop();
  // pupils
fill( 'rgb(106, 131, 228)' );
  ellipse( 80, 0, 30, 60 );
ellipse( -40, 0, 30, 60 );  
  // eyebrows
pop();
}
