异步函数的



返回值一定是一个Promise

 then会在return之后执行 res就是return的值

##### async和普通函数的区别

- 返回值

```javascript
async function foo() {
    console.log('foo start')
    console.log('中间代码')
    console.log('foo end')
    // return后面的值就是then方法中res的值
    return 'aaa'
  // 2 return一个thenable
    // return {
    //     then: function (resolve, reject) {
    //         resolve('hahaha')
    //     }
    // }

    // 3 return一个Promise对象
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hhhhh')
        }, 3000);
    })
}

// 异步函数的返回值一定是一个Promsie
const promise = foo()
promise.then(res => {
    console.log('promise then function ', res)
})
```

- 異步函数中的异常 会被作为异步函数返回的Promise的reject的值 普通函数会直接崩掉

- async可以使用await 普通函数不可以

  ```javascript
  async function foo() {
      await 表达式(返回一个Promise)
  }
  ```

### await

1. await跟上表达式


```javascript
function requestData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2222)
        }, 2000);
    })
}


async function foo() {
    const res = await requestData()

    console.log('后面的代码', res)
    console.log('后面的代码2')
}

foo()
```

2. 跟上其他值
3. await后的函数返回了reject 会作为foo函数返回的promise的状态 

### 进程和线程

进程：启动一个应用程序 就会默认启动一个进程

线程：每一个进程，都会启动至少一个线程用来执行程序中的代码，这个线程叫做主线程。一个进程可以开启多个线程

进程是线程的容器

JavaScript是单线程的 同一时刻只能执行一段代码，JavaScript的线程的进程容器是浏览器或者Node

多数的浏览器是多进程的 打开一个页面就开启一个新的进程，每个进程中又有许多线程  

##### 耗时的操作不是有js线程执行的

以setTimeout为例子

回调函数和计时是交给浏览器其他线程 当到时间 或者 浏览器和服务器沟通好后 再执行回调 告诉js线程可以执行定时器里的代码

那么到时间后js线程怎么知道执行哪一个定时器呢？

浏览器维护着一个队列 浏览器到时间会将回调函数放到队列里，当js引擎发现事件队列里有函数，就会依次取出来执行

队列是先进先出的

![事件循环](E:\工作\产品经理\JavaScript高级\笔记\class_image\事件循环.png)

### 浏览器的事件循环

js发起事件，事件的回调函数和计时交给浏览器其他线程 

 浏览器到时间会将回调函数放到队列里

当js引擎发现事件队列里有函数，就会依次取出来执行