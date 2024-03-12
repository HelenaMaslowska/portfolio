/**
 * Generate random position on the screen + 200px or 100px
 * @returns returns a random position for the bird to start at
 */
export default function useRandomPosition(addPosX = 200, addPosY = 100) {
	return {
		x: Math.floor(Math.random() * window.innerWidth) + addPosX,
		y: Math.floor(Math.random() * window.innerHeight) + addPosY
	}
}
