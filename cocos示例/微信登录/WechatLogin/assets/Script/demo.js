cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {

    },

    start(){
        var self = this;

        //.登录按钮图片、图片宽度、图片高度
        sdk.WeChatLogin({loginImg: 'https://laixiao.github.io/lewan/html/img/btn_start.png', imgWidth:382, imgHeight: 164}, (d)=>{
            if(d){
                console.log(d)
            }else{
                console.log("登陆失败，请重试")
            }
        });



    },

    // called every frame
    update: function (dt) {

    },


    

});
