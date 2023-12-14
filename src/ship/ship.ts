import { Entity } from "../utils/ecs/entity.js";
import { Fleet } from "../fleet/fleet.js";
import { ShipDrawComponent } from "./components/draw/draw.js";
import { ShipLocomotionComponent } from "./components/locomotion/locomotion.js";
import { Vector2D } from "../utils/vector2D/vector2D.js";
import { Node } from "../node/node.js";
import { Settings } from "../settings/settings.js";

export class Ship extends Entity{
	private readonly _locomotionComponent: ShipLocomotionComponent;
	private _isActive : boolean = false;


	constructor(public readonly Fleet : Fleet, node : Node){
		super();

		this._locomotionComponent = new ShipLocomotionComponent(node);
		this._locomotionComponent.Node = node;
	}
	public Awake(): void {
		this.AddComponent(this._locomotionComponent);
		this.AddComponent(new ShipDrawComponent());
		super.Awake();
	}

	public get Position() : Vector2D | null{
		return this._locomotionComponent.Position;

	}
	public get IsActive() : boolean {
		return this._isActive;
	}

	public set IsActive(value : boolean) {
		this._isActive = value;

		if(value){
			this._locomotionComponent.Node.FindAndSetInLocomotionRange(Settings.ships.locomotion.range);
		}
	}


}