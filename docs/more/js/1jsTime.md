# js 基础系列 - [时间格式化]

js 时间格式化在项目中使用频率非常高，平时基本都是直接拿来主义，直接使用别人的方法或者封装的库，最近公司事情不多，决定学习并总结一下原生的实现。

# Date 常用词语

|    名称   |       含义       | 
|:-------:|:-------: | 
|   1970年1月1日  |     世界标准时间    |  
|   UTC | 世界协调时|


## Date 完整api

[mdn Date api](https://developer.mozilla.org/en*US/docs/Web/JavaScript/Reference/Global_Objects/Date)

## 个人常用Date

* new Date()  
> 参数接收多种多样, 日期字符串， 毫秒 

```
    var today = new Date();
    var today = new Date(1453094034000); // by timestamp(accurate to the milliseconds)
    var birthday = new Date('December 17, 1995 03:24:00');
    var birthday = new Date('1995-12-17T03:24:00');
    var birthday = new Date(1995, 11, 17);
    var birthday = new Date(1995, 11, 17, 3, 24, 0);
    
    var unixTimestamp = Date.now(); // in milliseconds
```
* Date.now() 
> 返回毫秒

* Date.parse() 
> 参数某个日期字符串，返回毫秒

```
var unixTimeZero = Date.parse('01 Jan 1970 00:00:00 GMT');
var javaScriptRelease = Date.parse('04 Dec 1995 00:12:00 GMT');

console.log(unixTimeZero);
// expected output: 0

console.log(javaScriptRelease);
// expected output: 818035920000

```
* Date.prototype.getTime()
> 返回毫秒

* Date.prototype.valueOf()
> 与 getTime（） 功能一致

* Date.toUTCString()

> 日期转为字符串，个人比较少用

* Date.UTC()
> 返回毫秒 接受6位参数 year month date h m s ms

```
var event = new Date('14 Jun 2017 00:00:00 PDT');

console.log(event.toUTCString());
// expected output: Wed, 14 Jun 2017 07:00:00 GMT
```


## Date 格式化

1 日期格式化 

```

```