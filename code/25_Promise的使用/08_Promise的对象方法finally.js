const promise = new Promise((resolve, reject) => {
    // resolve('resolve message')
    reject('reject message')
})

promise.then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
}).finally(() => {
    console.log('finally code execute')
})