define(function (require) {
    'use strict';

    var template = require('text!templates/rig.html');


    function Rig () {

        this.element = document.createElement('rig');

        this.shadow = _createShadow(this.element, template);

    }


    var _createShadow = function (element, html) {
        var shadow = element.webkitCreateShadowRoot();
        shadow.innerHTML = html;
        return shadow;
    };


    return Rig;
});