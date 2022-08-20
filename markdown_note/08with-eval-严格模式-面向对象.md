### with語句和eval函数都不建议使用

##### with語句

```
with(obj){
  //message会先在obj对象查找message再在上次作用域找
  console.log(message)
}
```

##### eval函数

```
var jsString = 'var message = "Hello world";console.log(message)'

eval(jsString)
```

### 严格模式

用严格模式，浏览器在解析的时候就会对不符合要求的代码抛出错误

打包工具（如webpack)会自动开启严格模式

1. 可以给文件开启严格模式
2. 也可以单独给函数开启严格模式

##### 严格模式常见的限制

1. 禁止在函数内部或全局不用var创建全局变量

```
function foo() {
    age = 18
}
foo()
console.log(age)
```

2. 函数不能有相同的参数


3. 在严格模式下 <u>自执行函数（独立调用）的this指向undefined</u>,但是我们要引用window的时候不会用this，一般都是直接用,如

   ``window.localStorage()``

### 面向对象

![属性描述符](E:\工作\产品经理\JavaScript高级\笔记\class_image\属性描述符.png)

#####  数据属性描述符 

直接把属性在对象字面量中定义 configurable（可删除、重新定义该属性） enumerable （可枚举 [for]） value writable(可重新赋值)

##### 存取属性描述符

```
var obj = {
    name: 'why',
    age: 18,
    _address: '北京市'
}

// 存取属性描述符
// 1 隐藏某个私有属性
// 2 如果我们希望截获某个属性被访问和被设置的过程
Object.defineProperty(obj, "address", {
    enumerable: true,
    configurable: true,
    // 一旦读取address属性就会调用get方法
    get: function () {
        return this._address
    },
    // 给address赋值就会调用set
    set: function (value) {
        bar()
        this._address = value
    }
})

console.log(obj.address)

obj.address = '上海市'
console.log(obj.address)

function bar() {
    console.log('set被调用')
}
```

##### 定义多个属性描述符

```
Object.defineProperties(obj, {
    name: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: 'why'
    },
    age: {
        configurable: false,
        enumerable: true,
        get: function () {
            return this._age
        },
        set: function (value) {
            this._age = value
        }
    }
})
```

