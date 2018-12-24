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

* Date.prototype.toLocaleString()
> 结合使用的语言返回字符串

```
var event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));
// expected output: 20/12/2012, 03:00:00

// Korean uses year-month-day order and 12-hour time with AM/PM
console.log(event.toLocaleString('ko-KR', { timeZone: 'UTC' }));
// expected output: 2012. 12. 20. 오전 3:00:00
```
* Date.prototype.setDate()

设置当月第几天
**如果 dayValue 超出了月份的合理范围，setDate 将会相应地更新 Date 对象**。例如，如果为 dayValue 指定0，那么日期就会被设置为上个月的最后一天。

* Date.prototype.getDate()

获取当月的第几天

* Date.getDay()

返回周几 ，数字

* Date.getMonth()

`0 起始，所以要加1`

## Date 格式化

1 日期格式化,ge

```
//不支持12小时制，不过用了正则表达式
function dateFtt(fmt,date)   
{ //author: meizz   
  var o = {   
    "M+" : date.getMonth()+1,                 //月份   
    "d+" : date.getDate(),                    //日   
    "h+" : date.getHours(),                   //小时   
    "m+" : date.getMinutes(),                 //分   
    "s+" : date.getSeconds(),                 //秒   
    "q+" : Math.floor((date.getMonth()+3)/3), //季度   
    "S"  : date.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}

```

2 获取周一的日期

```
// 获取今天之前最近星期一的日期,字符串
const getMondayDate = () => {
  const date = new Date()
  date.setDate(date.getDate() - (date.getDay() - 1))
  const y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()
  m < 10 && (m = '0' + m)
  d < 10 && (d = '0' + d)
  return y + '-' + m + '-' + d
}

```

时间撮：

# 获取时间撮
+new Date()