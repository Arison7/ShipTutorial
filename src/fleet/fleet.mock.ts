import { Fleet } from "./fleet.js";
import { Team } from "../team/team.js";
import { Grid } from "../grid/grid.js";

export const mockFleetFactory = (team = Team.A, grid = new Grid()): Fleet => new Fleet(team,grid)