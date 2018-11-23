# nginx 的配置

在第一家公司工作时大部分时间用tomcat,现在更多使用的是nginx , 本文主要是nginx 的跨域配置记录。


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
    
    