var obj = {
    name: 'why',
    age: 18
}

// 数据属性描述符
Object.defineProperty(obj, 'address', {
    value: '北京市',
    // configurable表示屬性是否可以通过delete删除属性 或 重新定义该属性
    //    true可以删除或重新定义
    configurable: true,//默认值为false
    //enumerable: false 表示不能通过for-in 或 Object.keys返回该属性
    enumerable: true,//默认值为false
    // writable:属性是否可以赋值 false表示不能被赋值//默认值为false
    writable: false
})
console.log(obj)

// delete obj.name
// delete obj.address
// console.log(obj.address)
console.log(Object.keys(obj))
obj.address = '上海市'
console.log(obj)