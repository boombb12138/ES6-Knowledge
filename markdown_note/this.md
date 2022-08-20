- this是在函数执行时确定的
- this指向跟**函数调用方式**有关

同样一个函数可以有3种调用方式

1. 直接调用
2. 创建对象 对象中的函数指向foo 通过对象调用函数
3. apply调用

## this绑定规则

1. 默认绑定
2. 隐式绑定
3. 显示绑定
4. new绑定

### 默认绑定

独立函数调用的this指向全局window

```javascript
独立函数调用
function foo(){
console.log(this)
}
foo()
```

### 隐式绑定

通过某个对象调用this指向的是该对象

object对象会被js引擎绑定到foo函数的this里面

```
function foo(){
  console.log(this)
}
var obj ={
name:'why'
foo:foo
}
obj.foo()//obj对象
```

前提：对象里有个属性指向函数

### 显示绑定

```
function foo(){
console.log('函数被调用了')

foo直接调用this指向的是window
而call和apply可以指定this的指向

}
```

##### call和apply的区别（传参）

```javascript
function sum(num1, num2) {
    console.log(num1 + num2, this)
}

sum.apply('apply', 20, 30)
sum.call('call', [20, 30])
```

##### bind

```javascript
// 优先级 : 显示绑定>默认

var newFoo = foo.bind('aaa')//bind生成一个新的函数

newFoo()//aaa
newFoo()//aaa
newFoo()//aaa
```

### new绑定

new会生成一个新的对象 并将该对象绑定到this

```javascript
function Person(name, age) {
    this.name = name
    this.age = age
}
var p1 = new Person('why', 18)
console.log(p1.name, p1.age)//why 18
```

## this的其他补充

### 内置函数的绑定

```

setTimeout(function () {
    console.log(this)//window setTimeout内部为独立调用func
}, 3000)
```



事件监听是隐式绑定到dom节点上



数组的forEach\map的this是独立绑定，为window 

forEach\map可以传入第二个参数,fn会绑定到 ‘abc’ 上

```
names.forEach(fn,'abc')
```

## 规则的优先级

1. 默认绑定最低

2. 显示绑定优先级高于隐式绑定

   ```javascript
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
   ```

   ​

3. new高于显示绑定>显示绑定（apply/call/bind)>隐式绑定（obj.foo())>默认绑定

   ```
   function foo() {
       console.log(this)//foo
   }
   var bar = foo.bind('aaa')

   var obj = new bar()
   ```

#### this规则之外

1. apply/call/bind绑定null或者undefined的时候 自动将this绑定为全局对象
2. 间接函数引用

```
var obj1 = {
    foo: function () {
        console.log(this)//this
    }
}

var obj2 = {
    name: 'why'
};

(obj2.bar = obj1.foo)()//独立调用 
```

3. 箭头函数

   ##### 箭头函数的使用规则

   // 如果函数执行体只有一行代码 那么｛｝可以省略

   // 并且它会默认将这行代码的执行结果作为函数的返回值返回

   ```
   nums.forEach(item => console.log(item))

   var newNums = nums.filter(item => item % 2 === 0)

   console.log(newNums)
   ```

   // 如果一个箭头函数的函数执行体只有1行 并且返回一个对象 

   ```
   var bar = () => ({ name: 'why', age: 18 })
   ```

### 面试题

![01this面试题](E:\工作\产品经理\JavaScript高级\笔记\coderwhy\01this面试题.png)

箭头函数没有this和argument，不管是隐式调用，显示调用还是独立调用都是指向上层作用域

``person.foo2()`  window

``person.foo2().call(person2)`  window

`person1.foo3()()`   window

``person1.foo3.call(person2)()``  window