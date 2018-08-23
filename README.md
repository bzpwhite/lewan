## 一、简介
Cocos小游戏sdk、Cocos小游戏sdk文档、Cocos小游戏开发示例；


## 二、使用
**1、Cocos小游戏开发示例：**

下载源码直接导入cocos creator即可。

（排行榜示例 仅支持creator2.0.1及以上版本）

**2、Cocos小游戏sdk：**
- 把sdk文件夹拖到项目中；
- 初始化sdk（在游戏启动场景中）：
```javascript
sdk.init({
    debug: true,        //.是否开启调试
    app_name: "yt",     //.游戏唯一标识
    version: "1.0.0",   //.游戏版本
})
```
- 调用sdk（任意位置）：
```javascript
//发起get请求
sdk.Get("https://xxx.xxx", { user_id: user_id }, function (d) {
    console.log(d)
});
```

## 三、其他
- sdk文档：https://laixiao.github.io/lewan/html/api/index.html
- 登录图片： https://laixiao.github.io/lewan/html/img/btn_start.png