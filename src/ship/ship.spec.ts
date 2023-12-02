import { Ship } from "./ship.js";
import { mockShipFactory } from "./ship.mock.js";
import { ShipDrawComponent } from "./components/draw/draw.js";
import { ShipLocomotionComponent } from "./components/locomotion/locomotion.js";

describe('>>> Ship', () => {
	let ship: Ship

	beforeEach(() => {
		ship = mockShipFactory()
	})

	it('should awake and update all Components', () => {
		const spyDrawCompAwake = jest.spyOn(ShipDrawComponent.prototype, 'Awake')
		const spyDrawCompUpdate = jest.spyOn(ShipDrawComponent.prototype, 'Update')

		const spyLocomotionComAwake = jest.spyOn(ShipLocomotionComponent.prototype, 'Awake')
		const spyLocomotionComUpdate = jest.spyOn(ShipLocomotionComponent.prototype, 'Update')

		expect(spyDrawCompAwake).not.toHaveBeenCalled()
		expect(spyDrawCompUpdate).not.toHaveBeenCalled()

		expect(spyLocomotionComAwake).not.toHaveBeenCalled()
		expect(spyLocomotionComUpdate).not.toHaveBeenCalled()

		ship.Awake()
		expect(spyDrawCompAwake).toHaveBeenCalled()
		expect(spyLocomotionComAwake).toHaveBeenCalled()

		ship.Update(0)
		expect(spyDrawCompUpdate).toHaveBeenCalled()
		expect(spyLocomotionComUpdate).toHaveBeenCalled()
	})

})