// 构造函数创建对象
function Person(name, height, age, address) {
    this.name = name
    this.height = height
    this.age = age
    this.address = address
}

var p1 = new Person('张三', 1.88, 18, '北京市')
var p2 = new Person('李四', 1.78, 18, '北京市')
console.log(p1 === p2)//false