# 原型链重点

## 基本关系图
![Image text](https://github.com/5201314999/jrNote/blob/master/docs/.vuepress/public/more/js/prototype3.png?raw=true)

## 正文

1. 关于原型api
```
    person.__proto__===Person.prototype

    Object.getPrototypeOf(person)===Person.prototype

    Person.prototype.constructor === Person 

   
    person.constructor=== Person
    
```
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

- 组合方式（借助调用父类函数和原型链） 
    
    - 1. 解决原型上有引用类型的问题
    - 2. 可以传参调用父类参数
    - 问题：会调用2次父类
```
function Parent() {
      this.name = 'parent';
      this.books=[1,2];
    }
    
    function Child() {
      Parent.apply(this);
    }
    // 1
    Child.prototype=new Parent();
    Child.prototype.constructor=Child;

    // 2
    Child.prototype=Object.create(Parent);

    const a=new Child();  
    const b=new Child();
    
```

疑惑点：new Parent 存在什么问题呢。

### 理解测试题

1. 原型链的顶端？ Object.prototype 
2. Array.prototye 和 Array.__proto__ 有什么区别？