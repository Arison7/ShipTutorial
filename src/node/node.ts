import { Entity } from "../utils/ecs/entity.js";
import { NodeDrawComponent } from "./components/draw/draw.js";
import { Vector2D } from "../utils/vector2D/vector2D.js";

export class Node extends Entity{

	constructor (
		public readonly Start: Vector2D,
		public readonly End: Vector2D,
		public readonly Index: Vector2D,
	) {
		super();
	}

	public Awake() : void {
		this.AddComponent(new NodeDrawComponent())

		super.Awake();
	}

	public get Size(): Vector2D {
		return new Vector2D(
			this.End.x - this.Start.x,
			this.End.y - this.Start.y
	
		);
	}

}
