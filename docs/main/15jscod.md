# js 常用代码基本笔记(面试，平时都可以用):rocket:

## 输出时间差
```
console.log('测试');
console.timeEnd('测试);
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

## ajax XMLHttpRequest 

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

    function create(){
        const  obj=new Object();
        const Constructor=[].shift.call(arguments);
        obj.__proto__=Constructor
        const ret=Constructor.apply(obj,arguments);
        return ret instanceof Object?ret:obj;
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

## 数组语法 this 的使用 
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


