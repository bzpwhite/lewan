"use strict";
cc._RF.push(module, '2d3eaDtRa1D7pwXjpVT0zWF', 'demo');
// Script/demo.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        cc.debug.setDisplayStats(false);

        // .初始化游戏
        // sdk.init({
        //     debug: true,        //.是否开启调试
        // }, (res)=>{
        //     // console.log('sdk初始化结果：', res)
        //     var d1 = sdk.getConfig1();
        //     console.log("运营配置：", d1)

        //     var d2 = sdk.getConfig2();
        //     console.log("程序配置：", d2)

        //     // var obj = d1.hz3_d;
        //     // wx.navigateToMiniProgram(obj)

        // })

        //.调用sdk登录
        sdk.WeChatLogin(function (d) {
            // console.log("登陆结果：", d)
            // 登录成功：返回用户信息； 
            // 登录失败：返回false
            if (d) {
                // 获取用户信息
                var user = sdk.getUser();
                console.log("==用户信息==", user);
            } else {
                console.log("登陆失败：", d);
            }
        });
    },

    // called every frame
    update: function update(dt) {}

});

cc._RF.pop();