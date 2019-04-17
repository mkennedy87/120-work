// create variables for array
let objects = [];
let num_of_objects = 40;
let bg_color;

// create canvas size and color, also make for loop for array size
function setup() {
  createCanvas(windowWidth, windowHeight);
  bg_color = color( 0, 100, 0 );

  for (let i = 0; i < num_of_objects; i++) {
    objects.push( new object () );

  }
}

//apply bg color and create for loop for creating objects
function draw() {
  background(bg_color);

  for (let i = 0; i < objects.length; i++) {
    objects[i].frame();
  }
}

// creating new class not yet sure what i'm making
class ObjectBuild {
  constructor() {
    this.size_w_h = random(40, 150);
    // this.size_h = random( 40, 150);
    this.loc_x = random(width);
    this.loc_y = random(height);
    this.move_x = random( -10, 10);
    this.move_y = random( -10, 10);
    this.body_color = color( random(255), random(255), random(255));
    this.size_w_h = this.size_w_h;

  }

// update objects
frame() {
  this.objectAngle();
  this.display();
  this.move();
}

display() {}

push();

translate(this.loc_x, this.loc_y);
fill(this.body_color);
// i've decided on squares, and i'll try a rotation
rect( 0, 0, this.size_w_h);
}
