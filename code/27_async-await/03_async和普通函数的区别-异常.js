async function foo() {
    console.log('foo start')
    console.log('中间代码')
    console.log('foo end')

    throw new Error('error message')
}

// 异步函数的返回值一定是一个Promsie
foo().catch(err => {
    console.log('conderwhy', err)
})