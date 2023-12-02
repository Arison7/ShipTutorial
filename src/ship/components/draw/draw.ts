import { IComponent } from "../../../utils/ecs/component.js";
import { Ship } from "../../ship.js";
import { CanvasLayer } from "../../../canvas-layer/canvas-layer.js";
import { Color } from "../../../utils/color/color.js";
import { Settings } from "../../../settings/settings.js";
import { Team } from "../../../team/team.js";
import { Vector2D } from "../../../utils/vector2D/vector2D.js";


export class ShipDrawComponent implements IComponent {
	public Entity: Ship;
	public position: Vector2D;

	public Awake(): void {
		this.Clear();

	}

	public Update(deltaTime: number): void {
		this.Clear();
		this.Draw();

	}

	private Draw(): void {

		const radius = 40;

		const colors = Settings.ships.colors
		const color = this.Entity.Fleet.Team === Team.A ? Settings.ships.colors.a : Settings.ships.colors.b;

		CanvasLayer.Foreground.FillCircle(this.Position, radius, color);

	}
	private Clear(): void {
		CanvasLayer.Foreground.ClearRect(
			new Vector2D(
				this.Position.x - Settings.grid.nodeSize / 2,
				this.Position.y - Settings.grid.nodeSize / 2
			),
			new Vector2D(Settings.grid.nodeSize, Settings.grid.nodeSize)
		)			

	}
	private get Position(): Vector2D {
		const position = this.Entity.Position;

		if(!position) {
			throw new Error('Attempt to draw a ship that has no Position');
		}

		return position;
	}
}