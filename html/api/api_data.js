define({ "api": [
  {
    "group": "A",
    "name": "init",
    "type": "初始化sdk",
    "url": "使用勇往sdk前，必须先初始化一次才能使用",
    "title": "init（初始化sdk）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game",
            "description": "<p>游戏标识</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>是否开启调试</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "//.初始化游戏\n  sdk.init({\n            debug: true,         //.是否开启调试\n            app_name: \"xiao_xiao_yu_tang\",     //.游戏唯一标识\n            version: \"1.0.0\",   //.游戏版本\n        }, (res)=>{\n            console.log('sdk初始化结果：', res)\n        })",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiTest/assets/Sdk/sdk.js",
    "groupTitle": "A"
  },
  {
    "group": "B",
    "name": "setAld",
    "type": "阿拉丁埋点",
    "url": "统计埋点(使用前请到阿拉丁注册游戏，并配置sdk/ald-game-conf.js)",
    "title": "setAld（阿拉丁埋点）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>描述用户的动作名称，不超过255个字符,不支持数字,英文,中文,&quot;-&quot;、&quot;_&quot;、&quot;+&quot;,以外的字符格式</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>动作的参数，不超过255个字符，不支持数字，英文，中文，&quot;-&quot;、&quot;_&quot;、&quot;+&quot;，以外的字符格式</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>动作的参数值，不超过255个字符，不支持数字，英文，中文，“-“、”_”、&quot;+&quot;，以外的字符格式</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "//使用前，在开发者设置中添加 request合法域名https://glog.aldwx.com\n//统计类型（点击）， 统计位置（开始游戏按钮），  统计参数（点了1次）\nsdk.setAld(\"click\", \"playButton\", \"1\")",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiTest/assets/Sdk/sdk.js",
    "groupTitle": "B"
  },
  {
    "group": "C",
    "name": "Get",
    "type": "Get",
    "url": "发起网络请求",
    "title": "Get（发起Get请求）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>请求地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "reqData",
            "description": "<p>请求参数</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "callback",
            "description": "<p>不存在返回null</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "sdk.Get(\"https://xxx.xxx\", { user_id: user_id }, function (d) {\n    console.log(d)\n});",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiTest/assets/Sdk/sdk.js",
    "groupTitle": "C"
  },
  {
    "group": "C",
    "name": "Post",
    "type": "Post",
    "url": "发起网络请求",
    "title": "Post（发起Post请求）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>请求地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "reqData",
            "description": "<p>请求参数</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "callback",
            "description": "<p>不存在返回null</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "sdk.Post(sdk.ip + sdk.common, { user_id: user_id }, function (d) {\n    console.log(d)\n});",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiTest/assets/Sdk/sdk.js",
    "groupTitle": "C"
  },
  {
    "group": "C",
    "name": "WeChatLogin",
    "type": "微信登录",
    "url": "微信登录",
    "title": "WeChatLogin（登录）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loginImg",
            "description": "<p>登录按钮图片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imgWidth",
            "description": "<p>图片宽度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imgHeight",
            "description": "<p>图片高度</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "//.登录按钮图片、图片宽度、图片高度\n  sdk.WeChatLogin({loginImg: 'https://laixiao.github.io/lewan/html/img/btn_start.png', imgWidth:382, imgHeight: 164}, (d)=>{\n      if(d){\n          console.log(d)\n      }else{\n          console.log(\"登陆失败，请重试\")\n      }\n  });",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiTest/assets/Sdk/sdk.js",
    "groupTitle": "C"
  },
  {
    "group": "C",
    "name": "checkUpdate",
    "type": "检测版本更新",
    "url": "微信小游戏（冷启动的时候会检查，如果有更新则会重启小游戏进行更新）",
    "title": "checkUpdate（版本更新）",
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "sdk.checkUpdate();",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiTest/assets/Sdk/sdk.js",
    "groupTitle": "C"
  },
  {
    "group": "C",
    "name": "createImage",
    "type": "显示网络图片",
    "url": "微信小游戏加载图片",
    "title": "createImage（显示图片）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "cc.Sprite",
            "optional": false,
            "field": "sprite",
            "description": "<p>显示图片的Sprite</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>需要加载的图片地址</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "var data = sdk.createImage(advs);",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiTest/assets/Sdk/sdk.js",
    "groupTitle": "C"
  },
  {
    "group": "C",
    "name": "getConfig1",
    "type": "运营配置",
    "url": "游戏后台配置信息，运营人员使用的通用配置开关",
    "title": "getConfig1（运营配置）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "callback",
            "description": "<p>不存在返回null</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "var d = sdk.getConfig1();",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiTest/assets/Sdk/sdk.js",
    "groupTitle": "C"
  },
  {
    "group": "C",
    "name": "getConfig2",
    "type": "程序配置",
    "url": "游戏后台配置信息，程序员使用的游戏数据开关，可随便自定义数据：例如复活次数等",
    "title": "getConfig2（程序配置）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "callback",
            "description": "<p>不存在返回null</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "var d = sdk.getConfig2();",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiTest/assets/Sdk/sdk.js",
    "groupTitle": "C"
  },
  {
    "group": "C",
    "name": "getItem",
    "type": "get",
    "url": "数据存储",
    "title": "getItem（取）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>值</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "var nick = sdk.getItem(\"nick\")",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiTest/assets/Sdk/sdk.js",
    "groupTitle": "C"
  },
  {
    "group": "C",
    "name": "getUser",
    "type": "获取本地用户信息",
    "url": "获取本地用户信息（登录成功后，会在本地存储用户信息）",
    "title": "getUser（获取用户信息）",
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "var user = sdk.getUser();",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiTest/assets/Sdk/sdk.js",
    "groupTitle": "C"
  },
  {
    "group": "C",
    "name": "onMessage",
    "type": "主域监听子域发送的消息",
    "url": "主域监听子域发送的消息",
    "title": "onMessage（监听消息）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "callback",
            "optional": false,
            "field": "callback",
            "description": "<p>回调函数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "sdk.onMessage((d)=>{\n    console.log(d)\n})",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiTest/assets/Sdk/sdk.js",
    "groupTitle": "C"
  },
  {
    "group": "C",
    "name": "postMessage",
    "type": "主域向子域发送消息",
    "url": "主域向子域发送消息",
    "title": "postMessage（发送消息）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>发送给子域的消息</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "sdk.postMessage(\"hello\")",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiTest/assets/Sdk/sdk.js",
    "groupTitle": "C"
  },
  {
    "group": "C",
    "name": "setItem",
    "type": "set",
    "url": "数据存储",
    "title": "setItem（存）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>值</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "sdk.setItem(\"nick\",\"hello\")",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiTest/assets/Sdk/sdk.js",
    "groupTitle": "C"
  },
  {
    "group": "C",
    "name": "shareAppMessage",
    "type": "分享",
    "url": "微信分享",
    "title": "shareAppMessage(分享)",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>后台自定义的分享类型；例如：0：右上角分享(只读)、1：普通分享 2：分享加金币</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "sdk.shareAppMessage  (1);",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiTest/assets/Sdk/sdk.js",
    "groupTitle": "C"
  },
  {
    "group": "C",
    "name": "sortList",
    "type": "对子域数据进行排序",
    "url": "对子域数据进行排序",
    "title": "sortList（子域排序）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListData",
            "description": "<p>要排序的微信子域数据</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>排序字段</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>正序：true  ； 倒序：false</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "wx.getFriendCloudStorage({\n      keyList: [\"yw_score\"],\n      success(res){\n          var ListData = sdk.sortList(res.data, 'yw_score', true));\n      },\n      fail(){\n          console.log(res)\n      }\n})",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiTest/assets/Sdk/sdk.js",
    "groupTitle": "C"
  }
] });
