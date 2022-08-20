async function foo() {
    console.log('foo start')
    console.log('中间代码')
    console.log('foo end')
    // 1 return后面的值就是then方法中res的值
    // return 'aaa'

    // 2 return一个thenable
    // return {
    //     then: function (resolve, reject) {
    //         resolve('hahaha')
    //     }
    // }

    // 3 return一个Promise对象
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hhhhh')
        }, 3000);
    })
}

// 异步函数的返回值一定是一个Promsie
const promise = foo()
promise.then(res => {
    console.log('promise then function ', res)
})