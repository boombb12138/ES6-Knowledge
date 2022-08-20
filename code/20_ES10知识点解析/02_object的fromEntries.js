// const obj = {
//     name: 'why',
//     age: 18
// }

// const entries = Object.entries(obj)
// console.log(entries)
// // 将entries转为对象
// const newObj = Object.fromEntries(entries)
// console.log(newObj)


// 案例
const queryString = 'name=why&age=18'
const queryParams = new URLSearchParams(queryString)
for (const param of queryParams) {
    console.log(param)
}
const paramObj = Object.fromEntries(queryParams)
console.log(paramObj)