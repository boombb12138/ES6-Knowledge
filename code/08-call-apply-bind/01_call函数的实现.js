Function.prototype.hycall = function (thisArg, ...args) {

    // 对thisArg转成对象类型（防止传入的是非对象类型）
    thisArg = thisArg ? Object(thisArg) : window

    // 获取需要被执行的函数
    var fn = this
    thisArg.fn = fn
    var result = thisArg.fn(...args)

    //将计算的结果返回
    return result
}

function foo() {
    console.log('foo被调用了', this)
}

function sum(num1, num2) {
    console.log('sum调用了', this, num1, num2)
    return num1 + num2
}

foo.hycall({})
foo.hycall(undefined)

var result = sum.hycall({}, 2, 314)

console.log('sum.hycall被调用', result)