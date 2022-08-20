Function.prototype.hybind = function (thisArg, ...argArray) {
    // 获取要执行的函数
    var fn = this

    thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : window

    function proxyFn(...args) {
        thisArg.fn = fn
        var finalArgs = [...argArray, ...args]
        var result = thisArg.fn(...finalArgs)
        delete thisArg.fn
        return result
    }
    return proxyFn
}

function foo() {
    console.log('foo被调用了', this)
    return 20
}

function sum(num1, num2, num3, num4) {
    console.log(num1, num2, num3, num4)
    var result = num1 + num2 + num3 + num4
    return result
}

// 系统的bind调用
// var newSum = sum.bind('aaa', 10, 20, 30, 40)
// newSum()

// 使用自己定义的bind
var bar = sum.hybind('aaa', 10, 20)

// var bar = foo.hybind('aaa')
var result = bar(30, 40)
console.log(result)
