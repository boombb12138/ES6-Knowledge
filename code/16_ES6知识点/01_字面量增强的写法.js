var name = "why"
var age = 18

var obj = {
    // 属性的简写
    age: age,
    name,


    // 方法的简写
    foo: function () {
        console.log(this)
    },

    foo() { console.log(this) },

    // 计算属性名
    [name + 123]: 'hhhh'

}

obj.foo()
console.log(obj)