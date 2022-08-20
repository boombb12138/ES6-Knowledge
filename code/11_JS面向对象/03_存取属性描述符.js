var obj = {
    name: 'why',
    age: 18,
    _address: '北京市'
}

// 存取属性描述符
// 1 隐藏某个私有属性
// 2 如果我们希望截获某个属性被访问和被设置的过程
Object.defineProperty(obj, "address", {
    enumerable: true,
    configurable: true,
    // 一旦读取address属性就会调用get方法
    get: function () {
        return this._address
    },
    // 给address赋值就会调用set
    set: function (value) {
        bar()
        this._address = value
    }
})

console.log(obj.address)

obj.address = '上海市'
console.log(obj.address)

function bar() {
    console.log('set被调用')
}