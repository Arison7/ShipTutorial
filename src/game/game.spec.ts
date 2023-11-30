import { Game } from './game'
import { Entity }  from '../utils/ecs/entity'
import { IComponent } from '../utils/ecs/component'
import { Grid } from '../grid/grid';

class C1 implements IComponent {
	public Entity: Game;
	public Awake(): void { /*...*/ };
	public Update(deltaTime: number): void { /*...*/ };
}
class C2 implements IComponent {
	public Entity: Game;
	public Awake(): void { /*...*/ };
	public Update(deltaTime: number): void { /*...*/ };
}
class C3 implements IComponent {
	public Entity: Game;
	public Awake(): void { /*...*/ };
	public Update(deltaTime: number): void { /*...*/ };
}

class E1 extends Entity { };
class E2 extends Entity { };
class E3 extends Entity { };


describe('>>> Game', () => {

	let game: Game;
	
	const c1 = new C1();
	const c2 = new C2();
	const c3 = new C3();

	
	beforeEach(() =>{
		game = new Game();


		//yeah idk
		window.requestAnimationFrame = jest.fn().mockImplementationOnce((cb) => cb())
	})

	it('should start update loop next frame after awake', () => {
		const spy = jest.spyOn(game, 'Update');

		game.Awake();

		expect(spy).toHaveBeenCalledTimes(1);
	});


	it('should awake all Components', () => {

		const spy1 = jest.spyOn(c1, 'Awake')
		const spy2 = jest.spyOn(c2, 'Awake')
		const spy3 = jest.spyOn(c3, 'Awake')

		expect(spy1).not.toHaveBeenCalled()
		expect(spy2).not.toHaveBeenCalled()
		expect(spy3).not.toHaveBeenCalled()

		game.AddComponent(c1)
		game.AddComponent(c2)
		game.AddComponent(c3)

		game.Awake()

		expect(spy1).toHaveBeenCalled()
		expect(spy2).toHaveBeenCalled()
		expect(spy3).toHaveBeenCalled()


	});

	it('should update all Components', () => {
		const spy1 = jest.spyOn(c1, 'Update')
		const spy2 = jest.spyOn(c2, 'Update')
		const spy3 = jest.spyOn(c3, 'Update')

		expect(spy1).not.toHaveBeenCalled()
		expect(spy2).not.toHaveBeenCalled()
		expect(spy3).not.toHaveBeenCalled()

		game.AddComponent(c1)
		game.AddComponent(c2)
		game.AddComponent(c3)

		game.Update()

		expect(spy1).toHaveBeenCalled()
		expect(spy2).toHaveBeenCalled()
		expect(spy3).toHaveBeenCalled()
	});

	it('Should update and awake all the children', () => {
		const spyGridAwake = jest.spyOn(Grid.prototype, 'Awake')
		const spyGridUpdate = jest.spyOn(Grid.prototype, 'Update')

		expect(spyGridAwake).not.toHaveBeenCalled()
		expect(spyGridUpdate).not.toHaveBeenCalled()

		game.Awake()
		expect(spyGridAwake).toHaveBeenCalled()

		game.Update()
		expect(spyGridUpdate).toHaveBeenCalled()	

		})
	
});