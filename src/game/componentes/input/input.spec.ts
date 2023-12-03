import { Game } from "../../game";
import { GameMockFactory } from "../../game.mock";
import { GameInputComponent } from "./input";
import { Vector2D } from "../../../utils/vector2D/vector2D";
import { CanvasLayer } from "../../../canvas-layer/canvas-layer";
import { mockGridFactory } from "../../../grid/grid.mock";
import { Grid } from "../../../grid/grid";
import { OnClickComponent } from "../../../utils/onclick/onclick";


class FakeGridOnClickComponent extends OnClickComponent {
  public Entity: Grid

  public Awake(): void {
    // @todo
  }
  public Update(deltaTime: number): void {
    // @todo
  }

  public ClickOn(point: Vector2D): void {
    // @todo
  }
}

describe('>>> Game Input Component', () => {
	let comp: GameInputComponent
	let game: Game
	let grid: Grid

	beforeEach(() => {
		grid = mockGridFactory()
		grid.AddComponent(new FakeGridOnClickComponent())
		game = GameMockFactory(grid)
		comp = new GameInputComponent()

		game.AddComponent(comp)
		game.Awake()
	})
	it('should handle click', () => {
		const point = new Vector2D(200, 200) 
		const spy = jest.spyOn(grid.GetComponent(OnClickComponent), 'ClickOn')
		CanvasLayer.Background.CalcLocalPointFrom = jest.fn().mockReturnValueOnce(point) 

		expect(spy).not.toHaveBeenCalled()

		document.body.dispatchEvent(new MouseEvent('click'))

		expect(spy).toHaveBeenCalledWith(point)
	})

})