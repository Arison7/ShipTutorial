import { Entity } from "../utils/ecs/entity.js";
import { Settings } from "../settings/settings.js";
import { Grid } from '../grid/grid.js';
import { Fleet } from "../fleet/fleet.js";
import { Team } from "../team/team.js";
import { GameInputComponent } from "./componentes/input/input.js";

export class Game extends Entity {
	private _lastTimestamp : number = 0;
	private _entities : Entity[] = [];


	constructor(grid : Grid,fleetA : Fleet,fleetB : Fleet){
		super();
		this._entities.push(
			grid,
			fleetA,
			fleetB
		);
	}

	/**
	 * get Entities
	 */
	public get Entities() : Entity[] {
		return this._entities;
		
	} 
	/**
	 * Starts initial game loop
	 * @returns void
	 */
	public Awake() : void {
		this.AddComponent(new GameInputComponent());
		super.Awake()
		
		// awake all the children
		for (const entity of this._entities){
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
		for (const entity of this._entities){
			entity.Update(deltaTime);
		}

		// update last timestamp
		this._lastTimestamp = Date.now();

		// invoke next frame
		window.requestAnimationFrame(() => this.Update())

	}

}