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

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    onEnable(){
        var self = this;

        //1.登录按钮图片
        var loginButton = "https://game.zuiqiangyingyu.net/wb_webview/xiaoxiaoyutang/cdn/loginButton.png";

        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            if(self.button){
                self.button.show();
            }else{
                wx.getSystemInfo({
                    success(res){
                        //2.设置登录按钮宽高位置
                        var width = res.screenWidth;
                        var height = res.screenHeight;
                        var btWidth = 130/1;
                        var btHeight = 70/1;
                        self.button = wx.createUserInfoButton({
                            type: 'image',
                            image: loginButton,
                            style: {
                                left: width/2 - btWidth/2,
                                top: height/2 - btHeight/2 + 100,
                                width: btWidth,
                                height: btHeight,
                            }
                        })
                        self.button.onTap((res1) => {
                            wx.getSetting({
                                success(auths){
                                    if(auths.authSetting["scope.userInfo"]){
                                        // console.log("==已经授权===")
                                        wx.login({
                                            success(res2){ 
                                                //3.登录成功，执行其他操作
                                                var reqData = {
                                                    code: res2.code,
                                                    rawData: res1.rawData,
                                                    iv: res1.iv,
                                                    encryptedData: res1.encryptedData,
                                                    signature: res1.signature,
                                                    // from_user_id: self.from_user_id,
                                                }
                                                // console.log(res2)
                                                console.log('登录成功，执行其他操作。',reqData)
                                                cc.game.emit("login_success")
                                                self.node.active = false;  
                                            }
                                        })
                                    }else{
                                        //.拒绝授权
                                        console.log("==拒绝授权===")
                                    }
                                }
                            })
                        })
                        self.button.show()
                    }
                })
            }
        }
        
    },
    onDisable(){
        if(this.button){
            this.button.hide();
        }
    }


});
