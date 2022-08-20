const obj = {
    name: 'why',
    age: 18
}

const objProxy = new Proxy(obj, {
    // 监听到获取值
    // target所代理的对象 key获取的是什么属性
    get: function (target, key) {
        console.log(`监听到对象的${key}属性被访问了`, target)
        return Reflect.get(target, key)
    },
    // 监听到设置值
    set: function (target, key, newValue) {
        console.log(`监听到对象的${key}属性被设置了`, target)

        // target[key] = newValue不一定设置成功 因为有可能冻结对象 
        //  Reflect.set(target, key, newValue)会返回布尔值 就知道有没有设置成功
        return Reflect.set(target, key, newValue)
    }
})

objProxy.name = 'kobe'

console.log(objProxy.name)

