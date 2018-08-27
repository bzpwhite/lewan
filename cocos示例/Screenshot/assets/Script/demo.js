cc.Class({
    extends: cc.Component,

    properties: {
        camera: {
            default: null,
            type: cc.Camera
        },

    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame
    update: function (dt) {

    },
    //.截图保存
    Screen(){
        sdk.Screenshot(this.camera, (d)=>{
            if(d){
                console.log("图片保存成功：", d)
            }else{
                console.log("图片保存失败：", d)
            }
        })
    }

});
