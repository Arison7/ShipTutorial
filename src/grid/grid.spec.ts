import { Grid } from './grid.js'
import { Node } from '../node/node.js'
import { Settings } from '../settings/settings.js'


describe('>>> Grid', () => {
  const nodeCount = Settings.grid.dimensions * Settings.grid.dimensions
  let grid: Grid

  beforeEach(() => {
    grid = new Grid()
  })

  it('should awake and update all children', () => {
    const spyNodeAwake = jest.spyOn(Node.prototype, 'Awake')
    const spyNodeUpdate = jest.spyOn(Node.prototype, 'Update')

    expect(spyNodeAwake).not.toBeCalled()
    expect(spyNodeUpdate).not.toBeCalled()

    grid.Awake()
    expect(spyNodeAwake).toBeCalledTimes(nodeCount)

    grid.Update(0)
    expect(spyNodeUpdate).toBeCalledTimes(nodeCount)
  })
})