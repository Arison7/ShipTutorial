import { IGraphNode } from './graph-node.d.js';

export interface IGraph {
	GetCost(a: IGraphNode, b: IGraphNode): number;
	GetNeighborsOf(node: IGraphNode): IGraphNode[];

}