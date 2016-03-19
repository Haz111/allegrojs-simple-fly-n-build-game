var ALLEGRO_CONSOLE = true;

function draw()
{
	// textout(canvas,font,"Hello World!",x,y,24,makecol(0,0,0));
	draw_sprite(canvas, neighborhood, x_mapy, y_mapy)//640 + 320 - x, 480 + 240 - y);
	for (var i = 0; i < houses.length; i++) {
		draw_sprite(canvas, house, x_mapy + houses[i].x, y_mapy + houses[i].y);
	}

	draw_sprite(canvas, ufo, x_on_map, y_on_map);

}

function update()
{
	update_ufo();
	move_ufo();
	update_map_position();
	handle_house();
}

function main()
{
	enable_debug('debug');
	allegro_init_all("game_canvas", 640, 480);

	load_assets();
	ufo = ufo0;

	ready(function(){
		loop(function(){
			clear_to_color(canvas,makecol(7,202,33));
			update();
			draw();
		},BPS_TO_TIMER(60));
	});
	return 0;
}
END_OF_MAIN();
