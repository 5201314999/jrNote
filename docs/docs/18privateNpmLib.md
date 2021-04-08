# 在 5 分钟内搭建企业内部私有 npm 仓库 😄

---

下面通过三种方法来搭建公司私有 npm 仓库，每种方式都有自己的优势。

> Node.js >= 6.11.3，我的 Node 版本：node v8.2.1  
> Linux or OSX，我的系统版本：CentOS Linux release 7.2.1511 (Core)

# 目录

<!-- TOC -->

-   [cnpm 搭建](#cnpm搭建)
    -   [安装](#安装)
    -   [启动并配置服务](#启动并配置服务)
    -   [设置注册地址](#设置注册地址)
    -   [登录 cnpm](#登录cnpm)
    -   [包上传到私有仓库](#包上传到私有仓库)
    -   [查看预览包](#查看预览包)
    -   [安装](#安装-1)
-   [通过 verdaccio 搭建](#通过verdaccio搭建)
    -   [安装](#安装-2)
    -   [启动服务](#启动服务)
    -   [添加用户/登录](#添加用户登录)
    -   [上传私有包](#上传私有包)
    -   [本地配置注册地址](#本地配置注册地址)
-   [Git 仓库当私有 npm](#git仓库当私有npm)
    -   [建立一个私有模块](#建立一个私有模块)
    -   [安装使用私有模块](#安装使用私有模块)
    -   [优劣势](#优劣势)
-   [参考资料](#参考资料)

<!-- /TOC -->

## cnpm 搭建

[cnpmjs.org](https://github.com/cnpm/cnpmjs.org)

### 安装

```bash
npm install -g --build-from-source cnpmjs.org cnpm sqlite3
# 如果报错或者警告通过下面方式安装
npm install -g --unsafe-perm --verbose --build-from-source cnpmjs.org cnpm sqlite3
```

如果安装不流畅通过下面形式安装：

```bash
npm install -g --build-from-source \
  --registry=https://registry.npm.taobao.org \
  --disturl=https://npm.taobao.org/mirrors/node \
  cnpmjs.org cnpm sqlite3
```

如果报警告或者安装错误，请添加参数`--unsafe-perm --verbose`

### 启动并配置服务

> 管理员：`myname,othername`  
> 范围：`my-company-name,other-name`  
> 默认端口：7001-registry, 7002-web
> 启动服务

```bash
$ nohup cnpmjs.org start --admins='myname,othername' \
  --scopes='@my-company-name,@other-name' &
```

### 设置注册地址

将 cnpm 默认注册地址更改为私有注册地址

```bash
cnpm set registry http://localhost:7001
```

### 登录 cnpm

```bash
$ cnpm login
Username: myname
Password: ***
Email: (this IS public) test@test.com
```

### 包上传到私有仓库

新建项目

```
$ cd /tmp
$ mkdir helloworld && cd helloworld
$ cnpm init
name: (helloworld) @my-company-name/helloworld
version: (1.0.0)
{
  "name": "@my-company-name/helloworld",
  "version": "1.0.0",
  "description": "my first scoped package",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

上传到私有仓库

```bash
$ cnpm publish
+ @my-company-name/helloworld@1.0.0
```

### 查看预览包

浏览器中预览

```bash
open http://localhost:7002/@my-company-name/helloworld
```

使用`cnpm`预览

```
cnpm info
```

### 安装

所有公共包都可直接使用`cnpm`安装

```bash
cnpm install hotkeys-js
```

## 通过 verdaccio 搭建

[verdaccio](https://github.com/verdaccio/verdaccio) 是一个轻量级的私有 npm 代理注册。（[sinopia](https://github.com/rlidwka/sinopia) fork）

### 安装

```bash
# 使用 npm 安装
npm install -g npm
# 使用 yarn 安装
yarn global add verdaccio
```

### 启动服务

```bash
verdaccio -l 192.168.188.224:4873 >> verdaccio.log 2>&1 &
verdaccio >> verdaccio.log 2>&1 & # 后台启动并写入日志
# Verdaccio doesn't need superuser privileges. Don't run it under root.
# warn --- config file  - /root/.config/verdaccio/config.yaml
# warn --- http address - http://localhost:4873/ - verdaccio/2.3.6
verdaccio --listen 4000 --config ./config.yaml # 指定配置启动
```

### 添加用户/登录

```bash
npm adduser --registry  http://localhost:4873
```

### 上传私有包

```bash
npm publish --registry http://localhost:4873
```

### 本地配置注册地址

```bash
npm config list -l # 查看默认配置
# 将默认地址 https://registry.npmjs.org/ 改成私有地址
npm set registry http://localhost:4873
# 如果您使用HTTPS，请添加适当的CA信息
#（“null”表示从操作系统获取CA列表）
$ npm set ca null
```

## Git 仓库当私有 npm

这个方法得益于，npm 提供的的丰富安装方法。通过下面方法安装：

```bash
npm i -S git+ssh://git@git.showgold.cn:npm/hello.git
npm install -S git+ssh://git@github.com:npm/npm.git#v1.0.27
npm install -S git+ssh://git@github.com:npm/npm#semver:^5.0
npm install -S git+https://isaacs@github.com/npm/npm.git
npm install -S git://github.com/npm/npm.git#v1.0.27
```

⚠️ 上面安装需要注意：你的工程一定是在某一个组下面建立，方便管理，在生成你的包的时候`package.json`中的`name`一定要带上范围

### 建立一个私有模块

```bash
# 假设你建立了一个Git仓库，先克隆下来
git clone http://git.your-inc.com/companyfe/hello-private.git
# 生成 `package.json` 配置, 注意限定 `@scope` 范围
npm init --scope=companyfe
# 提交到仓库
git push origin master
```

⚠️ 将得到如下依赖，注意：

> `name`字段必须限定范围，一般为 GitLab group 的名字, 例如 `@companyfe`, 那么 `name` 为: `@companyfe/hello-private`。  
> `private` 设为 `true` 防止将私有模块上传到公网上去，需要手动设置一下。

```json
{
    "name": "@companyfe/hello-private",
    "version": "1.0.1",
    "description": "",
    "main": "index.js",
    "private": true,
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "kenny wang <wowohoo@qq.com> (http://wangchujiang.com)",
    "license": "ISC"
}
```

### 安装使用私有模块

跟安装开源的模块一样, 使用 `npm install` 安装依赖即可. 私有模块会安装在 `@scope` 的子文件夹中, 例如: `node_modules/@companyfe/hello-private`.

```bash
# 基础安装
npm i -S git+ssh://git@git.your-inc.com/companyfe/hello-private.git
# 带版本信息的，必须通过 git 打 tag
npm i -S git+ssh://git@git.your-inc.com/companyfe/hello-private.git#v1.2.0
```

将得到如下依赖

```json
{
    "name": "helloworld",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "dependencies": {
        "@companyfe/hello-private": "git+ssh://git@git.your-inc.com/companyfe/hello-private.git#v1.2.0"
    },
    "author": "kenny wang <wowohoo@qq.com> (http://wangchujiang.com)",
    "license": "ISC"
}
```

使用私有模块

```js
var hello = require('@companyfe/hello-private')
```

### 优劣势

不好的地方是，使用 `npm update` 是无法更新私有模块，想更新只能重新安装一次。好处是不用搭建服务。

## 其它工具

-   [cpm](https://github.com/cevio/cpm) 一套轻量化的 NPM 私有源管理程序

## 参考资料

-   [Can I run my own private registry?](https://docs.npmjs.com/misc/registry#can-i-run-my-own-private-registry)
