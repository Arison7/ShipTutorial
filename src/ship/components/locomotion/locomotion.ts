import { IComponent } from "../../../utils/ecs/component.js";
import { Ship } from "../../ship.js";
import { Node } from "../../../node/node.js";	
import { Vector2D } from "../../../utils/vector2D/vector2D.js";

export class ShipLocomotionComponent implements IComponent {
	public Entity: Ship;
	private _node: Node; 

	constructor(node : Node) {
		this._node = node
	}

	public Awake() {
		this._node.Ship = this.Entity;

	}
	public Update(deltaTime: number) {

	}
	public get Node(){
		return this._node;
	}

	public set Node(value : Node){
		this._node = value;
	}
	public get Position() : Vector2D | null{
		return this.Node.Center;
	}
}