import { ShipDrawComponent } from "./draw.js"
import { mockShipFactory } from "../../ship.mock.js"
import { CanvasLayer } from "../../../canvas-layer/canvas-layer.js"

describe('>>> Node Ship Component', () => {
	let comp : ShipDrawComponent;

	beforeEach(() => {
		comp = new ShipDrawComponent()
		comp.Entity = mockShipFactory();
	})

	it('should cleanup when awakens', () => {
		const spy = jest.spyOn(CanvasLayer.Foreground, 'ClearRect')
		expect(spy).not.toHaveBeenCalled()

		comp.Awake()

		expect(spy).toHaveBeenCalled()

	})

	it('should cleanup and draw rect every frame', () => {
		const spyClearRect = jest.spyOn(CanvasLayer.Foreground, 'ClearRect')
		const spyFillRect = jest.spyOn(CanvasLayer.Foreground, 'FillCircle')

		expect(spyClearRect).not.toHaveBeenCalled()
		expect(spyFillRect).not.toHaveBeenCalled()

		comp.Update(0)

		expect(spyClearRect).toHaveBeenCalled()
		expect(spyFillRect).toHaveBeenCalled()

	})
})