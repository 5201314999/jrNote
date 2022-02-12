## m-cli

1. 抽离gulp，在开发环节，这些工作webpack 都能做到 

2. 抽离页面片（感觉不需要，直接注入吧）页面片的母的是保证名称不变，但是webpack 也可以直接写死（会有缓存），页面片php 可以使用，html 无法使用

3. cdn 是否处理得更好用些

4. 是否分离开发机接口以及非开发机接口

5. 部署，好像也用不到。。

6. 移动端 css 的适配，现在的写法多样，复用样式很麻烦

7. 关于cookies 的处理 ,  在proxy代理服务器返回后 onProxyRes  修改cookie的domain为localhost 感觉, 防止后端种到服务器自己的域名上面

8. 是否还是现在的模式，大项目里套着子模块项目。而不是传统的建立一个与cli 分离的独立项目

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

5. 目前按需加载文件存在问题，应该是跟打包写死了文件名字的有关。 


6. ssr 服务渲染

7. yapi 的
