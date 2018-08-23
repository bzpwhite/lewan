(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/AudioSwitch.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a2176Frm/9BqpxwTPFJWmkc', 'AudioSwitch', __filename);
// Script/AudioSwitch.js

"use strict";

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
        audioSprite: cc.Sprite,
        onSprite: cc.SpriteFrame,
        offSprite: cc.SpriteFrame

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.key = 'AudioStatus';
        this.initAudio();
    },


    // update (dt) {},

    initAudio: function initAudio() {
        var AudioStatus = cc.sys.localStorage.getItem(this.key);
        if (AudioStatus) {
            if (AudioStatus == "on") {
                this.audioSprite.spriteFrame = this.onSprite;
            } else {
                this.audioSprite.spriteFrame = this.offSprite;
            }
        } else {
            this.audioSprite.spriteFrame = this.onSprite;
        }
    },

    //.音乐开关
    switchAudio: function switchAudio() {
        var AudioStatus = cc.sys.localStorage.getItem(this.key);
        if (AudioStatus) {
            if (AudioStatus == "on") {
                cc.sys.localStorage.setItem(this.key, "off");
                this.audioSprite.spriteFrame = this.offSprite;
            } else {
                cc.sys.localStorage.setItem(this.key, "on");
                this.audioSprite.spriteFrame = this.onSprite;
            }
        } else {
            cc.sys.localStorage.setItem(this.key, "off");
            this.audioSprite.spriteFrame = this.offSprite;
        }
        cc.game.emit("SwitchAudio");
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
        //# sourceMappingURL=AudioSwitch.js.map
        