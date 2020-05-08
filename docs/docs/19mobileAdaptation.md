## 移动端适配方案记录

## 专有名词
* meta 元属性，用于浏览器解析
* 屏幕尺寸：5.2in  对角线
* 分辨率：1334pt x 750pt 指的是屏幕上垂直有1334个物理像素，水平有750个物理像素。
* 屏幕像素密度：ppi=dpi 每英寸像素数
* 设备独立像素: px （虚拟）
* dpr  设备像素比 devicePixelRatio 
* 布局视口：移动端一般大于实际的浏览器宽度，例如980px `注意`：缩放不影响大小,只是影响视觉视口 window.documentElement.clientWidth
* 视觉视口：对于视觉视口来说，这个东西是呈现给用户的，它是用户看到网页区域内CSS像素的数量。 window.innerWidth
* 理想视口：缩放系数 = 理想视口宽度(window.screen.width) / 视觉视口宽度


## 不懂问题（以后再说）
1. dpr 是不变的，屏幕物理像素也是不变的。那么缩小时怎么容纳更多css 像素，丢了一半css 像素去绘制吗,同理pc 端的缩放绘制

2. nitial-scale 设置0.5 html 宽度变成750 ，html 是布局视口，理论上不会改变才对，改的是视觉视口呀，设为2 html=375 是不是chrome 跟真机不太一样 

## 导致的问题

1. 图片问题
    * dpr =1  100px*100px  放100*100图片   
    * dpr =2  100px*100px  放200*200图片

2. 1px 问题

原因：设计师基于750设置的，在375 设置就是0.5px 有些浏览器不支持0.5px 
解决方法：
    1.用小数来写px值加-webkit-min-device-pixel-ratio 
    2. 伪类加transform
    ```
  .border-1px {
        position: relative;
        border:none;
      }
      .border-1px::after {
        content: "";
        pointer-events:none;
        box-sizing: border-box;
        position: absolute;
        width: 200%;
        height: 200%;
        left: 0;
        top: 0;
        border-radius: 8px;
        border:1px solid #999;
        -webkit-transform-origin:0 0;
        transform:scale(0.5);
        transform-origin: 0 0;
      }
    ```
    3. box-shadow
    ```
    .box-shadow-1px {
       box-shadow: 0px 0px 1px -1px black;
    }
    ```

## 业界方案
1. viewport 方案（理论，不可用于生产，直接缩放让视觉视口为布局视口）
2. 简单 rem 方案

>设计稿750px , 假设html font-size 为100px， 设置布局视口为理想视口， 把所有单位转成rem 
document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5

3. 加强版rem 方案（flexible 方案）
>[flexible 方案](https://github.com/amfe/article/issues/17)

```
vue 配置操作流程：

 yarn add lib-flexible
 yarn add -D  px2rem-loader

  {
    loader: 'px2rem-loader',
    options: {
      remUnit: 75 // 设计稿的宽度/10
    }
  },
```

4. vw,vh 未来标准，兼容性存在问题



5. pc 端常见自适应方案

1. 定宽

1.京东（width:1190px min-width:990px） 在html 加了很多个 全局class命名空间

2. 媒体查询+定宽

天猫 @media (max-width: 1260px) 不出现滚动条


3. 画板自适应,响应式工具栏（成熟方案都是分开支持多端）

按钮10个的情况下  只能考虑响应式布局  加 rem/px 字体 rem 要自己实践。


加vw,vh容器大小配置 ,rem +响应式牛比


最终

（1）awwapp :

 px + media （一个文件，写了2套布局 临界点：（max-width 29.3em，min-width:30em） 

总结： 基本多端都能正常使用。缺点：不完美，问题在于：浏览器过度放小宽度或者高度，手机横屏的情况下 ，纵向工具条显示不全

（2）小画桌

pc: px+ media 同上  临界点：（max-width: 1366px）滚动条变纵向  效果: pc 纵轴缩放太小可能溢出 

移动端： px ：另一套布局 ，工具条容器限制高度，添加滚动条 

平板: mp 站，内容实际还是获取pc内容


我方：


pc+平板: px+media 上横条可以调整布局，下部分工具条 放右边(弹窗要开发)。 

手机：暂不考虑




