
// import { name, age, foo } from './foo.js'

// import函数返回一个Promise
import('./foo.js').then(res => {
    console.log(res.name)
})

console.log('后续的代码都不会运行')