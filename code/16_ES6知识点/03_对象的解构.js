var obj = {
    name: 'why',
    age: 18,
    height: 1.88
}

var { name, height, age } = obj
console.log(name)
console.log(height)
console.log(age)

// 只解构age
var { age } = obj
console.log(age)

// 修改变量名
var { name: newName } = obj
console.log(newName)

// 给变量默认值
var { address: newAddress = '北京市' } = obj
console.log(newAddress)


// 函数的
function foo(info) {
    console.log(info.name, info.age)
}
foo(obj)

function bar({ name, age }) {
    console.log(name, age)
}
bar(obj)