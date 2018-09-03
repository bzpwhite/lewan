(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/demo.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2d3eaDtRa1D7pwXjpVT0zWF', 'demo', __filename);
// Script/demo.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        cc.debug.setDisplayStats(false);

        // // 1.启动页：初始化游戏
        // sdk.init({
        //     debug: true,        //.是否开启调试
        // }, (res)=>{
        //     console.log('sdk初始化结果：', res)

        // })

        // // 2.登录页：获取用户信息
        // var user = sdk.getUser();
        // if(user){
        //     console.log("用户信息：", user)
        // }else{
        //     //.调用sdk登录
        //     sdk.WeChatLogin((d)=>{
        //         console.log("用户信息：", d)
        //         // 登录成功：返回用户信息； 
        //         // 登录失败：返回false
        //     });
        // }

    },

    // called every frame
    update: function update(dt) {}

});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=demo.js.map
        