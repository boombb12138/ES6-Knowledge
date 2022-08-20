### Proxy

是一个类

不直接修改obj，而是创建代理对象，传入空对象，操作代理对象，最终会默认赋值到obj

操作代理对象 时可以重写捕获器（trap)

##### 13个捕获器
监听  获取对象的原型   

Object.getPrototypeOf（）

监听  设置对象的原型

Object.setPrototypeOf(）

监听  在一个对象上定义一个新属性，或者修改一个对象的现有属性

Object.defineProperty()

监听  获取对象上一个自有属性(不需要从原型链上找）对应的属性描述符

getOwnPropertyDescriptor()

监听  阻止对象添加新的属性 的过程

监听  判断对象能否添加新的属性 的过程

监听  获取对象的属性描述符 的过程

<u>属性读取操作的捕捉器</u>

<u>属性设置操作的捕捉器</u>

```javascript
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
    }
})

console.log(objProxy.name)
console.log(objProxy.age)

objProxy.name = 'kobe'
objProxy.age = 30
```

<u>delete操作符的捕捉器</u>

<u>in 操作符的捕捉器</u>

```javascript
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
```

针对函数对象的监听

监听  apply調用函數

监听  new調用函數



### Reflect

Reflect是一个<u>对象</u>

```javascript
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
```

在对象里面可以有setter和getter

reciever是创建出来的代理对象objProxy  可以将obj的get方法中的this改为代理对象 只有getter和setter才有reciever



一旦有代理对象 用到原对象的要改为用代理对象

封装获取depend的函数

