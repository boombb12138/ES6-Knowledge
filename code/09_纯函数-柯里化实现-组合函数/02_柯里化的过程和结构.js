function add(num1, num2, num3) {
    return num1 + num2 + num3
}

var result = add(1, 2, 3)
console.log(result)

function sum(x) {
    return function (y) {
        return function (z) {
            return x + y + z
        }
    }
}

var result1 = sum(1)(2)(3)
console.log(result1)

// 代码复用
function makeAdder(count) {
    count = count * count
    return function (num1) {
        return num1 + count
    }
}

// var result = makeAdder(5)(10)
// console.log(result)

var add5 = makeAdder(5)
add5(10)
add5(30)

function log(date) {
    return function (type) {
        return function (message) {
            console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${message}]`)
        }
    }
}


// var log = data =>
//     type =>
//         message =>
//             console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${message}]`)


var nowLog = log(new Date())
nowLog('DEBUG')('查找到轮播图bug')
nowLog('FETURE')('查找到轮播图bug')

var nowAndDebugType = log(new Date())('DEBUG')
nowAndDebugType('查找到轮播图bug')