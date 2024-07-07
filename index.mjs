class Node {
	value = null
	nextNode = null

	constructor(value, nextNode = null) {
		this.value = value
		this.nextNode = nextNode
	}
}

export class LinkedList {
	head = null

	append(value) {
		const newNode = new Node(value)
		if (this.head === null) {
			this.head = newNode
			return
		}
		this.tail().nextNode = newNode
	}

	prepend(value) {
		const oldHead = this.head
		const newNode = new Node(value, oldHead)
		this.head = newNode
	}

	size() {
		let size = 0
		let currentNode = this.head
		while (currentNode !== null) {
			currentNode = currentNode.nextNode
			size++
		}
		return size
	}

	tail() {
		if (this.head === null) return null
		let currentNode = this.head
		while (currentNode.nextNode !== null) {
			currentNode = currentNode.nextNode
		}
		return currentNode
	}

	at(index) {
		if (!Number.isInteger(index)) {
			console.error('Error: Invalid index')
			return
		}
		if (index < 0) index += this.size()
		if (index < 0) {
			console.error('Error: Index out of range')
			return
		}
		let currentNode = this.head
		let i = 0
		while (i < index && currentNode !== null) {
			currentNode = currentNode.nextNode
			i++
		}
		if (currentNode !== null) return currentNode
		console.error('Error: Index out of range')
	}

	pop() {
		if (this.head === null) {
			console.error('Error: Cannot pop from empty list')
			return
		}
		if (this.head.nextNode === null) {
			this.head = null
			return
		}
		let currentNode = this.head
		while (currentNode.nextNode.nextNode !== null) {
			currentNode = currentNode.nextNode
		}
		currentNode.nextNode = null
		return false
	}

	contains(value) {
		let currentNode = this.head
		while (currentNode !== null) {
			if (currentNode.value === value) {
				return true
			}
			currentNode = currentNode.nextNode
		}
		return false
	}

	find(value) {
		let index = 0
		let currentNode = this.head
		while (currentNode !== null) {
			if (currentNode.value === value) {
				return index
			}
			index++
			currentNode = currentNode.nextNode
		}
		return null
	}

	toString() {
		if (this.head === null) return 'Empty list'
		let result = `( ${this.head.value} )`
		let currentNode = this.head
		while (currentNode.nextNode !== null) {
			currentNode = currentNode.nextNode
			result += ` -> ( ${currentNode.value} )`
		}
		result += ` -> null`
		return result
	}

	insertAt(value, index) {
		if (!Number.isInteger(index)) {
			console.error('Error: Invalid index')
			return
		}
		if (index < 0) index += this.size() + 1
		if (index < 0) {
			console.error('Error: Index out of range')
			return
		}
		if (index === 0) {
			this.prepend(value)
			return
		}
		let currentNode = this.head
		let i = 0
		while (i < index - 1 && currentNode !== null) {
			currentNode = currentNode.nextNode
			i++
		}
		if (currentNode === null) {
			console.error('Error: Index out of range')
			return
		}
		const remaining = currentNode.nextNode
		currentNode.nextNode = new Node(value, remaining)
	}

	removeAt(index) {
		if (this.head === null) {
			console.error('Error: Cannot remove from empty list')
			return
		}
		if (!Number.isInteger(index)) {
			console.error('Error: Invalid index')
			return
		}
		if (index < 0) index += this.size()
		if (index < 0) {
			console.error('Error: Index out of range')
			return
		}
		if (index === 0) {
			this.head = this.head.nextNode
			return
		}
		let currentNode = this.head
		let i = 0
		while (i < index - 1 && currentNode !== null) {
			currentNode = currentNode.nextNode
			i++
		}
		if (currentNode === null || currentNode.nextNode === null) {
			console.error('Error: Index out of range')
			return
		}
		const remaining = currentNode.nextNode.nextNode
		currentNode.nextNode = remaining
	}
}
