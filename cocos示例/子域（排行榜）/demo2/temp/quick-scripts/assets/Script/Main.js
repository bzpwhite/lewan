(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Main.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'Main', __filename);
// Script/Main.js

"use strict";

//参考文档：https://github.com/pandamicro/creator-docs/blob/next/zh/publish/publish-wechatgame-sub-domain.md
cc.Class({
    extends: cc.Component,

    properties: {
        Rank: cc.Node,
        Top3: cc.Node,
        GroupRank: cc.Node

    },

    // use this for initialization
    onLoad: function onLoad() {},

    start: function start() {
        var self = this;

        //.主域上报数据
        var kvDataList = new Array();
        kvDataList.push({ key: "nick", value: "laixiao" });
        kvDataList.push({ key: "avatar", value: "https://wx.qlogo.cn/mmopen/vi_32/78vDM2vOOAhAicj5YIPYKucDIx2VMdHGibLqZLSbBR9icgncZ3iaOibxEiaXEicq9Jmla0oGQfPY1lOTCOOU4PDXDUaog/0" });
        kvDataList.push({ key: "score", value: "" + parseInt(Math.random() * 1000) }); //parseInt(Math.random()*1000)
        sdk.setUserCloudStorage(kvDataList, function (res) {
            console.log('主域上报数据结果：', res);
        });

        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            //.显示当前页面右上角的转发按钮
            wx.showShareMenu({ withShareTicket: true });
            //.获取启动参数
            var option = wx.getLaunchOptionsSync();
            this.showGroupRank(option);
            wx.onShow(function (res) {
                self.showGroupRank(res);
            });
        }
    },


    // called every frame
    update: function update(dt) {},

    //1.好友排行
    showRank: function showRank() {
        this.Rank.active = true;
        sdk.postMessage({ scene: 'showRank' });
    },
    hideRank: function hideRank() {
        this.Rank.active = false;
        sdk.postMessage({ scene: 'hide' });
    },


    //2.Top3排行
    showTop3: function showTop3() {
        this.Top3.active = true;
        sdk.postMessage({ scene: 'showTop3' });
    },
    hideTop3: function hideTop3() {
        this.Top3.active = false;
        sdk.postMessage({ scene: 'hide' });
    },


    //3.群排行
    shareGroupRank: function shareGroupRank() {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            wx.shareAppMessage({
                title: "请点击分享卡片，查看群排名",
                imageUrl: '',
                query: 't=rank'
            });
            wx.showModal({
                title: '提示',
                content: '请通过点击分享出去的消息查看群排名',
                showCancel: false,
                confirmText: '知道了'
            });
        }
    },
    showGroupRank: function showGroupRank(option) {
        if (option.query && option.query.t == 'rank') {
            this.GroupRank.active = true;
            sdk.postMessage({ scene: 'showGroupRank', shareTicket: option.shareTicket });
        }
    },
    hideGroupRank: function hideGroupRank() {
        this.GroupRank.active = false;
        sdk.postMessage({ scene: 'hide' });
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
        