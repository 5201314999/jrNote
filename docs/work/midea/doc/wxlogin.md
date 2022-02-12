## 微信登录梳理，思考新的方案

1. 微信使用 wx.login 可以拿code 换openid/unionid, 已经绑定了会员的可以直接静默登录

2. 只有不是会员的才需要授权登录注册

### 微信api

1. wx.login 

调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户在当前小程序的唯一标识（openid）、微信开放平台帐号下的唯一标识（unionid，若当前小程序已绑定到微信开放平台帐号）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。更多使用方法详见 小程序登录。

code string	用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 auth.code2Session，使用code换取 openid、unionid、session_key等信息

2. wx.getUserProfile

用户触发。 不能在wx.login 回调里处理, 可以并发调用, userInfo + signature + iv ,降级的话用getUserInfo （只会返回匿名数据）


3. open-type="getPhoneNumber"

获取微信用户绑定的手机号，需先调用wx.login接口。 (需要session_key去解密)

取到微信服务器返回的加密数据， 然后在第三方服务端结合 session_key 以及 app_id 进行解密获取手机号

注意：在回调中调用 wx.login 登录，可能会刷新登录态。此时服务器使用 code 换取的 sessionKey 不是加密时使用的 sessionKey，导致解密失败。建议开发者提前进行 login；或者在回调中先使用 checkSession 进行登录态检查，避免 login 刷新登录态。


### 现有方案 

bindUser 可以注册会员

登录触发页（只放一个按钮用来触发登录动作） +  登录/注册页 

1. 历史包袱（不基于这个设计的话，如何设计）：

先拿到用户信息 再 wx.login 再 webapplogin （匹配login 看看是否登录成功）， bindweappmobile (code, encryptedData,iv) / 绑定用户

收集存在的问题： 

1. 疯狂webapplogin , 队列方案

2. **注册页，在手机号获取回调中调用 wx.login 登录，可能会刷新登录态** 。

此时服务器使用 code 换取的 sessionKey 不是加密时使用的 sessionKey，导致解密失败。建议开发者提前进行 login；或者在回调中先使用 checkSession 进行登录态检查，避免login刷新登录态。 

把code 存起来，用之前的code ，或者在onLoad 时进行一次 wx.login , code 是一次性用品


用户业务梳理：

1. 新用户 （业务页/登录蒙层 - 登录注册 - 完成登录)

2. 非新用户未登录 webapplogin (登录)  登录成功，不需要进到绑定页


### 优化方案

在获取能否登录


































