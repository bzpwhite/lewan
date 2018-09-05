
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

    **sdk地址：**
    https://laixiao.github.io/lewan/乐玩sdk.zip

    **接入流程：**
    https://laixiao.github.io/lewan/lewan-sdk-doc

+ **初始化sdk**

配置sdk_conf.js文件
```javascript
    var sdk_conf = { 
        game: 'huaxianqiuqiu',  //乐玩方提供：游戏唯一标识
        version: '1.0.1',       //乐玩方提供：当前游戏版本
        bannerAdUnitId: '',     //乐玩方提供：banner广告单元id
        videoAdUnitId: '',      //乐玩方提供：video广告单元id
    };
```

+ **一、对接配置接口：**
```javascript
{
    "hz": 0,//分享加10步
    "hz2": 0,//跳游戏
    "hz3": 0,//跳盒子
    "bannerAd": 0,//banner广告
    "videoAd": 0,//视频广告开关
    "fs": 0,//看广告加10步
    "sns": 0,//社交按钮
    "kf": 0,//客服按钮
    "gzh": 0,//公众号按钮
    "hz2_d": {//跳游戏对应的参数
        "appId": "wxde2c29b8d9349652",
        "imageUrl": "https:\/\/res.g.llewan.com\/common\/256\/qieshuiguoicon.png",
        "path": "pages\/index\/index?channel=21&goAppid=wxf45b17ebcaef8085&goPath=QUESTIONsidEQUAL49",
        "extraData": "",
        "envVersion": "release"
    },//跳盒子对应的参数
    "hz3_d": {
        "appId": "wxde2c29b8d9349652",
        "imageUrl": "https:\/\/res.g.llewan.com\/common\/youxihezi.png",
        "path": "pages\/index\/index?channel=21",
        "extraData": "",
        "envVersion": "release"
    }
}
```
例子：

```javascript
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
