# 正则表达式积累

1
 /w 字母  /g 全局 /i 不区分大小写

## 使用案例
### 获取get 请求参数
```
 function getQueryParam(url,name){
    // const reg = new RegExp('(^[\?|&])?' + name + '=(&|$)+', 'i');
    const reg = new RegExp("[^\?&]?" + name+ "=[^&]+",'i');
    arr = url.match(reg);
    if (arr != null) {
        console.log(arr[0].split('=')[1]);
    }
}
```

### 匹配图片

/\.(jpe?g|png|gif|svg)$/i

[MDN 正则表达式参考教程](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)