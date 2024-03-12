const birds_canvas = ['canvas1', 'canvas2', 'canvas3', 'canvas4', 'canvas5', 'canvas6', 'canvas7', 'canvas8', 'canvas9', 'canvas10',
'canvas11', 'canvas12', 'canvas13', 'canvas14', 'canvas15', 'canvas16', 'canvas17', 'canvas18', 'canvas19', 'canvas20'];

/**
 * Returns birds on predefined and prenamed canvas with given id, position and size
 * @param {string[]} bird_canvas 		- name of canvas 
 * @param {number} bird_id 				- id of bird
 * @param {number} start_pos_X 			- bird's start position X
 * @param {number} start_pos_Y 			- bird's start position Y
 * @param {number} img_size_X 			- bird's original image size X
 * @param {number} img_size_Y 			- bird's original image size Y
 * @param {number} resizingFactor 		- resizing factor of bird's image
 */
function birds_fly(bird_canvas, frames, bird_id, img_size_X, img_size_Y, resizingFactor) {
	//const canvas = document.getElementById(bird_canvas);
	const canvas = document.createElement('canvas');
	console.log(canvas);
	canvas.style.position = 'absolute';
	
	const ctx = canvas.getContext("2d");

	const originalWidth = img_size_X;
	const originalHeight = img_size_Y;

	const canvasWidth = canvas.width = originalWidth * resizingFactor;
	const canvasHeight = canvas.height = originalHeight * resizingFactor;
	
	let gameFrame = 0;
	let spriteAnimation = [];

	for (let i = 0; i < frames; i++) {
		spriteAnimation.push({x: i * originalWidth, y: 0});
	}

	const birdImage = new Image();
	birdImage.src = 'Bird.png';
	birdImage.alt = 'Bird';
	birdImage.id = bird_id;
	// animate bird flying
	function animate() {
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		let position = Math.floor(gameFrame / frames) % frames;
		let frameX = spriteAnimation[position].x;
		let frameY = spriteAnimation[position].y;
		ctx.drawImage(birdImage,
			frameX, frameY, originalWidth, originalHeight,
			0, 0, canvasWidth, canvasHeight
		);
		gameFrame++;
		requestAnimationFrame(animate);
	}
	var id = null;
	var posX = Math.floor(Math.random() * 1900) + 500;
	var posY =  Math.floor(Math.random() * 600) + 100;
	
	const chance = [
		1, 	// stop
		3,	// up left 
		3, 	// down left
		1, 	// down right
		1, 	// up right
		5	// left
	]
	const chance_sum = new Array(chance.length).fill(0);
	chance_sum.map((_, i) => i>0    ?    chance_sum[i] = chance_sum[i-1] + chance[i]    :    chance_sum[i] = chance[i]);
	const min_direction = 0;
	const max_direction = chance.reduce((a, b) => a + b, 0);
	var direction = max_direction;

	const min_distance = 40;
	const max_distance = 100;
	var distance = (Math.floor(Math.random() * max_distance) + min_distance) * resizingFactor;
	// animate bird position into random directions from right to left
	function move_left_randomly() {  
		// ustawianie pozycji startowej
		canvas.style.top = posY + 'px';
		canvas.style.left = posX + 'px'; 
		clearInterval(id);
		id = setInterval(frame, 2/resizingFactor);
		function frame() {
			if (posX < -150) {
				// clearInterval(id);
				// canvas.remove();
				posX = Math.floor(Math.random() * 1) + 1920;
				posY =  Math.floor(Math.random() * 600) + 100;
			} else {
			switch (true) {
				case direction <= chance_sum[0]: 	// stop
					break;
				case direction <= chance_sum[1]: 	// up left
					posX--;
					posY--;
					break;
				case direction <= chance_sum[2]: 	// down left
					posX--;
					posY++;
					break;
				case direction <= chance_sum[3]: 	// down right
					posX++;
					posY++;
					distance = 1;
					break;
				case direction <= chance_sum[4]: 	// up right
					posX++;
					posY--;
					distance = 1;
					break;
				default: 							// left
					posX--;
				}
				distance--;
				canvas.style.left = posX + 'px'; 
				canvas.style.top = posY + 'px';
				if (distance <= 0) {
					direction = Math.floor(Math.random() * max_direction) + min_direction;
					distance = Math.floor(Math.random() * max_distance) + min_distance;
				}
			}
		}
	}

	move_left_randomly();
	animate();
}

// set 20 birds to fly
for (let i = 0; i < birds_canvas.length; i++) {
	let size = (Math.floor(Math.random() * 10) + 3) / 10;
	birds_fly(birds_canvas[i], 4,'bird'+i,
	100, 100, size
	);
}

