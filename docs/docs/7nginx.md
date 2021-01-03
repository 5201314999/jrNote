# nginx 的总结

在第一家公司工作时大部分时间用tomcat,现在更多使用的是nginx，到目前为止已经用得挺多的，想要通过这篇文章，更详细地整理一遍，更加牢固地掌握这方面的技能。


## nginx 基本命令

在windows 的命令和 linux 的命令有所不同
* windows
    查看Nginx的版本号：nginx -V
    启动Nginx：start nginx
    快速停止或关闭Nginx：nginx -s stop
    正常停止或关闭Nginx：nginx -s quit
    配置文件修改重装载命令：nginx -s reload
    查看windows任务管理器下Nginx的进程命令：tasklist /fi "imagename eq nginx.exe"

* linux
    centos 安装nginx：
    1. yum -y install gcc pcre-devel zlib-devel openssl openssl-devel
    2. cd usr/local wget  http://nginx.org/download/nginx-1.16.1.tar.gz
    3. tar -zxvf nginx-1.16.1.tar.gz
    4. 进入解压后文件夹 ./configure --prefix=/usr/local/
    nginx
    5. make
    6. make install
    7. 启动nginx cd /usr/local/nginx/sbin  ./nginx

    * 重启  /usr/local/nginx/sbin/nginx -s reload   （路径用实际路径）
    * 查看配置 /usr/local/nginx/sbin/nginx -t
    * 启动 /usr/local/nginx/sbin/nginx
    * 杀死进程  kill  -9 进程号
    * 查找nginx 目录 ps-ef|grep nginx

    **注意**：在vim 中，Ctrl + S 是锁屏快捷键，  Ctrl+ q 解锁
    [https 模块](https://blog.csdn.net/weixin_37264997/article/details/84525444)




查找公司服务器nginx 的位置

查看 安装路径：ps aux | grep nginx

查看配置文件： /usr/local/nginx/sbin/nginx -t 找出配置conf 文件

    