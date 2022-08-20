// const btns = document.getElementsByTagName('button')

// var 没有块级作用域 当
// for (var i = 0; i < btns.length; i++) {
//     (function (n) {
//         btns[i].onclick = function () {
//             console.log('第' + n + "个按钮被点击")
//         }
//     })(i)
// }
// console.log(i)

// let有块级作用域
// for (let i = 0; i < btns.length; i++) {
//     btns[i].onclick = function () {
//         console.log('第' + i + "个按钮被点击")
//     }
// }
const names = ['abc', 'cba', 'nba']

for (var i = 0; i < names.length; i++) {
    console.log(names[i])
}

{
    i = 0,
        console.log(names[i])
}
{
    //i++
    i = 1,
        console.log(names[i])
}
{
    i = 2,
        console.log(names[i])
}

// ES6新增的遍历数组、对象的方法for..of..可以用const
for (const i of names) {
    console.log(i)
}

{
    const i = 'abc'
    console.log(i)
}