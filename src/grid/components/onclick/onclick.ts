import { OnClickComponent } from "../../../utils/onclick/onclick.js";
import { Vector2D } from "../../../utils/vector2D/vector2D.js";
import { Grid } from "../../grid.js";

export class GridOnClickComponent extends OnClickComponent {
	public Entity: Grid;

	public Awake(): void {
		
	}

	public Update(deltaTime: number): void {

	}

	public ClickOn(point: Vector2D): void {
		for(const node of this.Entity.Nodes){
			node.IsActive = node.Occupies(point);
		}

	}
}