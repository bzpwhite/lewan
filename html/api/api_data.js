define({ "api": [
  {
    "group": "Get_Start",
    "name": "init",
    "type": "初始化sdk",
    "url": "使用勇往sdk前，必须先初始化一次才能使用",
    "title": "init（初始化sdk）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>是否开启调试</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "app_name",
            "description": "<p>游戏标识</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "sdk.init({\n    debug: true,        //.是否开启调试\n    app_name: \"yt\",     //.游戏唯一标识\n    version: \"1.0.0\",   //.游戏版本\n})",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "Get_Start"
  },
  {
    "group": "Get_Start",
    "name": "init",
    "type": "初始化sdk",
    "url": "使用勇往sdk前，必须先初始化一次才能使用",
    "title": "init（初始化sdk）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>是否开启调试</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "app_name",
            "description": "<p>游戏标识</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "sdk.init({\n    debug: true,        //.是否开启调试\n    app_name: \"yt\",     //.游戏唯一标识\n    version: \"1.0.0\",   //.游戏版本\n})",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/library/imports/37/375a3fad-9df1-493c-b070-344bfbbf2f14.js",
    "groupTitle": "Get_Start"
  },
  {
    "group": "Get_Start",
    "name": "init",
    "type": "初始化sdk",
    "url": "使用勇往sdk前，必须先初始化一次才能使用",
    "title": "init（初始化sdk）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>是否开启调试</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "app_name",
            "description": "<p>游戏标识</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "sdk.init({\n    debug: true,        //.是否开启调试\n    app_name: \"yt\",     //.游戏唯一标识\n    version: \"1.0.0\",   //.游戏版本\n})",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/temp/quick-scripts/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "Get_Start"
  },
  {
    "group": "Get_Start",
    "name": "initmta",
    "type": "初始化腾讯统计sdk",
    "url": "参考链接http://mta.qq.com/wechat_mini/manage/ctr_sdk_help?app_id=500625714",
    "title": "initmta（初始化统计）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "args",
            "description": "<p>参数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "//.简单\nmta.App.init({\n    \"appID\":\"500618042\",\n    \"eventID\":\"500618044\"\n});\n//.高级\nmta.App.init({\n    \"appID\":\"500618042\",\n    \"eventID\":\"500618044\", // 高级功能-自定义事件统计ID，配置开通后在初始化处填写\n    \"lauchOpts\":options, //渠道分析,需在onLaunch方法传入options,如onLaunch:function(options){...}\n    \"statPullDownFresh\":true, // 使用分析-下拉刷新次数/人数，必须先开通自定义事件，并配置了合法的eventID\n    \"statShareApp\":true, // 使用分析-分享次数/人数，必须先开通自定义事件，并配置了合法的eventID\n    \"statReachBottom\":true // 使用分析-页面触底次数/人数，必须先开通自定义事件，并配置了合法的eventID\n});",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/temp/quick-scripts/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "Get_Start"
  },
  {
    "group": "Get_Start",
    "name": "initmta",
    "type": "初始化腾讯统计sdk",
    "url": "参考链接http://mta.qq.com/wechat_mini/manage/ctr_sdk_help?app_id=500625714",
    "title": "initmta（初始化统计）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "args",
            "description": "<p>参数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "//.简单\nmta.App.init({\n    \"appID\":\"500618042\",\n    \"eventID\":\"500618044\"\n});\n//.高级\nmta.App.init({\n    \"appID\":\"500618042\",\n    \"eventID\":\"500618044\", // 高级功能-自定义事件统计ID，配置开通后在初始化处填写\n    \"lauchOpts\":options, //渠道分析,需在onLaunch方法传入options,如onLaunch:function(options){...}\n    \"statPullDownFresh\":true, // 使用分析-下拉刷新次数/人数，必须先开通自定义事件，并配置了合法的eventID\n    \"statShareApp\":true, // 使用分析-分享次数/人数，必须先开通自定义事件，并配置了合法的eventID\n    \"statReachBottom\":true // 使用分析-页面触底次数/人数，必须先开通自定义事件，并配置了合法的eventID\n});",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "Get_Start"
  },
  {
    "group": "Get_Start",
    "name": "initmta",
    "type": "初始化腾讯统计sdk",
    "url": "参考链接http://mta.qq.com/wechat_mini/manage/ctr_sdk_help?app_id=500625714",
    "title": "initmta（初始化统计）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "args",
            "description": "<p>参数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "//.简单\nmta.App.init({\n    \"appID\":\"500618042\",\n    \"eventID\":\"500618044\"\n});\n//.高级\nmta.App.init({\n    \"appID\":\"500618042\",\n    \"eventID\":\"500618044\", // 高级功能-自定义事件统计ID，配置开通后在初始化处填写\n    \"lauchOpts\":options, //渠道分析,需在onLaunch方法传入options,如onLaunch:function(options){...}\n    \"statPullDownFresh\":true, // 使用分析-下拉刷新次数/人数，必须先开通自定义事件，并配置了合法的eventID\n    \"statShareApp\":true, // 使用分析-分享次数/人数，必须先开通自定义事件，并配置了合法的eventID\n    \"statReachBottom\":true // 使用分析-页面触底次数/人数，必须先开通自定义事件，并配置了合法的eventID\n});",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/library/imports/37/375a3fad-9df1-493c-b070-344bfbbf2f14.js",
    "groupTitle": "Get_Start"
  },
  {
    "group": "Get_Start",
    "name": "setmta",
    "type": "统计埋点",
    "url": "统计埋点",
    "title": "setmta（统计埋点）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>腾讯后台查询</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>腾讯后台查询</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "sdk.setmta(\"click\",\"p003\")",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/temp/quick-scripts/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "Get_Start"
  },
  {
    "group": "Get_Start",
    "name": "setmta",
    "type": "统计埋点",
    "url": "统计埋点",
    "title": "setmta（统计埋点）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>腾讯后台查询</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>腾讯后台查询</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "sdk.setmta(\"click\",\"p003\")",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "Get_Start"
  },
  {
    "group": "Get_Start",
    "name": "setmta",
    "type": "统计埋点",
    "url": "统计埋点",
    "title": "setmta（统计埋点）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>腾讯后台查询</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>腾讯后台查询</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "sdk.setmta(\"click\",\"p003\")",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/library/imports/37/375a3fad-9df1-493c-b070-344bfbbf2f14.js",
    "groupTitle": "Get_Start"
  },
  {
    "group": "sdk",
    "name": "Get",
    "type": "Get",
    "url": "发起网络请求",
    "title": "Get",
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
    "filename": "../demo/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "Get",
    "type": "Get",
    "url": "发起网络请求",
    "title": "Get",
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
    "filename": "../demo/library/imports/37/375a3fad-9df1-493c-b070-344bfbbf2f14.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "Get",
    "type": "Get",
    "url": "发起网络请求",
    "title": "Get",
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
    "filename": "../demo/temp/quick-scripts/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "Post",
    "type": "Post",
    "url": "发起网络请求",
    "title": "Post",
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
          "content": "sdk.Post(sdk.ip1 + sdk.common, { user_id: user_id }, function (d) {\n    console.log(d)\n});",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "Post",
    "type": "Post",
    "url": "发起网络请求",
    "title": "Post",
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
          "content": "sdk.Post(sdk.ip1 + sdk.common, { user_id: user_id }, function (d) {\n    console.log(d)\n});",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/temp/quick-scripts/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "Post",
    "type": "Post",
    "url": "发起网络请求",
    "title": "Post",
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
          "content": "sdk.Post(sdk.ip1 + sdk.common, { user_id: user_id }, function (d) {\n    console.log(d)\n});",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/library/imports/37/375a3fad-9df1-493c-b070-344bfbbf2f14.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "checkUpdate",
    "type": "检测版本更新",
    "url": "微信小游戏",
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
    "filename": "../demo/library/imports/37/375a3fad-9df1-493c-b070-344bfbbf2f14.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "checkUpdate",
    "type": "检测版本更新",
    "url": "微信小游戏",
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
    "filename": "../demo/temp/quick-scripts/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "checkUpdate",
    "type": "检测版本更新",
    "url": "微信小游戏",
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
    "filename": "../demo/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "createImage",
    "type": "微信小游戏跨域加载图片",
    "url": "微信小游戏跨域加载图片",
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
    "filename": "../demo/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "createImage",
    "type": "微信小游戏跨域加载图片",
    "url": "微信小游戏跨域加载图片",
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
    "filename": "../demo/library/imports/37/375a3fad-9df1-493c-b070-344bfbbf2f14.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "createImage",
    "type": "微信小游戏跨域加载图片",
    "url": "微信小游戏跨域加载图片",
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
    "filename": "../demo/temp/quick-scripts/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "getAdv",
    "type": "游戏广告信息",
    "url": "游戏广告信息",
    "title": "getAdv（获取广告）",
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
          "content": "sdk.getAdv(function (data) {\n    console.log(data)\n});",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/library/imports/37/375a3fad-9df1-493c-b070-344bfbbf2f14.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "getAdv",
    "type": "游戏广告信息",
    "url": "游戏广告信息",
    "title": "getAdv（获取广告）",
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
          "content": "sdk.getAdv(function (data) {\n    console.log(data)\n});",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "getAdv",
    "type": "游戏广告信息",
    "url": "游戏广告信息",
    "title": "getAdv（获取广告）",
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
          "content": "sdk.getAdv(function (data) {\n    console.log(data)\n});",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/temp/quick-scripts/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "getAdvByWeight",
    "type": "根据权重获取分享语句",
    "url": "根据权重获取分享语句",
    "title": "getAdvByWeight",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "share_list",
            "description": "<p>广告数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "var data = sdk.getAdvByWeight(advs);",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/temp/quick-scripts/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "getAdvByWeight",
    "type": "根据权重获取分享语句",
    "url": "根据权重获取分享语句",
    "title": "getAdvByWeight",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "share_list",
            "description": "<p>广告数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "var data = sdk.getAdvByWeight(advs);",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/library/imports/37/375a3fad-9df1-493c-b070-344bfbbf2f14.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "getAdvByWeight",
    "type": "根据权重获取分享语句",
    "url": "根据权重获取分享语句",
    "title": "getAdvByWeight",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "share_list",
            "description": "<p>广告数组</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "var data = sdk.getAdvByWeight(advs);",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "getConfig",
    "type": "游戏配置信息",
    "url": "游戏配置信息",
    "title": "getConfig（获取配置）",
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
          "content": "sdk.getConfig(function (data) {\n    console.log(data)\n});",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "getConfig",
    "type": "游戏配置信息",
    "url": "游戏配置信息",
    "title": "getConfig（获取配置）",
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
          "content": "sdk.getConfig(function (data) {\n    console.log(data)\n});",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/temp/quick-scripts/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "getConfig",
    "type": "游戏配置信息",
    "url": "游戏配置信息",
    "title": "getConfig（获取配置）",
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
          "content": "sdk.getConfig(function (data) {\n    console.log(data)\n});",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/library/imports/37/375a3fad-9df1-493c-b070-344bfbbf2f14.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
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
    "filename": "../demo/library/imports/37/375a3fad-9df1-493c-b070-344bfbbf2f14.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
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
    "filename": "../demo/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
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
    "filename": "../demo/temp/quick-scripts/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "getMyRank3",
    "type": "排名与我相邻的3位玩家信息",
    "url": "排名与我相邻的3位玩家信息",
    "title": "getMyRank3（Top3）",
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
            "field": "me",
            "description": "<p>我的子域信息</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "wx.getUserInfo({\n      openIdList: ['selfOpenId'],\n      lang: 'zh_CN',\n      success(res){\n         //.Top3\n         var dList = sdk.getMyRank3(dataList,res.data[0]);\n         console.log(dList)\n      },\n      fail(error) {\n         console.log(error)\n      }\n})",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "getMyRank3",
    "type": "排名与我相邻的3位玩家信息",
    "url": "排名与我相邻的3位玩家信息",
    "title": "getMyRank3（Top3）",
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
            "field": "me",
            "description": "<p>我的子域信息</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "wx.getUserInfo({\n      openIdList: ['selfOpenId'],\n      lang: 'zh_CN',\n      success(res){\n         //.Top3\n         var dList = sdk.getMyRank3(dataList,res.data[0]);\n         console.log(dList)\n      },\n      fail(error) {\n         console.log(error)\n      }\n})",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/temp/quick-scripts/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "getMyRank3",
    "type": "排名与我相邻的3位玩家信息",
    "url": "排名与我相邻的3位玩家信息",
    "title": "getMyRank3（Top3）",
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
            "field": "me",
            "description": "<p>我的子域信息</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "wx.getUserInfo({\n      openIdList: ['selfOpenId'],\n      lang: 'zh_CN',\n      success(res){\n         //.Top3\n         var dList = sdk.getMyRank3(dataList,res.data[0]);\n         console.log(dList)\n      },\n      fail(error) {\n         console.log(error)\n      }\n})",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/library/imports/37/375a3fad-9df1-493c-b070-344bfbbf2f14.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "getShare",
    "type": "游戏分享信息",
    "url": "游戏分享信息",
    "title": "getShare（获取分享）",
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
          "content": "sdk.getShare(function (data) {\n    console.log(data)\n});",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/temp/quick-scripts/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "getShare",
    "type": "游戏分享信息",
    "url": "游戏分享信息",
    "title": "getShare（获取分享）",
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
          "content": "sdk.getShare(function (data) {\n    console.log(data)\n});",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "getShare",
    "type": "游戏分享信息",
    "url": "游戏分享信息",
    "title": "getShare（获取分享）",
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
          "content": "sdk.getShare(function (data) {\n    console.log(data)\n});",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/library/imports/37/375a3fad-9df1-493c-b070-344bfbbf2f14.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "getShareByWeight",
    "type": "根据权重获取分享语句",
    "url": "根据权重获取分享语句",
    "title": "getShareByWeight",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "share_list",
            "description": "<p>分享数组</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>1 =&gt; '发起挑战', 2 =&gt; '群分享续命', 3 =&gt; '普通分享', 4 =&gt; '分享得金币'</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "var data = sdk.getShareByWeight(share_list, type);",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "getShareByWeight",
    "type": "根据权重获取分享语句",
    "url": "根据权重获取分享语句",
    "title": "getShareByWeight",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "share_list",
            "description": "<p>分享数组</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>1 =&gt; '发起挑战', 2 =&gt; '群分享续命', 3 =&gt; '普通分享', 4 =&gt; '分享得金币'</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "var data = sdk.getShareByWeight(share_list, type);",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/temp/quick-scripts/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
    "name": "getShareByWeight",
    "type": "根据权重获取分享语句",
    "url": "根据权重获取分享语句",
    "title": "getShareByWeight",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "share_list",
            "description": "<p>分享数组</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>1 =&gt; '发起挑战', 2 =&gt; '群分享续命', 3 =&gt; '普通分享', 4 =&gt; '分享得金币'</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "示例:",
          "content": "var data = sdk.getShareByWeight(share_list, type);",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../demo/library/imports/37/375a3fad-9df1-493c-b070-344bfbbf2f14.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
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
    "filename": "../demo/temp/quick-scripts/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
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
    "filename": "../demo/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
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
    "filename": "../demo/library/imports/37/375a3fad-9df1-493c-b070-344bfbbf2f14.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
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
    "filename": "../demo/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
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
    "filename": "../demo/library/imports/37/375a3fad-9df1-493c-b070-344bfbbf2f14.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
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
    "filename": "../demo/temp/quick-scripts/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
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
    "filename": "../demo/temp/quick-scripts/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
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
    "filename": "../demo/library/imports/37/375a3fad-9df1-493c-b070-344bfbbf2f14.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
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
    "filename": "../demo/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
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
    "filename": "../demo/library/imports/37/375a3fad-9df1-493c-b070-344bfbbf2f14.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
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
    "filename": "../demo/temp/quick-scripts/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  },
  {
    "group": "sdk",
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
    "filename": "../demo/assets/Demo/Script/sdk/sdk.js",
    "groupTitle": "sdk"
  }
] });
