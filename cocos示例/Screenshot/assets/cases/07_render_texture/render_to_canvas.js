cc.Class({
    extends: cc.Component,

    properties: {
        camera: {
            default: null,
            type: cc.Camera
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        
        
    },

    //.截图保存
    captureButton(){
        var self = this;

        //1.判断是否授权
        wx.getSetting({
            success(res){
                console.log("授权状态", res.authSetting.scope.writePhotosAlbum)
                if(res.authSetting.scope.writePhotosAlbum){
                    self.capture();
                }else{
                    console.log("未授权", res)
                    wx.authorize({
                        scope: 'scope.writePhotosAlbum',
                        success(res2){
                            if(res2.authSetting.scope.writePhotosAlbum){
                                self.captureButton();
                            }else{
                                console.log("=用户拒绝了scope.writePhotosAlbum授权=")
                            }
                        },
                    })
                }
            }
        })

    },

    capture () {
        //.要截取的范围（全屏）
        let texture = new cc.RenderTexture();
        texture.initWithSize(cc.visibleRect.width, cc.visibleRect.height);
        this.camera.targetTexture = texture;
        this.texture = texture;


        let width = this.texture.width;
        let height = this.texture.height;
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        this.camera.render();
        let data = this.texture.readPixels();
        let rowBytes = width * 4;
        for (let row = 0; row < height; row++) {
            let srow = height - 1 - row;
            let imageData = ctx.createImageData(width, 1);
            let start = srow*width*4;
            for (let i = 0; i < rowBytes; i++) {
                imageData.data[i] = data[start+i];
            }
            ctx.putImageData(imageData, 0, row);
        }
        var dataURL = canvas.toDataURL("image/jpeg");
        canvas.toTempFilePath({
            x: 0,
            y: 0,
            width: width,
            height: height,
            destWidth: width,
            destHeight: height,
            success (res1) {
                //.可以保存该截屏图片
                console.log('success==',res1)
                wx.saveImageToPhotosAlbum({
                    filePath: res1.tempFilePath,
                    success(res2){
                        console.log('==saveImageToPhotosAlbum=success=',res2)
                    },
                    fail(res2){
                        console.log('==saveImageToPhotosAlbum=fail=',res2)
                    }
                })
            },
            fail(res){
                console.log(res)
            }
        })
    },

    // update (dt) {},
    
});
