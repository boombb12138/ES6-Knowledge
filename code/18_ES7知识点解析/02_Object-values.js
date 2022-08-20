var obj = {
    name: 'why',
    age: 18
}
// 获取key
Object.keys(obj)
// 获取值
Object.values(obj)

// 获取entries
console.log(Object.entries(obj))//[ [ 'name', 'why' ], [ 'age', 18 ] ]

const objEntries = Object.entries(obj)
objEntries.forEach(item => {
    console.log(item[0], item[1])
    //name why
    // age 18
})

console.log(Object.entries(['abc', 'cba']))