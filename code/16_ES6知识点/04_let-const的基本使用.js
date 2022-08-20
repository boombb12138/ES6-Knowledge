var foo = 'foo'

let bar = 'bar'

// 注1：const声明一个常量（constant)
// 一旦声明不可再赋值

// 但是如果传递的是一个引用类型（内存地址），可以通过引用找到对应的对象，去修改对象的属性
const obj = {
    foo: 'foo'
}

// obj = {}//报错
obj.foo = 'aaa'//可以

// 注2：var可以重复定义变量名 通过let/const定义的变量名不可以重复定义
let foo = 'abc'
// let foo = 'cba'

console.log(foo)//报错