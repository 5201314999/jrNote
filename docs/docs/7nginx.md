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
    
    