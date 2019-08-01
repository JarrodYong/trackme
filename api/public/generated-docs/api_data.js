define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./public/generated-docs/main.js",
    "group": "C__Users_jarro_Desktop_Uni_Work_Year_2_Uni_Work_Software_Engineering_2_Code_TrackMe_api_public_generated_docs_main_js",
    "groupTitle": "C__Users_jarro_Desktop_Uni_Work_Year_2_Uni_Work_Software_Engineering_2_Code_TrackMe_api_public_generated_docs_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/api/devices",
    "title": "AllDevices An array of all devices",
    "group": "Device",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n\"_id\": \"dsohsdohsdofhsofhosfhsofh\",\n\"name\": \"Mary's iPhone\",\n\"user\": \"mary\",\n\"sensorData\": [\n{\n\"ts\": \"1529542230\",\n\"temp\": 12,\n\"loc\": {\n\"lat\": -37.84674,\n\"lon\": 145.115113\n}\n},\n{\n\"ts\": \"1529572230\",\n\"temp\": 17,\n\"loc\": {\n\"lat\": -37.850026,\n\"lon\": 145.117683\n}\n}\n]\n}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"User does not exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api.js",
    "groupTitle": "Device",
    "name": "GetApiDevices"
  }
] });
