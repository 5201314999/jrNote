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
* 理想视口：缩放系数 = 理想视口宽度 / 视觉视口宽度


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

1. rem 方案

设计稿750px , 假设html font-size 为100px， 设置布局视口为理想视口， 把所有单位转成rem 
document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5

2. 加强版rem 方案