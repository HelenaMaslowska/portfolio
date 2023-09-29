import sample from '../../images/cardboard.jpg';
// how to create thumbnails: http://makethumbnails.com/#options

/* FURNITURES */
// 1 furniture
import cardboardfurniture1 from '../../images/Furnitures/Cardboard/F01.JPEG';
import cardboardfurniture2 from '../../images/Furnitures/Cardboard/F02.JPEG';
import cardboardfurniture3 from '../../images/Furnitures/Cardboard/F03.JPEG';

import cardboardfurniture1t from '../../images/Furnitures/Cardboard/F01_tn.jpg';
import cardboardfurniture2t from '../../images/Furnitures/Cardboard/F02_tn.jpg';
import cardboardfurniture3t from '../../images/Furnitures/Cardboard/F03_tn.jpg';

// 1 furniture
import realfurniture1 from '../../images/Furnitures/Wood/F11.JPEG';
import realfurniture2 from '../../images/Furnitures/Wood/F12.JPEG';
import realfurniture3 from '../../images/Furnitures/Wood/F13.JPEG';
import realfurniture4 from '../../images/Furnitures/Wood/F14.jpg';
import realfurniture5 from '../../images/Furnitures/Wood/F15.JPEG';

import realfurniture1t from '../../images/Furnitures/Wood/F11_tn.jpg';
import realfurniture2t from '../../images/Furnitures/Wood/F12_tn.jpg';
import realfurniture3t from '../../images/Furnitures/Wood/F13_tn.jpg';
import realfurniture4t from '../../images/Furnitures/Wood/F14_tn.jpg';
import realfurniture5t from '../../images/Furnitures/Wood/F15_tn.jpg';


/* PAINTINGS */
// 3 birds
import bird1 from '../../images/Paintings/Birds/B01.jpg';
import bird2 from '../../images/Paintings/Birds/B02.jpg';
import bird3 from '../../images/Paintings/Birds/B03.png';

import bird1t from '../../images/Paintings/Birds/B01_tn.jpg';
import bird2t from '../../images/Paintings/Birds/B02_tn.jpg';
import bird3t from '../../images/Paintings/Birds/B03_tn.jpg';

// 7 landscapes
import landscape1 from '../../images/Paintings/Landscapes/L01.jpg';
import landscape2 from '../../images/Paintings/Landscapes/L02.jpg';
import landscape3 from '../../images/Paintings/Landscapes/L03.jpg';
import landscape4 from '../../images/Paintings/Landscapes/L04.jpg';
import landscape5 from '../../images/Paintings/Landscapes/L05.jpg';
import landscape6 from '../../images/Paintings/Landscapes/L06.jpg';
import landscape7 from '../../images/Paintings/Landscapes/L07.jpg';

import landscape1t from '../../images/Paintings/Landscapes/L01_tn.jpg';
import landscape2t from '../../images/Paintings/Landscapes/L02_tn.jpg';
import landscape3t from '../../images/Paintings/Landscapes/L03_tn.jpg';
import landscape4t from '../../images/Paintings/Landscapes/L04_tn.jpg';
import landscape5t from '../../images/Paintings/Landscapes/L05_tn.jpg';
import landscape6t from '../../images/Paintings/Landscapes/L06_tn.jpg';
import landscape7t from '../../images/Paintings/Landscapes/L07_tn.jpg';

// 13 mandalas
import mandala1 from '../../images/Paintings/Mandalas/M01.jpg';
import mandala2 from '../../images/Paintings/Mandalas/M02.jpg';
import mandala3 from '../../images/Paintings/Mandalas/M03.jpg';
import mandala4 from '../../images/Paintings/Mandalas/M04.jpg';
import mandala5 from '../../images/Paintings/Mandalas/M05.jpg';
import mandala6 from '../../images/Paintings/Mandalas/M06.jpg';
import mandala7 from '../../images/Paintings/Mandalas/M07.jpg';
import mandala8 from '../../images/Paintings/Mandalas/M08.jpg';
import mandala9 from '../../images/Paintings/Mandalas/M09.jpg';
import mandala10 from '../../images/Paintings/Mandalas/M10.jpg';
import mandala11 from '../../images/Paintings/Mandalas/M11.jpg';
import mandala12 from '../../images/Paintings/Mandalas/M12.jpg';
import mandala13 from '../../images/Paintings/Mandalas/M13.jpg';

import mandala1t from '../../images/Paintings/Mandalas/M01_tn.jpg';
import mandala2t from '../../images/Paintings/Mandalas/M02_tn.jpg';
import mandala3t from '../../images/Paintings/Mandalas/M03_tn.jpg';
import mandala4t from '../../images/Paintings/Mandalas/M04_tn.jpg';
import mandala5t from '../../images/Paintings/Mandalas/M05_tn.jpg';
import mandala6t from '../../images/Paintings/Mandalas/M06_tn.jpg';
import mandala7t from '../../images/Paintings/Mandalas/M07_tn.jpg';
import mandala8t from '../../images/Paintings/Mandalas/M08_tn.jpg';
import mandala9t from '../../images/Paintings/Mandalas/M09_tn.jpg';
import mandala10t from '../../images/Paintings/Mandalas/M10_tn.jpg';
import mandala11t from '../../images/Paintings/Mandalas/M11_tn.jpg';
import mandala12t from '../../images/Paintings/Mandalas/M12_tn.jpg';
import mandala13t from '../../images/Paintings/Mandalas/M13_tn.jpg';


