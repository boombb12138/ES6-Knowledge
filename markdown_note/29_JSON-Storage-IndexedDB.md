### JSON（JS对象符号Object Notation)

JSON是一种<u>数据格式</u> 是一种客户端和服务器之间数据传输的格式

##### JSON使用场景

- 网络数据的传输JSON文件
- 项目的某些配置文件

#### JSON基本语法

JSON的顶层支持3种类型的值

- 简单值：数字、字符串、布尔值、null  **没有undefined**
- 对象值：key是字符串类型，必须要有双引号 值可以是简单值，也可以是对象、数组
- 数组

注：JSON中不能写注释

最后的值不能加逗号

#### JSON序列化

### 浏览器存储方案

#### Storage

localStorage:本地存储 是一种永久性的存储方法 用户关闭网页重新打开时，存储的内容依然保留

sessionStorage:关闭标签 存储的内容会被清除

链接跳转到另一个页面，localStorage里保存的内容还在 sessionStorage里没有保存的内容

#### Storage常见的属性和方法

```js
// 1.setItem
localStorage.setItem('name', 'coderwhy')
localStorage.setItem('age', 18)

// 2.key方法
// console.log(localStorage.key(0))

// 3.length
console.log(localStorage.length)
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    console.log(localStorage.getItem(key))
}

// getItem(key)
console.log(localStorage.getItem('age'))//18

// removeItem
localStorage.removeItem('age')

// clear
localStorage.clear()
```



### IndexedDB

IndexedDB是一种数据库  如果要存储大量的数据，就可以用IndexedDB

服务器的作用：拿到客户端的请求 去数据库找相关的数据 拿到数据后返回给客户端

