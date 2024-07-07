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
}
