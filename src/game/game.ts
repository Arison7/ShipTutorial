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