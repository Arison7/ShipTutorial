import { IComponent } from "../../../utils/ecs/component.js";
import { Node } from "../../node.js";
import { Settings } from "../../../settings/settings.js";
import { CanvasLayer } from "../../../canvas-layer/canvas-layer.js";
import { Color } from "../../../utils/color/color.js";

export class NodeDrawComponent implements IComponent {
	public Entity: Node;

	public Awake() : void {
		this.Clear();

	}

	public Update(deltaTime: number) : void {
		this.Clear();
		this.Draw();
		this.DrawDebugInfo()


	}
	private Clear(): void {
		CanvasLayer.Background.ClearRect(this.Entity.Start, this.Entity.Size)
	}

	private Draw() : void {
		CanvasLayer.Background.FillRect(
			this.Entity.Start,
			this.Entity.Size,
			this.Entity.IsActive ? Settings.grid.color.active : Settings.grid.color.regular
		)
	}
	private DrawDebugInfo() : void {
		if(!Settings.debugMode){
			return;
		}

		const entity = this.Entity;

		CanvasLayer.Background.DrawText(
			entity.Index.AsString(),
			entity.Start,
			new Color (255,0,0,1)
		)




		
	}


}

