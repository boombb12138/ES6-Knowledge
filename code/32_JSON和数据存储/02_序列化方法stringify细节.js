const obj = {
    name: 'why',
    age: 18,
    friends: {
        name: 'james'
    },
    // toJSON: function () {
    //     return 12345
    // }
}


// 需求 将上面的对象转成JSON字符串
// 1.直接转换
const jsonString1 = JSON.stringify(obj)
console.log(jsonString1)

// 2.stringify可以有第二个参数replacer
// 2.1 传入数组：设定哪些是需要转化的
const jsonString2 = JSON.stringify(obj, ["name", "age"])

console.log(jsonString2)

// 2.2 传入回调函数
const jsonString3 = JSON.stringify(obj, (key, value) => {
    if (key === 'age') {
        return value + 1
    }
    return value
})

console.log(jsonString3)

// 3 傳入第3个参数
// 可以换行 同时设置缩进的格数
const jsonString4 = JSON.stringify(obj, null, 2)
console.log(jsonString4)
// 4 如果obj对象中有toJSON方法
