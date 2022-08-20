var obj = {
    name: 'obj',
    foo: function () {
        console.log(this)
    }
}

// obj.foo()//obj
// 1 call/apply的显示绑定高于隐式绑定
obj.foo.apply('abc')//abc
obj.foo.call('abc')//abc

//2 bind的优先级高于隐式绑定
function foo() {
    console.log(this)
}

var obj = {
    name: 'obj',
    foo: foo.bind("aaa")
}
obj.foo()//aaa

// 4 new高于显示绑定
function foo() {
    console.log(this)//foo
}
var bar = foo.bind('aaa')

var obj = new bar()

// 特殊绑定

var obj1 = {
    foo: function () {
        console.log(this)
    }
}

var obj2 = {
    name: 'why'
};

(obj2.bar = obj1.foo)()