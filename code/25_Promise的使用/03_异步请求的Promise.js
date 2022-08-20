

// 1 沟通成本大
// 2 自己编写函数逻辑
function requestData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // url传入的是coderwhy 请求成功
            if (url === 'coderwhy') {
                //成功
                let names = ['abc', 'cba', 'nba']
                resolve(names)
            } else {
                // 失败
                let errMessage = '请求失败 url错误'
                reject(errMessage)
            }
        }, 3000);
    })
}
const promise = requestData('coderwhy')

promise.then((res) => {
    console.log('请求成功', res)
}, (err) => {
    console.log('请求失败', err)
})

// function foo(fn) {
//     fn()
// }

// foo(() => { })