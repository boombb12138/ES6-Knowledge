// 1 ES6中Symbol的基本使用
const s1 = Symbol()
const s2 = Symbol()
console.log(s1 === s2)


// 2 ES10中Symbol还有一个描述
const s3 = Symbol('aaa')
// console.log(s3.description)


// 3 Symbol值作为key 
// 3.1 计算属性名 在定义对象字面量时使用
const obj = {
    [s1]: 'abc',
    [s2]: "cba"
}

// 3.2新增属性
obj[s3] = 'nba'

// 3.3 Object.defineProperty
const s4 = Symbol()
Object.defineProperty(obj, s4, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'mba'
})

// console.log(obj[s1], obj[s2])

// obj.s1 会找obj中属性名是字符串类型的s1的值

//4 使用 Symbol作为key的属性名 在遍历/Object.keys等中拿不到这些属性名

console.log(Object.keys(obj))//获取不到
console.log(Object.getOwnPropertyNames(obj))//获取不到
// 专门获取Symbol的方法
console.log(Object.getOwnPropertySymbols(obj))
const skeys = Object.getOwnPropertySymbols(obj)//[ Symbol(), Symbol(), Symbol(aaa), Symbol() ]
for (const skey of skeys) {
    console.log(obj[skey])
}


// 希望Symbol创建出来的值是一样的
// 5 Symbol.for 让key相同
const sa = Symbol.for('aaa')
const sb = Symbol.for('aaa')
console.log(sa === sb)
