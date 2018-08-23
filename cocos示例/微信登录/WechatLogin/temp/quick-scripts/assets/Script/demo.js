(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/demo.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'demo', __filename);
// Script/demo.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {},

    start: function start() {
        var self = this;

        //.登录按钮图片、图片宽度、图片长度
        sdk.WeChatLogin({ loginImg: 'https://laixiao.github.io/lewan/html/img/btn_start.png', imgWidth: 382, imgHeight: 164 }, function (d) {
            if (d) {
                console.log(d);
            } else {
                console.log("登陆失败，请重试");
            }
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
        