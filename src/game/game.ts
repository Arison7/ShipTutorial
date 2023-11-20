import { Entity } from "../utils/ecs/entity";

export class Game extends Entity {
	private _lastTimestamp : number = 0;

	public Update() : void {
		const deltaTime = (Date.now() - this._lastTimestamp) / 1000;
		// update all components
		super.Update(deltaTime);
		// update last timestamp
		this._lastTimestamp = Date.now();

		// invoke next frame

		window.requestAnimationFrame(() => this.Update())

	}

}