const obj = {
    _name: 'why',
    get name() {
        return this._name
    },
    set name(newValue) {
        this._name = newValue
    }
}

const objProxy = new Proxy(obj, {
    // 监听到获取值
    // target所代理的对象 key获取的是什么属性
    get: function (target, key, recevier) {
        console.log(`监听到对象的${key}属性被访问了`, target)
        return Reflect.get(target, key, recevier)
    },
    // 监听到设置值
    set: function (target, key, newValue, recevier) {
        console.log(`监听到对象的${key}属性被设置了`, target)
        return Reflect.set(target, key, newValue, recevier)
    }
})

objProxy.name = 'kobe'

console.log(objProxy.name)

