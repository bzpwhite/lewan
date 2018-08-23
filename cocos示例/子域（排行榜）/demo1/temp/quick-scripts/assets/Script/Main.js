(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Main.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'Main', __filename);
// Script/Main.js

'use strict';

//参考文档：https://github.com/pandamicro/creator-docs/blob/next/zh/publish/publish-wechatgame-sub-domain.md
cc.Class({
    extends: cc.Component,

    properties: {
        Rank: cc.Node,
        Top3: cc.Node

    },

    // use this for initialization
    onLoad: function onLoad() {},

    start: function start() {},


    // called every frame
    update: function update(dt) {},

    showRank: function showRank() {
        this.Rank.active = true;
        sdk.postMessage({ scene: 'showRank' });
    },
    hideRank: function hideRank() {
        this.Rank.active = false;
    },
    showTop3: function showTop3() {
        this.Top3.active = true;
        sdk.postMessage({ scene: 'showTop3' });
    },
    hideTop3: function hideTop3() {
        this.Top3.active = false;
    }
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
        //# sourceMappingURL=Main.js.map
        