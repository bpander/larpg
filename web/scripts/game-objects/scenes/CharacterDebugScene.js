define(function (require) {
    'use strict';

    var Debug = require('game-objects/Debug');
    var Rig = require('game-objects/Rig');
    var Scene = require('game-objects/scenes/Scene');


    function CharacterDebugScene () {
        Scene.call(this);

        this.rig = null;

        this.debug = null;

    }
    CharacterDebugScene.prototype = new Scene();
    CharacterDebugScene.prototype.constructor = CharacterDebugScene;


    CharacterDebugScene.prototype.start = function () {
        var self = this;

        this.rig = new Rig();
        this.add(this.rig);
        this.rig.x(140).y(140).pose(0);

        this.debug = new Debug();
        this.add(this.debug);
        this.debug.addButton('Slash', function () {
            self.rig.slash();
        });
        this.debug.addButton('Stab', function () {
            self.rig.stab();
        });

        return this;
    };


    CharacterDebugScene.prototype.stop = function () {

        return this;
    };


    return CharacterDebugScene;
});