import { Game } from "./game/game.js";
import { Grid } from "./grid/grid.js";
import { Fleet } from "./fleet/fleet.js";
import { Team } from "./team/team.js";

const grid = new Grid()
new Game(
   grid,
   new Fleet(Team.A, grid),
   new Fleet(Team.B, grid)
).Awake()
