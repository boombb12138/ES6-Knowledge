### 

```
setTimeout(() => {

}//这个函数才是异步的, 1000);
```

### 事件队列

##### 宏任务队列Macrotask

- setTimeout的回调 setInterval的回调
- ajax
- DOM事件

##### 微任务队列Microtask

- queueMicrotask的回调
- Promise的then的回调

##### 事件循环对两个队列的优先级

main script中的代码优先执行

在执行任何一个宏任务之前，都会先查看微任务队列中是否有任务要执行

<u>在执行任何宏任务之前，都需要先保证微任务队列的所有任务都执行了</u>

Promise的参数executor是个在main script里执行的函数

###  Node的事件循环

与浏览器的事件循环相似

1. 先开启一个node进程
2. node进程多线程
3. 其中有一个js线程来执行js代码
4. 耗时操作是由Node中的其他线程来做

##### js为什么可以应用在服务器上？

node的libuv可以帮助js做一些IO操作（input、output) ,在完成对应的操作后，会将对应的结果和回调放到任务队列中

##### Node要执行一次完整的任务会划分为很多个阶段(事件循环的阶段)

- 定时器timer 本阶段执行setTimeOut的回调函数

- 轮询poll 检查新的IO事件（数据库的存储和读取）

- check

- 关闭的回调函数close callbacks

- ...

  上面的事件都是宏任务

Node的宏任务和微任务

微任务：Promise的then回调、promise.nextTick、queueMicrotask

setTimeout先执行再执行setImmediate



##### Node事件循环队列

![Node事件循环队列](E:\工作\产品经理\JavaScript高级\笔记\class_image\Node事件循环队列.png)

##### Node事件循环顺序

![Node事件循环顺序](E:\工作\产品经理\JavaScript高级\笔记\class_image\Node事件循环顺序.png)