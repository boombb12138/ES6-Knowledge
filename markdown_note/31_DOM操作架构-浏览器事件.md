### DOM

由JS代码向服务器发送请求 编写JS代码，将服务器的数据转为和html代码，让浏览器做渲染

怎么将title作为html元素？

通过DOM （Document Object Model）

在JS代码和html之间建立桥梁 -> DOM



设计多个模型，让多个模型存在继承东西，把共同的东西放在父类，再做类型划分

![浏览器架构](E:\工作\产品经理\JavaScript高级\笔记\class_image\浏览器架构.png)

浏览器最顶层的父类是EventTarget，所以所有元素都有addEventlistener

html一旦被创建，浏览器就会生成一个document对象

整个html文档叫document

Element就是标签

- div标签
- image标签
- h1 h2标签

`CharacterDate`  包含标签内的文本和注释



### 认识事件监听

浏览器发现用户做了操作，就将事件传给某些元素或窗口

在元素上就可以绑定事件，绑定事件的过程叫事件监听



### 事件流

如果同时有事件捕获和冒泡，会优先监听到事件捕获的

![事件冒泡和捕获](E:\工作\产品经理\JavaScript高级\笔记\class_image\事件冒泡和捕获.png)

```
const span = document.querySelector('.span')
// 事件冒泡
span.addEventListener('click', () => {
    console.log('span被点击了')
})

const div = document.querySelector('.box')
div.addEventListener('click', () => {
    console.log('div被点击了')
})

document.body.addEventListener('click', () => {
    console.log('body被点击了')
})

// 事件捕获
span.addEventListener('click', () => {
    console.log('span被点击了')
}, true)

div.addEventListener('click', () => {
    console.log('div被点击了')
}, true)

document.body.addEventListener('click', () => {
    console.log('body被点击了')
}, true)
```

### 事件对象Event