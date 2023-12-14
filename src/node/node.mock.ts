import { Node } from './node.js'
import { Vector2D } from '../utils/vector2D/vector2D.js'

export const mockNodeFactory = (
	start = new Vector2D(0, 0), 
	end = new Vector2D(1, 1), 
	index = new Vector2D(0, 0),
	neighbours: Node[] = []
): Node => new Node(start, end, index,neighbours)