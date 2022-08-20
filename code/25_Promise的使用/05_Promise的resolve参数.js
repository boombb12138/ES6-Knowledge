
// resolve函数的参数
// 1 普通的值或者对象
// 2 传入一个Promsie
//   当前的Promise的状态会由传入的Promise来决定 相当于状态的移交
// 3 传入了一个对象 并且对象里面有then方法
//   那么会执行该then方法，并且会根据then方法的结果来决定Promise的状态

// const newPromise = new Promise((resolve, reject) => {
//     reject('err message')
// })

// new Promise((resolve, reject) => {
//     resolve(newPromise)
// }).then((res) => {
//     console.log('res', res)
// }, (err) => {
//     console.log('err', err)
// })



new Promise((resolve, reject) => {
    const obj = {
        // then方法会自动执行
        then: function (resolve, reject) {
            resolve('resolve message')
        }
    }

    resolve(obj)
}).then((res) => {
    console.log('res', res)
}, (err) => {
    console.log('err', err)
})