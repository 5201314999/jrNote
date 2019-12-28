# react 学习笔记

## 前言
刚上手，加上以后使用频率较低，有些东西需要做些笔记，方便以后查询

## 1 脚手架创建项目
npx create-react-app demo --scripts-version=react-scripts-ts

## 2 自己从零搭建react+ typescript +webpack 后台模板项目

说明，vue 项目同样使用，原理是差不多的。

* npm install -g typescript

* mkdir ts-react && cd ts-react

* npm init -y && tsc --init   
    创建package.json 和 typescript 编译配置

* npm install-D webpack webpack-cli webpack-dev-server  
    安装webpack 依赖

* npm install -S react react-dom   
    react 依赖
 
* npm install -D @types/react @types/react-dom  
    react中typescript 的验证包

* npm install -D awesome-typescript-loader 
    把ts 代码编译成js 代码

* webpack css 处理 
    安装sass 或者 less  style-loader css-loader


* css 模块化 技术引入 （解决css 作用域问题，跟scoped 对比各有好坏）

    - 存在版本问题 
        typings-css-modules-loader  css-loader 2.0 存在报错。

    - keyframes 问题，使用local() 解决

*  typescript import logo from '../../logo.png'  图片会报错

   所有的import 都要 

* typescript 中配置路径别名

1. tsconfig.json 中 配置 path ， 然后在 webpack 配置中配置resolve alias 
2. 直接安装 tsconfig-paths-webpack-plugin ，webpack 中使用 webpack.resolve.plugins 读取tsconfig 的配置

* 构建缓存

主要是tsx 的转换和scss 的转换。


## webpack 的打包配置

主要是参考vue 脚手架的配置，也参考了 create-react-app 的配置,加了 define，mode， 分离css 文件, 遇到的问题，typescript 集成之后连process 都访问不了。



## 打包文件记录

1. 一开始的情况

![Image text](https://github.com/5201314999/jrNoteWebsite/blob/master/docs/react_1.png)


## redux学习

在学习这个之前，我已经是vue 技术栈熟练者，掌握了 vuex ，然而看 redux 看懂却花了不少时间，思路跟vuex 类似，写法不太一样，难道是脑子生锈了。。。 

action, reducer， store  store.dispatch(marry('jr','why'))

## react-native 笔记

需具备一定react 基础，参考官方文档，或者查找培训资料都行。

`花在配置android开发环境会比较多，也容易出问题，不懂可以请教android 开发朋友`。

单独转下列完整 sdk比较麻烦，安装包难找 ，建议装个as ,通过新增虚拟机来装sdk 包。（一开始没这样做，只装了Android SDK Platform 29，缺包一直项目跑不起来）
```
Android SDK Build-Tools 29.0.1
Android SDK Platform 29
Android SDK Tools
```

- init
react-native init `name` --template typescript

1. 使用第三方模拟器

可以使用genymotion ,夜神带了大量游戏，不够简洁，先免费试用，破解看情况。

专有名词：

* adb 调试桥接包，软件应用需要这个工具才能连接模拟器。

`参考教程`:
* [genymotion 和 rect-native](https://blog.csdn.net/u012369271/article/details/74002466)
* [android工具包](https://developer.android.google.cn/studio/releases/sdk-tools?hl=en)
* rect-native 也可以使用android studio ，查看官方教程
 









