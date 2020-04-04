# 开发工具类问题

## 1.  git clone 失败

```
    error: RPC failed; curl 18 transfer closed with outstanding read data remaining
    fatal: The remote end hung up unexpectedly
    fatal: early EOF
    fatal: index-pack failed
```

git config --global http.postBuffer 524288000


## 2.  简单server 工具

* npm i -D http-server
* 执行命令 http-server dist
* 开启https 服务器，需要创建证书
```
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
http-server -S -p 8090
```

## 3. vscode 插件库
![Image text](https://github.com/5201314999/jrNote/blob/master/docs/.vuepress/public/docs/vscodePlugin.png?raw=true)


## 4. jenkins 设置端口启动

修改配置文件无效，需要通过命令行配置

java -jar jenkins.war --ajp13Port=-1 --httpPort=8088

最后打开http://localhost:8088

## 5. jenkins 找不到插件问题

step1：访问locahost：8080/restart，越过配置插件的页面，直接访问
step2：点击【系统管理】--【管理插件】--【高级】--【上传插件】，手动安装下载好的插件


## 6. 快捷键

   shift+esc

## 7. ubuntu 安装npm 失败

sudo apt-get remove nodejs npm ## remove existing nodejs and npm packages
sudo apt-get install curl  
curl -sL https://deb.nodesource.com/setup | sudo bash -  
sudo apt-get install -y nodejs  

## 8. virtualBox 共享文件夹，挂载失败
https://www.cnblogs.com/xuange306/p/11226292.html

## 9. 远程连接linux 工具

    xshell（不建议了）, secureCRT

## 10. markdown 编辑器

typora, 我一般手写比较多，表格手写比较麻烦

## 11. 安卓虚拟机

```
Genymotion 
```


## 12. eslint 自动格式化问题。

vscode 安装eslint 配置  autofix-on-save,新版本改了，  ,有 eslint,eslint-plugin-vue 文件或者package.josn eslint 配置就可以生效。主要针对空格之类的确定答案给出修复。

大致思路是vscode 在保存时执行 eslint --fix 执行解析文件后缀。 vue 的话 主要依赖，全局或者本地 eslint,eslint-plugin-vue

dev 启动时则只需要做检查，可以提高热更新速度

eslint --fix --ext .js,.vue src

## 13. 抓包工具


## 14. gif 生成录屏gif

LICECAP（界面丑，功能还行）， win10 自带的多个应用会单独成多个视频（不好用）
