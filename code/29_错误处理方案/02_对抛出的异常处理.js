function foo(type) {
    if (type === 0) {
        throw new Error('foo error')
    }
}


function bar() {
    try {
        foo(0)
        console.log('bar函数后续的继续执行')
    } catch (err) {
        console.log('err:', err.message)
    } finally {
        console.log('finally代码执行~')
    }
}

function test() {
    bar()
}

try {
    test()
} catch (err) {
    console.log('err', err)
}

console.log('后续代码继续执行')