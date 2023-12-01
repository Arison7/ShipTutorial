import { Entity } from "../utils/ecs/entity.js";
import { Team } from "../team/team.js";
import { Ship } from "../ship/ship.js";
import { Settings } from "../settings/settings.js";

export class Fleet extends Entity{
	private _ships : Ship[] = [];

	constructor(public readonly Team : Team,){
		super();
	}

	public Awake(): void {
		super.Awake();

		// Awakes and init ships
		this.PrepareShips()
		
	}

	public Update(deltaTime: number): void {
		super.Update(deltaTime);

		this._ships.forEach(ship => ship.Update(deltaTime));
	}

	public PrepareShips(): void {
		for (let i = 0; i < Settings.ships.fleetSize; i++) {
			const ship = new Ship(this);
			this._ships.push(ship);
			ship.Awake();

		}


	}



}
