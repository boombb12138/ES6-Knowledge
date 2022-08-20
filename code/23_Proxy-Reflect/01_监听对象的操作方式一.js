const obj = {
    name: 'why',
    age: 18
}

// Object.defineProperty(obj, 'name', {
//     get: function () {
//         console.log('监听到obj对象的name属性被访问')
//         // 如果get函数没有返回值 默认返回undefined
//     },
//     set: function () {
//         console.log('监听到obj对象的name属性被设置')
//     }

// })

Object.keys(obj).forEach(key => {
    let value = obj[key]

    Object.defineProperty(obj, key, {
        get: function () {
            console.log(`监听到obj对象的${key}属性被访问`)
            return value
        },
        set: function (newValue) {
            console.log(`监听到obj对象的${key}属性被设置`)
            value = newValue
        }
    })
})


// console.log(obj.name)
// obj.name = 'kobe'
obj.name = 'kobe'
obj.age = 30
console.log(obj.name)
console.log(obj.age)
console.log(obj)
