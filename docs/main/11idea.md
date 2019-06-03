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




