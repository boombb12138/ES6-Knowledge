### npm install命令

全局安装 global

在电脑任何位置都可以使用

```
npm install webpack -g
```

局部安装 local install

webpack只会安装到当前项目里

```
npm install webpack
```

##### 区分

dependencies里的（如axios\vue)都要局部安装 都是在项目中会使用的 在src里面有用到

安装在全局都是作为工具属性安装到全局的

全局安装webpack 在电脑任何位置想使用webpack

局部安装webpack 每个项目依赖的webpack版本不一样

#### 项目依赖

安装开发和生产依赖

```
npm install axios
= 
npm i axios
```

安装开发依赖

```
npm install webpack --save-dev
npm install webpack -D
npm i webpack -D
```

## npm install的原理

![npm install流程](E:\工作\产品经理\JavaScript高级\笔记\class_image\npm install流程.png)

管理npm安装的包就先要有package.json

#### 执行npm install axios的流程

```
 npm install axios
```

  检查当前项目里有没有package-lock.json 

package-lock.json 作用：当同事在npm install的时候就会找到package.json里规定的版本

##### 没有package-lock.json

1. 如果没有package-lock.json 就自己构建（分析）依赖:在registry仓库中，查找axios,和它依赖的文件，再从仓库下载axios及其依赖，下载的是压缩包，下载后再对压缩包进行缓存
2. 解压到node_modules ，里面就有源码，就完成安装了
3. 生成package-lock.json 

##### 有package-lock.json

检查要明确安装的版本和lock里记录的版本是否一致

- 如果不一致 就重新构建依赖，根据要安装的版本，从registry仓库里下载、缓存并解压，最后重新生成package-lock

- 如果一致  说明已经安装过该版本，就查找缓存

  <u>查找缓存的流程</u>

  在命令行执行

  ```
  npm get cache
  ```

  得到文件夹路径 找到文件夹路径

  在cache文件中就有缓存，根据lock.json中axios的`integrity`的值，通过算法得到索引，在根据索引在cache文件找到文件，文件中有配置文件，根据配置文件中的_shasum，通过算法，找对应的缓存文件，

  - 如果没有找到，会从registry仓库里下载、缓存并解压，最后重新生成package-lock
  - 如果找到就会获取缓存中的压缩文件，并将压缩文件解压到node_modules 

### yarn

yarn和npm不能混合使用

lock文件是yarn.lock，格式不是package-lock.json

### cnpm

npm 需要从国外的register仓库（https://register.npmjs.org)中安装包

镜像：国内的服务器备份了register仓库的东西

方法1：修改npm的下载源为国内的淘宝镜像

不推荐：不实时更新 不能保持和registry仓库的一致  

方法2：使用cnpm

全局安装cnpm cnpm和npm用法一样

```
npm install cnpm -g
```

cnpm默认从registry中下载，可以设置下载路径

```
cnpm config set registry https://registry.npm.taobao.org
```

这样就既可以从npm install也可以cnpm install

- 技巧：直接使用npm如果下载慢，可以将网络切换为热点

### npx工具

安装node自动安装npm和npx

作用：

在命令行输入webpack，会在环境变量中查找webpack，所以会拿到全局的webpack

如果要拿到项目目录下的node_modules里的bin里的webpack 

方法1：手动在命令行输入 路径

方法2：在package.json下的scripts 定义脚本

方法3：在命令行输入

```
npx webpack --version
```

npx会自动在node_modules里的bin里找

### 发布自己的包

1. 生成package.json

```
npm init
```

2. 在package.json中配置
   - repository 里面有url属性（上传到的github地址） 和 类型（如git）
3. 在npm中注册账号 在命令行登录
 ```
   npm login
 ```

      4. 发布

```
npm publish
```

  注：如果修改代码 就要修改版本号，重新发布新版本 

删除发布的包：

```
npm unpublish
```

#### 使用发布的包xxx

1. 安装包

```
npm install xxx
```

2. 在main.js中导入

