

function requestData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(url)
        }, 2000);
    })
}
// const promise = requestData('coderwhy')

// promise.then((res) => {
//     console.log('请求成功', res)
// }, (err) => {
//     console.log('请求失败', err)
// })

// 需求
// url：why ->res:why

// 第一种方法
// 回调地狱

// 第二种 Promise的then方法

// 第三种 Promise + generator方法
// function* getData() {
//     const res1 = yield requestData('why')
//     const res2 = yield requestData(res1 + 'bbb')
//     const res3 = yield requestData(res2 + 'ccc')
//     console.log(res3)
// }

// 手动执行生成器函数
const generator = getData()
generator.next().value.then(res => {
    generator.next(res).value.then(res => {
        generator.next(res).value.then(res => {
            generator.next(res)
        })
    })
})

// 第4种 async/await

async function getData() {
    const res1 = await requestData('why')
    const res2 = await requestData(res1 + 'bbb')
    const res3 = await requestData(res2 + 'ccc')
    console.log(res3)
}

getData()