# 高频css 记录

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

 
出了高新兴大门后使用频率超高，一般使用基础即可,目前已基本掌握  //记忆性内容

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


