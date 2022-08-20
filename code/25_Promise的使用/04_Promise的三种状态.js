
// Promise的状态一旦确定下来就不可以改变
new Promise((resolve, reject) => {
    console.log('=======')//pending悬而未决状态
    resolve()//fulfilled状态 或者 resolved状态
    // reject()//rejected状态
}).then(res => {
    console.log('+++++')
}, err => {
    console.log('------')
})