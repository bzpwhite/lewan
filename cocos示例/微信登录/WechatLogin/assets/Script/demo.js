cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        var self = this;
        //1.获取系统信息
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            wx.getSystemInfo({
                success(res){
                    console.log(res)
                    //2.调用sdk登录
                    sdk.WeChatLogin({
                        buttonConfig:{
                            type: 'image',
                            image: 'https://laixiao.github.io/lewan/html/img/btn_start.png',
                            style: {  width: 382, height: 164, top: res.screenHeight/2-164/2, left: res.screenWidth/2-382/2 }
                        }
                    }, (d)=>{
                        console.log("登陆状态：", d)

                    });
                }
            })
        }

    },

    start(){

    },

    // called every frame
    update: function (dt) {

    },


    

});
