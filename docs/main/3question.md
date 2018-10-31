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
4.  解决思路，不再监听路由来激活菜单，