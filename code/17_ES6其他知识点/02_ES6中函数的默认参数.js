// ES5及以前给参数默认值
function foo(m, n) {
    //   || 如果||左边有值 则返回该值
    // 如果 || 左边是null 或者  undefined 或者 0 或者 " "则返回右边的值
    m = m || 'aaa'
    n = n || 'bbb'
}

// ES6可以给函数参数提供默认值
function foo(m = 'aaa', n = 'bbb') {
    console.log(m, n)
}

foo(0, null)

// 对象参数和默认值及其解构
function printInfo({ name, age } = { name: 'why', age: 18 }) {
    console.log(name, age)
}

printInfo({ name: 'kobe', age: 18 })


// 另外一种写法
// 如果没有传入参数 就给一个空对象作为默认值 这个空对象可能解构不出来属性 就给属性默认值
function printInfo1({ name = 'why', age = 18 } = {}) {
    console.log(name, age)
}

printInfo1()

// 有默认值的形参最好放到最后
function bar(x, y, z = 30) {
    console.log(x, y, z)
}

bar(10, 20)