import { IUpdate, IAwake } from "../lifecycle/lifecycle"

export interface IComponent extends IUpdate, IAwake {
	Entity : Entity | null
}
