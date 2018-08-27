cc.Class({
    extends: cc.Component,


    properties: {

    },

    // use this for initialization
    onLoad: function () {
        cc.debug.setDisplayStats(false);

        // .初始化游戏
        sdk.init({
            debug: true,        //.是否开启调试
        }, (res)=>{
            // console.log('sdk初始化结果：', res)
            var d1 = sdk.getConfig1();
            console.log("运营配置：", d1)

            var d2 = sdk.getConfig2();
            console.log("程序配置：", d2)

            // var obj = d1.hz3_d;
            // wx.navigateToMiniProgram(obj)

        })

    },

    // called every frame
    update: function (dt) {

    },

    

});
