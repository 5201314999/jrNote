## 原型链重点
### 前言
学习原型之前，先得学习函数，this（函数上下文）,闭包（词法环境、执行上下文）等基础知识，原型是基于对象的，为了让js 也有类的继承风格。在此强推javascript忍者秘籍和javascript 高及程序设计。
### 基本关系图
![Image text](https://github.com/5201314999/jrNote/blob/master/docs/.vuepress/public/more/js/prototype3.png?raw=true)

### 正文

1. 关于原型api
```
    person.__proto__===Person.prototype
    Object.getPrototypeOf(person)===Person.prototype
    Object.setPrototypeOf(B,a)
    Person.prototype.constructor === Person 
    person.constructor=== Person
    
```
 `注意1`：函数的原型可以被任意替换，已经构建的实例引用旧的原型

2. 原型链继承

原型对象也有自己的原型，直到对象的原型为 null 为止（也就是没有原型）。这种一级一级的链结构就称为原型链。原型继承的模型就是JavaScript实现继承的原理。真正形成原型链的是每个对象的__proto__属性，而不是函数的prototype属性，这是很重要的。

- 说明：
``` 
    function Person(){}
    function Adult(){}
    Adult.prototype=new Person();
    adult=new Adult();
    adult instanceOf Person; （判断Person 是不是在adult 原型链上。）
    Person.prototype.isPrototypeOf(adult)   （判断Person 是不是在adult 原型链上。）
```
`注意2:`如Ninja.prototype = Person.prototype。这样做会导致在Person原型上所发生的所有变化都被同步到Ninja原型上（Person原型与Ninja原型是同一个对象），一定会有不良的副作用。new 不会的原因见`注意1`

- 组合方式（借助调用父类函数和原型链） 
    
    - 1. 解决Parent 数组上的有问题，因为`注意1`,有引用类型的问题
    - 2. 可以传参调用父类参数
    - 问题：会调用2次父类
```
    function Parent() {
      this.name = 'parent';
      this.books=[1,2];
    }
    
    function Child() {
      Parent.apply(this);  //解决books数组修改会影响所有生成对象的问题，也可解决Object.create 访问不到parent 函数的books 问题，同时可以实现传参给父函数,相当于super()
    }
    // 1
    Child.prototype=new Parent();
    Child.prototype.constructor=Child;

    // 2
    Child.prototype=Object.create(Parent);
    Child.prototype.constructor=Child;

    const a=new Child();  
    const b=new Child();
    
```

疑惑点：new Parent 存在什么问题呢。 
答案：books数组修改会影响所有生成对象

### 理解测试题

1. 原型链的顶端？ Object.prototype 
2. Array.prototye 和 Array.__proto__ 有什么区别？
3. 
    var a={name:11};
    Object.setPrototypeOf(a,null)
    console.log(a.toString())