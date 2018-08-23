"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'demo');
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