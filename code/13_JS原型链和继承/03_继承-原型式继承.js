var obj = {
    name: 'obj',
    age: 18
}

// 将传入的对象作为新创建的对象的原型
//方法 1 
function createObject(o) {
    var newObj = {}
    // setPrototypeOf给newObj设置原型是o
    Object.setPrototypeOf(newObj, o)
    return newObj
}

var info = createObject(obj)

//方法 2
function createObject2(o) {
    function Fn() { }
    Fn.prototype = o
    var newObj = new Fn()
    return newObj
}

var info = createObject(obj)

// 方法3
var info = Object.create(obj)