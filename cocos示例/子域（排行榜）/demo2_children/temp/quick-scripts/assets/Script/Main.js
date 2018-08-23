(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Main.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ec953Vozb1L/6eHbg6F0E0W', 'Main', __filename);
// Script/Main.js

'use strict';

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        Rank: cc.Node,
        Top3: cc.Node,
        GroupRank: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        var self = this;

        sdk.onMessage(function (d) {
            // console.log('主域发过来的消息：', d)
            if (d.message) {
                if (d.message.scene == 'hide') {
                    self.Rank.active = false;
                    self.Top3.active = false;
                    self.GroupRank.active = false;
                }

                //.好友榜
                if (d.message.scene == 'showRank') {
                    self.Rank.active = true;
                    self.Top3.active = false;
                    self.GroupRank.active = false;
                }
                if (d.message.scene == 'showTop3') {
                    self.Rank.active = false;
                    self.Top3.active = true;
                    self.GroupRank.active = false;
                }
                //.群排行榜
                if (d.message.scene == 'showGroupRank') {
                    self.Rank.active = false;
                    self.Top3.active = false;
                    self.GroupRank.active = true;
                    self.GroupRank.getComponent("GroupRank").setData(d.message.shareTicket);
                }
            }
        });

        //1.子域获取数据
        //.当前用户托管数据当中对应 key 的数据
        sdk.getUserCloudStorage(["nick", "avatar"], function (res) {
            console.log("（当前用户数据）getUserCloudStorage的数据：", res);
        });
        // //.群排行
        // sdk.getGroupCloudStorage('填写分享群获得到的shareTicket', ["nick","avatar"], (res)=>{
        //     console.log("（群排行）getGroupCloudStorage的数据：", res)
        // })
        // //.好友排行
        // sdk.getFriendCloudStorage(["nick","avatar"], (res)=>{
        //     console.log("（好友排行）getFriendCloudStorage的数据：", res)
        // }) 
    }
}

// update (dt) {},
);

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
        