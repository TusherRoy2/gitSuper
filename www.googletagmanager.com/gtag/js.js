// Copyright 2012 Google Inc. All rights reserved.

(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "vtp_signal": 0,
                "function": "__c",
                "vtp_value": 0
            }, {
                "function": "__c",
                "vtp_value": "google.com.bd"
            }, {
                "function": "__c",
                "vtp_value": 0
            }, {
                "vtp_signal": 0,
                "function": "__c",
                "vtp_value": 0
            }, {
                "function": "__c",
                "vtp_value": "google.com.bd"
            }, {
                "function": "__c",
                "vtp_value": 0
            }],
            "tags": [{
                "function": "__ogt_1p_data_v2",
                "priority": 10,
                "vtp_isAutoEnabled": true,
                "vtp_autoCollectExclusionSelectors": ["list", ["map", "exclusionSelector", ""]],
                "vtp_isEnabled": true,
                "vtp_autoEmailEnabled": true,
                "vtp_autoPhoneEnabled": false,
                "vtp_autoAddressEnabled": false,
                "vtp_isAutoCollectPiiEnabledFlag": false,
                "tag_id": 10
            }, {
                "function": "__ccd_ga_first",
                "priority": 9,
                "vtp_instanceDestinationId": "G-610L9KESM0",
                "tag_id": 21
            }, {
                "function": "__set_product_settings",
                "priority": 8,
                "vtp_instanceDestinationId": "G-610L9KESM0",
                "vtp_foreignTldMacroResult": ["macro", 5],
                "vtp_isChinaVipRegionMacroResult": ["macro", 6],
                "tag_id": 20
            }, {
                "function": "__ogt_google_signals",
                "priority": 7,
                "vtp_googleSignals": "DISABLED",
                "vtp_instanceDestinationId": "G-610L9KESM0",
                "vtp_serverMacroResult": ["macro", 4],
                "tag_id": 19
            }, {
                "function": "__ccd_ga_regscope",
                "priority": 6,
                "vtp_settingsTable": ["list", ["map", "redactFieldGroup", "DEVICE_AND_GEO", "disallowAllRegions", false, "disallowedRegions", ""], ["map", "redactFieldGroup", "GOOGLE_SIGNALS", "disallowAllRegions", true, "disallowedRegions", ""]],
                "vtp_instanceDestinationId": "G-610L9KESM0",
                "tag_id": 18
            }, {
                "function": "__ccd_em_outbound_click",
                "priority": 5,
                "vtp_includeParams": true,
                "vtp_instanceDestinationId": "G-610L9KESM0",
                "tag_id": 17
            }, {
                "function": "__ccd_em_scroll",
                "priority": 4,
                "vtp_includeParams": true,
                "vtp_instanceDestinationId": "G-610L9KESM0",
                "tag_id": 16
            }, {
                "function": "__ccd_em_site_search",
                "priority": 3,
                "vtp_searchQueryParams": "addsearch",
                "vtp_includeParams": true,
                "vtp_instanceDestinationId": "G-610L9KESM0",
                "tag_id": 15
            }, {
                "function": "__ccd_conversion_marking",
                "priority": 2,
                "vtp_conversionRules": ["list", ["map", "matchingRules", "{\"type\":5,\"args\":[{\"stringValue\":\"purchase\"},{\"contextValue\":{\"namespaceType\":1,\"keyParts\":[\"eventName\"]}}]}"]],
                "vtp_instanceDestinationId": "G-610L9KESM0",
                "tag_id": 14
            }, {
                "function": "__ccd_auto_redact",
                "priority": 1,
                "vtp_instanceDestinationId": "G-610L9KESM0",
                "tag_id": 13
            }, {
                "function": "__gct",
                "vtp_trackingId": "G-610L9KESM0",
                "vtp_sessionDuration": 0,
                "vtp_googleSignals": ["macro", 1],
                "vtp_foreignTld": ["macro", 2],
                "vtp_restrictDomain": ["macro", 3],
                "vtp_eventSettings": ["map"],
                "tag_id": 7
            }, {
                "function": "__ccd_ga_last",
                "priority": 0,
                "vtp_instanceDestinationId": "G-610L9KESM0",
                "tag_id": 12
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.init"
            }],
            "rules": [[["if", 0], ["add", 10]], [["if", 1], ["add", 0, 11, 9, 8, 7, 6, 5, 4, 3, 2, 1]]]
        },
        "runtime": [[50, "__ccd_auto_redact", [46, "a"], [50, "u", [46, "bh"], [36, [2, [15, "bh"], "replace", [7, [15, "t"], "\\$1"]]]], [50, "v", [46, "bh"], [52, "bi", ["c", [15, "bh"]]], [52, "bj", [7]], [65, "bk", [2, [15, "bi"], "split", [7, ""]], [46, [53, [52, "bl", [7, ["u", [15, "bk"]]]], [52, "bm", ["d", [15, "bk"]]], [22, [12, [15, "bm"], [45]], [46, [36, ["d", ["u", [15, "bh"]]]]]], [22, [21, [15, "bm"], [15, "bk"]], [46, [2, [15, "bl"], "push", [7, [15, "bm"]]], [22, [21, [15, "bk"], [2, [15, "bk"], "toLowerCase", [7]]], [46, [2, [15, "bl"], "push", [7, ["d", [2, [15, "bk"], "toLowerCase", [7]]]]]], [46, [22, [21, [15, "bk"], [2, [15, "bk"], "toUpperCase", [7]]], [46, [2, [15, "bl"], "push", [7, ["d", [2, [15, "bk"], "toUpperCase", [7]]]]]]]]]]], [22, [18, [17, [15, "bl"], "length"], 1], [46, [2, [15, "bj"], "push", [7, [0, [0, "(?:", [2, [15, "bl"], "join", [7, "|"]]], ")"]]]], [46, [2, [15, "bj"], "push", [7, [16, [15, "bl"], 0]]]]]]]], [36, [2, [15, "bj"], "join", [7, ""]]]], [50, "w", [46, "bh", "bi", "bj"], [52, "bk", ["y", [15, "bh"], [15, "bj"]]], [22, [28, [15, "bk"]], [46, [36, [15, "bh"]]]], [22, [28, [17, [15, "bk"], "search"]], [46, [36, [15, "bh"]]]], [41, "bl"], [3, "bl", [17, [15, "bk"], "search"]], [65, "bm", [15, "bi"], [46, [53, [52, "bn", [7, ["u", [15, "bm"]], ["v", [15, "bm"]]]], [65, "bo", [15, "bn"], [46, [53, [52, "bp", [30, [16, [15, "s"], [15, "bo"]], [43, [15, "s"], [15, "bo"], ["b", [0, [0, "([?&]", [15, "bo"]], "=)([^&]*)((?=[&]|$))"], "gi"]]]], [3, "bl", [2, [15, "bl"], "replace", [7, [15, "bp"], [0, [0, "$1", [15, "q"]], "$3"]]]]]]]]]], [22, [20, [15, "bl"], [17, [15, "bk"], "search"]], [46, [36, [15, "bh"]]]], [22, [20, [16, [15, "bl"], 0], "&"], [46, [3, "bl", [2, [15, "bl"], "substring", [7, 1]]]]], [22, [21, [16, [15, "bl"], 0], "?"], [46, [3, "bl", [0, "?", [15, "bl"]]]]], [22, [20, [15, "bl"], "?"], [46, [3, "bl", ""]]], [43, [15, "bk"], "search", [15, "bl"]], [36, ["z", [15, "bk"], [15, "bj"]]]], [50, "y", [46, "bh", "bi"], [22, [20, [15, "bi"], [17, [15, "r"], "PATH"]], [46, [3, "bh", [0, [15, "x"], [15, "bh"]]]]], [36, ["g", [15, "bh"]]]], [50, "z", [46, "bh", "bi"], [41, "bj"], [3, "bj", ""], [22, [20, [15, "bi"], [17, [15, "r"], "URL"]], [46, [53, [41, "bk"], [3, "bk", ""], [22, [30, [17, [15, "bh"], "username"], [17, [15, "bh"], "password"]], [46, [3, "bk", [0, [15, "bk"], [0, [0, [0, [17, [15, "bh"], "username"], [39, [17, [15, "bh"], "password"], ":", ""]], [17, [15, "bh"], "password"]], "@"]]]]], [3, "bj", [0, [0, [0, [17, [15, "bh"], "protocol"], "//"], [15, "bk"]], [17, [15, "bh"], "host"]]]]]], [36, [0, [0, [0, [15, "bj"], [17, [15, "bh"], "pathname"]], [17, [15, "bh"], "search"]], [17, [15, "bh"], "hash"]]]], [50, "ba", [46, "bh", "bi"], [41, "bj"], [3, "bj", [2, [15, "bh"], "replace", [7, [15, "m"], [15, "q"]]]], [22, [30, [20, [15, "bi"], [17, [15, "r"], "URL"]], [20, [15, "bi"], [17, [15, "r"], "PATH"]]], [46, [53, [52, "bk", ["y", [15, "bj"], [15, "bi"]]], [22, [20, [15, "bk"], [44]], [46, [36, [15, "bj"]]]], [52, "bl", [17, [15, "bk"], "search"]], [52, "bm", [2, [15, "bl"], "replace", [7, [15, "n"], [15, "q"]]]], [22, [20, [15, "bl"], [15, "bm"]], [46, [36, [15, "bj"]]]], [43, [15, "bk"], "search", [15, "bm"]], [3, "bj", ["z", [15, "bk"], [15, "bi"]]]]]], [36, [15, "bj"]]], [50, "bb", [46, "bh"], [22, [20, [15, "bh"], [15, "p"]], [46, [36, [17, [15, "r"], "PATH"]]], [46, [22, [21, [2, [15, "o"], "indexOf", [7, [15, "bh"]]], [27, 1]], [46, [36, [17, [15, "r"], "URL"]]], [46, [36, [17, [15, "r"], "TEXT"]]]]]]], [50, "bc", [46, "bh", "bi"], [41, "bj"], [3, "bj", false], [52, "bk", ["f", [15, "bh"]]], [38, [15, "bk"], [46, "string", "array", "object"], [46, [5, [46, [52, "bl", ["ba", [15, "bh"], [15, "bi"]]], [22, [21, [15, "bh"], [15, "bl"]], [46, [36, [15, "bl"]]]], [4]]], [5, [46, [53, [41, "bm"], [3, "bm", 0], [63, [7, "bm"], [23, [15, "bm"], [17, [15, "bh"], "length"]], [33, [15, "bm"], [3, "bm", [0, [15, "bm"], 1]]], [46, [53, [52, "bn", ["bc", [16, [15, "bh"], [15, "bm"]], [17, [15, "r"], "TEXT"]]], [22, [21, [15, "bn"], [44]], [46, [43, [15, "bh"], [15, "bm"], [15, "bn"]], [3, "bj", true]]]]]]], [4]]], [5, [46, [54, "bm", [15, "bh"], [46, [53, [52, "bn", ["bc", [16, [15, "bh"], [15, "bm"]], [17, [15, "r"], "TEXT"]]], [22, [21, [15, "bn"], [44]], [46, [43, [15, "bh"], [15, "bm"], [15, "bn"]], [3, "bj", true]]]]]], [4]]]]], [36, [39, [15, "bj"], [15, "bh"], [44]]]], [50, "bg", [46, "bh", "bi"], [52, "bj", [30, [2, [15, "bh"], "getMetadata", [7, [15, "bf"]]], [7]]], [22, [20, [2, [15, "bj"], "indexOf", [7, [15, "bi"]]], [27, 1]], [46, [2, [15, "bj"], "push", [7, [15, "bi"]]]]], [2, [15, "bh"], "setMetadata", [7, [15, "bf"], [15, "bj"]]]], [52, "b", ["require", "internal.createRegex"]], [52, "c", ["require", "decodeUriComponent"]], [52, "d", ["require", "encodeUriComponent"]], [52, "e", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "f", ["require", "getType"]], [52, "g", ["require", "parseUrl"]], [52, "h", ["require", "internal.registerCcdCallback"]], [52, "i", [17, [15, "a"], "instanceDestinationId"]], [52, "j", [17, [15, "a"], "redactEmail"]], [52, "k", [17, [15, "a"], "redactQueryParams"]], [52, "l", [39, [15, "k"], [2, [15, "k"], "split", [7, ","]], [7]]], [22, [30, [28, [16, [15, "e"], "enableCcdAutoRedaction"]], [1, [28, [17, [15, "l"], "length"]], [28, [15, "j"]]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "m", ["b", "[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}", "gi"]], [52, "n", ["b", [0, "([A-Z0-9._-]|%25|%2B)+%40[A-Z0-9.-]", "+\\.[A-Z]{2,}"], "gi"]], [52, "o", [7, "page_location", "page_referrer", "page_path", "link_url", "video_url", "form_destination"]], [52, "p", "page_path"], [52, "q", "(redacted)"], [52, "r", [8, "TEXT", 0, "URL", 1, "PATH", 2]], [52, "s", [8]], [52, "t", ["b", "([\\\\^$.|?*+(){}]|\\[|\\[)", "g"]], [52, "x", "http://."], [52, "bd", 15], [52, "be", 16], [52, "bf", "event_usage"], ["h", [15, "i"], [51, "", [7, "bh"], [22, [15, "j"], [46, [53, [52, "bi", [2, [15, "bh"], "getHitKeys", [7]]], [65, "bj", [15, "bi"], [46, [53, [22, [20, [15, "bj"], "_sst_parameters"], [46, [6]]], [52, "bk", [2, [15, "bh"], "getHitData", [7, [15, "bj"]]]], [22, [28, [15, "bk"]], [46, [6]]], [52, "bl", ["bb", [15, "bj"]]], [52, "bm", ["bc", [15, "bk"], [15, "bl"]]], [22, [21, [15, "bm"], [44]], [46, [2, [15, "bh"], "setHitData", [7, [15, "bj"], [15, "bm"]]], ["bg", [15, "bh"], [15, "bd"]]]]]]]]]], [22, [17, [15, "l"], "length"], [46, [65, "bi", [15, "o"], [46, [53, [52, "bj", [2, [15, "bh"], "getHitData", [7, [15, "bi"]]]], [22, [28, [15, "bj"]], [46, [6]]], [52, "bk", [39, [20, [15, "bi"], [15, "p"]], [17, [15, "r"], "PATH"], [17, [15, "r"], "URL"]]], [52, "bl", ["w", [15, "bj"], [15, "l"], [15, "bk"]]], [22, [21, [15, "bl"], [15, "bj"]], [46, [2, [15, "bh"], "setHitData", [7, [15, "bi"], [15, "bl"]]], ["bg", [15, "bh"], [15, "be"]]]]]]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_conversion_marking", [46, "a"], [22, [30, [28, [17, [15, "a"], "conversionRules"]], [20, [17, [17, [15, "a"], "conversionRules"], "length"], 0]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "b", ["require", "internal.registerCcdCallback"]], [52, "c", [15, "__module_ccdConversionMarking"]], ["b", [17, [15, "a"], "instanceDestinationId"], [51, "", [7, "d"], [2, [15, "c"], "callback", [7, [15, "d"], [15, "a"]]]]], [2, [15, "a"], "gtmOnSuccess", [7]], [36]], [50, "__ccd_em_outbound_click", [46, "a"], [50, "s", [46, "y"], [22, [28, [15, "y"]], [46, [36, [44]]]], [41, "z"], [3, "z", ""], [22, [1, [15, "y"], [17, [15, "y"], "href"]], [46, [53, [41, "ba"], [3, "ba", [2, [17, [15, "y"], "href"], "indexOf", [7, "#"]]], [3, "z", [39, [23, [15, "ba"], 0], [17, [15, "y"], "href"], [2, [17, [15, "y"], "href"], "substring", [7, 0, [15, "ba"]]]]]]]], [36, [15, "z"]]], [50, "t", [46, "y"], [22, [28, [15, "y"]], [46, [36, [44]]]], [41, "z"], [3, "z", [17, [15, "y"], "hostname"]], [52, "ba", [2, [15, "z"], "match", [7, "^www\\d*\\."]]], [22, [1, [15, "ba"], [16, [15, "ba"], 0]], [46, [3, "z", [2, [15, "z"], "substring", [7, [17, [16, [15, "ba"], 0], "length"]]]]]], [36, [15, "z"]]], [50, "u", [46, "y"], [22, [28, [15, "y"]], [46, [36, false]]], [52, "z", [2, [17, [15, "y"], "hostname"], "toLowerCase", [7]]], [41, "ba"], [3, "ba", [2, ["t", ["q", ["p"]]], "toLowerCase", [7]]], [41, "bb"], [3, "bb", [37, [17, [15, "z"], "length"], [17, [15, "ba"], "length"]]], [22, [1, [18, [15, "bb"], 0], [29, [2, [15, "ba"], "charAt", [7, 0]], "."]], [46, [32, [15, "bb"], [3, "bb", [37, [15, "bb"], 1]]], [3, "ba", [0, ".", [15, "ba"]]]]], [22, [1, [19, [15, "bb"], 0], [12, [2, [15, "z"], "indexOf", [7, [15, "ba"], [15, "bb"]]], [15, "bb"]]], [46, [36, false]]], [36, true]], [50, "x", [46, "y"], [52, "z", [8]], [43, [15, "z"], [15, "j"], true], [43, [15, "z"], [15, "f"], true], [43, [15, "y"], "eventMetadata", [15, "z"]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "internal.registerCcdCallback"]], [52, "e", ["require", "templateStorage"]], [52, "f", "speculative"], [52, "g", "ae_block_outbound_click"], [52, "h", "click"], [52, "i", "isRegistered"], [52, "j", "em_event"], [52, "k", [17, [15, "a"], "instanceDestinationId"]], [22, ["c", [15, "k"], [15, "g"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], ["d", [15, "k"], [51, "", [7, "y"], [22, [30, [21, [2, [15, "y"], "getEventName", [7]], [15, "h"]], [28, [2, [15, "y"], "getMetadata", [7, [15, "j"]]]]], [46, [36]]], [22, ["c", [15, "k"], [15, "g"]], [46, [2, [15, "y"], "abort", [7]], [36]]], [2, [15, "y"], "setMetadata", [7, [15, "f"], false]], [22, [28, [17, [15, "a"], "includeParams"]], [46, [2, [15, "y"], "setHitData", [7, "link_id", [44]]], [2, [15, "y"], "setHitData", [7, "link_classes", [44]]], [2, [15, "y"], "setHitData", [7, "link_url", [44]]], [2, [15, "y"], "setHitData", [7, "link_domain", [44]]], [2, [15, "y"], "setHitData", [7, "outbound", [44]]]]]]], [22, [2, [15, "e"], "getItem", [7, [15, "i"]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "l", ["require", "internal.addDataLayerEventListener"]], [52, "m", ["require", "internal.enableAutoEventOnLinkClick"]], [52, "n", ["require", "internal.getDestinationIds"]], [52, "o", ["require", "internal.getRemoteConfigParameter"]], [52, "p", ["require", "getUrl"]], [52, "q", ["require", "parseUrl"]], [52, "r", ["require", "internal.sendGtagEvent"]], [52, "v", ["o", [15, "k"], "cross_domain_conditions"]], [52, "w", ["m", [8, "affiliateDomains", [15, "v"], "checkValidation", true, "waitForTags", false]]], [22, [28, [15, "w"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [2, [15, "e"], "setItem", [7, [15, "i"], true]], ["l", "gtm.linkClick", [51, "", [7, "y", "z"], [52, "ba", ["q", [16, [15, "y"], "gtm.elementUrl"]]], [22, [28, ["u", [15, "ba"]]], [46, ["z"], [36]]], [52, "bb", [8, "link_id", [16, [15, "y"], "gtm.elementId"], "link_classes", [16, [15, "y"], "gtm.elementClasses"], "link_url", ["s", [15, "ba"]], "link_domain", ["t", [15, "ba"]], "outbound", true]], [43, [15, "bb"], "event_callback", [15, "z"]], [52, "bc", [8, "eventId", [16, [15, "y"], "gtm.uniqueEventId"]]], [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"], [46, [43, [15, "bc"], "deferrable", true]]], ["x", [15, "bc"]], ["r", ["n"], [15, "h"], [15, "bb"], [15, "bc"]]], [15, "w"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_scroll", [46, "a"], [50, "q", [46, "r"], [52, "s", [8]], [43, [15, "s"], [15, "j"], true], [43, [15, "s"], [15, "f"], true], [43, [15, "r"], "eventMetadata", [15, "s"]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "internal.registerCcdCallback"]], [52, "e", ["require", "templateStorage"]], [52, "f", "speculative"], [52, "g", "ae_block_scroll"], [52, "h", "scroll"], [52, "i", "isRegistered"], [52, "j", "em_event"], [52, "k", [17, [15, "a"], "instanceDestinationId"]], [22, ["c", [15, "k"], [15, "g"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], ["d", [15, "k"], [51, "", [7, "r"], [22, [30, [21, [2, [15, "r"], "getEventName", [7]], [15, "h"]], [28, [2, [15, "r"], "getMetadata", [7, [15, "j"]]]]], [46, [36]]], [22, ["c", [15, "k"], [15, "g"]], [46, [2, [15, "r"], "abort", [7]], [36]]], [2, [15, "r"], "setMetadata", [7, [15, "f"], false]], [22, [28, [17, [15, "a"], "includeParams"]], [46, [2, [15, "r"], "setHitData", [7, "percent_scrolled", [44]]]]]]], [22, [2, [15, "e"], "getItem", [7, [15, "i"]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "l", ["require", "internal.addDataLayerEventListener"]], [52, "m", ["require", "internal.enableAutoEventOnScroll"]], [52, "n", ["require", "internal.getDestinationIds"]], [52, "o", ["require", "internal.sendGtagEvent"]], [52, "p", ["m", [8, "verticalThresholdUnits", "PERCENT", "verticalThresholds", 90]]], [22, [28, [15, "p"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [2, [15, "e"], "setItem", [7, [15, "i"], true]], ["l", "gtm.scrollDepth", [51, "", [7, "r", "s"], ["s"], [52, "t", [8, "eventId", [16, [15, "r"], "gtm.uniqueEventId"]]], [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"], [46, [43, [15, "t"], "deferrable", true]]], [52, "u", [8, "percent_scrolled", [16, [15, "r"], "gtm.scrollThreshold"]]], ["q", [15, "t"]], ["o", ["n"], [15, "h"], [15, "u"], [15, "t"]]], [15, "p"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_site_search", [46, "a"], [50, "e", [46, "j"], [52, "k", [2, [30, [15, "j"], ""], "split", [7, ","]]], [53, [41, "l"], [3, "l", 0], [63, [7, "l"], [23, [15, "l"], [17, [15, "k"], "length"]], [33, [15, "l"], [3, "l", [0, [15, "l"], 1]]], [46, [53, [52, "m", ["b", [2, [16, [15, "k"], [15, "l"]], "trim", [7]]]], [22, [21, [15, "m"], [44]], [46, [36, [15, "m"]]]]]]]]], [50, "f", [46, "j", "k"], [52, "l", [8, "search_term", [15, "j"]]], [52, "m", [2, [30, [15, "k"], ""], "split", [7, ","]]], [53, [41, "n"], [3, "n", 0], [63, [7, "n"], [23, [15, "n"], [17, [15, "m"], "length"]], [33, [15, "n"], [3, "n", [0, [15, "n"], 1]]], [46, [53, [52, "o", [2, [16, [15, "m"], [15, "n"]], "trim", [7]]], [52, "p", ["b", [15, "o"]]], [22, [21, [15, "p"], [44]], [46, [43, [15, "l"], [0, "q_", [15, "o"]], [15, "p"]]]]]]]], [36, [15, "l"]]], [52, "b", ["require", "getQueryParameters"]], [52, "c", ["require", "internal.sendGtagEvent"]], [52, "d", ["require", "getContainerVersion"]], [52, "g", ["e", [17, [15, "a"], "searchQueryParams"]]], [52, "h", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["d"], "containerId"]]], [52, "i", [8, "deferrable", true, "eventId", [17, [15, "a"], "gtmEventId"]]], [22, [15, "g"], [46, [53, [52, "j", [39, [28, [28, [17, [15, "a"], "includeParams"]]], ["f", [15, "g"], [17, [15, "a"], "additionalQueryParams"]], [8]]], ["c", [15, "h"], "view_search_results", [15, "j"], [15, "i"]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_ga_first", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_ga_last", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_ga_regscope", [46, "a"], [52, "b", [15, "__module_ccdGaRegionScopedSettings"]], [2, [15, "b"], "applyRegionScopedSettings", [7, [15, "a"]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ogt_1p_data_v2", [46, "a"], [50, "j", [46, "m", "n", "o"], [22, [20, [16, [15, "n"], "type"], [15, "o"]], [46, [22, [28, [15, "m"]], [46, [3, "m", [8]]]], [22, [28, [16, [15, "m"], [15, "o"]]], [46, [43, [15, "m"], [15, "o"], [16, [15, "n"], "userData"]]]]]], [36, [15, "m"]]], [50, "k", [46, "m", "n"], [52, "o", [16, [15, "a"], [15, "m"]]], [41, "p"], [22, [20, [15, "o"], "CSS_SELECTOR"], [46, [3, "p", "css_selector"]], [46, [22, [20, [15, "o"], "JS_VAR"], [46, [3, "p", "js_variable"]]]]], [36, [8, "selector_type", [15, "p"], "value", [16, [15, "a"], [15, "n"]]]]], [50, "l", [46, "m", "n", "o", "p"], [22, [28, [16, [15, "a"], [15, "p"]]], [46, [36]]], [43, [15, "m"], [15, "n"], ["k", [15, "o"], [15, "p"]]]], [22, [28, [17, [15, "a"], "isEnabled"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getDestinationIds"]], [52, "d", ["require", "internal.getProductSettingsParameter"]], [52, "e", ["require", "internal.locateUserData"]], [52, "f", ["require", "internal.setRemoteConfigParameter"]], [52, "g", ["require", "internal.registerCcdCallback"]], [52, "h", [30, ["c"], [7]]], [52, "i", [8, "enable_code", true]], [22, [17, [15, "a"], "isAutoEnabled"], [46, [53, [52, "m", [7]], [22, [1, [17, [15, "a"], "autoCollectExclusionSelectors"], [17, [17, [15, "a"], "autoCollectExclusionSelectors"], "length"]], [46, [53, [41, "o"], [3, "o", 0], [63, [7, "o"], [23, [15, "o"], [17, [17, [15, "a"], "autoCollectExclusionSelectors"], "length"]], [33, [15, "o"], [3, "o", [0, [15, "o"], 1]]], [46, [53, [52, "p", [17, [16, [17, [15, "a"], "autoCollectExclusionSelectors"], [15, "o"]], "exclusionSelector"]], [22, [15, "p"], [46, [2, [15, "m"], "push", [7, [15, "p"]]]]]]]]]]], [52, "n", [39, [17, [15, "a"], "isAutoCollectPiiEnabled"], [17, [15, "a"], "autoEmailEnabled"], true]], [43, [15, "i"], "auto_detect", [8, "email", [15, "n"], "phone", [17, [15, "a"], "autoPhoneEnabled"], "address", [17, [15, "a"], "autoAddressEnabled"], "exclude_element_selectors", [15, "m"]]]]]], [22, [17, [15, "a"], "isManualEnabled"], [46, [53, [52, "m", [8]], [22, [17, [15, "a"], "manualEmailEnabled"], [46, ["l", [15, "m"], "email", "emailType", "emailValue"]]], [22, [17, [15, "a"], "manualPhoneEnabled"], [46, ["l", [15, "m"], "phone", "phoneType", "phoneValue"]]], [22, [17, [15, "a"], "manualAddressEnabled"], [46, [53, [52, "n", [8]], ["l", [15, "n"], "first_name", "firstNameType", "firstNameValue"], ["l", [15, "n"], "last_name", "lastNameType", "lastNameValue"], ["l", [15, "n"], "street", "streetType", "streetValue"], ["l", [15, "n"], "city", "cityType", "cityValue"], ["l", [15, "n"], "region", "regionType", "regionValue"], ["l", [15, "n"], "country", "countryType", "countryValue"], ["l", [15, "n"], "postal_code", "postalCodeType", "postalCodeValue"], [43, [15, "m"], "name_and_address", [7, [15, "n"]]]]]], [43, [15, "i"], "selectors", [15, "m"]]]]], [65, "m", [15, "h"], [46, [53, [22, [1, [1, [28, [16, [15, "b"], "enableCcdUserData"]], [28, ["d", [15, "m"], "ads_customer_data_terms"]]], [28, ["d", [15, "m"], "ga_customer_data_terms"]]], [46, [6]]], [41, "n"], [3, "n", [15, "i"]], [22, [1, [20, [2, [15, "m"], "indexOf", [7, "G-"]], 0], [28, [16, [15, "b"], "enableEuidAutoMode"]]], [46, [53, [52, "q", [8, "enable_code", true, "selectors", [16, [15, "i"], "selectors"]]], [3, "n", [15, "q"]]]]], ["f", [15, "m"], "user_data_settings", [15, "n"]], [22, [28, [16, [15, "b"], "enableCcdUserData"]], [46, [6]]], [52, "o", [16, [15, "n"], "auto_detect"]], [22, [28, [15, "o"]], [46, [6]]], [52, "p", [51, "", [7, "q"], [52, "r", [2, [15, "q"], "getMetadata", [7, "user_data_from_automatic"]]], [22, [15, "r"], [46, [36, [15, "r"]]]], [52, "s", ["e", [8, "excludeElementSelectors", [16, [15, "o"], "exclude_element_selectors"], "fieldFilters", [8, "email", [16, [15, "o"], "email"], "phone", [16, [15, "o"], "phone"], "address", [16, [15, "o"], "address"]]]]], [52, "t", [1, [15, "s"], [16, [15, "s"], "elements"]]], [52, "u", [8]], [22, [1, [15, "t"], [18, [17, [15, "t"], "length"], 0]], [46, [53, [41, "v"], [53, [41, "w"], [3, "w", 0], [63, [7, "w"], [23, [15, "w"], [17, [15, "t"], "length"]], [33, [15, "w"], [3, "w", [0, [15, "w"], 1]]], [46, [53, [52, "x", [16, [15, "t"], [15, "w"]]], ["j", [15, "u"], [15, "x"], "email"], [22, [16, [15, "b"], "enableAutoPiiOnPhoneAndAddress"], [46, ["j", [15, "u"], [15, "x"], "phone_number"], [3, "v", ["j", [15, "v"], [15, "x"], "first_name"]], [3, "v", ["j", [15, "v"], [15, "x"], "last_name"]], [3, "v", ["j", [15, "v"], [15, "x"], "country"]], [3, "v", ["j", [15, "v"], [15, "x"], "postal_code"]]]]]]]], [22, [1, [15, "v"], [28, [16, [15, "u"], "address"]]], [46, [43, [15, "u"], "address", [15, "v"]]]]]]], [2, [15, "q"], "setMetadata", [7, "user_data_from_automatic", [15, "u"]]], [36, [15, "u"]]]], ["g", [15, "m"], [51, "", [7, "q"], [2, [15, "q"], "setMetadata", [7, "user_data_from_automatic_getter", [15, "p"]]]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ogt_google_signals", [46, "a"], [52, "b", [15, "__module_ccdGoogleSignals"]], [2, [15, "b"], "setup", [7, [15, "a"]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__set_product_settings", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["c"], "containerId"]]], ["b", [15, "d"], "google_tld", [17, [15, "a"], "foreignTldMacroResult"]], ["b", [15, "d"], "ga_restrict_domain", [20, [17, [15, "a"], "isChinaVipRegionMacroResult"], 1]], [2, [15, "a"], "gtmOnSuccess", [7]]], [52, "__module_ccdConversionMarking", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "m", [46, "n", "o"], [52, "p", [8, "preHit", [15, "n"]]], [65, "q", [17, [15, "o"], "conversionRules"], [46, [22, ["c", [17, [15, "q"], "matchingRules"], [15, "p"]], [46, [2, [15, "n"], "setMetadata", [7, [15, "d"], true]], [4]]]]], [22, [2, [15, "n"], "getMetadata", [7, [15, "e"]]], [46, [22, [28, [15, "k"]], [46, [53, [52, "q", ["b", [15, "n"], [8, "omitHitData", true, "omitMetadata", true]]], [2, [15, "q"], "setEventName", [7, [15, "i"]]], [3, "k", [8, "preHit", [15, "q"]]]]]], [65, "q", [17, [15, "o"], "conversionRules"], [46, [22, ["c", [17, [15, "q"], "matchingRules"], [15, "k"]], [46, [2, [15, "n"], "setMetadata", [7, [15, "f"], true]], [4]]]]]]], [22, [2, [15, "n"], "getMetadata", [7, [15, "g"]]], [46, [22, [28, [15, "l"]], [46, [53, [52, "q", ["b", [15, "n"], [8, "omitHitData", true, "omitMetadata", true]]], [2, [15, "q"], "setEventName", [7, [15, "j"]]], [3, "l", [8, "preHit", [15, "q"]]]]]], [65, "q", [17, [15, "o"], "conversionRules"], [46, [22, ["c", [17, [15, "q"], "matchingRules"], [15, "l"]], [46, [2, [15, "n"], "setMetadata", [7, [15, "h"], true]], [4]]]]]]]], [52, "b", ["require", "internal.copyPreHit"]], [52, "c", ["require", "internal.evaluateBooleanExpression"]], [52, "d", "is_conversion"], [52, "e", "is_first_visit"], [52, "f", "is_first_visit_conversion"], [52, "g", "is_session_start"], [52, "h", "is_session_start_conversion"], [52, "i", "first_visit"], [52, "j", "session_start"], [41, "k"], [41, "l"], [36, [8, "callback", [15, "m"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdGaRegionScopedSettings", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "h", [46, "j"], [50, "n", [46, "o"], [22, [30, [28, [15, "l"]], [21, [17, [15, "l"], "length"], 2]], [46, [36, false]]], [52, "p", ["i", [15, "o"]]], [53, [41, "q"], [3, "q", 0], [63, [7, "q"], [23, [15, "q"], [17, [15, "p"], "length"]], [33, [15, "q"], [3, "q", [0, [15, "q"], 1]]], [46, [53, [52, "r", [16, [15, "p"], [15, "q"]]], [52, "s", [17, [15, "r"], "countryCode"]], [52, "t", [17, [15, "r"], "regionCode"]], [52, "u", [20, [15, "s"], [15, "l"]]], [52, "v", [30, [28, [15, "t"]], [20, [15, "t"], [15, "m"]]]], [22, [1, [15, "u"], [15, "v"]], [46, [36, true]]]]]]], [36, false]], [22, [28, [17, [15, "j"], "settingsTable"]], [46, [36]]], [52, "k", [30, [17, [15, "j"], "instanceDestinationId"], [17, ["b"], "containerId"]]], [52, "l", ["d"]], [52, "m", ["e"]], [53, [41, "o"], [3, "o", 0], [63, [7, "o"], [23, [15, "o"], [17, [17, [15, "j"], "settingsTable"], "length"]], [33, [15, "o"], [3, "o", [0, [15, "o"], 1]]], [46, [53, [52, "p", [16, [17, [15, "j"], "settingsTable"], [15, "o"]]], [22, [30, [17, [15, "p"], "disallowAllRegions"], ["n", [17, [15, "p"], "disallowedRegions"]]], [46, [53, [52, "q", [16, [15, "g"], [17, [15, "p"], "redactFieldGroup"]]], [22, [28, [15, "q"]], [46, [6]]], [53, [41, "r"], [3, "r", 0], [63, [7, "r"], [23, [15, "r"], [17, [15, "q"], "length"]], [33, [15, "r"], [3, "r", [0, [15, "r"], 1]]], [46, [53, [52, "s", [16, [15, "q"], [15, "r"]]], ["c", [15, "k"], [17, [15, "s"], "name"], [17, [15, "s"], "value"]]]]]]]]]]]]]], [50, "i", [46, "j"], [52, "k", [7]], [22, [28, [15, "j"]], [46, [36, [15, "k"]]]], [52, "l", [2, [15, "j"], "split", [7, ","]]], [53, [41, "m"], [3, "m", 0], [63, [7, "m"], [23, [15, "m"], [17, [15, "l"], "length"]], [33, [15, "m"], [3, "m", [0, [15, "m"], 1]]], [46, [53, [52, "n", [2, [16, [15, "l"], [15, "m"]], "trim", [7]]], [22, [28, [15, "n"]], [46, [6]]], [52, "o", [2, [15, "n"], "split", [7, "-"]]], [52, "p", [16, [15, "o"], 0]], [52, "q", [39, [20, [17, [15, "o"], "length"], 2], [15, "n"], [44]]], [22, [30, [28, [15, "p"]], [21, [17, [15, "p"], "length"], 2]], [46, [6]]], [22, [1, [21, [15, "q"], [44]], [30, [23, [17, [15, "q"], "length"], 4], [18, [17, [15, "q"], "length"], 6]]], [46, [6]]], [2, [15, "k"], "push", [7, [8, "countryCode", [15, "p"], "regionCode", [15, "q"]]]]]]]], [36, [15, "k"]]], [52, "b", ["require", "getContainerVersion"]], [52, "c", ["require", "internal.setRemoteConfigParameter"]], [52, "d", ["require", "internal.getCountryCode"]], [52, "e", ["require", "internal.getRegionCode"]], [41, "f"], [52, "g", [8, "GOOGLE_SIGNALS", [7, [8, "name", "allow_google_signals", "value", false]], "DEVICE_AND_GEO", [7, [8, "name", "geo_granularity", "value", true], [8, "name", "redact_device_info", "value", true]]]], [36, [8, "applyRegionScopedSettings", [15, "h"]]]], [36, ["a"]]]], ["$0"]]], [52, "__module_ccdGoogleSignals", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "e", [46, "f"], [52, "g", [30, [17, [15, "f"], "instanceDestinationId"], [17, ["c"], "containerId"]]], ["b", [15, "g"], "google_signals", [20, [17, [15, "f"], "serverMacroResult"], 1]], [22, [17, [15, "d"], "enableGa4OnoRemarketing"], [46, ["b", [15, "g"], "google_ono", [20, [17, [15, "f"], "serverMacroResult"], 2]]]]], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [36, [8, "setup", [15, "e"]]]], [36, ["a"]]]], ["$0"]]]
        ],
        "entities": {
            "__ccd_auto_redact": {
                "2": true
            },
            "__ccd_conversion_marking": {
                "2": true
            },
            "__ccd_em_outbound_click": {
                "2": true
            },
            "__ccd_em_scroll": {
                "2": true
            },
            "__ccd_em_site_search": {
                "2": true
            },
            "__ccd_ga_first": {
                "2": true
            },
            "__ccd_ga_last": {
                "2": true
            },
            "__ccd_ga_regscope": {
                "2": true
            },
            "__ogt_1p_data_v2": {
                "2": true
            },
            "__ogt_google_signals": {
                "2": true
            },
            "__set_product_settings": {
                "2": true
            }

        },
        "permissions": {
            "__ccd_auto_redact": {},
            "__ccd_conversion_marking": {},
            "__ccd_em_outbound_click": {
                "get_url": {
                    "urlParts": "any",
                    "queriesAllowed": "any"
                },
                "listen_data_layer": {
                    "accessType": "specific",
                    "allowedEvents": ["gtm.linkClick"]
                },
                "process_dom_events": {
                    "targets": [{
                        "targetType": "document",
                        "eventName": "click"
                    }, {
                        "targetType": "document",
                        "eventName": "auxclick"
                    }]
                },
                "access_template_storage": {}
            },
            "__ccd_em_scroll": {
                "listen_data_layer": {
                    "accessType": "specific",
                    "allowedEvents": ["gtm.scrollDepth"]
                },
                "process_dom_events": {
                    "targets": [{
                        "targetType": "window",
                        "eventName": "resize"
                    }, {
                        "targetType": "window",
                        "eventName": "scroll"
                    }]
                },
                "access_template_storage": {}
            },
            "__ccd_em_site_search": {
                "get_url": {
                    "urlParts": "any",
                    "queriesAllowed": "any"
                },
                "read_container_data": {}
            },
            "__ccd_ga_first": {},
            "__ccd_ga_last": {},
            "__ccd_ga_regscope": {
                "read_container_data": {}
            },
            "__ogt_1p_data_v2": {
                "read_dom_elements": {
                    "selectors": [{
                        "type": "css",
                        "value": "*"
                    }]
                },
                "access_dom_element_property": {
                    "properties": [{
                        "property": "textContent",
                        "read": true,
                        "write": false
                    }, {
                        "property": "value",
                        "read": true,
                        "write": false
                    }, {
                        "property": "tagName",
                        "read": true,
                        "write": false
                    }, {
                        "property": "children",
                        "read": true,
                        "write": false
                    }, {
                        "property": "childElementCount",
                        "read": true,
                        "write": false
                    }]
                }
            },
            "__ogt_google_signals": {
                "read_container_data": {}
            },
            "__set_product_settings": {
                "read_container_data": {}
            }

        }
        ,
        "security_groups": {
            "google": ["__ccd_auto_redact", "__ccd_conversion_marking", "__ccd_em_outbound_click", "__ccd_em_scroll", "__ccd_em_site_search", "__ccd_ga_first", "__ccd_ga_last", "__ccd_ga_regscope", "__ogt_1p_data_v2", "__ogt_google_signals", "__set_product_settings"
            ]

        }

    };

    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var ba, ca = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, ea = function(a) {
        return a.raw = a
    }, fa = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        if (b)
            return b.call(a);
        if ("number" == typeof a.length)
            return {
                next: ca(a)
            };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }, ha = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , ja;
    if ("function" == typeof Object.setPrototypeOf)
        ja = Object.setPrototypeOf;
    else {
        var la;
        a: {
            var na = {
                a: !0
            }
              , oa = {};
            try {
                oa.__proto__ = na;
                la = oa.a;
                break a
            } catch (a) {}
            la = !1
        }
        ja = la ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var pa = ja
      , ra = function(a, b) {
        a.prototype = ha(b.prototype);
        a.prototype.constructor = a;
        if (pa)
            pa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.Zm = b.prototype
    }
      , sa = this || self
      , ta = function(a) {
        return a
    };
    var ua = function(a, b) {
        this.h = a;
        this.m = b
    };
    var va = function(a) {
        return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
    }
      , wa = function() {
        this.B = {};
        this.C = !1;
        this.J = {}
    }
      , xa = function(a, b) {
        var c = [], d;
        for (d in a.B)
            if (a.B.hasOwnProperty(d))
                switch (d = d.substr(5),
                b) {
                case 1:
                    c.push(d);
                    break;
                case 2:
                    c.push(a.get(d));
                    break;
                case 3:
                    c.push([d, a.get(d)])
                }
        return c
    };
    wa.prototype.get = function(a) {
        return this.B["dust." + a]
    }
    ;
    wa.prototype.set = function(a, b) {
        this.C || (a = "dust." + a,
        this.J.hasOwnProperty(a) || (this.B[a] = b))
    }
    ;
    wa.prototype.has = function(a) {
        return this.B.hasOwnProperty("dust." + a)
    }
    ;
    var ya = function(a, b) {
        b = "dust." + b;
        a.C || a.J.hasOwnProperty(b) || delete a.B[b]
    };
    wa.prototype.wc = function() {
        this.C = !0
    }
    ;
    wa.prototype.Sf = function() {
        return this.C
    }
    ;
    var za = function(a) {
        this.m = new wa;
        this.h = [];
        this.B = !1;
        a = a || [];
        for (var b in a)
            a.hasOwnProperty(b) && (va(b) ? this.h[Number(b)] = a[Number(b)] : this.m.set(b, a[b]))
    };
    ba = za.prototype;
    ba.toString = function(a) {
        if (a && 0 <= a.indexOf(this))
            return "";
        for (var b = [], c = 0; c < this.h.length; c++) {
            var d = this.h[c];
            null === d || void 0 === d ? b.push("") : d instanceof za ? (a = a || [],
            a.push(this),
            b.push(d.toString(a)),
            a.pop()) : b.push(d.toString())
        }
        return b.join(",")
    }
    ;
    ba.set = function(a, b) {
        if (!this.B)
            if ("length" === a) {
                if (!va(b))
                    throw Error("RangeError: Length property must be a valid integer.");
                this.h.length = Number(b)
            } else
                va(a) ? this.h[Number(a)] = b : this.m.set(a, b)
    }
    ;
    ba.get = function(a) {
        return "length" === a ? this.length() : va(a) ? this.h[Number(a)] : this.m.get(a)
    }
    ;
    ba.length = function() {
        return this.h.length
    }
    ;
    ba.Ub = function() {
        for (var a = xa(this.m, 1), b = 0; b < this.h.length; b++)
            a.push(b + "");
        return new za(a)
    }
    ;
    var Aa = function(a, b) {
        va(b) ? delete a.h[Number(b)] : ya(a.m, b)
    };
    ba = za.prototype;
    ba.pop = function() {
        return this.h.pop()
    }
    ;
    ba.push = function(a) {
        return this.h.push.apply(this.h, Array.prototype.slice.call(arguments))
    }
    ;
    ba.shift = function() {
        return this.h.shift()
    }
    ;
    ba.splice = function(a, b, c) {
        return new za(this.h.splice.apply(this.h, arguments))
    }
    ;
    ba.unshift = function(a) {
        return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments))
    }
    ;
    ba.has = function(a) {
        return va(a) && this.h.hasOwnProperty(a) || this.m.has(a)
    }
    ;
    ba.wc = function() {
        this.B = !0;
        Object.freeze(this.h);
        this.m.wc()
    }
    ;
    ba.Sf = function() {
        return this.B
    }
    ;
    var Ba = function() {
        this.quota = {}
    };
    Ba.prototype.reset = function() {
        this.quota = {}
    }
    ;
    var Ca = function(a, b) {
        this.R = a;
        this.J = function(c, d, e) {
            return c.apply(d, e)
        }
        ;
        this.B = b;
        this.m = new wa;
        this.h = this.C = void 0
    };
    Ca.prototype.add = function(a, b) {
        Da(this, a, b, !1)
    }
    ;
    var Da = function(a, b, c, d) {
        if (!a.m.Sf())
            if (d) {
                var e = a.m;
                e.set(b, c);
                e.J["dust." + b] = !0
            } else
                a.m.set(b, c)
    };
    Ca.prototype.set = function(a, b) {
        this.m.Sf() || (!this.m.has(a) && this.B && this.B.has(a) ? this.B.set(a, b) : this.m.set(a, b))
    }
    ;
    Ca.prototype.get = function(a) {
        return this.m.has(a) ? this.m.get(a) : this.B ? this.B.get(a) : void 0
    }
    ;
    Ca.prototype.has = function(a) {
        return !!this.m.has(a) || !(!this.B || !this.B.has(a))
    }
    ;
    var Ea = function(a) {
        var b = new Ca(a.R,a);
        a.C && (b.C = a.C);
        b.J = a.J;
        b.h = a.h;
        return b
    };
    var Fa = function() {}
      , Ga = function(a) {
        return "function" === typeof a
    }
      , k = function(a) {
        return "string" === typeof a
    }
      , Ia = function(a) {
        return "number" === typeof a && !isNaN(a)
    }
      , Ja = Array.isArray
      , Ka = function(a, b) {
        if (a && Ja(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c]))
                    return a[c]
    }
      , La = function(a, b) {
        if (!Ia(a) || !Ia(b) || a > b)
            a = 0,
            b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }
      , Oa = function(a, b) {
        for (var c = new Ma, d = 0; d < a.length; d++)
            c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e]))
                return !0;
        return !1
    }
      , m = function(a, b) {
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }
      , Pa = function(a) {
        return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
    }
      , Qa = function(a) {
        return Math.round(Number(a)) || 0
    }
      , Ra = function(a) {
        return "false" === String(a).toLowerCase() ? !1 : !!a
    }
      , Sa = function(a) {
        var b = [];
        if (Ja(a))
            for (var c = 0; c < a.length; c++)
                b.push(String(a[c]));
        return b
    }
      , Ta = function(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }
      , Ua = function() {
        return new Date(Date.now())
    }
      , Va = function() {
        return Ua().getTime()
    }
      , Ma = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    Ma.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    }
    ;
    Ma.prototype.get = function(a) {
        return this.values[this.prefix + a]
    }
    ;
    var Wa = function(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }
      , Xa = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }
      , Ya = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c])
    }
      , Za = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b))
                return !0;
        return !1
    }
      , $a = function(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            c.push(a[d]),
            c.push.apply(c, b[a[d]] || []);
        return c
    }
      , ab = function(a, b) {
        var c = z;
        b = b || [];
        for (var d = c, e = 0; e < a.length - 1; e++) {
            if (!d.hasOwnProperty(a[e]))
                return;
            d = d[a[e]];
            if (0 <= b.indexOf(d))
                return
        }
        return d
    }
      , bb = function(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
            d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
      , cb = /^\w{1,9}$/
      , db = function(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        m(a, function(d, e) {
            cb.test(d) && e && c.push(d)
        });
        return c.join(b)
    }
      , eb = function(a, b) {
        function c() {
            ++d === b && (e(),
            e = null,
            c.done = !0)
        }
        var d = 0
          , e = a;
        c.done = !1;
        return c
    };
    var gb = function(a, b) {
        wa.call(this);
        this.R = a;
        this.rb = b
    };
    ra(gb, wa);
    gb.prototype.toString = function() {
        return this.R
    }
    ;
    gb.prototype.Ub = function() {
        return new za(xa(this, 1))
    }
    ;
    gb.prototype.h = function(a, b) {
        return this.rb.apply(new hb(this,a), Array.prototype.slice.call(arguments, 1))
    }
    ;
    gb.prototype.m = function(a, b) {
        try {
            return this.h.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {}
    }
    ;
    var jb = function(a, b) {
        for (var c, d = 0; d < b.length && !(c = ib(a, b[d]),
        c instanceof ua); d++)
            ;
        return c
    }
      , ib = function(a, b) {
        try {
            var c = a.get(String(b[0]));
            if (!(c && c instanceof gb))
                throw Error("Attempting to execute non-function " + b[0] + ".");
            return c.h.apply(c, [a].concat(b.slice(1)))
        } catch (e) {
            var d = a.C;
            d && d(e, b.context ? {
                id: b[0],
                line: b.context.line
            } : null);
            throw e;
        }
    }
      , hb = function(a, b) {
        this.m = a;
        this.h = b
    }
      , C = function(a, b) {
        return Ja(b) ? ib(a.h, b) : b
    }
      , E = function(a) {
        return a.m.R
    };
    var kb = function() {
        wa.call(this)
    };
    ra(kb, wa);
    kb.prototype.Ub = function() {
        return new za(xa(this, 1))
    }
    ;
    var lb = {
        map: function(a) {
            for (var b = new kb, c = 0; c < arguments.length - 1; c += 2) {
                var d = C(this, arguments[c]) + ""
                  , e = C(this, arguments[c + 1]);
                b.set(d, e)
            }
            return b
        },
        list: function(a) {
            for (var b = new za, c = 0; c < arguments.length; c++) {
                var d = C(this, arguments[c]);
                b.push(d)
            }
            return b
        },
        fn: function(a, b, c) {
            var d = this.h
              , e = C(this, b);
            if (!(e instanceof za))
                throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            return new gb(a,function() {
                return function(g) {
                    var h = Ea(d);
                    void 0 === h.h && (h.h = this.h.h);
                    for (var l = Array.prototype.slice.call(arguments, 0), n = 0; n < l.length; n++)
                        if (l[n] = C(this, l[n]),
                        l[n]instanceof ua)
                            return l[n];
                    for (var p = e.get("length"), q = 0; q < p; q++)
                        q < l.length ? h.add(e.get(q), l[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new za(l));
                    var r = jb(h, f);
                    if (r instanceof ua)
                        return "return" === r.h ? r.m : r
                }
            }())
        },
        control: function(a, b) {
            return new ua(a,C(this, b))
        },
        undefined: function() {}
    };
    var mb = function() {
        this.B = new Ba;
        this.h = new Ca(this.B)
    }
      , nb = function(a, b, c) {
        var d = new gb(b,c);
        d.wc();
        a.h.set(b, d)
    }
      , pb = function(a, b, c) {
        lb.hasOwnProperty(b) && nb(a, c || b, lb[b])
    };
    mb.prototype.execute = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.m(c)
    }
    ;
    mb.prototype.m = function(a) {
        for (var b, c = 0; c < arguments.length; c++)
            b = ib(this.h, arguments[c]);
        return b
    }
    ;
    mb.prototype.C = function(a, b) {
        var c = Ea(this.h);
        c.h = a;
        for (var d, e = 1; e < arguments.length; e++)
            d = ib(c, arguments[e]);
        return d
    }
    ;
    function qb() {
        for (var a = rb, b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = c;
        return b
    }
    function sb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var rb, tb;
    function ub(a) {
        rb = rb || sb();
        tb = tb || qb();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length
              , e = c + 2 < a.length
              , f = a.charCodeAt(c)
              , g = d ? a.charCodeAt(c + 1) : 0
              , h = e ? a.charCodeAt(c + 2) : 0
              , l = f >> 2
              , n = (f & 3) << 4 | g >> 4
              , p = (g & 15) << 2 | h >> 6
              , q = h & 63;
            e || (q = 64,
            d || (p = 64));
            b.push(rb[l], rb[n], rb[p], rb[q])
        }
        return b.join("")
    }
    function vb(a) {
        function b(l) {
            for (; d < a.length; ) {
                var n = a.charAt(d++)
                  , p = tb[n];
                if (null != p)
                    return p;
                if (!/^[\s\xa0]*$/.test(n))
                    throw Error("Unknown base64 encoding at char: " + n);
            }
            return l
        }
        rb = rb || sb();
        tb = tb || qb();
        for (var c = "", d = 0; ; ) {
            var e = b(-1)
              , f = b(0)
              , g = b(64)
              , h = b(64);
            if (64 === h && -1 === e)
                return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2),
            64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    }
    ;var wb = {}
      , xb = function(a, b) {
        wb[a] = wb[a] || [];
        wb[a][b] = !0
    }
      , yb = function() {
        delete wb.GA4_EVENT
    }
      , zb = function(a) {
        var b = wb[a];
        if (!b || 0 === b.length)
            return "";
        for (var c = [], d = 0, e = 0; e < b.length; e++)
            0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)),
            d = 0),
            b[e] && (d |= 1 << e % 8);
        0 < d && c.push(String.fromCharCode(d));
        return ub(c.join("")).replace(/\.+$/, "")
    };
    var Ab = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    ;
    var Bb, Cb = function() {
        if (void 0 === Bb) {
            var a = null
              , b = sa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ta,
                        createScript: ta,
                        createScriptURL: ta
                    })
                } catch (c) {
                    sa.console && sa.console.error(c.message)
                }
                Bb = a
            } else
                Bb = a
        }
        return Bb
    };
    var Db = function(a) {
        this.h = a
    };
    Db.prototype.toString = function() {
        return this.h + ""
    }
    ;
    var Eb = function(a) {
        return a instanceof Db && a.constructor === Db ? a.h : "type_error:TrustedResourceUrl"
    }
      , Fb = {}
      , Gb = function(a) {
        var b = a
          , c = Cb()
          , d = c ? c.createScriptURL(b) : b;
        return new Db(d,Fb)
    };
    var Hb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var Ib, Jb;
    a: {
        for (var Kb = ["CLOSURE_FLAGS"], Lb = sa, Mb = 0; Mb < Kb.length; Mb++)
            if (Lb = Lb[Kb[Mb]],
            null == Lb) {
                Jb = null;
                break a
            }
        Jb = Lb
    }
    var Nb = Jb && Jb[610401301];
    Ib = null != Nb ? Nb : !1;
    function Ob() {
        var a = sa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b)
                return b
        }
        return ""
    }
    var Pb, Qb = sa.navigator;
    Pb = Qb ? Qb.userAgentData || null : null;
    function Rb(a) {
        return Ib ? Pb ? Pb.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }
    function Sb(a) {
        return -1 != Ob().indexOf(a)
    }
    ;function Tb() {
        return Ib ? !!Pb && 0 < Pb.brands.length : !1
    }
    function Ub() {
        return Tb() ? !1 : Sb("Opera")
    }
    function Vb() {
        return Sb("Firefox") || Sb("FxiOS")
    }
    function Wb() {
        return Tb() ? Rb("Chromium") : (Sb("Chrome") || Sb("CriOS")) && !(Tb() ? 0 : Sb("Edge")) || Sb("Silk")
    }
    ;var Xb = {}
      , Yb = function(a) {
        this.h = a
    };
    Yb.prototype.toString = function() {
        return this.h.toString()
    }
    ;
    var Zb = function(a) {
        return a instanceof Yb && a.constructor === Yb ? a.h : "type_error:SafeHtml"
    };
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    var $b = {};
    var ac = function() {}
      , bc = function(a) {
        this.h = a
    };
    ra(bc, ac);
    bc.prototype.toString = function() {
        return this.h
    }
    ;
    function cc(a, b) {
        var c = [new bc(dc[0].toLowerCase(),$b)];
        if (0 === c.length)
            throw Error("");
        var d = c.map(function(f) {
            var g;
            if (f instanceof bc)
                g = f.h;
            else
                throw Error("");
            return g
        })
          , e = b.toLowerCase();
        if (d.every(function(f) {
            return 0 !== e.indexOf(f)
        }))
            throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    }
    function ec(a) {
        var b = a.tagName;
        if ("SCRIPT" === b || "STYLE" === b)
            throw Error("");
    }
    ;(function() {
        return ""
    }
    ).toString().indexOf("`");
    function gc(a) {
        var b = a = hc(a)
          , c = Cb()
          , d = c ? c.createHTML(b) : b;
        return new Yb(d,Xb)
    }
    function hc(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    }
    ;var z = window
      , G = document
      , ic = navigator
      , jc = G.currentScript && G.currentScript.src
      , kc = function(a, b) {
        var c = z[a];
        z[a] = void 0 === c ? b : c;
        return z[a]
    }
      , lc = function(a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null,
            b())
        }
        )
    }
      , mc = {
        async: 1,
        nonce: 1,
        onerror: 1,
        onload: 1,
        src: 1,
        type: 1
    }
      , nc = {
        onload: 1,
        src: 1,
        width: 1,
        height: 1,
        style: 1
    };
    function oc(a, b, c) {
        b && m(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var pc = function(a, b, c, d, e) {
        var f = G.createElement("script");
        oc(f, d, mc);
        f.type = "text/javascript";
        f.async = !0;
        var g;
        g = Gb(hc(a));
        f.src = Eb(g);
        var h, l, n, p = null == (n = (l = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(l, "script[nonce]");
        (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", h);
        lc(f, b);
        c && (f.onerror = c);
        if (e)
            e.appendChild(f);
        else {
            var q = G.getElementsByTagName("script")[0] || G.body || G.head;
            q.parentNode.insertBefore(f, q)
        }
        return f
    }
      , qc = function() {
        if (jc) {
            var a = jc.toLowerCase();
            if (0 === a.indexOf("https://"))
                return 2;
            if (0 === a.indexOf("http://"))
                return 3
        }
        return 1
    }
      , rc = function(a, b, c, d, e) {
        var f;
        f = void 0 === f ? !0 : f;
        var g = e
          , h = !1;
        g || (g = G.createElement("iframe"),
        h = !0);
        oc(g, c, nc);
        d && m(d, function(n, p) {
            g.dataset[n] = p
        });
        f && (g.height = "0",
        g.width = "0",
        g.style.display = "none",
        g.style.visibility = "hidden");
        if (h) {
            var l = G.body && G.body.lastChild || G.body || G.head;
            l.parentNode.insertBefore(g, l)
        }
        lc(g, b);
        void 0 !== a && (g.src = a);
        return g
    }
      , sc = function(a, b, c, d) {
        var e = new Image(1,1);
        oc(e, d, {});
        e.onload = function() {
            e.onload = null;
            b && b()
        }
        ;
        e.onerror = function() {
            e.onerror = null;
            c && c()
        }
        ;
        e.src = a
    }
      , tc = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
      , uc = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }
      , H = function(a) {
        z.setTimeout(a, 0)
    }
      , vc = function(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }
      , wc = function(a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }
      , xc = function(a) {
        var b = G.createElement("div")
          , c = b
          , d = gc("A<div>" + a + "</div>");
        1 === c.nodeType && ec(c);
        c.innerHTML = Zb(d);
        b = b.lastChild;
        for (var e = []; b.firstChild; )
            e.push(b.removeChild(b.firstChild));
        return e
    }
      , yc = function(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++)
            d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()])
                return f;
            f = f.parentElement
        }
        return null
    }
      , zc = function(a) {
        var b;
        try {
            b = ic.sendBeacon && ic.sendBeacon(a)
        } catch (c) {
            xb("TAGGING", 15)
        }
        b || sc(a)
    }
      , Ac = function(a, b) {
        var c = a[b];
        c && "string" === typeof c.animVal && (c = c.animVal);
        return c
    }
      , Bc = function(a) {
        var b = {
            headers: {
                "Attribution-Reporting-Eligible": "trigger"
            },
            keepalive: !0,
            attributionReporting: {
                eventSourceEligible: !0,
                triggerEligible: !0
            }
        };
        try {
            z.fetch(a, b)
        } catch (c) {}
    }
      , Cc = function() {
        var a = z.performance;
        if (a && Ga(a.now))
            return a.now()
    }
      , Dc = function() {
        return z.performance || void 0
    };
    var Ec = function(a, b) {
        return C(this, a) && C(this, b)
    }
      , Fc = function(a, b) {
        return C(this, a) === C(this, b)
    }
      , Gc = function(a, b) {
        return C(this, a) || C(this, b)
    }
      , Hc = function(a, b) {
        a = C(this, a);
        b = C(this, b);
        return -1 < String(a).indexOf(String(b))
    }
      , Ic = function(a, b) {
        a = String(C(this, a));
        b = String(C(this, b));
        return a.substring(0, b.length) === b
    }
      , Jc = function(a, b) {
        a = C(this, a);
        b = C(this, b);
        switch (a) {
        case "pageLocation":
            var c = z.location.href;
            b instanceof kb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
            return c
        }
    };
    var Lc = function() {
        this.h = new mb;
        Kc(this)
    };
    Lc.prototype.execute = function(a) {
        return this.h.m(a)
    }
    ;
    var Kc = function(a) {
        pb(a.h, "map");
        var b = function(c, d) {
            nb(a.h, c, d)
        };
        b("and", Ec);
        b("contains", Hc);
        b("equals", Fc);
        b("or", Gc);
        b("startsWith", Ic);
        b("variable", Jc)
    };
    var Mc = function() {
        this.map = new Map
    };
    Mc.prototype.set = function(a, b) {
        this.map.set(a, b)
    }
    ;
    Mc.prototype.get = function(a) {
        return this.map.get(a)
    }
    ;
    var Nc = function() {
        this.keys = [];
        this.values = []
    };
    Nc.prototype.set = function(a, b) {
        this.keys.push(a);
        this.values.push(b)
    }
    ;
    Nc.prototype.get = function(a) {
        var b = this.keys.indexOf(a);
        if (-1 < b)
            return this.values[b]
    }
    ;
    var Oc = function(a) {
        if (a instanceof Oc)
            return a;
        this.Ga = a
    };
    Oc.prototype.toString = function() {
        return String(this.Ga)
    }
    ;
    var Qc = function(a) {
        wa.call(this);
        this.h = a;
        this.set("then", Pc(this));
        this.set("catch", Pc(this, !0));
        this.set("finally", Pc(this, !1, !0))
    };
    ra(Qc, kb);
    var Pc = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new gb("",function(d, e) {
            b && (e = d,
            d = void 0);
            c && (e = d);
            d instanceof gb || (d = void 0);
            e instanceof gb || (e = void 0);
            var f = Ea(this.h)
              , g = function(l) {
                return function(n) {
                    return c ? (l.h(f),
                    a.h) : l.h(f, n)
                }
            }
              , h = a.h.then(d && g(d), e && g(e));
            return new Qc(h)
        }
        )
    };
    /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Rc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/
      , Sc = function(a) {
        if (null == a)
            return String(a);
        var b = Rc.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }
      , Tc = function(a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }
      , Uc = function(a) {
        if (!a || "object" != Sc(a) || a.nodeType || a == a.window)
            return !1;
        try {
            if (a.constructor && !Tc(a, "constructor") && !Tc(a.constructor.prototype, "isPrototypeOf"))
                return !1
        } catch (c) {
            return !1
        }
        for (var b in a)
            ;
        return void 0 === b || Tc(a, b)
    }
      , I = function(a, b) {
        var c = b || ("array" == Sc(a) ? [] : {}), d;
        for (d in a)
            if (Tc(a, d)) {
                var e = a[d];
                "array" == Sc(e) ? ("array" != Sc(c[d]) && (c[d] = []),
                c[d] = I(e, c[d])) : Uc(e) ? (Uc(c[d]) || (c[d] = {}),
                c[d] = I(e, c[d])) : c[d] = e
            }
        return c
    };
    var Wc = function(a, b, c) {
        var d = Map ? new Mc : new Nc
          , e = function(g, h) {
            for (var l = xa(g, 1), n = 0; n < l.length; n++)
                h[l[n]] = f(g.get(l[n]))
        }
          , f = function(g) {
            var h = d.get(g);
            if (h)
                return h;
            if (g instanceof za) {
                var l = [];
                d.set(g, l);
                for (var n = g.Ub(), p = 0; p < n.length(); p++)
                    l[n.get(p)] = f(g.get(n.get(p)));
                return l
            }
            if (g instanceof Qc)
                return g.h;
            if (g instanceof kb) {
                var q = {};
                d.set(g, q);
                e(g, q);
                return q
            }
            if (g instanceof gb) {
                var r = function() {
                    for (var u = Array.prototype.slice.call(arguments, 0), v = 0; v < u.length; v++)
                        u[v] = Vc(u[v], b, c);
                    var w = new Ca(b ? b.R : new Ba);
                    b && (w.h = b.h);
                    return f(g.h.apply(g, [w].concat(u)))
                };
                d.set(g, r);
                e(g, r);
                return r
            }
            var t = !1;
            switch (c) {
            case 1:
                t = !0;
                break;
            case 2:
                t = !1;
                break;
            case 3:
                t = !1;
                break;
            default:
            }
            if (g instanceof Oc && t)
                return g.Ga;
            switch (typeof g) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return g;
            case "object":
                if (null === g)
                    return null
            }
        };
        return f(a)
    }
      , Vc = function(a, b, c) {
        var d = Map ? new Mc : new Nc
          , e = function(g, h) {
            for (var l in g)
                g.hasOwnProperty(l) && h.set(l, f(g[l]))
        }
          , f = function(g) {
            var h = d.get(g);
            if (h)
                return h;
            if (Ja(g) || Pa(g)) {
                var l = new za([]);
                d.set(g, l);
                for (var n in g)
                    g.hasOwnProperty(n) && l.set(n, f(g[n]));
                return l
            }
            if (Uc(g)) {
                var p = new kb;
                d.set(g, p);
                e(g, p);
                return p
            }
            if ("function" === typeof g) {
                var q = new gb("",function(x) {
                    for (var y = Array.prototype.slice.call(arguments, 0), A = 0; A < y.length; A++)
                        y[A] = Wc(C(this, y[A]), b, c);
                    return f((0,
                    this.h.J)(g, g, y))
                }
                );
                d.set(g, q);
                e(g, q);
                return q
            }
            var v = typeof g;
            if (null === g || "string" === v || "number" === v || "boolean" === v)
                return g;
            var w = !1;
            switch (c) {
            case 1:
                w = !0;
                break;
            case 2:
                w = !1;
                break;
            default:
            }
            if (void 0 !== g && w)
                return new Oc(g)
        };
        return f(a)
    };
    var Xc = function(a) {
        for (var b = [], c = 0; c < a.length(); c++)
            a.has(c) && (b[c] = a.get(c));
        return b
    }
      , Yc = function(a) {
        if (void 0 === a || Ja(a) || Uc(a))
            return !0;
        switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
            return !0
        }
        return !1
    };
    var Zc = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++)
                c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e]instanceof za)
                    for (var f = arguments[e], g = 0; g < f.length(); g++)
                        c.push(f.get(g));
                else
                    c.push(arguments[e]);
            return new za(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && !b.h(a, this.get(d), d, this))
                    return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
                this.has(e) && b.h(a, this.get(e), e, this) && d.push(this.get(e));
            return new za(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                this.has(d) && b.h(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length()
              , e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) && this.get(f) === b)
                    return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++)
                c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length()
              , e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b)
                    return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
                this.has(e) && (d[e] = b.h(a, this.get(e), e, this));
            return new za(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a, b) {
            return this.push.apply(this, Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(), e, f = 0;
            if (void 0 !== c)
                e = c;
            else {
                if (0 === d)
                    throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d)
                    throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++)
                this.has(h) && (e = b.h(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(), e, f = d - 1;
            if (void 0 !== c)
                e = c;
            else {
                if (0 === d)
                    throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d)
                    throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--)
                this.has(h) && (e = b.h(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() {
            for (var a = Xc(this), b = a.length - 1, c = 0; 0 <= b; b--,
            c++)
                a.hasOwnProperty(b) ? this.set(c, a[b]) : Aa(this, c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++)
                e.push(this.get(f));
            return new za(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.h(a, this.get(d), d, this))
                    return !0;
            return !1
        },
        sort: function(a, b) {
            var c = Xc(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) {
                return Number(b.h(a, e, f))
            });
            for (var d = 0; d < c.length; d++)
                c.hasOwnProperty(d) ? this.set(d, c[d]) : Aa(this, d);
            return this
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments, 1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var $c = {
        charAt: 1,
        concat: 1,
        indexOf: 1,
        lastIndexOf: 1,
        match: 1,
        replace: 1,
        search: 1,
        slice: 1,
        split: 1,
        substring: 1,
        toLowerCase: 1,
        toLocaleLowerCase: 1,
        toString: 1,
        toUpperCase: 1,
        toLocaleUpperCase: 1,
        trim: 1
    }
      , ad = new ua("break")
      , bd = new ua("continue")
      , dd = function(a, b) {
        return C(this, a) + C(this, b)
    }
      , ed = function(a, b) {
        return C(this, a) && C(this, b)
    }
      , fd = function(a, b, c) {
        a = C(this, a);
        b = C(this, b);
        c = C(this, c);
        if (!(c instanceof za))
            throw Error("Error: Non-List argument given to Apply instruction.");
        if (null === a || void 0 === a)
            throw Error("TypeError: Can't read property " + b + " of " + a + ".");
        var d = "number" === typeof a;
        if ("boolean" === typeof a || d) {
            if ("toString" === b) {
                if (d && c.length()) {
                    var e = Wc(c.get(0));
                    try {
                        return a.toString(e)
                    } catch (r) {}
                }
                return a.toString()
            }
            throw Error("TypeError: " + a + "." + b + " is not a function.");
        }
        if ("string" === typeof a) {
            if ($c.hasOwnProperty(b)) {
                var f = 2;
                f = 1;
                var g = Wc(c, void 0, f);
                return Vc(a[b].apply(a, g), this.h)
            }
            throw Error("TypeError: " + b + " is not a function");
        }
        if (a instanceof za) {
            if (a.has(b)) {
                var h = a.get(b);
                if (h instanceof gb) {
                    var l = Xc(c);
                    l.unshift(this.h);
                    return h.h.apply(h, l)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if (0 <= Zc.supportedMethods.indexOf(b)) {
                var n = Xc(c);
                n.unshift(this.h);
                return Zc[b].apply(a, n)
            }
        }
        if (a instanceof gb || a instanceof kb) {
            if (a.has(b)) {
                var p = a.get(b);
                if (p instanceof gb) {
                    var q = Xc(c);
                    q.unshift(this.h);
                    return p.h.apply(p, q)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if ("toString" === b)
                return a instanceof gb ? a.R : a.toString();
            if ("hasOwnProperty" === b)
                return a.has.apply(a, Xc(c))
        }
        if (a instanceof Oc && "toString" === b)
            return a.toString();
        throw Error("TypeError: Object has no '" + b + "' property.");
    }
      , gd = function(a, b) {
        a = C(this, a);
        if ("string" !== typeof a)
            throw Error("Invalid key name given for assignment.");
        var c = this.h;
        if (!c.has(a))
            throw Error("Attempting to assign to undefined value " + b);
        var d = C(this, b);
        c.set(a, d);
        return d
    }
      , hd = function(a) {
        var b = Ea(this.h)
          , c = jb(b, Array.prototype.slice.apply(arguments));
        if (c instanceof ua)
            return c
    }
      , id = function() {
        return ad
    }
      , jd = function(a) {
        for (var b = C(this, a), c = 0; c < b.length; c++) {
            var d = C(this, b[c]);
            if (d instanceof ua)
                return d
        }
    }
      , kd = function(a) {
        for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
            var d = arguments[c];
            if ("string" === typeof d) {
                var e = C(this, arguments[c + 1]);
                Da(b, d, e, !0)
            }
        }
    }
      , ld = function() {
        return bd
    }
      , md = function(a, b, c) {
        var d = new za;
        b = C(this, b);
        for (var e = 0; e < b.length; e++)
            d.push(b[e]);
        var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
        this.h.add(a, C(this, f))
    }
      , nd = function(a, b) {
        return C(this, a) / C(this, b)
    }
      , od = function(a, b) {
        a = C(this, a);
        b = C(this, b);
        var c = a instanceof Oc
          , d = b instanceof Oc;
        return c || d ? c && d ? a.Ga == b.Ga : !1 : a == b
    }
      , pd = function(a) {
        for (var b, c = 0; c < arguments.length; c++)
            b = C(this, arguments[c]);
        return b
    };
    function qd(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e))
              , g = jb(f, d);
            if (g instanceof ua) {
                if ("break" === g.h)
                    break;
                if ("return" === g.h)
                    return g
            }
        }
    }
    function rd(a, b, c) {
        if ("string" === typeof b)
            return qd(a, function() {
                return b.length
            }, function(f) {
                return f
            }, c);
        if (b instanceof kb || b instanceof za || b instanceof gb) {
            var d = b.Ub()
              , e = d.length();
            return qd(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    var sd = function(a, b, c) {
        a = C(this, a);
        b = C(this, b);
        c = C(this, c);
        var d = this.h;
        return rd(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }
      , td = function(a, b, c) {
        a = C(this, a);
        b = C(this, b);
        c = C(this, c);
        var d = this.h;
        return rd(function(e) {
            var f = Ea(d);
            Da(f, a, e, !0);
            return f
        }, b, c)
    }
      , ud = function(a, b, c) {
        a = C(this, a);
        b = C(this, b);
        c = C(this, c);
        var d = this.h;
        return rd(function(e) {
            var f = Ea(d);
            f.add(a, e);
            return f
        }, b, c)
    }
      , wd = function(a, b, c) {
        a = C(this, a);
        b = C(this, b);
        c = C(this, c);
        var d = this.h;
        return vd(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }
      , xd = function(a, b, c) {
        a = C(this, a);
        b = C(this, b);
        c = C(this, c);
        var d = this.h;
        return vd(function(e) {
            var f = Ea(d);
            Da(f, a, e, !0);
            return f
        }, b, c)
    }
      , yd = function(a, b, c) {
        a = C(this, a);
        b = C(this, b);
        c = C(this, c);
        var d = this.h;
        return vd(function(e) {
            var f = Ea(d);
            f.add(a, e);
            return f
        }, b, c)
    };
    function vd(a, b, c) {
        if ("string" === typeof b)
            return qd(a, function() {
                return b.length
            }, function(d) {
                return b[d]
            }, c);
        if (b instanceof za)
            return qd(a, function() {
                return b.length()
            }, function(d) {
                return b.get(d)
            }, c);
        throw new TypeError("The value is not iterable.");
    }
    var zd = function(a, b, c, d) {
        function e(p, q) {
            for (var r = 0; r < f.length(); r++) {
                var t = f.get(r);
                q.add(t, p.get(t))
            }
        }
        var f = C(this, a);
        if (!(f instanceof za))
            throw Error("TypeError: Non-List argument given to ForLet instruction.");
        var g = this.h;
        d = C(this, d);
        var h = Ea(g);
        for (e(g, h); ib(h, b); ) {
            var l = jb(h, d);
            if (l instanceof ua) {
                if ("break" === l.h)
                    break;
                if ("return" === l.h)
                    return l
            }
            var n = Ea(g);
            e(h, n);
            ib(n, c);
            h = n
        }
    }
      , Ad = function(a) {
        a = C(this, a);
        var b = this.h
          , c = !1;
        if (c && !b.has(a))
            throw new ReferenceError(a + " is not defined.");
        return b.get(a)
    }
      , Bd = function(a, b) {
        var c;
        a = C(this, a);
        b = C(this, b);
        if (void 0 === a || null === a)
            throw Error("TypeError: cannot access property of " + a + ".");
        if (a instanceof kb || a instanceof za || a instanceof gb)
            c = a.get(b);
        else if ("string" === typeof a)
            "length" === b ? c = a.length : va(b) && (c = a[b]);
        else if (a instanceof Oc)
            return;
        return c
    }
      , Cd = function(a, b) {
        return C(this, a) > C(this, b)
    }
      , Dd = function(a, b) {
        return C(this, a) >= C(this, b)
    }
      , Ed = function(a, b) {
        a = C(this, a);
        b = C(this, b);
        a instanceof Oc && (a = a.Ga);
        b instanceof Oc && (b = b.Ga);
        return a === b
    }
      , Fd = function(a, b) {
        return !Ed.call(this, a, b)
    }
      , Gd = function(a, b, c) {
        var d = [];
        C(this, a) ? d = C(this, b) : c && (d = C(this, c));
        var e = jb(this.h, d);
        if (e instanceof ua)
            return e
    }
      , Hd = function(a, b) {
        return C(this, a) < C(this, b)
    }
      , Id = function(a, b) {
        return C(this, a) <= C(this, b)
    }
      , Jd = function(a, b) {
        return C(this, a) % C(this, b)
    }
      , Kd = function(a, b) {
        return C(this, a) * C(this, b)
    }
      , Ld = function(a) {
        return -C(this, a)
    }
      , Md = function(a) {
        return !C(this, a)
    }
      , Nd = function(a, b) {
        return !od.call(this, a, b)
    }
      , Od = function() {
        return null
    }
      , Pd = function(a, b) {
        return C(this, a) || C(this, b)
    }
      , Qd = function(a, b) {
        var c = C(this, a);
        C(this, b);
        return c
    }
      , Rd = function(a) {
        return C(this, a)
    }
      , Sd = function(a) {
        return Array.prototype.slice.apply(arguments)
    }
      , Td = function(a) {
        return new ua("return",C(this, a))
    }
      , Ud = function(a, b, c) {
        a = C(this, a);
        b = C(this, b);
        c = C(this, c);
        if (null === a || void 0 === a)
            throw Error("TypeError: Can't set property " + b + " of " + a + ".");
        (a instanceof gb || a instanceof za || a instanceof kb) && a.set(b, c);
        return c
    }
      , Vd = function(a, b) {
        return C(this, a) - C(this, b)
    }
      , Wd = function(a, b, c) {
        a = C(this, a);
        var d = C(this, b)
          , e = C(this, c);
        if (!Ja(d) || !Ja(e))
            throw Error("Error: Malformed switch instruction.");
        for (var f, g = !1, h = 0; h < d.length; h++)
            if (g || a === C(this, d[h]))
                if (f = C(this, e[h]),
                f instanceof ua) {
                    var l = f.h;
                    if ("break" === l)
                        return;
                    if ("return" === l || "continue" === l)
                        return f
                } else
                    g = !0;
        if (e.length === d.length + 1 && (f = C(this, e[e.length - 1]),
        f instanceof ua && ("return" === f.h || "continue" === f.h)))
            return f
    }
      , Xd = function(a, b, c) {
        return C(this, a) ? C(this, b) : C(this, c)
    }
      , Yd = function(a) {
        a = C(this, a);
        return a instanceof gb ? "function" : typeof a
    }
      , Zd = function(a) {
        for (var b = this.h, c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            "string" !== typeof d || b.add(d, void 0)
        }
    }
      , $d = function(a, b, c, d) {
        var e = C(this, d);
        if (C(this, c)) {
            var f = jb(this.h, e);
            if (f instanceof ua) {
                if ("break" === f.h)
                    return;
                if ("return" === f.h)
                    return f
            }
        }
        for (; C(this, a); ) {
            var g = jb(this.h, e);
            if (g instanceof ua) {
                if ("break" === g.h)
                    break;
                if ("return" === g.h)
                    return g
            }
            C(this, b)
        }
    }
      , ae = function(a) {
        return ~Number(C(this, a))
    }
      , be = function(a, b) {
        return Number(C(this, a)) << Number(C(this, b))
    }
      , ce = function(a, b) {
        return Number(C(this, a)) >> Number(C(this, b))
    }
      , de = function(a, b) {
        return Number(C(this, a)) >>> Number(C(this, b))
    }
      , ee = function(a, b) {
        return Number(C(this, a)) & Number(C(this, b))
    }
      , fe = function(a, b) {
        return Number(C(this, a)) ^ Number(C(this, b))
    }
      , ge = function(a, b) {
        return Number(C(this, a)) | Number(C(this, b))
    };
    var ie = function() {
        this.h = new mb;
        he(this)
    };
    ie.prototype.execute = function(a) {
        return je(this.h.m(a))
    }
    ;
    var ke = function(a, b, c) {
        return je(a.h.C(b, c))
    }
      , he = function(a) {
        var b = function(d, e) {
            pb(a.h, d, String(e))
        };
        b("control", 49);
        b("fn", 51);
        b("list", 7);
        b("map", 8);
        b("undefined", 44);
        var c = function(d, e) {
            nb(a.h, String(d), e)
        };
        c(0, dd);
        c(1, ed);
        c(2, fd);
        c(3, gd);
        c(53, hd);
        c(4, id);
        c(5, jd);
        c(52, kd);
        c(6, ld);
        c(9, jd);
        c(50, md);
        c(10, nd);
        c(12, od);
        c(13, pd);
        c(47, sd);
        c(54, td);
        c(55, ud);
        c(63, zd);
        c(64, wd);
        c(65, xd);
        c(66, yd);
        c(15, Ad);
        c(16, Bd);
        c(17, Bd);
        c(18, Cd);
        c(19, Dd);
        c(20, Ed);
        c(21, Fd);
        c(22, Gd);
        c(23, Hd);
        c(24, Id);
        c(25, Jd);
        c(26, Kd);
        c(27, Ld);
        c(28, Md);
        c(29, Nd);
        c(45, Od);
        c(30, Pd);
        c(32, Qd);
        c(33, Qd);
        c(34, Rd);
        c(35, Rd);
        c(46, Sd);
        c(36, Td);
        c(43, Ud);
        c(37, Vd);
        c(38, Wd);
        c(39, Xd);
        c(40, Yd);
        c(41, Zd);
        c(42, $d);
        c(58, ae);
        c(57, be);
        c(60, ce);
        c(61, de);
        c(56, ee);
        c(62, fe);
        c(59, ge)
    };
    function je(a) {
        if (a instanceof ua || a instanceof gb || a instanceof za || a instanceof kb || a instanceof Oc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a)
            return a
    }
    ;function le(a) {
        switch (a) {
        case 1:
            return "1";
        case 2:
        case 4:
            return "0";
        default:
            return "-"
        }
    }
    function me(a) {
        switch (a) {
        case 1:
            return "G";
        case 3:
            return "g";
        case 2:
            return "D";
        case 4:
            return "d";
        case 0:
            return "g";
        default:
            return "g"
        }
    }
    function ne(a, b) {
        var c = a[1] || 0
          , d = a[2] || 0;
        switch (b) {
        case 0:
            return "G1" + le(c) + le(d);
        case 1:
            return "G2" + me(c) + me(d);
        default:
            return "g1--"
        }
    }
    ;var oe = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Zj: a("consent"),
            hi: a("convert_case_to"),
            ii: a("convert_false_to"),
            ji: a("convert_null_to"),
            ki: a("convert_true_to"),
            li: a("convert_undefined_to"),
            Gm: a("debug_mode_metadata"),
            Tb: a("function"),
            Zg: a("instance_name"),
            Bk: a("live_only"),
            Ck: a("malware_disabled"),
            Dk: a("metadata"),
            Gk: a("original_activity_id"),
            Nm: a("original_vendor_template_id"),
            Mm: a("once_on_load"),
            Fk: a("once_per_event"),
            gj: a("once_per_load"),
            Rm: a("priority_override"),
            Sm: a("respected_consent_types"),
            lj: a("setup_tags"),
            pe: a("tag_id"),
            qj: a("teardown_tags")
        }
    }();
    var Ke;
    var Le = [], Me = [], Ne = [], Oe = [], Pe = [], Qe = {}, Re, Se, Ue = function() {
        var a = Te;
        Se = Se || a
    }, We = function() {
        for (var a = data.resource || {}, b = a.macros || [], c = 0; c < b.length; c++)
            Le.push(b[c]);
        for (var d = a.tags || [], e = 0; e < d.length; e++)
            Oe.push(d[e]);
        for (var f = a.predicates || [], g = 0; g < f.length; g++)
            Ne.push(f[g]);
        for (var h = a.rules || [], l = 0; l < h.length; l++) {
            for (var n = h[l], p = {}, q = 0; q < n.length; q++) {
                var r = n[q][0];
                p[r] = Array.prototype.slice.call(n[q], 1);
                "if" !== r && "unless" !== r || Ve(p[r])
            }
            Me.push(p)
        }
    }, Ve = function(a) {}, Xe, Ye = [], Ze = function(a, b) {
        var c = {};
        c["function"] = "__" + a;
        for (var d in b)
            b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        return c
    }, $e = function(a, b) {
        var c = a["function"]
          , d = b && b.event;
        if (!c)
            throw Error("Error: No function name given for function call.");
        var e = Qe[c], f = b && 2 === b.type && d.Nj && e && -1 !== Ye.indexOf(c), g = {}, h = {}, l;
        for (l in a)
            a.hasOwnProperty(l) && 0 === l.indexOf("vtp_") && (e && d && d.wj && d.wj(a[l]),
            e && (g[l] = a[l]),
            !e || f) && (h[l.substr(4)] = a[l]);
        e && d && d.vj && (g.vtp_gtmCachedValues = d.vj);
        if (b) {
            if (null == b.name) {
                var n;
                a: {
                    var p = b.index;
                    if (null == p)
                        n = "";
                    else {
                        var q;
                        switch (b.type) {
                        case 2:
                            q = Le[p];
                            break;
                        case 1:
                            q = Oe[p];
                            break;
                        default:
                            n = "";
                            break a
                        }
                        var r = q && q[oe.Zg];
                        n = r ? String(r) : ""
                    }
                }
                b.name = n
            }
            e && (g.vtp_gtmEntityIndex = b.index,
            g.vtp_gtmEntityName = b.name)
        }
        var t, u;
        e && (t = e(g));
        if (!e || f)
            u = Ke(c, h, b);
        f && t !== u && d && d.Nj(d.id, c);
        return e ? t : u
    }, bf = function(a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a)
            a.hasOwnProperty(e) && (d[e] = af(a[e], b, c));
        return d
    }, af = function(a, b, c) {
        if (Ja(a)) {
            var d;
            switch (a[0]) {
            case "function_id":
                return a[1];
            case "list":
                d = [];
                for (var e = 1; e < a.length; e++)
                    d.push(af(a[e], b, c));
                return d;
            case "macro":
                var f = a[1];
                if (c[f])
                    return;
                var g = Le[f];
                if (!g || b.vh(g))
                    return;
                c[f] = !0;
                var h = String(g[oe.Zg]);
                try {
                    var l = bf(g, b, c);
                    l.vtp_gtmEventId = b.id;
                    b.priorityId && (l.vtp_gtmPriorityId = b.priorityId);
                    d = $e(l, {
                        event: b,
                        index: f,
                        type: 2,
                        name: h
                    });
                    Xe && (d = Xe.Qk(d, l))
                } catch (y) {
                    b.Gj && b.Gj(y, Number(f), h),
                    d = !1
                }
                c[f] = !1;
                return d;
            case "map":
                d = {};
                for (var n = 1; n < a.length; n += 2)
                    d[af(a[n], b, c)] = af(a[n + 1], b, c);
                return d;
            case "template":
                d = [];
                for (var p = !1, q = 1; q < a.length; q++) {
                    var r = af(a[q], b, c);
                    Se && (p = p || r === Se.yf);
                    d.push(r)
                }
                return Se && p ? Se.Rk(d) : d.join("");
            case "escape":
                d = af(a[1], b, c);
                if (Se && Ja(a[1]) && "macro" === a[1][0] && Se.Bl(a))
                    return Se.Yl(d);
                d = String(d);
                for (var t = 2; t < a.length; t++)
                    pe[a[t]] && (d = pe[a[t]](d));
                return d;
            case "tag":
                var u = a[1];
                if (!Oe[u])
                    throw Error("Unable to resolve tag reference " + u + ".");
                return d = {
                    Bj: a[2],
                    index: u
                };
            case "zb":
                var v = {
                    arg0: a[2],
                    arg1: a[3],
                    ignore_case: a[5]
                };
                v["function"] = a[1];
                var w = cf(v, b, c)
                  , x = !!a[4];
                return x || 2 !== w ? x !== (1 === w) : null;
            default:
                throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }, cf = function(a, b, c) {
        try {
            return Re(bf(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    };
    var ef = function(a, b, c) {
        var d;
        d = Error.call(this, c);
        this.message = d.message;
        "stack"in d && (this.stack = d.stack);
        this.h = a
    };
    ra(ef, Error);
    function ff(a, b) {
        if (Ja(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++)
                ff(a[c], b[c])
        }
    }
    ;var gf = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack"in c && (this.stack = c.stack);
        this.Sl = a;
        this.m = b;
        this.h = []
    };
    ra(gf, Error);
    var jf = function() {
        return function(a, b) {
            a instanceof gf || (a = new gf(a,hf));
            b && a.h.push(b);
            throw a;
        }
    };
    function hf(a) {
        if (!a.length)
            return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; 0 < b; b--)
            Ia(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--)
            a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    }
    ;var mf = function(a) {
        function b(r) {
            for (var t = 0; t < r.length; t++)
                d[r[t]] = !0
        }
        for (var c = [], d = [], e = kf(a), f = 0; f < Me.length; f++) {
            var g = Me[f]
              , h = lf(g, e);
            if (h) {
                for (var l = g.add || [], n = 0; n < l.length; n++)
                    c[l[n]] = !0;
                b(g.block || [])
            } else
                null === h && b(g.block || []);
        }
        for (var p = [], q = 0; q < Oe.length; q++)
            c[q] && !d[q] && (p[q] = !0);
        return p
    }
      , lf = function(a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (0 === e)
                return !1;
            if (2 === e)
                return null
        }
        for (var f = a.unless || [], g = 0; g < f.length; g++) {
            var h = b(f[g]);
            if (2 === h)
                return null;
            if (1 === h)
                return !1
        }
        return !0
    }
      , kf = function(a) {
        var b = [];
        return function(c) {
            void 0 === b[c] && (b[c] = cf(Ne[c], a));
            return b[c]
        }
    };
    var nf = {
        Qk: function(a, b) {
            b[oe.hi] && "string" === typeof a && (a = 1 == b[oe.hi] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(oe.ji) && null === a && (a = b[oe.ji]);
            b.hasOwnProperty(oe.li) && void 0 === a && (a = b[oe.li]);
            b.hasOwnProperty(oe.ki) && !0 === a && (a = b[oe.ki]);
            b.hasOwnProperty(oe.ii) && !1 === a && (a = b[oe.ii]);
            return a
        }
    };
    var of = function() {
        this.h = {}
    };
    function pf(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0
                  , g = "A policy function denied the permission request";
                try {
                    f = a[e].call(void 0, b, c, d),
                    g += "."
                } catch (h) {
                    g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                }
                if (!f)
                    throw new ef(c,d,g);
            }
    }
    function qf(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.h[d]
                  , f = a.h.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    pf(e, b, d, g);
                    pf(f, b, d, g)
                }
            }
        }
    }
    ;var uf = function() {
        var a = data.permissions || {}
          , b = rf.ctid
          , c = this;
        this.m = new of;
        this.h = {};
        var d = {}
          , e = qf(this.m, b, function() {
            var f = arguments[0];
            return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
        });
        m(a, function(f, g) {
            var h = {};
            m(g, function(l, n) {
                var p = sf(l, n);
                h[l] = p.assert;
                d[l] || (d[l] = p.M)
            });
            c.h[f] = function(l, n) {
                var p = h[l];
                if (!p)
                    throw tf(l, {}, "The requested permission " + l + " is not configured.");
                var q = Array.prototype.slice.call(arguments, 0);
                p.apply(void 0, q);
                e.apply(void 0, q)
            }
        })
    }
      , wf = function(a) {
        return vf.h[a] || function() {}
    };
    function sf(a, b) {
        var c = Ze(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = tf;
        try {
            return $e(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new ef(e,{},"Permission " + e + " is unknown.");
                },
                M: function() {
                    for (var e = {}, f = 0; f < arguments.length; ++f)
                        e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }
    function tf(a, b, c) {
        return new ef(a,b,c)
    }
    ;var xf = !1;
    var yf = {};
    yf.Em = Ra('');
    yf.Tk = Ra('');
    var zf = xf
      , Af = yf.Tk
      , Bf = yf.Em;
    var Ff = function(a) {
        var b = {}
          , c = 0;
        m(a, function(e, f) {
            if (null != f)
                if (f = ("" + f).replace(/~/g, "~~"),
                Cf.hasOwnProperty(e))
                    b[Cf[e]] = f;
                else if (Df.hasOwnProperty(e)) {
                    var g = Df[e]
                      , h = f;
                    b.hasOwnProperty(g) || (b[g] = h)
                } else if ("category" === e)
                    for (var l = f.split("/", 5), n = 0; n < l.length; n++) {
                        var p = Ef[n]
                          , q = l[n];
                        b.hasOwnProperty(p) || (b[p] = q)
                    }
                else if (27 > c) {
                    var r = String.fromCharCode(10 > c ? 48 + c : 65 + c - 10);
                    b["k" + r] = ("" + String(e)).replace(/~/g, "~~");
                    b["v" + r] = f;
                    c++
                }
        });
        var d = [];
        m(b, function(e, f) {
            d.push("" + e + f)
        });
        return d.join("~")
    }
      , Cf = {
        item_id: "id",
        item_name: "nm",
        item_brand: "br",
        item_category: "ca",
        item_category2: "c2",
        item_category3: "c3",
        item_category4: "c4",
        item_category5: "c5",
        item_variant: "va",
        price: "pr",
        quantity: "qt",
        coupon: "cp",
        item_list_name: "ln",
        index: "lp",
        item_list_id: "li",
        discount: "ds",
        affiliation: "af",
        promotion_id: "pi",
        promotion_name: "pn",
        creative_name: "cn",
        creative_slot: "cs",
        location_id: "lo"
    }
      , Df = {
        id: "id",
        name: "nm",
        brand: "br",
        variant: "va",
        list_name: "ln",
        list_position: "lp",
        list: "ln",
        position: "lp",
        creative: "cn"
    }
      , Ef = ["ca", "c2", "c3", "c4", "c5"];
    var Gf = function(a) {
        var b = [];
        m(a, function(c, d) {
            null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
        });
        return b.join("&")
    }
      , Hf = function(a, b, c, d) {
        this.Sa = a.Sa;
        this.Fc = a.Fc;
        this.ph = a.ph;
        this.m = b;
        this.C = c;
        this.B = Gf(a.Sa);
        this.h = Gf(a.ph);
        this.J = this.h.length;
        if (d && 16384 < this.J)
            throw Error("EVENT_TOO_LARGE");
    };
    var If = function() {
        this.events = [];
        this.h = this.Sa = "";
        this.B = 0;
        this.m = !1
    };
    If.prototype.add = function(a) {
        return this.C(a) ? (this.events.push(a),
        this.Sa = a.B,
        this.h = a.m,
        this.B += a.J,
        this.m = a.C,
        !0) : !1
    }
    ;
    If.prototype.C = function(a) {
        var b = 20 > this.events.length && 16384 > a.J + this.B
          , c = this.Sa === a.B && this.h === a.m && this.m === a.C;
        return 0 == this.events.length || b && c
    }
    ;
    var Jf = function(a, b) {
        m(a, function(c, d) {
            null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
        })
    }
      , Kf = function(a, b) {
        var c = [];
        a.B && c.push(a.B);
        b && c.push("_s=" + b);
        Jf(a.Fc, c);
        var d = !1;
        a.h && (c.push(a.h),
        d = !0);
        var e = c.join("&")
          , f = ""
          , g = e.length + a.m.length + 1;
        d && 2048 < g && (f = c.pop(),
        e = c.join("&"));
        return {
            Mh: e,
            body: f
        }
    }
      , Lf = function(a, b) {
        var c = a.events;
        if (1 == c.length)
            return Kf(c[0], b);
        var d = [];
        a.Sa && d.push(a.Sa);
        for (var e = {}, f = 0; f < c.length; f++)
            m(c[f].Fc, function(t, u) {
                null != u && (e[t] = e[t] || {},
                e[t][String(u)] = e[t][String(u)] + 1 || 1)
            });
        var g = {};
        m(e, function(t, u) {
            var v, w = -1, x = 0;
            m(u, function(y, A) {
                x += A;
                var B = (y.length + t.length + 2) * (A - 1);
                B > w && (v = y,
                w = B)
            });
            x == c.length && (g[t] = v)
        });
        Jf(g, d);
        b && d.push("_s=" + b);
        for (var h = d.join("&"), l = [], n = {}, p = 0; p < c.length; n = {
            Se: n.Se
        },
        p++) {
            var q = [];
            n.Se = {};
            m(c[p].Fc, function(t) {
                return function(u, v) {
                    g[u] != "" + v && (t.Se[u] = v)
                }
            }(n));
            c[p].h && q.push(c[p].h);
            Jf(n.Se, q);
            l.push(q.join("&"))
        }
        var r = l.join("\r\n");
        return {
            Mh: h,
            body: r
        }
    };
    var Pf = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
    function Qf(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var Rf = new Ma;
    function Sf(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d
              , f = Rf.get(e);
            f || (f = new RegExp(b,d),
            Rf.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }
    function Tf(a, b) {
        return 0 <= String(a).indexOf(String(b))
    }
    function Uf(a, b) {
        return String(a) === String(b)
    }
    function Vf(a, b) {
        return Number(a) >= Number(b)
    }
    function Wf(a, b) {
        return Number(a) <= Number(b)
    }
    function Xf(a, b) {
        return Number(a) > Number(b)
    }
    function Yf(a, b) {
        return Number(a) < Number(b)
    }
    function Zf(a, b) {
        return 0 === String(a).indexOf(String(b))
    }
    ;var fg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
    function gg(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a << 2 | b]
    }
    ;var hg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i
      , ig = {
        Fn: "function",
        DustMap: "Object",
        List: "Array"
    }
      , L = function(a, b, c) {
        for (var d = 0; d < b.length; d++) {
            var e = hg.exec(b[d]);
            if (!e)
                throw Error("Internal Error in " + a);
            var f = e[1]
              , g = "!" === e[2]
              , h = e[3]
              , l = c[d];
            if (null == l) {
                if (g)
                    throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
            } else if ("*" !== h) {
                var n = typeof l;
                l instanceof gb ? n = "Fn" : l instanceof za ? n = "List" : l instanceof kb ? n = "DustMap" : l instanceof Oc && (n = "OpaqueValue");
                if (n != h)
                    throw Error("Error in " + a + ". Argument " + f + " has type " + (ig[n] || n) + ", which does not match required type " + (ig[h] || h) + ".");
            }
        }
    };
    function jg(a) {
        return "" + a
    }
    function kg(a, b) {
        var c = [];
        return c
    }
    ;var lg = function(a, b) {
        var c = new gb(a,function() {
            for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++)
                d[e] = C(this, d[e]);
            return b.apply(this, d)
        }
        );
        c.wc();
        return c
    }
      , mg = function(a, b) {
        var c = new kb, d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                Ga(e) ? c.set(d, lg(a + "_" + d, e)) : Uc(e) ? c.set(d, mg(a + "_" + d, e)) : (Ia(e) || k(e) || "boolean" === typeof e) && c.set(d, e)
            }
        c.wc();
        return c
    };
    var ng = function(a, b) {
        L(E(this), ["apiName:!string", "message:?string"], arguments);
        var c = {}
          , d = new kb;
        return d = mg("AssertApiSubject", c)
    };
    var og = function(a, b) {
        L(E(this), ["actual:?*", "message:?string"], arguments);
        if (a instanceof Qc)
            throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {}
          , d = new kb;
        return d = mg("AssertThatSubject", c)
    };
    function pg(a) {
        return function() {
            for (var b = [], c = this.h, d = 0; d < arguments.length; ++d)
                b.push(Wc(arguments[d], c));
            return Vc(a.apply(null, b))
        }
    }
    var rg = function() {
        for (var a = Math, b = qg, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = pg(a[e].bind(a)))
        }
        return c
    };
    var sg = function(a) {
        var b;
        return b
    };
    var tg = function(a) {
        var b;
        L(E(this), ["uri:!string"], arguments);
        try {
            b = decodeURIComponent(a)
        } catch (c) {}
        return b
    };
    var ug = function(a) {
        try {
            return encodeURI(a)
        } catch (b) {}
    };
    var vg = function(a) {
        try {
            return encodeURIComponent(a)
        } catch (b) {}
    };
    function yg(a, b) {
        var c = !1;
        L(E(this), ["booleanExpression:!string", "context:?DustMap"], arguments);
        var d = JSON.parse(a);
        if (!d)
            throw Error("Invalid boolean expression string was given.");
        var e = b ? Wc(b) : {};
        c = zg(d, e);
        return c
    }
    var Ag = function(a, b) {
        for (var c = 0; c < b.length; c++) {
            if (void 0 === a)
                return;
            a = a[b[c]]
        }
        return a
    }
      , Bg = function(a, b) {
        var c = b.preHit;
        if (c) {
            var d = a[0];
            switch (d) {
            case "hitData":
                return 2 > a.length ? void 0 : Ag(c.getHitData(a[1]), a.slice(2));
            case "metadata":
                return 2 > a.length ? void 0 : Ag(c.getMetadata(a[1]), a.slice(2));
            case "eventName":
                return c.getEventName();
            case "destinationId":
                return c.getDestinationId();
            default:
                throw Error(d + " is not a valid field that can be accessed\n                      from PreHit data.");
            }
        }
    }
      , Cg = function(a, b) {
        if (a) {
            if (void 0 !== a.contextValue) {
                var c;
                a: {
                    var d = a.contextValue
                      , e = d.keyParts;
                    if (e && 0 !== e.length) {
                        var f = d.namespaceType;
                        switch (f) {
                        case 1:
                            c = Bg(e, b);
                            break a;
                        case 2:
                            var g = b.macro;
                            c = g ? g[e[0]] : void 0;
                            break a;
                        default:
                            throw Error("Unknown Namespace Type used: " + f);
                        }
                    }
                    c = void 0
                }
                return c
            }
            if (void 0 !== a.booleanExpressionValue)
                return zg(a.booleanExpressionValue, b);
            if (void 0 !== a.booleanValue)
                return !!a.booleanValue;
            if (void 0 !== a.stringValue)
                return String(a.stringValue);
            if (void 0 !== a.integerValue)
                return Number(a.integerValue);
            if (void 0 !== a.doubleValue)
                return Number(a.doubleValue);
            throw Error("Unknown field used for variable of type ExpressionValue:" + a);
        }
    }
      , zg = function(a, b) {
        var c = a.args;
        if (!Ja(c) || 0 === c.length)
            throw Error('Invalid boolean expression format. Expected "args":' + c + " property to\n         be non-empty array.");
        var d = function(g) {
            return Cg(g, b)
        };
        switch (a.type) {
        case 1:
            for (var e = 0; e < c.length; e++)
                if (d(c[e]))
                    return !0;
            return !1;
        case 2:
            for (var f = 0; f < c.length; f++)
                if (!d(c[f]))
                    return !1;
            return 0 < c.length;
        case 3:
            return !d(c[0]);
        case 4:
            return Sf(d(c[0]), d(c[1]), !1);
        case 5:
            return Uf(d(c[0]), d(c[1]));
        case 6:
            return Zf(d(c[0]), d(c[1]));
        case 7:
            return Qf(d(c[0]), d(c[1]));
        case 8:
            return Tf(d(c[0]), d(c[1]));
        case 9:
            return Yf(d(c[0]), d(c[1]));
        case 10:
            return Wf(d(c[0]), d(c[1]));
        case 11:
            return Xf(d(c[0]), d(c[1]));
        case 12:
            return Vf(d(c[0]), d(c[1]));
        default:
            throw Error('Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 13.');
        }
    };
    yg.H = "internal.evaluateBooleanExpression";
    var Dg = function(a) {
        L(E(this), ["message:?string"], arguments);
    };
    var Eg = function(a, b) {
        L(E(this), ["min:!number", "max:!number"], arguments);
        return La(a, b)
    };
    var M = function(a, b, c) {
        var d = a.h.h;
        if (!d)
            throw Error("Missing program state.");
        d.uj.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var Fg = function() {
        M(this, "read_container_data");
        var a = new kb;
        a.set("containerId", 'G-610L9KESM0');
        a.set("version", '1');
        a.set("environmentName", '');
        a.set("debugMode", zf);
        a.set("previewMode", Bf);
        a.set("environmentMode", Af);
        a.wc();
        return a
    };
    var Gg = function() {
        return (new Date).getTime()
    };
    var Hg = function(a) {
        if (null === a)
            return "null";
        if (a instanceof za)
            return "array";
        if (a instanceof gb)
            return "function";
        if (a instanceof Oc) {
            a = a.Ga;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var Ig = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (zf || Bf) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return Vc(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(Wc(c))
            })
        }
    };
    var Jg = function(a) {
        return Qa(Wc(a, this.h))
    };
    var Kg = function(a) {
        return Number(Wc(a, this.h))
    };
    var Lg = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var Mg = function(a, b, c) {
        var d = null
          , e = !1;
        return e ? d : null
    };
    var qg = "floor ceil round max min abs pow sqrt".split(" ");
    var Ng = function() {
        var a = {};
        return {
            il: function(b) {
                return a.hasOwnProperty(b) ? a[b] : void 0
            },
            vm: function(b, c) {
                a[b] = c
            },
            reset: function() {
                a = {}
            }
        }
    }
      , Og = function(a, b) {
        return function() {
            var c = Array.prototype.slice.call(arguments, 0);
            c.unshift(b);
            return gb.prototype.h.apply(a, c)
        }
    }
      , Pg = function(a, b) {
        L(E(this), ["apiName:!string", "mock:?*"], arguments);
    };
    var Qg = {};
    Qg.keys = function(a) {
        return new za
    }
    ;
    Qg.values = function(a) {
        return new za
    }
    ;
    Qg.entries = function(a) {
        return new za
    }
    ;
    Qg.freeze = function(a) {
        return a
    }
    ;
    Qg.delete = function(a, b) {
        return !1
    }
    ;
    var Sg = function() {
        this.h = {};
        this.m = {};
    };
    Sg.prototype.get = function(a, b) {
        var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
        return c
    }
    ;
    Sg.prototype.add = function(a, b, c) {
        if (this.h.hasOwnProperty(a))
            throw "Attempting to add a function which already exists: " + a + ".";
        if (this.m.hasOwnProperty(a))
            throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.h[a] = c ? void 0 : Ga(b) ? lg(a, b) : mg(a, b)
    }
    ;
    function Tg(a, b) {
        var c = void 0;
        return c
    }
    ;function Ug() {
        var a = {};
        return a
    }
    ;var Wg = function(a) {
        return Vg ? G.querySelectorAll(a) : null
    }
      , Xg = function(a, b) {
        if (!Vg)
            return null;
        if (Element.prototype.closest)
            try {
                return a.closest(b)
            } catch (e) {
                return null
            }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector
          , d = a;
        if (!G.documentElement.contains(d))
            return null;
        do {
            try {
                if (c.call(d, b))
                    return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (null !== d && 1 === d.nodeType);
        return null
    }
      , Yg = !1;
    if (G.querySelectorAll)
        try {
            var Zg = G.querySelectorAll(":root");
            Zg && 1 == Zg.length && Zg[0] == G.documentElement && (Yg = !0)
        } catch (a) {}
    var Vg = Yg;
    var N = function(a) {
        xb("GTM", a)
    };
    var $g = function(a) {
        return null == a ? "" : k(a) ? Ta(String(a)) : "e0"
    }
      , bh = function(a) {
        return a.replace(ah, "")
    }
      , dh = function(a) {
        return ch(a.replace(/\s/g, ""))
    }
      , ch = function(a) {
        return Ta(a.replace(eh, "").toLowerCase())
    }
      , gh = function(a) {
        a = a.replace(/[\s-()/.]/g, "");
        "+" !== a.charAt(0) && (a = "+" + a);
        return fh.test(a) ? a : "e0"
    }
      , ih = function(a) {
        var b = a.toLowerCase().split("@");
        if (2 == b.length) {
            var c = b[0];
            /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
            c = c + "@" + b[1];
            if (hh.test(c))
                return c
        }
        return "e0"
    }
      , lh = function(a, b) {
        window.Promise || b([]);
        Promise.all(a.map(function(c) {
            return c.value && -1 !== jh.indexOf(c.name) ? kh(c.value).then(function(d) {
                c.value = d
            }) : Promise.resolve()
        })).then(function() {
            b(a)
        }).catch(function() {
            b([])
        })
    }
      , kh = function(a) {
        if ("" === a || "e0" === a)
            return Promise.resolve(a);
        if (z.crypto && z.crypto.subtle) {
            if (mh.test(a))
                return Promise.resolve(a);
            try {
                var b = nh(a);
                return z.crypto.subtle.digest("SHA-256", b).then(function(c) {
                    var d = Array.from(new Uint8Array(c)).map(function(e) {
                        return String.fromCharCode(e)
                    }).join("");
                    return z.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (c) {
                return Promise.resolve("e2")
            }
        } else
            return Promise.resolve("e1")
    }
      , nh = function(a) {
        var b;
        if (z.TextEncoder)
            b = (new TextEncoder("utf-8")).encode(a);
        else {
            for (var c = [], d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023),
                c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
            }
            b = new Uint8Array(c)
        }
        return b
    }
      , eh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g
      , hh = /^\S+@\S+\.\S+$/
      , fh = /^\+\d{10,15}$/
      , ah = /[.~]/g
      , oh = /^[0-9A-Za-z_-]{43}$/
      , mh = /^[0-9A-Fa-f]{64}$/
      , ph = {}
      , qh = (ph.email = "em",
    ph.phone_number = "pn",
    ph.first_name = "fn",
    ph.last_name = "ln",
    ph.street = "sa",
    ph.city = "ct",
    ph.region = "rg",
    ph.country = "co",
    ph.postal_code = "pc",
    ph.error_code = "ec",
    ph)
      , rh = {}
      , sh = (rh.email = "sha256_email_address",
    rh.phone_number = "sha256_phone_number",
    rh.first_name = "sha256_first_name",
    rh.last_name = "sha256_last_name",
    rh.street = "sha256_street",
    rh)
      , th = function(a, b) {
        function c(t, u, v, w) {
            var x = $g(t);
            "" !== x && (mh.test(x) ? l.push({
                name: u,
                value: x,
                index: w
            }) : l.push({
                name: u,
                value: v(x),
                index: w
            }))
        }
        function d(t, u) {
            var v = t;
            if (k(v) || Ja(v)) {
                v = Ja(t) ? t : [t];
                for (var w = 0; w < v.length; ++w) {
                    var x = $g(v[w])
                      , y = mh.test(x);
                    u && !y && N(89);
                    !u && y && N(88)
                }
            }
        }
        function e(t, u) {
            var v = t[u];
            d(v, !1);
            var w = sh[u];
            t.hasOwnProperty(w) && (t.hasOwnProperty(u) && N(90),
            v = t[w],
            d(v, !0));
            return v
        }
        function f(t, u, v) {
            var w = e(t, u);
            w = Ja(w) ? w : [w];
            for (var x = 0; x < w.length; ++x)
                c(w[x], u, v)
        }
        function g(t, u, v, w) {
            var x = e(t, u);
            c(x, u, v, w)
        }
        function h(t) {
            return function(u) {
                N(64);
                return t(u)
            }
        }
        var l = [];
        if ("https:" === z.location.protocol) {
            f(a, "email", ih);
            f(a, "phone_number", gh);
            f(a, "first_name", h(dh));
            f(a, "last_name", h(dh));
            var n = a.home_address || {};
            f(n, "street", h(ch));
            f(n, "city", h(ch));
            f(n, "postal_code", h(bh));
            f(n, "region", h(ch));
            f(n, "country", h(bh));
            var p = a.address || {};
            p = Ja(p) ? p : [p];
            for (var q = 0; q < p.length; q++) {
                var r = p[q];
                g(r, "first_name", dh, q);
                g(r, "last_name", dh, q);
                g(r, "street", ch, q);
                g(r, "city", ch, q);
                g(r, "postal_code", bh, q);
                g(r, "region", ch, q);
                g(r, "country", bh, q)
            }
            lh(l, b)
        } else
            l.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }),
            b(l)
    }
      , uh = function(a, b) {
        th(a, function(c) {
            for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                var g = c[f].name
                  , h = c[f].value
                  , l = c[f].index
                  , n = qh[g];
                n && h && (-1 === jh.indexOf(g) || /^e\d+$/.test(h) || oh.test(h) || mh.test(h)) && (void 0 !== l && (n += l),
                d.push(n + "." + h),
                e++)
            }
            1 === c.length && "error_code" === c[0].name && (e = 0);
            b(encodeURIComponent(d.join("~")), e)
        })
    }
      , vh = function(a) {
        if (z.Promise)
            try {
                return new Promise(function(b) {
                    uh(a, function(c, d) {
                        b({
                            Tf: c,
                            Wl: d
                        })
                    })
                }
                )
            } catch (b) {}
    }
      , jh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var O = {
        g: {
            We: "ad_personalization",
            F: "ad_storage",
            Xe: "ad_user_data",
            O: "analytics_storage",
            Ua: "region",
            xd: "consent_updated",
            Ye: "wait_for_update",
            mi: "ads",
            hg: "all",
            ni: "play",
            oi: "search",
            ri: "youtube",
            si: "app_remove",
            ui: "app_store_refund",
            vi: "app_store_subscription_cancel",
            wi: "app_store_subscription_convert",
            xi: "app_store_subscription_renew",
            jg: "add_payment_info",
            kg: "add_shipping_info",
            Yb: "add_to_cart",
            Zb: "remove_from_cart",
            lg: "view_cart",
            Kb: "begin_checkout",
            ac: "select_item",
            Za: "view_item_list",
            sb: "select_promotion",
            ab: "view_promotion",
            xa: "purchase",
            bc: "refund",
            Ia: "view_item",
            mg: "add_to_wishlist",
            fk: "exception",
            yi: "first_open",
            zi: "first_visit",
            la: "gtag.config",
            Ja: "gtag.get",
            Ai: "in_app_purchase",
            fc: "page_view",
            gk: "screen_view",
            Bi: "session_start",
            hk: "timing_complete",
            ik: "track_social",
            zd: "user_engagement",
            tb: "gclid",
            ma: "ads_data_redaction",
            ba: "allow_ad_personalization_signals",
            Ad: "allow_custom_scripts",
            af: "allow_display_features",
            Bd: "allow_enhanced_conversions",
            ub: "allow_google_signals",
            Da: "allow_interest_groups",
            jk: "app_id",
            kk: "app_installer_id",
            lk: "app_name",
            mk: "app_version",
            hc: "auid",
            Ci: "auto_detection_enabled",
            Lb: "aw_remarketing",
            bf: "aw_remarketing_only",
            Cd: "discount",
            Dd: "aw_feed_country",
            Ed: "aw_feed_language",
            X: "items",
            Fd: "aw_merchant_id",
            ng: "aw_basket_type",
            Lc: "campaign_content",
            Mc: "campaign_id",
            Nc: "campaign_medium",
            Oc: "campaign_name",
            Pc: "campaign",
            Qc: "campaign_source",
            Rc: "campaign_term",
            cb: "client_id",
            Di: "content_group",
            Ei: "content_type",
            Ka: "conversion_cookie_prefix",
            Sc: "conversion_id",
            ya: "conversion_linker",
            Mb: "conversion_api",
            Na: "cookie_domain",
            Ea: "cookie_expires",
            Oa: "cookie_flags",
            ic: "cookie_name",
            Tc: "cookie_path",
            La: "cookie_prefix",
            fb: "cookie_update",
            vb: "country",
            sa: "currency",
            Gd: "customer_lifetime_value",
            jc: "custom_map",
            Fi: "gcldc",
            Gi: "debug_mode",
            Z: "developer_id",
            Hi: "disable_merchant_reported_purchases",
            kc: "dc_custom_params",
            og: "dc_natural_search",
            pg: "dynamic_event_settings",
            qg: "affiliation",
            Hd: "checkout_option",
            cf: "checkout_step",
            rg: "coupon",
            Uc: "item_list_name",
            df: "list_name",
            Ii: "promotions",
            Vc: "shipping",
            ef: "tax",
            Id: "engagement_time_msec",
            Wc: "enhanced_client_id",
            Xc: "enhanced_conversions",
            sg: "enhanced_conversions_automatic_settings",
            Jd: "estimated_delivery_date",
            ff: "euid_logged_in_state",
            mc: "event_callback",
            nk: "event_category",
            wb: "event_developer_id_string",
            pk: "event_label",
            ug: "event",
            Kd: "event_settings",
            Ld: "event_timeout",
            qk: "description",
            rk: "fatal",
            Ji: "experiments",
            hf: "firebase_id",
            Md: "first_party_collection",
            Nd: "_x_20",
            Nb: "_x_19",
            vg: "fledge",
            wg: "flight_error_code",
            xg: "flight_error_message",
            Ki: "fl_activity_category",
            Li: "fl_activity_group",
            yg: "fl_advertiser_id",
            Mi: "fl_ar_dedupe",
            Ni: "fl_random_number",
            Oi: "tran",
            Pi: "u",
            Od: "gac_gclid",
            nc: "gac_wbraid",
            zg: "gac_wbraid_multiple_conversions",
            Ag: "ga_restrict_domain",
            jf: "ga_temp_client_id",
            Pd: "gdpr_applies",
            Bg: "geo_granularity",
            hb: "value_callback",
            Pa: "value_key",
            sk: "google_ono",
            ib: "google_signals",
            Cg: "google_tld",
            Qd: "groups",
            Dg: "gsa_experiment_id",
            Eg: "iframe_state",
            Rd: "ignore_referrer",
            kf: "internal_traffic_results",
            Ob: "is_legacy_converted",
            yb: "is_legacy_loaded",
            Sd: "is_passthrough",
            za: "language",
            lf: "legacy_developer_id_string",
            Aa: "linker",
            oc: "accept_incoming",
            zb: "decorate_forms",
            T: "domains",
            Pb: "url_position",
            Fg: "method",
            tk: "name",
            Yc: "new_customer",
            Gg: "non_interaction",
            Qi: "optimize_id",
            nf: "page_hostname",
            Qb: "page_path",
            Fa: "page_referrer",
            Ab: "page_title",
            Hg: "passengers",
            Ig: "phone_conversion_callback",
            Ri: "phone_conversion_country_code",
            Jg: "phone_conversion_css_class",
            Si: "phone_conversion_ids",
            Kg: "phone_conversion_number",
            Lg: "phone_conversion_options",
            qc: "quantity",
            Zc: "redact_device_info",
            pf: "redact_enhanced_user_id",
            Ti: "redact_ga_client_id",
            Ui: "redact_user_id",
            Td: "referral_exclusion_definition",
            Rb: "restricted_data_processing",
            Vi: "retoken",
            uk: "sample_rate",
            qf: "screen_name",
            Bb: "screen_resolution",
            Wi: "search_term",
            Qa: "send_page_view",
            Sb: "send_to",
            rf: "server_container_url",
            ad: "session_duration",
            Ud: "session_engaged",
            tf: "session_engaged_time",
            jb: "session_id",
            Vd: "session_number",
            bd: "delivery_postal_code",
            Mg: "temporary_client_id",
            uf: "topmost_url",
            Xi: "tracking_id",
            vf: "traffic_type",
            na: "transaction_id",
            sc: "transport_url",
            Ng: "trip_type",
            uc: "update",
            kb: "url_passthrough",
            Xd: "_user_agent_architecture",
            Yd: "_user_agent_bitness",
            Zd: "_user_agent_full_version_list",
            ae: "_user_agent_mobile",
            be: "_user_agent_model",
            ce: "_user_agent_platform",
            de: "_user_agent_platform_version",
            ee: "_user_agent_wow64",
            oa: "user_data",
            Og: "user_data_auto_latency",
            Pg: "user_data_auto_meta",
            Qg: "user_data_auto_multi",
            Rg: "user_data_auto_selectors",
            Sg: "user_data_auto_status",
            wf: "user_data_mode",
            xf: "user_data_settings",
            Ba: "user_id",
            Ra: "user_properties",
            Tg: "us_privacy_string",
            da: "value",
            vc: "wbraid",
            Ug: "wbraid_multiple_conversions",
            dj: "_host_name",
            ej: "_in_page_command",
            fj: "_is_passthrough_cid",
            Af: "non_personalized_ads",
            oe: "_sst_parameters",
            eb: "conversion_label",
            ia: "page_location",
            xb: "global_developer_id_string",
            Wd: "tc_privacy_string"
        }
    }
      , wh = {}
      , xh = Object.freeze((wh[O.g.ba] = 1,
    wh[O.g.af] = 1,
    wh[O.g.Bd] = 1,
    wh[O.g.ub] = 1,
    wh[O.g.X] = 1,
    wh[O.g.Na] = 1,
    wh[O.g.Ea] = 1,
    wh[O.g.Oa] = 1,
    wh[O.g.ic] = 1,
    wh[O.g.Tc] = 1,
    wh[O.g.La] = 1,
    wh[O.g.fb] = 1,
    wh[O.g.jc] = 1,
    wh[O.g.Z] = 1,
    wh[O.g.pg] = 1,
    wh[O.g.mc] = 1,
    wh[O.g.Kd] = 1,
    wh[O.g.Ld] = 1,
    wh[O.g.Md] = 1,
    wh[O.g.Ag] = 1,
    wh[O.g.ib] = 1,
    wh[O.g.Cg] = 1,
    wh[O.g.Qd] = 1,
    wh[O.g.kf] = 1,
    wh[O.g.Ob] = 1,
    wh[O.g.yb] = 1,
    wh[O.g.Aa] = 1,
    wh[O.g.pf] = 1,
    wh[O.g.Td] = 1,
    wh[O.g.Rb] = 1,
    wh[O.g.Qa] = 1,
    wh[O.g.Sb] = 1,
    wh[O.g.rf] = 1,
    wh[O.g.ad] = 1,
    wh[O.g.tf] = 1,
    wh[O.g.bd] = 1,
    wh[O.g.sc] = 1,
    wh[O.g.uc] = 1,
    wh[O.g.xf] = 1,
    wh[O.g.Ra] = 1,
    wh[O.g.oe] = 1,
    wh));
    Object.freeze([O.g.ia, O.g.Fa, O.g.Ab, O.g.za, O.g.qf, O.g.Ba, O.g.hf, O.g.Di]);
    var yh = {}
      , zh = Object.freeze((yh[O.g.si] = 1,
    yh[O.g.ui] = 1,
    yh[O.g.vi] = 1,
    yh[O.g.wi] = 1,
    yh[O.g.xi] = 1,
    yh[O.g.yi] = 1,
    yh[O.g.zi] = 1,
    yh[O.g.Ai] = 1,
    yh[O.g.Bi] = 1,
    yh[O.g.zd] = 1,
    yh))
      , Ah = {}
      , Bh = Object.freeze((Ah[O.g.jg] = 1,
    Ah[O.g.kg] = 1,
    Ah[O.g.Yb] = 1,
    Ah[O.g.Zb] = 1,
    Ah[O.g.lg] = 1,
    Ah[O.g.Kb] = 1,
    Ah[O.g.ac] = 1,
    Ah[O.g.Za] = 1,
    Ah[O.g.sb] = 1,
    Ah[O.g.ab] = 1,
    Ah[O.g.xa] = 1,
    Ah[O.g.bc] = 1,
    Ah[O.g.Ia] = 1,
    Ah[O.g.mg] = 1,
    Ah))
      , Ch = Object.freeze([O.g.ba, O.g.ub, O.g.fb])
      , Dh = Object.freeze([].concat(Ch))
      , Eh = Object.freeze([O.g.Ea, O.g.Ld, O.g.ad, O.g.tf, O.g.Id])
      , Fh = Object.freeze([].concat(Eh))
      , Gh = {}
      , Hh = (Gh[O.g.F] = "1",
    Gh[O.g.O] = "2",
    Gh)
      , Ih = {}
      , Jh = Object.freeze((Ih[O.g.ba] = 1,
    Ih[O.g.Bd] = 1,
    Ih[O.g.Da] = 1,
    Ih[O.g.Lb] = 1,
    Ih[O.g.bf] = 1,
    Ih[O.g.Cd] = 1,
    Ih[O.g.Dd] = 1,
    Ih[O.g.Ed] = 1,
    Ih[O.g.X] = 1,
    Ih[O.g.Fd] = 1,
    Ih[O.g.Ka] = 1,
    Ih[O.g.ya] = 1,
    Ih[O.g.Na] = 1,
    Ih[O.g.Ea] = 1,
    Ih[O.g.Oa] = 1,
    Ih[O.g.La] = 1,
    Ih[O.g.sa] = 1,
    Ih[O.g.Gd] = 1,
    Ih[O.g.Z] = 1,
    Ih[O.g.Hi] = 1,
    Ih[O.g.Xc] = 1,
    Ih[O.g.Jd] = 1,
    Ih[O.g.hf] = 1,
    Ih[O.g.Md] = 1,
    Ih[O.g.Ob] = 1,
    Ih[O.g.yb] = 1,
    Ih[O.g.za] = 1,
    Ih[O.g.Yc] = 1,
    Ih[O.g.ia] = 1,
    Ih[O.g.Fa] = 1,
    Ih[O.g.Ig] = 1,
    Ih[O.g.Jg] = 1,
    Ih[O.g.Kg] = 1,
    Ih[O.g.Lg] = 1,
    Ih[O.g.Rb] = 1,
    Ih[O.g.Qa] = 1,
    Ih[O.g.Sb] = 1,
    Ih[O.g.rf] = 1,
    Ih[O.g.bd] = 1,
    Ih[O.g.na] = 1,
    Ih[O.g.sc] = 1,
    Ih[O.g.uc] = 1,
    Ih[O.g.kb] = 1,
    Ih[O.g.oa] = 1,
    Ih[O.g.Ba] = 1,
    Ih[O.g.da] = 1,
    Ih));
    Object.freeze(O.g);
    var Kh = {}
      , Lh = z.google_tag_manager = z.google_tag_manager || {}
      , Mh = Math.random();
    Kh.ah = "36s0";
    Kh.ne = Number("0") || 0;
    Kh.ka = "dataLayer";
    Kh.dk = "ChEI8MyZpQYQrZ3zwczQoP/0ARIlAMxgZnBa+LRapaGZh2H7RRUhcaZvcqBCoTsx/R7Q2SuGb2XGBBoCYG0\x3d";
    var Nh = {
        __cl: 1,
        __ecl: 1,
        __ehl: 1,
        __evl: 1,
        __fal: 1,
        __fil: 1,
        __fsl: 1,
        __hl: 1,
        __jel: 1,
        __lcl: 1,
        __sdl: 1,
        __tl: 1,
        __ytl: 1
    }, Oh = {
        __paused: 1,
        __tg: 1
    }, Ph;
    for (Ph in Nh)
        Nh.hasOwnProperty(Ph) && (Oh[Ph] = 1);
    var Qh = Ra("true"), Rh, Sh = !1;
    Sh = !0;
    Rh = Sh;
    var Th, Uh = !1;
    Th = Uh;
    var Vh, Wh = !1;
    Vh = Wh;
    var Xh, Yh = !1;
    Xh = Yh;
    Kh.Ze = "www.googletagmanager.com";
    var Zh = "" + Kh.Ze + (Rh ? "/gtag/js" : "/gtm.js")
      , $h = null
      , ai = null
      , bi = {}
      , ci = {}
      , di = {}
      , ei = function() {
        var a = Lh.sequence || 1;
        Lh.sequence = a + 1;
        return a
    };
    Kh.bk = "true";
    var fi = "";
    Kh.Ef = fi;
    var gi = new Ma
      , hi = {}
      , ii = {}
      , li = {
        name: Kh.ka,
        set: function(a, b) {
            I(bb(a, b), hi);
            ji()
        },
        get: function(a) {
            return ki(a, 2)
        },
        reset: function() {
            gi = new Ma;
            hi = {};
            ji()
        }
    }
      , ki = function(a, b) {
        return 2 != b ? gi.get(a) : mi(a)
    }
      , mi = function(a, b) {
        var c = a.split(".");
        b = b || [];
        for (var d = hi, e = 0; e < c.length; e++) {
            if (null === d)
                return !1;
            if (void 0 === d)
                break;
            d = d[c[e]];
            if (-1 !== b.indexOf(d))
                return
        }
        return d
    }
      , ni = function(a, b) {
        ii.hasOwnProperty(a) || (gi.set(a, b),
        I(bb(a, b), hi),
        ji())
    }
      , oi = function() {
        for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
            var c = a[b]
              , d = ki(c, 1);
            if (Ja(d) || Uc(d))
                d = I(d);
            ii[c] = d
        }
    }
      , ji = function(a) {
        m(ii, function(b, c) {
            gi.set(b, c);
            I(bb(b), hi);
            I(bb(b, c), hi);
            a && delete ii[b]
        })
    }
      , pi = function(a, b) {
        var c, d = 1 !== (void 0 === b ? 2 : b) ? mi(a) : gi.get(a);
        "array" === Sc(d) || "object" === Sc(d) ? c = I(d) : c = d;
        return c
    };
    var qi = []
      , ri = function(a) {
        return void 0 == qi[a] ? !1 : qi[a]
    };
    var R = [];
    R[5] = !0;
    R[6] = !0;
    R[13] = !0;
    R[14] = !0;
    R[7] = !0;
    R[8] = !0;
    R[23] = !0;
    R[9] = !0;
    R[10] = !0;
    R[12] = !0;
    R[16] = !0;
    R[17] = !0;
    R[19] = !0;
    R[25] = !0;
    R[26] = !0;
    R[27] = !0;
    R[30] = !0;
    R[31] = !0;
    R[34] = !0;
    R[36] = !0;
    R[35] = !0;
    R[37] = !0;
    R[38] = !0;
    R[40] = !0;
    R[41] = !0;
    R[43] = !0;
    R[45] = !0;
    R[46] = !0;
    R[47] = !0;
    R[48] = !0;

    R[58] = !0;
    R[60] = !0;
    R[61] = !0;
    R[62] = !0;
    R[65] = !0;
    R[68] = !0;
    R[70] = !0;
    R[71] = !0;
    R[73] = !0;
    R[75] = !0;
    R[76] = !0;
    R[78] = !0;

    R[88] = !0;
    function S(a) {
        return !!R[a]
    }
    var si = function(a) {
        xb("HEALTH", a)
    };
    var ti;
    try {
        ti = JSON.parse(vb("eyIwIjoiQkQiLCIxIjoiQkQtQyIsIjIiOmZhbHNlLCIzIjoiZ29vZ2xlLmNvbS5iZCIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6IiJ9"))
    } catch (a) {
        N(123),
        si(2),
        ti = {}
    }
    var ui = function() {
        return ti["0"] || ""
    }
      , vi = function() {
        return ti["1"] || ""
    }
      , wi = function() {
        var a = !1;
        a = !!ti["2"];
        return a
    }
      , xi = function() {
        return !!ti["6"]
    }
      , yi = function() {
        var a = "";
        a = ti["4"] || "";
        return a
    }
      , zi = function() {
        var a = !1;
        a = !!ti["5"];
        return a
    }
      , Ai = function() {
        var a = "";
        a = ti["3"] || "";
        return a
    };
    var Hi, Ii = !1;
    function Ji() {
        Ii = !0;
        Hi = Hi || {}
    }
    var Ki = function(a) {
        Ii || Ji();
        return Hi[a]
    };
    var Li = function() {
        var a = z.screen;
        return {
            width: a ? a.width : 0,
            height: a ? a.height : 0
        }
    }
      , Mi = function(a) {
        if (G.hidden)
            return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle)
            return !0;
        var c = z.getComputedStyle(a, null);
        if ("hidden" === c.visibility)
            return !0;
        for (var d = a, e = c; d; ) {
            if ("none" === e.display)
                return !0;
            var f = e.opacity
              , g = e.filter;
            if (g) {
                var h = g.indexOf("opacity(");
                0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)),
                "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
                f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f)
                return !0;
            (d = d.parentElement) && (e = z.getComputedStyle(d, null))
        }
        return !1
    };
    var Ni = function() {
        var a = G.body, b = G.documentElement || a && a.parentElement, c, d;
        if (G.compatMode && "BackCompat" !== G.compatMode)
            c = b ? b.clientHeight : 0,
            d = b ? b.clientWidth : 0;
        else {
            var e = function(f, g) {
                return f && g ? Math.min(f, g) : Math.max(f, g)
            };
            c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
            d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
        }
        return {
            width: d,
            height: c
        }
    }
      , Oi = function(a) {
        var b = Ni()
          , c = b.height
          , d = b.width
          , e = a.getBoundingClientRect()
          , f = e.bottom - e.top
          , g = e.right - e.left;
        return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
    };
    var Vi = /:[0-9]+$/
      , Wi = /^\d+\.fls\.doubleclick\.net$/
      , Xi = function(a, b, c, d) {
        for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
            var h = f[g].split("=");
            if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                var l = h.slice(1).join("=");
                if (!c)
                    return d ? l : decodeURIComponent(l).replace(/\+/g, " ");
                e.push(d ? l : decodeURIComponent(l).replace(/\+/g, " "))
            }
        }
        return c ? e : void 0
    }
      , $i = function(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b)
            a.protocol = Yi(a.protocol) || Yi(z.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(Vi, "").toLowerCase());
        return Zi(a, b, c, d, e)
    }
      , Zi = function(a, b, c, d, e) {
        var f, g = Yi(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
        case "url_no_fragment":
            f = aj(a);
            break;
        case "protocol":
            f = g;
            break;
        case "host":
            f = a.hostname.replace(Vi, "").toLowerCase();
            if (c) {
                var h = /^www\d*\./.exec(f);
                h && h[0] && (f = f.substr(h[0].length))
            }
            break;
        case "port":
            f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
            break;
        case "path":
            a.pathname || a.hostname || xb("TAGGING", 1);
            f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
            var l = f.split("/");
            0 <= (d || []).indexOf(l[l.length - 1]) && (l[l.length - 1] = "");
            f = l.join("/");
            break;
        case "query":
            f = a.search.replace("?", "");
            e && (f = Xi(f, e, !1));
            break;
        case "extension":
            var n = a.pathname.split(".");
            f = 1 < n.length ? n[n.length - 1] : "";
            f = f.split("/")[0];
            break;
        case "fragment":
            f = a.hash.replace("#", "");
            break;
        default:
            f = a && a.href
        }
        return f
    }
      , Yi = function(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }
      , aj = function(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c)
        }
        return b
    }
      , bj = function(a) {
        var b = G.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || xb("TAGGING", 1),
        c = "/" + c);
        var d = b.hostname.replace(Vi, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        }
    }
      , cj = function(a) {
        function b(n) {
            var p = n.split("=")[0];
            return 0 > d.indexOf(p) ? n : p + "=0"
        }
        function c(n) {
            return n.split("&").map(b).filter(function(p) {
                return void 0 !== p
            }).join("&")
        }
        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" ")
          , e = bj(a)
          , f = a.split(/[?#]/)[0]
          , g = e.search
          , h = e.hash;
        "?" === g[0] && (g = g.substring(1));
        "#" === h[0] && (h = h.substring(1));
        g = c(g);
        h = c(h);
        "" !== g && (g = "?" + g);
        "" !== h && (h = "#" + h);
        var l = "" + f + g + h;
        "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
        return l
    }
      , dj = function(a) {
        var b = bj(z.location.href)
          , c = $i(b, "host", !1);
        if (c && c.match(Wi)) {
            var d = $i(b, "path").split(a + "=");
            if (1 < d.length)
                return d[1].split(";")[0].split("?")[0]
        }
    };
    var fj = function(a, b, c) {
        var d = a.element
          , e = {
            U: a.U,
            type: a.ja,
            tagName: d.tagName
        };
        b && (e.querySelector = ej(d));
        c && (e.isVisible = !Mi(d));
        return e
    }
      , gj = function(a, b, c) {
        return fj({
            element: a.element,
            U: a.U,
            ja: "1"
        }, b, c)
    }
      , hj = function(a) {
        var b = !!a.yc + "." + !!a.zc;
        a && a.hd && a.hd.length && (b += "." + a.hd.join("."));
        a && a.Wa && (b += "." + a.Wa.email + "." + a.Wa.phone + "." + a.Wa.address);
        return b
    }
      , kj = function(a) {
        if (0 != a.length) {
            var b;
            b = ij(a, function(c) {
                return !jj.test(c.U)
            });
            b = ij(b, function(c) {
                return "INPUT" === c.element.tagName.toUpperCase()
            });
            b = ij(b, function(c) {
                return !Mi(c.element)
            });
            return b[0]
        }
    }
      , lj = function(a, b) {
        if (!b || 0 === b.length)
            return a;
        for (var c = [], d = 0; d < a.length; d++) {
            for (var e = !0, f = 0; f < b.length; f++) {
                var g = b[f];
                if (g && Xg(a[d].element, g)) {
                    e = !1;
                    break
                }
            }
            e && c.push(a[d])
        }
        return c
    }
      , ij = function(a, b) {
        if (1 >= a.length)
            return a;
        var c = a.filter(b);
        return 0 == c.length ? a : c
    }
      , ej = function(a) {
        var b;
        if (a === G.body)
            b = "body";
        else {
            var c;
            if (a.id)
                c = "#" + a.id;
            else {
                var d;
                if (a.parentElement) {
                    var e;
                    a: {
                        var f = a.parentElement;
                        if (f) {
                            for (var g = 0; g < f.childElementCount; g++)
                                if (f.children[g] === a) {
                                    e = g + 1;
                                    break a
                                }
                            e = -1
                        } else
                            e = 1
                    }
                    d = ej(a.parentElement) + ">:nth-child(" + e + ")"
                } else
                    d = "";
                c = d
            }
            b = c
        }
        return b
    }
      , nj = function(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = a[c]
              , e = d.textContent;
            "INPUT" === d.tagName.toUpperCase() && d.value && (e = d.value);
            if (e) {
                var f = e.match(mj);
                if (f) {
                    var g = f[0], h;
                    if (z.location) {
                        var l = Zi(z.location, "host", !0);
                        h = 0 <= g.toLowerCase().indexOf(l)
                    } else
                        h = !1;
                    h || b.push({
                        element: d,
                        U: g
                    })
                }
            }
        }
        return b
    }
      , rj = function() {
        var a = []
          , b = G.body;
        if (!b)
            return {
                elements: a,
                status: "4"
            };
        for (var c = b.querySelectorAll("*"), d = 0; d < c.length && 1E4 > d; d++) {
            var e = c[d];
            if (!(0 <= oj.indexOf(e.tagName.toUpperCase())) && e.children instanceof HTMLCollection) {
                for (var f = !1, g = 0; g < e.childElementCount && 1E4 > g; g++)
                    if (!(0 <= pj.indexOf(e.children[g].tagName.toUpperCase()))) {
                        f = !0;
                        break
                    }
                (!f || S(59) && -1 !== qj.indexOf(e.tagName)) && a.push(e)
            }
        }
        return {
            elements: a,
            status: 1E4 < c.length ? "2" : "1"
        }
    }
      , sj = !0
      , tj = !1;
    var mj = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i
      , uj = /@(gmail|googlemail)\./i
      , jj = /support|noreply/i
      , oj = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" ")
      , pj = ["BR"]
      , vj = {
        Hm: "1",
        Pm: "2",
        Im: "3",
        Km: "4",
        Fm: "5",
        Qm: "6",
        Lm: "7"
    }
      , wj = {}
      , qj = ["INPUT", "SELECT"];
    var Pj = function(a) {
        a = a || {
            yc: !0,
            zc: !0
        };
        a.Wa = a.Wa || {
            email: !0,
            phone: !1,
            address: !1
        };
        var b = hj(a)
          , c = wj[b];
        if (c && 200 > Va() - c.timestamp)
            return c.result;
        var d = rj(), e = d.status, f = [], g, h, l = [];
        if (!S(59)) {
            if (a.Wa && a.Wa.email) {
                var n = nj(d.elements);
                f = lj(n, a && a.hd);
                g = kj(f);
                10 < n.length && (e = "3")
            }
            !a.Vh && g && (f = [g]);
            for (var p = 0; p < f.length; p++)
                l.push(gj(f[p], a.yc, a.zc));
            l = l.slice(0, 10)
        } else if (a.Wa) {}
        g && (h = gj(g, a.yc, a.zc));
        var D = {
            elements: l,
            Oh: h,
            status: e
        };
        wj[b] = {
            timestamp: Va(),
            result: D
        };
        return D
    }
      , Qj = function(a) {
        return a.tagName + ":" + a.isVisible + ":" + a.U.length + ":" + uj.test(a.U)
    };
    var Rj = function(a, b, c) {
        if (!c)
            return !1;
        var d = c.selector_type, e = String(c.value), f;
        if ("js_variable" === d) {
            e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
            for (var g = e.split(","), h = 0; h < g.length; h++) {
                var l = g[h].trim();
                if (l) {
                    if (0 === l.indexOf("dataLayer."))
                        f = ki(l.substring(10));
                    else {
                        var n = l.split(".");
                        f = z[n.shift()];
                        for (var p = 0; p < n.length; p++)
                            f = f && f[n[p]]
                    }
                    if (void 0 !== f)
                        break
                }
            }
        } else if ("css_selector" === d && Vg) {
            var q = Wg(e);
            if (q && 0 < q.length) {
                f = [];
                for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++)
                    f.push(wc(q[r]) || Ta(q[r].value));
                f = 1 === f.length ? f[0] : f
            }
        }
        return f ? (a[b] = f,
        !0) : !1
    }
      , Sj = function(a) {
        if (a) {
            var b = {}
              , c = !1;
            c = Rj(b, "email", a.email) || c;
            c = Rj(b, "phone_number", a.phone) || c;
            b.address = [];
            for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
                var f = {};
                c = Rj(f, "first_name", d[e].first_name) || c;
                c = Rj(f, "last_name", d[e].last_name) || c;
                c = Rj(f, "street", d[e].street) || c;
                c = Rj(f, "city", d[e].city) || c;
                c = Rj(f, "region", d[e].region) || c;
                c = Rj(f, "country", d[e].country) || c;
                c = Rj(f, "postal_code", d[e].postal_code) || c;
                b.address.push(f)
            }
            return c ? b : void 0
        }
    }
      , Tj = function(a) {
        return a.B[O.g.xf]
    }
      , Uj = function(a) {
        var b = T(a, O.g.Xc) || {}
          , c = !1;
        m(b, function(d, e) {
            var f = e.enhanced_conversions_mode;
            if ("automatic" === f || "manual" === f)
                c = !0
        });
        return c
    }
      , Vj = function(a) {
        if (!Uc(a))
            return !1;
        var b = a.mode;
        return "auto_detect" === b || "selectors" === b || "code" === b || !!a.enable_code
    }
      , Wj = function(a) {
        if (a) {
            if ("selectors" === a.mode || Uc(a.selectors))
                return Sj(a.selectors);
            if ("auto_detect" === a.mode || Uc(a.auto_detect)) {
                var b;
                var c = a.auto_detect;
                if (c) {
                    var d = Pj({
                        yc: !1,
                        zc: !1,
                        hd: c.exclude_element_selectors,
                        Wa: {
                            email: !!c.email,
                            phone: !!c.phone,
                            address: !!c.address
                        }
                    }).elements
                      , e = {};
                    if (0 < d.length)
                        for (var f = 0; f < d.length; f++) {
                            var g = d[f];
                            if ("1" === g.type) {
                                e.email = g.U;
                                break
                            }
                        }
                    b = e
                } else
                    b = void 0;
                return b
            }
        }
    };
    var ak = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }
    (1933);
    var bk = function(a) {
        bk[" "](a);
        return a
    };
    bk[" "] = function() {}
    ;
    var dk = function() {
        var a = ck
          , b = "th";
        if (a.th && a.hasOwnProperty(b))
            return a.th;
        var c = new a;
        return a.th = c
    };
    var ck = function() {
        var a = {};
        this.h = function() {
            var b = ak.h
              , c = ak.defaultValue;
            return null != a[b] ? a[b] : c
        }
        ;
        this.m = function() {
            a[ak.h] = !0
        }
    };
    var ek = !1
      , fk = !1
      , gk = []
      , hk = {}
      , ik = {}
      , jk = {
        ad_storage: !1,
        ad_user_data: !1,
        ad_personalization: !1
    };
    function kk() {
        var a = kc("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            cps: {},
            default: lk,
            update: mk,
            declare: nk,
            implicit: ok,
            addListener: pk,
            notifyListeners: qk,
            setCps: rk,
            active: !1,
            usedDeclare: !1,
            usedDefault: !1,
            usedUpdate: !1,
            usedImplicit: !1,
            usedSetCps: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }
    function sk(a, b, c, d) {
        return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b
    }
    function nk(a, b, c, d, e) {
        var f = kk();
        f.active = !0;
        f.usedDeclare = !0;
        var g = f.entries
          , h = g[a] || {}
          , l = h.declare_region
          , n = c && k(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (sk(n, l, d, e)) {
            var p = {
                region: h.region,
                declare_region: n,
                declare: "granted" === b,
                implicit: h.implicit,
                default: h.default,
                update: h.update,
                quiet: h.quiet
            };
            if ("" !== d || !1 !== h.declare)
                g[a] = p
        }
    }
    function ok(a, b) {
        var c = kk();
        c.active = !0;
        c.usedImplicit = !0;
        var d = c.entries
          , e = d[a] = d[a] || {};
        !1 !== e.implicit && (e.implicit = "granted" === b)
    }
    function lk(a, b, c, d, e, f) {
        var g = kk();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        xb("TAGGING", 19);
        if (void 0 == b)
            xb("TAGGING", 18);
        else {
            var h = g.entries
              , l = h[a] || {}
              , n = l.region
              , p = c && k(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if (sk(p, n, d, e)) {
                var q = !!(f && 0 < f && void 0 === l.update)
                  , r = {
                    region: p,
                    declare_region: l.declare_region,
                    implicit: l.implicit,
                    default: "granted" === b,
                    declare: l.declare,
                    update: l.update,
                    quiet: q
                };
                if ("" !== d || !1 !== l.default)
                    h[a] = r;
                q && z.setTimeout(function() {
                    if (h[a] === r && r.quiet) {
                        r.quiet = !1;
                        var t = [a];
                        if (ri(4))
                            for (var u in hk)
                                hk.hasOwnProperty(u) && hk[u] === a && t.push(u);
                        for (var v = 0; v < t.length; v++)
                            tk(t[v]);
                        qk();
                        xb("TAGGING", 2)
                    }
                }, f)
            }
        }
    }
    function mk(a, b) {
        var c = kk();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = uk(c, a)
              , e = c.entries
              , f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = uk(c, a)
              , h = [a];
            if (ri(4))
                for (var l in hk)
                    hk.hasOwnProperty(l) && hk[l] === a && h.push(l);
            if (f.quiet) {
                f.quiet = !1;
                for (var n = 0; n < h.length; n++)
                    tk(h[n])
            } else if (g !== d)
                for (var p = 0; p < h.length; p++)
                    tk(h[p])
        }
    }
    function vk(a, b, c, d, e, f) {
        var g = a[b] || {}
          , h = g.region
          , l = d && k(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (sk(l, h, e, f)) {
            var n = {
                enabled: "granted" === c,
                region: l
            };
            if ("" !== e || !1 !== g.enabled)
                return a[b] = n,
                !0
        }
        return !1
    }
    function rk(a, b, c, d, e) {
        var f = kk();
        vk(f.cps, a, b, c, d, e) && (f.usedSetCps = !0)
    }
    function pk(a, b) {
        gk.push({
            consentTypes: a,
            Yk: b
        })
    }
    function tk(a) {
        for (var b = 0; b < gk.length; ++b) {
            var c = gk[b];
            Ja(c.consentTypes) && -1 !== c.consentTypes.indexOf(a) && (c.Ij = !0)
        }
    }
    function qk(a, b) {
        for (var c = 0; c < gk.length; ++c) {
            var d = gk[c];
            if (d.Ij) {
                d.Ij = !1;
                try {
                    d.Yk({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }
    function uk(a, b) {
        var c = a.entries
          , d = c[b] || {}
          , e = d.update;
        if (void 0 !== e)
            return e ? 1 : 2;
        e = d.default;
        if (void 0 !== e)
            return e ? 1 : 2;
        if (ri(4) && hk.hasOwnProperty(b)) {
            var f = c[hk[b]] || {};
            e = f.update;
            if (void 0 !== e)
                return e ? 1 : 2;
            e = f.default;
            if (void 0 !== e)
                return e ? 1 : 2
        }
        e = d.declare;
        return void 0 !== e ? e ? 1 : 2 : ri(4) && (e = d.implicit,
        void 0 !== e) ? e ? 3 : 4 : ri(3) && jk.hasOwnProperty(b) ? jk[b] ? 3 : 4 : 0
    }
    var wk = function(a) {
        var b = kk();
        b.accessedAny = !0;
        switch (uk(b, a)) {
        case 1:
        case 3:
            return !0;
        case 2:
        case 4:
            return !1;
        default:
            return !0
        }
    }
      , xk = function(a) {
        var b = kk();
        b.accessedDefault = !0;
        switch ((b.entries[a] || {}).default) {
        case !0:
            return 3;
        case !1:
            return 2;
        default:
            return 1
        }
    }
      , yk = function(a) {
        var b = kk();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }
      , zk = function() {
        if (!dk().h())
            return !1;
        var a = kk();
        a.accessedAny = !0;
        return a.active
    }
      , Ak = function() {
        var a = kk();
        a.accessedDefault = !0;
        return a.usedDefault
    }
      , Bk = function(a, b) {
        kk().addListener(a, b)
    }
      , Ck = function(a, b) {
        kk().notifyListeners(a, b)
    }
      , Dk = function(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!yk(b[e]))
                    return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            Bk(b, function(e) {
                d || c() || (d = !0,
                a(e))
            })
        } else
            a({})
    }
      , Ek = function(a, b) {
        function c() {
            for (var f = [], g = 0; g < d.length; g++) {
                var h = d[g];
                wk(h) && !e[h] && (f.push(h),
                e[h] = !0)
            }
            return f
        }
        var d = k(b) ? [b] : b
          , e = {};
        c().length !== d.length && Bk(d, function(f) {
            var g = c();
            0 < g.length && (f.consentTypes = g,
            a(f))
        })
    };
    function Fk() {}
    function Gk() {}
    ;var Hk = [O.g.F, O.g.O, O.g.Xe, O.g.We]
      , Ik = {}
      , Jk = (Ik[O.g.mi] = "a",
    Ik[O.g.oi] = "s",
    Ik[O.g.ri] = "y",
    Ik[O.g.ni] = "p",
    Ik)
      , Kk = function(a) {
        for (var b = a[O.g.Ua], c = Array.isArray(b) ? b : [b], d = {
            pd: 0
        }; d.pd < c.length; d = {
            pd: d.pd
        },
        ++d.pd)
            m(a, function(e) {
                return function(f, g) {
                    if (f !== O.g.Ua) {
                        var h = c[e.pd]
                          , l = ui()
                          , n = vi();
                        fk = !0;
                        ek && xb("TAGGING", 20);
                        kk().declare(f, g, h, l, n)
                    }
                }
            }(d))
    }
      , Lk = function(a) {
        var b = a[O.g.Ua];
        b && N(40);
        var c = a[O.g.Ye];
        c && N(41);
        for (var d = Ja(b) ? b : [b], e = {
            rd: 0
        }; e.rd < d.length; e = {
            rd: e.rd
        },
        ++e.rd)
            m(a, function(f) {
                return function(g, h) {
                    if (g !== O.g.Ua && g !== O.g.Ye) {
                        var l = d[f.rd]
                          , n = Number(c)
                          , p = ui()
                          , q = vi();
                        ek = !0;
                        fk && xb("TAGGING", 20);
                        kk().default(g, h, l, p, q, n)
                    }
                }
            }(e))
    }
      , Mk = function(a, b) {
        m(a, function(c, d) {
            ek = !0;
            fk && xb("TAGGING", 20);
            kk().update(c, d)
        });
        Ck(b.eventId, b.priorityId)
    }
      , Nk = function(a) {
        for (var b = a[O.g.Ua], c = Array.isArray(b) ? b : [b], d = {
            sd: 0
        }; d.sd < c.length; d = {
            sd: d.sd
        },
        ++d.sd)
            m(a, function(e) {
                return function(f, g) {
                    if (f !== O.g.Ua) {
                        var h = c[e.sd]
                          , l = ui()
                          , n = vi();
                        kk().setCps(f, g, h, l, n)
                    }
                }
            }(d))
    }
      , Ok = function(a) {
        for (var b = a[O.g.Ua], c = Array.isArray(b) ? b : [b], d = {
            Gc: 0
        }; d.Gc < c.length; d = {
            Gc: d.Gc
        },
        ++d.Gc)
            a.hasOwnProperty(O.g.hg) && m(Jk, function(e) {
                return function(f) {
                    vk(ik, f, a[O.g.hg], c[e.Gc], ui(), vi())
                }
            }(d)),
            m(a, function(e) {
                return function(f, g) {
                    f !== O.g.Ua && f !== O.g.hg && vk(ik, f, g, c[e.Gc], ui(), vi())
                }
            }(d))
    }
      , Pk = function() {
        return wk(O.g.Xe) ? xi() || kk().usedSetCps : !1
    }
      , Qk = function(a, b) {
        Bk(a, b)
    }
      , Rk = function(a, b) {
        Ek(a, b)
    }
      , Sk = function(a, b) {
        Dk(a, b)
    }
      , Tk = function() {
        if (S(50)) {
            for (var a = ti["7"], b = a ? a.split("|") : [], c = {}, d = 0; d < b.length; d++)
                c[b[d]] = !0;
            for (var e = 0; e < Hk.length; e++) {
                var f = Hk[e]
                  , g = c[f] ? "granted" : "denied";
                kk().implicit(f, g)
            }
        }
    };
    var Uk = function(a) {
        var b = String(a[oe.Tb] || "").replace(/_/g, "");
        0 === b.indexOf("cvt") && (b = "cvt");
        return b
    }
      , Vk = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
    var Xk = function(a, b) {
        var c = Wk();
        c.pending || (c.pending = []);
        Ka(c.pending, function(d) {
            return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        }) || c.pending.push({
            target: a,
            onLoad: b
        })
    }
      , Yk = function() {
        this.container = {};
        this.destination = {};
        this.canonical = {};
        this.pending = [];
        this.siloed = []
    }
      , Wk = function() {
        var a = kc("google_tag_data", {})
          , b = a.tidr;
        b || (b = new Yk,
        a.tidr = b);
        return b
    };
    var Zk = {}
      , $k = !1
      , rf = {
        ctid: "G-610L9KESM0",
        Jf: "118082965",
        Uf: "G-610L9KESM0|GT-M6XV6GB",
        Hj: "G-610L9KESM0"
    };
    Zk.zf = Ra("");
    var al = function() {
        return S(81) ? $k : !1
    }
      , cl = function() {
        var a = rf.Uf ? rf.Uf.split("|") : [rf.ctid];
        return al() ? a.map(bl) : a
    }
      , el = function() {
        var a = dl();
        return al() ? a.map(bl) : a
    }
      , gl = function() {
        return fl(rf.ctid)
    }
      , hl = function(a) {
        return a ? rf.Jf : fl(rf.Jf || "_" + rf.ctid)
    }
      , dl = function() {
        return rf.Hj ? rf.Hj.split("|") : []
    }
      , il = function(a) {
        var b = Wk();
        return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
    }
      , fl = function(a) {
        return S(81) ? al() ? bl(a) : a : a
    }
      , bl = function(a) {
        return S(81) ? "siloed_" + a : a
    }
      , jl = function(a) {
        if (!S(81))
            return a;
        a = String(a);
        return al() && 0 === a.indexOf("siloed_") ? a.substring(7) : a
    }
      , kl = function() {
        if (S(81)) {
            var a = !1;
            if (a) {
                var b = Wk();
                if (b.siloed) {
                    for (var c = [], d = rf.Uf ? rf.Uf.split("|") : [rf.ctid], e = dl(), f = {}, g = 0; g < b.siloed.length; f = {
                        nd: f.nd
                    },
                    g++)
                        f.nd = b.siloed[g],
                        !al() && Ka(f.nd.isDestination ? e : d, function(h) {
                            return function(l) {
                                return l === h.nd.ctid
                            }
                        }(f)) ? $k = !0 : c.push(f.nd);
                    b.siloed = c
                }
            }
        }
    };
    function ll() {
        var a = Wk();
        if (a.pending) {
            for (var b, c = [], d = !1, e = cl(), f = el(), g = {}, h = 0; h < a.pending.length; g = {
                Ic: g.Ic
            },
            h++)
                g.Ic = a.pending[h],
                Ka(g.Ic.target.isDestination ? f : e, function(l) {
                    return function(n) {
                        return n === l.Ic.target.ctid
                    }
                }(g)) ? d || (b = g.Ic.onLoad,
                d = !0) : c.push(g.Ic);
            a.pending = c;
            if (b)
                try {
                    b(hl())
                } catch (l) {}
        }
    }
    var ml = function() {
        for (var a = Wk(), b = cl(), c = 0; c < b.length; c++) {
            var d = a.container[b[c]];
            d ? (d.state = 2,
            d.containers = cl(),
            d.destinations = el()) : a.container[b[c]] = {
                state: 2,
                containers: cl(),
                destinations: el()
            }
        }
        for (var e = el(), f = 0; f < e.length; f++) {
            var g = a.destination[e[f]];
            g && 0 === g.state && N(93);
            g ? (g.state = 2,
            g.containers = cl(),
            g.destinations = el()) : a.destination[e[f]] = {
                state: 2,
                containers: cl(),
                destinations: el()
            }
        }
        S(75) && (a.canonical[hl()] = {});
        ll()
    }
      , nl = function() {
        var a = hl();
        return !!Wk().canonical[a]
    }
      , ol = function(a) {
        return !!Wk().container[a]
    }
      , pl = function() {
        return {
            ctid: gl(),
            isDestination: Zk.zf
        }
    };
    function ql(a) {
        if (S(81)) {
            var b = Wk();
            (b.siloed = b.siloed || []).push(a)
        }
    }
    var rl = function() {
        var a = Wk().container, b;
        for (b in a)
            if (a.hasOwnProperty(b) && 1 === a[b].state)
                return !0;
        return !1
    }
      , sl = function() {
        var a = {};
        m(Wk().destination, function(b, c) {
            0 === c.state && (a[b] = c)
        });
        return a
    };
    var tl = {
        sampleRate: "0.005000",
        Wj: "",
        Vj: Number("5"),
        bn: Number("")
    }
      , ul = [];
    function vl(a) {
        ul.push(a)
    }
    var wl = !1, xl;
    if (!(xl = Vk)) {
        var yl = Math.random()
          , zl = tl.sampleRate;
        xl = yl < Number(zl)
    }
    var Al = xl
      , Bl = "https://www.googletagmanager.com/a?id=" + rf.ctid
      , Cl = void 0
      , Dl = {}
      , El = void 0
      , Fl = new function() {
        var a = 5;
        0 < tl.Vj && (a = tl.Vj);
        this.h = 0;
        this.B = [];
        this.m = a
    }
      , Gl = 1E3;
    function Hl(a) {
        var b = Cl;
        if (void 0 === b)
            return "";
        for (var c = [Bl], d = 0; d < ul.length; d++) {
            var e = ul[d]({
                eventId: b,
                Gb: !!a,
                Pj: function() {
                    wl = !0
                }
            });
            "&" === e[0] && c.push(e)
        }
        c.push("&z=0");
        return c.join("")
    }
    function Il() {
        El && (z.clearTimeout(El),
        El = void 0);
        if (void 0 !== Cl && Jl) {
            var a;
            (a = Dl[Cl]) || (a = Fl.h < Fl.m ? !1 : 1E3 > Va() - Fl.B[Fl.h % Fl.m]);
            if (a || 0 >= Gl--)
                N(1),
                Dl[Cl] = !0;
            else {
                var b = Fl.h++ % Fl.m;
                Fl.B[b] = Va();
                var c = Hl(!0);
                sc(c);
                if (wl) {
                    var d = c.replace("/a?", "/td?");
                    sc(d)
                }
                Jl = wl = !1
            }
        }
    }
    var Jl = !1;
    function Kl(a) {
        Dl[a] || (a !== Cl && (Il(),
        Cl = a),
        Jl = !0,
        El || (El = z.setTimeout(Il, 500)),
        2022 <= Hl().length && Il())
    }
    var Ll = La();
    function Ml() {
        Ll = La()
    }
    function Nl() {
        return ["&v=3&t=t", "&pid=" + Ll].join("")
    }
    ;var Ol = function(a, b, c, d, e, f, g, h, l, n, p, q) {
        this.eventId = a;
        this.priorityId = b;
        this.h = c;
        this.J = d;
        this.m = e;
        this.C = f;
        this.R = g;
        this.B = h;
        this.eventMetadata = l;
        this.P = n;
        this.W = p;
        this.isGtmEvent = q
    }
      , T = function(a, b, c) {
        if (void 0 !== a.h[b])
            return a.h[b];
        if (void 0 !== a.J[b])
            return a.J[b];
        if (void 0 !== a.m[b])
            return a.m[b];
        Al && Pl(a, a.C[b], a.R[b]) && (N(71),
        N(79));
        return void 0 !== a.C[b] ? a.C[b] : void 0 !== a.B[b] ? a.B[b] : c
    }
      , Ql = function(a) {
        function b(g) {
            for (var h = Object.keys(g), l = 0; l < h.length; ++l)
                c[h[l]] = 1
        }
        var c = {};
        b(a.h);
        b(a.J);
        b(a.m);
        b(a.C);
        if (Al)
            for (var d = Object.keys(a.R), e = 0; e < d.length; e++) {
                var f = d[e];
                if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                    N(71);
                    N(80);
                    break
                }
            }
        return Object.keys(c)
    }
      , Rl = function(a, b, c) {
        function d(l) {
            Uc(l) && m(l, function(n, p) {
                f = !0;
                e[n] = p
            })
        }
        var e = {}
          , f = !1;
        c && 1 !== c || (d(a.B[b]),
        d(a.C[b]),
        d(a.m[b]),
        d(a.J[b]));
        c && 2 !== c || d(a.h[b]);
        if (Al) {
            var g = f
              , h = e;
            e = {};
            f = !1;
            c && 1 !== c || (d(a.B[b]),
            d(a.R[b]),
            d(a.m[b]),
            d(a.J[b]));
            c && 2 !== c || d(a.h[b]);
            if (f !== g || Pl(a, e, h))
                N(71),
                N(81);
            f = g;
            e = h
        }
        return f ? e : void 0
    }
      , Sl = function(a) {
        var b = [O.g.Pc, O.g.Lc, O.g.Mc, O.g.Nc, O.g.Oc, O.g.Qc, O.g.Rc]
          , c = {}
          , d = !1
          , e = function(h) {
            for (var l = 0; l < b.length; l++)
                void 0 !== h[b[l]] && (c[b[l]] = h[b[l]],
                d = !0);
            return d
        };
        if (e(a.h) || e(a.J) || e(a.m))
            return c;
        e(a.C);
        if (Al) {
            var f = c
              , g = d;
            c = {};
            d = !1;
            e(a.R);
            Pl(a, c, f) && (N(71),
            N(82));
            c = f;
            d = g
        }
        if (d)
            return c;
        e(a.B);
        return c
    }
      , Pl = function(a, b, c) {
        if (!Al)
            return !1;
        try {
            if (b === c)
                return !1;
            var d = Sc(b);
            if (d !== Sc(c) || !(Uc(b) && Uc(c) || "array" === d))
                return !0;
            if ("array" === d) {
                if (b.length !== c.length)
                    return !0;
                for (var e = 0; e < b.length; e++)
                    if (Pl(a, b[e], c[e]))
                        return !0
            } else {
                for (var f in c)
                    if (!b.hasOwnProperty(f))
                        return !0;
                for (var g in b)
                    if (!c.hasOwnProperty(g) || Pl(a, b[g], c[g]))
                        return !0
            }
        } catch (h) {
            N(72)
        }
        return !1
    }
      , Tl = function(a, b) {
        this.Xg = a;
        this.xk = b;
        this.C = {};
        this.ie = {};
        this.h = {};
        this.J = {};
        this.m = {};
        this.he = {};
        this.B = {};
        this.yd = function() {}
        ;
        this.rb = function() {}
        ;
        this.R = !1
    }
      , Ul = function(a, b) {
        a.C = b;
        return a
    }
      , Vl = function(a, b) {
        a.ie = b;
        return a
    }
      , Wl = function(a, b) {
        a.h = b;
        return a
    }
      , Xl = function(a, b) {
        a.J = b;
        return a
    }
      , Yl = function(a, b) {
        a.m = b;
        return a
    }
      , Zl = function(a, b) {
        a.he = b;
        return a
    }
      , $l = function(a, b) {
        a.B = b || {};
        return a
    }
      , am = function(a, b) {
        a.yd = b;
        return a
    }
      , bm = function(a, b) {
        a.rb = b;
        return a
    }
      , cm = function(a, b) {
        a.R = b;
        return a
    }
      , dm = function(a) {
        return new Ol(a.Xg,a.xk,a.C,a.ie,a.h,a.J,a.m,a.he,a.B,a.yd,a.rb,a.R)
    };
    var em = [O.g.F, O.g.O]
      , fm = [O.g.F, O.g.O, O.g.Xe, O.g.We]
      , gm = {}
      , hm = (gm[O.g.F] = 1,
    gm[O.g.O] = 2,
    gm)
      , im = {}
      , jm = (im[O.g.mi] = "a",
    im[O.g.oi] = "s",
    im[O.g.ri] = "y",
    im[O.g.ni] = "p",
    im)
      , km = function(a) {
        var b = !1 !== T(a, O.g.ba);
        S(87) && (b = b && wk(O.g.We));
        return b
    }
      , lm = function() {
        var a = {}, b;
        for (b in hm)
            if (hm.hasOwnProperty(b)) {
                var c = hm[b], d, e = kk();
                e.accessedAny = !0;
                d = uk(e, b);
                a[c] = d
            }
        var f = S(57) && em.every(wk)
          , g = S(52);
        return f || g ? ne(a, 1) : ne(a, 0)
    }
      , mm = {}
      , nm = (mm[O.g.F] = 0,
    mm[O.g.O] = 1,
    mm[O.g.Xe] = 2,
    mm[O.g.We] = 3,
    mm);
    function om(a) {
        switch (a) {
        case void 0:
            return 1;
        case !0:
            return 3;
        case !1:
            return 2;
        default:
            return 0
        }
    }
    var pm = function() {
        if (S(54)) {
            for (var a = "1", b = 0; b < fm.length; b++) {
                var c = a, d, e = fm[b], f = hk[e];
                d = void 0 === f ? 0 : nm.hasOwnProperty(f) ? 12 | nm[f] : 8;
                var g = kk();
                g.accessedAny = !0;
                var h = g.entries[e] || {};
                d = d << 2 | om(h.implicit);
                a = c + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[d] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[om(h.declare) << 4 | om(h.default) << 2 | om(h.update)])
            }
            return a
        }
        for (var l = "G1", n = 0; n < em.length; n++)
            switch (xk(em[n])) {
            case 3:
                l += "1";
                break;
            case 2:
                l += "0";
                break;
            case 1:
                l += "-"
            }
        return l
    }
      , qm = function() {
        var a = kk(), b = a.cps, c = [], d;
        for (d in ik)
            ik.hasOwnProperty(d) && ik[d].enabled && (a.usedSetCps ? b.hasOwnProperty(d) && b[d].enabled && c.push(d) : c.push(d));
        for (var e = "", f = 0; f < c.length; f++) {
            var g = jm[c[f]];
            g && (e += g)
        }
        return "" === e ? "-" : e
    };
    var rm = function(a) {
        var b = 1, c, d, e;
        if (a)
            for (b = 0,
            d = a.length - 1; 0 <= d; d--)
                e = a.charCodeAt(d),
                b = (b << 6 & 268435455) + e + (e << 14),
                c = b & 266338304,
                b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var sm = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("=")
              , h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var l = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    };
    var tm = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    }
      , um = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    function vm(a) {
        return "null" !== a.origin
    }
    ;var ym = function(a, b, c, d) {
        return wm(d) ? sm(a, String(b || xm()), c) : []
    }
      , Bm = function(a, b, c, d, e) {
        if (wm(e)) {
            var f = zm(a, d, e);
            if (1 === f.length)
                return f[0].id;
            if (0 !== f.length) {
                f = Am(f, function(g) {
                    return g.Lf
                }, b);
                if (1 === f.length)
                    return f[0].id;
                f = Am(f, function(g) {
                    return g.Ge
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    };
    function Cm(a, b, c, d) {
        var e = xm()
          , f = window;
        vm(f) && (f.document.cookie = a);
        var g = xm();
        return e != g || void 0 != c && 0 <= ym(b, g, !1, d).indexOf(c)
    }
    var Pm = function(a, b, c, d) {
        function e(w, x, y) {
            if (null == y)
                return delete h[x],
                w;
            h[x] = y;
            return w + "; " + x + "=" + y
        }
        function f(w, x) {
            if (null == x)
                return delete h[x],
                w;
            h[x] = !0;
            return w + "; " + x
        }
        if (!wm(c.Fb))
            return 2;
        var g;
        void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)),
        b = Mm(b),
        g = a + "=" + b);
        var h = {};
        g = e(g, "path", c.path);
        var l;
        c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
        g = e(g, "expires", l);
        g = e(g, "max-age", c.Nl);
        g = e(g, "samesite", c.km);
        c.mm && (g = f(g, "secure"));
        var n = c.domain;
        if (n && "auto" === n.toLowerCase()) {
            for (var p = Nm(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
                var u = "none" !== p[t] ? p[t] : void 0
                  , v = e(g, "domain", u);
                v = f(v, c.flags);
                try {
                    d && d(a, h)
                } catch (w) {
                    q = w;
                    continue
                }
                r = !0;
                if (!Om(u, c.path) && Cm(v, a, b, c.Fb))
                    return 0
            }
            if (q && !r)
                throw q;
            return 1
        }
        n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
        g = f(g, c.flags);
        d && d(a, h);
        return Om(n, c.path) ? 1 : Cm(g, a, b, c.Fb) ? 0 : 1
    }
      , Qm = function(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        return Pm(a, b, c)
    };
    function Am(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g]
              , l = b(h);
            l === c ? d.push(h) : void 0 === f || l < f ? (e = [h],
            f = l) : l === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }
    function zm(a, b, c) {
        for (var d = [], e = ym(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split(".")
              , h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var l = g.shift();
                l && (l = l.split("-"),
                d.push({
                    id: g.join("."),
                    Lf: 1 * l[0] || 1,
                    Ge: 1 * l[1] || 1
                }))
            }
        }
        return d
    }
    var Mm = function(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
      , Rm = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/
      , Sm = /(^|\.)doubleclick\.net$/i
      , Om = function(a, b) {
        return Sm.test(window.document.location.hostname) || "/" === b && Rm.test(a)
    }
      , xm = function() {
        return vm(window) ? window.document.cookie : ""
    }
      , Nm = function() {
        var a = []
          , b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c)
                return ["none"]
        }
        for (var d = b.length - 2; 0 <= d; d--)
            a.push(b.slice(d).join("."));
        var e = window.document.location.hostname;
        Sm.test(e) || Rm.test(e) || a.push("none");
        return a
    }
      , wm = function(a) {
        return dk().h() && a && zk() ? yk(a) ? wk(a) : !1 : !0
    };
    var Tm = function(a) {
        var b = Math.round(2147483647 * Math.random());
        return a ? String(b ^ rm(a) & 2147483647) : String(b)
    }
      , Um = function(a) {
        return [Tm(a), Math.round(Va() / 1E3)].join(".")
    }
      , Xm = function(a, b, c, d, e) {
        var f = Vm(b);
        return Bm(a, f, Wm(c), d, e)
    }
      , Ym = function(a, b, c, d) {
        var e = "" + Vm(c)
          , f = Wm(d);
        1 < f && (e += "-" + f);
        return [b, e, a].join(".")
    }
      , Vm = function(a) {
        if (!a)
            return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }
      , Wm = function(a) {
        if (!a || "/" === a)
            return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1
    };
    var Zm = function() {
        Lh.dedupe_gclid || (Lh.dedupe_gclid = "" + Um());
        return Lh.dedupe_gclid
    };
    var $m = function() {
        var a = !1;
        return a
    };
    var an = {
        UA: 1,
        AW: 2,
        DC: 3,
        G: 4,
        GF: 5,
        GT: 12,
        GTM: 14,
        HA: 6,
        MC: 7
    }
      , bn = function(a) {
        var b = rf.ctid.split("-")[0].toUpperCase()
          , c = {};
        c.ctid = rf.ctid;
        c.gm = Kh.ne;
        c.jm = Kh.ah;
        c.Kl = Zk.zf ? 2 : 1;
        Rh ? (c.Yf = an[b],
        c.Yf || (c.Yf = 0)) : c.Yf = Xh ? 13 : 10;
        Vh ? c.Gh = 1 : $m() ? c.Gh = 2 : c.Gh = 3;
        var d;
        var e = c.Yf
          , f = c.Gh;
        void 0 === e ? d = "" : (f || (f = 0),
        d = "" + gg(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e << 2 | f]);
        var g = c.Tm, h = 4 + d + (g ? "" + gg(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[g] : ""), l, n = c.jm;
        l = n && fg.test(n) ? "" + gg(3, 2) + n : "";
        var p, q = c.gm;
        p = q ? "" + gg(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[q] : "";
        var r;
        var t = c.ctid;
        if (t && a) {
            var u = t.split("-")
              , v = u[0].toUpperCase();
            if ("GTM" !== v && "OPT" !== v)
                r = "";
            else {
                var w = u[1];
                r = "" + gg(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[1 + w.length] + (c.Kl || 0) + w
            }
        } else
            r = "";
        return h + l + p + r
    };
    function cn(a, b) {
        if ("" === a)
            return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    }
    ;var dn = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    function en() {
        return Ib ? !!Pb && !!Pb.platform : !1
    }
    function fn() {
        return Sb("iPhone") && !Sb("iPod") && !Sb("iPad")
    }
    function gn() {
        fn() || Sb("iPad") || Sb("iPod")
    }
    ;Ub();
    Tb() || Sb("Trident") || Sb("MSIE");
    Sb("Edge");
    !Sb("Gecko") || -1 != Ob().toLowerCase().indexOf("webkit") && !Sb("Edge") || Sb("Trident") || Sb("MSIE") || Sb("Edge");
    -1 != Ob().toLowerCase().indexOf("webkit") && !Sb("Edge") && Sb("Mobile");
    en() || Sb("Macintosh");
    en() || Sb("Windows");
    (en() ? "Linux" === Pb.platform : Sb("Linux")) || en() || Sb("CrOS");
    var hn = sa.navigator || null;
    hn && (hn.appVersion || "").indexOf("X11");
    en() || Sb("Android");
    fn();
    Sb("iPad");
    Sb("iPod");
    gn();
    Ob().toLowerCase().indexOf("kaios");
    var jn = function(a, b, c, d) {
        for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
            var g = a.charCodeAt(e - 1);
            if (38 == g || 63 == g) {
                var h = a.charCodeAt(e + f);
                if (!h || 61 == h || 38 == h || 35 == h)
                    return e
            }
            e += f + 1
        }
        return -1
    }
      , kn = /#|$/
      , ln = function(a, b) {
        var c = a.search(kn)
          , d = jn(a, 0, b, c);
        if (0 > d)
            return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c)
            e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }
      , mn = /[?&]($|#)/
      , nn = function(a, b, c) {
        for (var d, e = a.search(kn), f = 0, g, h = []; 0 <= (g = jn(a, f, b, e)); )
            h.push(a.substring(f, g)),
            f = Math.min(a.indexOf("&", g) + 1 || e, e);
        h.push(a.slice(f));
        d = h.join("").replace(mn, "$1");
        var l, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
        var p = b + n;
        if (p) {
            var q, r = d.indexOf("#");
            0 > r && (r = d.length);
            var t = d.indexOf("?"), u;
            0 > t || t > r ? (t = r,
            u = "") : u = d.substring(t + 1, r);
            q = [d.slice(0, t), u, d.slice(r)];
            var v = q[1];
            q[1] = p ? v ? v + "&" + p : p : v;
            l = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
        } else
            l = d;
        return l
    };
    var on = function(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href)
                a: {
                    try {
                        bk(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
            return b
        } catch (c) {
            return !1
        }
    }
      , pn = function(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    function qn(a) {
        if (!a || !G.head)
            return null;
        var b = rn("META");
        G.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var sn = function() {
        if (z.top == z)
            return 0;
        var a = z.location.ancestorOrigins;
        return a ? a[a.length - 1] == z.location.origin ? 1 : 2 : on(z.top) ? 1 : 2
    }
      , rn = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    function tn(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = rn("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests
                      , h = Ab(g, e);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            dn(e, "load", f);
            dn(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var vn = function(a) {
        var b;
        b = void 0 === b ? !1 : b;
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
        pn(a, function(d, e) {
            if (d || 0 === d)
                c += "&" + e + "=" + encodeURIComponent("" + d)
        });
        un(c, b)
    }
      , un = function(a, b) {
        var c = window, d;
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? !1 : d;
        if (c.fetch) {
            var e = {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            };
            d && (e.mode = "cors",
            "setAttributionReporting"in XMLHttpRequest.prototype ? e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false"
            } : e.headers = {
                "Attribution-Reporting-Eligible": "event-source"
            });
            c.fetch(a, e)
        } else
            tn(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
    };
    var wn = function() {};
    var xn = function(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
      , yn = function(a, b) {
        b = void 0 === b ? {} : b;
        this.m = a;
        this.h = null;
        this.J = {};
        this.rb = 0;
        var c;
        this.R = null != (c = b.zm) ? c : 500;
        var d;
        this.C = null != (d = b.Um) ? d : !1;
        this.B = null
    };
    ra(yn, wn);
    yn.prototype.addEventListener = function(a) {
        var b = this
          , c = {
            internalBlockOnErrors: this.C
        }
          , d = um(function() {
            return a(c)
        })
          , e = 0;
        -1 !== this.R && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.R));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g,
            c.internalErrorState = xn(c),
            c.internalBlockOnErrors = b.C,
            h && 0 === c.internalErrorState || (c.tcString = "tcunavailable",
            h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable",
            c.internalErrorState = 3);
            a(c)
        };
        try {
            zn(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable",
            c.internalErrorState = 3,
            e && (clearTimeout(e),
            e = 0),
            d()
        }
    }
    ;
    yn.prototype.removeEventListener = function(a) {
        a && a.listenerId && zn(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var Bn = function(a, b, c) {
        var d;
        d = void 0 === d ? "755" : d;
        var e;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var f = a.publisher.restrictions[b];
                if (void 0 !== f) {
                    e = f[void 0 === d ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        var g = e;
        if (0 === g)
            return !1;
        var h = c;
        2 === c ? (h = 0,
        2 === g && (h = 1)) : 3 === c && (h = 1,
        1 === g && (h = 0));
        var l;
        if (0 === h)
            if (a.purpose && a.vendor) {
                var n = An(a.vendor.consents, void 0 === d ? "755" : d);
                l = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && An(a.purpose.consents, b)
            } else
                l = !0;
        else
            l = 1 === h ? a.purpose && a.vendor ? An(a.purpose.legitimateInterests, b) && An(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
        return l
    }
      , An = function(a, b) {
        return !(!a || !a[b])
    }
      , zn = function(a, b, c, d) {
        c || (c = function() {}
        );
        if ("function" === typeof a.m.__tcfapi) {
            var e = a.m.__tcfapi;
            e(b, 2, c, d)
        } else if (Cn(a)) {
            Dn(a);
            var f = ++a.rb;
            a.J[f] = c;
            if (a.h) {
                var g = {};
                a.h.postMessage((g.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: f,
                    parameter: d
                },
                g), "*")
            }
        } else
            c({}, !1)
    }
      , Cn = function(a) {
        if (a.h)
            return a.h;
        var b;
        a: {
            for (var c = a.m, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames.__tcfapiLocator)
                } catch (h) {
                    e = !1
                }
                if (e) {
                    b = c;
                    break a
                }
                var f;
                b: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break b
                        }
                    } catch (h) {}
                    f = null
                }
                if (!(c = f))
                    break
            }
            b = null
        }
        a.h = b;
        return a.h
    }
      , Dn = function(a) {
        a.B || (a.B = function(b) {
            try {
                var c;
                c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.J[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        dn(a.m, "message", a.B))
    }
      , En = function(a) {
        if (!1 === a.gdprApplies)
            return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = xn(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (vn({
            e: String(a.internalErrorState)
        }),
        !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    };
    var Fn = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    }
      , Gn = cn('', 500);
    function Hn() {
        var a = Lh.tcf || {};
        return Lh.tcf = a
    }
    var Nn = function() {
        var a = Hn()
          , b = new yn(z,{
            zm: -1
        });
        In(b) && Jn() && N(124);
        if (!Jn() && !a.active && In(b)) {
            a.active = !0;
            a.Vf = {};
            Kn();
            a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(c) {
                    if (0 !== c.internalErrorState)
                        Ln(a),
                        Mn(a);
                    else {
                        var d;
                        a.gdprApplies = c.gdprApplies;
                        if (!1 === c.gdprApplies) {
                            var e = {}, f;
                            for (f in Fn)
                                Fn.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
                            var g = {}, h;
                            for (h in Fn)
                                if (Fn.hasOwnProperty(h))
                                    if ("1" === h) {
                                        var l, n = c, p = !0;
                                        p = void 0 === p ? !1 : p;
                                        l = En(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Bn(n, "1", 0) : !1;
                                        g["1"] = l
                                    } else
                                        g[h] = Bn(c, h, Fn[h]);
                            d = g
                        }
                        d && (a.tcString = c.tcString || "tcempty",
                        a.Vf = d,
                        Mn(a))
                    }
                })
            } catch (c) {
                Ln(a),
                Mn(a)
            }
        }
    };
    function Ln(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }
    function Kn() {
        var a = {}
          , b = (a.ad_storage = "denied",
        a.wait_for_update = Gn,
        a);
        Lk(b)
    }
    function In(a) {
        return "function" === typeof z.__tcfapi || "function" === typeof a.m.__tcfapi || null != Cn(a) ? !0 : !1
    }
    var Jn = function() {
        return !0 !== z.gtag_enable_tcf_support
    };
    function Mn(a) {
        var b = {}
          , c = (b.ad_storage = a.Vf["1"] ? "granted" : "denied",
        b);
        Mk(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: On()
        })
    }
    var On = function() {
        var a = Hn();
        return a.active ? a.tcString || "" : ""
    }
      , Pn = function() {
        var a = Hn();
        return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
    }
      , Qn = function(a) {
        if (!Fn.hasOwnProperty(String(a)))
            return !0;
        var b = Hn();
        return b.active && b.Vf ? !!b.Vf[String(a)] : !0
    };
    var Rn = void 0;
    function Sn(a) {
        var b = "";
        return b
    }
    ;var Tn = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023),
            b[c++] = e >> 18 | 240,
            b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224,
            b[c++] = e >> 6 & 63 | 128),
            b[c++] = e & 63 | 128)
        }
        return b
    };
    Vb();
    fn() || Sb("iPod");
    Sb("iPad");
    !Sb("Android") || Wb() || Vb() || Ub() || Sb("Silk");
    Wb();
    !Sb("Safari") || Wb() || (Tb() ? 0 : Sb("Coast")) || Ub() || (Tb() ? 0 : Sb("Edge")) || (Tb() ? Rb("Microsoft Edge") : Sb("Edg/")) || (Tb() ? Rb("Opera") : Sb("OPR")) || Vb() || Sb("Silk") || Sb("Android") || gn();
    var Un = {}
      , Vn = null
      , Wn = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255,
            e >>= 8);
            b[c++] = e
        }
        var f = 4;
        void 0 === f && (f = 0);
        if (!Vn) {
            Vn = {};
            for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), h = ["+/=", "+/", "-_=", "-_.", "-_"], l = 0; 5 > l; l++) {
                var n = g.concat(h[l].split(""));
                Un[l] = n;
                for (var p = 0; p < n.length; p++) {
                    var q = n[p];
                    void 0 === Vn[q] && (Vn[q] = p)
                }
            }
        }
        for (var r = Un[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
            var x = b[v]
              , y = b[v + 1]
              , A = b[v + 2]
              , B = r[x >> 2]
              , D = r[(x & 3) << 4 | y >> 4]
              , F = r[(y & 15) << 2 | A >> 6]
              , J = r[A & 63];
            t[w++] = "" + B + D + F + J
        }
        var K = 0
          , P = u;
        switch (b.length - v) {
        case 2:
            K = b[v + 1],
            P = r[(K & 15) << 2] || u;
        case 1:
            var Q = b[v];
            t[w] = "" + r[Q >> 2] + r[(Q & 3) << 4 | K >> 4] + P + u
        }
        return t.join("")
    };
    var Xn = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function Yn(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }
    function Zn() {
        var a = z.google_tag_data, b;
        if (null != a && a.uach) {
            var c = a.uach
              , d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else
            b = null;
        return b
    }
    function $n() {
        var a, b;
        return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }
    function ao(a) {
        var b, c;
        return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }
    function bo() {
        var a = z;
        if (!ao(a))
            return null;
        var b = Yn(a);
        if (b.uach_promise)
            return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(Xn).then(function(d) {
            null != b.uach || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    }
    ;var co, eo = function() {
        if (ao(z) && (co = Va(),
        !$n())) {
            var a = bo();
            a && (a.then(function() {
                N(95);
            }),
            a.catch(function() {
                N(96)
            }))
        }
    }, go = function(a) {
        var b = fo.Dm
          , c = function(g, h) {
            try {
                a(g, h)
            } catch (l) {}
        }
          , d = Zn();
        if (d)
            c(d);
        else {
            var e = $n();
            if (e) {
                b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                var f = z.setTimeout(function() {
                    c.De || (c.De = !0,
                    N(106),
                    c(null, Error("Timeout")))
                }, b);
                e.then(function(g) {
                    c.De || (c.De = !0,
                    N(104),
                    z.clearTimeout(f),
                    c(g))
                }).catch(function(g) {
                    c.De || (c.De = !0,
                    N(105),
                    z.clearTimeout(f),
                    c(null, g))
                })
            } else
                c(null)
        }
    }, ho = function(a, b) {
        a && (b.m[O.g.Xd] = a.architecture,
        b.m[O.g.Yd] = a.bitness,
        a.fullVersionList && (b.m[O.g.Zd] = a.fullVersionList.map(function(c) {
            return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
        }).join("|")),
        b.m[O.g.ae] = a.mobile ? "1" : "0",
        b.m[O.g.be] = a.model,
        b.m[O.g.ce] = a.platform,
        b.m[O.g.de] = a.platformVersion,
        b.m[O.g.ee] = a.wow64 ? "1" : "0")
    };
    function io(a, b, c, d) {
        var e, f = Number(null != a.Db ? a.Db : void 0);
        0 !== f && (e = new Date((b || Va()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Fb: d
        }
    }
    ;var jo;
    var no = function() {
        var a = ko
          , b = lo
          , c = mo()
          , d = function(g) {
            a(g.target || g.srcElement || {})
        }
          , e = function(g) {
            b(g.target || g.srcElement || {})
        };
        if (!c.init) {
            tc(G, "mousedown", d);
            tc(G, "keyup", d);
            tc(G, "submit", e);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                b(this);
                f.call(this)
            }
            ;
            c.init = !0
        }
    }
      , oo = function(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: 2 === c,
            placement: c,
            forms: d,
            sameHost: e
        };
        mo().decorators.push(f)
    }
      , po = function(a, b, c) {
        for (var d = mo().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f], h;
            if (h = !c || g.forms)
                a: {
                    var l = g.domains
                      , n = a
                      , p = !!g.sameHost;
                    if (l && (p || n !== G.location.hostname))
                        for (var q = 0; q < l.length; q++)
                            if (l[q]instanceof RegExp) {
                                if (l[q].test(n)) {
                                    h = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(l[q]) || p && 0 <= l[q].indexOf(n)) {
                                h = !0;
                                break a
                            }
                    h = !1
                }
            if (h) {
                var r = g.placement;
                void 0 == r && (r = g.fragment ? 2 : 1);
                r === b && Ya(e, g.callback())
            }
        }
        return e
    };
    function mo() {
        var a = kc("google_tag_data", {})
          , b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        },
        a.gl = b);
        return b
    }
    ;var qo = /(.*?)\*(.*?)\*(.*)/
      , ro = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/
      , so = /^(?:www\.|m\.|amp\.)+/
      , to = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function uo(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var wo = function(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c),
                b.push(ub(String(d))))
            }
        var e = b.join("*");
        return ["1", vo(e), e].join("*")
    };
    function vo(a, b) {
        var c = [ic.userAgent, (new Date).getTimezoneOffset(), ic.userLanguage || ic.language, Math.floor(Va() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"), d;
        if (!(d = jo)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, h = 0; 8 > h; h++)
                    g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        jo = d;
        for (var l = 4294967295, n = 0; n < c.length; n++)
            l = l >>> 8 ^ jo[(l ^ c.charCodeAt(n)) & 255];
        return ((l ^ -1) >>> 0).toString(36)
    }
    function xo() {
        return function(a) {
            var b = bj(z.location.href)
              , c = b.search.replace("?", "")
              , d = Xi(c, "_gl", !1, !0) || "";
            a.query = yo(d) || {};
            var e = $i(b, "fragment").match(uo("_gl"));
            a.fragment = yo(e && e[3] || "") || {}
        }
    }
    function zo(a, b) {
        var c = uo(a).exec(b)
          , d = b;
        if (c) {
            var e = c[2]
              , f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var Ao = function(a, b) {
        b || (b = "_gl");
        var c = to.exec(a);
        if (!c)
            return "";
        var d = c[1]
          , e = zo(b, (c[2] || "").slice(1))
          , f = zo(b, (c[3] || "").slice(1));
        e.length && (e = "?" + e);
        f.length && (f = "#" + f);
        return "" + d + e + f
    }
      , Bo = function(a) {
        var b = xo()
          , c = mo();
        c.data || (c.data = {
            query: {},
            fragment: {}
        },
        b(c.data));
        var d = {}
          , e = c.data;
        e && (Ya(d, e.query),
        a && Ya(d, e.fragment));
        return d
    }
      , yo = function(a) {
        try {
            var b = Co(a, 3);
            if (void 0 !== b) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e]
                      , g = vb(d[e + 1]);
                    c[f] = g
                }
                xb("TAGGING", 6);
                return c
            }
        } catch (h) {
            xb("TAGGING", 8)
        }
    };
    function Co(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = qo.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var h = g[3], l;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === vo(h, p)) {
                            l = !0;
                            break a
                        }
                    l = !1
                }
                if (l)
                    return h;
                xb("TAGGING", 7)
            }
        }
    }
    function Do(a, b, c, d) {
        function e(p) {
            p = zo(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = to.exec(c);
        if (!f)
            return "";
        var g = f[1]
          , h = f[2] || ""
          , l = f[3] || ""
          , n = a + "=" + b;
        d ? l = "#" + e(l.substring(1)) : h = "?" + e(h.substring(1));
        return "" + g + h + l
    }
    function Eo(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase()
          , d = po(b, 1, c)
          , e = po(b, 2, c)
          , f = po(b, 3, c);
        if (Za(d)) {
            var g = wo(d);
            c ? Fo("_gl", g, a) : Go("_gl", g, a, !1)
        }
        if (!c && Za(e)) {
            var h = wo(e);
            Go("_gl", h, a, !0)
        }
        for (var l in f)
            if (f.hasOwnProperty(l))
                a: {
                    var n = l
                      , p = f[l]
                      , q = a;
                    if (q.tagName) {
                        if ("a" === q.tagName.toLowerCase()) {
                            Go(n, p, q);
                            break a
                        }
                        if ("form" === q.tagName.toLowerCase()) {
                            Fo(n, p, q);
                            break a
                        }
                    }
                    "string" == typeof q && Do(n, p, q)
                }
    }
    function Go(a, b, c, d) {
        if (c.href) {
            var e = Do(a, b, c.href, void 0 === d ? !1 : d);
            Hb.test(e) && (c.href = e)
        }
    }
    function Fo(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var h = e[g];
                    if (h.name === a) {
                        h.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var l = G.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l)
                }
            } else if ("post" === d) {
                var n = Do(a, b, c.action);
                Hb.test(n) && (c.action = n)
            }
        }
    }
    function ko(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d; ) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Eo(e, e.hostname)
            }
        } catch (g) {}
    }
    function lo(a) {
        try {
            if (a.action) {
                var b = $i(bj(a.action), "host");
                Eo(a, b)
            }
        } catch (c) {}
    }
    var Ho = function(a, b, c, d) {
        no();
        oo(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    }
      , Io = function(a, b) {
        no();
        oo(a, [Zi(z.location, "host", !0)], b, !0, !0)
    }
      , Jo = function() {
        var a = G.location.hostname
          , b = ro.exec(G.referrer);
        if (!b)
            return !1;
        var c = b[2]
          , d = b[1]
          , e = "";
        if (c) {
            var f = c.split("/")
              , g = f[1];
            e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (0 === d.indexOf("xn--"))
                return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var h = a.replace(so, ""), l = e.replace(so, ""), n;
        if (!(n = h === l)) {
            var p = "." + l;
            n = h.substring(h.length - p.length, h.length) === p
        }
        return n
    }
      , Ko = function(a, b) {
        return !1 === a ? !1 : a || b || Jo()
    };
    var Lo = ["1"]
      , Mo = {}
      , No = {}
      , Po = function(a) {
        return Mo[Oo(a)]
    }
      , To = function(a, b) {
        b = void 0 === b ? !0 : b;
        var c = Oo(a.prefix);
        if (!Mo[c])
            if (Qo(c, a.path, a.domain)) {
                var d = No[Oo(a.prefix)];
                Ro(a, d ? d.id : void 0, d ? d.Dh : void 0)
            } else {
                var e = dj("auiddc");
                if (e)
                    xb("TAGGING", 17),
                    Mo[c] = e;
                else if (b) {
                    var f = Oo(a.prefix)
                      , g = Um();
                    if (0 === So(f, g, a)) {
                        var h = kc("google_tag_data", {});
                        h._gcl_au || (h._gcl_au = g)
                    }
                    Qo(c, a.path, a.domain)
                }
            }
    };
    function Ro(a, b, c) {
        var d = Oo(a.prefix)
          , e = Mo[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var h = e;
                    b && (h = e + "." + b + "." + (c ? c : Math.floor(Va() / 1E3)));
                    So(d, h, a, 1E3 * g)
                }
            }
        }
    }
    function So(a, b, c, d) {
        var e = Ym(b, "1", c.domain, c.path)
          , f = io(c, d);
        f.Fb = "ad_storage";
        return Qm(a, e, f)
    }
    function Qo(a, b, c) {
        var d = Xm(a, b, c, Lo, "ad_storage");
        if (!d)
            return !1;
        Uo(a, d);
        return !0
    }
    function Uo(a, b) {
        var c = b.split(".");
        5 === c.length ? (Mo[a] = c.slice(0, 2).join("."),
        No[a] = {
            id: c.slice(2, 4).join("."),
            Dh: Number(c[4]) || 0
        }) : 3 === c.length ? No[a] = {
            id: c.slice(0, 2).join("."),
            Dh: Number(c[2]) || 0
        } : Mo[a] = b
    }
    function Oo(a) {
        return (a || "_gcl") + "_au"
    }
    function Vo(a) {
        zk() ? Dk(function() {
            wk("ad_storage") ? a() : Ek(a, "ad_storage")
        }, ["ad_storage"]) : a()
    }
    function Wo(a) {
        var b = Bo(!0)
          , c = Oo(a.prefix);
        Vo(function() {
            var d = b[c];
            if (d) {
                Uo(c, d);
                var e = 1E3 * Number(Mo[c].split(".")[1]);
                if (e) {
                    xb("TAGGING", 16);
                    var f = io(a, e);
                    f.Fb = "ad_storage";
                    var g = Ym(d, "1", a.domain, a.path);
                    Qm(c, g, f)
                }
            }
        })
    }
    function Xo(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {}
              , h = Xm(a, e.path, e.domain, Lo, "ad_storage");
            h && (g[a] = h);
            return g
        };
        Vo(function() {
            Ho(f, b, c, d)
        })
    }
    ;var Yo = function(a) {
        for (var b = [], c = G.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Yh: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    };
    function Zo(a, b) {
        var c = Yo(a)
          , d = {};
        if (!c || !c.length)
            return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Yh] || (d[c[e].Yh] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    fa: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Yh].push(g)
            }
        }
        return d
    }
    ;var $o = /^\w+$/
      , ap = /^[\w-]+$/
      , bp = {
        aw: "_aw",
        dc: "_dc",
        gf: "_gf",
        ha: "_ha",
        gp: "_gp",
        gb: "_gb"
    }
      , cp = function() {
        return dk().h() && zk() ? wk("ad_storage") : !0
    }
      , dp = function(a, b) {
        yk("ad_storage") ? cp() ? a() : Ek(a, "ad_storage") : b ? xb("TAGGING", 3) : Dk(function() {
            dp(a, !0)
        }, ["ad_storage"])
    }
      , fp = function(a) {
        return ep(a).map(function(b) {
            return b.fa
        })
    }
      , ep = function(a) {
        var b = [];
        if (!vm(z) || !G.cookie)
            return b;
        var c = ym(a, G.cookie, void 0, "ad_storage");
        if (!c || 0 == c.length)
            return b;
        for (var d = {}, e = 0; e < c.length; d = {
            Qe: d.Qe
        },
        e++) {
            var f = gp(c[e]);
            if (null != f) {
                var g = f
                  , h = g.version;
                d.Qe = g.fa;
                var l = g.timestamp
                  , n = g.labels
                  , p = Ka(b, function(q) {
                    return function(r) {
                        return r.fa === q.Qe
                    }
                }(d));
                p ? (p.timestamp = Math.max(p.timestamp, l),
                p.labels = hp(p.labels, n || [])) : b.push({
                    version: h,
                    fa: d.Qe,
                    timestamp: l,
                    labels: n
                })
            }
        }
        b.sort(function(q, r) {
            return r.timestamp - q.timestamp
        });
        return ip(b)
    };
    function hp(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++)
            c[a[e]] = !0,
            d.push(a[e]);
        for (var f = 0; f < b.length; f++)
            c[b[f]] || d.push(b[f]);
        return d
    }
    function jp(a) {
        return a && "string" == typeof a && a.match($o) ? a : "_gcl"
    }
    var lp = function() {
        var a = bj(z.location.href)
          , b = $i(a, "query", !1, void 0, "gclid")
          , c = $i(a, "query", !1, void 0, "gclsrc")
          , d = $i(a, "query", !1, void 0, "wbraid")
          , e = $i(a, "query", !1, void 0, "dclid");
        if (!b || !c || !d) {
            var f = a.hash.replace("#", "");
            b = b || Xi(f, "gclid", !1);
            c = c || Xi(f, "gclsrc", !1);
            d = d || Xi(f, "wbraid", !1)
        }
        return kp(b, c, e, d)
    }
      , kp = function(a, b, c, d) {
        var e = {}
          , f = function(g, h) {
            e[h] || (e[h] = []);
            e[h].push(g)
        };
        e.gclid = a;
        e.gclsrc = b;
        e.dclid = c;
        void 0 !== d && ap.test(d) && (e.gbraid = d,
        f(d, "gb"));
        if (void 0 !== a && a.match(ap))
            switch (b) {
            case void 0:
                f(a, "aw");
                break;
            case "aw.ds":
                f(a, "aw");
                f(a, "dc");
                break;
            case "ds":
                f(a, "dc");
                break;
            case "3p.ds":
                f(a, "dc");
                break;
            case "gf":
                f(a, "gf");
                break;
            case "ha":
                f(a, "ha")
            }
        c && f(c, "dc");
        return e
    }
      , np = function(a) {
        var b = lp();
        dp(function() {
            mp(b, !1, a)
        })
    };
    function mp(a, b, c, d, e) {
        function f(w, x) {
            var y = op(w, g);
            y && (Qm(y, x, h),
            l = !0)
        }
        c = c || {};
        e = e || [];
        var g = jp(c.prefix);
        d = d || Va();
        var h = io(c, d, !0);
        h.Fb = "ad_storage";
        var l = !1
          , n = Math.round(d / 1E3)
          , p = function(w) {
            var x = ["GCL", n, w];
            0 < e.length && x.push(e.join("."));
            return x.join(".")
        };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!l && a.gb) {
            var q = a.gb[0]
              , r = op("gb", g)
              , t = !1;
            if (!b)
                for (var u = ep(r), v = 0; v < u.length; v++)
                    u[v].fa === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
            t || f("gb", p(q))
        }
    }
    var qp = function(a, b) {
        var c = Bo(!0);
        dp(function() {
            for (var d = jp(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (void 0 !== bp[f]) {
                    var g = op(f, d)
                      , h = c[g];
                    if (h) {
                        var l = Math.min(pp(h), Va()), n;
                        b: {
                            var p = l;
                            if (vm(z))
                                for (var q = ym(g, G.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                    if (pp(q[r]) > p) {
                                        n = !0;
                                        break b
                                    }
                            n = !1
                        }
                        if (!n) {
                            var t = io(b, l, !0);
                            t.Fb = "ad_storage";
                            Qm(g, h, t)
                        }
                    }
                }
            }
            mp(kp(c.gclid, c.gclsrc), !1, b)
        })
    }
      , op = function(a, b) {
        var c = bp[a];
        if (void 0 !== c)
            return b + c
    }
      , pp = function(a) {
        return 0 !== rp(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
    };
    function gp(a) {
        var b = rp(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            fa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }
    function rp(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !ap.test(a[2]) ? [] : a
    }
    var sp = function(a, b, c, d, e) {
        if (Ja(b) && vm(z)) {
            var f = jp(e)
              , g = function() {
                for (var h = {}, l = 0; l < a.length; ++l) {
                    var n = op(a[l], f);
                    if (n) {
                        var p = ym(n, G.cookie, void 0, "ad_storage");
                        p.length && (h[n] = p.sort()[p.length - 1])
                    }
                }
                return h
            };
            dp(function() {
                Ho(g, b, c, d)
            })
        }
    }
      , ip = function(a) {
        return a.filter(function(b) {
            return ap.test(b.fa)
        })
    }
      , tp = function(a, b) {
        if (vm(z)) {
            for (var c = jp(b.prefix), d = {}, e = 0; e < a.length; e++)
                bp[a[e]] && (d[a[e]] = bp[a[e]]);
            dp(function() {
                m(d, function(f, g) {
                    var h = ym(c + g, G.cookie, void 0, "ad_storage");
                    h.sort(function(t, u) {
                        return pp(u) - pp(t)
                    });
                    if (h.length) {
                        var l = h[0], n = pp(l), p = 0 !== rp(l.split(".")).length ? l.split(".").slice(3) : [], q = {}, r;
                        r = 0 !== rp(l.split(".")).length ? l.split(".")[2] : void 0;
                        q[f] = [r];
                        mp(q, !0, b, n, p)
                    }
                })
            })
        }
    };
    function up(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]])
                return !0;
        return !1
    }
    var vp = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (zk()) {
            var c = lp();
            if (up(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                Io(function() {
                    return d
                }, 3);
                Io(function() {
                    var e = {};
                    return e._up = "1",
                    e
                }, 1)
            }
        }
    }
      , wp = function(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!cp())
            return e;
        var f = ep(a);
        if (!f.length)
            return e;
        for (var g = 0; g < f.length; g++)
            -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
        if (d)
            return e;
        if (1 !== e[0]) {
            var h = f[0]
              , l = f[0].timestamp
              , n = [h.version, Math.round(l / 1E3), h.fa].concat(h.labels || [], [b]).join(".")
              , p = io(c, l, !0);
            p.Fb = "ad_storage";
            Qm(a, n, p)
        }
        return e
    };
    function xp(a, b) {
        var c = jp(b)
          , d = op(a, c);
        if (!d)
            return 0;
        for (var e = ep(d), f = 0, g = 0; g < e.length; g++)
            f = Math.max(f, e[g].timestamp);
        return f
    }
    function yp(a) {
        var b = 0, c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++)
                b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var zp = function(a) {
        var b = Math.max(xp("aw", a), yp(cp() ? Zo() : {}));
        return Math.max(xp("gb", a), yp(cp() ? Zo("_gac_gb", !0) : {})) > b
    };
    var Ep = /[A-Z]+/
      , Fp = /\s/
      , Gp = function(a, b) {
        if (k(a)) {
            a = Ta(a);
            var c = a.indexOf("-");
            if (!(0 > c)) {
                var d = a.substring(0, c);
                if (Ep.test(d)) {
                    var e = a.substring(c + 1), f;
                    if (b && S(64)) {
                        var g = function(n) {
                            var p = n.indexOf("/");
                            return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)]
                        };
                        f = g(e);
                        if ("DC" === d && 2 === f.length) {
                            var h = g(f[1]);
                            2 === h.length && (f[1] = h[0],
                            f.push(h[1]))
                        }
                    } else {
                        f = e.split("/");
                        for (var l = 0; l < f.length; l++)
                            if (!f[l] || Fp.test(f[l]) && ("AW" !== d || 1 !== l))
                                return
                    }
                    return {
                        id: a,
                        prefix: d,
                        aa: d + "-" + f[0],
                        I: f
                    }
                }
            }
        }
    }
      , Ip = function(a, b) {
        for (var c = {}, d = 0; d < a.length; ++d) {
            var e = Gp(a[d], b);
            e && (c[e.id] = e)
        }
        Hp(c);
        var f = [];
        m(c, function(g, h) {
            f.push(h)
        });
        return f
    };
    function Hp(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.I[1] && b.push(d.aa)
            }
        for (var e = 0; e < b.length; ++e)
            delete a[b[e]]
    }
    ;var Jp = function(a, b, c, d) {
        var e = qc(), f;
        if (1 === e)
            a: {
                var g = Zh;
                g = g.toLowerCase();
                for (var h = "https://" + g, l = "http://" + g, n = 1, p = G.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                    var r = p[q].src;
                    if (r) {
                        r = r.toLowerCase();
                        if (0 === r.indexOf(l)) {
                            f = 3;
                            break a
                        }
                        1 === n && 0 === r.indexOf(h) && (n = 2)
                    }
                }
                f = n
            }
        else
            f = e;
        return (2 === f || d || "http:" != z.location.protocol ? a : b) + c
    };
    var Vp = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.h = c;
        this.m = {};
        this.metadata = I(c.eventMetadata || {});
        this.isAborted = !1
    };
    Vp.prototype.copyToHitData = function(a, b) {
        var c = T(this.h, a);
        void 0 !== c ? this.m[a] = c : void 0 !== b && (this.m[a] = b)
    }
    ;
    var Wp = function(a, b, c) {
        var d = Ki(a.target.aa);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };
    function Xp(a) {
        return {
            getDestinationId: function() {
                return a.target.aa
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.m[b]
            },
            setHitData: function(b, c) {
                a.m[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.m[b] && (a.m[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return T(a.h, b)
            },
            Pf: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.m)
            }
        }
    }
    ;var Zp = function(a) {
        var b = Yp[a.target.aa];
        if (!a.isAborted && b)
            for (var c = Xp(a), d = 0; d < b.length; ++d) {
                try {
                    b[d](c)
                } catch (e) {
                    a.isAborted = !0
                }
                if (a.isAborted)
                    break
            }
    }
      , $p = function(a, b) {
        var c = Yp[a];
        c || (c = Yp[a] = []);
        c.push(b)
    }
      , Yp = {};
    function uq(a) {
        var b = T(a.h, O.g.yb)
          , c = T(a.h, O.g.Ob);
        b && !c ? (a.eventName !== O.g.la && a.eventName !== O.g.zd && N(131),
        a.isAborted = !0) : !b && c && (N(132),
        a.isAborted = !0)
    }
    ;function wq() {
        return "attribution-reporting"
    }
    function xq(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    }
    ;var yq = !1;
    function zq() {
        if (xq("join-ad-interest-group") && Ga(ic.joinAdInterestGroup))
            return !0;
        yq || (qn('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'),
        yq = !0);
        return xq("join-ad-interest-group") && Ga(ic.joinAdInterestGroup)
    }
    function Aq(a, b) {
        var c = void 0;
        try {
            c = G.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Va() - d) {
                xb("TAGGING", 9);
                return
            }
        } else
            try {
                if (50 <= G.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                    xb("TAGGING", 10);
                    return
                }
            } catch (e) {}
        rc(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Va()
        }, c)
    }
    function Bq() {
        return "https://td.doubleclick.net"
    }
    ;var Cq = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$")
      , Dq = /^~?[\w-]+(?:\.~?[\w-]+)*$/
      , Eq = /^\d+\.fls\.doubleclick\.net$/
      , Fq = /;gac=([^;?]+)/
      , Gq = /;gacgb=([^;?]+)/
      , Hq = /;gclaw=([^;?]+)/
      , Iq = /;gclgb=([^;?]+)/;
    function Jq(a, b) {
        if (Eq.test(G.location.host)) {
            var c = G.location.href.match(b);
            return c && 2 == c.length && c[1].match(Cq) ? decodeURIComponent(c[1]) : ""
        }
        var d = [], e;
        for (e in a) {
            for (var f = [], g = a[e], h = 0; h < g.length; h++)
                f.push(g[h].fa);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var Kq = function(a, b, c) {
        var d = cp() ? Zo("_gac_gb", !0) : {}, e = [], f = !1, g;
        for (g in d) {
            var h = wp("_gac_gb_" + g, a, b, c);
            f = f || 0 !== h.length && h.some(function(l) {
                return 1 === l
            });
            e.push(g + ":" + h.join(","))
        }
        return {
            bl: f ? e.join(";") : "",
            al: Jq(d, Gq)
        }
    };
    function Lq(a, b, c) {
        if (Eq.test(G.location.host)) {
            var d = G.location.href.match(c);
            if (d && 2 == d.length && d[1].match(Dq))
                return [{
                    fa: d[1]
                }]
        } else
            return ep((a || "_gcl") + b);
        return []
    }
    var Mq = function(a) {
        return Lq(a, "_aw", Hq).map(function(b) {
            return b.fa
        }).join(".")
    }
      , Nq = function(a) {
        return Lq(a, "_gb", Iq).map(function(b) {
            return b.fa
        }).join(".")
    }
      , Oq = function(a, b) {
        var c = wp((b && b.prefix || "_gcl") + "_gb", a, b);
        return 0 === c.length || c.every(function(d) {
            return 0 === d
        }) ? "" : c.join(".")
    };
    var Pq = function() {
        if (Ga(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var Ar = {
        D: {
            di: "ads_conversion_hit",
            eg: "container_execute_start",
            fi: "container_setup_end",
            fg: "container_setup_start",
            ei: "container_execute_end",
            gi: "container_yield_end",
            gg: "container_yield_start",
            Zi: "event_execute_end",
            Yi: "event_evaluation_end",
            Vg: "event_evaluation_start",
            aj: "event_setup_end",
            fe: "event_setup_start",
            bj: "ga4_conversion_hit",
            je: "page_load",
            Om: "pageview",
            Vb: "snippet_load",
            mj: "tag_callback_error",
            nj: "tag_callback_failure",
            oj: "tag_callback_success",
            pj: "tag_execute_end",
            ed: "tag_execute_start"
        }
    };
    var Br = !1
      , Cr = "L S Y E EC TC HTC".split(" ")
      , Dr = ["S", "V", "E"]
      , Er = ["TS", "TI", "TE"];
    var gs = function(a) {}
      , hs = function(a) {}
      , is = function() {}
      , js = function() {}
      , ks = function() {}
      , ls = function(a, b) {}
      , ms = function(a, b) {}
      , ns = function(a, b) {}
      , os = function(a, b) {}
      , Fr = function(a, b, c, d, e, f) {
        var g;
        g = void 0 === g ? !1 : g;
        var h = {};
        return h
    }
      , Gr = function(a) {
        var b = !1;
        return b
    }
      , Hr = function(a, b) {}
      , ps = function() {
        var a = {};
        return a
    }
      , $r = function(a) {
        a = void 0 === a ? !0 : a;
        var b = {};
        return b
    }
      , qs = function() {}
      , rs = function(a, b) {}
      , ss = function(a, b, c) {}
      , ts = function() {
        var a = Fr("PAGEVIEW", gl());
        if (Rr(a.entry, "mark")[0]) {
            var b = Dc();
            b.clearMarks(a.entry);
            b.clearMeasures("GTM-" + gl() + ":" + Ar.D.je + ":to:PAGEVIEW")
        }
        var c = Fr(Ar.D.je, gl());
        Gr(a) && Hr(a, c)
    };
    var us = function(a, b) {
        var c = z, d, e = c.GooglebQhCsO;
        e || (e = {},
        c.GooglebQhCsO = e);
        d = e;
        if (d[a])
            return !1;
        d[a] = [];
        d[a][0] = b;
        return !0
    };
    var vs = function(a, b, c) {
        var d = ln(a, "fmt");
        if (b) {
            var e = ln(a, "random")
              , f = ln(a, "label") || "";
            if (!e)
                return !1;
            var g = Wn(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!us(g, b))
                return !1
        }
        d && 4 != d && (a = nn(a, "rfmt", d));
        var h = nn(a, "fmt", 4);
        pc(h, function() {
            z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null,
            b())
        }, void 0, c, G.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var Ls = function() {
        this.h = {}
    }
      , Ms = function(a, b, c) {
        null != c && (a.h[b] = c)
    }
      , Ns = function(a) {
        return Object.keys(a.h).map(function(b) {
            return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
        }).join("&")
    }
      , Ps = function(a, b, c, d) {};
    function Rs(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return bj("" + c + b).href
        }
    }
    function Ss() {
        return !!Kh.Ef && "SGTM_TOKEN" !== Kh.Ef.split("@@").join("")
    }
    function Ts(a) {
        for (var b = Us(), c = fa(b), d = c.next(); !d.done; d = c.next()) {
            var e = T(a, d.value);
            if (e)
                return e
        }
    }
    function Us() {
        var a = [];
        S(58) && a.push(O.g.rf);
        a.push(O.g.sc);
        return a
    }
    ;var Ws = function(a, b, c, d, e) {
        if (!Vs() && !ol(a)) {
            var f = "?id=" + encodeURIComponent(a) + "&l=" + Kh.ka
              , g = 0 === a.indexOf("GTM-");
            g || (f += "&cx=c");
            S(85) && (f += "&gtm=" + bn());
            var h = Ss();
            h && (f += "&sign=" + Kh.Ef);
            var l = c ? "/gtag/js" : "/gtm.js"
              , n = Th || Vh ? Rs(b, l + f) : void 0;
            if (!n) {
                var p = Kh.Ze + l;
                h && jc && g && (p = jc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                n = Jp("https://", "http://", p + f)
            }
            var q = a;
            d.siloed && (ql({
                ctid: q,
                isDestination: !1
            }),
            q = bl(q));
            var r = q
              , t = pl();
            Wk().container[r] = {
                state: 1,
                context: d,
                parent: t
            };
            Xk({
                ctid: r,
                isDestination: !1
            }, e);
            pc(n)
        }
    }
      , Xs = function(a, b, c) {
        var d;
        if (d = !Vs()) {
            var e = Wk().destination[a];
            d = !(e && e.state)
        }
        if (d)
            if (rl())
                Wk().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: pl()
                },
                Xk({
                    ctid: a,
                    isDestination: !0
                }),
                N(91);
            else {
                var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + Kh.ka + "&cx=c";
                S(85) && (f += "&gtm=" + bn());
                Ss() && (f += "&sign=" + Kh.Ef);
                var g = Th || Vh ? Rs(b, f) : void 0;
                g || (g = Jp("https://", "http://", Kh.Ze + f));
                var h = a;
                c.siloed && (ql({
                    ctid: h,
                    isDestination: !0
                }),
                h = bl(h));
                Wk().destination[h] = {
                    state: 1,
                    context: c,
                    parent: pl()
                };
                Xk({
                    ctid: h,
                    isDestination: !0
                });
                pc(g)
            }
    };
    function Vs() {
        if ($m()) {
            return !0
        }
        return !1
    }
    ;var Zs = function(a, b) {
        Ys(a).event && Ys(a).event.push(b)
    }
      , $s = function() {
        var a = Ys(hl());
        return a.event ? a.event : []
    };
    function Ys(a) {
        var b, c = Lh.r;
        c || (c = {
            container: {}
        },
        Lh.r = c);
        b = c;
        var d = b.container[a];
        d || (d = {
            entity: [],
            event: []
        },
        b.container[a] = d);
        return d
    }
    ;var at = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/)
      , bt = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }
      , ct = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }
      , dt = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ")
      , gt = function(a) {
        var b = ki("gtm.allowlist") || ki("gtm.whitelist");
        b && N(9);
        al() ? b = "e c cid gct rep ogt_cons_disc ccd_ads_first ccd_ads_last ccd_fl_first ccd_fl_last ccd_ga_first ccd_ga_last ccd_mc_first ccd_mc_last".split(" ") : Rh && (b = ["google", "gtagfl", "lcl", "zone"]);
        et() && (Rh ? N(116) : N(117),
        ft && (b = [],
        window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
        var c = b && $a(Sa(b), bt)
          , d = ki("gtm.blocklist") || ki("gtm.blacklist");
        d || (d = ki("tagTypeBlacklist")) && N(3);
        d ? N(8) : d = [];
        et() && (d = Sa(d),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        0 <= Sa(d).indexOf("google") && N(2);
        var e = d && $a(Sa(d), ct)
          , f = {};
        return function(g) {
            var h = g && g[oe.Tb];
            if (!h || "string" != typeof h)
                return !0;
            h = h.replace(/^_*/, "");
            if (void 0 !== f[h])
                return f[h];
            var l = ci[h] || [], n = a(h, l), p;
            p = Ys(hl()).entity;
            for (var q = 0; q < p.length; q++)
                try {
                    n = n && p[q](h, l)
                } catch (y) {
                    n = !1
                }
            if (b) {
                var r;
                if (r = n)
                    a: {
                        if (0 > c.indexOf(h))
                            if (l && 0 < l.length)
                                for (var t = 0; t < l.length; t++) {
                                    if (0 > c.indexOf(l[t])) {
                                        N(11);
                                        r = !1;
                                        break a
                                    }
                                }
                            else {
                                r = !1;
                                break a
                            }
                        r = !0
                    }
                n = r
            }
            var u = !1;
            if (d) {
                var v = 0 <= e.indexOf(h);
                if (v)
                    u = v;
                else {
                    var w = Oa(e, l || []);
                    w && N(10);
                    u = w
                }
            }
            var x = !n || u;
            x || !(0 <= l.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = Oa(e, dt));
            return f[h] = x
        }
    }
      , ft = !1;
    var et = function() {
        return at.test(z.location && z.location.hostname)
    };
    var ht = ""
      , it = [];
    function jt(a) {
        var b = "";
        ht && (b = "&dl=" + encodeURIComponent(ht));
        0 < it.length && (b += "&tdp=" + it.join("."));
        a.Gb && (ht = "",
        it.length = 0,
        b && a.Pj());
        return b
    }
    ;var kt = [];
    function lt(a) {
        if (!kt.length)
            return "";
        var b = "&tdc=" + kt.join("!");
        a.Gb && (a.Pj(),
        kt.length = 0);
        return b
    }
    ;var mt = {
        initialized: 11,
        complete: 12,
        interactive: 13
    }
      , nt = {}
      , ot = Object.freeze((nt[O.g.Qa] = !0,
    nt))
      , pt = 0 <= G.location.search.indexOf("?gtm_diagnostics=") || 0 <= G.location.search.indexOf("&gtm_diagnostics=")
      , rt = function(a, b, c) {
        if (Al && "config" === a && !(1 < Gp(b).I.length)) {
            var d, e = kc("google_tag_data", {});
            e.td || (e.td = {});
            d = e.td;
            var f = I(c.C);
            I(c.h, f);
            var g = [], h;
            for (h in d) {
                var l = qt(d[h], f);
                l.length && (pt && console.log(l),
                g.push(h))
            }
            g.length && (g.length && Al && kt.push(b + "*" + g.join(".")),
            xb("TAGGING", mt[G.readyState] || 14));
            d[b] = f
        }
    };
    function st(a, b) {
        var c = {}, d;
        for (d in b)
            b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a)
            a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }
    function qt(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b)
            return [];
        var e = function(q, r) {
            var t = r[q];
            return void 0 === t ? ot[q] : t
        }, f;
        for (f in st(a, b)) {
            var g = (d ? d + "." : "") + f
              , h = e(f, a)
              , l = e(f, b)
              , n = "object" === Sc(h) || "array" === Sc(h)
              , p = "object" === Sc(l) || "array" === Sc(l);
            if (n && p)
                qt(h, l, c, g);
            else if (n || p || h !== l)
                c[g] = !0
        }
        return Object.keys(c)
    }
    ;var tt = !1
      , ut = 0
      , vt = [];
    function wt(a) {
        if (!tt) {
            var b = G.createEventObject
              , c = "complete" == G.readyState
              , d = "interactive" == G.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                tt = !0;
                for (var e = 0; e < vt.length; e++)
                    H(vt[e])
            }
            vt.push = function() {
                for (var f = 0; f < arguments.length; f++)
                    H(arguments[f]);
                return 0
            }
        }
    }
    function xt() {
        if (!tt && 140 > ut) {
            ut++;
            try {
                G.documentElement.doScroll("left"),
                wt()
            } catch (a) {
                z.setTimeout(xt, 50)
            }
        }
    }
    var zt = function() {
        tt = !1;
        ut = 0;
        if ("interactive" == G.readyState && !G.createEventObject || "complete" == G.readyState)
            wt();
        else {
            tc(G, "DOMContentLoaded", wt);
            tc(G, "readystatechange", wt);
            if (G.createEventObject && G.documentElement.doScroll) {
                var a = !0;
                try {
                    a = !z.frameElement
                } catch (b) {}
                a && xt()
            }
            tc(z, "load", wt)
        }
    }
      , At = function(a) {
        tt ? a() : vt.push(a)
    };
    var Bt = function() {
        this.C = 0;
        this.h = {}
    };
    Bt.prototype.addListener = function(a, b, c) {
        var d = ++this.C;
        this.h[a] = this.h[a] || {};
        this.h[a][String(d)] = {
            listener: b,
            ob: c
        };
        return d
    }
    ;
    Bt.prototype.m = function(a, b) {
        var c = this.h[a]
          , d = String(b);
        if (!c || !c[d])
            return !1;
        delete c[d];
        return !0
    }
    ;
    Bt.prototype.B = function(a, b) {
        var c = [];
        m(this.h[a], function(d, e) {
            0 > c.indexOf(e.listener) && (void 0 === e.ob || 0 <= b.indexOf(e.ob)) && c.push(e.listener)
        });
        return c
    }
    ;
    var Ct = function(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: gl()
        }
    };
    function Dt(a, b) {
        if (data.entities && data.entities[a])
            return data.entities[a][b]
    }
    ;var Ft = function(a, b) {
        this.h = !1;
        this.C = [];
        this.J = {
            tags: []
        };
        this.R = !1;
        this.m = this.B = 0;
        Et(this, a, b)
    }
      , Gt = function(a, b, c, d) {
        if (Oh.hasOwnProperty(b) || "__zone" === b)
            return -1;
        var e = {};
        Uc(d) && (e = I(d, e));
        e.id = c;
        e.status = "timeout";
        return a.J.tags.push(e) - 1
    }
      , Ht = function(a, b, c, d) {
        var e = a.J.tags[b];
        e && (e.status = c,
        e.executionTime = d)
    }
      , It = function(a) {
        if (!a.h) {
            for (var b = a.C, c = 0; c < b.length; c++)
                b[c]();
            a.h = !0;
            a.C.length = 0
        }
    }
      , Et = function(a, b, c) {
        void 0 !== b && a.Gf(b);
        c && z.setTimeout(function() {
            return It(a)
        }, Number(c))
    };
    Ft.prototype.Gf = function(a) {
        var b = this
          , c = Xa(function() {
            return H(function() {
                a(gl(), b.J)
            })
        });
        this.h ? c() : this.C.push(c)
    }
    ;
    var Jt = function(a) {
        a.B++;
        return Xa(function() {
            a.m++;
            a.R && a.m >= a.B && It(a)
        })
    }
      , Kt = function(a) {
        a.R = !0;
        a.m >= a.B && It(a)
    };
    var Lt = {}
      , Nt = function() {
        return z[Mt()]
    }
      , Ot = !1;
    function Mt() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var Rt = function(a) {}
      , St = function(a, b) {
        return function() {
            var c = Nt()
              , d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(f) {
                    var g = f.get("hitPayload")
                      , h = f.get("hitCallback")
                      , l = 0 > g.indexOf("&tid=" + b);
                    l && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0),
                    f.set("hitCallback", void 0, !0));
                    e(f);
                    l && (f.set("hitPayload", g, !0),
                    f.set("hitCallback", h, !0),
                    f.set("_x_19", void 0, !0),
                    e(f))
                })
            }
        }
    };
    var Yt = {}
      , Zt = {};
    function $t(a, b) {
        if (Al) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            Yt[a] = "&e=" + c + "&eid=" + a;
            Kl(a)
        }
    }
    function au(a) {
        var b = a.eventId
          , c = a.Gb;
        if (!Yt[b])
            return "";
        var d = Zt[b] ? "" : "&es=1";
        d += Yt[b];
        c && (Zt[b] = !0);
        return d
    }
    ;var bu = {};
    function cu(a, b) {
        Al && (bu[a] = bu[a] || {},
        bu[a][b] = (bu[a][b] || 0) + 1)
    }
    function du(a) {
        var b = a.eventId, c = a.Gb, d = bu[b] || {}, e = [], f;
        for (f in d)
            d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete bu[b];
        return e.length ? "&md=" + e.join(".") : ""
    }
    ;var eu = {}
      , fu = {
        aev: "1",
        c: "2",
        jsm: "3",
        v: "4",
        j: "5",
        smm: "6",
        rmm: "7",
        input: "8"
    };
    function gu(a, b, c) {
        if (Al) {
            eu[a] = eu[a] || [];
            var d = fu[b] || "0", e;
            e = c instanceof z.Element ? "1" : c instanceof z.Event ? "2" : c instanceof z.RegExp ? "3" : c === z ? "4" : c === G ? "5" : c instanceof z.Promise ? "6" : c instanceof z.Storage ? "7" : c instanceof z.Date ? "8" : c instanceof z.History ? "9" : c instanceof z.Performance ? "a" : c === z.crypto ? "b" : c instanceof z.Location ? "c" : c instanceof z.Navigator ? "d" : "object" !== typeof c || Uc(c) ? "0" : "e";
            eu[a].push("" + d + e)
        }
    }
    function hu(a) {
        var b = a.eventId
          , c = eu[b] || [];
        if (!c.length)
            return "";
        a.Gb && delete eu[b];
        return "&pcr=" + c.join(".")
    }
    ;var iu = {}
      , ju = {};
    function ku(a, b, c) {
        if (Al && b) {
            var d = Uk(b);
            iu[a] = iu[a] || [];
            iu[a].push(c + d);
            var e = b["function"];
            if (!e)
                throw Error("Error: No function name given for function call.");
            var f = (Qe[e] ? "1" : "2") + d;
            ju[a] = ju[a] || [];
            ju[a].push(f);
            Kl(a)
        }
    }
    function lu(a) {
        var b = a.eventId
          , c = a.Gb
          , d = ""
          , e = iu[b] || [];
        e.length && (d += "&tr=" + e.join("."));
        var f = ju[b] || [];
        f.length && (d += "&ti=" + f.join("."));
        c && (delete iu[b],
        delete ju[b]);
        return d
    }
    ;function mu(a, b, c, d) {
        var e = Oe[a]
          , f = nu(a, b, c, d);
        if (!f)
            return null;
        var g = af(e[oe.lj], c, []);
        if (g && g.length) {
            var h = g[0];
            f = mu(h.index, {
                P: f,
                W: 1 === h.Bj ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }
    function nu(a, b, c, d) {
        function e() {
            if (f[oe.Ck])
                h();
            else {
                var w = bf(f, c, [])
                  , x = w[oe.Zj];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!wk(x[y])) {
                            h();
                            return
                        }
                var A = Gt(c.Wb, String(f[oe.Tb]), Number(f[oe.pe]), w[oe.Dk])
                  , B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var J = Va() - F;
                        ku(c.id, Oe[a], "5");
                        Ht(c.Wb, A, "success", J);
                        S(32) && ss(c, f, Ar.D.oj);
                        g()
                    }
                }
                ;
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var J = Va() - F;
                        ku(c.id, Oe[a], "6");
                        Ht(c.Wb, A, "failure", J);
                        S(32) && ss(c, f, Ar.D.nj);
                        h()
                    }
                }
                ;
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                ku(c.id, f, "1");
                var D = function() {
                    si(3);
                    var J = Va() - F;
                    ku(c.id, f, "7");
                    Ht(c.Wb, A, "exception", J);
                    S(32) && ss(c, f, Ar.D.mj);
                    B || (B = !0,
                    h())
                };
                S(32) && rs(c, f);
                var F = Va();
                try {
                    $e(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (J) {
                    D(J)
                }
                S(32) && ss(c, f, Ar.D.pj)
            }
        }
        var f = Oe[a]
          , g = b.P
          , h = b.W
          , l = b.terminate;
        if (c.vh(f))
            return null;
        var n = af(f[oe.qj], c, []);
        if (n && n.length) {
            var p = n[0]
              , q = mu(p.index, {
                P: g,
                W: h,
                terminate: l
            }, c, d);
            if (!q)
                return null;
            g = q;
            h = 2 === p.Bj ? l : q
        }
        if (f[oe.gj] || f[oe.Fk]) {
            var r = f[oe.gj] ? Pe : c.wm
              , t = g
              , u = h;
            if (!r[a]) {
                e = Xa(e);
                var v = ou(a, r, e);
                g = v.P;
                h = v.W
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }
    function ou(a, b, c) {
        var d = []
          , e = [];
        b[a] = pu(d, e, c);
        return {
            P: function() {
                b[a] = qu;
                for (var f = 0; f < d.length; f++)
                    d[f]()
            },
            W: function() {
                b[a] = ru;
                for (var f = 0; f < e.length; f++)
                    e[f]()
            }
        }
    }
    function pu(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }
    function qu(a) {
        a()
    }
    function ru(a, b) {
        b()
    }
    ;var tu = function(a, b) {
        return 1 === arguments.length ? su("set", a) : su("set", a, b)
    }
      , Nu = function(a, b) {
        return 1 === arguments.length ? su("config", a) : su("config", a, b)
    }
      , Su = function(a, b, c) {
        c = c || {};
        c[O.g.Sb] = a;
        return su("event", b, c)
    };
    function su(a) {
        return arguments
    }
    var Tu = function() {
        this.h = [];
        this.m = []
    };
    Tu.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.m.length; f++)
            try {
                this.m[f](e)
            } catch (g) {}
    }
    ;
    Tu.prototype.listen = function(a) {
        this.m.push(a)
    }
    ;
    Tu.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b]
              , d = a[c.notBeforeEventId];
            d || (d = [],
            a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    }
    ;
    Tu.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    }
    ;
    var Vu = function(a, b, c) {
        Uu().enqueue(a, b, c)
    }
      , Xu = function() {
        var a = Wu;
        Uu().listen(a)
    };
    function Uu() {
        var a = Lh.mb;
        a || (a = new Tu,
        Lh.mb = a);
        return a
    }
    var ev = function(a) {
        var b = Lh.zones;
        return b ? b.getIsAllowedFn(cl(), a) : function() {
            return !0
        }
    }
      , fv = function(a) {
        var b = Lh.zones;
        return b ? b.isActive(cl(), a) : !0
    }
      , gv = function() {
        var a = Lh.zones;
        a && a.unregisterChild(cl())
    }
      , hv = function() {
        Zs(hl(), function(a, b) {
            return fv(b)
        })
    };
    var kv = function(a, b) {
        for (var c = [], d = 0; d < Oe.length; d++)
            if (a[d]) {
                var e = Oe[d];
                var f = Jt(b.Wb);
                try {
                    var g = mu(d, {
                        P: f,
                        W: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var h = e["function"];
                        if (!h)
                            throw "Error: No function name given for function call.";
                        var l = Qe[h];
                        c.push({
                            Rj: d,
                            Jj: (l ? l.priorityOverride || 0 : 0) || Dt(e[oe.Tb], 1) || 0,
                            execute: g
                        })
                    } else
                        iv(d, b),
                        f()
                } catch (p) {
                    f()
                }
            }
        c.sort(jv);
        for (var n = 0; n < c.length; n++)
            c[n].execute();
        return 0 < c.length
    };
    var mv = function(a, b) {
        if (!lv)
            return !1;
        var c = a["gtm.triggers"] && String(a["gtm.triggers"])
          , d = lv.B(a.event, c ? String(c).split(",") : []);
        if (!d.length)
            return !1;
        for (var e = 0; e < d.length; ++e) {
            var f = Jt(b);
            try {
                d[e](a, f)
            } catch (g) {
                f()
            }
        }
        return !0
    };
    function jv(a, b) {
        var c, d = b.Jj, e = a.Jj;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c)
            f = c;
        else {
            var g = a.Rj
              , h = b.Rj;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }
    function iv(a, b) {
        if (Al) {
            var c = function(d) {
                var e = b.vh(Oe[d]) ? "3" : "4"
                  , f = af(Oe[d][oe.lj], b, []);
                f && f.length && c(f[0].index);
                ku(b.id, Oe[d], e);
                var g = af(Oe[d][oe.qj], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var nv = !1, lv;
    var ov = function() {
        lv || (lv = new Bt);
        return lv
    };
    var tv = function(a) {
        var b = a["gtm.uniqueEventId"]
          , c = a["gtm.priorityId"]
          , d = a.event;
        S(32) && ls(b, d);
        if ("gtm.js" === d) {
            if (nv)
                return !1;
            nv = !0
        }
        var e, f = !1, g = fv(b);
        if (S(73))
            for (var h = $s(), l = 0; g && l < h.length; l++)
                g = (0,
                h[l])(d, b);
        if (g)
            e = ev(b);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
                return !1;
            f = !0;
            e = ev(Number.MAX_SAFE_INTEGER)
        }
        $t(b, d);
        var n = a.eventCallback
          , p = a.eventTimeout
          , q = {
            id: b,
            priorityId: c,
            name: d,
            vh: gt(e),
            wm: [],
            Gj: function() {
                N(6);
                si(0)
            },
            vj: pv(),
            wj: qv(b),
            Wb: new Ft(function() {
                if (S(32)) {}
                n && n.apply(n, [].slice.call(arguments, 0))
            }
            ,p)
        };
        S(63) && (q.Nj = cu);
        S(32) && ns(q.id, q.name);
        var r = mf(q);
        S(32) && os(q.id, q.name);
        f && (r = rv(r));
        S(32) && ms(b, d);
        var t = kv(r, q)
          , u = !1;
        u = mv(a, q.Wb);
        Kt(q.Wb);
        "gtm.js" !== d && "gtm.sync" !== d || Rt(gl());
        return sv(r, t) || u
    };
    function qv(a) {
        return function(b) {
            Yc(b) || gu(a, "input", b)
        }
    }
    function pv() {
        var a = {};
        a.event = pi("event", 1);
        a.ecommerce = pi("ecommerce", 1);
        a.gtm = pi("gtm");
        a.eventModel = pi("eventModel");
        return a
    }
    function rv(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(Oe[c][oe.Tb]);
                if (Nh[d] || void 0 !== Oe[c][oe.Gk] || di[d] || Dt(d, 2))
                    b[c] = !0
            }
        return b
    }
    function sv(a, b) {
        if (!b)
            return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Oe[c] && !Oh[String(Oe[c][oe.Tb])])
                return !0;
        return !1
    }
    var uv = {};
    function vv(a, b, c) {
        Al && void 0 !== a && (uv[a] = uv[a] || [],
        uv[a].push(c + b),
        Kl(a))
    }
    function wv(a) {
        var b = a.eventId
          , c = a.Gb
          , d = ""
          , e = uv[b] || [];
        e.length && (d += "&epr=" + e.join("."));
        c && delete uv[b];
        return d
    }
    ;var yv = function(a, b) {
        var c = Gp(fl(a), !0);
        c && xv.register(c, b)
    }
      , zv = function(a, b, c, d) {
        var e = Gp(c, d.isGtmEvent);
        e && xv.push("event", [b, a], e, d)
    }
      , Av = function(a, b, c, d) {
        var e = Gp(c, d.isGtmEvent);
        e && xv.push("get", [a, b], e, d)
    }
      , Cv = function(a) {
        var b = Gp(fl(a), !0), c;
        b ? c = Bv(xv, b).h : c = {};
        return c
    }
      , Dv = function(a, b) {
        var c = Gp(fl(a), !0);
        if (c) {
            var d = xv
              , e = I(b);
            I(Bv(d, c).h, e);
            Bv(d, c).h = e
        }
    }
      , Ev = function() {
        this.status = 1;
        this.J = {};
        this.h = {};
        this.m = {};
        this.R = null;
        this.C = {};
        this.B = !1
    }
      , Fv = function(a, b, c, d) {
        var e = Va();
        this.type = a;
        this.B = e;
        this.h = b;
        this.m = c;
        this.messageContext = d
    }
      , Gv = function() {
        this.m = {};
        this.B = {};
        this.h = []
    }
      , Bv = function(a, b) {
        var c = b.aa;
        return a.m[c] = a.m[c] || new Ev
    }
      , Hv = function(a, b, c, d) {
        if (d.h) {
            var e = Bv(a, d.h)
              , f = e.R;
            if (f) {
                var g = I(c)
                  , h = I(e.J[d.h.id])
                  , l = I(e.C)
                  , n = I(e.h)
                  , p = I(a.B)
                  , q = {};
                if (Al)
                    try {
                        q = I(hi)
                    } catch (v) {
                        N(72)
                    }
                var r = d.h.prefix
                  , t = function(v) {
                    vv(d.messageContext.eventId, r, v);
                    var w = g[O.g.mc];
                    w && H(w)
                }
                  , u = dm(cm(bm(am($l(Yl(Xl(Zl(Wl(Vl(Ul(new Tl(d.messageContext.eventId,d.messageContext.priorityId), g), h), l), n), p), q), d.messageContext.eventMetadata), function() {
                    if (t) {
                        var v = t;
                        t = void 0;
                        v("2")
                    }
                }), function() {
                    if (t) {
                        var v = t;
                        t = void 0;
                        v("3")
                    }
                }), !!d.messageContext.isGtmEvent));
                try {
                    vv(d.messageContext.eventId, r, "1"),
                    rt(d.type, d.h.id, u),
                    f(d.h.id, b, d.B, u)
                } catch (v) {
                    vv(d.messageContext.eventId, r, "4")
                }
            }
        }
    };
    Gv.prototype.register = function(a, b, c) {
        var d = Bv(this, a);
        3 !== d.status && (d.R = b,
        d.status = 3,
        c && (I(d.h, c),
        d.h = c),
        this.flush())
    }
    ;
    Gv.prototype.push = function(a, b, c, d) {
        void 0 !== c && (1 === Bv(this, c).status && (Bv(this, c).status = 2,
        this.push("require", [{}], c, {})),
        Bv(this, c).B && (d.deferrable = !1));
        this.h.push(new Fv(a,c,b,d));
        d.deferrable || this.flush()
    }
    ;
    Gv.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
            var f = this.h[0]
              , g = f.h;
            if (f.messageContext.deferrable)
                !g || Bv(this, g).B ? (f.messageContext.deferrable = !1,
                this.h.push(f)) : c.push(f),
                this.h.shift();
            else {
                switch (f.type) {
                case "require":
                    if (3 !== Bv(this, g).status && !a) {
                        this.h.push.apply(this.h, c);
                        return
                    }
                    break;
                case "set":
                    m(f.m[0], function(r, t) {
                        I(bb(r, t), b.B)
                    });
                    break;
                case "config":
                    var h = Bv(this, g);
                    e.Hb = {};
                    m(f.m[0], function(r) {
                        return function(t, u) {
                            I(bb(t, u), r.Hb)
                        }
                    }(e));
                    var l = !!e.Hb[O.g.uc];
                    delete e.Hb[O.g.uc];
                    var n = g.aa === g.id;
                    l || (n ? h.C = {} : h.J[g.id] = {});
                    h.B && l || Hv(this, O.g.la, e.Hb, f);
                    h.B = !0;
                    n ? I(e.Hb, h.C) : (I(e.Hb, h.J[g.id]),
                    N(70));
                    d = !0;
                    break;
                case "event":
                    e.Pe = {};
                    m(f.m[0], function(r) {
                        return function(t, u) {
                            I(bb(t, u), r.Pe)
                        }
                    }(e));
                    Hv(this, f.m[1], e.Pe, f);
                    break;
                case "get":
                    var p = {}
                      , q = (p[O.g.Pa] = f.m[0],
                    p[O.g.hb] = f.m[1],
                    p);
                    Hv(this, O.g.Ja, q, f)
                }
                this.h.shift();
                Iv(this, f)
            }
            e = {
                Hb: e.Hb,
                Pe: e.Pe
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    }
    ;
    var Iv = function(a, b) {
        if ("require" !== b.type)
            if (b.h)
                for (var c = Bv(a, b.h).m[b.type] || [], d = 0; d < c.length; d++)
                    c[d]();
            else
                for (var e in a.m)
                    if (a.m.hasOwnProperty(e)) {
                        var f = a.m[e];
                        if (f && f.m)
                            for (var g = f.m[b.type] || [], h = 0; h < g.length; h++)
                                g[h]()
                    }
    }
      , xv = new Gv;
    var vf;
    var Jv = {}
      , Kv = {}
      , Lv = function(a, b) {
        for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
            Ue: e.Ue,
            Re: e.Re
        },
        f++) {
            var g = a[f];
            if (0 <= g.indexOf("-")) {
                if (e.Ue = Gp(g, b),
                e.Ue) {
                    var h = el();
                    Ka(h, function(r) {
                        return function(t) {
                            return r.Ue.aa === t
                        }
                    }(e)) ? c.push(g) : d.push(g)
                }
            } else {
                var l = Jv[g] || [];
                e.Re = {};
                l.forEach(function(r) {
                    return function(t) {
                        return r.Re[t] = !0
                    }
                }(e));
                for (var n = cl(), p = 0; p < n.length; p++)
                    if (e.Re[n[p]]) {
                        c = c.concat(el());
                        break
                    }
                var q = Kv[g] || [];
                q.length && (c = c.concat(q))
            }
        }
        return {
            Ml: c,
            Pl: d
        }
    }
      , Mv = function(a) {
        m(Jv, function(b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    }
      , Nv = function(a) {
        m(Kv, function(b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    };
    var Ov = "HA GF G UA AW DC MC".split(" ")
      , Pv = !1
      , Qv = !1;
    function Rv(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: ei()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var Sv = void 0
      , Tv = void 0;
    function Uv(a, b, c) {
        var d = I(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return void 0 !== b[f]
        }) && N(136);
        var e = I(b);
        I(c, e);
        Vu(Nu(cl()[0], e), a.eventId, d)
    }
    function Vv(a) {
        for (var b = Us(), c = fa(b), d = c.next(); !d.done; d = c.next()) {
            var e = d.value
              , f = a && a[e] || xv.B[e];
            if (f)
                return f
        }
    }
    var Wv = {
        config: function(a, b) {
            var c = S(65)
              , d = Rv(a, b);
            if (!(2 > a.length) && k(a[1])) {
                var e = {};
                if (2 < a.length) {
                    if (void 0 != a[2] && !Uc(a[2]) || 3 < a.length)
                        return;
                    e = a[2]
                }
                var f = Gp(a[1], b.isGtmEvent);
                if (f) {
                    var g, h, l;
                    a: {
                        if (!Zk.zf) {
                            var n = il(pl());
                            if (n && n.parent && n.context && 1 === n.context.source && 0 !== n.parent.ctid.indexOf("GTM-")) {
                                var p = n.parent
                                  , q = p.isDestination;
                                l = {
                                    Tl: il(p),
                                    Ll: q
                                };
                                break a
                            }
                        }
                        l = void 0
                    }
                    var r = l;
                    r && (g = r.Tl,
                    h = r.Ll);
                    $t(d.eventId, "gtag.config");
                    var t = f.aa
                      , u = f.id !== t;
                    if (u ? -1 === el().indexOf(t) : -1 === cl().indexOf(t)) {
                        if (!(c && b.inheritParentConfig || S(27) && e[O.g.yb])) {
                            var v = Vv(e);
                            if (u)
                                Xs(t, v, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                            else if (c && void 0 !== g && -1 !== g.containers.indexOf(t)) {
                                var w = e;
                                Sv ? Uv(b, w, Sv) : Tv || (Tv = I(w))
                            } else
                                Ws(t, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                        }
                    } else {
                        if (g && (N(128),
                        h && N(130),
                        c && b.inheritParentConfig)) {
                            var x = e;
                            Tv ? Uv(b, Tv, x) : !x[O.g.uc] && Qh && Sv || (Sv = I(x));
                            return
                        }
                        if (Qh && !u && !e[O.g.uc]) {
                            var y = Qv;
                            Qv = !0;
                            if (y)
                                return
                        }
                        Pv || N(43);
                        if (!b.noTargetGroup)
                            if (u) {
                                Nv(f.id);
                                var A = f.id
                                  , B = e[O.g.Qd] || "default";
                                B = String(B).split(",");
                                for (var D = 0; D < B.length; D++) {
                                    var F = Kv[B[D]] || [];
                                    Kv[B[D]] = F;
                                    0 > F.indexOf(A) && F.push(A)
                                }
                            } else {
                                Mv(f.id);
                                var J = f.id
                                  , K = e[O.g.Qd] || "default";
                                K = K.toString().split(",");
                                for (var P = 0; P < K.length; P++) {
                                    var Q = Jv[K[P]] || [];
                                    Jv[K[P]] = Q;
                                    0 > Q.indexOf(J) && Q.push(J)
                                }
                            }
                        delete e[O.g.Qd];
                        var da = b.eventMetadata || {};
                        da.hasOwnProperty("is_external_event") || (da.is_external_event = !b.fromContainerExecution);
                        b.eventMetadata = da;
                        delete e[O.g.mc];
                        for (var aa = u ? [f.id] : el(), X = 0; X < aa.length; X++) {
                            var U = e
                              , qa = I(b)
                              , ka = Gp(aa[X], qa.isGtmEvent);
                            ka && xv.push("config", [U], ka, qa)
                        }
                    }
                }
            }
        },
        consent: function(a, b) {
            if (3 === a.length) {
                N(39);
                var c = Rv(a, b)
                  , d = a[1];
                "default" === d ? Lk(a[2]) : "update" === d ? Mk(a[2], c) : "declare" === d ? b.fromContainerExecution && Kk(a[2]) : "core_platform_services" === d && Nk(a[2])
            }
        },
        event: function(a, b) {
            var c = a[1];
            if (!(2 > a.length) && k(c)) {
                var d;
                if (2 < a.length) {
                    if (!Uc(a[2]) && void 0 != a[2] || 3 < a.length)
                        return;
                    d = a[2]
                }
                var e = d
                  , f = {}
                  , g = (f.event = c,
                f);
                e && (g.eventModel = I(e),
                e[O.g.mc] && (g.eventCallback = e[O.g.mc]),
                e[O.g.Ld] && (g.eventTimeout = e[O.g.Ld]));
                var h = Rv(a, b)
                  , l = h.eventId
                  , n = h.priorityId;
                g["gtm.uniqueEventId"] = l;
                n && (g["gtm.priorityId"] = n);
                if ("optimize.callback" === c)
                    return g.eventModel = g.eventModel || {},
                    g;
                var p;
                var q = d
                  , r = q && q[O.g.Sb];
                void 0 === r && (r = ki(O.g.Sb, 2),
                void 0 === r && (r = "default"));
                if (k(r) || Ja(r)) {
                    var t;
                    b.isGtmEvent && S(64) ? t = k(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
                    var u = Lv(t, b.isGtmEvent)
                      , v = u.Ml
                      , w = u.Pl;
                    if (w.length)
                        for (var x = Vv(q), y = 0; y < w.length; y++) {
                            var A = Gp(w[y], b.isGtmEvent);
                            A && Xs(A.aa, x, {
                                source: 3,
                                fromContainerExecution: b.fromContainerExecution
                            })
                        }
                    p = Ip(v, b.isGtmEvent)
                } else
                    p = void 0;
                var B = p;
                if (B) {
                    $t(l, c);
                    for (var D = [], F = 0; F < B.length; F++) {
                        var J = B[F]
                          , K = I(b);
                        if (-1 !== Ov.indexOf(jl(J.prefix))) {
                            var P = I(d)
                              , Q = K.eventMetadata || {};
                            Q.hasOwnProperty("is_external_event") || (Q.is_external_event = !K.fromContainerExecution);
                            K.eventMetadata = Q;
                            delete P[O.g.mc];
                            zv(c, P, J.id, K)
                        }
                        D.push(J.id)
                    }
                    g.eventModel = g.eventModel || {};
                    0 < B.length ? g.eventModel[O.g.Sb] = D.join() : delete g.eventModel[O.g.Sb];
                    Pv || N(43);
                    void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                    S(78) && g.eventModel[O.g.Ob] && (b.noGtmEvent = !0);
                    return b.noGtmEvent ? void 0 : g
                }
            }
        },
        get: function(a, b) {
            N(53);
            if (4 === a.length && k(a[1]) && k(a[2]) && Ga(a[3])) {
                var c = Gp(a[1], b.isGtmEvent)
                  , d = String(a[2])
                  , e = a[3];
                if (c) {
                    Pv || N(43);
                    var f = Vv();
                    if (!Ka(el(), function(h) {
                        return c.aa === h
                    }))
                        Xs(c.aa, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                    else if (-1 !== Ov.indexOf(jl(c.prefix))) {
                        Rv(a, b);
                        var g = {};
                        Fk(I((g[O.g.Pa] = d,
                        g[O.g.hb] = e,
                        g)));
                        Av(d, function(h) {
                            H(function() {
                                return e(h)
                            })
                        }, c.id, b)
                    }
                }
            }
        },
        js: function(a, b) {
            if (2 == a.length && a[1].getTime) {
                Pv = !0;
                var c = Rv(a, b)
                  , d = c.eventId
                  , e = c.priorityId
                  , f = {};
                return f.event = "gtm.js",
                f["gtm.start"] = a[1].getTime(),
                f["gtm.uniqueEventId"] = d,
                f["gtm.priorityId"] = e,
                f
            }
        },
        policy: function(a) {
            if (3 === a.length && k(a[1]) && Ga(a[2])) {
                var b = a[1]
                  , c = a[2]
                  , d = vf.m;
                d.h[b] ? d.h[b].push(c) : d.h[b] = [c];
                if (N(74),
                "all" === a[1]) {
                    N(75);
                    var e = !1;
                    try {
                        e = a[2](gl(), "unknown", {})
                    } catch (f) {}
                    e || N(76)
                }
            } else {
                N(73);
            }
        },
        set: function(a, b) {
            var c;
            2 == a.length && Uc(a[1]) ? c = I(a[1]) : 3 == a.length && k(a[1]) && (c = {},
            Uc(a[2]) || Ja(a[2]) ? c[a[1]] = I(a[2]) : c[a[1]] = a[2]);
            if (c) {
                var d = Rv(a, b)
                  , e = d.eventId
                  , f = d.priorityId;
                I(c);
                var g = I(c);
                xv.push("set", [g], void 0, b);
                c["gtm.uniqueEventId"] = e;
                f && (c["gtm.priorityId"] = f);
                S(15) && delete c.event;
                b.overwriteModelFields = !0;
                return c
            }
        }
    }
      , Xv = {
        policy: !0
    };
    var Yv = function(a) {
        var b = z[Kh.ka].hide;
        if (b && void 0 !== b[a] && b.end) {
            b[a] = !1;
            var c = !0, d;
            for (d in b)
                if (b.hasOwnProperty(d) && !0 === b[d]) {
                    c = !1;
                    break
                }
            c && (b.end(),
            b.end = null)
        }
    }
      , Zv = function(a) {
        var b = z[Kh.ka]
          , c = b && b.hide;
        c && c.end && (c[a] = !0)
    };
    var $v = !1
      , aw = [];
    function bw() {
        if (!$v) {
            $v = !0;
            for (var a = 0; a < aw.length; a++)
                H(aw[a])
        }
    }
    var cw = function(a) {
        $v ? H(a) : aw.push(a)
    };
    var tw = function(a) {
        if (sw(a))
            return a;
        this.h = a
    };
    tw.prototype.getUntrustedMessageValue = function() {
        return this.h
    }
    ;
    var sw = function(a) {
        return !a || "object" !== Sc(a) || Uc(a) ? !1 : "getUntrustedMessageValue"in a
    };
    tw.prototype.getUntrustedMessageValue = tw.prototype.getUntrustedMessageValue;
    var uw = 0
      , vw = {}
      , ww = []
      , xw = []
      , yw = !1
      , zw = !1;
    function Aw(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Bw = function(a) {
        return z[Kh.ka].push(a)
    }
      , Cw = function(a, b, c) {
        a.eventCallback = b;
        c && (a.eventTimeout = c);
        return Bw(a)
    }
      , Dw = function(a, b) {
        var c = Lh[Kh.ka]
          , d = c ? c.subscribers : 1
          , e = 0
          , f = !1
          , g = void 0;
        b && (g = z.setTimeout(function() {
            f || (f = !0,
            a());
            g = void 0
        }, b));
        return function() {
            ++e === d && (g && (z.clearTimeout(g),
            g = void 0),
            f || (a(),
            f = !0))
        }
    };
    function Ew(a, b) {
        var c = a._clear || b.overwriteModelFields;
        m(a, function(e, f) {
            "_clear" !== e && (c && ni(e),
            ni(e, f))
        });
        $h || ($h = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event)
            return !1;
        "number" !== typeof d && (d = ei(),
        a["gtm.uniqueEventId"] = d,
        ni("gtm.uniqueEventId", d));
        return tv(a)
    }
    function Fw(a) {
        if (null == a || "object" !== typeof a)
            return !1;
        if (a.event)
            return !0;
        if (Pa(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b)
                return !0
        }
        return !1
    }
    function Gw() {
        var a;
        if (xw.length)
            a = xw.shift();
        else if (ww.length)
            a = ww.shift();
        else
            return;
        var b;
        var c = a;
        if (yw || !Fw(c.message))
            b = c;
        else {
            yw = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = ei());
            var e = {}
              , f = {
                message: (e.event = "gtm.init_consent",
                e["gtm.uniqueEventId"] = d - 2,
                e),
                messageContext: {
                    eventId: d - 2
                }
            }
              , g = {}
              , h = {
                message: (g.event = "gtm.init",
                g["gtm.uniqueEventId"] = d - 1,
                g),
                messageContext: {
                    eventId: d - 1
                }
            };
            ww.unshift(h, c);
            if (Al) {
                var l = rf.ctid;
                if (l) {
                    var n, p = il(pl());
                    n = p && p.context;
                    var q, r = bj(z.location.href);
                    q = r.hostname + r.pathname;
                    var t = n && n.fromContainerExecution
                      , u = n && n.source
                      , v = rf.Jf
                      , w = Zk.zf;
                    Al && (ht || (ht = q),
                    it.push(l + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)))
                }
            }
            b = f
        }
        return b
    }
    function Hw() {
        for (var a = !1, b; !zw && (b = Gw()); ) {
            zw = !0;
            delete hi.eventModel;
            ji();
            var c = b
              , d = c.message
              , e = c.messageContext;
            if (null == d)
                zw = !1;
            else {
                e.fromContainerExecution && oi();
                try {
                    if (Ga(d))
                        try {
                            d.call(li)
                        } catch (x) {}
                    else if (Ja(d)) {
                        var f = d;
                        if (k(f[0])) {
                            var g = f[0].split(".")
                              , h = g.pop()
                              , l = f.slice(1)
                              , n = ki(g.join("."), 2);
                            if (null != n)
                                try {
                                    n[h].apply(n, l)
                                } catch (x) {}
                        }
                    } else {
                        var p = void 0
                          , q = !1;
                        if (Pa(d)) {
                            a: {
                                if (d.length && k(d[0])) {
                                    var r = Wv[d[0]];
                                    if (r && (!e.fromContainerExecution || !Xv[d[0]])) {
                                        p = r(d, e);
                                        break a
                                    }
                                }
                                p = void 0
                            }
                            (q = p && "set" === d[0] && !!p.event) && N(101)
                        } else
                            p = d;
                        if (p) {
                            var t = Ew(p, e);
                            a = t || a;
                            q && t && N(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && ji(!0);
                    var u = d["gtm.uniqueEventId"];
                    if ("number" === typeof u) {
                        for (var v = vw[String(u)] || [], w = 0; w < v.length; w++)
                            xw.push(Iw(v[w]));
                        v.length && xw.sort(Aw);
                        delete vw[String(u)];
                        u > uw && (uw = u)
                    }
                    zw = !1
                }
            }
        }
        return !a
    }
    function Jw() {
        if (S(32)) {
            var a = Kw();
        }
        var e = Hw();
        try {
            Yv(gl())
        } catch (f) {}
        return e
    }
    function Wu(a) {
        if (uw < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            vw[b] = vw[b] || [];
            vw[b].push(a)
        } else
            xw.push(Iw(a)),
            xw.sort(Aw),
            H(function() {
                zw || Hw()
            })
    }
    function Iw(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var Lw = function() {
        function a(f) {
            var g = {};
            if (sw(f)) {
                var h = f;
                f = sw(h) ? h.getUntrustedMessageValue() : void 0;
                g.fromContainerExecution = !0
            }
            return {
                message: f,
                messageContext: g
            }
        }
        var b = kc(Kh.ka, [])
          , c = Lh[Kh.ka] = Lh[Kh.ka] || {};
        !0 === c.pruned && N(83);
        vw = Uu().get();
        Xu();
        At(function() {
            if (!c.gtmDom) {
                c.gtmDom = !0;
                var f = {};
                b.push((f.event = "gtm.dom",
                f))
            }
        });
        cw(function() {
            if (!c.gtmLoad) {
                c.gtmLoad = !0;
                var f = {};
                b.push((f.event = "gtm.load",
                f))
            }
        });
        c.subscribers = (c.subscribers || 0) + 1;
        var d = b.push;
        b.push = function() {
            var f;
            if (0 < Lh.SANDBOXED_JS_SEMAPHORE) {
                f = [];
                for (var g = 0; g < arguments.length; g++)
                    f[g] = new tw(arguments[g])
            } else
                f = [].slice.call(arguments, 0);
            var h = f.map(function(q) {
                return a(q)
            });
            ww.push.apply(ww, h);
            var l = d.apply(b, f)
              , n = Math.max(100, Number("1000") || 300);
            if (this.length > n)
                for (N(4),
                c.pruned = !0; this.length > n; )
                    this.shift();
            var p = "boolean" !== typeof l || l;
            return Hw() && p
        }
        ;
        var e = b.slice(0).map(function(f) {
            return a(f)
        });
        ww.push.apply(ww, e);
        Kw() && (S(32) && ks(),
        H(Jw))
    }
      , Kw = function() {
        var a = !0;
        return a
    };
    function Mw(a) {
        if (null == a || 0 === a.length)
            return !1;
        var b = Number(a)
          , c = Va();
        return b < c + 3E5 && b > c - 9E5
    }
    function Nw(a) {
        return a && 0 === a.indexOf("pending:") ? Mw(a.substr(8)) : !1
    }
    ;var Ow = function(a, b) {
        for (var c = 0; c < a.length; ++c) {
            var d = b[c];
            if (d)
                for (var e = 0; e < a[c].length; ++e)
                    a[c][e] && (a[c][e][O.g.Uc] = d)
        }
    }
      , Qw = function(a, b, c) {
        var d = Pw[a.pa];
        d || (S(88) && "transaction" === a.t ? d = O.g.xa : "click" === a.promoa ? d = O.g.sb : b.length ? d = O.g.ab : c.length && (d = O.g.Za));
        return d
    }
      , Rw = function(a) {
        var b, c, d, e;
        switch (a.t) {
        case "event":
            b = a.ea;
            c = a.ec;
            d = a.el;
            e = a.ev;
            break;
        case "pageview":
            b = O.g.fc;
            break;
        case "screenview":
            b = O.g.gk;
            break;
        case "timing":
            b = O.g.hk;
            c = a.utc;
            d = a.utl;
            e = a.utt;
            break;
        case "exception":
            b = O.g.fk;
            break;
        case "social":
            b = O.g.ik
        }
        return {
            ql: b,
            ol: c,
            pl: d,
            rl: e
        }
    }
      , Yw = function(a) {
        var b, c, d, e = a.match(Sw);
        if (e)
            return b = Number(e[1]) - 1,
            c = Tw[e[2]],
            {
                zh: b,
                Ah: c,
                Bh: "promotion"
            };
        var f = a.match(Uw);
        if (f)
            return d = "product",
            b = Number(f[1]) - 1,
            Vw[f[2]] ? c = Vw[f[2]] : c = Ww(f[2]),
            {
                zh: b,
                Ah: c,
                Bh: d
            };
        var g = a.match(Xw);
        if (g) {
            d = "impression";
            var h = Number(g[1]) - 1;
            b = Number(g[2]) - 1;
            var l = g[3];
            Vw[l] ? c = Vw[l] : c = Ww(l);
            return {
                zh: b,
                Ah: c,
                Bh: d,
                xl: h
            }
        }
        return {}
    }
      , Zw = function(a, b, c, d, e) {
        var f = Yw(a)
          , g = f.zh
          , h = f.Ah
          , l = f.Bh
          , n = f.xl;
        if (!(!h || !l || void 0 === g || 0 > g || 200 <= g)) {
            var p;
            switch (l) {
            case "promotion":
                p = c;
                break;
            case "product":
                p = d;
                break;
            case "impression":
                if (0 > n || 200 <= n)
                    return;
                p = e
            }
            p && ("impression" !== l ? (p[g] || (p[g] = {}),
            p[g][h] || (p[g][h] = b)) : void 0 !== n && (p[n] || (p[n] = []),
            p[n][g] || (p[n][g] = {}),
            p[n][g][h] || (p[n][g][h] = b)))
        }
    }
      , bx = function(a) {
        if ($w[a])
            return $w[a];
        var b = Ww(a);
        if (b)
            return b;
        var c = a.match(ax);
        if (c)
            return "ua_content_group_" + Number(c[1])
    }
      , Ww = function(a) {
        var b = a.match(cx), c;
        if (b) {
            if ("cd" === b[1])
                c = "ua_dimension";
            else if ("cm" === b[1])
                c = "ua_metric";
            else
                return;
            var d = Number(b[2]);
            if (1 <= d && 200 >= d)
                return c + "_" + d
        }
    }
      , $w = {
        aid: O.g.jk,
        aiid: O.g.kk,
        an: O.g.lk,
        av: O.g.mk,
        cc: O.g.Lc,
        cd: O.g.qf,
        ci: O.g.Mc,
        cid: O.g.cb,
        ck: O.g.Rc,
        cm: O.g.Nc,
        cn: O.g.Oc,
        cs: O.g.Qc,
        cu: O.g.sa,
        dh: O.g.nf,
        dl: O.g.ia,
        dp: O.g.Qb,
        dr: O.g.Fa,
        dt: O.g.Ab,
        exd: O.g.qk,
        exf: O.g.rk,
        sf: O.g.uk,
        sr: O.g.Bb,
        uid: O.g.Ba,
        ul: O.g.za,
        utv: O.g.tk
    }
      , dx = {
        col: O.g.Hd,
        cos: O.g.cf,
        pal: O.g.Uc,
        ta: O.g.qg,
        tcc: O.g.rg,
        ti: O.g.na,
        ts: O.g.Vc,
        tt: O.g.ef
    }
      , Pw = {
        add: O.g.Yb,
        checkout: O.g.Kb,
        checkout_option: O.g.Hd,
        click: O.g.ac,
        detail: O.g.Ia,
        purchase: O.g.xa,
        refund: O.g.bc,
        remove: O.g.Zb
    }
      , Tw = {
        cr: "creative_name",
        id: "promotion_id",
        nm: "promotion_name",
        ps: "creative_slot"
    }
      , Vw = {
        br: "item_brand",
        ca: "item_category",
        cc: "coupon",
        id: "item_id",
        nm: "item_name",
        pr: "price",
        ps: "index",
        qt: "quantity",
        va: "item_variant"
    }
      , ex = {
        ea: 1,
        ec: 1,
        el: 1,
        ev: 1,
        pa: 1,
        promoa: 1,
        t: 1,
        tr: 1,
        utc: 1,
        utl: 1,
        utt: 1
    }
      , cx = /^(cd|cm)([1-9][0-9]{0,2})$/
      , ax = /^cg([1-5])$/
      , Sw = /^promo([1-9][0-9]{0,2})(id|cr|nm|ps)$/
      , Uw = /^pr([0-9]{0,3})([a-z]{2}[0-9]{0,3})$/
      , Xw = /^il([0-9]{0,3})pi([0-9]{0,3})([a-z]{2}[0-9]{0,3})$/
      , fx = /^il([1-9][0-9]{0,2})nm$/
      , gx = function(a) {
        var b = el().filter(function(aa) {
            return 0 === aa.indexOf("G-")
        });
        if (b.length) {
            var c = {}
              , d = function(aa, X) {
                void 0 !== X && void 0 === c[aa] && (c[aa] = X)
            }
              , e = {}
              , f = function(aa, X) {
                void 0 !== X && void 0 === e[aa] && (e[aa] = X)
            }
              , g = a.hitPayload;
            if ("string" !== typeof g)
                N(126);
            else {
                for (var h = {}, l = [], n = [], p = [], q = [], r = g.split("&"), t = 0; t < r.length; ++t) {
                    var u = r[t].split("=")
                      , v = u[0] || ""
                      , w = decodeURIComponent(u[1] || "");
                    if ("" !== v && "" !== w)
                        if (ex[v] && !h[v])
                            h[v] = w;
                        else if (dx[v])
                            f(dx[v], w);
                        else {
                            var x = bx(v);
                            if (x)
                                d(x, w);
                            else {
                                var y = v.match(fx);
                                if (y) {
                                    var A = Number(y[1]) - 1;
                                    0 <= A && 200 > A && !q[A] && (q[A] = w)
                                } else
                                    Zw(v, w, l, n, p)
                            }
                        }
                }
                var B = Rw(h), D = B.ql, F = B.ol, J = B.pl, K = B.rl, P;
                if (h.pa || h.promoa || l.length || p.length || !D)
                    P = Qw(h, l, p);
                P && h.tr && f(O.g.da, h.tr);
                var Q;
                P === O.g.sb || P === O.g.ab ? Q = l : P === O.g.Za ? (Ow(p, q),
                Q = Array.prototype.concat.apply([], p)) : P && (Q = n);
                Q && Q.length && f(O.g.X, Q.filter(function(aa) {
                    return !!aa
                }));
                if (D || P) {
                    d(O.g.nk, F);
                    d(O.g.pk, J);
                    d(O.g.da, K);
                    d(O.g.af, a.allowAdFeatures);
                    d(O.g.ba, a.allowAdPersonalizationSignals);
                    d(O.g.Na, a.cookieDomain);
                    d(O.g.Ea, a.cookieExpires);
                    d(O.g.Oa, a.cookieFlags);
                    d(O.g.Tc, a.cookiePath);
                    d(O.g.La, "_ga" === a.cookieName ? void 0 : a.cookieName);
                    d(O.g.fb, a.cookieUpdate);
                    d(O.g.Ob, !0);
                    D && D !== P && Bw(Su(b, D, c));
                    var da = I(c);
                    I(e, da);
                    P && Bw(Su(b, P, da))
                } else
                    N(126)
            }
        }
    };
    var hx = function() {
        var a = kc("google_tag_data", {})
          , b = a.slq && a.slq[gl()] && a.slq[gl()].q;
        if (!Ja(b))
            return;
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            Uc(d) && gx(d)
        }
        b.length = 0;
        b.push = function() {
            for (var e = 0; e < arguments.length; e++) {
                var f = arguments[e];
                Uc(f) && gx(f)
            }
            return 0
        }
        ;
    };
    var Te = {};
    Te.yf = new String("undefined");
    var lx = function(a, b, c) {
        var d = {
            event: b,
            "gtm.element": a,
            "gtm.elementClasses": Ac(a, "className"),
            "gtm.elementId": a["for"] || vc(a, "id") || "",
            "gtm.elementTarget": a.formTarget || Ac(a, "target") || ""
        };
        c && (d["gtm.triggers"] = c.join(","));
        d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Ac(a, "href") || a.src || a.code || a.codebase || "";
        return d
    }
      , mx = function(a) {
        Lh.hasOwnProperty("autoEventsSettings") || (Lh.autoEventsSettings = {});
        var b = Lh.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] = {});
        return b[a]
    }
      , nx = function(a, b, c) {
        mx(a)[b] = c
    }
      , ox = function(a, b, c, d) {
        var e = mx(a)
          , f = Wa(e, b, d);
        e[b] = c(f)
    }
      , px = function(a, b, c) {
        var d = mx(a);
        return Wa(d, b, c)
    }
      , qx = function(a) {
        return "string" === typeof a ? a : String(ei())
    };
    var Kx = z.clearTimeout
      , Lx = z.setTimeout
      , V = function(a, b, c, d) {
        if ($m()) {
            b && H(b)
        } else
            return pc(a, b, c, d)
    }
      , Mx = function() {
        return new Date
    }
      , Nx = function() {
        return z.location.href
    }
      , Ox = function(a) {
        return $i(bj(a), "fragment")
    }
      , Px = function(a) {
        return aj(bj(a))
    }
      , Qx = function(a, b) {
        return ki(a, b || 2)
    }
      , Rx = function(a, b, c) {
        return b ? Cw(a, b, c) : Bw(a)
    }
      , Sx = function(a, b) {
        z[a] = b
    }
      , W = function(a, b, c) {
        b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
        return z[a]
    }
      , Tx = function(a, b, c) {
        return ym(a, b, void 0 === c ? !0 : !!c)
    }
      , Ux = function(a, b, c) {
        return 0 === Qm(a, b, c)
    }
      , Vx = function(a, b) {
        if ($m()) {
            b && H(b)
        } else
            rc(a, b)
    }
      , Wx = function(a) {
        return !!px(a, "init", !1)
    }
      , Xx = function(a) {
        nx(a, "init", !0)
    }
      , Yx = function(a, b, c) {
        Yc(a) || gu(c, b, a)
    };
    function wy(a, b) {
        function c(g) {
            var h = bj(g)
              , l = $i(h, "protocol")
              , n = $i(h, "host", !0)
              , p = $i(h, "port")
              , q = $i(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" === l && "80" === p || "https" === l && "443" === p)
                l = "web",
                p = "default";
            return [l, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f])
                return !1;
        return !0
    }
    function xy(a) {
        return yy(a) ? 1 : 0
    }
    function yy(a) {
        var b = a.arg0
          , c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = I(a, {});
                I({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (xy(e))
                    return !0
            }
            return !1
        }
        switch (a["function"]) {
        case "_cn":
            return Tf(b, c);
        case "_css":
            var f;
            a: {
                if (b)
                    try {
                        for (var g = 0; g < Pf.length; g++) {
                            var h = Pf[g];
                            if (b[h]) {
                                f = b[h](c);
                                break a
                            }
                        }
                    } catch (l) {}
                f = !1
            }
            return f;
        case "_ew":
            return Qf(b, c);
        case "_eq":
            return Uf(b, c);
        case "_ge":
            return Vf(b, c);
        case "_gt":
            return Xf(b, c);
        case "_lc":
            return 0 <= String(b).split(",").indexOf(String(c));
        case "_le":
            return Wf(b, c);
        case "_lt":
            return Yf(b, c);
        case "_re":
            return Sf(b, c, a.ignore_case);
        case "_sw":
            return Zf(b, c);
        case "_um":
            return wy(b, c)
        }
        return !1
    }
    ;var zy;
    function Ay(a) {
        if (void 0 === zy)
            return "";
        var b = "&ccy=" + zy;
        a.Gb && (zy = void 0);
        return b
    }
    ;function By() {
        var a = ["&cv=1", "&rv=" + Kh.ah, "&tc=" + Oe.filter(function(b) {
            return b
        }).length];
        Kh.ne && a.push("&x=" + Kh.ne);
        return a.join("")
    }
    ;function Cy() {
        function a(c, d) {
            var e = zb(d);
            e && b.push(c + "=" + e)
        }
        var b = [];
        a("&u", "GTM");
        a("&ut", "TAGGING");
        a("&h", "HEALTH");
        return b.join("")
    }
    ;var Dy;
    function Ey(a, b, c) {
        Dy = Dy || new Sg;
        Dy.add(a, b, c)
    }
    function Fy(a, b) {
        var c = Dy = Dy || new Sg;
        if (c.m.hasOwnProperty(a))
            throw "Attempting to add a private function which already exists: " + a + ".";
        if (c.h.hasOwnProperty(a))
            throw "Attempting to add a private function with an existing API name: " + a + ".";
        c.m[a] = Ga(b) ? lg(a, b) : mg(a, b)
    }
    function Gy() {
        return function(a) {
            var b;
            var c = Dy;
            if (c.h.hasOwnProperty(a))
                b = c.get(a, this);
            else {
                var d;
                if (d = c.m.hasOwnProperty(a)) {
                    var e = !1
                      , f = this.h.h;
                    if (f) {
                        var g = f.jd();
                        if (g) {
                            0 !== g.indexOf("__cvt_") && (e = !0);
                        }
                    } else
                        e = !0;
                    d = e
                }
                if (d) {
                    var h = c.m.hasOwnProperty(a) ? c.m[a] : void 0;
                    b = h
                } else
                    throw Error(a + " is not a valid API name.");
            }
            return b
        }
    }
    ;function Hy(a, b) {
        var c = this;
    }
    Hy.K = "addConsentListener";
    var Iy;
    var Jy = function(a) {
        for (var b = 0; b < a.length; ++b)
            if (Iy)
                try {
                    a[b]()
                } catch (c) {
                    N(77)
                }
            else
                a[b]()
    };
    function Ky(a, b, c) {
        var d = this, e;
        L(E(this), ["eventName:!string", "callback:!Fn", "triggerId:?string"], arguments),
        Jy([function() {
            return M(d, "listen_data_layer", a)
        }
        ]),
        e = ov().addListener(a, Wc(b), c);
        return e
    }
    Ky.H = "internal.addDataLayerEventListener";
    function Ly(a, b, c) {}
    Ly.K = "addDocumentEventListener";
    function My(a, b, c, d) {}
    My.K = "addElementEventListener";
    function Ny(a) {}
    Ny.K = "addEventCallback";
    function Ry(a) {}
    Ry.H = "internal.addFormAbandonmentListener";
    function Sy(a, b, c, d) {}
    Sy.H = "internal.addFormData";
    var Ty = {}
      , Uy = []
      , Vy = {}
      , Wy = 0
      , Xy = 0;
    function dz(a, b) {}
    dz.H = "internal.addFormInteractionListener";
    function kz(a, b) {}
    kz.H = "internal.addFormSubmitListener";
    function pz(a) {}
    pz.H = "internal.addGaSendListener";
    var qz = function(a, b) {
        this.tagId = a;
        this.h = b
    };
    function rz(a, b, c) {
        var d = this;
    }
    rz.H = "internal.loadGoogleTag";
    function sz(a, b, c) {}
    sz.H = "internal.addGoogleTagRestriction";
    var tz = {}
      , uz = [];
    var Bz = function(a, b) {};
    Bz.H = "internal.addHistoryChangeListener";
    function Cz(a, b, c) {}
    Cz.K = "addWindowEventListener";
    function Dz(a, b) {
        return !0
    }
    Dz.K = "aliasInWindow";
    function Ez(a, b, c) {}
    Ez.H = "internal.appendRemoteConfigParameter";
    function Fz() {
        var a = 2;
        return a
    }
    ;function Gz(a, b) {
        var c;
        return c
    }
    Gz.K = "callInWindow";
    function Hz(a) {}
    Hz.K = "callLater";
    function Iz(a) {}
    Iz.H = "callOnDomReady";
    function Jz(a) {}
    Jz.H = "callOnWindowLoad";
    function Kz(a) {
        var b;
        return b
    }
    Kz.H = "internal.computeGtmParameter";
    function Lz(a, b) {
        var c;
        var d = Vc(c, this.h, Fz());
        void 0 === d && void 0 !== c && N(45);
        return d
    }
    Lz.K = "copyFromDataLayer";
    function Mz(a) {
        var b;
        return b
    }
    Mz.K = "copyFromWindow";
    function Nz(a, b) {
        var c;
        L(E(this), ["preHit:!DustMap", "dustOptions:?DustMap"], arguments);
        var d = Wc(b) || {}
          , e = Wc(a, this.h, 1).Pf()
          , f = e.h;
        d.omitEventContext && (f = dm(new Tl(e.h.eventId,e.h.priorityId)));
        var g = new Vp(e.target,e.eventName,f);
        d.omitHitData || I(e.m, g.m);
        d.omitMetadata ? g.metadata = {} : I(e.metadata, g.metadata);
        g.isAborted = e.isAborted;
        c = Vc(Xp(g), this.h, 1);
        return c
    }
    Nz.H = "internal.copyPreHit";
    function Oz(a, b) {
        var c = null
          , d = Fz();
        return Vc(c, this.h, d)
    }
    Oz.K = "createArgumentsQueue";
    function Pz(a) {
        var b;
        return Vc(b, this.h, Fz())
    }
    Pz.K = "createQueue";
    function Qz(a, b) {
        var c = null;
        L(E(this), ["pattern:!string", "flags:?string"], arguments);
        try {
            var d = (b || "").split("").filter(function(e) {
                return "ig".includes(e)
            }).join("");
            c = new Oc(new RegExp(a,d))
        } catch (e) {}
        return c
    }
    Qz.H = "internal.createRegex";
    function Rz(a) {
        if (!a)
            return {};
        var b = a.Xk;
        return Ct(b.type, b.index, b.name)
    }
    function Sz(a) {
        return a ? {
            originatingEntity: Rz(a)
        } : {}
    }
    ;function Tz(a) {}
    Tz.H = "internal.declareConsentState";
    var Uz = {}
      , Vz = []
      , Wz = {}
      , Xz = 0
      , Yz = 0;
    function dA(a, b) {
        var c = this;
        return b
    }
    dA.H = "internal.enableAutoEventOnFormInteraction";
    function iA(a, b) {
        var c = this;
        return b
    }
    iA.H = "internal.enableAutoEventOnFormSubmit";
    function nA() {
        var a = this;
    }
    nA.H = "internal.enableAutoEventOnGaSend";
    var oA = {}
      , pA = [];
    function wA(a, b) {
        var c = this;
        return b
    }
    wA.H = "internal.enableAutoEventOnHistoryChange";
    var xA = function(a, b) {
        if (2 === a.which || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey)
            return !1;
        var c = Ac(b, "href")
          , d = c.indexOf("#")
          , e = Ac(b, "target");
        if (e && "_self" !== e && "_parent" !== e && "_top" !== e || 0 === d)
            return !1;
        if (0 < d) {
            var f = aj(bj(c))
              , g = aj(bj(z.location.href));
            return f !== g
        }
        return !0
    }
      , yA = function(a, b) {
        for (var c = $i(bj((b.attributes && b.attributes.formaction ? b.formAction : "") || b.action || Ac(b, "href") || b.src || b.code || b.codebase || ""), "host"), d = 0; d < a.length; d++)
            try {
                if ((new RegExp(a[d])).test(c))
                    return !1
            } catch (e) {}
        return !0
    }
      , zA = function() {
        var a = 0
          , b = function(c) {
            var d = c.target;
            if (d && 3 !== c.which && !(c.wh || c.timeStamp && c.timeStamp === a)) {
                a = c.timeStamp;
                d = yc(d, ["a", "area"], 100);
                if (!d)
                    return c.returnValue;
                var e = c.defaultPrevented || !1 === c.returnValue, f = px("aelc", e ? "nv.mwt" : "mwt", 0), g;
                g = e ? px("aelc", "nv.ids", []) : px("aelc", "ids", []);
                for (var h = [], l = 0; l < g.length; l++) {
                    var n = g[l]
                      , p = px("aelc", "aff.map", {})[n];
                    p && !yA(p, d) || h.push(n)
                }
                if (h.length) {
                    var q = xA(c, d)
                      , r = lx(d, "gtm.linkClick", h);
                    r["gtm.elementText"] = wc(d);
                    r["gtm.willOpenInNewWindow"] = !q;
                    if (q && !e && f && d.href) {
                        var t = !!Ka(String(Ac(d, "rel") || "").split(" "), function(x) {
                            return "noreferrer" === x.toLowerCase()
                        })
                          , u = z[(Ac(d, "target") || "_self").substring(1)]
                          , v = !0
                          , w = Dw(function() {
                            var x;
                            if (x = v && u) {
                                var y;
                                a: if (t) {
                                    var A;
                                    try {
                                        A = new MouseEvent(c.type,{
                                            bubbles: !0
                                        })
                                    } catch (B) {
                                        if (!G.createEvent) {
                                            y = !1;
                                            break a
                                        }
                                        A = G.createEvent("MouseEvents");
                                        A.initEvent(c.type, !0, !0)
                                    }
                                    A.wh = !0;
                                    c.target.dispatchEvent(A);
                                    y = !0
                                } else
                                    y = !1;
                                x = !y
                            }
                            x && (u.location.href = Ac(d, "href"))
                        }, f);
                        if (Cw(r, w, f))
                            v = !1;
                        else
                            return c.preventDefault && c.preventDefault(),
                            c.returnValue = !1
                    } else
                        Cw(r, function() {}, f || 2E3);
                    return !0
                }
            }
        };
        tc(G, "click", b, !1);
        tc(G, "auxclick", b, !1)
    };
    function AA(a, b) {
        var c = this;
        L(E(this), ["dustOptions:?DustMap", "triggerId:?*"], arguments);
        var d = Wc(a);
        S(82) ? Jy([function() {
            return M(c, "detect_link_click_events", d)
        }
        ]) : Jy([function() {
            return M(c, "process_dom_events", "document", "click")
        }
        , function() {
            return M(c, "process_dom_events", "document", "auxclick")
        }
        ]);
        var e = d && !!d.waitForTags
          , f = d && !!d.checkValidation
          , g = d ? d.affiliateDomains : void 0;
        b = qx(b);
        if (e) {
            var h = Number(d.waitForTagsTimeout);
            0 < h && isFinite(h) || (h = 2E3);
            var l = function(p) {
                return Math.max(h, p)
            };
            ox("aelc", "mwt", l, 0);
            f || ox("aelc", "nv.mwt", l, 0)
        }
        var n = function(p) {
            p.push(b);
            return p
        };
        ox("aelc", "ids", n, []);
        f || ox("aelc", "nv.ids", n, []);
        g && ox("aelc", "aff.map", function(p) {
            p[b] = g;
            return p
        }, {});
        px("aelc", "init", !1) || (zA(),
        nx("aelc", "init", !0));
        return b
    }
    AA.H = "internal.enableAutoEventOnLinkClick";
    var BA, CA;
    var DA = function(a) {
        return px("sdl", a, {})
    }
      , EA = function(a, b, c) {
        b && (Array.isArray(a) || (a = [a]),
        ox("sdl", c, function(d) {
            for (var e = 0; e < a.length; e++) {
                var f = String(a[e]);
                d.hasOwnProperty(f) || (d[f] = []);
                d[f].push(b)
            }
            return d
        }, {}))
    }
      , HA = function() {
        var a = 250
          , b = !1;
        G.scrollingElement && G.documentElement && z.addEventListener && (a = 50,
        b = !0);
        var c = 0
          , d = !1
          , e = function() {
            d ? c = z.setTimeout(e, a) : (c = 0,
            FA(),
            px("sdl", "init", !1) && !GA() && (uc(z, "scroll", f),
            uc(z, "resize", f),
            nx("sdl", "init", !1)));
            d = !1
        }
          , f = function() {
            b && BA();
            c ? d = !0 : (c = z.setTimeout(e, a),
            nx("sdl", "pending", !0))
        };
        return f
    }
      , FA = function() {
        var a = BA()
          , b = a.mh
          , c = a.nh
          , d = b / CA.scrollWidth * 100
          , e = c / CA.scrollHeight * 100;
        IA(b, "horiz.pix", "PIXELS", "horizontal");
        IA(d, "horiz.pct", "PERCENT", "horizontal");
        IA(c, "vert.pix", "PIXELS", "vertical");
        IA(e, "vert.pct", "PERCENT", "vertical");
        nx("sdl", "pending", !1)
    }
      , IA = function(a, b, c, d) {
        var e = DA(b), f = {}, g;
        for (g in e) {
            f.Jc = g;
            if (e.hasOwnProperty(f.Jc)) {
                var h = Number(f.Jc);
                if (!(a < h)) {
                    var l = {};
                    Bw((l.event = "gtm.scrollDepth",
                    l["gtm.scrollThreshold"] = h,
                    l["gtm.scrollUnits"] = c.toLowerCase(),
                    l["gtm.scrollDirection"] = d,
                    l["gtm.triggers"] = e[f.Jc].join(","),
                    l));
                    ox("sdl", b, function(n) {
                        return function(p) {
                            delete p[n.Jc];
                            return p
                        }
                    }(f), {})
                }
            }
            f = {
                Jc: f.Jc
            }
        }
    }
      , KA = function() {
        ox("sdl", "scr", function(a) {
            a || (a = G.scrollingElement || G.body && G.body.parentNode);
            return CA = a
        }, !1);
        ox("sdl", "depth", function(a) {
            a || (a = JA());
            return BA = a
        }, !1)
    }
      , JA = function() {
        var a = 0
          , b = 0;
        return function() {
            var c = Ni()
              , d = c.height;
            a = Math.max(CA.scrollLeft + c.width, a);
            b = Math.max(CA.scrollTop + d, b);
            return {
                mh: a,
                nh: b
            }
        }
    }
      , GA = function() {
        return !!(Object.keys(DA("horiz.pix")).length || Object.keys(DA("horiz.pct")).length || Object.keys(DA("vert.pix")).length || Object.keys(DA("vert.pct")).length)
    };
    function LA(a, b) {
        var c = this;
        L(E(this), ["options:!DustMap", "triggerId:?*"], arguments);
        Jy([function() {
            return M(c, "process_dom_events", "window", "resize")
        }
        , function() {
            return M(c, "process_dom_events", "window", "scroll")
        }
        ]);
        KA();
        if (!CA)
            return;
        b = qx(b);
        var d = Wc(a);
        switch (d.horizontalThresholdUnits) {
        case "PIXELS":
            EA(d.horizontalThresholds, b, "horiz.pix");
            break;
        case "PERCENT":
            EA(d.horizontalThresholds, b, "horiz.pct")
        }
        switch (d.verticalThresholdUnits) {
        case "PIXELS":
            EA(d.verticalThresholds, b, "vert.pix");
            break;
        case "PERCENT":
            EA(d.verticalThresholds, b, "vert.pct")
        }
        px("sdl", "init", !1) ? px("sdl", "pending", !1) || H(function() {
            return FA()
        }) : (nx("sdl", "init", !0),
        nx("sdl", "pending", !0),
        H(function() {
            FA();
            if (GA()) {
                var e = HA();
                tc(z, "scroll", e);
                tc(z, "resize", e)
            } else
                nx("sdl", "init", !1)
        }));
        return b
    }
    LA.H = "internal.enableAutoEventOnScroll";
    var dc = ea(["data-gtm-yt-inspected-"]), MA = ["www.youtube.com", "www.youtube-nocookie.com"], NA, OA = !1;
    function YA(a, b) {
        var c = this;
        return b
    }
    YA.H = "internal.enableAutoEventOnYouTubeActivity";
    var ZA;
    function $A(a) {
        var b = !1;
        return b
    }
    $A.H = "internal.evaluateMatchingRules";
    var aB = function(a) {
        var b = a[O.g.nf];
        if (b)
            return b;
        var c = a[O.g.ia];
        if (k(c)) {
            if (Ga(URL))
                try {
                    return (new URL(c)).hostname
                } catch (e) {
                    return
                }
            var d = bj(c);
            if (d.hostname)
                return $i(d, "host")
        }
    }
      , cB = function(a, b, c) {
        if (c)
            switch (c.type) {
            case "event_name":
                return a;
            case "const":
                return c.const_value;
            case "event_param":
                var d = c.event_param.param_name;
                if (d === O.g.Qb)
                    return bB(b);
                return d === O.g.nf ? aB(b) : b[d]
            }
    };
    var bB = function(a) {
        var b = a[O.g.Qb];
        if (b)
            return b;
        var c = a[O.g.ia];
        if (k(c)) {
            var d = S(25);
            if (Ga(URL))
                try {
                    var e = new URL(c);
                    return e.pathname + dB(d ? e.search : "")
                } catch (h) {
                    return
                }
            var f = bj(c);
            if (f.hostname) {
                var g = d ? $i(f, "query") : "";
                g && (g = "?" + g);
                return $i(f, "path") + dB(g)
            }
        }
    }
      , dB = function(a) {
        if (!S(34) || !a)
            return a;
        var b = a.split("&")
          , c = [];
        b[0] = b[0].substring(1);
        for (var d = 0; d < b.length; d++) {
            var e = b[d]
              , f = e.indexOf("=");
            eB[0 <= f ? e.substring(0, f) : e] || c.push(b[d])
        }
        return c.length ? "?" + c.join("&") : ""
    }
      , eB = Object.freeze({
        __utma: 1,
        __utmb: 1,
        __utmc: 1,
        __utmk: 1,
        __utmv: 1,
        __utmx: 1,
        __utmz: 1,
        __ga: 1,
        _gac: 1,
        _gl: 1,
        dclid: 1,
        gbraid: 1,
        gclid: 1,
        gclsrc: 1,
        utm_campaign: 1,
        utm_content: 1,
        utm_expid: 1,
        utm_id: 1,
        utm_medium: 1,
        utm_nooverride: 1,
        utm_referrer: 1,
        utm_source: 1,
        utm_term: 1,
        wbraid: 1
    });
    function fB(a, b) {
        var c = !1;
        return c
    }
    fB.H = "internal.evaluatePredicates";
    var VB = function() {
        var a = !0;
        Qn(7) && Qn(9) && Qn(10) || (a = !1);
        return a
    }
      , WB = function() {
        var a = !0;
        Qn(3) && Qn(4) || (a = !1);
        return a
    };
    function RC(a, b, c, d) {}
    RC.H = "internal.executeEventProcessor";
    var SC = function(a) {
        var b;
        return b
    };
    function TC(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        return c
    }
    TC.K = "getCookieValues";
    function UC() {
        return ui()
    }
    UC.H = "internal.getCountryCode";
    function VC() {
        var a = [];
        a = el();
        return Vc(a)
    }
    VC.H = "internal.getDestinationIds";
    function WC(a) {
        var b = null;
        return b
    }
    WC.K = "getElementById";
    var XC = {};
    XC.deferGaGamLink = S(72);
    XC.enableAddFormDataApi = S(70);
    XC.enableAddGoogleTagRestrictionApi = S(44);
    XC.enableAdsConversionValidation = S(41);
    XC.enableAdsHistoryChangeEvents = S(17);
    XC.enableAutoPiiOnPhoneAndAddress = S(59);
    XC.enableCcdAutoRedaction = S(45);
    XC.enableCcdPreAutoPiiDetection = S(21);
    XC.enableCcdUserData = S(10);
    XC.enableConsentDisclosureActivity = S(67);
    XC.enableDeferAllEnhancedMeasurement = S(69);
    XC.enableEesPagePath = S(19);
    XC.enableEuidAutoMode = S(18);
    XC.enableFormSkipValidation = S(61);
    XC.enableGa4OnoRemarketing = S(16);
    XC.enableMergeRemoteConfigApi = S(80);
    XC.enableRemoveFormDataApi = S(71);
    XC.includeQueryInEesPagePath = S(25);
    XC.pixieSetCorePlatformServices = S(53);
    XC.useEnableAutoEventOnFormApis = S(44);
    XC.autoPiiEligible = zi();
    function YC() {
        return Vc(XC)
    }
    YC.H = "internal.getFlags";
    function ZC(a, b) {
        var c;
        L(E(this), ["targetId:!string", "name:!string"], arguments);
        var d = Ki(a) || {};
        c = Vc(d[b], this.h);
        return c
    }
    ZC.H = "internal.getProductSettingsParameter";
    function $C(a, b) {
        var c;
        L(E(this), ["queryKey:!string", "retrieveAll:?boolean"], arguments);
        M(this, "get_url", "query", a);
        var d = $i(bj(z.location.href), "query")
          , e = Xi(d, a, b);
        c = Vc(e, this.h);
        return c
    }
    $C.K = "getQueryParameters";
    function aD(a, b) {
        var c;
        return c
    }
    aD.K = "getReferrerQueryParameters";
    function bD(a) {
        var b = "";
        return b
    }
    bD.K = "getReferrerUrl";
    function cD() {
        return vi()
    }
    cD.H = "internal.getRegionCode";
    function dD(a, b) {
        var c;
        L(E(this), ["targetId:!string", "name:!string"], arguments);
        var d = Cv(a);
        c = Vc(d[b], this.h);
        return c
    }
    dD.H = "internal.getRemoteConfigParameter";
    function eD(a) {
        var b = "";
        L(E(this), ["component:?string"], arguments),
        M(this, "get_url", a),
        b = $i(bj(z.location.href), a);
        return b
    }
    eD.K = "getUrl";
    function fD() {
        M(this, "get_user_agent");
        return ic.userAgent
    }
    fD.K = "getUserAgent";
    var gD = function(a) {
        var b = !1;
        b = Wp(a, "google_ono", !1);
        return b
    }
      , hD = function(a) {
        if (a.metadata.is_merchant_center || !Ts(a.h))
            return !1;
        if (!T(a.h, O.g.rf)) {
            var b = T(a.h, O.g.Md);
            return !0 === b || "true" === b
        }
        return !0
    }
      , iD = function(a) {
        var b = a.metadata.user_data;
        if (Uc(b))
            return b
    }
      , jD = function(a, b) {
        var c = Wp(a, O.g.Kd, a.h.B[O.g.Kd]);
        if (c && void 0 !== c[b || a.eventName])
            return c[b || a.eventName]
    }
      , kD = function(a, b, c) {
        a.m[O.g.oe] || (a.m[O.g.oe] = {});
        a.m[O.g.oe][b] = c
    };
    var lD = !1
      , mD = function(a) {
        var b = a.eventName === O.g.fc && zk() && hD(a)
          , c = a.metadata.batch_on_navigation
          , d = a.metadata.is_conversion
          , e = a.metadata.is_session_start
          , f = a.metadata.create_dc_join
          , g = a.metadata.create_google_join
          , h = a.metadata.euid_mode_enabled && !!iD(a);
        return !(!ic.sendBeacon || d || h || e || f || g || b || !c && lD)
    };
    var nD = function(a) {
        var b = 0
          , c = 0;
        return {
            start: function() {
                b = Va()
            },
            stop: function() {
                c = this.get()
            },
            get: function() {
                var d = 0;
                a.yh() && (d = Va() - b);
                return d + c
            }
        }
    }
      , oD = function() {
        this.h = void 0;
        this.m = 0;
        this.isActive = this.isVisible = this.B = !1;
        this.J = this.C = void 0
    };
    ba = oD.prototype;
    ba.yk = function(a) {
        var b = this;
        if (!this.h) {
            this.B = G.hasFocus();
            this.isVisible = !G.hidden;
            this.isActive = !0;
            var c = function(d, e, f) {
                tc(d, e, function(g) {
                    b.h.stop();
                    f(g);
                    b.yh() && b.h.start()
                })
            };
            c(z, "focus", function() {
                b.B = !0
            });
            c(z, "blur", function() {
                b.B = !1
            });
            c(z, "pageshow", function(d) {
                b.isActive = !0;
                d.persisted && N(56);
                b.J && b.J()
            });
            c(z, "pagehide", function() {
                b.isActive = !1;
                b.C && b.C()
            });
            c(G, "visibilitychange", function() {
                b.isVisible = !G.hidden
            });
            hD(a) && -1 === (ic.userAgent || "").indexOf("Firefox") && -1 === (ic.userAgent || "").indexOf("FxiOS") && c(z, "beforeunload", function() {
                lD = !0
            });
            this.Sh();
            this.m = 0
        }
    }
    ;
    ba.Sh = function() {
        this.m += this.Of();
        this.h = nD(this);
        this.yh() && this.h.start()
    }
    ;
    ba.Am = function(a) {
        var b = this.Of();
        0 < b && (a.m[O.g.Id] = b)
    }
    ;
    ba.sl = function(a) {
        a.m[O.g.Id] = void 0;
        this.Sh();
        this.m = 0
    }
    ;
    ba.yh = function() {
        return this.B && this.isVisible && this.isActive
    }
    ;
    ba.kl = function() {
        return this.m + this.Of()
    }
    ;
    ba.Of = function() {
        return this.h && this.h.get() || 0
    }
    ;
    ba.fm = function(a) {
        this.C = a
    }
    ;
    ba.Lj = function(a) {
        this.J = a
    }
    ;
    var pD = function(a) {
        xb("GA4_EVENT", a)
    };
    function qD() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var rD = function() {
        var a = qD();
        a.hid = a.hid || La();
        return a.hid
    }
      , sD = function(a, b) {
        var c = qD();
        if (void 0 == c.vid || b && !c.from_cookie)
            c.vid = a,
            c.from_cookie = b
    };
    var tD = function(a, b, c) {
        var d = a.metadata.client_id_source;
        if (void 0 === d || c <= d)
            a.m[O.g.cb] = b,
            a.metadata.client_id_source = c
    }
      , wD = function(a, b) {
        var c;
        var d = b.metadata.cookie_options
          , e = d.prefix + "_ga"
          , f = io(d, void 0, void 0, O.g.O);
        if (!1 === T(b.h, O.g.fb) && uD(b) === a)
            c = !0;
        else {
            var g = Ym(a, vD[0], d.domain, d.path);
            c = 1 !== Qm(e, g, f)
        }
        return c
    }
      , uD = function(a) {
        var b = a.metadata.cookie_options
          , c = b.prefix + "_ga"
          , d = Xm(c, b.domain, b.path, vD, O.g.O);
        if (!d) {
            var e = String(T(a.h, O.g.ic, ""));
            e && e != c && (d = Xm(e, b.domain, b.path, vD, O.g.O))
        }
        return d
    }
      , vD = ["GA1"]
      , xD = function(a, b) {
        var c = a.m[O.g.cb];
        if (T(a.h, O.g.yb) && T(a.h, O.g.Ob) || b && c === b)
            return c;
        if (c) {
            c = "" + c;
            if (!wD(c, a))
                return N(31),
                a.isAborted = !0,
                "";
            sD(c, wk(O.g.O));
            return c
        }
        N(32);
        a.isAborted = !0;
        return ""
    };
    var AD = function(a, b, c) {
        if (!b)
            return a;
        if (!a)
            return b;
        var d = yD(a);
        if (!d)
            return b;
        var e, f = Qa(null != (e = T(c.h, O.g.ad)) ? e : 30);
        if (!(Math.floor(c.metadata.event_start_timestamp_ms / 1E3) > d.Ee + 60 * f))
            return a;
        var g = yD(b);
        if (!g)
            return a;
        g.Ec = d.Ec + 1;
        var h;
        return null != (h = zD(g.sessionId, g.Ec, g.md, g.Ee, g.Ch, g.Cc, g.ue)) ? h : b
    }
      , DD = function(a, b) {
        var c = b.metadata.cookie_options
          , d = BD(b, c)
          , e = Ym(a, CD[0], c.domain, c.path)
          , f = {
            Fb: O.g.O,
            domain: c.domain,
            path: c.path,
            expires: c.Db ? new Date(Va() + 1E3 * c.Db) : void 0,
            flags: c.flags
        };
        Qm(d, void 0, f);
        return 1 !== Qm(d, e, f)
    }
      , ED = function(a) {
        var b = a.metadata.cookie_options
          , c = BD(a, b)
          , d = Xm(c, b.domain, b.path, CD, O.g.O);
        if (!d)
            return d;
        var e = ym(c, void 0, void 0, O.g.O);
        if (d && 1 < e.length) {
            N(114);
            for (var f = void 0, g = void 0, h = 0; h < e.length; h++) {
                var l = e[h].split(".");
                if (!(7 > l.length)) {
                    var n = Number(l[5]);
                    n && (!g || n > g) && (g = n,
                    f = e[h])
                }
            }
            f && !f.endsWith(d) && (N(115),
            d = f.split(".").slice(2).join("."))
        }
        return d
    }
      , zD = function(a, b, c, d, e, f, g) {
        if (a && b) {
            var h = [a, b, Qa(c), d, e];
            h.push(f ? "1" : "0");
            h.push(g || "0");
            return h.join(".")
        }
    }
      , CD = ["GS1"]
      , BD = function(a, b) {
        return b.prefix + "_ga_" + a.target.I[0]
    }
      , yD = function(a) {
        if (a) {
            var b = a.split(".");
            if (!(5 > b.length || 7 < b.length)) {
                7 > b.length && N(67);
                var c = Number(b[1])
                  , d = Number(b[3])
                  , e = Number(b[4] || 0);
                c || N(118);
                d || N(119);
                isNaN(e) && N(120);
                if (!S(35) || c && d && !isNaN(e))
                    return {
                        sessionId: b[0],
                        Ec: c,
                        md: !!Number(b[2]),
                        Ee: d,
                        Ch: e,
                        Cc: "1" === b[5],
                        ue: "0" !== b[6] ? b[6] : void 0
                    }
            }
        }
    }
      , FD = function(a) {
        return zD(a.m[O.g.jb], a.m[O.g.Vd], a.m[O.g.Ud], Math.floor(a.metadata.event_start_timestamp_ms / 1E3), a.metadata.join_timer_sec || 0, !!a.metadata[O.g.ff], a.m[O.g.Wc])
    };
    var GD = function(a) {
        var b = T(a.h, O.g.Aa)
          , c = a.h.B[O.g.Aa];
        if (c === b)
            return c;
        var d = I(b);
        c && c[O.g.T] && (d[O.g.T] = (d[O.g.T] || []).concat(c[O.g.T]));
        return d
    }
      , HD = function(a, b) {
        var c = Bo(!0);
        return "1" !== c._up ? {} : {
            clientId: c[a],
            Zf: c[b]
        }
    }
      , ID = function(a, b, c) {
        var d = Bo(!0)
          , e = d[b];
        e && (tD(a, e, 2),
        wD(e, a));
        var f = d[c];
        f && DD(f, a);
        return {
            clientId: e,
            Zf: f
        }
    }
      , JD = !1
      , KD = function(a) {
        var b = GD(a) || {}
          , c = a.metadata.cookie_options
          , d = c.prefix + "_ga"
          , e = BD(a, c)
          , f = {};
        Ko(b[O.g.oc], !!b[O.g.T]) && (f = ID(a, d, e),
        f.clientId && f.Zf && (JD = !0));
        b[O.g.T] && Ho(function() {
            var g = {}
              , h = uD(a);
            h && (g[d] = h);
            var l = ED(a);
            l && (g[e] = l);
            var n = ym("FPLC", void 0, void 0, O.g.O);
            n.length && (g._fplc = n[0]);
            return g
        }, b[O.g.T], b[O.g.Pb], !!b[O.g.zb]);
        return f
    }
      , MD = function(a) {
        if (!T(a.h, O.g.kb))
            return {};
        var b = a.metadata.cookie_options
          , c = b.prefix + "_ga"
          , d = BD(a, b);
        Io(function() {
            var e;
            if (wk("analytics_storage"))
                e = {};
            else {
                var f = {};
                e = (f._up = "1",
                f[c] = a.m[O.g.cb],
                f[d] = FD(a),
                f)
            }
            return e
        }, 1);
        return !wk("analytics_storage") && LD() ? HD(c, d) : {}
    }
      , LD = function() {
        var a = Zi(z.location, "host")
          , b = Zi(bj(G.referrer), "host");
        return a && b ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1
    }
      , ND = function(a) {
        if (!a)
            return a;
        var b = String(a);
        b = Ao(b);
        return b = Ao(b, "_ga")
    };
    var OD = function() {
        var a = Va()
          , b = a + 864E5
          , c = 20
          , d = 5E3;
        return function() {
            var e = Va();
            e >= b && (b = e + 864E5,
            d = 5E3);
            if (1 > d)
                return !1;
            c = Math.min(c + (e - a) / 1E3 * 5, 20);
            a = e;
            if (1 > c)
                return !1;
            d--;
            c--;
            return !0
        }
    };
    var PD = function(a, b) {
        zk() && (a.gcs = lm(),
        S(54) && (a.gcd = pm()),
        b.metadata.is_consent_update && (a.gcu = "1"))
    }
      , SD = function(a) {
        if (a.metadata.is_merchant_center)
            return "https://www.merchant-center-analytics.goog/mc/collect";
        var b = Rs(Ts(a.h), "/g/collect");
        if (b)
            return b;
        var c = Wp(a, O.g.ib, T(a.h, O.g.ib));
        c = c || gD(a);
        var d = T(a.h, O.g.ub);
        return c && !wi() && !1 !== d && VB() && wk(O.g.F) && wk(O.g.O) ? QD() : RD()
    }
      , TD = !1;
    TD = !0;
    var UD = {};
    UD[O.g.cb] = "cid";
    UD[O.g.hf] = "_fid";
    UD[O.g.Bg] = "_geo";
    UD[O.g.xb] = "gdid";
    UD[O.g.Rd] = "ir";
    UD[O.g.za] = "ul";
    UD[O.g.Zc] = "_rdi";
    UD[O.g.Bb] = "sr";
    UD[O.g.Xi] = "tid";
    UD[O.g.vf] = "tt";
    UD[O.g.wf] = "ec_mode";
    UD[O.g.fj] = "gtm_up";
    UD[O.g.Xd] = "uaa",
    UD[O.g.Yd] = "uab",
    UD[O.g.Zd] = "uafvl",
    UD[O.g.ae] = "uamb",
    UD[O.g.be] = "uam",
    UD[O.g.ce] = "uap",
    UD[O.g.de] = "uapv",
    UD[O.g.ee] = "uaw";
    var VD = {};
    VD[O.g.Lc] = "cc";
    VD[O.g.Mc] = "ci";
    VD[O.g.Nc] = "cm";
    VD[O.g.Oc] = "cn";
    VD[O.g.Qc] = "cs";
    VD[O.g.Rc] = "ck";
    VD[O.g.sa] = "cu";
    VD[O.g.ia] = "dl";
    VD[O.g.Fa] = "dr";
    VD[O.g.Ab] = "dt";
    VD[O.g.Ud] = "seg";
    VD[O.g.jb] = "sid";
    VD[O.g.Vd] = "sct";
    VD[O.g.Ba] = "uid";
    S(40) && (VD[O.g.Qb] = "dp");
    var WD = {};
    WD[O.g.Id] = "_et";
    WD[O.g.wb] = "edid";
    var XD = {};
    XD[O.g.Lc] = "cc";
    XD[O.g.Mc] = "ci";
    XD[O.g.Nc] = "cm";
    XD[O.g.Oc] = "cn";
    XD[O.g.Qc] = "cs";
    XD[O.g.Rc] = "ck";
    var YD = {}
      , ZD = Object.freeze((YD[O.g.oa] = 1,
    YD))
      , RD = function() {
        var a = "www";
        TD && yi() && (a = yi());
        return "https://" + a + ".google-analytics.com/g/collect"
    }
      , QD = function() {
        var a;
        TD && "" !== yi() && (a = yi());
        return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect"
    }
      , $D = function(a, b, c) {
        var d = {}
          , e = {}
          , f = {};
        d.v = "2";
        d.tid = a.target.aa;
        gD(a) && !wi() && (d._ono = 1);
        d.gtm = bn();
        d._p = rD();
        c && (d.em = c);
        a.metadata.create_google_join && (d._gaz = 1);
        PD(d, a);
        S(56) && (Pk() && (d.dma_cps = qm()),
        xi() && (d.dma = "1"));
        var g = a.m[O.g.xb];
        g && (d.gdid = g);
        e.en = String(a.eventName);
        a.metadata.is_first_visit && (e._fv = a.metadata.is_first_visit_conversion ? 2 : 1);
        a.metadata.is_new_to_site && (e._nsi = 1);
        a.metadata.is_session_start && (e._ss = a.metadata.is_session_start_conversion ? 2 : 1);
        a.metadata.is_conversion && (e._c = 1);
        a.metadata.is_external_event && (e._ee = 1);
        if (a.metadata.is_ecommerce) {
            var h = a.m[O.g.X] || T(a.h, O.g.X);
            if (Ja(h))
                for (var l = 0; l < h.length && 200 > l; l++)
                    e["pr" + (l + 1)] = Ff(h[l])
        }
        var n = a.m[O.g.wb];
        n && (e.edid = n);
        var p = function(r, t) {
            if ("object" !== typeof t || !ZD[r]) {
                var u = "ep." + r
                  , v = "epn." + r;
                r = Ia(t) ? v : u;
                var w = Ia(t) ? u : v;
                e.hasOwnProperty(w) && delete e[w];
                e[r] = String(t)
            }
        };
        m(a.m, function(r, t) {
            if (void 0 !== t && !xh.hasOwnProperty(r)) {
                null === t && (t = "");
                var u;
                r !== O.g.Wc ? u = !1 : a.metadata.euid_mode_enabled ? (d.ecid = t,
                u = !0) : u = void 0;
                if (!u && r !== O.g.ff) {
                    var v = t;
                    !0 === t && (v = "1");
                    !1 === t && (v = "0");
                    v = String(v);
                    var w;
                    if (UD[r])
                        w = UD[r],
                        d[w] = v;
                    else if (VD[r])
                        w = VD[r],
                        f[w] = v;
                    else if (WD[r])
                        w = WD[r],
                        e[w] = v;
                    else if ("_" === r.charAt(0))
                        d[r] = v;
                    else {
                        var x;
                        XD[r] ? x = !0 : r !== O.g.Pc ? x = !1 : ("object" !== typeof t && p(r, t),
                        x = !0);
                        x || p(r, t)
                    }
                }
            }
        });
        (function(r) {
            hD(a) && "object" === typeof r && m(r || {}, function(t, u) {
                "object" !== typeof u && (d["sst." + t] = String(u))
            })
        }
        )(a.m[O.g.oe]);
        var q = a.m[O.g.Ra] || {};
        km(a.h) && WB() || (q._npa = "1");
        S(14) && !1 === T(a.h, O.g.ub) && (d.ngs = "1");
        m(q, function(r, t) {
            void 0 !== t && ((null === t && (t = ""),
            r !== O.g.Ba || f.uid) ? b[r] !== t && (e[(Ia(t) ? "upn." : "up.") + String(r)] = String(t),
            b[r] = t) : f.uid = String(t))
        });
        return Hf.call(this, {
            Sa: d,
            Fc: f,
            ph: e
        }, SD(a), hD(a)) || this
    };
    ra($D, Hf);
    var aE = function(a, b) {
        return a.replace(/\$\{([^\}]+)\}/g, function(c, d) {
            return b[d] || c
        })
    }
      , bE = function(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    }
      , cE = function(a) {
        var b = {}
          , c = ""
          , d = a.pathname.indexOf("/g/collect");
        0 <= d && (c = a.pathname.substring(0, d));
        b.transport_url = a.protocol + "//" + a.hostname + c;
        return b
    }
      , dE = function(a, b) {
        var c = new z.XMLHttpRequest;
        c.withCredentials = !0;
        var d = b ? "POST" : "GET"
          , e = ""
          , f = 0
          , g = bj(a)
          , h = cE(g)
          , l = bE(g);
        c.onprogress = function(n) {
            if (200 === c.status) {
                e += c.responseText.substring(f);
                f = n.loaded;
                for (var p = aE(e, h), q = p.indexOf("\n\n"); -1 !== q; ) {
                    var r;
                    a: {
                        var t = fa(p.substring(0, q).split("\n"))
                          , u = t.next().value
                          , v = t.next().value;
                        if (u.startsWith("event: message") && v.startsWith("data: "))
                            try {
                                r = JSON.parse(v.substring(v.indexOf(":") + 1));
                                break a
                            } catch (D) {}
                        r = void 0
                    }
                    var w = r;
                    if (w) {
                        var x = w.send_pixel || [];
                        if (Array.isArray(x))
                            for (var y = 0; y < x.length; y++)
                                sc(x[y]);
                        if (S(30)) {
                            var A = w.send_beacon || [];
                            if (Array.isArray(A))
                                for (var B = 0; B < A.length; B++)
                                    zc(A[B])
                        }
                    }
                    p = p.substring(q + 2);
                    q = p.indexOf("\n\n")
                }
                e = p
            }
        }
        ;
        c.open(d, l);
        c.send(b)
    };
    var gE = function(a, b, c, d) {
        var e = a + "?" + b;
        eE && (d = !(0 === e.indexOf(RD()) || 0 === e.indexOf(QD())));
        d && !lD ? dE(e, c) : fE(a, b, c)
    }
      , hE = function(a, b) {
        function c(r) {
            p.push(r + "=" + encodeURIComponent("" + a.Sa[r]))
        }
        var d = b.om
          , e = b.qm
          , f = b.nl
          , g = b.Mk
          , h = b.Lk
          , l = b.Al
          , n = b.zl;
        if (d || e) {
            var p = [];
            a.Sa._ono && c("_ono");
            c("tid");
            c("cid");
            c("gtm");
            p.push("aip=1");
            a.Fc.uid && !n && p.push("uid=" + encodeURIComponent("" + a.Fc.uid));
            d && (fE("https://stats.g.doubleclick.net/g/collect", "v=2&" + p.join("&")),
            Gk("https://stats.g.doubleclick.net/g/collect?v=2&" + p.join("&")));
            if (e) {
                p.push("z=" + La());
                if (!l) {
                    var q = f && 0 === f.indexOf("google.") && "google.com" != f ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", f) : void 0;
                    q && sc(q + p.join("&"))
                }
                S(14) && !lD && g && h && zq() && function() {
                    var r = Bq() + "/td/ga/rul?";
                    p = [];
                    c("tid");
                    p.push("gacid=" + encodeURIComponent(String(a.Sa.cid)));
                    c("gtm");
                    p.push("aip=1");
                    p.push("fledge=1");
                    p.push("z=" + La());
                    Aq(r + p.join("&"), a.Sa.tid)
                }()
            }
        }
    }
      , eE = !1;
    var iE = function() {
        this.C = 1;
        this.J = {};
        this.h = new If;
        this.m = -1
    };
    iE.prototype.B = function(a, b) {
        var c = this
          , d = new $D(a,this.J,b)
          , e = mD(a);
        e && this.h.C(d) || this.flush();
        if (e && this.h.add(d)) {
            if (0 > this.m) {
                var f = z.setTimeout, g;
                hD(a) ? jE ? (jE = !1,
                g = kE) : g = lE : g = 5E3;
                this.m = f.call(z, function() {
                    return c.flush()
                }, g)
            }
        } else {
            var h = Kf(d, this.C++);
            gE(d.m, h.Mh, h.body, d.C);
            var l = a.metadata.create_dc_join
              , n = a.metadata.create_google_join
              , p = !1 !== T(a.h, O.g.Da)
              , q = km(a.h)
              , r = {
                eventId: a.h.eventId,
                priorityId: a.h.priorityId
            }
              , t = {
                om: l,
                qm: n,
                nl: Ai(),
                Mk: p,
                Lk: q,
                Al: wi(),
                zl: a.metadata.euid_mode_enabled,
                Wm: r
            };
            hE(d, t)
        }
        gs(a)
    }
    ;
    iE.prototype.add = function(a) {
        a.metadata.euid_mode_enabled && !lD ? this.R(a) : this.B(a)
    }
    ;
    iE.prototype.flush = function() {
        if (this.h.events.length) {
            var a = Lf(this.h, this.C++);
            gE(this.h.h, a.Mh, a.body, this.h.m);
            this.h = new If;
            0 <= this.m && (z.clearTimeout(this.m),
            this.m = -1)
        }
    }
    ;
    iE.prototype.R = function(a) {
        var b = this
          , c = iD(a);
        c ? uh(c, function(d) {
            b.B(a, 1 === d.split("~").length ? void 0 : d)
        }) : this.B(a)
    }
    ;
    var fE = function(a, b, c) {
        var d = a + "?" + b;
        if (c)
            try {
                ic.sendBeacon && ic.sendBeacon(d, c)
            } catch (e) {
                xb("TAGGING", 15)
            }
        else
            zc(d)
    }
      , kE = cn('', 500)
      , lE = cn('', 5E3)
      , jE = !0;
    var mE = function(a, b, c) {
        void 0 === c && (c = {});
        if ("object" === typeof b)
            for (var d in b)
                mE(a + "." + d, b[d], c);
        else
            c[a] = b;
        return c
    }
      , nE = function(a) {
        if (hD(a)) {
            var b = function(d) {
                var e = mE(O.g.oa, d);
                m(e, function(f, g) {
                    a.m[f] = g
                })
            }
              , c = T(a.h, O.g.oa);
            void 0 !== c ? b(c) : b(a.metadata.user_data);
            a.metadata.user_data = void 0
        }
    };
    var oE = window
      , pE = document
      , qE = function(a) {
        var b = oE._gaUserPrefs;
        if (b && b.ioo && b.ioo() || pE.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === oE["ga-disable-" + a])
            return !0;
        try {
            var c = oE.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)
                return !0
        } catch (f) {}
        for (var d = sm("AMP_TOKEN", String(pE.cookie), !0), e = 0; e < d.length; e++)
            if ("$OPT_OUT" == d[e])
                return !0;
        return pE.getElementById("__gaOptOutExtension") ? !0 : !1
    };
    var sE = function(a) {
        return !a || rE.test(a) || zh.hasOwnProperty(a)
    }
      , tE = function(a, b, c) {
        c || (c = function() {}
        );
        void 0 !== a.m[b] && (a.m[b] = c(a.m[b]))
    }
      , uE = function(a, b) {
        var c = O.g.F;
        wk(c) || Rk(function() {
            b.metadata.is_consent_update = !0;
            var d = Hh[c || ""];
            d && kD(b, "gcut", d);
            a.sj(b)
        }, c)
    }
      , fo = {
        Vk: "",
        Dm: Number("")
    }
      , vE = {}
      , wE = (vE[O.g.Lc] = 1,
    vE[O.g.Mc] = 1,
    vE[O.g.Nc] = 1,
    vE[O.g.Oc] = 1,
    vE[O.g.Qc] = 1,
    vE[O.g.Rc] = 1,
    vE)
      , rE = /^(_|ga_|google_|gtag\.|firebase_).*$/
      , xE = function(a) {
        this.rb = a;
        this.yd = new iE;
        this.h = void 0;
        this.C = new oD;
        this.m = this.B = void 0;
        this.R = !1;
        this.ie = void 0;
        this.he = !1;
        this.Xg = 0;
        this.J = !1
    };
    ba = xE.prototype;
    ba.Zl = function(a, b, c) {
        var d = this
          , e = Gp(this.rb);
        if (e)
            if (c.eventMetadata.is_external_event && "_" === a.charAt(0))
                c.W();
            else {
                a !== O.g.la && a !== O.g.Ja && sE(a) && N(58);
                yE(c.h);
                var f = new Vp(e,a,c);
                f.metadata.event_start_timestamp_ms = b;
                var g = [O.g.O];
                (Wp(f, O.g.ib, T(f.h, O.g.ib)) || hD(f)) && g.push(O.g.F);
                var h = function() {
                    Sk(function() {
                        d.am(f)
                    }, g)
                };
                S(7) && S(12) ? go(h) : h()
            }
        else
            c.W()
    }
    ;
    ba.am = function(a) {
        this.m = a;
        try {
            if (qE(a.target.aa))
                N(28),
                a.isAborted = !0;
            else if (S(48)) {
                var b;
                var c = il(pl())
                  , d = c && c.parent;
                b = d ? il(d) : void 0;
                if (b && Ja(b.destinations))
                    for (var e = 0; e < b.destinations.length; e++)
                        if (qE(b.destinations[e])) {
                            N(125);
                            a.isAborted = !0;
                            break
                        }
            }
            if (0 <= fo.Vk.replace(/\s+/g, "").split(",").indexOf(a.eventName))
                a.isAborted = !0;
            else {
                var f = jD(a);
                f && f.blacklisted && (a.isAborted = !0)
            }
            var g = G.location.protocol;
            "http:" != g && "https:" != g && (N(29),
            a.isAborted = !0);
            ic && "preview" == ic.loadPurpose && (N(30),
            a.isAborted = !0);
            S(55) && (a.isAborted = !0);
            uq(a);
            var h = Lh.grl;
            h || (h = OD(),
            Lh.grl = h);
            h() || (N(35),
            a.isAborted = !0);
            if (a.isAborted) {
                a.h.W();
                yb();
                return
            }
            var l = {
                prefix: String(T(a.h, O.g.La, "")),
                path: String(T(a.h, O.g.Tc, "/")),
                flags: String(T(a.h, O.g.Oa, "")),
                domain: String(T(a.h, O.g.Na, "auto")),
                Db: Number(T(a.h, O.g.Ea, 63072E3))
            };
            a.metadata.cookie_options = l;
            zE(a);
            this.zk(a);
            this.C.Am(a);
            a.metadata.is_merchant_center ? a.metadata.euid_mode_enabled = !1 : T(a.h, O.g.pf) ? a.metadata.euid_mode_enabled = !1 : Wp(a, "ccd_add_1p_data", !1) ? a.metadata.euid_mode_enabled = !0 : a.metadata.euid_mode_enabled = S(10) ? !1 : Vj(Tj(a.h));
            if (a.metadata.euid_mode_enabled) {
                var n = Tj(a.h);
                if (Vj(n)) {
                    var p = T(a.h, O.g.oa);
                    if (Wp(a, "ccd_add_1p_data", !1))
                        null === p ? a.metadata.user_data_from_code = null : (n.enable_code && Uc(p) && (a.metadata.user_data_from_code = p),
                        Uc(n.selectors) && !a.metadata.user_data_from_manual && (a.metadata.user_data_from_manual = Sj(n.selectors)));
                    else if (void 0 !== p)
                        a.metadata.user_data = p,
                        a.m._udm = "c";
                    else {
                        var q = Wj(n);
                        a.metadata.user_data = q;
                        if ("selectors" === n.mode || Uc(n.selectors))
                            a.m._udm = "m";
                        else if ("auto_detect" === n.mode || Uc(n.auto_detect))
                            a.m._udm = "a"
                    }
                }
            }
            var r = this.Kj, t;
            T(a.h, O.g.kb) && (wk(O.g.O) || T(a.h, O.g.cb) || (a.m[O.g.fj] = !0));
            var u;
            var v;
            v = void 0 === v ? 3 : v;
            var w = z.location.href;
            if (w) {
                var x = bj(w).search.replace("?", "")
                  , y = Xi(x, "_gl", !1, !0) || "";
                u = y ? void 0 !== Co(y, v) : !1
            } else
                u = !1;
            u && hD(a) && kD(a, "glv", 1);
            if (a.eventName !== O.g.la)
                t = {};
            else {
                T(a.h, O.g.kb) && vp(["aw", "dc"]);
                var A = KD(a)
                  , B = MD(a);
                t = S(62) && Object.keys(A).length ? A : B
            }
            r.call(this, t);
            var D = a.eventName === O.g.la;
            D && (this.J = !0);
            a.eventName == O.g.la && (T(a.h, O.g.Qa, !0) ? (a.h.h[O.g.Z] && (a.h.m[O.g.Z] = a.h.h[O.g.Z],
            a.h.h[O.g.Z] = void 0,
            a.m[O.g.Z] = void 0),
            a.eventName = O.g.fc) : a.isAborted = !0);
            D && !a.isAborted && 0 < this.Xg++ && pD(17);
            var F = db(Rl(a.h, O.g.Z, 1), ".");
            F && (a.m[O.g.xb] = F);
            var J = db(Rl(a.h, O.g.Z, 2), ".");
            J && (a.m[O.g.wb] = J);
            var K = this.B
              , P = this.C
              , Q = !this.he
              , da = this.h
              , aa = T(a.h, O.g.cb);
            if (T(a.h, O.g.yb) && T(a.h, O.g.Ob))
                aa ? tD(a, aa, 1) : (N(127),
                a.isAborted = !0);
            else {
                var X = aa ? 1 : 8;
                a.metadata.is_new_to_site = !1;
                aa || (aa = uD(a),
                X = 3);
                aa || (aa = da,
                X = 5);
                if (!aa) {
                    var U = wk(O.g.O)
                      , qa = qD();
                    aa = !qa.from_cookie || U ? qa.vid : void 0;
                    X = 6
                }
                aa ? aa = "" + aa : (aa = Um(),
                X = 7,
                a.metadata.is_first_visit = a.metadata.is_new_to_site = !0);
                tD(a, aa, X)
            }
            var ka = Math.floor(a.metadata.event_start_timestamp_ms / 1E3)
              , ia = void 0;
            a.metadata.is_new_to_site || (ia = ED(a) || K);
            var Ha = Qa(T(a.h, O.g.ad, 30));
            Ha = Math.min(475, Ha);
            Ha = Math.max(5, Ha);
            var fb = Qa(T(a.h, O.g.tf, 1E4))
              , ma = yD(ia);
            a.metadata.is_first_visit = !1;
            a.metadata.is_session_start = !1;
            a.metadata.join_timer_sec = 0;
            ma && ma.Ch && (a.metadata.join_timer_sec = Math.max(0, ma.Ch - Math.max(0, ka - ma.Ee)));
            var Na = !1;
            ma || (Na = a.metadata.is_first_visit = !0,
            ma = {
                sessionId: String(ka),
                Ec: 1,
                md: !1,
                Ee: ka,
                Cc: !1,
                ue: void 0
            });
            ka > ma.Ee + 60 * Ha && (Na = !0,
            ma.sessionId = String(ka),
            ma.Ec++,
            ma.md = !1,
            ma.ue = void 0);
            if (Na)
                a.metadata.is_session_start = !0,
                P.sl(a);
            else if (P.kl() > fb || a.eventName == O.g.fc)
                ma.md = !0;
            a.metadata.euid_mode_enabled ? T(a.h, O.g.Ba) ? ma.Cc = !0 : (ma.Cc && (ma.ue = void 0),
            ma.Cc = !1) : ma.Cc = !1;
            var ob = ma.ue;
            if (a.metadata.euid_mode_enabled) {
                var fc = T(a.h, O.g.Wc)
                  , cd = fc ? 1 : 8;
                fc || (fc = ob,
                cd = 4);
                fc || (fc = Tm(),
                cd = 7);
                var df = cd
                  , uu = a.metadata.enhanced_client_id_source;
                if (void 0 === uu || df <= uu)
                    a.m[O.g.Wc] = fc.toString(),
                    a.metadata.enhanced_client_id_source = df
            }
            Q ? (a.copyToHitData(O.g.jb, ma.sessionId),
            a.copyToHitData(O.g.Vd, ma.Ec),
            a.copyToHitData(O.g.Ud, ma.md ? 1 : 0)) : (a.m[O.g.jb] = ma.sessionId,
            a.m[O.g.Vd] = ma.Ec,
            a.m[O.g.Ud] = ma.md ? 1 : 0);
            a.metadata[O.g.ff] = ma.Cc ? 1 : 0;
            AE(a);
            if (!T(a.h, O.g.Ob) || !T(a.h, O.g.yb)) {
                var vu = ""
                  , wg = G.location;
                if (wg) {
                    var Bi = wg.pathname || "";
                    "/" != Bi.charAt(0) && (Bi = "/" + Bi);
                    vu = wg.protocol + "//" + wg.hostname + Bi + wg.search
                }
                a.copyToHitData(O.g.ia, vu);
                var wG = a.copyToHitData, xG = O.g.Fa, Ci;
                a: {
                    var wu = ym("_opt_expid", void 0, void 0, O.g.O)[0];
                    if (wu) {
                        var xu = decodeURIComponent(wu).split("$");
                        if (3 === xu.length) {
                            Ci = xu[2];
                            break a
                        }
                    }
                    if (void 0 !== Lh.ga4_referrer_override)
                        Ci = Lh.ga4_referrer_override;
                    else {
                        var yu = ki("gtm.gtagReferrer." + a.target.aa);
                        Ci = yu ? "" + yu : G.referrer
                    }
                }
                wG.call(a, xG, Ci || void 0);
                a.copyToHitData(O.g.Ab, G.title);
                a.copyToHitData(O.g.za, (ic.language || "").toLowerCase());
                var zu = Li();
                a.copyToHitData(O.g.Bb, zu.width + "x" + zu.height);
                S(40) && a.copyToHitData(O.g.Qb)
            }
            a.metadata.create_dc_join = !1;
            a.metadata.create_google_join = !1;
            if (!(S(68) && hD(a) || a.metadata.is_merchant_center || !1 === T(a.h, O.g.ub)) && VB() && wk(O.g.F)) {
                var Di = Wp(a, O.g.ib, T(a.h, O.g.ib));
                Di = Di || gD(a);
                (a.metadata.is_session_start || T(a.h, O.g.jf)) && (a.metadata.create_dc_join = !!Di);
                var Au;
                Au = a.metadata.join_timer_sec;
                Di && 0 === (Au || 0) && (a.metadata.join_timer_sec = 60,
                a.metadata.create_google_join = !0)
            }
            BE(a);
            Bh.hasOwnProperty(a.eventName) && (a.metadata.is_ecommerce = !0,
            a.copyToHitData(O.g.X),
            a.copyToHitData(O.g.sa));
            a.copyToHitData(O.g.vf);
            for (var Bu = T(a.h, O.g.kf) || [], Dm = 0; Dm < Bu.length; Dm++) {
                var Cu = Bu[Dm];
                if (Cu.rule_result) {
                    a.copyToHitData(O.g.vf, Cu.traffic_type);
                    pD(3);
                    break
                }
            }
            if (!a.metadata.is_merchant_center && Ts(a.h)) {
                var Du = GD(a) || {}
                  , zG = (Ko(Du[O.g.oc], !!Du[O.g.T]) ? Bo(!0)._fplc : void 0) || (0 < ym("FPLC", void 0, void 0, O.g.O).length ? void 0 : "0");
                a.m._fplc = zG
            }
            if (void 0 !== T(a.h, O.g.Rd))
                a.copyToHitData(O.g.Rd);
            else {
                var Eu = T(a.h, O.g.Td), Em, Ei;
                a: {
                    if (JD) {
                        var Fm = GD(a) || {};
                        if (Fm && Fm[O.g.T])
                            for (var Fu = $i(bj(a.m[O.g.Fa]), "host", !0), Fi = Fm[O.g.T], xg = 0; xg < Fi.length; xg++)
                                if (Fi[xg]instanceof RegExp) {
                                    if (Fi[xg].test(Fu)) {
                                        Ei = !0;
                                        break a
                                    }
                                } else if (0 <= Fu.indexOf(Fi[xg])) {
                                    Ei = !0;
                                    break a
                                }
                    }
                    Ei = !1
                }
                if (!(Em = Ei)) {
                    var Gi;
                    if (Gi = Eu)
                        a: {
                            for (var Gu = Eu.include_conditions || [], AG = $i(bj(a.m[O.g.Fa]), "host", !0), Gm = 0; Gm < Gu.length; Gm++)
                                if (Gu[Gm].test(AG)) {
                                    Gi = !0;
                                    break a
                                }
                            Gi = !1
                        }
                    Em = Gi
                }
                Em && (a.m[O.g.Rd] = "1",
                pD(4))
            }
            hD(a) && (kD(a, "uc", ui()),
            zk() && kD(a, "rnd", Zm()));
            if (S(30) && hD(a)) {
                Wp(a, O.g.ib, !1) && kD(a, "gse", 1);
                !1 === T(a.h, O.g.ub) && kD(a, "ngs", 1);
                wi() && kD(a, "ga_rd", 1);
                VB() || kD(a, "ngst", 1);
                var Hu = Ai();
                Hu && kD(a, "etld", Hu)
            }
            if (hD(a)) {
                var Iu = TD ? yi() : "";
                Iu && kD(a, "gcsub", Iu)
            }
            hD(a) && zk() && (Ak() && kD(a, "gcd", pm()),
            T(a.h, O.g.ma) && kD(a, "adr", 1));
            if (hD(a)) {
                var Ju = Pq();
                Ju && kD(a, "us_privacy", Ju);
                var Ku = Pn();
                Ku && kD(a, "gdpr", Ku);
                var Lu = On();
                Lu && kD(a, "gdpr_consent", Lu)
            }
            a: if (S(7))
                if (!ao(z))
                    N(87);
                else if (void 0 !== co) {
                    N(85);
                    var Mu = Zn();
                    if (Mu) {
                        if (S(26)) {
                            if (T(a.h, O.g.Zc) && !hD(a))
                                break a
                        } else if (T(a.h, O.g.Zc))
                            break a;
                        ho(Mu, a)
                    } else
                        N(86)
                }
            S(27) && T(a.h, O.g.yb) && pD(12);
            if (S(39)) {
                var Hm = xq(wq());
                Hm || CE || (CE = !0,
                qn('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'),
                Hm = xq(wq()));
                Hm && (a.m[O.g.Mb] = "1")
            }
            if (a.eventName == O.g.Ja) {
                var Ou = T(a.h, O.g.Pa)
                  , BG = T(a.h, O.g.hb)
                  , Pu = void 0;
                Pu = a.m[Ou];
                BG(Pu || T(a.h, Ou));
                a.isAborted = !0
            }
            a.copyToHitData(O.g.Ba);
            a.copyToHitData(O.g.Ra);
            Zp(a);
            nE(a);
            a.metadata.em_event && pD(14);
            !this.J && a.metadata.em_event && pD(18);
            var Im = a.metadata.event_usage;
            if (Ja(Im))
                for (var Jm = 0; Jm < Im.length; Jm++)
                    pD(Im[Jm]);
            var Qu = zb("GA4_EVENT");
            Qu && (a.m._eu = Qu);
            if (a.metadata.speculative || a.isAborted) {
                a.h.W();
                yb();
                return
            }
            var CG = this.Kj, Ru, DG = this.h, Km;
            a: {
                var Lm = FD(a);
                if (Lm) {
                    if (DD(Lm, a)) {
                        Km = Lm;
                        break a
                    }
                    N(25);
                    a.isAborted = !0
                }
                Km = void 0
            }
            var EG = Km;
            Ru = {
                clientId: xD(a, DG),
                Zf: EG
            };
            CG.call(this, Ru);
            this.he = !0;
            this.xm(a);
            if (hD(a)) {
                var FG = a.metadata.is_conversion;
                ("page_view" === a.eventName || FG) && uE(this, a)
            }
            this.C.Sh();
            this.ie = DE(a, this.ie);
            a.copyToHitData(O.g.Bg);
            T(a.h, O.g.Zc) && (a.m[O.g.Zc] = !0,
            S(36) && hD(a) || tE(a, O.g.Bb));
            if (a.isAborted) {
                a.h.W();
                yb();
                return
            }
            this.sj(a);
            a.h.P()
        } catch (lH) {
            a.h.W()
        }
        yb()
    }
    ;
    ba.sj = function(a) {
        this.yd.add(a)
    }
    ;
    ba.Kj = function(a) {
        var b = a.clientId
          , c = a.Zf;
        b && c && (this.h = b,
        this.B = c)
    }
    ;
    ba.flush = function() {
        this.yd.flush()
    }
    ;
    ba.xm = function(a) {
        var b = this;
        if (!this.R) {
            var c = wk(O.g.O);
            Qk([O.g.O], function() {
                var d = wk(O.g.O);
                if (c ^ d && b.m && b.B && b.h) {
                    var e = b.h;
                    if (d) {
                        var f = uD(b.m);
                        if (f) {
                            b.h = f;
                            var g = ED(b.m);
                            g && (b.B = AD(g, b.B, b.m))
                        } else
                            wD(b.h, b.m),
                            sD(b.h, !0);
                        DD(b.B, b.m);
                        var h = {};
                        h[O.g.jf] = e;
                        var l = Su(b.rb, O.g.zd, h);
                        Vu(l, a.h.eventId, {});
                    } else {
                        b.B = void 0;
                        b.h = void 0;
                        z.gaGlobal = {};
                    }
                    c = d
                }
            });
            this.R = !0
        }
    }
    ;
    ba.zk = function(a) {
        a.eventName !== O.g.Ja && this.C.yk(a)
    }
    ;
    var zE = function(a) {
        function b(c, d) {
            xh[c] || void 0 === d || (a.m[c] = d)
        }
        m(a.h.m, b);
        m(a.h.h, b)
    }
      , AE = function(a) {
        var b = Sl(a.h)
          , c = function(d, e) {
            wE[d] && (a.m[d] = e)
        };
        Uc(b[O.g.Pc]) ? m(b[O.g.Pc], function(d, e) {
            c((O.g.Pc + "_" + d).toLowerCase(), e)
        }) : m(b, c)
    }
      , BE = function(a) {
        var b = function(c) {
            return !!c && c.conversion
        };
        a.metadata.is_conversion = b(jD(a));
        a.metadata.is_first_visit && (a.metadata.is_first_visit_conversion = b(jD(a, "first_visit")));
        a.metadata.is_session_start && (a.metadata.is_session_start_conversion = b(jD(a, "session_start")))
    }
      , DE = function(a, b) {
        var c = void 0;
        return c
    }
      , CE = !1;
    function yE(a) {
        m(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[O.g.Ra] || {};
        m(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    }
    ;var EE = function(a) {
        if (S(83) && "prerendering"in G ? G.prerendering : "prerender" === G.visibilityState)
            return !1;
        a();
        return !0
    }
      , FE = function(a) {
        if (!EE(a)) {
            var b = !1
              , c = function() {
                !b && EE(a) && (b = !0,
                uc(G, "visibilitychange", c),
                S(83) && uc(G, "prerenderingchange", c),
                N(55))
            };
            tc(G, "visibilitychange", c);
            S(83) && tc(G, "prerenderingchange", c);
            N(54)
        }
    };
    var HE = function(a, b) {
        FE(function() {
            var c = Gp(a);
            if (c) {
                var d = GE(c, b);
                yv(a, d)
            }
        });
    };
    function GE(a, b) {
        var c = function() {};
        var d = new xE(a.id)
          , e = "MC" === a.prefix;
        c = function(f, g, h, l) {
            e && (l.eventMetadata.is_merchant_center = !0);
            d.Zl(g, h, l)
        }
        ;
        al() || IE(a, d, b);
        return c
    }
    function IE(a, b, c) {
        var d = b.C
          , e = {}
          , f = {
            eventId: c,
            eventMetadata: (e.batch_on_navigation = !0,
            e)
        };
        d.fm(function() {
            lD = !0;
            xv.flush();
            1E3 <= d.Of() && ic.sendBeacon && zv(O.g.zd, {}, a.id, f);
            b.flush();
            d.Lj(function() {
                lD = !1;
                d.Lj()
            })
        });
    }
    ;var JE = GE;
    function LE(a, b, c) {
        var d = this;
    }
    LE.H = "internal.gtagConfig";
    function ME() {
        var a = {};
        return a
    }
    ;function OE(a, b) {}
    OE.K = "gtagSet";
    function PE(a, b) {}
    PE.K = "injectHiddenIframe";
    var QE = {};
    function SE(a, b, c, d) {}
    var TE = Object.freeze({
        dl: 1,
        id: 1
    })
      , UE = {};
    function VE(a, b, c, d) {}
    SE.K = "injectScript";
    VE.H = "internal.injectScript";
    function WE(a) {
        var b = !0;
        return b
    }
    WE.K = "isConsentGranted";
    var XE = function() {
        var a = Ig(function(b) {
            this.h.h.log("error", b)
        });
        a.K = "JSON";
        return a
    };
    var YE = function() {
        return !1
    }
      , ZE = {
        getItem: function(a) {
            var b = null;
            return b
        },
        setItem: function(a, b) {
            return !1
        },
        removeItem: function(a) {}
    };
    var $E = ["textContent", "value", "tagName", "children", "childElementCount"];
    function aF(a) {
        var b;
        M(this, "read_dom_elements", "css", "*");
        for (var c = 0; c < $E.length; c++)
            M(this, "access_dom_element_property", G.body, "read", $E[c]);
        var d = Wc(a) || {}
          , e = Pj({
            yc: !!d.includeSelector,
            zc: !!d.includeVisibility,
            hd: d.excludeElementSelectors,
            Wa: d.fieldFilters,
            Vh: !!d.selectMultipleElements
        });
        b = new kb;
        var f = new za;
        b.set("elements", f);
        for (var g = e.elements, h = 0; h < g.length; h++)
            f.push(bF(g[h]));
        void 0 !== e.Oh && b.set("preferredEmailElement", bF(e.Oh));
        b.set("status", e.status);
        return b
    }
    var bF = function(a) {
        var b = new kb;
        b.set("userData", a.U);
        b.set("tagName", a.tagName);
        void 0 !== a.querySelector && b.set("querySelector", a.querySelector);
        void 0 !== a.isVisible && b.set("isVisible", a.isVisible);
        if (S(59)) {} else
            switch (a.type) {
            case "1":
                b.set("type", "email")
            }
        return b
    };
    aF.H = "internal.locateUserData";
    function cF() {}
    cF.K = "logToConsole";
    function dF(a, b) {}
    dF.H = "internal.mergeRemoteConfig";
    function eF(a) {
        var b = void 0;
        if ("string" !== typeof a)
            return;
        a && 0 === a.indexOf("//") && (a = G.location.protocol + a);
        if ("function" === typeof URL) {
            var c;
            a: {
                var d;
                try {
                    d = new URL(a)
                } catch (w) {
                    c = void 0;
                    break a
                }
                for (var e = {}, f = Array.from(d.searchParams), g = 0; g < f.length; g++) {
                    var h = f[g][0]
                      , l = f[g][1];
                    e.hasOwnProperty(h) ? "string" === typeof e[h] ? e[h] = [e[h], l] : e[h].push(l) : e[h] = l
                }
                c = Vc({
                    href: d.href,
                    origin: d.origin,
                    protocol: d.protocol,
                    username: d.username,
                    password: d.password,
                    host: d.host,
                    hostname: d.hostname,
                    port: d.port,
                    pathname: d.pathname,
                    search: d.search,
                    searchParams: e,
                    hash: d.hash
                })
            }
            return c
        }
        var n;
        try {
            n = bj(a)
        } catch (w) {
            return
        }
        if (!n.protocol || !n.host)
            return;
        var p = {};
        if (n.search)
            for (var q = n.search.replace("?", "").split("&"), r = 0; r < q.length; r++) {
                var t = q[r].split("=")
                  , u = t[0]
                  , v = decodeURIComponent(t.splice(1).join("=")).replace(/\+/g, " ");
                p.hasOwnProperty(u) ? "string" === typeof p[u] ? p[u] = [p[u], v] : p[u].push(v) : p[u] = v
            }
        n.searchParams = p;
        n.origin = n.protocol + "//" + n.host;
        n.username = "";
        n.password = "";
        b = Vc(n);
        return b
    }
    eF.K = "parseUrl";
    function fF(a) {}
    fF.H = "internal.processAsNewEvent";
    function gF(a, b) {
        var c = !1;
        return c
    }
    gF.K = "queryPermission";
    function hF() {
        var a = "";
        return a
    }
    hF.K = "readCharacterSet";
    function iF() {
        var a = "";
        return a
    }
    iF.K = "readTitle";
    function jF(a, b) {
        var c = this;
        L(E(this), ["destinationId:!string", "callback:!Fn"], arguments),
        $p(a, function(d) {
            b.h(c.h, Vc(d, c.h, 1))
        });
    }
    jF.H = "internal.registerCcdCallback";
    function kF(a) {
        return !0
    }
    kF.H = "internal.registerDestination";
    var lF = Object.freeze(["config", "event", "get", "set"]);
    function mF(a, b, c) {}
    mF.H = "internal.registerGtagCommandListener";
    function nF(a, b) {
        var c = !1;
        return c
    }
    nF.H = "internal.removeDataLayerEventListener";
    function oF(a, b) {}
    oF.H = "internal.removeFormData";
    function pF() {}
    pF.K = "resetDataLayer";
    function qF(a, b, c, d) {
        L(E(this), ["destinationIds:!*", "eventName:!*", "eventParameters:?DustMap", "messageContext:?DustMap"], arguments);
        var e = c ? Wc(c) : {}
          , f = Wc(a);
        Array.isArray(f) || (f = [f]);
        b = String(b);
        var g = d ? Wc(d) : {}
          , h = this.h.h;
        g.originatingEntity = Rz(h);
        for (var l = 0; l < f.length; l++) {
            var n = f[l];
            if ("string" === typeof n) {
                var p = I(e)
                  , q = I(g)
                  , r = Su(n, b, p);
                Vu(r, g.eventId || h.eventId, q)
            }
        }
    }
    qF.H = "internal.sendGtagEvent";
    function rF(a, b, c) {}
    rF.K = "sendPixel";
    function sF(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    }
    sF.K = "setCookie";
    function tF(a, b) {}
    tF.K = "setCorePlatformServices";
    function uF(a) {}
    uF.K = "setDefaultConsentState";
    function vF(a, b) {}
    vF.H = "internal.setDelegatedConsentType";
    function wF(a, b, c) {
        return !1
    }
    wF.K = "setInWindow";
    function xF(a, b, c) {
        L(E(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
        var d = Ki(a) || {};
        d[b] = Wc(c, this.h);
        var e = a;
        Ii || Ji();
        Hi[e] = d;
    }
    xF.H = "internal.setProductSettingsParameter";
    function yF(a, b, c) {
        L(E(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
        for (var d = b.split("."), e = Cv(a), f = 0; f < d.length - 1; f++) {
            if (void 0 === e[d[f]])
                e[d[f]] = {};
            else if (!Uc(e[d[f]]))
                throw Error("setRemoteConfigParameter failed, path contains a non-object type: " + d[f]);
            e = e[d[f]]
        }
        e[d[f]] = Wc(c, this.h);
    }
    yF.H = "internal.setRemoteConfigParameter";
    function zF(a, b, c, d) {
        var e = this;
    }
    zF.K = "sha256";
    function AF(a, b, c) {}
    AF.H = "internal.sortRemoteConfigParameters";
    var BF = {}
      , CF = {};
    BF.K = "templateStorage";
    BF.getItem = function(a) {
        var b = null;
        M(this, "access_template_storage");
        var c = this.h.h;
        if (!c)
            throw Error("invalid program state");
        var d = c.jd();
        CF[d] && (b = CF[d].hasOwnProperty("gtm." + a) ? CF[d]["gtm." + a] : null);
        return b
    }
    ;
    BF.setItem = function(a, b) {
        M(this, "access_template_storage");
        var c = this.h.h;
        if (!c)
            throw Error("invalid program state");
        var d = c.jd();
        CF[d] = CF[d] || {};
        CF[d]["gtm." + a] = b;
    }
    ;
    BF.removeItem = function(a) {
        M(this, "access_template_storage");
        var b = this.h.h;
        if (!b)
            throw Error("invalid program state");
        var c = b.jd();
        if (!CF[c] || !CF[c].hasOwnProperty("gtm." + a))
            return;
        delete CF[c]["gtm." + a];
    }
    ;
    BF.clear = function() {
        M(this, "access_template_storage");
        var a = this.h.h;
        if (!a)
            throw Error("invalid program state");
        delete CF[a.jd()];
    }
    ;
    function DF(a, b) {
        var c = !1;
        return c
    }
    DF.H = "internal.testRegex";
    var EF = function(a) {
        var b;
        return b
    };
    function FF(a) {}
    FF.K = "updateConsentState";
    var GF = function() {
        var a = function(c) {
            return Fy(c.H, c)
        }
          , b = function(c) {
            return Ey(c.K, c)
        };
        b(Hy);
        b(Ny);
        b(Dz);
        b(Gz);
        b(Hz);
        b(Lz);
        b(Mz);
        b(Oz);
        b(XE());
        b(Pz);
        b(TC);
        b($C);
        b(aD);
        b(bD);
        b(eD);
        b(OE);
        b(PE);
        b(SE);
        b(WE);
        b(cF);
        b(eF);
        b(gF);
        b(hF);
        b(iF);
        b(rF);
        b(sF);
        b(uF);
        b(wF);
        b(zF);
        b(BF);
        b(FF);
        Ey("Math", rg());
        Ey("Object", Qg);
        Ey("TestHelper", Ug());
        Ey("assertApi", ng);
        Ey("assertThat", og);
        Ey("decodeUri", sg);
        Ey("decodeUriComponent", tg);
        Ey("encodeUri", ug);
        Ey("encodeUriComponent", vg);
        Ey("fail", Dg);
        Ey("generateRandom", Eg);
        Ey("getContainerVersion", Fg);
        Ey("getTimestamp", Gg);
        Ey("getTimestampMillis", Gg);
        Ey("getType", Hg);
        Ey("makeInteger", Jg);
        Ey("makeNumber", Kg);
        Ey("makeString", Lg);
        Ey("makeTableMap", Mg);
        Ey("mock", Pg);
        Ey("fromBase64", SC, !("atob"in z));
        Ey("localStorage", ZE, !YE());
        Ey("toBase64", EF, !("btoa"in z));
        a(Ky);
        a(dz);
        a(kz);
        a(pz);
        a(Bz);
        a(Ez);
        a(Jz);
        a(Nz);
        a(Qz);
        a(Tz);
        a(dA);
        a(iA);
        a(nA);
        a(wA);
        a(AA);
        a(LA);
        a(YA);
        a(yg);
        a($A);
        a(UC);
        a(VC);
        a(YC);
        a(ZC);
        a(cD);
        a(dD);
        a(LE);
        a(VE);
        a(rz);
        a(aF);
        a(fF);
        a(jF);
        a(mF);
        a(nF);
        a(qF);
        a(vF);
        a(xF);
        a(yF);
        a(AF);
        a(DF);
        Fy("internal.GtagSchema", ME());
        S(53) && b(tF);
        S(70) && a(Sy);
        S(71) && a(oF);
        S(79) && a(sz);
        S(80) && a(dF);
        S(84) && a(kF);
        S(86) && a(RC);
        return Gy()
    };
    var HF = function() {
        return !1
    }
      , IF = function() {
        var a = {};
        return function(b, c, d) {}
    };
    var JF, NF = function() {
        var a = data.sandboxed_scripts
          , b = data.security_groups
          , c = data.infra;
        a: {
            var d = data.runtime || []
              , e = data.runtime_lines;
            JF = new ie;
            KF();
            Ke = LF();
            var f = JF
              , g = GF();
            nb(f.h, "require", g);
            for (var h = [], l = 0; l < d.length; l++) {
                var n = d[l];
                if (!Ja(n) || 3 > n.length) {
                    if (0 === n.length)
                        continue;
                    break a
                }
                e && e[l] && e[l].length && ff(n, e[l]);
                try {
                    JF.execute(n),
                    S(63) && Al && 50 === n[0] && h.push(n[1])
                } catch (u) {}
            }
            S(63) && (Ye = h)
        }
        if (void 0 !== a)
            for (var p = ["sandboxedScripts"], q = 0; q < a.length; q++) {
                var r = a[q].replace(/^_*/, "");
                ci[r] = p
            }
        MF(b);
        if (void 0 !== c)
            for (var t = 0; t < c.length; t++)
                di[c[t]] = !0
    };
    function LF() {
        var a = JF;
        return function(b, c, d) {
            var e = d && d.event;
            OF(c);
            var f = new kb;
            m(c, function(q, r) {
                var t = Vc(r);
                void 0 === t && void 0 !== r && N(44);
                f.set(q, t)
            });
            a.h.h.C = jf();
            var g = {
                uj: wf(b),
                eventId: void 0 !== e ? e.id : void 0,
                priorityId: void 0 !== e ? e.priorityId : void 0,
                Gf: void 0 !== e ? function(q) {
                    return e.Wb.Gf(q)
                }
                : void 0,
                jd: function() {
                    return b
                },
                log: function() {},
                Xk: {
                    index: d && d.index,
                    type: d && d.type,
                    name: d && d.name
                },
                hm: !!Dt(b, 3)
            };
            if (HF()) {
                var h = IF()
                  , l = void 0
                  , n = void 0;
                g.Ya = {
                    Xh: [],
                    qe: {},
                    nb: function(q, r, t) {
                        1 === r && (l = q);
                        7 === r && (n = t);
                        h(q, r, t)
                    },
                    Hh: Ng()
                };
                g.log = function(q, r) {
                    if (l) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        h(l, 4, {
                            level: q,
                            source: n,
                            message: t
                        })
                    }
                }
            }
            var p = ke(a, g, [b, f]);
            a.h.h.C = void 0;
            p instanceof ua && "return" === p.h && (p = p.m);
            return Wc(p)
        }
    }
    function OF(a) {
        var b = a.gtmOnSuccess
          , c = a.gtmOnFailure;
        Ga(b) && (a.gtmOnSuccess = function() {
            H(b)
        }
        );
        Ga(c) && (a.gtmOnFailure = function() {
            H(c)
        }
        )
    }
    function KF() {
        JF.h.h.J = function(a, b, c) {
            Lh.SANDBOXED_JS_SEMAPHORE = Lh.SANDBOXED_JS_SEMAPHORE || 0;
            Lh.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                Lh.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }
    function MF(a) {
        void 0 !== a && m(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                ci[e] = ci[e] || [];
                ci[e].push(b)
            }
        })
    }
    ;var PF = encodeURI
      , Y = encodeURIComponent
      , QF = function(a, b, c) {
        sc(a, b, c)
    }
      , RF = function(a, b) {
        if (!a)
            return !1;
        var c = $i(bj(a), "host");
        if (!c)
            return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--,
                e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f)
                    return !0
            }
        }
        return !1
    }
      , SF = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
            a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c],
            e = !0);
        return e ? d : null
    };
    var Z = {
        o: {}
    };
    Z.o.access_template_storage = ["google"],
    function() {
        (function(a) {
            Z.__access_template_storage = a;
            Z.__access_template_storage.s = "access_template_storage";
            Z.__access_template_storage.isVendorTemplate = !0;
            Z.__access_template_storage.priorityOverride = 0;
            Z.__access_template_storage.isInfrastructure = !1
        }
        )(function() {
            return {
                assert: function() {},
                M: function() {
                    return {}
                }
            }
        })
    }();

    Z.o.c = ["google"],
    function() {
        (function(a) {
            Z.__c = a;
            Z.__c.s = "c";
            Z.__c.isVendorTemplate = !0;
            Z.__c.priorityOverride = 0;
            Z.__c.isInfrastructure = !1
        }
        )(function(a) {
            Yx(a.vtp_value, "c", a.vtp_gtmEventId);
            return a.vtp_value
        })
    }();
    Z.o.e = ["google"],
    function() {
        (function(a) {
            Z.__e = a;
            Z.__e.s = "e";
            Z.__e.isVendorTemplate = !0;
            Z.__e.priorityOverride = 0;
            Z.__e.isInfrastructure = !1
        }
        )(function(a) {
            return String(a.vtp_gtmCachedValues.event)
        })
    }();
    Z.o.v = ["google"],
    function() {
        (function(a) {
            Z.__v = a;
            Z.__v.s = "v";
            Z.__v.isVendorTemplate = !0;
            Z.__v.priorityOverride = 0;
            Z.__v.isInfrastructure = !1
        }
        )(function(a) {
            var b = a.vtp_name;
            if (!b || !b.replace)
                return !1;
            var c = Qx(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1)
              , d = void 0 !== c ? c : a.vtp_defaultValue;
            Yx(d, "v", a.vtp_gtmEventId);
            return d
        })
    }();

    Z.o.process_dom_events = ["google"],
    function() {
        function a(b, c, d) {
            return {
                targetType: c,
                eventName: d
            }
        }
        (function(b) {
            Z.__process_dom_events = b;
            Z.__process_dom_events.s = "process_dom_events";
            Z.__process_dom_events.isVendorTemplate = !0;
            Z.__process_dom_events.priorityOverride = 0;
            Z.__process_dom_events.isInfrastructure = !1
        }
        )(function(b) {
            for (var c = b.vtp_targets || [], d = b.vtp_createPermissionError, e = {}, f = 0; f < c.length; f++) {
                var g = c[f];
                e[g.targetType] = e[g.targetType] || [];
                e[g.targetType].push(g.eventName)
            }
            return {
                assert: function(h, l, n) {
                    if (!e[l])
                        throw d(h, {}, "Prohibited event target " + l + ".");
                    if (-1 === e[l].indexOf(n))
                        throw d(h, {}, "Prohibited listener registration for DOM event " + n + ".");
                },
                M: a
            }
        })
    }();

    Z.o.read_container_data = ["google"],
    function() {
        (function(a) {
            Z.__read_container_data = a;
            Z.__read_container_data.s = "read_container_data";
            Z.__read_container_data.isVendorTemplate = !0;
            Z.__read_container_data.priorityOverride = 0;
            Z.__read_container_data.isInfrastructure = !1
        }
        )(function() {
            return {
                assert: function() {},
                M: function() {
                    return {}
                }
            }
        })
    }();
    Z.o.listen_data_layer = ["google"],
    function() {
        function a(b, c) {
            return {
                eventName: c
            }
        }
        (function(b) {
            Z.__listen_data_layer = b;
            Z.__listen_data_layer.s = "listen_data_layer";
            Z.__listen_data_layer.isVendorTemplate = !0;
            Z.__listen_data_layer.priorityOverride = 0;
            Z.__listen_data_layer.isInfrastructure = !1
        }
        )(function(b) {
            var c = b.vtp_accessType
              , d = b.vtp_allowedEvents || []
              , e = b.vtp_createPermissionError;
            return {
                assert: function(f, g) {
                    if (!k(g))
                        throw e(f, {
                            eventName: g
                        }, "Event name must be a string.");
                    if (!("any" === c || "specific" === c && 0 <= d.indexOf(g)))
                        throw e(f, {
                            eventName: g
                        }, "Prohibited listen on data layer event.");
                },
                M: a
            }
        })
    }();

    Z.o.get_url = ["google"],
    function() {
        function a(b, c, d) {
            return {
                component: c,
                queryKey: d
            }
        }
        (function(b) {
            Z.__get_url = b;
            Z.__get_url.s = "get_url";
            Z.__get_url.isVendorTemplate = !0;
            Z.__get_url.priorityOverride = 0;
            Z.__get_url.isInfrastructure = !1
        }
        )(function(b) {
            var c = "any" === b.vtp_urlParts ? null : [];
            c && (b.vtp_protocol && c.push("protocol"),
            b.vtp_host && c.push("host"),
            b.vtp_port && c.push("port"),
            b.vtp_path && c.push("path"),
            b.vtp_extension && c.push("extension"),
            b.vtp_query && c.push("query"),
            b.vtp_fragment && c.push("fragment"));
            var d = c && "any" !== b.vtp_queriesAllowed ? b.vtp_queryKeys || [] : null
              , e = b.vtp_createPermissionError;
            return {
                assert: function(f, g, h) {
                    if (g) {
                        if (!k(g))
                            throw e(f, {}, "URL component must be a string.");
                        if (c && 0 > c.indexOf(g))
                            throw e(f, {}, "Prohibited URL component: " + g);
                        if ("query" === g && d) {
                            if (!h)
                                throw e(f, {}, "Prohibited from getting entire URL query when query keys are specified.");
                            if (!k(h))
                                throw e(f, {}, "Query key must be a string.");
                            if (0 > d.indexOf(h))
                                throw e(f, {}, "Prohibited query key: " + h);
                        }
                    } else if (c)
                        throw e(f, {}, "Prohibited from getting entire URL when components are specified.");
                },
                M: a
            }
        })
    }();
    Z.o.read_dom_elements = ["google"],
    function() {
        function a(b, c, d) {
            return {
                type: c,
                value: d
            }
        }
        (function(b) {
            Z.__read_dom_elements = b;
            Z.__read_dom_elements.s = "read_dom_elements";
            Z.__read_dom_elements.isVendorTemplate = !0;
            Z.__read_dom_elements.priorityOverride = 0;
            Z.__read_dom_elements.isInfrastructure = !1
        }
        )(function(b) {
            for (var c = b.vtp_selectors || [], d = b.vtp_createPermissionError, e = [], f = [], g = 0; g < c.length; g++) {
                var h = c[g];
                switch (h.type) {
                case "id":
                    e.push(h.value);
                    break;
                case "css":
                    f.push(h.value)
                }
            }
            return {
                assert: function(l, n, p) {
                    switch (n) {
                    case "id":
                        if (-1 < e.indexOf(p))
                            return;
                        break;
                    case "css":
                        if (-1 < f.indexOf(p))
                            return;
                        break;
                    default:
                        throw d(l, {}, "Unknown selector type " + n + ".");
                    }
                    throw d(l, {}, "Prohibited selector value " + p + " for selector type " + n + ".");
                },
                M: a
            }
        })
    }();
    Z.o.gct = ["google"],
    function() {
        function a(d) {
            for (var e = [], f = 0; f < d.length; f++)
                try {
                    e.push(new RegExp(d[f]))
                } catch (g) {}
            return e
        }
        function b(d) {
            return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
        }
        function c(d) {
            for (var e = [], f = 0; f < d.length; f++) {
                var g = d[f].matchValue, h;
                switch (d[f].matchType) {
                case "BEGINS_WITH":
                    h = "^" + b(g);
                    break;
                case "ENDS_WITH":
                    h = b(g) + "$";
                    break;
                case "EQUALS":
                    h = "^" + b(g) + "$";
                    break;
                case "REGEX":
                    h = g;
                    break;
                default:
                    h = b(g)
                }
                e.push(h)
            }
            return e
        }
        (function(d) {
            Z.__gct = d;
            Z.__gct.s = "gct";
            Z.__gct.isVendorTemplate = !0;
            Z.__gct.priorityOverride = 0;
            Z.__gct.isInfrastructure = !1
        }
        )(function(d) {
            var e = {}
              , f = d.vtp_sessionDuration;
            0 < f && (e[O.g.ad] = f);
            e[O.g.Kd] = d.vtp_eventSettings;
            e[O.g.pg] = d.vtp_dynamicEventSettings;
            e[O.g.ib] = 1 === d.vtp_googleSignals;
            e[O.g.Cg] = d.vtp_foreignTld;
            e[O.g.Ag] = 1 === d.vtp_restrictDomain;
            e[O.g.kf] = d.vtp_internalTrafficResults;
            var g = O.g.Aa
              , h = d.vtp_linker;
            h && h[O.g.T] && (h[O.g.T] = a(h[O.g.T]));
            e[g] = h;
            var l = O.g.Td
              , n = d.vtp_referralExclusionDefinition;
            n && n.include_conditions && (n.include_conditions = a(n.include_conditions));
            e[l] = n;
            var p = jl(d.vtp_trackingId)
              , q = Cv(p)
              , r = q.referral_exclusion_conditions;
            r && (r.length && "object" === typeof r[0] && (r = c(r)),
            e[O.g.Td] = {
                include_conditions: a(r)
            });
            var t = q.cross_domain_conditions;
            if (t) {
                t.length && "object" === typeof t[0] && (t = c(t));
                var u = {};
                e[O.g.Aa] = (u[O.g.T] = a(t),
                u[O.g.zb] = !0,
                u[O.g.oc] = !0,
                u[O.g.Pb] = "query",
                u)
            }
            Dv(p, e);
            HE(p, d.vtp_gtmEventId);
            H(d.vtp_gtmOnSuccess)
        })
    }();

    Z.o.get = ["google"],
    function() {
        (function(a) {
            Z.__get = a;
            Z.__get.s = "get";
            Z.__get.isVendorTemplate = !0;
            Z.__get.priorityOverride = 0;
            Z.__get.isInfrastructure = !1
        }
        )(function(a) {
            var b = a.vtp_settings
              , c = b.eventParameters || {}
              , d = String(a.vtp_eventName)
              , e = {};
            e.eventId = a.vtp_gtmEventId;
            e.priorityId = a.vtp_gtmPriorityId;
            a.vtp_deferrable && (e.deferrable = !0);
            var f = Su(String(b.streamId), d, c);
            Vu(f, e.eventId, e);
            a.vtp_gtmOnSuccess()
        })
    }();

    Z.o.access_dom_element_property = ["google"],
    function() {
        function a(b, c, d, e) {
            var f = {
                property: e,
                read: !1,
                write: !1
            };
            switch (d) {
            case "read":
                f.read = !0;
                break;
            case "write":
                f.write = !0;
                break;
            default:
                throw Error("Invalid " + b + " operation " + d);
            }
            return f
        }
        (function(b) {
            Z.__access_dom_element_property = b;
            Z.__access_dom_element_property.s = "access_dom_element_property";
            Z.__access_dom_element_property.isVendorTemplate = !0;
            Z.__access_dom_element_property.priorityOverride = 0;
            Z.__access_dom_element_property.isInfrastructure = !1
        }
        )(function(b) {
            for (var c = b.vtp_properties || [], d = b.vtp_createPermissionError, e = [], f = [], g = 0; g < c.length; g++) {
                var h = c[g]
                  , l = h.property;
                h.read && e.push(l);
                h.write && f.push(l)
            }
            return {
                assert: function(n, p, q, r) {
                    if (!k(r))
                        throw d(n, {}, "Property must be a string.");
                    if ("read" === q) {
                        if (-1 < e.indexOf(r))
                            return
                    } else if ("write" === q) {
                        if (-1 < f.indexOf(r))
                            return
                    } else
                        throw d(n, {}, "Operation must be either 'read' or 'write', was " + q);
                    throw d(n, {}, "Prohibited " + q + " on " + p.tagName + " property " + r + ".");
                },
                M: a
            }
        })
    }();

    var jH = {};
    jH.dataLayer = li;
    jH.callback = function(a) {
        bi.hasOwnProperty(a) && Ga(bi[a]) && bi[a]();
        delete bi[a]
    }
    ;
    jH.bootstrap = 0;
    jH._spx = !1;
    function kH() {
        Lh[gl()] = Lh[gl()] || jH;
        S(77) || hl(!0) && (Lh["ctid_" + hl(!0)] = jH);
        ml();
        rl() || m(sl(), function(a, b) {
            Xs(a, b.transportUrl, b.context);
            N(92)
        });
        Ya(ci, Z.o);
        Xe = nf
    }
    (function(a) {
        function b() {
            l = G.documentElement.getAttribute("data-tag-assistant-present");
            Mw(l) && (h = g.vk)
        }
        if (!z["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (G.referrer) {
                var d = bj(G.referrer);
                c = "cct.google" === Zi(d, "host")
            }
            if (!c) {
                var e = ym("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (z["__TAGGY_INSTALLED"] = !0,
            pc("https://cct.google/taggy/agent.js"))
        }
        if (Xh)
            a();
        else {
            var f = function(u) {
                var v = "GTM"
                  , w = "GTM";
                Rh ? (v = "OGT",
                w = "GTAG") : Xh && (w = v = "OPT");
                var x = z["google.tagmanager.debugui2.queue"];
                x || (x = [],
                z["google.tagmanager.debugui2.queue"] = x,
                pc("https://" + Kh.Ze + "/debug/bootstrap?id=" + rf.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + bn()));
                var y = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: jc,
                        containerProduct: v,
                        debug: !1,
                        id: rf.ctid,
                        destinations: dl()
                    }
                };
                y.data.resume = function() {
                    a()
                }
                ;
                Kh.bk && (y.data.initialPublish = !0);
                x.push(y)
            }
              , g = {
                Jm: 1,
                wk: 2,
                Hk: 3,
                ek: 4,
                vk: 5
            }
              , h = void 0
              , l = void 0
              , n = $i(z.location, "query", !1, void 0, "gtm_debug");
            Mw(n) && (h = g.wk);
            if (!h && G.referrer) {
                var p = bj(G.referrer);
                "tagassistant.google.com" === Zi(p, "host") && (h = g.Hk)
            }
            if (!h) {
                var q = ym("__TAG_ASSISTANT");
                q.length && q[0].length && (h = g.ek)
            }
            h || b();
            if (!h && Nw(l)) {
                var r = function() {
                    if (t)
                        return !0;
                    t = !0;
                    b();
                    h && jc ? f(h) : a()
                }
                  , t = !1;
                tc(G, "TADebugSignal", function() {
                    r()
                }, !1);
                z.setTimeout(function() {
                    r()
                }, 200)
            } else
                h && jc ? f(h) : a()
        }
    }
    )(function() {
        kl();
        S(32) && is();
        dk().m();
        Nn();
        if (S(76) ? nl() : hl(!0) ? Lh["ctid_" + hl(!0)] : Lh[gl()]) {
            gv();
        } else {
            (S(7) || S(8) || S(23) || S(20)) && eo();
            We();
            Qe = Z;
            Re = xy;
            vf = new uf;
            NF();
            kH();
            Tk();
            Lw();
            zt();
            $v = !1;
            "complete" === G.readyState ? bw() : tc(z, "load", bw);
            Al && (vl(Nl),
            z.setInterval(Ml, 864E5));
            vl(By);
            vl(au);
            vl(Cy);
            vl(wv);
            vl(lu);
            vl(lt);
            vl(Sn);
            vl(jt);
            vl(hu);
            vl(Ay);
            S(63) && vl(du);
            hx();
            si(1);
            S(74) && hv();
            ai = Va();
            jH.bootstrap = ai;
            S(32) && js()
        }
    });

}
)()
