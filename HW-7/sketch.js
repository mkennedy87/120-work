

let ball = {};
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

let ball_min = 40;
let ball_max = 160;

function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}



function draw() {
  let red = floor( random(256) );
  let green = floor( random(256) );
  let blue = floor( random(256) );

  ball.width = map( mouseX, 0, width, ball_min, ball_max );

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
    noStroke();

    fill( red, green, blue, 25 );
    ellipse(ball.x, ball.y, ball.width, ball.width );
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
