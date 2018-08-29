(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/demo.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'demo', __filename);
// Script/demo.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;
        //1.获取系统信息
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            wx.getSystemInfo({
                success: function success(res) {
                    console.log(res);
                    //2.调用sdk登录
                    sdk.WeChatLogin({
                        buttonConfig: {
                            type: 'image',
                            image: 'https://laixiao.github.io/lewan/html/img/btn_start.png',
                            style: { width: 382, height: 164, top: res.screenHeight / 2 - 164 / 2, left: res.screenWidth / 2 - 382 / 2 }
                        }
                    }, function (d) {
                        console.log("登陆状态：", d);
                    });
                }
            });
        }
    },

    start: function start() {},


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
        