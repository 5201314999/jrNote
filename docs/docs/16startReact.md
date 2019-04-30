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
    把ts 代码变异成js 代码

* webpack css 处理 
    安装sass 或者 less  style-loader css-loader


* css 模块化 技术引入 （解决css 作用域问题，不知道跟scoped 的区别在哪）


    - 存在版本问题 
        
        typings-css-modules-loader  css-loader 2.0 存在报错。
    - keyframes 问题

*  typescript import logo from '../../logo.png'  图片会报错

* typescript 中配置路径别名

1. tsconfig.json 中 配置 path ， 然后在 webpack 配置中配置resolve alias 
2. 直接安装 tsconfig-paths-webpack-plugin ，webpack 中使用 webpack.resolve.plugins 读取tsconfig 的配置

* 构建缓存

主要是tsx 的转换和scss 的转换。










