function double(num) {
    return num * 2
}

function square(num) {
    return num ** 2
}

// var count = 10
// var result = square(double(10))

// function comFn(m, n) {
//     return function (count) {
//         return n(m(count))
//     }
// }

// var fn = comFn(double, square)
// var result1 = fn(10, 20)
// console.log(result)
// console.log(result1)

function hyCompose(...fns) {
    var length = fns.length
    for (var i = 0; i < length; i++) {
        if (typeof fns[i] !== 'function') {
            throw new TypeError('Expected arguments are function')
        }
    }

    return function (...args) {
        var index = 0
        var result = length ? fns[index].apply(this, args) : args
        while (++index < length) {
            result = fns[index].call(this, result)
        }
        return result
    }
}

var fn = hyCompose(double, square)
var result = fn(10, 20)
console.log(result)
