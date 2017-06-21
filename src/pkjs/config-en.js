module.exports = [{
        "type": "heading",
        "defaultValue": "Watchface Configuration"
    },
    {
        "type": "text",
        "defaultValue": "This watchface is open source, you can find out the github repo on Pebble's about page."
    },
    {
        "type": "section",
        "items": [{
                "type": "heading",
                "defaultValue": "Colors Settings"
            },
            {
                "type": "color",
                "messageKey": "timecolor",
                "defaultValue": "0x00FFAA",
                "layout": "COLOR",
                "label": "Time Color"
            },
            {
                "type": "color",
                "messageKey": "linecolor",
                "defaultValue": "0xFFFFFF",
                "layout": "COLOR",
                "label": "Line Color"
            },
            {
                "type": "color",
                "messageKey": "backgroundcolor",
                "defaultValue": "0x000000",
                "layout": "COLOR",
                "label": "Background Color"
            }
        ]
    },
    {
        "type": "section",
        "items": [{
                "type": "heading",
                "defaultValue": "More Settings"
            },
            {
                "type": "select",
                "messageKey": "language",
                "label": "Language",
                "defaultValue": "english",
                "description": "Need save and reload this page to take effect",
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
        "defaultValue": "Save Settings"
    }
];