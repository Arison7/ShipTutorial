import { Color } from "../utils/color/color.js";

export const Settings = Object.freeze({
	grid: {
		dimensions: 6,
		nodeSize: 100,
		nodeOffset: 10,
		color : {
			regular: new Color(230, 230, 230, 1),
			active: new Color(176,190,197, 1)
		} 
	},
	ships: {
		fleetSize : 3,
		colors : {
			a : new Color(105, 20, 30, 1),
			b : new Color(205, 10, 60, 1),
		}
	}
});