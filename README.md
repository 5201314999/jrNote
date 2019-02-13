## **《jrNote》** 

**基于vuepress开发的静态网站，主要目的是用来放置学习笔记,遗忘时快速查询**

### 代码启动步骤

- 1 首先需要安装node.js 和 yarn
- 2 yarn install
- 3 直接运行 yarn docs:dev
- 4 打包成静态文件  yarn docs:build



### 打包发布到 git pages 时

* linux 参考以下：

```
    # 生成静态文件
    yarn docs:build

    # 进入生成的文件夹
    cd docs/.vuepress/dist

    # 如果是发布到自定义域名
    # echo 'www.example.com' > CNAME

    git init
    git add -A
    git commit -m 'deploy'

    # 如果发布到 https://<USERNAME>.github.io
    # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

    # 如果发布到 https://<USERNAME>.github.io/<REPO>
    # git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

    cd -
```
* windows:

打包命令不集成到批命令，会导致cd docs/.vuepress/dist 执行失败，单独提前运行打包命令
```
::进入生成的文件夹
cd docs/.vuepress/dist

::如果是发布到自定义域名
::echo 'www.example.com' > CNAME 

git init
git add -A
git commit -m 'deploy'

::如果发布到 https://<USERNAME>.github.io 
::git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master 

::如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/5201314999/jrNoteWebsite.git master

cd .
```
