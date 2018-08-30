# [常用链接](https://github.com/laixiao/lewan/blob/master/%E5%B8%B8%E7%94%A8%E9%93%BE%E6%8E%A5.md "常用链接")

## 一、简介
Cocos小游戏sdk、Cocos小游戏sdk文档、Cocos小游戏开发示例；


## 二、使用

**1.把sdk文件夹拖到项目中**

**2.初始化sdk（在游戏启动场景中）**
```javascript
sdk.init({
    debug: true,         //.是否开启调试
    userid: 56032607     //.用户的id（兼容旧游戏，新游戏废弃）
}, (res)=>{
    console.log('sdk初始化结果：', res)
    var d = sdk.getConfig1();
    console.log("运营配置信息", d)

})
```

**3.调用sdk（任意位置）**
```javascript
//发起get请求
sdk.Get("https://xxx.xxx", { user_id: user_id }, function (d) {
    console.log(d)
});
```

## 三、其他

**sdk文档地址：**
https://laixiao.github.io/lewan/html/api/index.html


**Cocos小游戏开发示例：**

下载源码直接导入cocos creator即可。

（排行榜示例 仅支持creator2.0.1及以上版本）
