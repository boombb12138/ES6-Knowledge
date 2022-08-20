
// 第一种导入方式
// import { name, age } from './foo.js'

// 第二种起别名
// import { name as fName, age as fAge } from './foo.js'

// 第三种导入方式：将导出的所有内容放到一个标识符中
import * as foo from './foo.js'

const name = 'kobe'

console.log(foo.name)
console.log(foo.age)
foo.foo()

// console.log(fName)
// console.log(fAge)
console.log(name)