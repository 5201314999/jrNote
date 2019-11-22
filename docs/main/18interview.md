# 面试系列2
对技术保持热情，无论是否当程序员，一点都不矛盾。

### 基础资料
 * [前端安全系列之二：如何防止CSRF攻击？](https://juejin.im/post/5bc009996fb9a05d0a055192)
 * [如何防止XSS攻击](https://www.freebuf.com/articles/web/185654.html)
 * [前端工程师手册](https://leohxj.gitbooks.io/front-end-database/content/javascript-basic/index.html)
 * [合格前端系列第九弹-前端面试那些事](https://zhuanlan.zhihu.com/p/32911022)
 * [饥人谷2018前端面试押题（讲义）](https://zhuanlan.zhihu.com/p/34536462)
 * [Interview-Book](https://juejin.im/post/5c356f68f265da61483bca61)
 * [19年面试题总结](https://mp.weixin.qq.com/s?__biz=Mzg5MDAyNjIxOQ==&mid=2247484159&idx=1&sn=a2485936b457197e38ad0202f86ebe6e&chksm=cfe3a37bf8942a6dc738bf38f7eea3386255bc9626636754725b671aff0b1b41ce21054351e3&mpshare=1&scene=23&srcid=#rd
 )
 * [vue 原理面试题](https://segmentfault.com/a/1190000016344599?utm_source=tag-newest#articleHeader2)
 * [简书面试题整理](https://www.jianshu.com/p/769266edbd38)
### 常用算法

  排序,搜索,常用数据结构，树与列表的转化

### 框架，工具原理，语言

### 架构，前端工程化思维

### 面试经验帖

 * [https://zhuanlan.zhihu.com/p/51607206](https://zhuanlan.zhihu.com/p/51607206)
 * [https://github.com/jawil/blog/issues/22](https://github.com/jawil/blog/issues/22)
 * [https://segmentfault.com/a/1190000010631325?_ea=2359607#articleHeader18](https://segmentfault.com/a/1190000010631325?_ea=2359607#articleHeader18)
 * [https://juejin.im/post/5c356f68f265da61483bca61](https://juejin.im/post/5c356f68f265da61483bca61)

2 开发一个图片裁剪插件

3 PWA 渐进式网络应用程序

* 你的优点
* 你的缺点
* 最近在看什么书? 怎么学习的前端知识? 保持自我学习? 
* 为什么要从事前端? 
* 为什么离职？ （现在公司的工作内容基本都是后台系统开发,团队规模较小，没有涉及到移动端，业务相对简单，不够挑战性，不利于个人前端架构，设计能力的培养）
* 你的职业规划 (先做一个合格的前端，慢慢)
* 有什么问题问我的吗？ (职位和项目)
* 最近项目解决的一个技术难点，即项目中遇到了哪些坑？怎样解决的？
* 最近做的最成功的一次分享是什么
* 说一件你做的最酷的事情是什么
* 怎样理解前端工程化？
* 前端发展趋势？
* 框架选型依据？
* 所在团队工作流程的介绍、以及你在团队中的定位和技术排名

![基础知识](https://yuchengkai.cn/docs/frontend/#%E5%86%85%E7%BD%AE%E7%B1%BB%E5%9E%8B)

### 跳槽
1 评估
  * 现状
    * 领导太垃圾，导致同事们都离开，气氛有问题
    * 目前的薪水一年智能有10w 左右结余
    * 公司的技术栈还是没涉及到移动端
  * 期待
    薪水18k*13=25w 年薪。
    氛围，适合生活
    未来的成长
  

  
1 原因
    当前公司不符合个人发展需要,部门业务发展遇到困难，面临裁员或者转岗。

2 怎么准备
    （1）简历 （怎么包装）
    （2）知识 (确定范围，了解到什么程度，再去面试) 
    （3）周期设定(1月份之前)
    （4）自我介绍



# 知识查漏补缺（纲要）

1. 防抖，节流的定义 和 封装 ::100::
2. this 
3. hash模式和history模式
4. js 事件机制，(宏任务/微任务）



# 知识查漏补缺（答案）

1. 防抖，节流的定义 和 封装 ::100::
2. this
  dom 事件 this 执行dom 自身
3. hash模式和history模式
   （1）hash模式,url 上带着一个# 字号，可以通过window.location.hash 设置访问,通过hashchange事件监听，修改hash不会发送请求到服务器。
   （2）history 通过pushState,popState,,replaceState 操作路由，刷新浏览器时会发送请求带有state 的请求，所以需要后台处理解析404 问题。用ng 配置一个linux 服务器跑起来之后,首页空白
:::warning 说明

用ng 配置一个linux 服务器跑起来一个vue history之后,首页空白

:::
4. setTimeout() 是宏任务，promise 是微任务，先执行js 主线线程执行栈，在执行异步队列

```
 setTimeout(()=>{
   console.log(0);
 },0);
  new Promise(resolve,reject)=>{
    console.log(1);
    resolve();
    console.log(2);
  }).then(
    ()=>{
      console.log(3);
  })
  console.log(4);

  12430
```
5. 注意:`浏览器右键查看源代码是服务端渲染好的，客户端渲染的看不到`

# 计算机基础知识

## 网络知识

1. TCP/IP 协议

TCP/IP 协议是一个协议族，主要是定义网络中2台计算机的通信规则。分为四层

* 应用层 （ftp,http)
* 传输层 (tcp,udp)
* 网络层 (数据包，ip 协议)
* 数据链路层 (硬件部分，网卡)

2. 专业术语
   ARP 协议 Address Resolution Protocol
   MAC Media Access Control Address

3. TCP 3次握手（确保双方可以正常通信） ,TCP 4 次挥手（断开连接） http 是基于tcp 之上的应用层传输协议

具体步骤内容

发生时间点：
3次握手：其中2个标志位 SYN 和 ACK；
http 请求和响应。
4次挥手：其中2个标志位 FIN 和 ACK；
   
4. URI 和 URL
 
5. 网络安全

  xss  https://www.cnblogs.com/unclekeith/p/7750681.html
  crsf 

6. 请求报文和响应报文的结构

首部
空行
实体

[https://yeqown.github.io/2018/06/28/%E6%80%8E%E4%B9%88%E6%89%8D%E5%8F%AB%E7%86%9F%E6%82%89http%E5%8D%8F%E8%AE%AE/](https://yeqown.github.io/2018/06/28/%E6%80%8E%E4%B9%88%E6%89%8D%E5%8F%AB%E7%86%9F%E6%82%89http%E5%8D%8F%E8%AE%AE/)

7. http 常用返回状态码

403
301,302,303,304  

8. https 协议
  * 解决http 的缺点
  1. 通信是明文
  2. 不能验证身份
  3. 不能检验数据完整性

  https=http+ 通信加密+ 证书认证+ 完整性保护



  # 前端设计模式

  ### 观察者模式 vs 发布-订阅者模式(vue 源码中属于哪种？)

  观察者模式直接和订阅者交互（同步）， 发布-订阅者模式通过第三方交互（异步）


  # 面试题

  1 兼容性 (css 浏览器前缀，opacity ie9 filter=alpha(opacity=100)) ,使用postcss 的autofix
  2 性能优化
  3 html,js,css 基础





  














