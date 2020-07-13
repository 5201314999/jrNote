## 浏览器面试系列

### 1. 浏览器有几种进程
1. 浏览器主进程 

    主要负责界面显示、用户交互、子进程管理，同时提供存储等功能。

2. 网络进程

    发送网络请求
    
3. gpu 进程  3D css渲染界面,硬件加速
4. 渲染进程  

    核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页，排版引擎 Blink 和 JavaScript 引擎 V8 都是运行在该进程中，默认情况下，Chrome 会为每个 Tab 标签创建一个渲染进程。出于安全考虑，渲染进程都是运行在沙箱模式下。

5. 插件进程

    管理插件，运行在沙箱中，插件容易奔溃，所以单独进程比较合适

### 2. 浏览器怎么确保传输数据的完整性

浏览器使用IP 协议发送数据，ip 协议只能知道发送到哪台主机，交付给哪个应用需要传输层协议TCP 或者用户数据包协议UDP,这2种协议各自的特点是

``` 速度，可靠性，传输数据大小``` 。TCP 使用了3次握手和4次挥手建立，关闭连接。传输报文带有队列号，可以做完整性校验，丢包重传等。

* TCP三次握手

1. 主机1发送报文给主机2，设置SYN=1 和sequenceNumber, 发送之后主机1进入SYNC_SEND 状态
2. 主机2此时给主机1 应答信号（Acknowledgement）同时把主机2自身的连接报文发送过去，设置SYN和sequenceNumber。(挥手要4次，而这里只要3次的关键原因),此时主机2进入了SYN_RECV 状态
3. 主机1收到主机2的连接报文之后，设置应答信号，acknowledgement number信号，发送给主机2，2台主机进入established 状态（连接）。

* TCP四次挥手
1. 主机1 没有数据要发送给主机2时，发送一个断开的报文，报文内容设置FIN字段和 sequenceNumber，发送之后进入 FIN_WAIT_1 状态
2. 主机2 收到主机1断开报文之后，发送一个应答信号，设置acknowledgement Number ，主机1 收到主机2应答之后，进入FIN_WAIT_2 状态
3. 主机2 没有数据发送给主机1之后,也会给主机1一个断开信号，报文内容设置FIN 状态和sequecence number. 然后主机2进入LAST_ACK 状态
4. 主机1 收到主机2请求关闭状态报文后，会发送一个应答Fin 报文段，主机1 进入TIME_WAIT 状态，主机2 收到后关闭连接，2MSL 时间后主机1 没收到消息也关闭连接。

### 3. url 输入之后发生了什么

1. url 合成，例如只输入关键词的话，浏览器会带上默认的搜索引擎顶尖域名，带上对应的协议字段http。
2. DNS 解析
3. 建立TCP连接
4. 发送数据给服务端，服务端进行相应处理，如果if-modified-since 携带的时间仍就有效，返回304， 否则返回状态200， 资源重定向302 等。
5. 关闭TCP连接
6. 获取到对应的html 资源后进行渲染处理

### 4. DNS 解析
   把域名解析成ip，具体解析过程有好几个步骤
1. DNS 服务器是一个树状结构

* 根DNS服务器 返回 顶级域DNS ip
* 顶级域DNS 服务器 返回 权威DNS服务器
* 权威DNS服务器 返回主机ip

2. 递归查询 和迭代 查询

* 递归查询： 从浏览器缓存中查找->本地的hosts文件查找->找本地DNS解析器缓存查找->本地DNS服务器查找，这个过程中任何一步找到了都会结束查找流程。

* 迭代查询：
![image](https://mmbiz.qpic.cn/sz_mmbiz_jpg/2wV7LicL762ZUCR5WEela9H9fDfYic8BApiaGWKMcic9TPQKGcwHlPhq5K9WBgr6ZZpoaCVhibtZx6Ewtcy5nlDgEbQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
### 5. http 缓存

1. 强缓存
expires 是一个时间戳，可能存在客户端和服务器端时间不一致的问题。
考虑到 expires 的局限性，HTTP1.1 新增了cache-control字段来完成 expires 的任务。expires 能做的事情，Cache-Control 都能做；expires 完成不了的事情，Cache-Control 也能做。因此，Cache-Control 可以视作是 expires 的完全替代方案。在当下的前端实践里，我们继续使用 expires 的唯一目的就是向下兼容。cache-control 优先级更高。

2. 协商缓存
last-modified etag ,etag 是 last-modified 的补充，解决last-modified 只能精确到秒，无法监听毫秒级文件变化；内容做了编辑，但实际内容并无改变，请求时无法有效利用缓存的2大问题。

3. 整体图谱

![image](https://mmbiz.qpic.cn/mmbiz_jpg/2wV7LicL762Yiaw2R76AlG93kEADDlb7liaW9XXFkicFQKUbViclh1X1XYgSOtpzBCyOXXTQficE8rUQmznxEWu6UgHA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)


### 6 浏览器渲染

`构建dom 树`，`样式计算`，`布局树`，`分层`,`栅格化`,`显示`

1. 渲染进程将html 解析成dom 树

2. 渲染引擎解析样式，设置到对应的dom 节点上

3. 将dom 树构建成布局树，过滤掉不用显示的节点

4. 将布局树分层，有些css 3d 变化会单独用个图层存储，使用gpu 硬件加速，提高效率，每个图层都是一堆执行指令列表

5. 再交给合成线程，合成线程对每个小块的图层光栅化，图层转化成位图

6. 渲染引擎开始渲染位图


注意： `通常有层叠上下文设置的元素，或者裁剪的区域，例如文字溢出容器，那么文字单独一个层，滚动条也是单独一个层。`

### 7. 3种内存空间

1. 代码空间
2. 栈: 基本类型， `执行上下文状态，不能太大，太大会影响到上下文切换效率，进而影响程序执行效率`，
3. 堆空间 ：对象的值，`闭包也会创建一个对象，闭包中的变量是放在堆中`

### 8. 变脸提升和块级作用域

块级作用域 依靠的是词法环境， 变量提升依赖变量环境，放在函数上下文中，2者都是存在栈结构中,执行上下文和函数上下文的区别

```
function foo() {
    var test = 1
    let myname= 'LuckyWinty'
    {
        console.log(myname)
        let myname= 'winty'
    }
    console.log(test,'---',myname)
}
foo()

```







