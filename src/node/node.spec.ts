import { NodeDrawComponent } from "./components/draw/draw"
import { Node } from "./node";
import { Vector2D } from "../utils/vector2D/vector2D";


describe('>>> Node', () => {
	const start = new Vector2D(1, 2)
	const end = new Vector2D(5, 6)
	const index = new Vector2D(1, 1)

	let node: Node

	beforeEach(() => {
		node = new Node(start, end, index);
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


})