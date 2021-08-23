# 独立思考

## 1 simidtor 上传图片出不来

可能原因：

1. api 写错 (不肯能)
2. 库有问题 （更新库，但是辛苦都是源码，不会打包）

卡住：新库的打包再代码发现 md 说明文件，问题转成 ruby gem 安装问题

最终打包成功，发现插件升级导致问题

降低插件版本，解决了这个问题

## 2 iview table 提示问题

旧项目为了兼容自己写的 title 没有 tooltip. 每一行要用 2 行代码，已经优化过了的

```
 render: (h, params) => {
              return tableRender(h, params, 'categoryName');
            }
```

打算利用 table 的 tooltip ，那么自己写的 tilte 用指令来实现 tooltip。 这样工作量还会继续减少。

## 3 ie9 viewer 局部异常

1 采用的方法逐项排查，类比法，创造简单 demo 进行测试，发现插件本身是兼容 ie 9 的。

2 类比 2 个项目的 webpack 配置，发现基本配置不一样， 出问题的代码配置改动比较大，主要是对文件路径做了较大改动

3 dataset 和 viewer 发生了冲突。

2018/12/5 暂时还没解决。晚上再看下

## 4 last child 与 p:nth-of-type(n) 与 p:nth-child(n) 的区别

```
 p:nth-of-type(n) 第n 个p  p:nth-child(n)  第n 个子元素， 且刚好是p

```

## 5 activated 的时候不用 mounted/created 了

## 6 上传图片/视频

1. 考虑上传前格式过滤的问题

最后解决了 mkv,mp4， 搞不定 ts ，一开始狂找 ts 的 accept ,最后 input 原生 accept 估计不支持，改成上传之前手动校验。

2. 业务上传时大多数数据都在前端计算，大小，时长，后缀

难得用了 promise，非常开心。

3. jquery 普通 js 库 修改成 es6 模块化引用

一开始不知道怎么改。。

## 7 iview3.0 filterable 前后出现空格

1 一开始以为没出来，原来跑去后面了，跑去后面之后一直以为是样式的问题。完全没注意到时空格

最终发现是 `<option>{{label}}` 有折行，就会出现空格，属于 iview 的 bug.

## 8 ts,mp4,mkv 视频 html5 播放

mp4, mkv 原生 html5 支持,ts 很麻烦，借助了 vue-video-play,目前可靠的是转码的方案。

```
  // this.playerOptions.sources.push({
  //     withCredentials: false,
  //     type: "application/x-mpegURL",
  //     // src: "https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/playlist.m3u8"
  //     src: params.row.url ? (params.row.url.indexOf('http') === -1 ? this.G.files.server.download + params.row.url : params.row.url) : '',
  // })

```

## 9 echarts 柱状图形状圆角的话实现方式。

配置中有提供，解决很简单

## 10 :last-child 理解

el:last-child 的匹配规则是：第一步，查找 el 选择器匹配元素的所有同级元素（siblings）；第二步，在同级元素中查找最后一个元素；第三步，检验最后一个元素是否与选择器 el 匹配。

## 11 echarts 遇到的坑

数据难以整合，很难复用配置

    目前用得最多得是折线图，饼图，柱状图，地图。

    需要做的细节，图标的loading 过渡效果，暂无数据的提示。

    暂无数据目前使用title 设置。

    如果用图片的需要修改dom 结构，总感觉比较麻烦，暂时还没有处理。

    做的过程比较慢，调试花了比较多时间。

## 12 live 2D 编码

[https://www.cnblogs.com/dxdblog/p/10255503.html](https://www.cnblogs.com/dxdblog/p/10255503.html)
[https://www.cnblogs.com/zhangmingzhao/p/8604012.html](https://www.cnblogs.com/zhangmingzhao/p/8604012.html) 右下角动画妹子。

## 13 实现一个合并行的单元格的思路

使用最基本的思路，直接操作 dom 进行添加。

发现动态添加的 dom ，组件 css 作用不上，最终初始化数据好，之后使用 vue 双向绑定

## 14 开发多点触控项目，一个人架构

1 功能

多点触控 websocket 实时共享, 线，面，铅笔，**橡皮擦**,**缩放**，移动

2 canvas 和 svg canvas（sb 领导一意孤行）

3 技术栈考虑选择 vue 项目,canvas 库（ konva 与 fabric ） 从代码风格和 start 来看选择 konva.

4 计划表

-   项目
-   初始化线,面
-   缩放()

### 15. 事件监听

1.ul>li>div 监听 li ，target 希望是 li 实际是 div

### 16. （教育系统）布局响应式处理和组件封装的思考

一个不复杂的东西，但是技术上可以学到很多东西

-   封装一个数独网格。数据接口的定义，样式的控制，外部控制容器的大小还是单元格大小，文字颜色，格子颜色，交互时数据改变。
    样式特别难写，主要是大小的设置，用了 vw， 有些地方就出现非确定大小了，思路：结合浏览器调试。。flex 因为 fixed 无效
    最终封装得不是很通用，样式还可以，数据逻辑没法复用，2 个游戏写了 2 套逻辑在里面，感觉其实没必要封 grid， 封个单元格就差不多了

### \$event

vue 特殊变量，用于传递事件，`注意: 原生dom 才有效，组件加这个变量无效，只能手动传参`

### v-if 重新加载路由页面

一直只考虑路由，没想过这个方案

### vue @事件 鼠标到子元素上了导致触发父元素 mouseout

1. 使用 native 不会
2. 使用 mouseenter, 和 mouseleave 不会

### 移动端 offsetX 是没有的

### 写法疑问(特地这样写是否为了修复某种问题吗？)

```

const hasOwnProperty = Object.prototype.hasOwnProperty
export function hasOwn (obj: Object | Array<*>, key: string): boolean {
  return hasOwnProperty.call(obj, key)
}

```

### ie 11 浏览器对 es6 不友好的情况以及解决方法

```
    1. 对象不支持“assign”属性或方法
    2. 无法获取未定义或 null 引用的属性“length ,线上报 promise 未定义

    解决方法： bable-polyfill ， 使用必须webpack 或者 script ， 放在全局js 之前 。 有没有通过 babel-preset-env直接解决的方法。

```

### import,export

-   import x.js 可以运行一遍非 export 的东西
-   export \* from x.js 可以直接把模块做一次转发，一般用在 index.js 里

### 小程序开发总结

1. onload, onshow 业务函数避免重复执行

2. 小程序有页面栈层级的限制，返回尽量不要新开页面

3. 小程序没有 cookies , 能通过 localstorage 模拟， 会员小程序就是通过这种方式保存登录态

4. 小程序加载网页需要 web-view ,可以封装成一个 js 方法，或者一个 wxs(会促发 setData 渲染), url 尽量进行 encodeURIComponent () ,原因避免出现多个?

5. 小程序的登录注册是一体的，区别于普通的系统登录注册

6. 小程序自定义 tabbar 会让原生的一些 api 失效

7. 分包是为了解决主包不能超过 2M 的限制

8. 可以封装拦截 page 生命周期，但是无法阻止渲染，小程序的生命周期是异步的, 所以页面渲染无法阻止
