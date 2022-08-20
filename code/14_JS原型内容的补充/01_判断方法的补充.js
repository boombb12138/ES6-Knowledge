var obj = {
    name: 'why',
    age: 18
}

var info = Object.create(obj, {
    address: {
        value: "北京市",
        enumerable: true
    }
})

// 判断属性是在原型上还是在本身 
console.log(info.hasOwnProperty('address'))//true
console.log(info.hasOwnProperty('name'))//false

// in/for in 操作符 不管在当前对象还是原型中 返回的参数都是true 
console.log('name' in info)//true


// instanceof
function Person() {

}
function Student() {

}

function inheritPrototype(SubType, SuperType) {
    SubType.prototype = Object.create(SuperType.prototype)
    Object.defineProperty(SubType.prototype, 'constructor', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: SubType
    })
}

inheritPrototype(Student, Person)

var stu = new Student()
// instanceof 判断一个xxx对象是不是xxx类
// 判断依据就是xxx类的原型有没有出现在xxx对象的原型链上
// 右边必须为构造函数  
console.log(stu instanceof Student)//true
console.log(stu instanceof Person)//true

//isPrototypeOf 判断某个对象是不是xxx对象的原型
var obj = {
    name: 'why'
}
var info = Object.create(obj)
console.log(obj.isPrototypeOf(info))//true

