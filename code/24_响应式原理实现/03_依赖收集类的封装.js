
class Depend {
    constructor() {
        this.relactiveFns = []
    }
    addDepend(relactiveFn) {
        this.relactiveFns.push(relactiveFn)
    }

    notify() {
        this.relactiveFns.forEach(fn => {
            fn()
        })
    }
}


const depend = new Depend()
function watchFn(fn) {
    depend.addDepend(fn)
}

const obj = {
    name: 'why',//对应一个depend对象 其中有relactiveFns属性 即数组
    age: 18
}

watchFn(function foo() {
    const newName = obj.name
    console.log('你好李银河')
})

watchFn(function demo() {
    console.log(obj.name)
})

function bar() {
    console.log('不需要响应式')
}
obj.name = 'kobe'
depend.notify()
