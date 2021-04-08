使用过的命令记录

1.  git branch -a （查看本地和远程所有的分支）

    -   git branch -D fanjr （删除本地分支）
    -   git push origin:fanjr (推送到远端)

2.  git fetch+git merge vs git pull origin master:master

3) git push origin master 推送到远程仓库

4. git stash save "11" git stash pop "11" git stash pop "11" （暂存相关命令）

5) 变基拉取 git pull --rebase origin master

变基过程中解决冲突，重新 git add '冲突文件名' 然后 git rebase --continue

基于 fork 的和基于 分支管理的代码

遇到一个问题：

fanjr 本地推送了，fanjr 变基到 master 拉取，发现 fanjr 本地落后远程分支 fanjr ，变基分开之后不要推送到远程仓库。

git log --oneline

5. 分支管理

-   分支删除

本地： git branch -D fanjr

推送： git push origin --delete fanjr

-   创建新分支

git checkout -b fanjr origin/master

-   放弃修改

git checkout -- client/utils/common/request

-   push 分支

git push --set-upstream origin fanjr

-   合并提交

git reset --soft HEAD~N && git commit

-   git rest --hard commit [id] 会把本地没有 commit 的都清空

备注： 遇到一个问题， git commit 失败 ，没有看输出提示，导致 rebase 完一直 rebasing .处于游离分支。 git rebase --abort 无法停止，没有文件权限

最终：重启电脑

git rebase --abort

git reset --hard commitId

git reflog 查看最全面的日志

## 强制提交

git push origin score_expand -f

## 修改最新提交的 commit 信息

git commit 　--amend

https://mvip.midea.cn/act/taobao/spi_test/bind?mobile=15521372614&appid=tmhyt_midea_official_store_mixnickname&openid=f01RCu/9pfuwIYIuqrZj+h97i3rnrvFreUHDiukj33t5kw=

https://mvip.midea.cn/act/taobao/spi_test/unbind?appid=tmhyt_midea_official_store_mixnickname&openid=f01RCu/9pfuwIYIuqrZj+h97i3rnrvFreUHDiukj33t5kw=

云南省曲靖市罗平县罗雄街道外纳村委会下阿来村 1 号 19980223

## ignore 已提交的文件

删除本地即可 git rm -r --cache project.config.json ,远程也会删除

## 查询某个文件 的提交历史

git log --pretty=oneline

## git checkout 某个版本的某个文件

git checkout ee25a1a3f9465 config/database.php

## 取消 git add 的某个文件

git reset HEAD client/pages/index/index.axml

## 查看远程仓库地址

git remote -v

## 合并前 3 次提交

git reset git rebase -i HEAD~3

弹出 vim 把第 2 行的 pick， 第 3 行的 pick 改为 s （挤压到第一行最早的提交中） wq 保存

弹出 vim 输入新的 commit 信息 wq

结束

## 回滚某个已经缓存的文件

注意：
\*\* git reset HEAD client/pages/score/scoreEden/scoreEden.js
git checkout client/pages/score/scoreEden/scoreEden.js
