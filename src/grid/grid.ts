import { Entity } from "../utils/ecs/entity.js";
import { Settings } from "../settings/settings.js";
import { Node } from '../node/node.js';
import { Vector2D } from "../utils/vector2D/vector2D.js";

export class Grid extends Entity {

	private _nodes: Node[] = [];

	public get Nodes(): Node[] {
		return this._nodes;
	}

	public Awake(): void {
		super.Awake();

		this.InitNodes();

		for (const node of this._nodes) {
			node.Awake();
		}


	}	

	private InitNodes(): void {
		const size = Settings.grid.nodeSize;
		const offset = Settings.grid.nodeOffset;
		for (let y = 0; y < Settings.grid.dimensions; y++) {
			for (let x = 0; x < Settings.grid.dimensions; x++) {
				const start = new Vector2D(
					(size + offset) * x + offset,
					(size + offset) * y + offset
				);

				const end = new Vector2D(
					start.x + size,
					start.y + size
				);

				const Index = new Vector2D(x, y);

				const node = new Node(start, end, Index);

				this._nodes.push(node);
      	}}

	}


	public Update(deltaTime: number): void {
		super.Update(deltaTime);


		for (const node of this._nodes) {
			node.Update(deltaTime);
		}

	}


}