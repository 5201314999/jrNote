# git 使用总结

## 前言

新公司使用git 作为版本控制工具，跟之前只是简单使用git 处理自己的代码相比，实践中遇到了很多问题,所以利用在这里做下笔记，方便以后查阅。

### 1 git 的基本命令

![Image text](/jrNoteWebsite/main/git/gitCommand.png)

 [菜鸟教程](http://www.runoob.com/git/git-basic-operations.html)

### 2 git 核心命令运行图
![git 核心命令运行图](/jrNoteWebsite/main/git/git.png)

### 3 git 拉取一个远程仓库非默认分支(从git 上拉取项目)
```
    1. 找一个干净目录，假设是git_work

    2. cd git_work

    3. git clone http://myrepo.xxx.com/project/.git ,这样在git_work目录下得到一个project子目录

    4. cd project

    5. git branch -a，列出所有分支名称如下：
    remotes/origin/dev
    remotes/origin/release

    6. git checkout -b dev origin/dev 等价于 git branch dev  git checkout origin/dev
    作用是checkout远程的dev分支，在本地起名为dev分支，并切换到本地的dev分支
```
### 4 添加跟踪新远程仓库

```
    先查看当前已有的远程版本库
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


### 6 把本地项目上传到git

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

git log --oneline --graph

### 10 git 创建秘钥，实现github 免密登录提交代码
[参考](https://blog.csdn.net/zfs1994/article/details/52682129)

* ssh-keygen -t rsa -C "1446418561@qq.com"
* cd ~/.ssh
* cat id_rsa.pub
* 添加到github 上ssh 


### 11. git 打标签


[https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%89%93%E6%A0%87%E7%AD%BE](https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%89%93%E6%A0%87%E7%AD%BE)

```
    如果你想在新的提交消息中串联现有的提交消息，那么需要提取这些消息并将它们传给 git commit，可以这样：
    git reset --soft HEAD~N &&
    git commit –edit -m"$(git log –format=%B –reverse .HEAD@{N})"

    它列出了已合并到当前分支的分支。
    git branch --merged 

    标记文件冲突已解决
    git add 
```

### 12. git 设置对文件、文件夹大小写敏感

```
    git config core.ignorecase false

```

### 1 其他命令

```
    // 查看某次提交变化的文件
    //这里 -no-commit-id 将禁止提交哈希值出现在输出中，而 -name-only 只会打印文件名而不是它们的路径。
    git diff-tree –no-commit-id –name-only -r {hash}

    将N个提交压缩到单个提交中有两种方式：
    如果要从头开始编写新的提交消息，请使用以下命令：

    git reset --soft HEAD~N && git commit
```

### 小试牛刀

[关于git 的20个问题](https://segmentfault.com/a/1190000019315509?utm_source=tag-newest)，快来试试你掌握得怎么样了吧

### 出师任务

如何搭建公司的版本控制系统

### 参考

- [分支与合并](https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E6%96%B0%E5%BB%BA%E4%B8%8E%E5%90%88%E5%B9%B6#r_basic_merging)
- [变基,实现快进合并](https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%8F%98%E5%9F%BA)
