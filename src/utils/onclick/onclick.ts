import { IComponent } from "../ecs/component.js";
import { Vector2D } from "../vector2D/vector2D.js";
import { Entity } from "../ecs/entity.js";

export abstract class OnClickComponent implements IComponent{
	public abstract Entity: Entity | null;

	public abstract Awake(): void;

	public abstract Update(deltaTime: number): void;

	public abstract ClickOn(point : Vector2D) : void;
 


}