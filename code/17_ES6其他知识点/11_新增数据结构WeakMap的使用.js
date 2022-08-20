const obj = { name: 'obj1' }

const map = new Map()
map.set(obj, "aaa")

const weakMap = new WeakMap()
weakMap.set(obj, 'aaa')

console.log(weakMap.get(obj))//aaa

// weakMap中没有size方法 也不能遍历 没有forEach方法
// has
console.log(weakMap.has(obj))//true 


// weakMap只能将对象作为键名
// weakMap.set(11, 'aaa')//报错