// Promise有哪些对象方法
// console.log(Object.getOwnPropertyDescriptors(Promise.prototype))

const promise = new Promise((resolve, reject) => {
    resolve('hahaha')
})

// 同一个promise的then方法可以被多次调用
// 当resolve方法被回调时，所有的then方法传入的回调都会被执行
// promise.then(res => {
//     console.log('res', res)
// })

// promise.then(res => {
//     console.log('res1', res)
// })

// promise.then(res => {
//     console.log('res2', res)
// })

// then方法传入的回调函数可以有返回值
// then方法本身也是有返回值 是Promise
// 1.如果回调函数的返回值是一个普通的数值(数字、字符串、普通对象、undefined) 那么这个普通值会作为Promise的resolve的参数
// promise.then(
//     res => {

//     }
// ).then(res => {
//     console.log('res', res)
// })

// function foo() {

// }
// console.log(foo())

// 2.如果回调函数的返回值是一个Promise
// 传入一个Promsie
//   当前的Promise的状态会由传入的Promise来决定 相当于状态的移交
// promise.then(res => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(11111)
//         }, 3000);
//     })
// }).then((res) => {
//     console.log('res', res)
// })

// 3.如果返回的是一个对象 并且该对象实现了thenable
promise.then(res => {
    return {
        then: function (resolve, reject) {
            resolve(2222)
        }
    }
}).then(res => {
    console.log(res)
})