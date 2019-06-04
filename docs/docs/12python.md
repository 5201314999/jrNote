# python 爬虫系列-入门教程（2）😄

## 个人吐槽

写完第一篇之后发现爬回来的图片只有30多张

![Image text](https://github.com/5201314999/jrNote/blob/master/docs/.vuepress/public/docs/py_3.jpg?raw=true)

小老弟，不是至少应该几百张吗，这么不给面子的吗？？

自暴自弃（冷静思考），原来网页是瀑布流的，不下拉滚动条不会请求更多的图片，一开始初始化页面只加载了30多张的图片，解析网页img 元素只能得到几十张，
所以改了下代码，顺便写了入门爬虫下篇(ps：我是不是很棒棒,坚信念念不忘，必有回响)

## 前言

想编写爬虫还是要有点编程基础的，没基础的可以先看看下面的基础（关键词）资料，并且自行百度谷歌。

* 1 python 基本语法，json ，网络请求分析

    python 类，方法，变量（类比java)

* 2 使用谷歌浏览器按f12 刷新页面 查看网络请求接口（xhr)，（怕小白不懂怎么看，老司机快速略过）
[调试器说明](https://www.cnblogs.com/yuanchaoyong/p/6172034.html)

* 3 本篇教程爬虫的难度比较低，实际使用中很多网站都有防盗链或者加密措施，等你懂得基本编码之后，难点和核心就是：分析网站，找到符合我们心意的接口或者网页元素进行解析

* 4 python 解析json，（官方自带模块，不用另外安装）,python3 安装语法 ，python 文件运行 请查看上篇教程**前言**

* 5 单击访问，观看接口数据格式：[https://unsplash.com/napi/search/photos?query=girl&xp=&per_page=18461&page=1](https://unsplash.com/napi/search/photos?query=girl&xp=&per_page=18461&page=1)


## demo

作为一枚钢铁直男，爬取关键词当然是（girl) ,你要是想设置为boy，我一点意见都没有。
```

'''
上篇文章，是为了快速入门和获得成就感，只能爬几十张，解析了首页初始化的dom 元素，后面的瀑布流图片没有爬到
在进入第2个demo 之前先快速刷了一遍python基础语法，(我有前端和java 的基础，阅读难度比较低)
第二份代码：
1 使用类，优化代码

2 爬取瀑布流更多图片，更实用,不再是解析dom 元素，而是直接解析接口返回json 结果
http://docs.python-requests.org/zh_CN/latest/user/quickstart.html
'''

import requests
import os
import time
import json

'''
    爬取https://unsplash.com/ 上的美女图片
'''
class PicSpider:

    # 头部
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36'}  
    # 官网地址
    weburl:''

    def __init__(self,weburl):
        self.weburl=weburl

    # 保存图片
    def save_img(self,url): 
        print('开始保存图片...')
        print(url)
        img = requests.get(url)
        # 从url 里获取出fm 字段是图片后缀
        suffix=url[url.index('fm=')+3:url.index('&crop')]
        print(suffix)
        file_name = 'E:/myself/imgs/'+time.strftime("%Y%m%d-%H%M%S", time.localtime())  + '.'+suffix
        print('开始保存文件')
        f = open(file_name, 'ab')
        f.write(img.content)
        print(file_name,'文件保存成功！')
        f.close()

    # 创建文件夹 
    def mkdir(self,path): 
        path = path.strip()
        is_exists = os.path.exists(path)
        if not is_exists:
            print('创建名字叫做', path, '的文件夹')
            os.makedirs(path)
            print('创建成功！')
        else:
            print(path, '文件夹已经存在了，不再创建')
        
    # 开始爬虫
    def start_spider(self):

        self.mkdir('E:/myself/imgs')

        # 模拟发出请求
        queryObj={
            'query':'girl',
            'page':1,
            'per_page':20,
            'xp':''
        }

        # 发出第一个请求解析到图片总页数
        result=requests.get(self.weburl+'/napi/search/photos',params=queryObj)
        search_result=json.loads(result.content)
        total_pages=search_result['total_pages']
        print('查询词',queryObj['query'],'页数为:',total_pages)
        
        
        # 第一种方案 发出一个分页请求，页大小设为图片总数，页数第一页，一次性取回全部搜索结果，获取到json 进行解析(只能获取到30条。。。)
        # 第2种方案 分页请求
        for i in range(total_pages):
            queryObj['page']=i+1
            result=requests.get(self.weburl+'/napi/search/photos',params=queryObj)
            # print(result.content)
            # content=json.loads(result.content)
            # print(content['total_pages'])
            allPhoto=json.loads(result.content)
            print('获取到第',i,'页，页大小：',len(allPhoto['results']))
            for item in allPhoto['results']:
                self.save_img(item['urls']['full'])
            queryObj['per_page']=search_result['total']
            result=requests.get(self.weburl+'/napi/search/photos',params=queryObj)
       
# 调用封装好的类
p=PicSpider('https://unsplash.com')
p.start_spider()

```

## 成果

![Image text](https://github.com/5201314999/jrNote/blob/master/docs/.vuepress/public/docs/py_3.png?raw=true)

直至截稿，程序仍在运行。

## 最后

代码的写法其实有很多种，以上只是一种实现写法，写得比较粗糙（是不是很像学生写的，手动滑稽），例如请求库，json 的解析 其实有很多第三方库可以选择，网上也有很多教程，我的肯定适合新手，这车很稳,农药准王者水平会带不动铂金吗。

![Image text](https://github.com/5201314999/jrNote/blob/master/docs/.vuepress/public/docs/py_4.gif?raw=true)

吹嘘完了，总结：

缺点：
1. 爬的有点慢，只有单线程，io 又慢，
2. 数据也只是存在文件夹，所以后面打算放到mongodb 数据库
3. 听说爬的太久，ip 会被封。
4. 有些东西是加密的，爬回来也不一定看得懂

优点：
1. 很多东西都能用python 脚本来爬了，可以获取到大量数据
2. 可以用来装逼。。。（例如我现在这样）



    







