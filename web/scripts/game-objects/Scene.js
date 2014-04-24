define(function (require) {
    'use strict';

    var GameObject = require('game-objects/GameObject');
    var template = require('text!templates/scene.html');


    function Scene () {
        GameObject.call(this);

    }
    Scene.prototype = new GameObject();
    Scene.prototype.constructor = Scene;


    Scene.prototype.tagName = 'scene';
    Scene.prototype.template = template;


    return Scene;
});