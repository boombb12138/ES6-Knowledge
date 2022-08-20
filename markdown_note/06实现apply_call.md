``foo.call(undefind)`` 

``foo.call(null)``

默认绑定window

<u>见code文件</u>

### 认识arguments

在普通函数里默认生成一个arguments<u>（类数组对象）</u>存放参数

<u>在箭头函数中没有arguments</u>,就往上层作用域找，如果上层作用域是全局，如果在浏览器里，即window中没有arguments，在node里就有arguments

常见的对arguments的操作 

1. 读取长度、
2. 通过下标拿到参数、
3. 获取arguments所在的函数



##### arguments转成数组

```javascript
function foo(num1, num2, num3) {
    //1 遍历
    // console.log(arguments)
    // var newArr1 = []
    // for (var i = 0; i < arguments.length; i++) {
    //     newArr1.push(arguments[i])
    // }
    // return newArr1

    // 2 slice
    //2.1
    var newArr2 = Array.prototype.slice.call(arguments)
    console.log(newArr2)
    //2.2
    var newArr3 = [].slice.call(arguments)
    console.log(newArr3)

    // 3 ES6的语法
    // 3.1
    var newArr4 = Array.from(arguments)
    console.log(newArr4)
    // 3.2
    var newArr5 = [...arguments]
    console.log(newArr5)
}

var newArr = foo(1, 2, 3)
```

