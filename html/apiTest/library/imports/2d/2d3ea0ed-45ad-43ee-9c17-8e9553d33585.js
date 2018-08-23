"use strict";
cc._RF.push(module, '2d3eaDtRa1D7pwXjpVT0zWF', 'demo');
// Script/demo.js

"use strict";

// var sdk = require("sdk");
cc.Class({
    extends: cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        cc.debug.setDisplayStats(false);

        //.初始化游戏
        sdk.init({
            debug: true, //.是否开启调试
            app_name: "xiao_xiao_yu_tang", //.游戏唯一标识
            version: "1.0.0" //.游戏版本
        }, function (res) {
            console.log('sdk初始化结果：', res);
        });

        // //.初始化腾讯统计
        // sdk.initmta({
        //     "appID": '500618042',
        //     "eventID":"500618044",
        // });

        //.请求测试
        // sdk.Get(sdk.ip1 + sdk.common, { app_name: sdk.app_name, version: sdk.version }, function (data) {
        //     console.log(data)
        // });

        //.获取后台配置信息测试
        // sdk.getConfig((d)=>{
        //     console.log(d)
        // })

        //.获取分享信息测试
        // sdk.getShare((d)=>{
        //     console.log(d)
        // })

        //.获取广告信息
        // sdk.getAdv((d)=>{
        //     console.log(d)
        // })


        // sdk.onMessage((d)=>{
        //     console.log(d)
        // })

        console.log(sdk);
    },

    // called every frame
    update: function update(dt) {}

});

cc._RF.pop();