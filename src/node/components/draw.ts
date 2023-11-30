import { IComponent } from "../../utils/ecs/component.js";
import { Node } from "../../node/node.js";
import { Settings } from "../../settings/settings.js";

export class NodeDrawComponent implements IComponent {
	public Entity: Node;

	public Awake() : void {
		const canvas = document.createElement('canvas');

		const canvasSize = (Settings.grid.nodeSize + Settings.grid.nodeOffset) * Settings.grid.dimensions + Settings.grid.nodeOffset

		canvas.setAttribute('width',`${canvasSize}px`);
		canvas.setAttribute('height',`${canvasSize}px`);
		document.body.appendChild(canvas);


		// "!" here is to ignore the type check on the ctx element 
		const ctx = canvas.getContext('2d')!;
		ctx.beginPath();
		ctx.fillStyle = Settings.grid.color;
		ctx.rect(this.Entity.Start.x, this.Entity.Start.y, this.Entity.Size.x, this.Entity.Size.y);
		ctx.fill()

	}

	public Update(deltaTime: number) : void {

	}


}

