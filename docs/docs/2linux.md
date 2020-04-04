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

3. ll ls  ls -l


查看文件目录



4. ss -lp |grep 8090  查询端口的使用


5. kill -s 9 8080 杀死进程


6. ubuntu an装指定版本node 的其中一种方法

```
$ wget https://nodejs.org/dist/v6.9.5/node-v6.9.5-linux-x64.tar.gz
$ tar -xvf node-v6.9.5-linux-x64.tar.gz
//增加软连接，否则命令不是全局的
$ ln -s /home/node-v6.9.5-linux-x64/bin/node /usr/bin/node
$ ln -s /home/node-v6.9.5-linux-x64/bin/npm /usr/bin/npm

```

7. chmod +x *.sh


8. yum,rpm,apt get,apt-get intall, wget 等安装命令傻傻分不清，都是安装的。

9. vim操作
    末行模式
    ：wq! 命令行模式
    i 编辑内容模式
    v   方向键+y 复制   p 在光标处粘贴  dd 删除
    ![vim m模式图](/jrNoteWebsite/docs/linux/vim.png)
10.  重命名文件夹、文件   mv a b

11. rm -f -rf    删除命令

12. ls -al 查看隐藏文件







