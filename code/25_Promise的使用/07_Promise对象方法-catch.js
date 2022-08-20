
const promise = new Promise((resolve, reject) => {
    resolve('aaa')
    // reject('rejected Status')
    // throw new Error('rejected Status')
})

// 1.当立即执行函数抛出异常时 也是会调用拒绝捕获的回调函数
// promise.then(undefined, (err) => { console.log(err), console.log('=====') })

// 2.通过catch方法 是上面方法的语法糖
// promise.catch((err) => {
//     console.log(err)
// })

// 还可以这样写
// promise.then(res => {
//     return new Promise((resolve, reject) => {
//         resolve('then rejected Status')
//     })
// }).then(err => {
//     throw new Error('rejected Status===')
// }).catch(err => {
//     console.log(err)
// })

promise.then(res => {
    console.log('res', res)
}).catch(err => {
    console.log(err)
    return 'catch return value'
}).then(res => {
    console.log('res result')
}).catch(err => {
    console.log('err result')
})
