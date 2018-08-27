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

        // .初始化游戏
        sdk.init({
            debug: true //.是否开启调试
        }, function (res) {
            // console.log('sdk初始化结果：', res)
            var d1 = sdk.getConfig1();
            console.log("运营配置：", d1);

            var d2 = sdk.getConfig2();
            console.log("程序配置：", d2);

            // var obj = d1.hz3_d;
            // wx.navigateToMiniProgram(obj)
        });
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
        