import { Entity } from "../utils/ecs/entity.js";
import { NodeDrawComponent } from "./components/draw/draw.js";
import { Vector2D } from "../utils/vector2D/vector2D.js";
import { CanvasLayer } from "../canvas-layer/canvas-layer.js";

export class Node extends Entity{

	public IsActive: boolean = false;
	public Ship: Entity | null = null;
	public IsInLocomotionRange: boolean = false;

	constructor (
		public readonly Start: Vector2D,
		public readonly End: Vector2D,
		public readonly Index: Vector2D,
		public readonly Neighbors: Node[]
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
	public get Center() : Vector2D {
		return new Vector2D(
			this.Start.x + this.Size.x / 2,
			this.Start.y + this.Size.y / 2
		);
	}
	public Occupies(point: Vector2D): boolean {
		if (point.x < this.Start.x) {
			return false
		}

		if (point.x > this.End.x) {
			return false
		}

		if (point.y < this.Start.y) {
			return false
		}

		if (point.y > this.End.y) {
			return false
		}

		return true
	}
	public FindAndSetInLocomotionRange(range : number) : void{
		if(!this.Ship){
			this.IsInLocomotionRange = true;
		}
		if(--range <= 0){
			return;
		}
		for (const neighbor of this.Neighbors) {
			if(!neighbor.IsInLocomotionRange && !neighbor.Ship)
				neighbor.FindAndSetInLocomotionRange(range);
		}
   }
}
