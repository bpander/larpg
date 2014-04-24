define(function (require) {
    'use strict';

    var Debug = require('game-objects/Debug');
    var Tank = require('game-objects/actors/Tank');
    var Scene = require('game-objects/scenes/Scene');


    function CharacterDebugScene () {
        Scene.call(this);

    }
    CharacterDebugScene.prototype = new Scene();
    CharacterDebugScene.prototype.constructor = CharacterDebugScene;


    var CONFIG = {
        characters: [{
            constructor: Tank,
            animations: [ 'slash', 'stab' ]
        },
        {
            constructor: Tank,
            animations: [ 'slash', 'stab' ]
        }
    ]};


    CharacterDebugScene.prototype.start = function () {

        CONFIG.characters.forEach(function (character, i) {
            var instance = new (character.constructor)();
            var debug = new Debug();
            this.add(instance);
            instance.add(debug);
            instance.x(i * 200 + 140).y(140).pose(0);
            debug.x(-40).y(200);
            character.animations.forEach(function (animation) {
                debug.addButton(animation, function () {
                    instance[animation]();
                });
            });
        }, this);

        return this;
    };


    CharacterDebugScene.prototype.stop = function () {

        return this;
    };


    return CharacterDebugScene;
});