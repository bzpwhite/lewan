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
        login: cc.Node,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.setDisplayStats(false);


    },

    start () {

    },

    // update (dt) {},

    back(){
        cc.director.loadScene("demo1")
    },
    
    //.微信登录
    Login(){
        this.login.active = true;
    },
    //.监听分享
    shareListen(){
        //1.显示当前页面右上角的转发按钮
        wx.showShareMenu({ withShareTicket:true })
        //2.监听用户点击分享按钮
        wx.onShareAppMessage(function(res){
            return {
                title: "自定义分享标题",
                imageUrl: 'https://game.zuiqiangyingyu.net/wb_webview/shuangshuang/cdn/share1.jpg',
                success(res){
                    console.log(res)
                },
                fail(res){
                    console.log(res)
                } 
            }
        })
    },
    //.主动拉起分享
    share(){
        wx.shareAppMessage({
            title: "自定义分享标题",
            imageUrl: 'https://game.zuiqiangyingyu.net/wb_webview/shuangshuang/cdn/share1.jpg',
            success(res){
                console.log(res)
            },
            fail(res){
                console.log(res)
            } 
        })
    }



});
