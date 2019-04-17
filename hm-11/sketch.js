// create variables for array
let objects = [];
let num_of_objects = 40;
let bg_color;

// create canvas size and color, also make for loop for array size
function setup() {
  createCanvas(windowWidth, 1000);
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
