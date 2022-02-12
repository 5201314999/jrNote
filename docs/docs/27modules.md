## 模块化的简单介绍

### 模块化与组件化的概念

### 基于es5 的模块化写法

1. 对象写法
```
　　var module1 = new Object({

　　　　_count : 0,

　　　　m1 : function (){
　　　　　　//...
　　　　},

　　　　m2 : function (){
　　　　　　//...
　　　　}

　　})

```

2. 立即执行函数写法

```
　　var module1 = (function(){

　　　　var _count = 0;

　　　　var m1 = function(){
　　　　　　//...
　　　　};

　　　　var m2 = function(){
　　　　　　//...
　　　　};

　　　　return {
　　　　　　m1 : m1,
　　　　　　m2 : m2
　　　　};

　　})();

```

3. 宽放大模式 (便于继承)

```
    var module1 = ( function (mod){

　　　　return mod;

　　})(window.module1 || {});

```

### 几种模块化介绍

Commonjs , AMD和CMD, ESModule

Commonjs , AMD和CMD 都是折中方案


### 

