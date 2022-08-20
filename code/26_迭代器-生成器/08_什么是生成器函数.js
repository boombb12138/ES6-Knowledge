function* foo() {
    console.log('函数执行开始')

    const value1 = 100
    console.log('开始执行第一段代码', value1)

    // 让函数暂停
    yield
    const value2 = 100
    console.log('开始执行第二段代码', value2)
    yield

    const value3 = 100
    console.log('开始执行第三段代码', value3)
    yield

    console.log('开始执行第四段代码', '函数执行结束')
}

// 调用生成器函数时 会返回一个生成器（一种特殊的迭代器）
const generator = foo()

generator.next()
console.log('========')

//开始执行第二段代码
generator.next()
console.log('========')
generator.next()
console.log('========')

generator.next()