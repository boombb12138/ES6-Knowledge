// 1 await跟上表达式
function requestData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(2222)
        }, 2000);
    })
}


// async function foo() {
//     const res = await requestData()

//     console.log('后面的代码', res)
//     console.log('后面的代码2')
// }

// foo()


// 2 跟上其他值
async function foo() {
    // const res1 = await 123

    // const res1 = await {
    //     then: function (resolve, reject) {
    //         resolve('aaaa')
    //     }
    // }

    const res1 = await requestData()
    console.log(res1)
}

// await后的函数返回了reject 会作为
// foo函数返回的promise的状态 
foo().catch(err => {
    console.log('err', err)
})