import { Canvas } from "../utils/canvas/canvas.js";
import { Vector2D } from "../utils/vector2D/vector2D.js";
import { Settings } from "../settings/settings.js";


export class CanvasLayer {
	private static _background: Canvas;

	private constructor() { }

	public static get Background(): Canvas {
		if (!this._background){
			const size = (Settings.grid.nodeSize + Settings.grid.nodeOffset) * Settings.grid.dimensions + Settings.grid.nodeOffset
			this._background = new Canvas(new Vector2D(size, size))
			this._background.Awake()
		}
		return this._background;
	}



}