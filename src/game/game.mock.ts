import { Game } from "./game";
import { Team } from "../team/team.js";
import { mockGridFactory } from "../grid/grid.mock";
import { mockFleetFactory } from "../fleet/fleet.mock";

export const GameMockFactory = (
	grid = mockGridFactory(),
	fleetA = mockFleetFactory(Team.A, grid),
	fleetB = mockFleetFactory(Team.B, grid)
): Game => new Game(grid, fleetA, fleetB)