## ES Module

##### ES Module和CommonJS的不同之处

ES Module使用import和export关键字

采用ES Module将自动开启严格模式

<u>在html内引用要加type</u>

```js
 <script src="./main.js" type="module"></script>
```

<u>要用liveServer打开html</u>



#### 导入和导出的用法

#### ES Module的解析流程

分为3个阶段

1. 构建：将main.js从服务器下载到浏览器，将js文件解析为数据结构Module Record，将main.js中引用的文件请求下载下来，并解析为Module Record

   在Map里面有映射关系来记录哪些文件已经下载或正在下载

   ![ES Module阶段](E:\工作\产品经理\JavaScript高级\笔记\class_image\ES Module阶段.png)

2. 实例化：根据Module Record创建对象，并且分配内存空间，只解析模块导入和导出语句，把模块指向对应的内存地址

   Module Record经过实例化后生成<u>模块环境记录</u>对象，在对象中有绑定Module Record中导出的变量，并将变量保存到内存中，值为undefined

   Module Record经过实例化后生成<u>模块环境记录</u>对象，在对象中有绑定Module Record中导入的变量，

3. 运行：运行代码 并将值填充到内存地址中

   ![ES Module阶段2](E:\工作\产品经理\JavaScript高级\笔记\class_image\ES Module阶段2.png)

注意事项：

在导出文件中  可以更新内存中的值

在导入文件中 不能更新内存中的值



#### CommonJS和ES Module

前提1：在浏览器中

在一个文件中用CommonJS的方式导出（导入）  在另一个文件用ES Module的方式导入（导出）？

在浏览器中不能使用CommonJS

前提2：在Node中

在一个文件中用CommonJS的方式导出（导入）  在另一个文件用ES Module的方式导入（导出）？

在最新的Node版本中（支持ES Module)

##### 前提3：基于webpack（平时开发Vue\React）

在一个文件中用CommonJS的方式导出（导入）  在另一个文件用ES Module的方式导入（导出）？

可以。

1. 初始化 生成package.json

`node init -y`

2. 安装webpack

3. npx webpack

   会生成dist文件（打包了foo和index) 运行的时候是运行dist文件

4. 如果修改了index和foo的代码 就要重新打包

