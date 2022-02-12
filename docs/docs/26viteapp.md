## vite + vue3 + typescript 简单体验

### 写在前面

- 体验时间: 2020/12/4
- 体验通哥的一个后台管理库，简单运用 vue3 app
- 官方文档还没有,百度找到 create-vite-app npm 包快速创建
- vite 的机制是在 dev 不打包，利用浏览器解析 imports ，实现快速构建， 生产使用

### 简单步骤

1. 安装

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
