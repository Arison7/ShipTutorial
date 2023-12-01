import { Ship } from "./ship.js";
import { mockFleetFactory } from "../fleet/fleet.mock.js";

export const mockShipFactory = (fleet = mockFleetFactory()): Ship => new Ship(fleet)