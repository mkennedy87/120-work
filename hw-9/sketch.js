let txtAr = ["HEY!", "THIS", "SKETCH", "LOOKS", "KINDA", "FAMILIAR!", "!!!!!!!!!!!!!"];

function setup() {
  createCanvas( 1200, 600);
// make time to read text
  frameRate(1)
}

let idx = 0;
function draw() {
  background( 255, 255, 0 );
// text size
  textSize(50)
// call mikeHead
  mikeHead();
  // call text balloon
  speechBubble();
  text( txtAr[idx], 350, 0);
// increase array by one each frame
  idx = ( idx + 1) % txtAr.length;

}
  // make head a function
function mikeHead(){
  push();

  translate( 300, 300 );
noStroke();
  // hair
  push();
  fill( 'rgb(124, 51, 15)' );
  ellipse( 0, -50, 375, 400 );
  pop();
  push();
  ellipse();
  // ears
push();
  fill( 'rgb(255, 216, 171)' );
  ellipse( 150, 25, 100, 150);
  ellipse( -150, 25, 100, 150);
pop();
// more hair
push();
fill( 'rgb(124, 51, 15)' );
ellipse( 110, -50, 200, 235 );
ellipse( -110, -50, 200, 235 );
pop();
// head
push();
fill( 'rgb(255, 216, 171)' );
ellipse( 0, 0, 300, 400 );
pop();
  // more hair
  push();
  fill( 'rgb(124, 51, 15)' );
  arc( 0, -175, 250, 200, 0, PI + QUARTER_PI, OPEN);
  pop();
  // beard
  push();
  fill( 'rgb(124, 51, 15)' );
  arc( 0, 80, 300, 300, 0, PI);
  pop();
  // mouth
  push();
  fill( 255 );
  arc( 0, 80, 160, 160, 0, PI);
  pop();
  // mustache maybe
  push();
  fill( 'rgb(184, 123, 31)' );
  quad( -80, 75, 80, 75, 100, 110, -100, 110);
  pop();
  // nose lines maybe
  push();
fill( 'rgb(255, 171, 171)' );
strokeWeight( 5 );
  line( -10, -25, -10, 84 );
pop();
  // nose
push();
fill( 'rgb(255, 171, 171)' );
triangle( -30, 85, 0, 40, 30, 85 );

pop();
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
  push();
  fill( 'rgb(124, 51, 15)' );
  rect( 20, -60, 90, 10 );
rect( -20, -60, -90, 10 );
  pop();
pop();
}

function speechBubble(){
push();
  noStroke();
  fill(255);
  ellipse( 450, -15, 400, 200 );
  triangle( 200, 100, 375, -20, 450, 0);
pop();
}
