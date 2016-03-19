function move_ufo(){
  // log("x = " + x + ", -MAP_HEIGHT/2 = " + (-MAP_HEIGHT/2) + ", y > wyr = " + (y > -MAP_HEIGHT/2));
  if (y > (-MAP_HEIGHT/2 + 10) && (key[KEY_UP] || key["W"])) y -= 4;
  if (y < (MAP_HEIGHT/2 - 10) && (key[KEY_DOWN] || key["S"])) y += 4;
  if (x > (-MAP_WIDTH/2 + 20) && (key[KEY_LEFT] || key["A"])) x -= 4;
  if (x < (MAP_WIDTH/2 - 20) && (key[KEY_RIGHT] || key["D"])) x += 4;
}

function update_ufo()
{
	ufo_to_change--;
	if (ufo_to_change <=0) {
		ufo_to_change = 15;
		switch(ufo_counter) {
	    case 0:
					ufo_counter++;
	        ufo = ufo1;
	        break;
	    case 1:
					ufo_counter++;
	        ufo = ufo2;
	        break;
			case 2:
					ufo_counter++;
	        ufo = ufo3;
	        break;
			case 3:
					ufo_counter = 0;
	        ufo = ufo0;
	        break;
	    default:
					ufo_counter = 0;
					ufo = ufo0;
		}
	}
}
