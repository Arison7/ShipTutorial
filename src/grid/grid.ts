import { Entity } from "../utils/ecs/entity.js";
import { Settings } from "../settings/settings.js";
import { Node } from '../node/node.js';
import { Vector2D } from "../utils/vector2D/vector2D.js";
import { GridOnClickComponent } from "./components/onclick/onclick.js";

export class Grid extends Entity {

	private _nodes: Node[] = [];

	public get Nodes(): Node[] {
		return this._nodes;
	}

	public Awake(): void {
		this.AddComponent(new GridOnClickComponent());

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

				const index = new Vector2D(x, y);

				const top = this.Nodes.find(node => node.Index.x === index.x && node.Index.y === index.y - 1)
				const left = this.Nodes.find(node => node.Index.x === index.x - 1 && node.Index.y === index.y)

				const neighbors : Node[] = []

				const node = new Node(start, end, index, neighbors);

				if (left) {
					neighbors.push(left)
					left.Neighbors.push(node)
				}
			
				if (top) {
					neighbors.push(top)
					top.Neighbors.push(node)
				}

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