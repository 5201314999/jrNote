# webpack 构建优化文档 
## 前言
1. 构建有什么用?
* 代码转换：TypeScript 编译成 JavaScript、SCSS 编译成 CSS 等。
* 文件优化：压缩 JavaScript、CSS、HTML 代码，压缩合并图片等。
* 代码分割：提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载。
* 模块合并：在采用模块化的项目里会有很多个模块和文件，需要构建功能把模块分类合并成一个文件。
* 自动刷新：监听本地源代码的变化，自动重新构建、刷新浏览器。
* 代码校验：在代码被提交到仓库前需要校验代码是否符合规范，以及单元测试是否通过。
* 自动发布：更新完代码后，自动构建出线上发布代码并传输给发布系统。
2. 为什么选择webpack？
webpack 如今已成为最流行的模块化打包工具，据我使用体验来看，功能强大，配置复杂，不过掌握构建以及优化是不可缺少的职业技能。
本文的目的是学习webpack 的并能用于项目实战中。

3. 类似的构建工具
###  npm Script    
    npm 自身可以配置命令，任务执行器

###  Rollup
Rollup 是一个和 Webpack 很类似但专注于 ES6 的模块打包工具。 Rollup 的亮点在于能针对 ES6 源码进行 Tree Shaking 以去除那些已被定义但没被使用的代码，以及 Scope Hoisting 以减小输出文件大小提升运行性能。 然而 Rollup 的这些亮点随后就被 Webpack 模仿和实现。 由于 Rollup 的使用和 Webpack 差不多，这里就不详细介绍如何使用了，而是详细说明它们的差别：

* Rollup 是在 Webpack 流行后出现的替代品；
* Rollup 生态链还不完善，体验不如 Webpack；
* Rollup 功能不如 Webpack 完善，但其配置和使用更加简单；
* Rollup 不支持 Code Spliting，但好处是打包出来的代码中没有 Webpack 那段模块的加载、执行和缓存的代码。

Rollup 在用于打包 JavaScript 库时比 Webpack 更加有优势，因为其打包出来的代码更小更快。 但功能不够完善，很多场景都找不到现成的解决方案。

4. 生产环境配置和开发环境配置

在开发环境中，我们需要具有强大的、具有实时重新加载(live reloading)或热模块替换(hot module replacement)能力的 source map 和 localhost server。而在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，以改善加载时间。由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置。

### 其他概念
1. 白屏时间 = firstPaint - performance.timing.navigationStart; 
2. 首屏时间
    * 首屏模块标签标记法
    * 统计首屏内加载最慢的图片的时间
    * 自定义首屏内容计算法
    * [参考文档](http://www.bubuko.com/infodetail-2265464.html)
## 正文

### 一、webpack 网上有很多很好的学习资料
[官网入口](https://www.webpackjs.com/guides/code-splitting/#%E5%85%A5%E5%8F%A3%E8%B5%B7%E7%82%B9-entry-points-)。


1. 从 Webpack2 开始，已经内置了对 ES6、CommonJS、AMD 模块化语句的支持。

2. webpack 的实时热更新（HMR) 配置,source-map 方便线上调试

3. 不同环境使用不同的配置文件，使用 merge 来合并 common.js 通用部分和特殊部分。

4. webpack4 开始支持 tree shaking 这个功能，该功能有rollup 提出，用于删除未被使用代码。webpack4 必须要多安装 cli ,才可以开始

很方便调试

### 二、使用懒加载 import/vuex

(1) 代码分离
* 入口起点：使用 entry 配置手动地分离代码。
* 防止重复：使用 CommonsChunkPlugin 去重和分离 chunk。
* 动态导入：通过模块的内联函数调用来分离代码。

(2) 懒加载

    await, import 

### 三、 缓存

使用 content hash ,将项目分离打包成 Venter/runtime, app， manifest， app 和 manifest 每次都有可能变化，但是 ventur 用来打包一些库 ，实现可长期有效缓存。


###  四、 创建库

用来生成一些npm 的包。重点配置是将一些依赖外部化，交给外部用户来控制。另外是实现指定模块打包，其他模块不打包。

渐进式网络应用程序(Progressive Web Application - PWA)



### 参考资料

(史上最走心webpack4.0中级教程——配置之外你应该知道的)[https://www.cnblogs.com/dashnowords/archive/2018/09/04/9572755.html]


看了一遍教程，可以看得懂配置。但是还需要实践。原理还是还不清晰


