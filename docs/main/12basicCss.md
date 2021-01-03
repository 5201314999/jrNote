# mycss note

## 断句换行

```
.p1{ word-break:break-all; width:150px;}/*只对英文起作用，以字母作为换行依据*/

.p2{ word-wrap:break-word; width:150px;}/*--只对英文起作用，以单词作为换行依据*/

.p3{white-space:pre-wrap; width:150px;}/*只对中文起作用，强制换行*/

.p4{white-space:nowrap; width:10px;}/*强制不换行，都起作用*/

.p5{white-space:nowrap; overflow:hidden; text-overflow:ellipsis; width:100px;}／/*不换行，超出部分隐藏且以省略号形式出现*/

1. word-break:break-all;只对英文起作用，以字母作为换行依据

2. word-wrap:break-word; 只对英文起作用，以单词作为换行依据

3.{white-space:pre-wrap; 只对中文起作用，强制换行

4.{white-space:nowrap; 强制不换行，都起作用

5.{white-space:nowrap; overflow:hidden; text-overflow:ellipsis;不换行，超出部分隐藏且以省略号形式出现

```

## flex 语法

出了高新兴大门后使用频率超高，一般使用基础即可,目前掌握  //记忆性内容

```
display:flex;
flex-flow:column wrap;
flex-basis: 

```

## 图片限制最大宽度，高度不超过64px,保持比例

```

max-width:64px;
max-height:64px;

```

## 布局
布局的传统解决方案，基于盒状模型，依赖 display属性 + position属性 + float属性


## css3字体的引入

```
@font-face{
    font-family: 'iconfont';
    src:url('./font/iconfont.eot') format('eot');
    font-weight:600;
    font-style:normal;
}

body{
    font-family: 'iconfont';
    font-size:20px;

    /* background:url('../images/loading.png'); */
}
```

## 实现宽度最大不超过98% && 最大不超过500px

```
   width:500px;
   max-width:98%; 
```

## css 动画实现

transform  / transilation / amination


## 文字2端对齐

text-align-last: justify;

## 设flex：1 flex:2 放大幅度不一样


## 设置flex 基本都是容器固定，不是内容物来撑开。

## 设置背景图片

background 复合写法

background : background-color background-image background-repeat background-attachment background-position;

## not 选择器

> :not(:first-child)

## ul,div 存在空隙

>ul font-size:0;

## scale 不影响大小，但是 border 会影响布局，可以换成用阴影


## 媒体查询

```
  //窄屏幕媒体查询
  @media screen and (max-aspect-ratio:1/1) {
      
  }
```

## 修改样式

style={
  left:
  top:
}
无效

setAttribute:

style.left 可以

## 实际开发动画效果积累，可以让页面美观的那种

暂无

## line-height：2  line-height:200% 区别

2 是相对与自身高度 height*2   200% 是相对自身 font-size*2

## grid 基本用法

```
.wrapper {
    display: grid;
    grid-template-columns: 100px 400px 100px;
    grid-template-rows: 100px 500px 100px;
    grid-template-columns:repeat(3,33.3%); 
    grid-column-gap:30px;
    grid-row-gap:30px;
    grid-auto-flow: column;
}
.wrapper>div{
    border:1px solid#8bc34a;
}
```


## flex:1 ,文本把容器挤出了视图

设置width：0；
```
 .score_content{
                flex:1 1 auto;
                margin-left:40rpx;
                width:0;
                .desc{
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        
```

## iphonex 网页底部安全适配

```
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);

```

## 图片裁剪加旋转动画实现loading

```
.md_loading_icon {
    position: absolute;
    width: 24px;
    height: 24px;
    border: 2px solid #fff;
    border-radius: 24px;
    animation: gif 1s infinite linear;
    clip: rect(0 auto 12px 0);
    border-color: #237FE5;
  }

```

