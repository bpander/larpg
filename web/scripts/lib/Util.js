define(function (require) {
    'use strict';


    var Util = {};


    Util.log = function () {
        if (SETTINGS.LOG_CONSOLE) {
            console.log.apply(console, arguments);
        }
    };


    return Util;
});