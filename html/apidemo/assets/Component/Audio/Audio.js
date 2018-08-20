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
        key: "xx_audio",            //key 遵守规范加前缀
        yw_button: cc.AudioClip,
        yw_purchase: cc.AudioClip,

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        //调用：   cc.game.emit("yw_button");

        //1.监听开关
        this.initAudio();
        cc.game.on("switchAudio",()=>{
            this.initAudio();
        },this)
        
        //2.监听
        cc.game.on("yw_button",()=>{
            if(this.status){
                cc.audioEngine.play(this.yw_button);
            }
        },this)
        cc.game.on("yw_purchase",()=>{
            if(this.status){
                cc.audioEngine.play(this.yw_purchase);
            }
        },this)


    },

    // update (dt) {},

    initAudio(){
        //1.获取开关
        this.status = true;
        var value = cc.sys.localStorage.getItem(this.key);
        if(value){
            if(value == "on"){
                this.status = true;
            }else{
                this.status = false;
            } 
        }
    }
    
});
