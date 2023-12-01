import { Entity } from "../utils/ecs/entity.js";
import { Fleet } from "../fleet/fleet.js";
import { ShipDrawComponent } from "./components/draw/draw.js";

export class Ship extends Entity{
	constructor(public readonly Fleet : Fleet){
		super();
	}
	public Awake(): void {
		this.AddComponent(new ShipDrawComponent());
		
		super.Awake();
	}

}