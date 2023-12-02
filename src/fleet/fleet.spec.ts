import { Fleet } from "./fleet";
import { IComponent } from "../utils/ecs/component";
import { mockFleetFactory } from "./fleet.mock";
import { Ship } from "../ship/ship";
import { Settings } from "../settings/settings";

jest.mock('../ship/ship.ts');
class C1 implements IComponent {
  public Entity: Fleet
  public Awake(): void { /*...*/ }
  public Update(deltaTime: number): void { /*...*/ }
}

class C2 implements IComponent {
  public Entity: Fleet 
  public Awake(): void { /*...*/ }
  public Update(deltaTime: number): void { /*...*/ }
}

describe('>>> Fleet', () => {
	let fleet: Fleet 

	const c1 = new C1()
	const c2 = new C2()

	beforeEach(() => {
		fleet = mockFleetFactory();
	})
	
	it('should awake and update all children', () => {
		const spyShipAwake = jest.spyOn(Ship.prototype, 'Awake')
		const spyShipUpdate = jest.spyOn(Ship.prototype, 'Update')

		expect(spyShipAwake).not.toHaveBeenCalled()
		expect(spyShipUpdate).not.toHaveBeenCalled()

		fleet.Awake()
		expect(spyShipAwake).toHaveBeenCalledTimes(Settings.ships.fleetSize)

		fleet.Update(0)
		expect(spyShipUpdate).toHaveBeenCalledTimes(Settings.ships.fleetSize)
	})


	it('should awake and update all Components', () => {
		const spyAwake1 = jest.spyOn(c1, 'Awake')
		const spyAwake2 = jest.spyOn(c2, 'Awake')

		const spyUpdate1 = jest.spyOn(c1, 'Update')
		const spyUpdate2 = jest.spyOn(c2, 'Update')

		expect(spyAwake1).not.toHaveBeenCalled()
		expect(spyAwake2).not.toHaveBeenCalled()

		expect(spyUpdate1).not.toHaveBeenCalled()
		expect(spyUpdate2).not.toHaveBeenCalled()

		fleet.AddComponent(c1)
		fleet.AddComponent(c2)

		fleet.Awake()
		expect(spyAwake1).toHaveBeenCalled()
		expect(spyAwake2).toHaveBeenCalled()

		fleet.Update(1)
		expect(spyUpdate1).toHaveBeenCalled()
		expect(spyUpdate2).toHaveBeenCalled()
	})
});