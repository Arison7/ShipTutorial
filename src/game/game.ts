import { Entity } from "../utils/ecs/entity";

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
		canvas.setAttribute('width','500px');
		canvas.setAttribute('heigh','500px');
		document.body.appendChild(canvas);


		// "!" here is to ignore the type check on the ctx element 
		const ctx = canvas.getContext('2d')!;
		ctx.beginPath()
		ctx.fillStyle = "red";
		ctx.rect(10,10,50,50);
		ctx.fill()




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