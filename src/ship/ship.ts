import { Entity } from "../utils/ecs/entity.js";
import { Fleet } from "../fleet/fleet.js";

export class Ship extends Entity{
	constructor(public readonly Fleet : Fleet){
		super();
	}

}