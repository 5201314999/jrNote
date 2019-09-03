# 中级知识篇

## 总纲一
1. 防抖与节流 (普通版已get) 
2. 数组去重 (掌握3种，普通,排序后比较相邻数组，借用对象的key 值,map，set)
3. 对象，构造函数 原型，原型链 ,this 的理解(函数上下文)，词法环境，执行上下文
    this 有5种绑定情景，跟函数调用方式有关 （get）
    原型链（以为看懂了，测试中啪啪打脸了）
4. BFC (Block formatting context) 基本概念功能 get ，实践中外边距重叠有时有些疑问
   浮动元素和绝对定位元素，非块级盒子的块级容器（例如 inline-blocks, table-cells, 和 table-captions），以及overflow值不为“visiable”的块级盒子，都会为他们的内容创建新的BFC（块级格式上下文）。
5. 常用算法题 
    * 十大排序算法
    *   
    *   
    *   
6. 执行上下文（变量多次赋值的时候理解较难,词法环境较容易）
   ### 理解js 引擎内部如何执行代码，有助于理解其他概念，变量提升函数提升，闭包 函数执行完，返回的函数还能访问到外部变量
   * 执行上下文是代码被解析和执行时所在环境的抽象概念。
   * 分为3种 ，全局执行上下文，函数执行上下文，eval执行上下文
   * 执行栈
   * 创建阶段和执行阶段
   * 词法环境：词法环境是一个包含标识符变量映射的结构（变量、函数名称）
   * 词法环境/变量环境demo：
   ```
    let a = 20;  
    const b = 30;  
    var c;

    function multiply(e, f) {  
    var g = 20;  
    return e * f * g;  
    }

    c = multiply(20, 30);
   ```
   对应的执行上下文(伪代码)：
   ```
    GlobalExectionContext = {
        ThisBinding: <Global Object>,
        LexicalEnvironment: {  
            EnvironmentRecord: {
                Type: "Object",  
                // 标识符绑定在这里  
                a: < uninitialized >,  
                b: < uninitialized >,  
                multiply: < func >  
            }  
            outer: <null>  
        },
        VariableEnvironment: {  
            EnvironmentRecord: {  
            Type: "Object",  
            // 标识符绑定在这里  
            c: undefined,  
            }  
            outer: <null>  
        }
    }

    FunctionExectionContext = {  
        ThisBinding: <Global Object>, 
        LexicalEnvironment: {   //词法环境
            EnvironmentRecord: {  
            Type: "Declarative",  
            // 标识符绑定在这里  
            Arguments: {0: 20, 1: 30, length: 2},  
            },  
            outer: <GlobalLexicalEnvironment>  
        },

        VariableEnvironment: {  //变量环境
            EnvironmentRecord: {  
                Type: "Declarative",  
                // 标识符绑定在这里  
                g: undefined  
            },  
            outer: <GlobalLexicalEnvironment>  
        }  
    }
   ```
   参考教程：https://juejin.im/post/5bdfd3e151882516c6432c32#heading-5

7 内存空间存储

### 基本用栈，引用用堆，闭包数据存在堆中。

```
const a={
    n:1
}
const b=a
a.x=a=a{n:2}

a.x  // undefined
b.x  // {n:2}
```
undefined 与 null 区别 

### 常见的内存泄漏
