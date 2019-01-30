# git 使用总结

## 前言

新公司使用git 作为版本控制工具，跟之前只是简单使用git 处理自己的代码相比，实践中遇到了很多问题,所以利用在这里做下笔记，总结一下。

### 1 git 的基本命令

    ![Image text](https://github.com/5201314999/jrNote/blob/master/docs/.vuepress/public/docs/gitCommand.png?raw=true)

### 2 git 拉取一个远程仓库非默认分支
```
    1. 找一个干净目录，假设是git_work

    2. cd git_work

    3. git clone http://myrepo.xxx.com/project/.git ,这样在git_work目录下得到一个project子目录

    4. cd project

    5. git branch -a，列出所有分支名称如下：
    remotes/origin/dev
    remotes/origin/release

    6. git checkout -b dev origin/dev
    作用是checkout远程的dev分支，在本地起名为dev分支，并切换到本地的dev分支
```
### 3 添加跟踪新远程仓库

- fork 远程A仓库到自己远程B仓库，编写本地代码提交到自己仓库B，再请求合并到远程A，如果远程A 仓库有新分支或者更新代码，如何处理


```
    先查看当前已有的远程仓库
    git remote -v

    添加新的需要跟踪的远程仓库
    git remote add XXname [url]
    
    本地仓库获取该远程仓库的信息
    git fetch XXname

    拉取分支到本地创建为新分支XXname_Branchname,同时跟踪XXname/Branchname
    git checkout --track XXname/Branchname -b XXname_Branchname

    如果不需要了，删除该仓库的指令如下：
    git remote rm XXname

```

### 4 组织分支从旧分支拉出了新分支的时候

- 直接检出远程新分支即可，本地的分支不用改变，这样本地新增的代码还在。