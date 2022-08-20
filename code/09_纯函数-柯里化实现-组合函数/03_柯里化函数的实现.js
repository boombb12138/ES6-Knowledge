function add1(num1, num2, num3) {
    return num1 + num2 + num3
}

var result = add1(1, 2, 3)

function sum(x) {
    return function (y) {
        return function (z) {
            return x + y + z
        }
    }
}

var result1 = sum(1)(2)(3)

// 柯里化函数的实现hyCurrying
function hyCurrying(fn) {
    function curried(...args) {
        // 当传入的参数个数大于等于函数需要的参数时，直接调用该函数
        if (fn.length <= args.length) {
            return fn.apply(this, args)
        } else {
            // 没有达到个数时 需要返回一个新的函数 继续来接收参数
            function curried2(...args2) {
                // 接收到参数后需要递归调用curried来检查函数的个数是否达到
                return curried.apply(this, args.concat(args2))
            }
            return curried2
        }
    }
    return curried
}
var curryAdd = hyCurrying(add1)

console.log(curryAdd(10, 20, 30))
console.log(curryAdd(10, 20)(30))
console.log(curryAdd(10)(20)(30))
