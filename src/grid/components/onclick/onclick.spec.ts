import { GridOnClickComponent } from './onclick'
import { mockGridFactory } from '../../grid.mock'
import { Vector2D } from '../../../utils/vector2D/vector2D'


describe('>>> Grid Click Component', () => {
	let comp: GridOnClickComponent

	beforeEach(() => {
		comp = new GridOnClickComponent()
		comp.Entity = mockGridFactory()
		comp.Entity.Awake()
	})
	it('should update node if user click within it\'s range', () => {
		comp.ClickOn(new Vector2D(100, 100))
		expect(comp.Entity.Nodes[0].IsActive).toBeTruthy()
		expect(comp.Entity.Nodes[1].IsActive).toBeFalsy()
	}) 
})