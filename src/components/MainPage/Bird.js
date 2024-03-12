import React, { useRef, useEffect } from 'react'
import bird_img from './Bird.png';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import generatePosition from '../../hooks/useRandomPosition';

import './Bird.scss';

export default function Bird(props) {
	const resizingFactor = props.resizeFactor || (Math.floor(Math.random() * 10) + 3) / 10;
	var birdImage = new Image();
	const originalWidth = 100;
	const originalHeight = 100;

	const { window_height, window_width } = useWindowDimensions();

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
	const max_direction = chance_sum[chance_sum.length - 1];
	const min_distance = 40;
	const max_distance = 100;

	var direction = max_direction;
	var distance = (Math.floor(Math.random() * max_distance) + min_distance) * resizingFactor;
	console.log(window.innerWidth);
	var posX, posY;
	({x: posX, y: posY} = generatePosition());
	
	const canvasRef = useRef(null);
	const animate_bird = (ctx, gameFrame, canvas) => {
		const frames = 4;
		let spriteAnimation = [];
		for (let i = 0; i < frames; i++) 	{ spriteAnimation.push(i * originalWidth); }
		const canvasWidth = canvas.width = originalWidth * resizingFactor;
		const canvasHeight = canvas.height = originalHeight * resizingFactor;

		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		let position = Math.floor(gameFrame / frames) % frames;
		
		let frameX = spriteAnimation[position];
		let frameY = 0;
		
		birdImage.src = "./Bird.png";
		if (birdImage.complete) {
			console.log('complete');
		}
		birdImage.src = bird_img;
		
		ctx.drawImage(birdImage, frameX, frameY, originalWidth, originalHeight, 0, 0, canvasWidth, canvasHeight);
		//birdImage.src = require("./Bird.png");
		// move_left_randomly(posX, posY, canvas);
	}

	useEffect(() => {
		const canvas = canvasRef.current
		const ctx = canvas.getContext('2d')
		canvas.style.position = 'absolute';
		canvas.style.overflow = 'hidden';
		
		let gameFrame = 0;

		canvas.width = originalWidth * resizingFactor + "px";
		canvas.height = originalHeight * resizingFactor + "px";
		// canvas.style.left = posX + 'px'; 
		// canvas.style.width = originalWidth + 'px';
		
		// animate bird flying
		const render = () => {
			animate_bird(ctx, gameFrame, canvas, posX, posY)
			gameFrame++;
			requestAnimationFrame(render);
		}
		render();
		setInterval(frame, 12/resizingFactor);

		function frame() {
			if (posX < -150) {
				// clearInterval(id);
				// canvas.remove();
				({x: posX, y: posY} = generatePosition());
			} 
			else 
			{
				switch (true) 
				{
					// case direction <= chance_sum[0]: 			// stop
					// 									break;
					case direction <= chance_sum[1]: 			// up left
						posX--; posY--; 				break;
					case direction <= chance_sum[2]: 			// down left
						posX--; posY++; 				break;
					case direction <= chance_sum[3]: 			// down right
						posX++; posY++; distance = 1; 	break;
					case direction <= chance_sum[4]: 			// up right
						posX++; posY--; distance = 1; 	break;
					default: 									// left
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
	}, [])

	return (
		<canvas className="birdCanvas" ref={canvasRef} {...props} />
	)
}
