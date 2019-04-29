let bubbles = []
const numOfBubbles = 20

function setup() {
  createCanvas( windowWidth, 1080 );
let init_x = 100;
let init_y = 100;
for ( let i = 0; i < numOfBubbles; i++) {
  bubbles.push( new Bubble( init_x, init_y) );
  init_x += 100;
  if( init_x > width) {
    init_x = 100;
    init_y += 100;
  }
  }
}

function draw() {
  background( 200, 150 ,0 );

  for ( let i = 0; i < bubbles.length; i++ ) {
  bubbles[i].bubbleCheck(bubbles, i);
  bubbles[i].move();
  bubbles[i].edgeCheck();
  bubbles[i].display();
  }
}

// create bubble class
class Bubble {
  constructor( x, y, size) {
    this.color = random( 0, 255 );
    this.size = random( 20, 200);
    this.rad = this.size / 2
    this.posX = x;
    this.posY = y;
    this.deltaX = random(-10, 10);
    this.deltaY = random(-10, 10);
  }

display() {
  push();
  noStroke();
  fill(this.color);
  translate( this.posX, this.posY );
  ellipse( 0, 0, this.size);
  pop();
}

move(){
  this.posX += this.deltaX;
  this.posY += this.deltaY;
}

edgeCheck() {
  if( this.posX + this.rad >= width || this.posX - this.rad <= 0) {
    this.deltaX *= -1;
  }
  if (this.posY + this.rad >=height || this.posY - this.rad <= 0) {
    this.deltaY *= -1;
  }
}

bubbleCheck(otherBubbles, myId) {
  for ( let n = 0; n < otherBubbles.length; n++ ) {
    if (n != myId) {
      let d = dist( this.posX, this.posY, otherBubbles[n].posY);
      let combinedR = this.rad + otherBubbles[n].rad;

      if (d <= combinedR) {
        this.deltaX *= -1;
        this.deltaY *= -1;
      }
    }
  }
}
}
