# 问题集
## 1 vue-router 异步加载导致菜单卡顿问题

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

## vue v-model 组件使用过程

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


 ## vue 组件prop 对象watch 使用过程

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

##  写代码方便复制的一些小技巧
 
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
### vue 的数组更新监听问题,实践中结合v-model 经常出问题

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


### iview @change 中文输入法时拼音也会触发请求

一开始想用compositionStart 和 compositionEnd 解决，奈何Input native 监听不到 这2个事件

后面采用了另一种方案，使用定时器限制500ms 没输入才查询，跟防抖动原理一致，代码如下

```
      	this.serachTimeout&&clearTimeout(this.serachTimeout);
				this.serachTimeout=setTimeout(()=>{
					this.$set(this.pagination, 'pageNum', 1);
					this.getData();
				},500);
```


