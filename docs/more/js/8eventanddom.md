### 对于事件和dom的知识梳理

1. dom 样式的设置

* setAttribute('style')   ，会整个覆盖掉之前的知识
* style.left    大量写不方便 ，所以最好封装一个函数

2. mouseenter 和 mouseleave

* 实现一个方块随光标移动时需要 把容器设置overflow: hidden 不然 mouseleave 会看不见

3. offsetX

* 点击到子元素上面，如果子元素有定位，那么取的是子元素，不是自己`想要的容易的相对距离`

4. 设置focus

* 一开始设置autofocus 无效，折腾了好一段时间 ，最后解决方法是在dom 加载之后使用focus(), 解决。

5. 使用遮罩来实现目标外的点击

* 创建一层遮罩来实现类似blur 的效果, outside 。