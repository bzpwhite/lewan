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

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        //.初始化游戏
        sdk.init({
            debug: true,        //.是否开启调试
            userid: 110         //.用户的id（兼容旧游戏，新游戏废弃）
        }, (res)=>{
            // console.log('sdk初始化结果：', res)

            //.获取后台运营配置
            // var d1 = sdk.getConfig1();
            // console.log("运营配置：", d1)

            //.获取后台程序配置
            // var d2 = sdk.getConfig2();
            // console.log("程序配置：", d2)

            //.监听：用户点击右上角分享
            sdk.onShareAppMessage({type: 0, query: "" });

        })

        // //1.获取系统信息
        // if (cc.sys.platform === cc.sys.WECHAT_GAME) {
        //     wx.getSystemInfo({
        //         success(res){
        //             console.log(res)
        //             //2.调用sdk登录
        //             sdk.WeChatLogin({
        //                 buttonConfig:{
        //                     type: 'image',
        //                     image: 'https://laixiao.github.io/lewan/html/img/btn_start.png',
        //                     style: {  width: 382, height: 164, top: res.screenHeight/2-164/2, left: res.screenWidth/2-382/2 }
        //                 }
        //             }, (d)=>{
        //                 console.log("登陆状态：", d)

        //             });
        //         }
        //     })
        // }

    },

    start () {
        
    },

    // update (dt) {},

    //2.主动拉起分享
    share(){
        sdk.shareAppMessage({type: 1, query: "nick=55" });

    },


    

});
