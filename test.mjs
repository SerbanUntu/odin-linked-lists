import { LinkedList } from './index.mjs'

let list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.prepend(0)
list.prepend(-1)

console.log(list.toString()) // ( -1 ) -> ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> null
