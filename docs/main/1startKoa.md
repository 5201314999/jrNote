# Koa2
## 前言

这里列出我希望你在阅读文章前最好了解的东西：

- es7 async/await 异步编程,es6 基本语法
- nodejs
    - 参考教程 [https://www.runoob.com/nodejs/nodejs-tutorial.html](https://www.runoob.com/nodejs/nodejs-tutorial.html)   
- 模块化方法
    - 参考文章 [https://zhuanlan.zhihu.com/p/26477995](https://zhuanlan.zhihu.com/p/26477995)

## 介绍

Koa2 是一个基于 nodejs 的一个小框架 ,github 地址 https://github.com/koajs/koa

### 目录结构
```
├── lib ----------------------------- 核心目录
│   ├── application.js -------------- 是整个koa2 的入口文件
│   ├── context.js ------------------ 处理应用上下文
│   ├── request.js ------------------ 处理http 请求
│   ├── response.js ----------------- 处理http 响应
├── package.json  
```
### 特性

- 只提供封装好http上下文、请求、响应，以及基于async/await的中间件容器。
- 利用ES7的async/await的来处理传统回调嵌套问题和代替koa@1的generator，但是需要在node.js 7.x的harmony模式下才能支持async/await。
- 中间件只支持 async/await 封装的，如果要使用koa@1基于generator中间件，需要通过中间件koa-convert封装一下才能使用。


## 例子

1. /util/render.js 

``` 
 const fs=require('fs');

 function render(page){
     return new Promise((resolve,reject)=>{
         let viewUrl=`./views/${page}`;
         fs.readFile(viewUrl,'binary',(err,data)=>{
             if(err){
                 reject(err)
             }
             else{
                 resolve(data)
             }
         })
     })
 }
 module.exports=render;
```
2. /index.js
   
```
/**
 * Description node.js 读取文件
 * @authors fanjiongrong (fanjiongrong@tvflnet.com)
 * @date    2018-10-29 11:33:19
 * @version 1.0.0
 */

const Koa=require('koa')
const render =require( './util/render')
const app= new Koa()

app.use(async (ctx) =>{
    let html = await render('demo1.html')
    ctx.body= html
})

app.listen(3000)

console.log('[demo] file-render is starting at port 3000')
```

3. 启动方式 node index.js   



