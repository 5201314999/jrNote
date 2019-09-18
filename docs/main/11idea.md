# 独立思考

## 1 simidtor 上传图片出不来

可能原因：
1. api 写错 (不肯能) 
2. 库有问题 （更新库，但是辛苦都是源码，不会打包）

卡住：新库的打包再代码发现md 说明文件，问题转成 ruby gem 安装问题

最终打包成功，发现插件升级导致问题

降低插件版本，解决了这个问题

## 2 iview table 提示问题

旧项目为了兼容自己写的title 没有tooltip. 每一行要用2行代码，已经优化过了的

```
 render: (h, params) => {
              return tableRender(h, params, 'categoryName');
            }
```

打算利用table 的tooltip ，那么自己写的tilte 用指令来实现tooltip。 这样工作量还会继续减少。


## 3 ie9 viewer 局部异常

1 采用的方法逐项排查，类比法，创造简单demo 进行测试，发现插件本身是兼容ie 9 的。

2 类比2个项目的webpack 配置，发现基本配置不一样， 出问题的代码配置改动比较大，主要是对文件路径做了较大改动

3 dataset 和 viewer 发生了冲突。

2018/12/5 暂时还没解决。晚上再看下

## 4 last child 与 nth-of-type 



## 5 activated 的时候不用mounted/created 了



## 6 上传图片/视频

1. 考虑上传前格式过滤的问题

最后解决了mkv,mp4， 搞不定ts ，一开始狂找ts 的accept ,最后input 原生accept 估计不支持，改成上传之前手动校验。

2. 业务上传时大多数数据都在前端计算，大小，时长，后缀

难得用了promise，非常开心。 

3. jquery 普通js 库 修改成 es6 模块化引用

一开始不知道怎么改。。 

## 7 iview3.0  filterable 前后出现空格

1 一开始以为没出来，原来跑去后面了，跑去后面之后一直以为是样式的问题。完全没注意到时空格

最终发现是 `<option>{{label}}` 有折行，就会出现空格，属于iview 的bug. 

## 8 ts,mp4,mkv 视频 html5 播放

mp4, mkv 原生html5支持,ts 很麻烦，借助了vue-video-play,目前可靠的是转码的方案。

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

使用最基本的思路，直接操作dom  进行添加。

发现动态添加的dom ，组件css 作用不上，最终初始化数据好，之后使用vue 双向绑定



## 14 开发多点触控项目，一个人架构

1 功能

 多点触控  websocket 实时共享, 线，面，铅笔，**橡皮擦**,**缩放**，移动 

2 canvas 和 svg  canvas（sb 领导一意孤行）

3 技术栈考虑选择 vue 项目,canvas 库（ konva 与 fabric ） 从代码风格和start 来看选择 konva.


4 计划表

 * 项目
 * 初始化线,面
 * 缩放()


### 15. 事件监听

1.ul>li>div   监听li ，target 希望是li 实际是div


### 16. （教育系统）布局响应式处理和组件封装的思考

一个不复杂的东西，但是技术上可以学到很多东西
* 封装一个数独网格。数据接口的定义，样式的控制，外部控制容器的大小还是单元格大小，文字颜色，格子颜色，交互时数据改变。
样式特别难写，主要是大小的设置，用了vw， 有些地方就出现非确定大小了，思路：结合浏览器调试。。flex 因为 fixed 无效
最终封装得不是很通用，样式还可以，数据逻辑没法复用，2个游戏写了2套逻辑在里面，感觉其实没必要封grid， 封个单元格就差不多了

### $event

vue 特殊变量，用于传递事件，`注意: 原生dom 才有效，组件加这个变量无效，只能手动传参`


### v-if 重新加载路由页面

一直只考虑路由，没想过这个方案


### vue @事件 鼠标到子元素上了导致触发父元素mouseout 

1. 使用native 不会
2. 使用mouseenter, 和mouseleave 不会

### 移动端offsetX 是没有的