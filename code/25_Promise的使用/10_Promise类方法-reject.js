// const promise = Promise.reject('rejected message')
const promise = Promise.reject({
    then: function (resolve, reject) {
        resolve(222)
    }
})

// 注意
// reject不区分参数类型 直接打印参数
promise.then(res => {
    console.log('res', res)
}).catch(err => {
    console.log('err', err)
})

