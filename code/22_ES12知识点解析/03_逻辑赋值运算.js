//1. ||= 逻辑或赋值运算
// let message = undefined
// message = message || 'default value'
// message ||= 'default value'

// console.log(message)

// //2. &&= 逻辑与赋值运算
// const obj = {
//     name: 'why',
//     foo: function () {
//         console.log('foo函数被调用')
//     }
// }
// // 如果obj.foo存在就执行  &&  后面的逻辑
// obj.foo && obj.foo()

//3. ??=逻辑空赋值运算
let message = 0
// 如果用｜｜= 当message是0或者''的时候 就会返回默认值
message ??= 'default value'
console.log(message)//0