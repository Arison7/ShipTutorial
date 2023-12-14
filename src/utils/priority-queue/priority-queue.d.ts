


export interface IPriorityQueue<T> {
	IsEmpty(): boolean;
	Enqueue(item: T, priority: number): void;
	Dequeue(): T | null;


}

export interface IPriorityQueueItem<T> {
	priority: number
	value: T

}