export const projects = [
	{
		id: 1, 
		title: 'IT',
		photo: sample, 	
		shortDescription: 'My passion encompasses programming, web design and graphic editing software API. I enjoy crafting algorithms that solve complex problems. Additionally, I design games, conduct training sessions, and organize game jams. For me, it\'s a path to continuous growth in the ever-evolving worlds of technology and creativity.', 	
		longDescription: '',
		list: [
			{
				id:1,
				title: 'IT project',
			}
		]
	},
	{
		id: 2,
		title: 'Furnitures',
		photo: sample, 	
		shortDescription: 'I create furniture from cardboard and wood, including personalized coasters, shoe cabinets, and drawers. My eco-conscious approach repurposes found materials, blending sustainability with functional design for enhanced living spaces.',
		longDescription: '',
		list: [
			{
				id:1,
				title: 'My first furniture using cardboard',
				photos: [
					{
						original: cardboardfurniture3,
						thumbnail: cardboardfurniture3t,
					},
					{
						original: cardboardfurniture2,
						thumbnail: cardboardfurniture2t,
					},
					{
						original: cardboardfurniture1,
						thumbnail: cardboardfurniture1t,
					}
				]
			},
			{
				id:2,
				title: 'Real furniture',
				description: 'I crafted a unique piece of birthday gift, dedicating 10 days of meticulous work. Constructed from wood, plastic, and metal pipes, securely fastened with screws, it boasts a comfortable foam cushion.',
				photos: [
					{
						original: realfurniture4,
						thumbnail: realfurniture4t,
					},
					{
						original: realfurniture5,
						thumbnail: realfurniture5t,
					},
					{
						original: realfurniture3,
						thumbnail: realfurniture3t,
					},
					{
						original: realfurniture2,
						thumbnail: realfurniture2t,

					},
					{
						original: realfurniture1,
						thumbnail: realfurniture1t
					}
				]
			}
		]
	},
	{
		id: 3, 
		title: 'Models',
		photo: sample, 	
		shortDescription: 'I model my designs in Blender, leveraging its versatility and precision. Some of these projects are brought to life through 3D printing, adding another dimension to my creative process. From digital concepts to tangible objects, Blender is my bridge to turning imagination into reality.', 	
		longDescription: '',
		list: [
			{
				id:1,
				title: 'Models project',
			}
		]
	},
	{
		id: 4, 
		title: 'Paintings', 	
		photo: sample, 	
		shortDescription: 'I also paint pictures, mainly focusing on birds and landscapes. My artwork captures the beauty of nature, with a particular emphasis on avian subjects and scenic vistas. It\'s another way for me to express my artistic sensibilities and connect with the natural world.', 	
		longDescription: '',
		list: [
			{
				id: 1,
				title: 'Birds',
				photos: [
					{
						original: bird3,
						thumbnail: bird3t,
					},
					{
						original: bird2,
						thumbnail: bird2t,
					},
					{
						original: bird1,
						thumbnail: bird1t,
					}
				]
			},
			{
				id: 2,
				title: 'Landscapes',
				photos: [
					{
						original: landscape7,
						thumbnail: landscape7t,
					},
					{
						original: landscape6,
						thumbnail: landscape6t,
					},
					{
						original: landscape5,
						thumbnail: landscape5t,
					},
					{
						original: landscape4,
						thumbnail: landscape4t,
					},
					{
						original: landscape3,
						thumbnail: landscape3t,
					},
					{
						original: landscape2,
						thumbnail: landscape2t,
					},
					{
						original: landscape1,
						thumbnail: landscape1t,
					}
				]
			},
			{
				id: 3,
				title: 'Mandalas',
				photos: [
					{
						original: mandala1,
						thumbnail: mandala1t,
					},
					{
						original: mandala2,
						thumbnail: mandala2t,
					},
					{
						original: mandala3,
						thumbnail: mandala3t,
					},
					{
						original: mandala4,
						thumbnail: mandala4t,
					},
					{
						original: mandala5,
						thumbnail: mandala5t,
					},
					{
						original: mandala6,
						thumbnail: mandala6t,
					},
					{
						original: mandala7,
						thumbnail: mandala7t,
					},
					{
						original: mandala8,
						thumbnail: mandala8t,
					},
					{
						original: mandala9,
						thumbnail: mandala9t,
					},
					{
						original: mandala10,
						thumbnail: mandala10t,
					},
					{
						original: mandala11,
						thumbnail: mandala11t,
					},
					{
						original: mandala12,
						thumbnail: mandala12t,
					},
					{
						original: mandala13,
						thumbnail: mandala13t,
					}
				]
			},
			{
				id: 4,
				title: 'Paintings project 2',
				description: "blwwwwwwwwwwwww wwwwwwwwwwwwwww wwablwwwwwww wwwwwwww wwwwwwwwwwwww wwa"
			}
		]
	},
];
