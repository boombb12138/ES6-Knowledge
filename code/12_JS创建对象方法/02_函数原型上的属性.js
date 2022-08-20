function foo() {
}
// 所有的函数都有name属性 就是函数的名字
console.log(foo.prototype.constructor)//[Function: foo]
console.log(foo.prototype.constructor.name)//foo

// 修改原型
foo.prototype = {
    name: 'why',
    age: 18,
    height: 1.88,
}

Object.defineProperty(foo.prototype, 'constructor', {
    enumerable: false,
    writable: true,
    configurable: true,
    value: foo
})

var f1 = new foo()
console.log(f1.name, f1.age)