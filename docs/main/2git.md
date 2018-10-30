# git 使用总结

## 前言

新公司使用git 作为版本控制工具，跟之前只是简单使用git 处理自己的代码相比，实践中遇到了很多问题,所以利用在这里做下笔记，总结一下。

### 1 git 的基本命令


### 2 添加跟踪新远程仓库

- fork 远程A仓库到自己远程B仓库，编写本地代码提交到自己仓库B，再请求合并到远程A，如果远程A 仓库有新分支或者更新代码，如何处理


```
    先查看当前已有的远程仓库
    git remote -v

    添加新的需要跟踪的远程仓库
    git remote add XXname [url]
    
    拉取分支到本地创建为新分支XXname_Branchname,同时跟踪XXname/Branchname

    git checkout --track XXname/Branchname -b XXname_Branchname

    本地仓库获取该远程仓库的信息
    git fetch XXname

    如果不需要了，删除该仓库的指令如下：
    git remote rm XXname

```