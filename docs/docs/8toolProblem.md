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

## 3. vscode 插件库
    ![Image text](https://github.com/5201314999/jrNote/blob/master/docs/.vuepress/public/docs/vscodePlugin.png?raw=true)