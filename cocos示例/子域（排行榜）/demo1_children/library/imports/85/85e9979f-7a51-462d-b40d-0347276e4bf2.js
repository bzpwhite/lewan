"use strict";
cc._RF.push(module, '85e99efelFGLbQNA0cnbkvy', 'Top3');
// Script/Top3.js

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
        Top3Item: cc.Prefab,
        Content: cc.Node

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {

        //1.模拟数据
        var d = [];
        for (var i = 0; i < 10; i++) {
            var item = { id: i, rank: i + 1, avatar: '', nick: '昵称' + i, score: parseInt(Math.random() * 1000) };
            d.push(item);
        }

        //2.渲染
        for (var _i = 0; _i < d.length; _i++) {
            var item = cc.instantiate(this.Top3Item);
            item.parent = this.Content;
            item.getComponent("Top3Item").setData(d[_i]);
        }
        //.参考文档：http://docs.cocos.com/creator/api/zh/classes/ScrollView.html#scrollto
        //.跳转到指定位置
        this.node.getComponent(cc.ScrollView).scrollTo(cc.v2(0.5, 0), 0.1);
    }
}

// update (dt) {},
);

cc._RF.pop();