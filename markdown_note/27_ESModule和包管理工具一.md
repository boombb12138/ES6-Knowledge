## 包管理工具

##### 为什么需要包管理工具

封装了工具 想要别人也能使用 无需繁琐的发布和下载

包管理工具可以管理这些包（axios、vue..) ：

1. npm publish就可以将包发布到registry仓库
2. 如果项目需要这个包，就npm install axios 那么包就被下载到node modules，引用就用import ... from axios就可以了

npm 属于Node的一个管理工具，安装Node就有npm

npm管理的包在哪里搜索、查看？在npmjs.org这个网站搜索这个包

要先有axios库，才能在main.js中引入。发给同事的时候，没有node Module，即项目所依赖的包，只要有package.json就可以了，那么同事只需要npm install即可。为了记录当前项目依赖了哪些包，那么npm在当前项目就有一个配置文件package.json，

package.json会记录项目的名称、版本、项目描述、所依赖库的信息

##### 怎么生成package.json？

方式一：手动生成

1. 在项目目录下npm init 
2. 给包起名字，设置版本，项目描述，项目的入口文件 git repository(把项目放到git仓库)，设置搜索关键字，作者，开源协议

方式二：脚手架

通过脚手架生成项目的时候就有一个package.json

#### package.json的常见属性

`"private":true` 不能发布

`main`  指定入口文件

發佈了一个包 张三下载这个包，并在main.js中引用这个包。

```js
import hyUtils from 'hy_utils'
```

如果这个包在src的main.js中导出 而在张三引用是引用不到的

如果配置了main属性，那么在import的时候会自动找到main所指定的入口文件

如果这个项目是不开源的，那么就不需要package.json的main属性，因为项目不需要被引用

`scripts` 脚本 为了方便使用指令 运行程序的指令不统一 

```js
npm run start = npm start
```

`dependencies  ` 

安装过的包 是指定无论开发环境还是生成环境都需要依赖的包（用户的浏览器也需要这些包）

在安装axios的时候多安装了follow-redirects文件 在写axios源码的时候也依赖了follow-redirects文件，必须要有follow-redirects，才能跑axios

只要文件在axios的dependencies里，那么在安装axios的时候就会一并安装

##### 依赖的版本管理

```js
"dependencies":{
  "axios":"^0.24.0"
}
```

版本需要遵从semver规范  X.Y.Z:

- X 主版本号 重大变化 不兼容之前的版本
- Y 次版本号 增加小的新功能   兼容之前的版本
- Z 修订号 修复了之前版本的bug
- ^ 表示x是保持不变的，y和z永远安装最新的版本
- ~ 表示x和y是保持不变的，z永远安装最新的版本



``devDependencies``

webpack会把src文件打包成dist，用户不会用到webpack，那么，要将webpack安装到devdependencies表示这个包只在开发时用到

```
npm install webpack webpack-cli --save-dev
npm install webpack webpack-cli -D
```

`peerDependencies` 

使用element-plus需要安装Vue3包，在安装element-plus的时候会报这个警告，是因为element-plus的package.json里有`peerDependencies`  属性，规定必须有Vue3这个宿主包

`engines` 

指定node和npm的版本

##### 其他

除了package.json本身的配置，

一些库要用到的配置文件可以放在package.json中

也可以给这个库单独的配置文件

