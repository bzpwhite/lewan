
# 乐玩sdk接入流程

### 基础资料
提供接入方前端以及负责人微信号，方便后台授权开发者。

### 乐玩方

* 1.申请小游戏，获取appid，后端配置好用户系统等待接入；
* 2.乐玩后台：配置游戏、版本号、分享等信息；
* 3.微信公众号后台授权外部人员相关开发权限；
* 4.把appid给外部人员进行小游戏的开发。

### 接入方
                
+ **下载乐玩sdk并集成到小游戏**
+ **初始化sdk**

+ **一、对接配置接口：**
```javascript
{
    "hz": 0,
    "hz2": 0,
    "hz3": 0,
    "bannerAd": 0,
    "videoAd": 0,
    "fs": 0,
    "sns": 0,
    "kf": 0,
    "gzh": 0,
    "hz2_d": {
        "appId": "wxde2c29b8d9349652",
        "imageUrl": "https:\/\/res.g.llewan.com\/common\/256\/qieshuiguoicon.png",
        "path": "pages\/index\/index?channel=21&goAppid=wxf45b17ebcaef8085&goPath=QUESTIONsidEQUAL49",
        "extraData": "",
        "envVersion": "release"
    },
    "hz3_d": {
        "appId": "wxde2c29b8d9349652",
        "imageUrl": "https:\/\/res.g.llewan.com\/common\/youxihezi.png",
        "path": "pages\/index\/index?channel=21",
        "extraData": "",
        "envVersion": "release"
    }
}
```
| 字段  | 解释  |
| ------------ | ------------ |
| gzh  | 公众号按钮  |
| kf  | 客服按钮  |
| sns  |  社交按钮 |
| fs  |  看广告加10步 |
| videoAd  | 视频广告开关  |
| bannerAd  | banner广告  |
| hz3  |  跳盒子 |
| hz3_d  |  跳盒子对应的参数 |
|  hz2 | 跳游戏  |
|  hz2_d | 跳游戏对应的参数  |
|  hz | 分享加10步  |

```javascript
//.例子：
var d1 = sdk.getConfig1();
if(d1.hz3){
	//.显示盒子
}else{
	//.隐藏盒子
}
```

+ **二、对接分享接口**
    
	sdk初始化成功后，监听右上角分享按钮：
```javascript
sdk.onShareAppMessage({type: 0, query: "xxx=xxx" });
```
主动拉起分享：
```javascript
sdk.shareAppMessage({type: 1, query: "xxx=xxx" });
```
	
+ **三、对接广告接口**
    * Banner广告
	```javascript
		//var bannerAd = sdk.createBannerAd({
        //    style:{
       //        left: 0,
       //        top: 0,
       //        width: 100,
       //        height: 200
       //    }
       //});
      
       //.极简版（默认底部Banner）
       var bannerAd = sdk.createBannerAd({});
       bannerAd.show()
```

	* Video广告

	```javascript
	//.创建广告
	var videoAd = sdk.createRewardedVideoAd();
	//.显示广告
	videoAd.load().then(() => videoAd.show());
	```


### 其它

**sdk下载地址：**
https://laixiao.github.io/lewan/lewan-sdk