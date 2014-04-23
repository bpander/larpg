define(function (require) {
    'use strict';

    var template = require('text!templates/rig.html');
    var $ = require('jquery');
    require('jquery-transit');


    function Rig () {

        this.element = document.createElement('rig');

        this.shadow = _createShadow(this.element, template);

    }


    var _createShadow = function (element, html) {
        var shadow = element.webkitCreateShadowRoot();
        shadow.innerHTML = html;
        return shadow;
    };


    Rig.prototype.attack = function () {
        var $joint_shoulder_right = $(this.shadow.querySelector('#joint_shoulder_right'));
        var $joint_elbow_right = $(this.shadow.querySelector('#joint_elbow_right'));
        $joint_shoulder_right.transition({ rotate: -20 }, 400);
        $joint_elbow_right.transition({ rotate: -80 }, 400);
        $joint_shoulder_right.transition({ rotate: 40 }, 200);
        $joint_elbow_right.transition({ rotate: -40 }, 200);
    };


    return Rig;
});