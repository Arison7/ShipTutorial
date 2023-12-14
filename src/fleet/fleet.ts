import { Entity } from "../utils/ecs/entity.js";
import { Team } from "../team/team.js";
import { Ship } from "../ship/ship.js";
import { Settings } from "../settings/settings.js";
import { Grid } from "../grid/grid.js";

export class Fleet extends Entity{
	private _ships : Ship[] = [];

	constructor(
		public readonly Team : Team,
		private readonly _grid : Grid

	){
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
		const dimension = Settings.grid.dimensions;
		const nodes = this._grid.Nodes;

		for (let i = 0; i < Settings.ships.fleetSize; i++) {
			const node = this.Team === Team.A ? nodes[i * dimension] : nodes[nodes.length - 1 - i * dimension];
			const ship = new Ship(this, node);
			this._ships.push(ship);
			ship.Awake();

		}

		if(this.Team === Team.A){
			this._ships[0].IsActive = true;

		}


	}



}
