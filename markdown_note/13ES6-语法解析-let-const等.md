### 类的混入mixin

因为JS单继承：在JS中类只能有一个父类，所以要有混入

### 多态

##### - 传统的面向对象语言（JAVA、C++)中多态的体现

多态的三个前提：

1. 必须有继承
2. 子类重写父类的方法
3. 父类的引用指向子类的对象（18-27行）

![传统的面向对象多态](E:\工作\产品经理\JavaScript高级\笔记\class_image\传统的面向对象多态.png)

##### - JS动态语言

多态：当对不同的数据类型执行同一个操作时，如果表现出来的行为不一样，那么就是多态的体现

无需继承等

```
function calArea(foo) {
    console.log(foo.getArea())
}

var obj1 = {
    getArea: function () {
        return 1000
    }
}

class Person {
    getArea() {
        return 100
    }
}

var p1 = new Person()

calArea(obj1)
calArea(p1)
```

### 字面量的增强

```
var name = "why"
var age = 18

var obj = {
    // 属性的简写
    age: age,
    name,


    // 方法的简写
    foo: function () {
        console.log(this)
    },

    foo() { console.log(this) },

    // 计算属性名
    [name + 123]: 'hhhh'

}

obj.foo()
console.log(obj)
```

### 解构

1. 数组的解构

   ```
   var names = ['cba', 'abc', 'nba']

   var [item1, item2, item3] = names

   console.log(item1)
   console.log(item2)
   console.log(item3)
   ```

2. 对象的解构

   ```javascript
   var obj = {
       name: 'why',
       age: 18,
       height: 1.88
   }

   var { name, height, age } = obj
   console.log(name)
   console.log(height)
   console.log(age)

   // 只解构age
   var { age } = obj
   console.log(age)

   // 修改变量名
   var { name: newName } = obj
   console.log(newName)

   // 给变量默认值
   var { address: newAddress = '北京市' } = obj
   console.log(newAddress)
   ```


   // 函数的
   function foo(info) {
       console.log(info.name, info.age)
   }
   foo(obj)

   function bar({ name, age }) {
       console.log(name, age)
   }
   bar(obj)
   ```

   ​

### let/const基本使用

   ```
/ 注1：const声明一个常量（constant)
// 一旦声明不可再赋值

// 但是如果传递的是一个引用类型（内存地址），可以通过引用找到对应的对象，去修改对象的属性
const obj = {
    foo: 'foo'
}

// obj = {}//报错
obj.foo = 'aaa'//可以

// 注2：var可以重复定义变量名 通过let/const定义的变量名不可以重复定义
let foo = 'abc'
// let foo = 'cba'

console.log(foo)//报错
```

### let和const的作用域提升

let和const定义的变量在执行上下文阶段就创建出来了，但是直到被赋值才能被访问，在变量被赋值之前，访问就会报错，没有作用域提升

​```javascript

// let和const没有作用域提升
// 因为它在声明之前不能被访问
console.log(foo)//Cannot access 'foo' before initialization

let foo = "foo"
```

在早期GO=window

在let/const出现以前，在V8引擎中 变量存在GO对象 因为window也需要这些变量 所以window也指向GO指向的对象

##### let/const怎么保存的？

在最新ECMA中，VO 改为 VE，在V8引擎中 变量存在Variable对象中 window由浏览器来实现  window和variable对象不指向同一个 用var声明的变量有在window中

### 作用域

 ES5中没有块级作用域 下面的大括号形同虚设

```
{
    // 声明一个变量
    var foo = 'foo'
}

console.log(foo)
```

// 在ES5中只有两个东西会形成作用域

1. 全局作用域
2. 函数作用域

// 外面不能访问作用域内的



**ES6中  块级作用域对于var声明的变量是无效的 对let/const/Function/class声明的类型是有效的**

```
{
    let foo = "why"
    // 在只支持ES6的浏览器中demo()不可被外部访问
    function demo() {
        console.log('demo function')
    }
    class Person { }
}

// console.log(foo)//foo is not defined
demo()//demo function
// var p1 = new Person()// Person is not defined
```

##### if语句 swith语句 for循环都是块级作用域

```javascript
// if语句的代码就是块级作用域
if (true) {
    var foo = 'foo'
    let bar = 'bar'
}

console.log(foo)
// console.log(bar)// bar is not defined

var color = 'red'

// swith语句的代码是块级作用域
switch (color) {
    case 'red':
        var foo = 'foo'
        let bar = 'bar'
}

console.log(foo)
// console.log(bar)// bar is not defined

for循环
// for (var i = 0; i < 10; i++) {

// }

// console.log(i)//10

for (let i = 0; i < 10; i++) {

}

console.log(i)//undefined

```

for循环不能用const

```
// for (var i = 0; i < 10; i++) {

// }
```

```
// ES6新增的遍历数组、对象的方法for..of..可以用const
for (const i of names) {
    console.log(i)
}
```

##### 暂时性死区

 在if代码块中 在第6行对foo声明之前  不能访问foo

![暂时性死区](E:\工作\产品经理\JavaScript高级\笔记\class_image\暂时性死区.png)

### var\let\const的选择

能用const尽量用const 后续要修改再改成let

