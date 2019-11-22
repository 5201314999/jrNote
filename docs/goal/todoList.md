# todo list

::: warning 注意

做之前考虑投入与收益。毕竟学习是需要大量时间的。

:::

## todoList
::: tip 说明
备忘清单，不一定要做
:::
1. vue 的原理

2. 普通日历组件  

3. webpack 的深层次知识  (必须掌握) :100: 

4. node.js （必须掌握）

5. git page 发布jrNote 玩法 windows脚本 推送代码 :100: 

6. 持续集成工具 jenkins 的部署  :100: （理解了原理，但是没有外网ip,实施中断）

7. 巩固基本算法 （leetcode,进行中)

8. iview 项目源码学习 （进行中）

9. 单元测试（）

10. 结合业务对复杂动态表单验证做一次总结。

11. 颜色选择器


 [参考教程](https://www.cnblogs.com/c9999/p/6399367.html)


 11. 一个react项目基础  :100:   

 12. 一个移动端项目基础 (进行中)

 13. css modules :100:

 14. typescript皮毛 :100:

 15. 自己从零搭建一份分环境的配置 :100:

 16. 重新打一遍基础，温故知新 

    * 业界响应式开发vs 移动端适配（最重要，重要基础）
    * 框架类的深入理解 
    * es6,es7,es8语法的进一步掌握 :100:
    * 构建工具(再复习一次)，自动集成，css 预处理器(ok)，css 模块化 (ok) :100
    * 网络方面的加强
    * 组件的开发,中后台组件的开发流程 :100:
    * 大前端的接触
    * 性能优化  
    * node.js 的学习 (学习了基础，还欠缺实战)

 参考：[developer-roadmap](https://github.com/kamranahmedse/developer-roadmap)

17. react-native 项目, node.js, 移动端适配 (进行中)

18. eslint :100:
   很好用，但一如其他，和不同框架配合也有不同处理方式。typescript 出来后，eslint 又得跟着升级修改，很难这种评价好坏。还差集成出自己的开发规范，但是这个也不急，引用第三方的就可以了

19. postcss :100:
   一款转化css 的js 工具库， 作用： 自动加前缀，css 模块化 ，polyfill 未来属性，webpack 插件使用 postcss loader

20. 考虑开发一个自己的博客网站（前台+后台(/是否需要?)+移动端） 工作量巨大（作用不大，放弃）

21. redis+mongodb 使用了解 :100:

22. 如何制作自己的eslint 规则库（未启动）

23. 常规静态页面的编码（短板加强）

24. 开发一套完整的前后端后台系统，旨在对目前的项目整体把控设计上做一个衡量


## step-by-step

1. 单点登录sso 理论体系（single sign on）

g 公司
借助tomcat 服务器认证机制，每次请求都通过tomcat 拦截判断是否需要跳到登录页

f 公司
子系统顶域相同，所以只要登录过一次，cookie jessionid 能作用到所有子系统，jessionid 带到子系统，后台向权限系统认证，或者跟redis 比较。



[https://blog.csdn.net/zy_27_ok/article/details/90033215](https://blog.csdn.net/zy_27_ok/article/details/90033215)

觉得不在子系统建立session， 可以直接jwt 把每个子系统的token（st 作为token） 给回前端cookie，每次解析cookie 成功加上判断sessionid 是否仍然存在作为认证手段），退出时销毁cas session 即可


跨域 cas 系统

app1看有没有cookies - sso 登录页(登录)  - sso 后台 写入 登录页cookie，写入session，给app1 st(30s) -  子系统app1带 st 访问 sso 验证是否登录，写入app1 cookie jessionID
app2 没cookie -sso 有cookie- 给app2 st(jwt 返回）

具体方案根据需求做修改

2. 








