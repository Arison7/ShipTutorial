import { Fleet } from "./fleet.js";
import { Team } from "../team/team.js";

export const mockFleetFactory = (team = Team.A): Fleet => new Fleet(team)