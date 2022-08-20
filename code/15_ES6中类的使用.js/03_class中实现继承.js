class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    eating() {
        console.log(this.name + "eating")
    }
    running() {
        console.log(this.name + 'studying')
    }

    personMethod() {
        console.log('处理逻辑1')
        console.log('处理逻辑2')
        console.log('处理逻辑3')
    }
}

class Student extends Person {
    constructor(name, age, sno) {
        // super使用方法1：super()调用父类的构造方法
        // 如果该类继承了别的类 那么JS引擎在解析子类的时候要求子类
        // 调用this和返回对象之前必须通过super调用父类的构造方法
        super(name, age)
        this.sno = sno
    }
    studying() {
        console.log(this.name + 'studying')
    }

    // 子类对父类方法的重写
    eating() {
        console.log("student" + this.name + "eating")
    }

    personMethod() {
        // console.log('处理逻辑1')
        // console.log('处理逻辑2')
        // console.log('处理逻辑3')
        // super使用方法2：super.xxx() 调用父类的方法 复用父类的处理逻辑
        super.personMethod()

        console.log('处理逻辑4')
        console.log('处理逻辑5')
        console.log('处理逻辑6')
    }
}

var stu = new Student('why', 18, 111)
// console.log(stu)

// console.log(Object.getOwnPropertyDescriptors(stu.__proto__))
// stu.eating()

stu.personMethod()