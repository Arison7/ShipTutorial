import { IUpdate, IAwake } from "../lifecycle/lifecycle.js"

export interface IComponent extends IUpdate, IAwake {
	Entity : Entity | null
}
