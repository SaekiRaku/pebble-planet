module.exports = [{
        "type": "heading",
        "defaultValue": "表盘设置"
    },
    {
        "type": "text",
        "defaultValue": "该表盘程序源代码已托管在Github，您可以在Pebble的关于页面上访问Repo地址。"
    },
    {
        "type": "section",
        "items": [{
                "type": "heading",
                "defaultValue": "颜色设置"
            },
            {
                "type": "color",
                "messageKey": "timecolor",
                "defaultValue": "0x00FFAA",
                "layout": "COLOR",
                "label": "时间颜色"
            },
            {
                "type": "color",
                "messageKey": "linecolor",
                "defaultValue": "0xFFFFFF",
                "layout": "COLOR",
                "label": "线条颜色"
            },
            {
                "type": "color",
                "messageKey": "backgroundcolor",
                "defaultValue": "0x000000",
                "layout": "COLOR",
                "label": "背景颜色"
            }
        ]
    },
    {
        "type": "section",
        "items": [{
                "type": "heading",
                "defaultValue": "更多设置"
            },
            {
                "type": "select",
                "messageKey": "language",
                "label": "语言",
                "defaultValue": "english",
                "description": "修改语言需要保存并重新进入该页面才能生效",
                "options": [{
                        "label": "English",
                        "value": "english"
                    },
                    {
                        "label": "简体中文",
                        "value": "chinese"
                    }
                ]
            }
        ]
    },
    {
        "type": "submit",
        "defaultValue": "保存设置",
    },
    {
        "type": "text",
        "defaultValue": "国内用户可加入 QQ群：581154120 进行讨论与反馈"
    }
];