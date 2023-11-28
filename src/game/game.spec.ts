import { Game } from './game'
import { Entity }  from '../utils/ecs/entity'
import { IComponent } from '../utils/ecs/component'

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

	const e1 = new E1();
	const e2 = new E2();
	const e3 = new E3();

	beforeEach(() =>{
		game = new Game();
		game.Entities.push(e1, e2, e3);

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

	it('should awake all children', () => {
		const spy1 = jest.spyOn(e1, 'Awake')
		const spy2 = jest.spyOn(e2, 'Awake')
		const spy3 = jest.spyOn(e3, 'Awake')

		expect(spy1).not.toHaveBeenCalled()
		expect(spy2).not.toHaveBeenCalled()
		expect(spy3).not.toHaveBeenCalled()

		game.Awake()

		expect(spy1).toHaveBeenCalled()
		expect(spy2).toHaveBeenCalled()
		expect(spy3).toHaveBeenCalled()
	});

	it('should update all children', () => {
		const spy1 = jest.spyOn(e1, 'Update')
		const spy2 = jest.spyOn(e2, 'Update')
		const spy3 = jest.spyOn(e3, 'Update')

		expect(spy1).not.toHaveBeenCalled()
		expect(spy2).not.toHaveBeenCalled()
		expect(spy3).not.toHaveBeenCalled()

		game.Update()

		expect(spy1).toHaveBeenCalled()
		expect(spy2).toHaveBeenCalled()
		expect(spy3).toHaveBeenCalled()
	});
});