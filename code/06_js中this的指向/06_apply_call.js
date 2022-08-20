function sum(num1, num2) {
    console.log(num1 + num2, this)
}

sum.apply('apply', 20, 30)
sum.call('call', [20, 30])

// 优先级 : 显示绑定>默认

var newFoo = foo.bind('aaa')

newFoo()//aaa
newFoo()//aaa
newFoo()//aaa

function Person(name, age) {
    this.name = name
    this.age = age
}
var p1 = new Person('why', 18)
console.log(p1.name, p1.age)//why 18
