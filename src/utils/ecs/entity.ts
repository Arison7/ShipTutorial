import { IComponent } from "./component.js";
import { IUpdate , IAwake } from "../lifecycle/lifecycle.js";

type constr<T> = {new (...args: any[]) : T};


export abstract class Entity implements IUpdate, IAwake {
	protected _components: IComponent[] = [];

	public get Components(): IComponent[] {
		return this._components;
	}

	/**
	 * Awakes all components
	 * @returns void
	 */
	public Awake(): void {
		for (const component of this._components){
			component.Awake();
		}
	}


	/**
	 * Update
	 * @param deltaTime time since last update
	 * @returns void
	 */
	public Update(deltaTime: number): void {
		for (const component of this._components){
			component.Update(deltaTime);
		}
	}
	/**
	 * GetCompoment
	 */
	public GetComponent<C extends IComponent>(constr : constr<C>): C {
		for (const component of this._components){
			if (component instanceof constr){
				return component as C;
			}
		}

		throw new Error(`Component ${constr.name} not found on entity ${this.constructor.name}`);

	} 
	/**
	 * removeComponent
	 */
	public RemoveComponent<C extends IComponent>(constr : constr<C>) : void {
		for (let i = 0; i < this._components.length; i++){
			if (this._components[i] instanceof constr){
				this._components[i].Entity = null;
				this._components.splice(i, 1);
				return;
			}
		}
		throw new Error(`Component ${constr.name} not found on entity ${this.constructor.name}`);

		
	}

	public HasComponent<C extends IComponent>(constr : constr<C>) : boolean {
		for (const component of this._components){
			if (component instanceof constr){
				return true;
			}
		}
		return false;
	}
		

	/**
	 * AddCompoment
	 */
	public AddComponent(component : IComponent) {
		this._components.push(component);
		component.Entity = this;
	}

}