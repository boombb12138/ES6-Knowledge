var names = ["abc", 'cba', 'nba']

class Person {
    // 构造方法 在通过new操作类的时候会调用该构造方法
    //    constructor做的事情：
    // 1 创建一个对象 2 将类的原型赋值给创建出来的对象的隐式原型
    // 3 将对象赋值给函数的this 4 执行函数体的代码 5 自动返回创建的对象
    constructor(name, age) {
        this.name = name
        this.age = age
        this._address = '广州市'
    }
    // 通过创建实例对象来访问
    // 类的实例方法放在Person的原型上
    eating() {
        console.log(this.name + "eating")
    }
    running() {
        console.log(this.name + "running")
    }

    // 通过创建实例对象来访问
    // 类的访问器方法
    get address() {
        return this._address
    }
    set address(newAddress) {
        this._address = newAddress
    }

    // 类的静态方法
    // Person.randomPerson()来访问
    static randomPerson() {
        var nameIndex = Math.floor(Math.random() * names.length)
        var name = names[nameIndex]
        var age = Math.floor(Math.random() * 100)
        return new Person(name, age)
    }
}

var p1 = new Person('why', 18)
// p1.eating()

// Object.getOwnPropertyDescriptors(Person.prototype)
// 拿到Person.prototype上的所有属性，可见类的实例方法在类的原型对象上
// console.log(Object.getOwnPropertyDescriptors(Person.prototype))

// console.log(p1.address)
p1.address = '北京市'
// console.log(p1.address)


var p2 = Person.randomPerson()
console.log(p2)
p2.eating()