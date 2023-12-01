import { IComponent } from "../../../utils/ecs/component.js";
import { Node } from "../../node.js";
import { Settings } from "../../../settings/settings.js";
import { CanvasLayer } from "../../../canvas-layer/canvas-layer.js";

export class NodeDrawComponent implements IComponent {
	public Entity: Node;

	public Awake() : void {
		this.Clear();

	}

	public Update(deltaTime: number) : void {
		this.Clear();

		this.Draw();


	}
	private Clear(): void {
		CanvasLayer.Background.ClearRect(this.Entity.Start, this.Entity.Size)
	}

	private Draw() : void {
		CanvasLayer.Background.FillRect(
			this.Entity.Start,
			this.Entity.Size,
			Settings.grid.color
    )
	}


}

