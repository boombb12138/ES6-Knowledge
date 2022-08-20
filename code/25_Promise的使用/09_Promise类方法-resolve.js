// 1 传入普通值
// const promise = Promise.resolve({ name: 'why' })

// const promise2 = new Promise((resolve, reject) => {
//     resolve({ name: 'why' })
// })

// promise.then(res => {
//     console.log('res', res)
// })


// promise2.then(res => {
//     console.log('res', res)
// })

// 2 传入的是Promise
// const promise = Promise.resolve(new Promise((resolve, reject) => {
//     resolve(2222)
// }))

// promise.then(res => {
//     console.log('res', res)
// })

// 3传入一个对象 对象里有Then方法
const obj = {
    // then方法会自动执行
    then: function (resolve, reject) {
        reject('resolve message')
    }
}
const objPromise = Promise.resolve(obj)
objPromise.then((res) => {
    console.log(res)
}).catch(err => [
    console.log(err, '=====')
])
