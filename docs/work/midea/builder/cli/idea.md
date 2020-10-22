## m-cli

1. 抽离gulp，在开发环节，这些工作webpack 都能做到

2. 抽离页面片（感觉不需要，直接注入吧）页面片的母的是保证名称不变，但是webpack 也可以直接写死（会有缓存）

3. 集成cdn？

4. 是否分离开发机接口以及非开发机接口

5. 部署，好像也用不到。。


6. 移动端 css 的适配，现在的写法多样，复用样式很麻烦

```
  let h;
    let docEl = document.documentElement;
    let win = window;
    function setUnitA() {
        let win_width = docEl.getBoundingClientRect().width;
        //适配屏幕范围为375~414，适配全尺寸需注释掉下面两行
        win_width = win_width > 640 ? 640 : win_width;
        win_width = win_width < 320 ? 320 : win_width;
        win.rem = win_width / 20; //设置为20主要是为了方便计算()
        docEl.style.fontSize = win.rem + "px";
        // console.log(win_width);
    }
    win.addEventListener(
        "pageshow",
        function (e) {
            if (e.persisted) {
                clearTimeout(h);
                h = setTimeout(setUnitA, 300);
            }
        },
        false
    );
    window.addEventListener(
        "resize",
        function (e) {
            setTimeout(setUnitA, 300);
            //这要重新计算fontsize的值
        },
        false
    );
    setUnitA();

```

5. 目前不允许路由懒加载？？


