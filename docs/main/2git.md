# git 使用总结

## 前言

新公司使用git 作为版本控制工具，跟之前只是简单使用git 处理自己的代码相比，实践中遇到了很多问题,所以利用在这里做下笔记，方便以后查阅。

### 1 git 的基本命令

![Image text](https://github.com/5201314999/jrNote/blob/master/docs/.vuepress/public/docs/gitCommand.png?raw=true)

 [菜鸟教程](http://www.runoob.com/git/git-basic-operations.html)

### 2 git 核心命令运行图
![git 核心命令运行图](/jrNoteWebsite/main/git/git.png)

### 3 git 拉取一个远程仓库非默认分支
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
### 4 添加跟踪新远程仓库

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
小测试：- fork 远程A仓库到自己远程B仓库，编写本地代码提交到自己仓库B，再请求合并到远程A，如果远程A 仓库有新分支或者更新代码，如何处理
### 5 组织分支从旧分支拉出了新分支的时候

- 直接检出远程新分支即可，本地的分支不用改变，这样本地新增的代码还在。


### 6 直接把本地项目上传到github

```
    git init 
    git add .
    git commit -m 'message'
    git remote add origin 'https://...'
    git push -u origin master
```

### 7 出现 can not merge unrelated-histories 处理

 git pull origin master --allow-unrelated-histories

 
### 8 git ignore 问题

git规则

.gitignore只能忽略那些原来没有被track的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的

解决办法

:::tip  命令
git rm -r --cached .

git add .

git commit -m 'update .gitignore'
:::

### 9 查看提交历史

git log --oneline


### 10 git 新建仓库 ，远处有readme, 本地有一个有部分代码的项目

无法用5的方法直接解决。

git pull fjr master --allow-unrelated-histories


### 11 git 创建秘钥，实现github 免密登录提交代码
[参考](https://blog.csdn.net/zfs1994/article/details/52682129)

* ssh-keygen -t rsa -C "1446418561@qq.com"
* cd ~/.ssh
* cat id_rsa.pub
* 添加到github 上ssh 

### 其他命令

```
    // 查看某次提交变化的文件
    //这里 -no-commit-id 将禁止提交哈希值出现在输出中，而 -name-only 只会打印文件名而不是它们的路径。
    git diff-tree –no-commit-id –name-only -r {hash}
```


### 11 小试牛刀

[关于git 的20个问题](https://segmentfault.com/a/1190000019315509?utm_source=tag-newest)，快来试试你掌握得怎么样了吧