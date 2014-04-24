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


    Rig.prototype.pose = function (speed) {
        speed = typeof speed === 'number' ? speed : 1;
        $(this.shadow.querySelector('#joint_shoulder_right')).transition({ rotate: 40 }, 400 * speed);
        $(this.shadow.querySelector('#joint_elbow_right')).transition({ rotate: -40 }, 400 * speed);

        $(this.shadow.querySelector('#joint_shoulder_left')).transition({ rotate: -200 }, 400 * speed);
        $(this.shadow.querySelector('#joint_elbow_left')).transition({ rotate: -10 }, 400 * speed);

        $(this.shadow.querySelector('#joint_torso')).transition({ rotate: 85 }, 400 * speed);
        $(this.shadow.querySelector('#joint_knee_right')).transition({ rotate: 40 }, 400 * speed);

        return this;
    };


    Rig.prototype.slash = function (speed) {
        speed = typeof speed === 'number' ? speed : 1;
        var self = this;
        var $joint_shoulder_right = $(this.shadow.querySelector('#joint_shoulder_right'));
        var $joint_elbow_right = $(this.shadow.querySelector('#joint_elbow_right'));
        return $.when(
            $joint_shoulder_right.transition({ rotate: -20 }, 400 * speed),
            $joint_elbow_right.transition({ rotate: -80 }, 400 * speed),
            $joint_shoulder_right.transition({ rotate: 50 }, 200 * speed),
            $joint_elbow_right.transition({ rotate: -40 }, 200 * speed)
        ).then(function () {
            self.pose();
        });
    };


    Rig.prototype.stab = function (speed) {
        speed = typeof speed === 'number' ? speed : 1;
        var self = this;
        var $joint_shoulder_right = $(this.shadow.querySelector('#joint_shoulder_right'));
        var $joint_elbow_right = $(this.shadow.querySelector('#joint_elbow_right'));
        $.when(
            $joint_shoulder_right.transition({ rotate: 100 }, 400 * speed),
            $joint_elbow_right.transition({ rotate: -110 }, 400 * speed),
            $joint_shoulder_right.transition({ rotate: 15 }, 200 * speed),
            $joint_elbow_right.transition({ rotate: -10 }, 200 * speed)
        ).then(function() {
            return self.pose();
        });
    };


    return Rig;
});