const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(111)
    }, 1000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(222)
    }, 500);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(333)
    }, 3000);
})

Promise.any([p1, p2, p3]).then(res => {
    console.log('res', res)
}).catch(err => {
    console.log('err', err)
})