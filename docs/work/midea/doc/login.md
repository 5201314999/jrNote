## 登录模块 auth2.js 逻辑整理

### bindUser

1. opent-type = getUserInfo 按钮回调执行 bindUser

2. 登录蒙层页触发 bindUser 

-   bindUser
-   \_getUserInfoBtnCb (按钮真正回调) 
-   \_updateUserInfo （执行更新,有用户数据的）webapplogin 

1. 用户已授权情况下，调用 wx.login 和 wx.getUserInfo，发送 code 和 encrypteddata、iv、signature 至后台保存，获取openid ，iv 参数，揭秘手机号注册

2. 更新本地缓存的用户 uid、skey、preReg (登录态)

### doLogin （静默登陆）

request 用户未登录时 nErrCode == 539299862 || nErrCode == 536860015 调用

-   wx.login (拿到 code) ----------> weapplogin (传 appname,c4a_uid,code)--------> 1. LoginRsp.PreReg 没有用户数据(登录态存储) 2. isMember => 拿 c4auid 拿用户数据 uid ，写进本地，更新字节上报数据

### doLoginPromise

login.js 登录页面中使用到 (同 doLogin) promise 版

### login.wxml

open-type = getPhoneNumber next/userinfo/bindweappmobile 绑定 （不能用js 启动）

### request 的情况

* 539299862 536860015  登录过期 （登录缓存失效,cookies 过期，本质是localstorage 中 userSession 对象没值）

* 539299861 未登录（新用户，退出登录）

### 其他

getUserInfo 没用了

\_getUserInfoBtnCb 内部使用

## dologin 与 \_updateUserInfo

-   dologin 属于静默登录

## wx.login

调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户在当前小程序的唯一标识（openid）、微信开放平台帐号下的唯一标识（unionid，若当前小程序已绑定到微信开放平台帐号）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。

## 进入绑定手机号

立即登录按钮 标题： 绑定手机号， 进入时会执行 webapplogin 

## 字节上报逻辑

1. 混合(uid,uin,c4a_uid) 上去
