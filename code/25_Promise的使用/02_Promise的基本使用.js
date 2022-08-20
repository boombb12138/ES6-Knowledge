function foo() {
    return new Promise((resolve, reject) => {
        resolve('success message')
        // reject('failure message')
    })
}

const fooPromise = foo()
// then方法接收两个回调函数
// 第一个回调函数 会在Promise执行resolve的时候被回调
// 第二个回调函数 会在Promise执行reject的时候被回调
fooPromise.then((res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})


class Person {
    constructor(callback) {
        let foo = function () { }
        let bar = function () { }
        callback(foo, bar)
    }
}

const p = new Person((foo, bar) => { })


// Promise的参数就叫executor立即执行函数
// const promise = new Promise((resolve, reject) => {
//     console.log('promise函数被执行了')
// })

// promise.then(() => {

// })
// promise.catch(() => {

// })