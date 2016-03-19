function handle_house(){
  if (pressed[KEY_SPACE]) built_house();
}

function built_house(){
  log("x = " + x + ", x_mapy = " + x_mapy + ", x_on_map = " + x_on_map + ", y = " + y + ", y_mapy = " + y_mapy + ", y_on_map = " + y_on_map);
  var newHouse = {x: x, y: y};
  log("newHouse: x = " + newHouse.x + ", y = " + newHouse.y);
  houses.push(newHouse);
}
