function* foo(num) {
    console.log('函数执行开始')

    const value1 = 100 * num
    console.log('开始执行第一段代码', value1)

    // 让函数暂停
    yield value1

    const value2 = 100
    console.log('开始执行第二段代码', value2)
    const count = yield value2

    const value3 = 100 * count
    console.log('开始执行第三段代码', value3)
    yield value3

    console.log('开始执行第四段代码', '函数执行结束')
    return 'aaa'
}
// 生成器函数返回一个生成器（特殊的迭代器）
const generator = foo(5)

// 1.生成器上的next方法可以传入参数
console.log(generator.next())
// 第二段代码开始执行
console.log(generator.next())
console.log(generator.next(25))



