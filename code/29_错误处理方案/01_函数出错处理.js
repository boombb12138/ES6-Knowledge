// function sum(num1, num2) {
//     return num1 + num2
// }

// sum()
function foo(type) {
    console.log('foo函数开始执行')

    if (type === 0) {
        // 1 throw后面跟字符串（基本数据类型）
        // throw 'type不能为0'

        // 2 提供了一个类Error
        throw new Error('type不能为0')
    }

    console.log('foo函数结束执行')
}


foo(0)