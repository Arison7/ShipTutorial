import { NodeDrawComponent } from './draw.js'
import { CanvasLayer } from "../../../canvas-layer/canvas-layer.js";
import { Node } from "../../node.js";
import { Vector2D } from '../../../utils/vector2D/vector2D.js';
import { mockNodeFactory } from '../../node.mock.js';
import { Settings } from '../../../settings/settings.js';

describe('>>> Node Draw Component', () => {
	let comp: NodeDrawComponent
	beforeEach(() => {
		comp = new NodeDrawComponent()

		comp.Entity = mockNodeFactory()

		comp.Entity = mockNodeFactory() 
	})
	it('should cleanup when awakens', () => {
		const spy = jest.spyOn(CanvasLayer.Background, 'ClearRect')
		expect(spy).not.toHaveBeenCalled()

		comp.Awake()

		expect(spy).toHaveBeenCalled()
	})
	it('should cleanup and draw rect every frame', () => {
		const spyClearRect = jest.spyOn(CanvasLayer.Background, 'ClearRect')
		const spyFillRect = jest.spyOn(CanvasLayer.Background, 'FillRect')

		expect(spyClearRect).not.toHaveBeenCalled()
		expect(spyFillRect).not.toHaveBeenCalled()

		comp.Update(0)

		expect(spyClearRect).toHaveBeenCalled()
		expect(spyFillRect).toHaveBeenCalled()
	})
	it('should render active color if entity is active and regular color otherwise', () => {
			const spyFillRect = jest.spyOn(CanvasLayer.Background, 'FillRect')

		comp.Entity.IsInLocomotionRange= true
		comp.Update(0)
		expect(spyFillRect).toHaveBeenCalledWith(comp.Entity.Start, comp.Entity.Size, Settings.grid.color.inLocomotionRange)
		comp.Entity.IsInLocomotionRange= false
		comp.Update(0)
		expect(spyFillRect).toHaveBeenCalledWith(comp.Entity.Start, comp.Entity.Size, Settings.grid.color.regular)
	})

})