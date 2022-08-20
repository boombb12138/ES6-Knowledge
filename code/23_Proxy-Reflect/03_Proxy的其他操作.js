const obj = {
    name: 'why',
    age: 18
}

const objProxy = new Proxy(obj, {
    // 监听到获取值
    // target所代理的对象 key获取的是什么属性
    get: function (target, key) {
        console.log(`监听到对象的${key}属性被访问了`, target)
        return target[key]
    },
    // 监听到设置值
    set: function (target, key, newValue) {
        console.log(`监听到对象的${key}属性被设置了`, target)

        target[key] = newValue
    },

    // 监听in捕获器
    has: function (target, key) {
        console.log(`监听到对象的${key}的in操作`)
        return key in target
    },

    // 监听delete的捕获器
    deleteProperty: function (target, key) {
        console.log(`监听到对象的${key}的delete操作`)
        delete target[key]
    }

})

// in操作符
console.log('name' in objProxy)

// delete操作
delete objProxy.name