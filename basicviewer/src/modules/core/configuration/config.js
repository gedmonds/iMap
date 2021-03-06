﻿/*This file contains the configurable parameters object that can be copy/pasted in ArcGIS Online when registering application as a template.
    See help for the process: http://resources.arcgis.com/en/help/main/10.1/01w1/01w10000008p000000.htm

  The "fieldName"s are the parameters that get passed from AGO in the app config object. The "value"s are the corresponding values that get passed
    from AGO in the app config object.  The fieldNames/values correspond to the default config object (configOptions) in app.js and override
    any values in configOptions (if an appid is set in configOptions or found in the URL querystring)
 */
{
    "values": {
        "displaybasemaps": "true",
            "tablecontents": "true",
            "displaylegend": "true",
            "displayshare": "true",
            "displaymeasure": "false",
            "displaylocation": "false",
            "displayelevation": "false",
            "showelevationdifference": "false",
            "theme": "gray",
            "displaydetails": "true",
            "startupwidget": "displaydetails",
            "displayeditor": "true",
            "displayoverviewmap": "true",
            "displaytimeslider": "true",
            "displayprint": "false",
            "displaysearch": "true",
            "displaydraw": "false"
    },
    "configurationSettings": [{
        "category": "<b>Layout</b>",
        "fields": [{
            "label": "Theme:",
            "fieldName": "theme",
            "type": "string",
            "options": [{
                "value": "imap",
                "label": "MD iMap Basic"
            }, {
                "value": "sgg",
                "label": "Smart, Green, & Growing"
            }, {
                "value": "blue",
                "label": "Blue"
            }, {
                "value": "gray",
                "label": "Gray"
            }, {
                "value": "green",
                "label": "Green"
            }, {
                "value": "orange",
                "label": "Orange"
            }, {
                "value": "purple",
                "label": "Purple"
            }],
            "tooltip": "Theme to use"
        }, {
            "label": "Show Title",
            "fieldName": "displaytitle",
            "type": "boolean",
            "tooltip": ""
        }, {
            "placeHolder": "Defaults to map name",
            "label": "Title Text:",
            "fieldName": "title",
            "type": "string",
            "tooltip": ""
        }, {
            "placeHolder": "URL to logo before title",
            "label": "Title Logo URL:",
            "fieldName": "titleLogoUrl",
            "type": "string",
            "tooltip": "URL for upper left image"
        }, {
            "placeHolder": "Hyperlink for title logo",
            "label": "Title Logo Hyperlink:",
            "fieldName": "titleLogoLink",
            "type": "string",
            "tooltip": "URL for title logo hyperlink"
        },{
            "placeHolder": "URL to image",
            "label": "Logo on map:",
            "fieldName": "customlogoimage",
            "type": "string",
            "tooltip": "Url for image"
        }, {
            "placeHolder": "Hyperlink for map logo",
            "label": "Map Logo Hyperlink:",
            "fieldName": "customlogolink",
            "type": "string",
            "tooltip": "URL for map logo hyperlink"
        },{
            "placeHolder": "Header height",
            "label": "Header height (px):",
            "fieldName": "headerHeight",
            "type": "string",
            "tooltip": "in pixels"
        },{
            "placeHolder": "Hyperlink 1 Text",
            "label": "Hyperlink 1 Text:",
            "fieldName": "link1text",
            "type": "string",
            "tooltip": "Text to display"
        },{
            "placeHolder": "Hyperlink 1 URL",
            "label": "Hyperlink 1 URL:",
            "fieldName": "link1url",
            "type": "string",
            "tooltip": "URL to go to"
        },{
            "placeHolder": "Hyperlink 2 Text",
            "label": "Hyperlink 2 Text:",
            "fieldName": "link2text",
            "type": "string",
            "tooltip": "Text to display"
        },{
            "placeHolder": "Hyperlink 2 URL",
            "label": "Hyperlink 2 URL:",
            "fieldName": "link2url",
            "type": "string",
            "tooltip": "URL to go to"
        },{
            "placeHolder": "Left panel width",
            "label": "Left panel width (px):",
            "fieldName": "leftpanewidth",
            "type": "string",
            "tooltip": "in pixels"
        }]
    }, {
        "category": "<b>Widgets</b>",
        "fields": [{
            "label": "Details *",
            "fieldName": "displaydetails",
            "type": "boolean",
            "tooltip": "Descriptions"
        }, {
            "label": "Table of Contents",
            "fieldName": "tablecontents",
            "type": "boolean",
            "tooltip": "Legend and Add Data"
        }, {
            "label": "Editor *",
            "fieldName": "displayeditor",
            "type": "boolean",
            "tooltip": "Display editor if web map contains feature service layer"
        }, {
            "label": "Startup Widget:",
            "fieldName": "startupwidget",
            "type": "string",
            "options": [{
                "label": "Details",
                "value": "displaydetails"
            }, {
                "label": "Table of Contents",
                "value": "tablecontents"
            }, {
                "label": "Editor",
                "value": "displayeditor"
            }, {
                "label": "None",
                "value": "none"
            }],
            "tooltip": "Widget to show in left panel on load"
        }, {
            "value": "* These menu items will appear in the application when the web map has layers that require them.",
            "type": "paragraph"
        }]
    }, {
        "category": "<b>Tools</b>",
        "fields": [{
            "label": "Time Slider *",
            "fieldName": "displaytimeslider",
            "type": "boolean",
            "tooltip": "Display time slider for time enabled web map"
        }, {
            "label": "Print",
            "fieldName": "displayprint",
            "type": "boolean",
            "tooltip": ""
        }, {
            "label": "Basemaps",
            "fieldName": "displaybasemaps",
            "type": "boolean",
            "tooltip": ""
        }, {
            "label": "Bookmarks",
            "fieldName": "displaybookmarks",
            "type": "boolean",
            "tooltip": "Display the read-only bookmarks contained in the web map."
        }, {
            "label": "Measure",
            "fieldName": "displaymeasure",
            "type": "boolean",
            "tooltip": ""
        }, {
            "label": "Location",
            "fieldName": "displaylocation",
            "type": "boolean",
            "tooltip": ""
        }, {
            "label": "Share",
            "fieldName": "displayshare",
            "type": "boolean",
            "tooltip": ""
        }, {
            "label": "Search",
            "fieldName": "displaysearch",
            "type": "boolean",
            "tooltip": ""
        }, {
            "label": "Include Overview Map",
            "fieldName": "displayoverviewmap",
            "type": "boolean",
            "tooltip": ""
        }, {
            "label": "Add File",
            "fieldName": "displayinterop",
            "type": "boolean",
            "tooltip": ""
        }]
    }]
}