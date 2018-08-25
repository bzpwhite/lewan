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
        camera: {
            default: null,
            type: cc.Camera
        },

        background: cc.Node,


    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        // //.初始化游戏
        // sdk.init({
        //     debug: true,        //.是否开启调试
        // }, (res)=>{
        //     // console.log('sdk初始化结果：', res)
        //     var d1 = sdk.getConfig1();
        //     console.log("运营配置：", d1)

        //     var d2 = sdk.getConfig2();
        //     console.log("程序配置：", d2)

        // })

        // this.login();


    },

    start () {

    },

    // update (dt) {},

    //.截图
    saveImage(){
        var self = this;
        sdk.Screenshot(this.camera, (d)=>{
            if(d){
                console.log("图片保存成功：", d)
                self.camera.node.destroy()
            }else{
                console.log("图片保存失败：", d)
            }
            
        })
    },
    loginBt(){
        //.登录按钮图片、图片宽度、图片高度
        // sdk.WeChatLogin({loginImg: 'https://laixiao.github.io/lewan/html/img/btn_start.png', imgWidth:382, imgHeight: 164}, (d)=>{
        //     if(d){
        //         console.log("登录成功：",d)
        //     }else{
        //         console.log("登陆失败，请重试")
        //     }
        // });
        console.log("=========1=====")
        this.background.active = false;
        wx.shareAppMessage({})
    }
    
    

});
