define(function (require) {
    'use strict';

    var Util = require('lib/Util');
    var Debug = require('game-objects/Debug');
    var Rig = require('game-objects/Rig');
    var Scene = require('game-objects/Scene');

    /**
     * Initial application setup. Runs once upon every page load.
     *
     * @class Game
     * @constructor
     */
    var Game = function () {

        this.scene = new Scene();

        this.debug = null;

    }


    /**
     * Initializes the application and kicks off loading of prerequisites.
     *
     * @method start
     */
    Game.prototype.start = function () {
        Util.log('Game starting...');

        this.addDebug();

        document.body.appendChild(this.scene.element);

        this.rig = new Rig();
        this.scene.add(this.rig);

        this.rig.x(140).y(140).pose();

        return this;
    };


    Game.prototype.addDebug = function () {
        var self = this;
        this.debug = new Debug();
        this.scene.add(this.debug);

        this.debug.addButton('Slash', function () {
            self.rig.slash();
        });

        this.debug.addButton('Stab', function () {
            self.rig.stab();
        });

        return this;
    };


    return Game;
});