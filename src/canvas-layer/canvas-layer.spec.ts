import { CanvasLayer } from './canvas-layer.js'
import { Canvas } from '../utils/canvas/canvas.js'

jest.mock('../utils/canvas/canvas.js');
describe('>>> CanvasLayer', () => { 
	it('should create canvas only once', () => { 
		expect(Canvas).not.toHaveBeenCalled();
		const canvas1 = CanvasLayer.Background;
		const canvas2 = CanvasLayer.Background;

		expect(canvas1).toBe(canvas2);
		expect(Canvas).toHaveBeenCalledTimes(1);
	})

})