# 数组的基本api

## 写在前面

写代码这么久以来一直发现自己总有些基础知识记不住，老了老了，记性不行就只能靠笔记了。本篇主要想记录自己经常性记不清的一些语法

## 正文

### 1 sort includes flat

* 如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
* 如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
* 如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。

```
  this.regionRenderData.sort((aObj,bObj)=>{
                    if(aObj[value+'Count']<bObj[value+'Count']){
                        return 1;
                    }
                    else if(aObj[value+'Count']===bObj[value+'Count']){
                        return 0;
                    }
                    else{
                        return -1;
                    }
                });

     //只是比较简单值的话，简写方法
     this.regionRenderData.sort((aObj,bObj)=>{
                    return aObj[value+'Count']-bObj[value+'Count']
                });
```

### 2. 伪数组

伪数组对象（拥有一个 length 属性和若干索引属性的任意对象）

可迭代对象（可以获取对象中的元素,如 Map和 Set 等）

Array.from() 可以将伪数组转成真数组。

**备注:** 也可以使用扩展运算符 [...arr]


### 3. 怎么判断是一个是数组

     Array.isArray(arr)
     Object.prototype.toString.call(arr)==='[object Array]'
     arr instanceof Array


### 4. 数组扁平化

```
  function flatten(arr){
            while(arr.some(item=>Array.isArray(item))){
                console.log(...arr)
                arr=[].concat(...arr)    //[].concat(1,2,[3,4])  [1,2,3,4]
            }
            return arr
        }       
```