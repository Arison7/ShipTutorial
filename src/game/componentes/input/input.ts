import {Game} from "../../game.js";
import { IComponent } from "../../../utils/ecs/component.js";
import { Vector2D } from "../../../utils/vector2D/vector2D.js";
import { CanvasLayer } from "../../../canvas-layer/canvas-layer.js";
import { OnClickComponent } from "../../../utils/onclick/onclick.js";


export class GameInputComponent implements IComponent {
	public Entity: Game;

	public Awake(): void {
		document.body.addEventListener('click',this.HandleClick.bind(this))
	}

	public Update(deltaTime: number): void {

	}

	private HandleClick(e : MouseEvent) : void {

		const point = CanvasLayer.Background.CalcLocalPointFrom(new Vector2D(e.clientX,e.clientY))
		if(!point){
			return;
		}

		for (const entity of this.Entity.Entities){
			if(!entity.HasComponent(OnClickComponent)){
				continue;
			}

			entity.GetComponent(OnClickComponent).ClickOn(point);
		}

	}
}
