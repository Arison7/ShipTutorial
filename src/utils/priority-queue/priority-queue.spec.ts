 import { PriorityQueue } from './priority-queue'
 
 



describe('>>> Priority Queue', () => {
	let q: PriorityQueue<string>

	beforeEach(() => {
		q = new PriorityQueue<string>()

	})
	
	it('should return IsEmpty true if queue is empty and false otherwise', () => {
		expect(q.IsEmpty()).toBe(true)

		q.Enqueue('test', 1)
		expect(q.IsEmpty()).toBe(false)

		q.Dequeue()

		expect(q.IsEmpty()).toBe(true)


	})

	it('should Enqueue and Dequeue items in the queue according to priority', () => { 
		q.Enqueue('two', 1)
        q.Enqueue('one', 0)
        q.Enqueue('three', 2)
    
        expect(q.Dequeue()).toEqual<string>('one')
        expect(q.Dequeue()).toEqual<string>('two')
        expect(q.Dequeue()).toEqual<string>('three')

	})
})