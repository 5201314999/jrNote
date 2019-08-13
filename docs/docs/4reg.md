## 正则表达式

### 基本语法
* /w 字母  /g 全局 /i 不区分大小写
* i 大小写不敏感  g 全局  m多行匹配 y开启粘连匹配 \u{} 点转义
* new RegExp()  
* var reg=;
* 字符集 [abc] 任意一个 [^abc] 除指定的之外 [a-m] a 到m 
* 字符集 a{4-10} 4-10个a  a{4-}
* 转义字符 \] \\ \. \[
* ? 0或1    `+` 1+  * 0+  
* 最好用小括号分组，解决了多年疑问`默认贪婪模式，在运算符后添加?，例如a+?，使得运算符为非贪婪模式，只进行最小限度的匹配。`
* 预定义字符集 \d [0-9] \D [^0-9] \w[A-Za-z0-9_] \W[^A-Za-z0-9_] \s (空白字符) \S(非空白字符) . 除换行字符之外的所有字符
* 反向引用,需要和分组() 一起配合使用 \1 引用第一个括号 \2引用第2个括号
* `圆括号`具有创建捕获的功能，match 时返回捕获数组 /g 返回所有捕获的， 否则只返回一个位于[1]
* 验证reg.test()   查找 match()     替换 replace()

### 实战演练
1. 获取get 请求参数
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
2. 匹配图片

```
/\.(jpe?g|png|gif|svg)$/i
```

3. 匹配 99999-9999

```
const reg=/^\d{5}-\d{4}$/;
reg.test('9999-4444');
```

4. 邮箱(感觉不实用，还有其他原则)

```
/^\w+@(\w)+\.(\w)+$/
```
5. uri

```

```

6. 反向引用

```
/<(\w+>)\w*<\/\1/  匹配dom 标签
```
7. 捕获
```
let val="translateY(15px)"
val.match(/translateY\(([^\)]+)\)/)
match[0] match[1]
```

8.驼峰转 -

``` 
replace(/([A-Z])/g,'-$1').toLowerCase();
```
9.请写一个正则，去除掉html标签字符串里的所有属性，并保留src和href两种属性(难题)
```

```
### 参考资料

* [MDN 正则表达式语法参考教程](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)

* javascript 忍者秘籍 正则表达式一章