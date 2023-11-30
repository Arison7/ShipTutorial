import { Canvas } from './canvas.js'
import { Vector2D } from '../vector2D/vector2D.js'

describe('>>> Canvas', () => {
	let canvas: Canvas

	beforeEach(() => {
		canvas = new Canvas({ x: 100, y: 100 })
		canvas.Awake()
	})
	it('should create and attach canvas to the DOM when awakens', () => {
		const createElmSpy = jest.spyOn(document, 'createElement')
		const appendChildSpy = jest.spyOn(document.body, 'appendChild')

		expect(createElmSpy).not.toHaveBeenCalled()
		expect(appendChildSpy).not.toHaveBeenCalled()

		canvas.Awake()

		expect(createElmSpy).toHaveBeenCalled()
		expect(appendChildSpy).toHaveBeenCalled()
	})
	describe('>> API', () => {
		// ... //
		it('should clear the rect', () => {
		// --- ADD --- //
		const start = new Vector2D(0, 0)
		const size = new Vector2D(10, 10)

		const spy = jest.spyOn(canvas.Context, 'clearRect')
		expect(spy).not.toHaveBeenCalled()

		canvas.ClearRect(start, size)

		expect(spy).toHaveBeenCalledWith(start.x, start.y, size.x, size.y)
		// --- ADD --- //
		})
		it('should draw and fill the rect', () => {
			// --- ADD --- //
			const start = new Vector2D(0, 0)
			const size = new Vector2D(10, 10)
			const color = '#ffff00'

			const beginPathSpy = jest.spyOn(canvas.Context, 'beginPath')
			const rectSpy = jest.spyOn(canvas.Context, 'rect')
			const fillSpy = jest.spyOn(canvas.Context, 'fill')

			canvas.FillRect(start, size, color)

			expect(beginPathSpy).toHaveBeenCalled()
			expect(rectSpy).toHaveBeenCalledWith(start.x, start.y, size.x, size.y)
			expect(fillSpy).toHaveBeenCalled()
			expect(canvas.Context.fillStyle).toBe(color)
			// --- ADD --- //
			})

	})

})