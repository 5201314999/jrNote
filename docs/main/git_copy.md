

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

fanjr本地推送了，fanjr变基到master 拉取，发现fanjr 本地落后远程分支fanjr ，变基分开之后不要推送到远程仓库。

git log --oneline





5. 分支管理M@158190

* 分支删除

本地： git branch -D fanjr

推送： git push origin --delete fanjr

* 创建新分支

git checkout -b fanjr origin/master


* 放弃修改

git checkout -- client/utils/common/request


* push 分支

git push --set-upstream origin fanjr


* 合并提交

git reset --soft HEAD~N && git commit


* git rest --hard commit [id] 会把本地没有commit 的都清空

备注： 遇到一个问题， git commit 失败 ，没有看输出提示，导致rebase 完一直rebasing .处于游离分支。 git rebase --abort 无法停止，没有文件权限


最终：重启电脑

git rebase --abort

git reset --hard commitId

git reflog 查看最全面的日志



## 强制提交

git push origin score_expand -f


## 修改最新提交的commit 信息

git commit　--amend


https://mvip.midea.cn/act/taobao/spi_test/bind?mobile=15521372614&appid=tmhyt_midea_official_store_mixnickname&openid=f01RCu/9pfuwIYIuqrZj+h97i3rnrvFreUHDiukj33t5kw=


https://mvip.midea.cn/act/taobao/spi_test/unbind?appid=tmhyt_midea_official_store_mixnickname&openid=f01RCu/9pfuwIYIuqrZj+h97i3rnrvFreUHDiukj33t5kw=


云南省曲靖市罗平县罗雄街道外纳村委会下阿来村1号 19980223



## ignore 已提交的文件

删除本地即可 git rm -r --cache project.config.json ,远程也会删除


## 查询某个文件 的提交历史

 git log --pretty=oneline

## git checkout 某个版本的某个文件

git checkout  ee25a1a3f9465 config/database.php
