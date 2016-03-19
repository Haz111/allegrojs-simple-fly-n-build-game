function update_map_position(){
  if (x > ((MAP_WIDTH - WIDTH)/ 2)) {
    x_mapy = WIDTH - MAP_WIDTH/2;
    x_on_map = x;
    // log("x1, x = " + x + ", x_mapy = " + x_mapy + ", x_on_map = " + x_on_map);
  }  else if (x < -(MAP_WIDTH - WIDTH) / 2) {
    x_mapy = MAP_WIDTH / 2;
    x_on_map = WIDTH + x;// + ((MAP_WIDTH - WIDTH) / 2);
    // log("x2, x = " + x + ", x_mapy = " + x_mapy + ", x_on_map = " + x_on_map);
  } else {
    x_mapy = -x + (WIDTH / 2);
    x_on_map = WIDTH / 2;
    // log("x3, x = " + x + ", x_mapy = " + x_mapy + ", x_on_map = " + x_on_map);
  }

  if (y > ((MAP_HEIGHT - HEIGHT)/ 2)) {
    // log("y1");
    y_mapy = MAP_HEIGHT/2 - HEIGHT;
    y_on_map = y;
    // log("y1, y = " + y + ", y_mapy = " + y_mapy + ", y_on_map = " + y_on_map);
  } else if (y < -(MAP_HEIGHT - HEIGHT) / 2) {
    // log("y2");
    y_mapy = MAP_HEIGHT / 2;
    y_on_map = HEIGHT + y;
    // log("y2, y = " + y + ", y_mapy = " + y_mapy + ", y_on_map = " + y_on_map);
  } else {
    y_mapy = (HEIGHT / 2) - y;
    y_on_map = (HEIGHT / 2);
    // log("y3, y = " + y + ", y_mapy = " + y_mapy + ", y_on_map = " + y_on_map);
  }
  //log("x = " + x + ", x_mapy = " + x_mapy + ", x_on_map = " + x_on_map + ", y = " + y + ", y_mapy = " + y_mapy + ", y_on_map = " + y_on_map);
}
