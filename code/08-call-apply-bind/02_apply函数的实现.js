Function.prototype.hyapply = function (thisArg, argsArray) {
    // 获取到要执行的函数
    var fn = this

    // 处理绑定的thisArg
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window
    thisArg.fn = fn

    // 如果没有传入argsArray
    argsArray = argsArray ? argsArray : []

    var result = thisArg.fn(...argsArray)
    // 返回结果
    return result
}

function sum(num1, num2) {
    console.log('sum被调用', this, num1, num2)
    var result = num1 + num2
    return result
}

function bar() {
    console.log('bar被调用')
}

//系统调用
// var result = sum.apply(null, [12, 34])
// console.log(result)

// hyapply调用
var result = sum.hyapply('abc', [12, 34])
console.log(result)

// 不传参数
bar.hyapply()
bar.hyapply(0)