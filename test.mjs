import { LinkedList } from './index.mjs'

let list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.prepend(0)
list.prepend(-1)
list.pop()

list.insertAt(10, 4)
list.removeAt(-4)

console.log(list.toString()) // ( -1 ) -> ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> null

console.log(list.head) // Node { value: -1, nextNode: [Node] }
console.log(list.tail()) // Node { value: 5, nextNode: null }
console.log(list.size()) // 7
console.log(list.at(-2)) // Node { value: 4, nextNode: [Node] }
console.log(list.at(1)) // Node { value: 0, nextNode: [Node] }
console.log(list.find(0)) // 1
console.log(list.find(9)) // null
console.log(list.contains(0)) // true
console.log(list.contains(9)) // false
