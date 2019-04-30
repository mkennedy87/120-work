let trees;
let mountains;
let mountains_night;
let tent;
let camper;
let fire_back;
let fire_front;
let cloud;
// rollover stuff
let camper_glow;
let cloud_glow;
let tent_glow;
// animation stuff
let fire = [];
let fire_img;
// let tentA = [];
// let tentA_img;
// let camperA;
// let camperA_img;


function preload() {
  trees = loadImage('./images/trees.png');
  mountains = loadImage('./images/mountains.png');
  tent = loadImage('./images/tent.png');
  camper = loadImage('./images/camper.png');
  fire_back = loadImage('./images/fire_back.png');
  fire_front = loadImage('./images/fire_front.png');
  cloud = loadImage('./images/cloud.png');
  mountains_night = loadImage('./images/mountains_night.png')

  // camper_glow = loadImage('./images/camper_glow.png');
  // cloud_glow = loadImage('./images/cloud_glow.png');
  // tent_glow = loadImage('./images/tent_glow.png');
  fire_img = loadImage('./images/fire_sprite.png');
  // tentA_img = loadImage();
  // camperA_img = loadImage();
}
// let sun;
// sun.d = 100

function setup(){
  createCanvas( 1600,900 );
  // fire[0] new FireStuff( 800, 800, fire_img );
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
// if( mouseX > )
noStroke();
fill( 255, 255, 0);
ellipse( mouseX, mouseY, 100 );
pop();
// assemble the images
image( cloud, 0, 0 );
image( mountains, 0, 0 );
image( mountains_night, 0 ,0 );
image( trees, 0, 0 );
image( tent, 0, 0 );
image( camper, 0, 0 );
image( fire_back, 0, 0 );

for (let i = 0; i < fire.length; i++) {
  fire[i].frame();
}

image( fire_front, 0, 0 );



}

class FireStuff {
  constructor(init_x, init_y, img ){
    this.pos = {
      x: init_x,
      y: init_y
    };
    // this.orientation = orientation;

    this.image = img;

    this.speed = 4;
    this.size = {
      w: 427,
      h: 427
    };

    this.sprite_num = 0

    this.subRect = [
      [ 0, 0 ],
      [ 427, 0 ],
      [ 0, 427 ],
      [ 427, 427 ]
    ];
  }

  frame() {
    this.display();
    this.animate();
  }
  display() {
    push();
    translate( this.pos.x, this.pos.y );

    image(
      this.image,
      0, 0,
      this.size.w, this.size.h,
      this.subRect[this.sprite_num][0], this.subRect[this.sprite_num][1],
      this.size.w, this.size.h

    );
    pop();

  }
  animate() {
    if (frameCount % this.speed === 0) {
      this.sprite_num++;
      this.sprite_num %= 8;
    }
  }

}

// }
// make sun class
// class Sun {
//   constructor( init_x, init_y, size, color ) {
//     this.posX =
//     this.posY =
//     this.size = 100;
//     this.rad = this.size * 0.5;
//     this.color = color;
//     this.delta_x =
//     this.delta_y =
//
//   }
// }
