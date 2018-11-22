# js 基础系列 - [时间格式化]

js 时间格式化在项目中使用频率非常高，平时基本都是直接拿来主义，最近公司事情不多，决定学习并总结一下原生的实现。

# Date 常用词语

1970年1月1日 00：00：00 122  计算时间

## Date 完整api

[mdn Date api](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

## 个人常用Date

  
- new Date()  

- Date.now() 
> 返回毫秒

- Date.parse() 
> 参数某个日期字符串，返回毫秒

```
var unixTimeZero = Date.parse('01 Jan 1970 00:00:00 GMT');
var javaScriptRelease = Date.parse('04 Dec 1995 00:12:00 GMT');

console.log(unixTimeZero);
// expected output: 0

console.log(javaScriptRelease);
// expected output: 818035920000

```
- Date.prototype.getTime()
> 返回毫秒

- Date.prototype.valueOf()

- Date.toUTCString()

> 日期转为字符串，个人比较少用

```
var event = new Date('14 Jun 2017 00:00:00 PDT');

console.log(event.toUTCString());
// expected output: Wed, 14 Jun 2017 07:00:00 GMT
```


## Date 常用功能

1 日期格式化 