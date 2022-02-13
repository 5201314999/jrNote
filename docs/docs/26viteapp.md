## vite + vue3 + typescript 简单体验

### 写在前面

- 体验时间: 2020/12/4，更改时间 2022/02/12（复习）
- 体验通哥的一个后台管理库，简单运用 vue3 app （没有完成）
- 官方文档还没有,百度找到 create-vite-app npm 包快速创建，更新笔记时，已经有文档
- vite 的机制是在 dev 不打包，利用浏览器解析 imports ，实现快速构建， 生产使用 rollup 构建

### 特点

- vue3 组合式 api/ script setup 语法糖
- vite 提高启动速度， 提高热更新速度（用 esbuild 预构建）

### 简单步骤

1. 安装 (现在可以一步到位)

```npm
$ npm init vite-app <project-name>
$ cd <project-name>
$ npm install
$ npm run dev
```

```yarn
$ yarn create vite-app <project-name>
$ cd <project-name>
$ yarn
$ yarn dev

```

```pnpm
  查看官网文档
```

2. 创建的 vue 目录结构相对简单

```
├─.gitignore
├─index.html
├─package.json
├─src
|  ├─App.vue
|  ├─index.css
|  ├─main.js
|  ├─components
|  |     └HelloWorld.vue
|  ├─assets
|  |   └logo.png
├─public
|   └favicon.ico

```

3. 运行 npm run dev, 然后在浏览器打开 http://localhost:3000/

4. vuex ts 简单使用，（还没用到辅助函数 mapState, mapGetters, mapMutations, mapActions ,模块化 的 ts 使用)

- 安装

  ```
  npm i -S vuex@next
  ```

- ts 支持，声明文件来声明 Vue 的自定义类型 vuex.d.ts

- store.ts 写法

  ```store.ts
  import { InjectionKey } from 'vue'
  import { createStore, useStore as baseUseStore, Store } from 'vuex'

  export interface State {
  count: number
  }

  export const key: InjectionKey<Store<State>> = Symbol()

  export const store = createStore<State>({
  state: {
      count: 0
  }
  })

  // 定义自己的 `useStore` 组合式函数
  export function useStore () {
  return baseUseStore(key)
  }
  ```

- 挂载

  ```
  import { store, key } from './store'

  import App from './App.vue'

  const app = createApp(App)

  app.use(ElementPlus)
  app.use(store, key)
  app.mount('#app')

  ```

- 组件内使用

  ```
  import { useStore } from './store';

  const store =  useStore()
  const loginState =  ref(store.state.loginState)
  console.log('store 对象:', store)
  store.commit('changeLoginState', !loginState.value)
  console.log(store.getters.getLoginState)

  ```

5. vue-router

- 安装

```

```

- 初始化（与 vue2 有些许不同，总体类似）

```
import { createRouter } from 'vue-router'

const router = createRouter({
  // ...
})

```
