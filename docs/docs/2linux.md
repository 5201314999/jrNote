# linux 常用命令记录

1. find

查找目录：find /（查找范围） -name '查找关键字' -type d
查找文件：find /（查找范围） -name 查找关键字 -print

example:
```
sudo find / -name .npmrc -print
```
2. curl https://npm.org/install.sh | sh

获取资源并且执行， 如需管理员权限 加 sudo

3. ls -l

查看文件目录