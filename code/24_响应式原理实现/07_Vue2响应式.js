let activeReactiveFn = null


// 自动执行函数
// 监听属性发生改变后 执行depend.notify
// 方法1 Proxy 方法2 Object.defineProperty

class Depend {
    constructor() {
        this.relactiveFns = new Set()
    }


    depend() {
        if (activeReactiveFn) {
            this.relactiveFns.add(activeReactiveFn)
        }
    }

    notify() {
        this.relactiveFns.forEach(fn => {
            fn()
        })
    }
}


const depend = new Depend()
function watchFn(fn) {
    activeReactiveFn = fn
    fn()
    activeReactiveFn = null
}

// 新建WeakMap
const targetMap = new WeakMap()
function getDepend(target, key) {
    // 拿到WeakMap里的map
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
const objProxy = reactive(obj)

// 监听属性变化
function reactive(obj) {
    Object.keys(obj).forEach(key => {
        let value = obj[key]
        Object.defineProperty(obj, key, {
            get: function () {
                const depend = getDepend(obj, key)
                depend.depend()
                return value
            },
            set: function (newValue) {
                value = newValue
                const depend = getDepend(obj, key)
                depend.notify()
            }
        })
    })
    return obj
}

const info = {
    address: '广州市',
    height: 1.88
}

const infoProxy = reactive(info)
watchFn(() => {
    console.log(infoProxy.height)
})

infoProxy.height = 1.55
