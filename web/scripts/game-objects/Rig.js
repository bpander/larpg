define(function (require) {
    'use strict';

    var GameObject = require('game-objects/GameObject');
    var template = require('text!templates/rig.html');
    var $ = require('jquery');
    require('jquery-transit');


    function Rig () {
        GameObject.call(this);

    }
    Rig.prototype = new GameObject();
    Rig.prototype.constructor = Rig;


    Rig.prototype.tagName = 'rig';

    Rig.prototype.template = template;


    Rig.prototype.pose = function () {
        this.shadow.querySelector('#joint_shoulder_right').style.webkitTransform = 'rotate(40deg)';
        this.shadow.querySelector('#joint_elbow_right').style.webkitTransform = 'rotate(-40deg)';

        this.shadow.querySelector('#joint_shoulder_left').style.webkitTransform = 'rotate(-200deg)';
        this.shadow.querySelector('#joint_elbow_left').style.webkitTransform = 'rotate(-10deg)';

        this.shadow.querySelector('#joint_torso').style.webkitTransform = 'rotate(85deg)';
        this.shadow.querySelector('#joint_knee_right').style.webkitTransform = 'rotate(40deg)';

        return this;
    };


    Rig.prototype.slash = function () {
        var $joint_shoulder_right = $(this.shadow.querySelector('#joint_shoulder_right'));
        var $joint_elbow_right = $(this.shadow.querySelector('#joint_elbow_right'));
        return $.when(
            $joint_shoulder_right.transition({ rotate: -20 }, 400),
            $joint_elbow_right.transition({ rotate: -80 }, 400),
            $joint_shoulder_right.transition({ rotate: 40 }, 200),
            $joint_elbow_right.transition({ rotate: -40 }, 200)
        );
    };


    Rig.prototype.stab = function () {

    };


    return Rig;
});