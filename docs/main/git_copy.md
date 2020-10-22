

使用过的命令记录

1.  git branch -a （查看本地和远程所有的分支）
    * git branch -D fanjr   （删除本地分支）
    * git push origin:fanjr (推送到远端)
 
2. git fetch+git merge vs  git pull origin master:master


3. git push origin master  推送到远程仓库


4. git stash save "11"  git stash pop "11" git stash pop "11" （暂存相关命令）


5. 变基拉取 git pull --rebase origin master


变基过程中解决冲突，重新 git add '冲突文件名'  然后  git rebase --continue


基于fork 的和基于 分支管理的代码


遇到一个问题：

fanjr本地推送了，fanjr变基到master 拉取，发现fanjr 本地落后远程分支fanjr ，变基分开之后不要推送。

git log --oneline

git reset --soft HEAD~N && git commit



