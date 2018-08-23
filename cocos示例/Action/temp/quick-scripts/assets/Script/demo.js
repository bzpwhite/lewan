(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/demo.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'demo', __filename);
// Script/demo.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        cocos: cc.Node

    },

    // use this for initialization
    onLoad: function onLoad() {},

    start: function start() {

        var a1 = cc.circleMoveAction(2.5, cc.v2(0, 0), 0, 360);

        this.cocos.runAction(cc.repeatForever(a1));
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
        