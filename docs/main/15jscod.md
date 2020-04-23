# js 基础代码(面试，平时都可以用):rocket:

## 输出时间差
```
console.time('测试');
console.timeEnd('测试);

//2
performance.mark('start')
setTimeout(()=>{
    performance.mark('end')
    performance.measure('performance cost','start','end')
    console.log(performance.getEntriesByName('performance cost')[0].duration)
},2000)

```
## dom 有意思知识点
创建和插入新元素，删除现有元素以及修改其属性。
```
var newNode=event.target.cloneNode(true);

dom.className='a';

dom.classList.add()/dom.classList.remove()

dom.getAttribute()  dom.setAttribute()

dom.style.borderWidth/['border-width']  包含px  计算后的属性用 getComputedStyle().getPropertyValue()

DOMContentLoaded/onload/

宽高：offsetWidth offsetHeight 必须在dom 有才行，height 、width 不直接设置无法正确获取

dom.outerHTML()

document.createTextNode   document.createComment

console.group('测试1')
cosnole.groupEnd()

dom.children  dom.childNodes 

```

## ajax XMLHttpRequest 和 fetch 

```
    //XMLHttpRequest 原生实现ajax
    function getJSON(url){
        return new Promise((resolve,reject)=>{
            const request=new XMLHttpRequest();
            request.open('GET',url);
            request.onload=function(){
                    if(this.status===200){
                        resolve(JSON.parse(this.response));
                    }
                    else{
                        reject(this.status + '  '+this.statusText);
                    }
            },
            request.onerror=()=>{
                reject(this.status+' '+this.statusText);
            }
            request.send();
        });
    }

    getJSON('./ajaxtest.json').then(res=>{
       alert(JSON.stringify(res));
    }).catch(e=>{
        console.log('异常');
        console.log(e);
    })

    fetch(url,param).then(response=>response.json())
```

## 移动端touch事件监听

touchstart,touchmove,touchend ,有个注意事项，从一个box 滑入另一个box 是，target 是不会改变的，始终是touchstart 元素，解决方案是通过elmentFromPoint


## 如何 访问dom 中的data

```
TMLElement.dataset["arr"] ) 
```

## new 模拟实现

```
  Con = [].shift.call(arguments); arguments 删除第一个同时赋给Con

  var args = Array.prototype.slice.apply(arguments);　
    //方案1
    function create(){
        const  obj=new Object();
        const Constructor=[].shift.call(arguments);
        obj.__proto__=Constructor
        const ret=Constructor.apply(obj,arguments);
        return ret instanceof Object?ret:obj;
    }

    //方案2
    function create(fn,...args){
        const obj=Object.create(fn.prototype)
        const ret=fn.call(obj,...args)
        return ret instanceof Object?ret:obj 
    }

```

## 前端读取图片（todo）

```
```
## Object.defineProperty

Object.defineProperty writable 和 set 不能一起用,可以实现只读属性，configurable，value

```
   Object.defineProperty(obj,'name',{
          // writable:true,
          get:()=>{
            return 'jr'
          }
        })
        console.log(obj.name)
        obj.name=122
        console.log(obj.name)
```

## 学习vue 源码， 总结的一些东西 obj 的工具函数

```
//严格检查
 const _toString=Object.prototype.toString
isPureObject(obj){
    return _toString.call(obj)==='[object Object]'
}

isTrue(obj){
    return obj===true
}

isRegExp(v){
    return _toString.call(v)==='[object RegExp]'
}

isFunction(func){
    return typeof func==='function'
}


!!a   a 为undefined 返回false
isFunction(func){
    return Object.prototype.call(func)==='[object Function]'
}

//对某些数组原型方法做改造，不污染全部数组的原型。
const arrayPro=Array.prototype
var arrMethods=Object.create(arrayPro)

['push'].forEach(method=>{
    arrMethods[method]=function(){
        //避免闭包泄漏
        let i=arguments.length;
        const args=new Array(i)
        while(i--){
            args[i]=arguments[i]
        }
        arrayPro.call(this,args)
        //做些额外的操作
    }
})

// 创建一个{}，原型上没东西的

const c=Object.create(null)

```

## 构造函数是否使用new 来建立的检验，2种方法

```
    Vue(){
        
        if(this instanceof Vue){

        }
        else{
            throw new Error('必须使用new 创建')
        }
        
        //方法2：
        if(new.target===Vue){

        }
        else{
            throw new Error('必须使用new 创建')
        }
    }
```

## 数组语法 this 的指向
[http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84-includes](http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E5%AE%9E%E4%BE%8B%E7%9A%84-includes)

```
//容易影响全局，可以拷贝一份出来用
Array.prototype.unique=function(){
    return [...new Set(this)]
}
```

衍生问题： 将一个嵌套数组扁平化，去重，递增顺序 arr.toString() 也能去扁平化

```
    [...new Set(arr.flat(Infinity))].sort((a,b)=>return a-b)
```

### 判断一个url 是否合法

```
isUrl(url){
    try{
        const item=new URL(url)
        console.log(item)
        return true
    }catch(e){
        return false
    }
}
```

### 基础递归

第 88 题：实现 convert 方法，把原始 list 转换成树形结构，要求尽可能降低时间复杂度

```
    
```

### 模块重定向

[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export)

```
import App from App.vue
export default App 


export * from App.vue （导出所有模块）
export {moduleA as default} from '.../' (重命名为默认模块)
export {default} from App.vue （导出默认模块）
```

### substr 官方建议使用substring（1，n） 替代

### performance 里的数据
 可以获取到DNS 解析时间，TCP 连接时间，首屏渲染时间，dom 完成时间，页面load 完时间
```
    let timing = performance.timing,
    start = timing.navigationStart,
    dnsTime = 0,
    tcpTime = 0,
    firstPaintTime = 0,
    domRenderTime = 0,
    loadTime = 0;

dnsTime = timing.domainLookupEnd - timing.domainLookupStart;
tcpTime = timing.connectEnd - timing.connectStart;
firstPaintTime = timing.responseStart - start;
domRenderTime = timing.domContentLoadedEventEnd - start;
loadTime = timing.loadEventEnd - start;

console.log('DNS解析时间:', dnsTime, 
            '\nTCP建立时间:', tcpTime, 
            '\n首屏时间:', firstPaintTime,
            '\ndom渲染完成时间:', domRenderTime, 
            '\n页面onload时间:', loadTime);

```

### 如何下载流文件

```
  let downloadElement = document.createElement('a')
  let href = blob
  if (typeof blob === 'string') {
    downloadElement.target = '_blank'
  } else {
    href = window.URL.createObjectURL(blob) // 创建下载的链接
  }
  downloadElement.href = href
  downloadElement.download = `${tagFileName}.${fileType}` // 下载后文件名
  document.body.appendChild(downloadElement)
  downloadElement.click() // 点击下载
  document.body.removeChild(downloadElement) // 下载完成移除元素
  if (typeof blob !== 'string') {
    window.URL.revokeObjectURL(href) // 释放掉blob对象
  }
```

### 浏览器全屏或者取消全屏

```
// 全屏
export function fullscreen() {
  let el = document.documentElement
  let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen
  if (typeof rfs !== 'undefined' && rfs) {
    rfs.call(el)
  }
}

// 取消全屏
export function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  }
}
```