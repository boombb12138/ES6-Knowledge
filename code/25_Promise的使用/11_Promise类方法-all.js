const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(111)
    }, 1000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(222)
    }, 2000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(333)
    }, 3000);
})

// 所有的Promise都变成fulfilled的状态后 再拿到结果
// 意外 在拿到所有结果之前 有一个Promise变成了reject
Promise.all([p2, p1, p3, 'aaaa']).then(res => {
    console.log(res)
}).catch(err => {
    console.log('err', err)
})