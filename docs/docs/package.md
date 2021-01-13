# 收集npm的一些知识

## npm link 经典命令

根据package.json 的配置, 把npm 源码文件夹放到全局node moudules(实际是一个快捷方式), 方便其他项目（或者命令行，如果是一个脚手架的话）测试npm 包的功能，源码修改时不用重新打包上传，可直接测试代码修改后的效果。

## package.json 里的特殊配置

* 一个node 模块项目的描述文件，支持手工或者使用npm init命令生成该文件
```sh
    name      - 项目名
    version   - 版本号
    author    - 作者
    description  - 描述
    contributor  - 其他贡献人员
    repository   - 源码地址
    dependencies/devDependencies       - 生产/dev 环境需要的依赖  latest 1.2.3   ~1.2.3   ^1.2.3(大版本1不改,0的话等同~)
    scripts   - 指定了运行脚本命令的npm命令行缩写
    main      - 字段指定了加载的入口文件，require('moduleName')就会加载这个文件。这个字段的默认值是模块根目录下面的index.js。
    bin       - 用来指定各个内部命令对应的可执行文件的位置
    config    - 添加命令行的环境变量（一些内部命令可以访问 process.env.npm_package_config_port ,注意拼接，感觉没自己声明文件好用。。）
    engines   - 平台环境
    { "engines" : { "node" : ">=0.10.3 <0.12" } }
    browser   - 浏览器平台，浏览器打包平台用到browserify
```

具体可参考 [https://javascript.ruanyifeng.com/nodejs/packagejson.html#toc6](https://javascript.ruanyifeng.com/nodejs/packagejson.html#toc6)
* 附上一个实际配置参考

```
{
  "name": "xcli",
  "version": "0.0.1",
  "description": "XCli [ X Command Line Interface ] \nFront-end automation build tool integration",
  "main": "cli.js",
  "author": "YiJun",
  "license": "MIT",
  "bin": {
    "xcli": "cli.js"
  },
  "engines": {
    "node": ">=10.0.0",
    "npm": ">=6.0.0"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/cubec-xcli/xcli.git"
  },
  "dependencies": {
    "ax-struct-js": "^5.0.0",
    "axios": "^0.19.2",
    "browser-sync": "^2.26.7",
    "colors": "^1.4.0",
    "commander": "^4.1.1",
    "compare-versions": "^3.5.1",
    "date-fns": "^2.9.0",
    "download-git-repo": "^3.0.2",
    "enquirer": "^2.3.4",
    "eslint": "^6.8.0",
    "fs-extra": "^8.1.0",
    "glob": "^7.1.6",
    "http-proxy-middleware": "^0.20.0",
    "ip": "^1.1.5",
    "jest": "^25.1.0",
    "jest-cli": "^25.1.0",
    "lodash": "^4.17.15",
    "marked": "^0.8.0",
    "marked-terminal": "^4.0.0",
    "open": "^7.0.2",
    "ora": "^4.0.3",
    "semver": "^7.1.2",
    "simple-git": "^1.131.0",
    "stylelint": "^13.0.0"
  }
}
```












