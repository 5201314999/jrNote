# centos 上部署gogs

1. 查看CentOS内核版本，确定架构（x64、x86还是arm）

    uname -a　

2. 创建系统运行用户
    
    useradd gogs

3. 使用自带数据库 mariadb repo 安装

yum -y mariadb mariadb-server

systemctl start mariadb ==> 启动mariadb

systemctl enable mariadb ==> 开机自启动

mysql_secure_installation ==> 设置 root密码等相关

mysql -uroot -p123456 ==> 测试登录！

4. 建库，授权用户

[root@server01 ~]# mysql -uroot -p
Enter password: 

MariaDB [(none)]> create database gogs;
Query OK, 1 row affected (0.00 sec)

MariaDB [(none)]> grant all on gogs.* to 'gogs'@'%' identified by 'gogs';
Query OK, 0 rows affected (0.00 sec)

MariaDB [(none)]> flush privileges;
Query OK, 0 rows affected (0.00 sec)

4. 安装git

Centos

**sudo yum install git**

Debian/Ubuntu
$ sudo apt-get update
$ sudo apt-get install git

Mac OS X
假设您已经安装 Homebrew：

$ brew update
$ brew install git



5. 下载gogs 2进制安装包

wget https://dl.gogs.io/0.11.91/gogs_0.11.91_linux_amd64.tar.gz


6. 解压, 剪切
tar xf gogs_0.11.53_linux_amd64.tar.gz
mv gogs /usr/local/

7.更改目录属主，属组 

chown -R gogs:gogs /usr/local/gogs/

8. 进入gogs 启动web
    su gogs
    gogs web
    
9. 打开网址配置数据库
参考资料 
[简书](https://www.jianshu.com/p/14ac90da5575)
[https://www.cnblogs.com/randyjang/articles/8444950.html](https://www.cnblogs.com/randyjang/articles/8444950.html)

