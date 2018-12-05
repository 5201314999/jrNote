# 独立思考

## 1. simidtor 上传图片出不来

可能原因：
1. api 写错 (不肯能) 
2. 库有问题 （更新库，但是辛苦都是源码，不会打包）

卡住：新库的打包再代码发现md 说明文件，问题转成 ruby gem 安装问题

最终打包成功，发现插件升级导致问题

降低插件版本，解决了这个问题

## 2. iview table 提示问题

旧项目为了兼容自己写的title 没有tooltip. 每一行要用2行代码，已经优化过了的

```
 render: (h, params) => {
              return tableRender(h, params, 'categoryName');
            }
```

打算利用table 的tooltip ，那么自己写的tilte 用指令来实现tooltip。 这样工作量还会继续减少。


## 3 ie9 viewer 局部异常

1 采用的方法逐项排查，类比法，创造简单demo 进行测试，发现插件本身是兼容ie 9 的。

2 类比2个项目的webpack 配置，发现基本配置不一样， 出问题的代码配置改动比较大，主要是对文件路径做了较大改动

2018/12/5 暂时还没解决。晚上再看下

## 4 last child 与 nth-of-type 



## 5 activated 的时候不用mounted 了
