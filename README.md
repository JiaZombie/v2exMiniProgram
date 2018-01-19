## 微信小程序开发 ###
Coding WebIDE 已支持微信小程序的开发，开发者可在 WebIDE Workspace 内完成小程序的开发、预览、上传代码等操作。


### 开发前的准备工作
在 WebIDE 中开始开发微信小程序之前，需要先注册小程序账号并获取 AppID，只有登录微信账号并填写小程序 AppID 后才能使用预览、上传小程序等功能。

 - 注册小程序账号
 
    在 [微信公众平台官网](https://mp.weixin.qq.com) 点击右上角【立即注册】，选择“小程序”，按照提示步骤完成注册即可。

 - 获取 AppID
 
    完成小程序账号注册后，登录 [微信公众平台官网](https://mp.weixin.qq.com) ，进入“设置 - 开发设置”，获取 AppID 信息。你也可以先完善小程序信息，微信小程序信息完善和开发可同步进行。

 - 更多小程序信息完善及开发前准备可参考：https://mp.weixin.qq.com/debug/wxadoc/introduction/#小程序信息完善及开发前准备。

### 创建微信小程序项目

 1. 登录 WebIDE，在工作空间 tab 下点击【新建工作空间】。
  ![图片](https://dn-coding-net-production-pp.qbox.me/f23b7437-25cb-49df-b534-292471e4f822.png) 

 2. 在创建新仓库中选择仓库类型为“微信小程序”。
  ![图片](https://dn-coding-net-production-pp.qbox.me/06ad7a12-1a2a-461d-a8fe-51472e27cb42.png) 

**注：您也可以在登录 WebIDE 后，直接点击【微信小程序 XXX】来创建您想要体验的微信小程序 workspace，体验时间为 30min。**

### 微信小程序开发功能的使用
#### 登录

 1. 登录微信账号

    打开微信小程序 workspace，点击右侧栏【微信开发】-【登入微信账号】，使用管理员或者绑定的开发者微信号扫码登录。

     ![图片](https://dn-coding-net-production-pp.qbox.me/f31719ff-9a38-4734-8e68-47eaf91d2a64.png)

 2. 输入 AppID

     ![图片](https://dn-coding-net-production-pp.qbox.me/918d09d9-0728-47eb-8322-b3c10577c319.png) 

#### 开发与本地预览
WebIDE 可自动编译您的代码，您可以在微信预览中查看小程序的效果。

 ![图片](https://dn-coding-net-production-pp.qbox.me/4bce9f1f-1815-498e-9f14-9f9b368687a8.png) 

在微信预览 tab 上方可更换手机型号及屏幕显示大小比例。

   ![图片](https://dn-coding-net-production-pp.qbox.me/fd117619-a4e7-40c4-9a72-60e6505e2fea.png) 


#### 微信预览
小程序的管理员或是开发者点击基础信息 tab 中的【预览】并使用微信扫码，即可在手机内预览小程序的效果。

  ![图片](https://dn-coding-net-production-pp.qbox.me/791c9904-d253-42fa-8d19-a960d871de09.png) 
 
**注：请使用微信客户端 iOS 或 Android 的 6.3.27 及以上版本扫码预览。**

#### 上传
在基础信息 tab 下点击【上传】，输入版本号及项目备注，点击【上传】即可上传代码。

 ![图片](https://dn-coding-net-production-pp.qbox.me/092e3fdd-9449-4073-bdcf-370e5ec63ea9.png) 

代码上传后，可在 [微信公众平台官网](https://mp.weixin.qq.com) 的开发管理页面中看到对应提交的版本。

 ![图片](https://dn-coding-net-production-pp.qbox.me/0c82a188-cfee-42da-9428-5c1f58dd14ca.png) 


### 查看配置信息
在“微信开发”-“配置信息” tab 下，可查看您在微信公众平台中配置的服务器域名信息。

 ![图片](https://dn-coding-net-production-pp.qbox.me/f21ddda9-26ea-4254-b560-45e833baa597.png) 

### FAQ

 - 微信小程序预览错误
 
    某些微信小程序的 api 尚未实现，预览效果可能有偏差。如遇问题，可[联系我们](https://coding.net/u/coding/p/Coding-Feedback/git/blob/master/readme.md) 。

 - 代码审核与发布
 
    有关微信小程序的代码审核与发布等更多其他信息，请前往微信公众平台：https://mp.weixin.qq.com/debug/wxadoc/introduction/#代码审核与发布。

*注：Weapp Demo 中的 2048 小游戏代码来自 Github：https://github.com/natee/wxapp-2048。*