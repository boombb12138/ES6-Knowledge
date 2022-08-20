
// 第一种导出方式 export 声明式语句
// export const name = 'why'
// export const age = 18

// export function foo() {
//     console.log('foo function')
// }

// 第二种导出方式 导出和声明分开
const name = 'why'
const age = 18
function foo() {
    console.log('foo function')
}

export {
    name, age, foo
}


