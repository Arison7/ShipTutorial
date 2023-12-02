import { Ship } from "./ship.js";
import { mockFleetFactory } from "../fleet/fleet.mock.js";
import { mockNodeFactory } from "../node/node.mock.js";

export const mockShipFactory = (fleet = mockFleetFactory(), node = mockNodeFactory()): Ship => new Ship(fleet,node)