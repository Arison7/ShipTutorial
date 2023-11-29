import { Entity } from "../utils/ecs/entity.js";
import { Settings } from "../settings/settings.js";

export class Game extends Entity {
	private _lastTimestamp : number = 0;
	public Entities : Entity[] = [];

	/**
	 * Starts initial game loop
	 * @returns void
	 */
	public Awake() : void {
		super.Awake()

		// awake all the children
		for (const entity of this.Entities){
			entity.Awake();
		}

		// Make sure Update starts after all entities are awaken
		window.requestAnimationFrame(() => {
			// set initial timestamp
			this._lastTimestamp = Date.now()

			// start update loop
			this.Update()
		})

		this.DirtyDraw();
	}

	private DirtyDraw() : void{
		// Create and attach Canvas to the DOM
		const canvas = document.createElement('canvas');

		const canvasSize = (Settings.grid.nodeSize + Settings.grid.nodeOffset) * Settings.grid.dimensions + Settings.grid.nodeOffset

		canvas.setAttribute('width',`${canvasSize}px`);
		canvas.setAttribute('height',`${canvasSize}px`);
		document.body.appendChild(canvas);


		// "!" here is to ignore the type check on the ctx element 
		const size = Settings.grid.nodeSize;
		const offset = Settings.grid.nodeOffset;
		const ctx = canvas.getContext('2d')!;
		for (let y = 0; y < Settings.grid.dimensions; y++) {
			for (let x = 0; x < Settings.grid.dimensions; x++) {
				ctx.beginPath();
				ctx.fillStyle = Settings.grid.color;
				ctx.rect((size + offset) * x, (size + offset) * y, size, size) ;
				ctx.fill();
      	}}




	}

	public Update() : void {
		const deltaTime = (Date.now() - this._lastTimestamp) / 1000;
		// update all components
		super.Update(deltaTime);

		// update all the children
		for (const entity of this.Entities){
			entity.Update(deltaTime);
		}

		// update last timestamp
		this._lastTimestamp = Date.now();

		// invoke next frame
		window.requestAnimationFrame(() => this.Update())

	}

}