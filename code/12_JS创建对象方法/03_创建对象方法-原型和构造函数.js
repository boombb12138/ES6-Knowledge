function Person(name, age, height) {
    this.name = name
    this.age = age
    this.height = height
}

Person.prototype.eating = function () {
    console.log(this.name + '在吃东西')
}

var p1 = new Person('why', 18, 1.88)
var p2 = new Person('kobe', 28, 1.98)

p1.eating()
p2.eating()