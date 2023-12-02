import { NodeDrawComponent } from "./components/draw/draw"
import { Node } from "./node";
import { Vector2D } from "../utils/vector2D/vector2D";
import { mockNodeFactory } from "./node.mock";


describe('>>> Node', () => {
	const start = new Vector2D(1, 2)
	const end = new Vector2D(5, 6)

	let node: Node

	beforeEach(() => {
		node = mockNodeFactory(start, end);
	})
	it('should awake and update all components', () => {
		const spyDrawCompAwake = jest.spyOn(NodeDrawComponent.prototype, 'Awake')
		const spyDrawCompUpdate = jest.spyOn(NodeDrawComponent.prototype, 'Update')

		expect(spyDrawCompAwake).not.toHaveBeenCalled()
		expect(spyDrawCompUpdate).not.toHaveBeenCalled()

		node.Awake()
		expect(spyDrawCompAwake).toHaveBeenCalled()

		node.Update(0)
		expect(spyDrawCompUpdate).toHaveBeenCalled()


	})

	it('should calculate the center point', () =>{
		expect(node.Center.x).toBe<number>(start.x + node.Size.x / 2)
		expect(node.Center.y).toBe<number>(start.y + node.Size.y / 2)	
	})
	it('should check if provided point is within occupied area', () => {
		expect(node.Occupies(new Vector2D(3, 2))).toBeTruthy()
		expect(node.Occupies(new Vector2D(6, 2))).toBeFalsy()
		expect(node.Occupies(new Vector2D(3, 7))).toBeFalsy()
	})


})