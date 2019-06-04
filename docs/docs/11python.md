# python 爬虫系列-入门教程（1）😄

## 个人吐槽

   最近比较闲,打算学习python 爬虫方面的知识，生活中认识了几个沙雕网友，搞得我也很想分（装）享（逼）。
   
   ![Image text](https://github.com/5201314999/jrNote/blob/master/docs/.vuepress/public/docs/9555112-300x212.jpg?raw=true)

   如果遇到不清楚可以跳到最后看参考教程，2个结合看应该就很简单易懂了

## 前言

* 1 python 语言

    [菜鸟教程](http://www.runoob.com/python/python-tutorial.html)

    特点：代码少，易读，高级语言特性（不适合游戏,硬件级开发）,适合做网站，爬虫,机器学习

    模块化类似node.js

* 2 爬虫

    用户获取网络数据的方式：<br>
    方式1：浏览器提交请求--->下载网页代码--->解析成页面<br>
    方式2：模拟浏览器发送请求->提取有用的数据(解析json/网页元素）->存放于数据库或文件中<br>
    爬虫要做的就是方式2<br>

## 基本上手 

   我是在windows 上操作的，其他系统的会有些不一样，不懂百度即可解决，问题不大,稳稳的。。。

* 1 **安装python**

    - （1）直接到官网下载64位exe安装(类比java 要装jdk,node.js 要安装node)，python3.5以上
    - （2）安装时勾选注册到环境变量，不然就要手动配置 [参考地址](https://www.cnblogs.com/huangbiquan/p/7784533.html)

    安装完 （win+R 输入 cmd ）打开命令行 输入python 回车即可看到版本号。证明安装没问题。

* 2 **开发工具**

    -   vscode 

    -   pycharm

    -   记事本（如果不需要代码提示的话）

* 2 **运行方式** 

    在命令行执行 python test.py(文件名)，同node.js 运行一样。

* 3 **基本运行命令**

    - pip install requests   安装模块 （类似js 模块，java 包）
    - pip install beautifulsoup4 
    

## 爬取图片 demo  

```
# 新手函数式代码 ，没使用类封装
import requests 
from bs4 import BeautifulSoup
import os

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36'}  #给请求指定一个请求头来模拟chrome浏览器
web_url = 'https://unsplash.com'
# web_url='https://images.unsplash.com/photo-1545621502-58d330faebb1'
r = requests.get(web_url, headers=headers) #像目标url地址发送get请求，返回一个response对象
soup=BeautifulSoup(r.text,"html.parser"); #解析字符串为dom 树

# print(soup);

# 创建文件夹 函数
def mkdir(path):  ##这个函数创建文件夹
    path = path.strip()
    isExists = os.path.exists(path)
    if not isExists:
        print('创建名字叫做', path, '的文件夹')
        os.makedirs(path)
        print('创建成功！')
    else:
        print(path, '文件夹已经存在了，不再创建')

mkdir('E:/myself/imgs'); #我的机上已经有E:/myself ，创建 imgs 文件夹

##保存图片 函数
def save_img(url, name): 
    print('开始保存图片...')
    print(url);
    img = requests.get(url,headers=headers);
    print(img.content);
    file_name = 'E:/myself/imgs/'+name + '.jpg'
    print('开始保存文件')
    f = open(file_name, 'ab')
    f.write(img.content)
    print(file_name,'文件保存成功！')
    f.close()
    
# 解析dom 结构 提取图片
imgs=soup.find_all('img',itemprop="thumbnailUrl");
for index in range(len(imgs)):
    imgSrc=imgs[index]['src'];
    realSrc=imgSrc[0 :imgSrc.index('?')];
    # realSrc='https://images.unsplash.com/photo-1545621502-58d330faebb1';
    save_img(realSrc,str(index));

```
## 成果
 ![py_1](https://github.com/5201314999/jrNote/blob/master/docs/.vuepress/public/docs/py_1.png?raw=true)

 <br>

 **恭喜你能看到这里，喜提图片一份**
 ![py_2](https://github.com/5201314999/jrNote/blob/master/docs/.vuepress/public/docs/py_2.jpg?raw=true)


## 说明

[参考教程](https://www.cnblogs.com/Albert-Lee/p/6232745.html)  实际解析内容自己参考网页元素爬，教程里的元素已经过时, 没有安装Anaconda3-5.3.1-Windows-x86_64（ps: 还没下好，就做完了)



