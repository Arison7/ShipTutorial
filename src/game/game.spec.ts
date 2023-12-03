import { Game } from './game'
import { Grid } from '../grid/grid';
import { Fleet } from '../fleet/fleet';
import { GameInputComponent } from './componentes/input/input';
import { GameMockFactory } from './game.mock';


describe('>>> Game', () => {

	let game: Game;

	
	beforeEach(() =>{
		game = GameMockFactory()
		//yeah idk
		window.requestAnimationFrame = jest.fn().mockImplementationOnce((cb) => cb())
	})

	it('should start update loop next frame after awake', () => {
		const spy = jest.spyOn(game, 'Update');

		game.Awake();

		expect(spy).toHaveBeenCalledTimes(1);
	});

	it('should awake and update all Components', () => {
		const spyAwakeGameClickComp = jest.spyOn(GameInputComponent.prototype, 'Awake')
		const spyUpdateGameClickComp = jest.spyOn(GameInputComponent.prototype, 'Update')

		expect(spyAwakeGameClickComp).not.toHaveBeenCalled()
		expect(spyUpdateGameClickComp).not.toHaveBeenCalled()

		game.Awake()
		expect(spyAwakeGameClickComp).toHaveBeenCalled()

		game.Update()
		expect(spyUpdateGameClickComp).toHaveBeenCalled()
	})


	it('should awake and update all children', () => {
		const spyGridAwake = jest.spyOn(Grid.prototype, 'Awake')
		const spyGridUpdate = jest.spyOn(Grid.prototype, 'Update')

		const spyFleetAwake = jest.spyOn(Fleet.prototype, 'Awake')
		const spyFleetUpdate = jest.spyOn(Fleet.prototype, 'Update')

		expect(spyGridAwake).not.toHaveBeenCalled()
		expect(spyGridUpdate).not.toHaveBeenCalled()

		expect(spyFleetAwake).not.toHaveBeenCalled()
		expect(spyFleetUpdate).not.toHaveBeenCalled()

		game.Awake()
		expect(spyGridAwake).toHaveBeenCalled()
		expect(spyFleetAwake).toHaveBeenCalled() 

		game.Update()
		expect(spyGridUpdate).toHaveBeenCalled()
		expect(spyFleetUpdate).toHaveBeenCalled() // <--- ADD
	})
});