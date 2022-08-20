### Cookie

类型：小型文本文件 为了辨别用户身份而存储在用户本地终端上的数据

##### 流程

用户登录，把用户名和密码发送给服务器，服务器返回数据，数据中的响应头有set-cookie，浏览器自动存储cookie，当用户发送请求（要查看购物车），就带着cookie去服务器验证，通过验证服务器就返回数据

Cookie总是保存在客户端

- 内存Cookie，没有设置过期时间，在关闭浏览器时会自动删除
- 硬盘Cookie，设置了过期时间，需要手动或到期时，才会删除

##### 常见属性：

cookie的生命周期：过期时间

```
max-age:60*1000*60*24*30//一个月
```

cookie的作用域：允许cookie发送给哪些URL

##### 客户端

用户退出登录 要删除cookie -->让cookie过期

```
document.cookie='name=why'=;max-age=0'
```

### BOM

浏览器对象模型 JS和浏览器的操作桥梁

BOM主要包括以下的对象模型

- window
  - 作为js的全局对象
  - 作为窗口对象
    1. 包含大量的属性
    2. 包含大量的方法
    3. 可以监听的事件
    4. 包含从EventTarget继承过来的方法  因为window类继承自EventTarget


- location：url在JS中的实现

  一个完整的URL

  ![URL含义](E:\工作\产品经理\JavaScript高级\笔记\class_image\URL含义.png)

- history:浏览历史

  - 属性

  length:历史记录的条数

  state:当前保留的状态值 pushState

  - 方法

  back() 回退到上一页

  forword() 前进下一页

  pushState() 打开一个指定的地址

  ```
  history.pushState({name:'coderwhy},'','/detail')
  ```

  ​

#### MDN文档的符号

垃圾桶：已经被删除 不要用

踩：不属于W3C规范 但是有些浏览器支持（存在兼容问题）

实验：以后可能会修改，存在兼容问题

#### window的常见属性、方法和事件

//见代码





学习方法：从架构的角度，看各个API的关系，哪些是父类，哪些是特有的，哪些是子类的子类...