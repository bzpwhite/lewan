## 乐玩sdk文档
## 一、简介
方便其它项目接入乐玩科技的 **用户系统**、**分享系统** 和 **统计系统**；


## 二、使用

**1.把sdk文件夹拖到项目中**

**2.启动页：初始化sdk**
```javascript
sdk.init({
    debug: false,         //.是否开启调试
}, (res)=>{
    console.log('sdk初始化结果：', res)
    var d1 = sdk.getConfig1();
    console.log("运营配置信息", d1)
	var d2 = sdk.getConfig2();
    console.log("技术配置信息", d2)
})
```
**3.登陆页：授权登陆**
```javascript
var user = sdk.getUser();
if(user){
	console.log("用户信息：", user)
}else{
	//.调用sdk登录
	sdk.WeChatLogin((d)=>{
	console.log("用户信息：", d)
	// 登录成功：返回用户信息； 
	// 登录失败：返回false
	});
}
```

**4.配置分享**
```javascript
//.sdk初始化成功后：监听右上角分享按钮
sdk.onShareAppMessage({type: 0, query: "uid=520" });

//.主动拉起分享
//sdk.shareAppMessage({type: 1, query: "uid=520" });
```

## 三、其它

**sdk文档地址：**
https://laixiao.github.io/lewan/html/api/index.html

