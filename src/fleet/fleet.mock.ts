import { Fleet } from "./fleet.js";
import { Team } from "../team/team.js";
import { Grid } from "../grid/grid.js";
import { mockGridFactory } from "../grid/grid.mock.js";

export const mockFleetFactory = (team = Team.A, grid = mockGridFactory()): Fleet => new Fleet(team,grid)