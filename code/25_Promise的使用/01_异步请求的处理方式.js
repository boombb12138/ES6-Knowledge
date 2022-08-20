

// 1 沟通成本大
// 2 自己编写函数逻辑
function requestData(url, successCallback, failCallback) {
    setTimeout(() => {
        // url传入的是coderwhy 请求成功
        if (url === 'coderwhy') {
            //成功
            let names = ['abc', 'cba', 'nba']
            successCallback(names)
        } else {
            // 失败
            let errMessage = '请求失败 url错误'
            failCallback(errMessage)
        }
    }, 3000);
}

requestData("coderwhy", (res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})

// Promise方法
function requestData2() {
    return '承诺'
    // 成功就会返回成功的操作
    // 失败就会返回失败的操作
}


