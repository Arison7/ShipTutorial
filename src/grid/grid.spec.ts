import { Grid } from './grid.js'
import { Node } from '../node/node.js'
import { Settings } from '../settings/settings.js'
import { mockGridFactory } from './grid.mock.js'
import { GridOnClickComponent } from './components/onclick/onclick.js'


describe('>>> Grid', () => {
	const nodeCount = Settings.grid.dimensions * Settings.grid.dimensions
	let grid: Grid

	beforeEach(() => {
		grid = mockGridFactory()
	})
	it('should awake and update all Components', () => {
		const spyDrawCompAwake = jest.spyOn(GridOnClickComponent.prototype, 'Awake')
		const spyDrawCompUpdate = jest.spyOn(GridOnClickComponent.prototype, 'Update')

		expect(spyDrawCompAwake).not.toHaveBeenCalled()
		expect(spyDrawCompUpdate).not.toHaveBeenCalled()

		grid.Awake()
		expect(spyDrawCompAwake).toHaveBeenCalled()

		grid.Update(0)
		expect(spyDrawCompUpdate).toHaveBeenCalled()
   }) 
	it('should awake and update all children', () => {
		const spyNodeAwake = jest.spyOn(Node.prototype, 'Awake')
		const spyNodeUpdate = jest.spyOn(Node.prototype, 'Update')

		expect(spyNodeAwake).not.toHaveBeenCalled()
		expect(spyNodeUpdate).not.toHaveBeenCalled()

		grid.Awake()
		expect(spyNodeAwake).toHaveBeenCalledTimes(nodeCount)

		grid.Update(0)
		expect(spyNodeUpdate).toHaveBeenCalledTimes(nodeCount)
  })
})