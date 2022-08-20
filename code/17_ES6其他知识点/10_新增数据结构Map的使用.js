const obj1 = { name: 'why' }
const obj2 = { age: 18 }

const map = new Map()
// 将对象作为key
//// 给map新增属性的方法1
map.set(obj1, 'abc')
map.set(obj2, 'nba')
// 获取属性obj1的值
console.log(map.get(obj1))

// 给map新增属性的方法2
const map2 = new Map([[obj1, 'abc'], [obj2, 'nba']])
console.log(map.get(obj1))

console.log(map2.size)

// set在Map中添加key value
const obj3 = { height: 1.88 }
map2.set(obj3, 'bbb')
console.log(map2)
// get(key)：根据key获取Map中的value
console.log(map2.get(obj2))

console.log('========')
// forEach
map2.forEach((item, key) => {
    // console.log(key, item)
})

// for of 
for ([key, item] of map2) {
    console.log(key, item)
}





