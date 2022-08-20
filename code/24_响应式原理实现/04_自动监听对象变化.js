// 自动执行函数
// 监听属性发生改变后 执行depend.notify
// 方法1 Proxy 方法2 Object.defineProperty

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

let activeReactiveFn = null
const depend = new Depend()
function watchFn(fn) {
    activeReactiveFn = fn
    fn()
    activeReactiveFn = null
}

// 新建WeakMap
const targetMap = new WeakMap()
function getDepend(target, key) {
    // 拿到WeakMap里的
    let map = targetMap.get(target)
    if (!map) {
        map = new Map()
        targetMap.set(target, map)
    }

    // 根据key获取depend对象
    let depend = map.get(key)
    if (!depend) {
        depend = new Depend()
        map.set(key, depend)
    }
    return depend
}


const obj = {
    name: 'why',//对应一个depend对象 其中有relactiveFns属性 即数组
    age: 18
}

const info = {
    address: '广州市'
}
// 监听属性变化
const objProxy = new Proxy(obj, {
    get: function (target, key, receiver) {
        const depend = getDepend(target, key)
        depend.addDepend(activeReactiveFn)

        return Reflect.get(target, key, receiver)
    },
    set: function (target, key, newValue, receiver) {
        Reflect.set(target, key, newValue, receiver)
        const depend = getDepend(target, key)
        depend.notify()
    }
})

watchFn(function foo() {
    const newName = objProxy.name
    console.log('你好李银河')
})

watchFn(function demo() {
    console.log(objProxy.name)
})

console.log('=======================')

watchFn(function ageChange() {
    console.log(objProxy.age)//18
    console.log(objProxy.name, '======name改变2')//why ======name改变2
})

function bar() {
    console.log('不需要响应式')
}

objProxy.name = 'kobe'
// objProxy.age = 20
