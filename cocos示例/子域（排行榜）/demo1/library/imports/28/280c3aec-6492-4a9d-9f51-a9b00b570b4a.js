"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'Main');
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