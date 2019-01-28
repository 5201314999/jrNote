# 问题集
## 1. vue-router 异步加载导致菜单卡顿问题

使用vue 懒加载，发现路由加载时才会加载相应js， 但是等js 加载完路由才会改变，导致监听路由的菜单出现了上一次active 先展开再收缩的问题。
```
export default {
  path: '/twoLevelPage',
  meta: {
    name: '二级页面'
  },
  component: () => import('@/views/twoLevelPage/Main'),
  children: [
    {
      path: '/',
      redirect: 'banner'
    },
    {
      path: 'banner',
      meta: {
        name: '分类banner'
      },
      component: () => import('@/views/twoLevelPage/Banner'),
      children: [
        {
          path: '/',
          meta:{
            keepAlive:true
          },
          component: () => import('@/views/twoLevelPage/banner/home/Home')
        },
        {
          path: 'create',
          name:'创建推荐海报',
          component: () =>import('@/views/twoLevelPage/banner/create/Create')
        },
        {
          path: 'detail/:id',
          name: 'banner详情',
          component: () =>import('@/views/twoLevelPage/banner/detail/Detail')
        },
        {
          path: 'update/:id',
          name:'修改banner',
          component: () =>import('@/views/twoLevelPage/banner/update/Update')
        }
      ]
    }
  ]
}
```

解决过程：
1.  抖动其实是菜单其他模块先展开在收缩
2.  有可能的地方是最近修改的异步路由
3.  修改进行测试
4.  解决思路 
   -  1 不使用路由懒加载
   -  2 不再使用通过路由来展开菜单的方案，（最终采用）

## 2. vue v-model 组件使用过程

```
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      value(val) {
        this.visible = val;
      }
    },
```
 使用computed 不能再内部更新visible,所以使用watch


 ## 3. vue 组件prop 对象watch 使用过程

options 设置default 为{} 无法监听options
```
       props:{
         options: {
                type: Object,
            }
        },
        watch:{
            options(val){
            }
        },
```

##  4. 写代码方便复制的一些小技巧
 
 代码归类，字段名不使用业务名。
```
 //common
      showCoverImg: false,
      imgShow: "",
      errorImg:`this.src="${G.errorImg}"`,
      
      activePoster:'',
      //table
      keyword:'',
      loading:false,
      sortMark: "",
      pagination: {
        pageNum: 1,
        pageSize: 10
      },
```

## 5. vue 的数组更新监听问题,实践中结合v-model 经常出问题

```
  data:{
    appList:[]
  },
  mounted(){
    this.appList=[{id:1,name:'cc'}];
    //dom 无法监听
    this.appList[0].age=18;
	
	
	this.appList=[];
	this.appList=[{
	name:'1'
	}];
	//界面更新

	this.appList[0].name='2'
	//界面不更新
	
	
	appCollection: {
          apps: []
    },
	appCollection.apps=[{age:1}], 这样才有更新
	
  }
  
  
```

暂时的解决方案是：在数组里一开始就定义一个age.


## 6. iview @change 中文输入法时拼音也会触发请求

一开始想用compositionStart 和 compositionEnd 解决，奈何Input native 监听不到 这2个事件

后面采用了另一种方案，使用定时器限制500ms 没输入才查询，跟防抖动原理一致，代码如下

```
      	this.serachTimeout&&clearTimeout(this.serachTimeout);
				this.serachTimeout=setTimeout(()=>{
					this.$set(this.pagination, 'pageNum', 1);
					this.getData();
				},500);
```

## 7. 关于cjs 与 es 的一点比较

ES模块是官方标准，也是JavaScript语言明确的发展方向，而CommonJS模块是一种特殊的传统格式，在ES模块被提出之前做为暂时的解决方案。 ES模块允许进行静态分析，从而实现像 tree-shaking 的优化，并提供诸如循环引用和动态绑定等高级功能。

## 8. css 有时会造成显示卡顿

使用动画，或者图片懒加载时都遇到过。把样式改好就没问题了。

## 9. 跨域 iframe 的高度自适应问题

业务场景： 所有系统日志页面使用**外链**方式

**好处： 修改日志页面时修改一处地方,所有项目都会得到更新**

>问题：在一级域名一致的情况下，强制将里外的domain 都设为一致， 这样就可以访问到外部的iframe,iframe 使用存在的问题是fixed 不会相对浏览器，内外通信会有问题。

```
                let host = window.location.hostname,
                    hosts = host.split('.');
                hosts.shift();
                document.domain = hosts.join('.');
                this.parentVueObj = window.parent.vueObj;
```

## 10. form 表单最后一行有2列，最后一行不用下边界线

> 问题 form 表单最后一行有2列，最后一行不用下边界线，主要自适应时处理

一开始想用栅格布局写一种，后面发现2种方法，

1. 用了媒体查询

2. js 监听body 变化然后添加class 设置样式。

解决过程中发现debounce 和 throttle 防抖节流插件， 都是基于定时器实现。


## 11. iframe 的使用问题

1 跨域不可通信，除非主域名一致

2 样式问题。 宽高自适应需要手动设置

3 弹框问题，弹框没有办法相对整个屏幕。。


好处，设计得好可以多个地方引用


## 12. Promise.all() 同时等2个axios 完成，貌似时机不完全正确，

对 Object.keys(res) 总是[] ,打印res 结果又是对的，不可思议

校验方法果然很重要，一开始一直在all 那里打，证据不明显，后面 all 和 子 项目都打印，从顺序就看出来了，确实是all 没生效，里面写的没用promise .花了我半个小时


##  13. 下载 excel

平时都是直接get 放在标签或者 window.location.href 里。

如果后台用post 接口 ，返回之后取到对应的编码 然后同上，放进a 标签里。

有一个问题。1 万条数据大概要下载多久。


## 14. 直接在浏览器中运行 import， export

<script type="module"> ,前提需要origin ,直接打开不可以