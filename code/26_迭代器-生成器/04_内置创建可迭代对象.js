const names = ['abc', 'cba', 'nba']

// console.log(names[Symbol.iterator])
const iterator = names[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// for (item of names) {
//     console.log(item)
// }

// Map / Set
const set = new Set()
const iterator2 = set[Symbol.iterator]()
console.log(iterator.next())

set.add(1)
set.add(100)
set.add(10000)
// 之所以可以用for of遍历是因为在该set中有[Symbol.iterator]属性
// for (item of set) {
//     console.log(item)
// }