function setup(){
  createCanvas( windowWidth, 900);
}

let color = 0;
let multiplier = 1;

function draw(){

  background ( color );


    fill( 255, 255, 0 );
  for( let circle_x = 30; circle_x <= width + 30; circle_x += 120 )
    for( let circle_y = 30; circle_y <= height; circle_y += 120 )
      ellipse( circle_x, circle_y, 60, 60);
      for( let circle_x = 90; circle_x <= width + 30; circle_x += 120 )
        for( let circle_y = 90; circle_y <= height; circle_y += 120 )
          ellipse( circle_x, circle_y, 60, 60);


    fill( 0, 150, 0 );
  for( let rect_x = 10; rect_x <= width + 30; rect_x += 120)
    for( let rect_y = 70; rect_y <= height; rect_y += 120)
        rect( rect_x, rect_y, 40, 40 );
        for( let rect_x = 70; rect_x <= width + 30; rect_x += 120)
          for( let rect_y = 10 ; rect_y <= height; rect_y += 120)
              rect( rect_x, rect_y, 40, 40 );

              if( color > 255 || color < 0 ) {
                multiplier = multiplier * -1;
              }
                color = color + multiplier;
}
