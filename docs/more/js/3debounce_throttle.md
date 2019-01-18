# 防抖和节流的学习


# 1 防抖

防抖的原理就是：你尽管触发事件，但是我一定在事件触发结束后 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行，总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行，真是任性呐!

```
function debounce(fn,delay){
    let timeout;
    let context=this;
    return (...args)=>{
        clearTimeout(timeout);
        setTimeout(()=>{
            fn.apply(context,args);
        },delay)
    }
}

```

# 2 节流

节流的原理很简单：

如果你持续触发事件，每隔一段时间，只执行一次事件。

根据首次是否执行以及结束后是否执行，效果有所不同，实现的方式也有所不同。
我们用 leading 代表首次是否执行，trailing 代表结束后是否再执行一次。

关于节流的实现

实践过程中为了传参进去写了4个小时，fuck...
使用闭包的原因是为了共用一个timeout ，throttle 的作用是返回一个新的回调函数。
 ```
 function throttle(fn, delay) {
            let lastDate = 0, timeout;
            let context = this;
            // console.log(context);
            return (...args)=> {
                console.log(args);
                let nowDate = + new Date();
                if (nowDate - lastDate >= delay) {
                    lastDate = nowDate;
                    fn.apply(context,args);
                }
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    fn.appl(context,args);
                }, delay);
            }
        }
        let obj = {
            funA: function () {
                let funB=throttle((event,a)=>{
                    console.log(a);
                    console.log('借宿');
                },2000);
                document.getElementById('test').addEventListener('mousemove',function(){
                    funB(event,'222');
                });
                
            }
        }
        obj.funA();
```
