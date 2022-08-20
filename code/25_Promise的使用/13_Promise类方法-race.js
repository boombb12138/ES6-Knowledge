const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(111)
    }, 1000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(222)
    }, 500);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(333)
    }, 3000);
})

// race 比赛 竞赛
// 只要有一个Promise变成fulfilled\rejected状态那么就结束
// 
Promise.race([p1, p2, p3]).then(res => {
    console.log('res', res)
}).catch(err => {
    console.log(err)
})