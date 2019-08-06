# mysql 8.0.15 版本服务安装说明 😄

安装版（直接启动exe，基本无脑安装就行了)，下面说解压版

1. 下载 解压版

MySQL8.0 For Windows zip包下载地址：https://dev.mysql.com/downloads/file/?id=476233，进入页面后可以不登录。后点击底部“No thanks, just start my download.”即可开始下载。


2. 配置环境变量

修改path，执行包的根目录

3. 新建my.ini 文件


安装根目录直接新建，修改路径

```
[mysqld]
# 设置3306端口
port=3306
# 设置mysql的安装目录
basedir=E:\\software\\mysql\\mysql-8.0.11-winx64   # 切记此处一定要用双斜杠\\，单斜杠我这里会出错，不过看别人的教程，有的是单斜杠。自己尝试吧
# 设置mysql数据库的数据的存放目录
datadir=E:\\software\\mysql\\mysql-8.0.11-winx64\\Data   # 此处同上
# 允许最大连接数
max_connections=200
# 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统
max_connect_errors=10
# 服务端使用的字符集默认为UTF8
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
# 默认使用“mysql_native_password”插件认证
default_authentication_plugin=mysql_native_password
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8
[client]
# 设置mysql客户端连接服务端时默认使用的端口
port=3306
default-character-set=utf8
```

4. 安装服务
    * bin 目录下管理员权限执行命令：mysqld --initialize --console
    * 记住 A temporary password ，后面要用到

5. 启动服务
net start mysql
  
停止服务 net stop mysql

删除服务 sc delete MySQL/mysqld -remove

6. 进入mysql
mysql -u root -p 这时候会提示输入密码，记住了上面第3.1步安装时的密码，填入即可登录成功，进入MySQL命令模式。

7. 修改密码

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '新密码'; 


8.查看数据库，或者用navicat 工具桌面化操作数据库

show databases;
use mysql;
show tables;